variable "project_id" {
  description = "The GCP project ID"
  type        = string
  default     = "slventures"
}

variable "region" {
  description = "The GCP region"
  type        = string
  default     = "us-central1"
}

variable "environment" {
  description = "Environment name (dev, staging, prod)"
  type        = string
  default     = "prod"
}

variable "cloud_run_service_name" {
  description = "Name of the Cloud Run service"
  type        = string
  default     = "slventures-web"
}

variable "cloud_run_min_instances" {
  description = "Minimum number of Cloud Run instances"
  type        = number
  default     = 0
}

variable "cloud_run_max_instances" {
  description = "Maximum number of Cloud Run instances"
  type        = number
  default     = 10
}

variable "cloud_run_memory" {
  description = "Memory allocation for Cloud Run service"
  type        = string
  default     = "512Mi"
}

variable "cloud_run_cpu" {
  description = "CPU allocation for Cloud Run service"
  type        = string
  default     = "1"
}

variable "domain_name" {
  description = "Custom domain name for the service"
  type        = string
  default     = ""
}

variable "terraform_state_bucket_name" {
  description = "Name for the Terraform state bucket (must be globally unique)"
  type        = string
  default     = ""
}

variable "cloud_run_image_tag" {
  description = "Docker image tag for Cloud Run service (e.g., 'latest', 'v1.0.0', or commit SHA). Image must be built and pushed to GCR before deploying."
  type        = string
  default     = "latest"
}

