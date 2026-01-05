terraform {
  required_version = ">= 1.0"
  
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.1"
    }
  }

  # Backend configuration
  # IMPORTANT: Create the state bucket BEFORE running terraform init
  # Option 1: Create manually: gsutil mb -p slventures -l us-central1 gs://slventures-terraform-state-XXXXX
  # Option 2: Use backend config: terraform init -backend-config="bucket=your-bucket-name"
  backend "gcs" {
    bucket = "slventures-terraform-state"  # Update this or use -backend-config flag
    prefix = "terraform/state"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

