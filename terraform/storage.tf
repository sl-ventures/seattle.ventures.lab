# Random suffix for bucket name to ensure uniqueness
resource "random_id" "bucket_suffix" {
  byte_length = 4
}

# GCS Bucket for Terraform State
resource "google_storage_bucket" "terraform_state" {
  name          = var.terraform_state_bucket_name != "" ? var.terraform_state_bucket_name : "${var.project_id}-terraform-state-${random_id.bucket_suffix.hex}"
  location      = var.region
  force_destroy = false

  versioning {
    enabled = true
  }

  lifecycle_rule {
    action {
      type = "Delete"
    }
    condition {
      num_newer_versions = 5
    }
  }

  uniform_bucket_level_access = true
}

# Random suffix for Cloud Build artifacts bucket
resource "random_id" "artifacts_bucket_suffix" {
  byte_length = 4
}

# GCS Bucket for Cloud Build artifacts (optional)
resource "google_storage_bucket" "cloud_build_artifacts" {
  name          = "${var.project_id}-cloud-build-artifacts-${random_id.artifacts_bucket_suffix.hex}"
  location      = var.region
  force_destroy = false

  uniform_bucket_level_access = true
}

