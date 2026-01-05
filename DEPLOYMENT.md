# Deployment Guide - Seattle Venture Labs

This guide covers deploying the Seattle Venture Labs website to Google Cloud Platform.

## Quick Start

### Local Development with Docker

```bash
# Build and run locally
docker-compose up --build

# Or build manually
docker build -t slventures-web .
docker run -p 3000:3000 slventures-web
```

### Deploy to Google Cloud

#### Option 1: Using Cloud Build (Recommended)

1. **Initial Setup** (one-time):
   ```bash
   # Set project
   gcloud config set project slventures
   
   # Enable APIs
   gcloud services enable cloudbuild.googleapis.com run.googleapis.com
   
   # Setup Terraform infrastructure
   cd terraform
   terraform init
   terraform apply
   ```

2. **Deploy via Cloud Build**:
   ```bash
   # Manual trigger
   gcloud builds submit --config cloudbuild.yaml
   
   # Or push to main branch (if trigger is configured)
   git push origin main
   ```

#### Option 2: Manual Deployment

```bash
# Build and push image
gcloud builds submit --tag gcr.io/slventures/slventures-web

# Deploy to Cloud Run
gcloud run deploy slventures-web \
  --image gcr.io/slventures/slventures-web \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1
```

## Infrastructure Setup

### Using Terraform

1. **Initialize Terraform**:
   ```bash
   cd terraform
   terraform init
   ```

2. **Review Plan**:
   ```bash
   terraform plan
   ```

3. **Apply Infrastructure**:
   ```bash
   terraform apply
   ```

This will create:
- Cloud Run service
- Cloud Build trigger
- Storage buckets
- IAM permissions
- Required GCP APIs

### Manual Setup

If not using Terraform:

```bash
# Enable APIs
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  containerregistry.googleapis.com

# Create Cloud Run service
gcloud run deploy slventures-web \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Environment Variables

For production, set environment variables in Cloud Run:

```bash
gcloud run services update slventures-web \
  --update-env-vars NODE_ENV=production,PORT=3000 \
  --region us-central1
```

## Custom Domain

1. **Map Domain in Cloud Run**:
   ```bash
   gcloud run domain-mappings create \
     --service slventures-web \
     --domain www.seattleventurelabs.com \
     --region us-central1
   ```

2. **Update DNS**:
   - Add CNAME record pointing to the provided Cloud Run domain
   - Wait for SSL certificate provisioning (can take up to 1 hour)

## Monitoring

View logs:
```bash
gcloud run services logs read slventures-web --region us-central1
```

View metrics:
- Go to Cloud Console > Cloud Run > slventures-web > Metrics

## CI/CD Setup

### GitHub Actions (Alternative)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloud Run

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: google-github-actions/setup-gcloud@v1
        with:
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          project_id: slventures
      - run: gcloud builds submit --config cloudbuild.yaml
```

## Troubleshooting

### Build Fails
- Check Cloud Build logs: `gcloud builds list`
- Verify Dockerfile syntax
- Ensure `next.config.js` has `output: 'standalone'`

### Service Won't Start
- Check Cloud Run logs
- Verify environment variables
- Check resource limits (memory/CPU)

### Domain Not Working
- Verify DNS records
- Check domain mapping status in Cloud Console
- Wait for SSL certificate provisioning

## Cost Optimization

- **Min instances**: Set to 0 for cost savings (cold starts)
- **Max instances**: Adjust based on traffic
- **Memory**: Start with 512Mi, increase if needed
- **CPU**: Use 1 CPU for most workloads

## Security

- Cloud Run service is publicly accessible (as configured)
- For authentication, add Cloud IAM or Cloud Armor
- Use secrets for sensitive environment variables:
  ```bash
  gcloud run services update slventures-web \
    --update-secrets DATABASE_URL=database-url:latest \
    --region us-central1
  ```

