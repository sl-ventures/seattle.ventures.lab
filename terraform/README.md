# Terraform Infrastructure for Seattle Venture Labs

This directory contains Terraform configuration for deploying the Seattle Venture Labs website to Google Cloud Platform using Cloud Run.

## Overview

The Terraform configuration manages:
- **Cloud Run Service** - Containerized Next.js application
- **GCP APIs** - Required service APIs (Cloud Run, Cloud Build, Container Registry, etc.)
- **Storage Buckets** - Terraform state and Cloud Build artifacts
- **IAM Policies** - Public access configuration for Cloud Run
- **Custom Domain** (optional) - Domain mapping for Cloud Run service

## Prerequisites

1. **Google Cloud SDK** (`gcloud`) installed and configured
2. **Terraform** >= 1.0 installed
3. **GCP Project** with billing enabled
4. **Authenticated** with GCP (`gcloud auth login`)

## Quick Start

### 1. Authenticate and Set Project

```bash
gcloud auth login
gcloud config set project slventures
```

### 2. Enable Required APIs

```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  containerregistry.googleapis.com \
  artifactregistry.googleapis.com \
  iam.googleapis.com \
  storage-api.googleapis.com
```

Or let Terraform enable them automatically (recommended).

### 3. Configure Terraform

Copy the example variables file and update as needed:

```bash
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` to customize:
- `project_id` - Your GCP project ID (default: `slventures`)
- `region` - GCP region (default: `us-central1`)
- `cloud_run_image_tag` - Docker image tag (default: `latest`)

### 4. Initialize Terraform

```bash
cd terraform
terraform init
```

