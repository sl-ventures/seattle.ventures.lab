.PHONY: help build run deploy terraform-init terraform-plan terraform-apply terraform-destroy docker-build docker-run

# Variables
PROJECT_ID = slventures
REGION = us-central1
SERVICE_NAME = slventures-web
IMAGE_NAME = gcr.io/$(PROJECT_ID)/$(SERVICE_NAME)

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s %s\n", $$1, $$2}'

# Docker Commands
docker-build: ## Build Docker image locally
	docker build -t $(SERVICE_NAME):latest .

docker-run: ## Run Docker container locally
	docker run -p 3000:3000 $(SERVICE_NAME):latest

docker-compose-up: ## Start services with docker-compose
	docker-compose up --build

docker-compose-down: ## Stop docker-compose services
	docker-compose down

# Google Cloud Commands
gcloud-build: ## Build and push image to GCR
	gcloud builds submit --tag $(IMAGE_NAME):latest

gcloud-deploy: ## Deploy to Cloud Run
	gcloud run deploy $(SERVICE_NAME) \
		--image $(IMAGE_NAME):latest \
		--platform managed \
		--region $(REGION) \
		--allow-unauthenticated \
		--memory 512Mi \
		--cpu 1

gcloud-build-submit: ## Submit build using cloudbuild.yaml
	gcloud builds submit --config cloudbuild.yaml

gcloud-logs: ## View Cloud Run logs
	gcloud run services logs read $(SERVICE_NAME) --region $(REGION)

# Terraform Commands
terraform-init: ## Initialize Terraform
	cd terraform && terraform init

terraform-plan: ## Plan Terraform changes
	cd terraform && terraform plan

terraform-apply: ## Apply Terraform changes
	cd terraform && terraform apply

terraform-destroy: ## Destroy Terraform infrastructure
	cd terraform && terraform destroy

terraform-output: ## Show Terraform outputs
	cd terraform && terraform output

# Development Commands
dev: ## Start development server
	npm run dev

build: ## Build Next.js application
	npm run build

start: ## Start production server
	npm start

lint: ## Run linter
	npm run lint

install: ## Install dependencies
	npm install

# Setup Commands
setup-gcp: ## Enable required GCP APIs
	gcloud services enable \
		run.googleapis.com \
		cloudbuild.googleapis.com \
		containerregistry.googleapis.com \
		artifactregistry.googleapis.com \
		iam.googleapis.com \
		storage-api.googleapis.com

setup-terraform-bucket: ## Create Terraform state bucket
	gsutil mb -p $(PROJECT_ID) -l $(REGION) gs://$(PROJECT_ID)-terraform-state || true
	gsutil versioning set on gs://$(PROJECT_ID)-terraform-state

# Full Deployment
deploy: gcloud-build-submit ## Full deployment via Cloud Build

deploy-local: docker-build docker-run ## Build and run locally

deploy-infra: terraform-init terraform-apply ## Deploy infrastructure with Terraform

