# Terraform Infrastructure for Seattle Venture Labs

This directory contains Terraform configuration for deploying the Seattle Venture Labs website to Google Cloud Platform.

## Prerequisites

1. **Google Cloud SDK** installed and configured
2. **Terraform** >= 1.0 installed
3. **GCP Project** with billing enabled
4. **Service Account** with appropriate permissions

## Setup

### 1. Authenticate with Google Cloud

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

### 3. Create Terraform State Bucket

**Option A: Create bucket manually (recommended for first-time setup)**

```bash
# Create a unique bucket name (GCS bucket names must be globally unique)
BUCKET_NAME="slventures-terraform-state-$(openssl rand -hex 4)"
gsutil mb -p slventures -l us-central1 gs://$BUCKET_NAME
gsutil versioning set on gs://$BUCKET_NAME

# Update backend config in main.tf with your bucket name
# Or use: terraform init -backend-config="bucket=$BUCKET_NAME"
```

**Option B: Let Terraform create it (requires two-step process)**

1. First, initialize with local backend:
   ```bash
   terraform init -backend=false
   ```

2. Apply to create the bucket:
   ```bash
   terraform apply -target=google_storage_bucket.terraform_state
   ```

3. Get the bucket name from output, then update `main.tf` backend config and reinitialize:
   ```bash
   terraform init -migrate-state
   ```

### 4. Initialize Terraform

```bash
cd terraform
terraform init
```

### 5. Build and Push Docker Image (REQUIRED)

**IMPORTANT**: You must build and push the Docker image to GCR before deploying the Cloud Run service.

```bash
# From the project root directory
gcloud builds submit --tag gcr.io/slventures/slventures-web:latest

# Or use the Makefile
make gcloud-build
```

### 6. Plan and Apply

```bash
# Review changes
terraform plan

# Apply infrastructure
terraform apply
```

**Note**: If the image doesn't exist yet, Terraform will still create the Cloud Run service but it will be in a failed state. After building and pushing the image, you can either:
- Run `terraform apply` again (the lifecycle block will ignore the image change)
- Or manually update the service via Cloud Console/CLI
- Or use Cloud Build to deploy (which will update the service automatically)

## Configuration

Edit `variables.tf` or create `terraform.tfvars` to customize:

```hcl
project_id = "slventures"
region     = "us-central1"
environment = "prod"
domain_name = "www.seattleventurelabs.com"
cloud_run_image_tag = "latest"  # Must match an existing image in GCR
```

## Deployment Workflow

### Option 1: Infrastructure First, Then Application (Recommended)

1. **Deploy Infrastructure** (without image):
   ```bash
   terraform apply -target=google_project_service.cloud_run_api
   terraform apply
   ```
   The Cloud Run service will be created but may show as failed until image is deployed.

2. **Build and Deploy Application**:
   ```bash
   # Build and push image
   gcloud builds submit --tag gcr.io/slventures/slventures-web:latest
   
   # Deploy to Cloud Run (updates existing service)
   gcloud run deploy slventures-web \
     --image gcr.io/slventures/slventures-web:latest \
     --region us-central1 \
     --platform managed
   ```

### Option 2: Build Image First, Then Infrastructure

1. **Build image first**:
   ```bash
   gcloud builds submit --tag gcr.io/slventures/slventures-web:latest
   ```

2. **Deploy infrastructure**:
   ```bash
   terraform apply
   ```

### Option 3: Use Cloud Build (Fully Automated)

Use the `cloudbuild.yaml` which builds and deploys automatically:
```bash
gcloud builds submit --config cloudbuild.yaml
```

## Outputs

After applying, Terraform will output:
- Cloud Run service URL
- Service name and location
- Terraform state bucket name

## Cloud Build Setup

1. **Connect Repository** (if using GitHub):
   - Go to Cloud Build > Triggers
   - Connect your GitHub repository
   - Update `terraform/cloud_build.tf` with your GitHub org/repo

2. **Manual Build**:
   ```bash
   gcloud builds submit --config cloudbuild.yaml
   ```

## Custom Domain

To add a custom domain:

1. Update `domain_name` variable in `terraform.tfvars`
2. Run `terraform apply`
3. Follow DNS setup instructions from Terraform output

## Troubleshooting

### Error: Image 'gcr.io/slventures/slventures-web:latest' not found

This error occurs when Terraform tries to create the Cloud Run service but the Docker image doesn't exist yet.

**Solution 1**: Build the image first:
```bash
gcloud builds submit --tag gcr.io/slventures/slventures-web:latest
terraform apply
```

**Solution 2**: Create infrastructure without the service, then deploy separately:
```bash
# Create everything except Cloud Run service
terraform apply -target=google_project_service.cloud_run_api \
  -target=google_storage_bucket.terraform_state \
  -target=google_storage_bucket.cloud_build_artifacts

# Build and deploy image
gcloud builds submit --tag gcr.io/slventures/slventures-web:latest
gcloud run deploy slventures-web \
  --image gcr.io/slventures/slventures-web:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated

# Then create the service via Terraform (it will update the existing one)
terraform apply
```

**Solution 3**: Use Cloud Build (handles everything automatically):
```bash
gcloud builds submit --config cloudbuild.yaml
```

## Cleanup

To destroy all resources:

```bash
terraform destroy
```

**Warning**: This will delete all infrastructure including Cloud Run service and storage buckets.