**Note**: If using a remote state bucket, ensure it exists first or let Terraform create it (see [State Management](#state-management) below).

### 5. Deploy Infrastructure

**Option A: Using Cloud Build (Recommended)**

This builds the Docker image and deploys to Cloud Run automatically:

```bash
# From project root
cd /Users/jaeheesong/projects/node/slventures
gcloud builds submit --config cloudbuild.yaml
```

**Option B: Manual Deployment**

1. **Build and push Docker image first**:
   ```bash
   # From project root
   gcloud builds submit --tag gcr.io/slventures/slventures-web:latest
   ```

2. **Deploy infrastructure**:
   ```bash
   cd terraform
   terraform plan
   terraform apply
   ```

### 6. Get Service URL

After deployment, Terraform will output the Cloud Run service URL:

```bash
terraform output cloud_run_service_url
```

## Configuration

### Variables

Key variables in `variables.tf`:

| Variable | Description | Default |
|----------|-------------|---------|
| `project_id` | GCP project ID | `slventures` |
| `region` | GCP region | `us-central1` |
| `cloud_run_service_name` | Cloud Run service name | `slventures-web` |
| `cloud_run_min_instances` | Minimum instances | `0` |
| `cloud_run_max_instances` | Maximum instances | `10` |
| `cloud_run_memory` | Memory allocation | `512Mi` |
| `cloud_run_cpu` | CPU allocation | `1` |
| `cloud_run_image_tag` | Docker image tag | `latest` |
| `domain_name` | Custom domain (optional) | `""` |
| `terraform_state_bucket_name` | State bucket name (optional) | `""` |

### Region Mismatch

**Important**: The `cloudbuild.yaml` in the project root deploys to `us-west1`, while Terraform defaults to `us-central1`. To align:

1. **Option 1**: Update `terraform.tfvars`:
   ```hcl
   region = "us-west1"
   ```

2. **Option 2**: Update `cloudbuild.yaml` region to match Terraform default.

## State Management

Terraform state is stored in a GCS bucket for team collaboration and state locking.

### Option 1: Let Terraform Create the Bucket

1. First, initialize without backend (local state):
   ```bash
   terraform init -backend=false
   ```

2. Apply to create the bucket:
   ```bash
   terraform apply -target=google_storage_bucket.terraform_state
   ```

3. Get the bucket name from output, update `main.tf` backend config, then reinitialize:
   ```bash
   # Update main.tf backend bucket name, then:
   terraform init -migrate-state
   ```

### Option 2: Create Bucket Manually (Recommended)

```bash
# Create a unique bucket name (globally unique)
BUCKET_NAME="slventures-terraform-state-$(openssl rand -hex 4)"
gsutil mb -p slventures -l us-central1 gs://$BUCKET_NAME
gsutil versioning set on gs://$BUCKET_NAME

# Update main.tf backend config with your bucket name
# Or use: terraform init -backend-config="bucket=$BUCKET_NAME"
```

### Option 3: Use Variable

Set `terraform_state_bucket_name` in `terraform.tfvars` before first `terraform apply`.

## Deployment Workflows

### Workflow 1: Infrastructure First (Terraform-managed)

Best for infrastructure-as-code workflows.

```bash
# 1. Deploy infrastructure (creates Cloud Run service)
cd terraform
terraform apply

# 2. Build and push Docker image
cd ..
gcloud builds submit --tag gcr.io/slventures/slventures-web:latest

# 3. Update Cloud Run service with new image
gcloud run deploy slventures-web \
  --image gcr.io/slventures/slventures-web:latest \
  --region us-central1 \
  --platform managed
```

### Workflow 2: Cloud Build (Fully Automated)

Best for CI/CD pipelines - handles everything automatically.

```bash
# From project root
gcloud builds submit --config cloudbuild.yaml
```

This will:
1. Build Docker image
2. Push to Container Registry
3. Deploy to Cloud Run (updates existing service if it exists)

### Workflow 3: Hybrid (Infrastructure via Terraform, App via Cloud Build)

Infrastructure managed by Terraform, application updates via Cloud Build.

```bash
# Initial setup
cd terraform
terraform apply

# Application updates
cd ..
gcloud builds submit --config cloudbuild.yaml
```

**Note**: Terraform's `lifecycle.ignore_changes` on the image ensures it won't conflict with Cloud Build deployments.

## Custom Domain

To add a custom domain:

1. **Update `terraform.tfvars`**:
   ```hcl
   domain_name = "www.seattleventurelabs.com"
   ```

2. **Apply Terraform**:
   ```bash
   terraform apply
   ```

3. **Update DNS**: Follow the instructions in Terraform output to add the required DNS records.

4. **Wait for SSL**: Google will provision an SSL certificate automatically (can take up to 1 hour).

## Outputs

After applying, Terraform outputs:

- `cloud_run_service_url` - Public URL of the Cloud Run service
- `cloud_run_service_name` - Name of the service
- `cloud_run_service_location` - Region where service is deployed
- `terraform_state_bucket` - Name of the state bucket
- `terraform_state_bucket_url` - GCS URL of the state bucket

View outputs:
```bash
terraform output
```

## Updating the Application

### Using Cloud Build (Recommended)

```bash
# From project root
gcloud builds submit --config cloudbuild.yaml
```

### Manual Update

```bash
# Build and push new image
gcloud builds submit --tag gcr.io/slventures/slventures-web:latest

# Deploy to Cloud Run
gcloud run deploy slventures-web \
  --image gcr.io/slventures/slventures-web:latest \
  --region us-central1 \
  --platform managed
```

### Terraform Update (Not Recommended)

The image is ignored by Terraform's lifecycle block. To update via Terraform, you would need to remove that block, which conflicts with Cloud Build workflow.

## Troubleshooting

### Error: Image 'gcr.io/.../slventures-web:latest' not found

**Cause**: Cloud Run service is being created before the Docker image exists.

**Solution**: Build and push the image first:
```bash
gcloud builds submit --tag gcr.io/slventures/slventures-web:latest
```

Then run `terraform apply` again.

### Error: Backend bucket does not exist

**Cause**: Terraform is trying to use a remote state bucket that doesn't exist.

**Solution**: Create the bucket manually (see [State Management](#state-management)) or initialize with `-backend=false` first.

### Service Deployed But Not Accessible

**Check**:
1. IAM policy allows public access (included in `cloud_run.tf`)
2. Service is in a healthy state: `gcloud run services describe slventures-web --region us-central1`
3. Check logs: `gcloud run services logs read slventures-web --region us-central1`

### Region Mismatch Between cloudbuild.yaml and Terraform

**Cause**: `cloudbuild.yaml` uses `us-west1`, Terraform uses `us-central1`.

**Solution**: Update `terraform.tfvars` to set `region = "us-west1"` or update `cloudbuild.yaml` region.

### Terraform Plan Shows Image Changes When It Shouldn't

**Cause**: The lifecycle block might not be working correctly.

**Solution**: Verify `lifecycle.ignore_changes` in `cloud_run.tf` includes the image. The image is intentionally ignored so Cloud Build can update it independently.

## Monitoring and Logs

### View Logs

```bash
gcloud run services logs read slventures-web --region us-central1 --limit 50
```

### View Metrics

Visit [Cloud Console](https://console.cloud.google.com/run) > Cloud Run > slventures-web > Metrics

### Check Service Status

```bash
gcloud run services describe slventures-web --region us-central1
```

## Cost Optimization

Current configuration (cost-effective for low traffic):

- **Min instances**: `0` (cold starts enabled)
- **Max instances**: `10` (auto-scales as needed)
- **Memory**: `512Mi` (sufficient for Next.js)
- **CPU**: `1` (shared CPU)

To reduce cold starts (increase cost):
- Set `cloud_run_min_instances = 1` in `terraform.tfvars`

To reduce costs further:
- Lower `cloud_run_max_instances` based on actual traffic patterns

## Cleanup

### Destroy All Resources

**Warning**: This will delete all infrastructure including the Cloud Run service and storage buckets.

```bash
cd terraform
terraform destroy
```

### Destroy Specific Resources

```bash
# Destroy Cloud Run service only
terraform destroy -target=google_cloud_run_service.web

# Destroy storage buckets only
terraform destroy -target=google_storage_bucket.terraform_state
```

## Security

- **Public Access**: Cloud Run service is publicly accessible (configured via IAM)
- **State Bucket**: Terraform state bucket has versioning enabled but is not encrypted by default
- **Secrets**: For production secrets, use [Secret Manager](https://cloud.google.com/secret-manager) instead of environment variables

To add authentication:
- Use Cloud IAM to restrict access
- Implement Cloud Armor for DDoS protection
- Use Cloud Endpoints for API authentication

## CI/CD Integration

### Cloud Build Triggers

Set up automatic deployments on git push:

1. Connect repository in Cloud Build console
2. Create trigger pointing to `cloudbuild.yaml`
3. Configure trigger conditions (branch, path, etc.)

### GitHub Actions (Alternative)

See `DEPLOYMENT.md` in project root for GitHub Actions workflow example.

## File Structure

```
terraform/
├── main.tf              # Provider and backend configuration
├── variables.tf         # Input variables
├── outputs.tf           # Output values
├── services.tf          # GCP API enablement
├── storage.tf           # Storage buckets (state, artifacts)
├── cloud_run.tf         # Cloud Run service and IAM
├── cloud_build.tf       # Cloud Build triggers (optional)
├── terraform.tfvars     # Variable values (gitignored)
├── terraform.tfvars.example  # Example variables
└── README.md           # This file
```

## Support

For issues or questions:
1. Check [Troubleshooting](#troubleshooting) section above
2. Review Cloud Run logs: `gcloud run services logs read slventures-web`
3. Check Terraform state: `terraform show`
4. Review GCP Console for service status

## References

- [Terraform Google Provider](https://registry.terraform.io/providers/hashicorp/google/latest/docs)
- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Cloud Build Documentation](https://cloud.google.com/build/docs)
- [Terraform State Backends](https://www.terraform.io/docs/language/settings/backends/gcs.html)