# Cloud Run Service
resource "google_cloud_run_service" "web" {
  name     = var.cloud_run_service_name
  location = var.region

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/${var.cloud_run_service_name}:${var.cloud_run_image_tag}"
        
        ports {
          container_port = 3000
        }

        resources {
          limits = {
            cpu    = var.cloud_run_cpu
            memory = var.cloud_run_memory
          }
        }

        env {
          name  = "NODE_ENV"
          value = "production"
        }

        # PORT is automatically set by Cloud Run - do not set it manually
      }

      container_concurrency = 80
      timeout_seconds       = 300
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = tostring(var.cloud_run_min_instances)
        "autoscaling.knative.dev/maxScale" = tostring(var.cloud_run_max_instances)
        "run.googleapis.com/execution-environment" = "gen2"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  depends_on = [
    google_project_service.cloud_run_api,
  ]

  # Ignore image changes initially - image will be updated via Cloud Build
  lifecycle {
    ignore_changes = [
      template[0].spec[0].containers[0].image,
    ]
  }
}

# IAM Policy for Cloud Run (allow unauthenticated access)
resource "google_cloud_run_service_iam_member" "public_access" {
  service  = google_cloud_run_service.web.name
  location = google_cloud_run_service.web.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Custom Domain Mapping (optional)
resource "google_cloud_run_domain_mapping" "web" {
  count    = var.domain_name != "" ? 1 : 0
  name     = var.domain_name
  location = var.region

  metadata {
    namespace = var.project_id
  }

  spec {
    route_name = google_cloud_run_service.web.name
  }

  depends_on = [
    google_project_service.cloud_run_api,
  ]
}

