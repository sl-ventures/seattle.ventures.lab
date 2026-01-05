# Cloud Build Trigger
# Uncomment and configure when you're ready to set up CI/CD
# Update with your GitHub org/username and repository name

# resource "google_cloudbuild_trigger" "web" {
#   name        = "slventures-web-trigger"
#   description = "Build and deploy Seattle Venture Labs website"
#   filename    = "cloudbuild.yaml"
#
#   github {
#     owner = "your-github-org"  # Update with your GitHub org/username
#     name  = "slventures"        # Update with your repository name
#     
#     push {
#       branch = "^main$"
#     }
#   }
#
#   substitutions = {
#     _PROJECT_ID = var.project_id
#     _REGION     = var.region
#   }
#
#   depends_on = [
#     google_project_service.cloud_build_api,
#   ]
# }

# Cloud Build Service Account Permissions
resource "google_project_iam_member" "cloud_build_cloud_run" {
  project = var.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${data.google_project.project.number}@cloudbuild.gserviceaccount.com"
}

resource "google_project_iam_member" "cloud_build_storage" {
  project = var.project_id
  role    = "roles/storage.admin"
  member  = "serviceAccount:${data.google_project.project.number}@cloudbuild.gserviceaccount.com"
}

data "google_project" "project" {
  project_id = var.project_id
}

