# Seattle Venture Labs Website

Official website for Seattle Venture Labs (SVL) - a gateway for high-potential international founders entering the US market. We help international startups scale to American market through operational co-founder support, enterprise partnerships, and access to Silicon Valley capital.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with Design System
- **Maps:** React Leaflet for interactive world map
- **Deployment:** Google Cloud Run (via Cloud Build)
- **Infrastructure:** Terraform (GCP)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (for containerized development)

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker Development

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build and run manually
docker build -t slventures-web .
docker run -p 3000:3000 slventures-web
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
slventures/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── admissions/        # Admissions page
│   ├── community/         # Community page
│   ├── partners/          # Partners page
│   ├── portfolio/         # Portfolio page
│   ├── program/           # Program tracks page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Button.tsx        # Button component
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Site header
│   └── InteractiveMap.tsx # World map component
├── styles/               # Global styles
│   └── globals.css       # Design system variables
├── public/               # Static assets
│   └── images/          # Image assets
├── terraform/            # Infrastructure as code
├── cloudbuild.yaml       # Cloud Build configuration
├── Dockerfile           # Container image definition
└── docker-compose.yml   # Local development setup
```

## Pages

- **Home** (`/`) - Hero section with interactive map, value proposition, and program overview
- **Program** (`/program`) - Detailed track information (Launchpad, ProductLab, Pitch & Win)
- **Admissions** (`/admissions`) - Track selection, requirements, timeline, and application process
- **About** (`/about`) - Mission, Seattle advantage, team, and differentiators
- **Partners** (`/partners`) - Partner network and integrations
- **Community** (`/community`) - SVL Connect forum, events, and alumni network
- **Portfolio** (`/portfolio`) - Portfolio companies (coming soon)

## Design System

Based on a design system with adaptations for Seattle Venture Labs branding:

- **Colors:** Primary green (`#22C55E`), grayscale palette
- **Typography:** System font stack with clear hierarchy
- **Spacing:** Consistent spacing scale using CSS variables
- **Components:** Modular, reusable components with CSS Modules

CSS variables are defined in `styles/globals.css`:

- `--color-primary` - Brand primary color
- `--space-*` - Spacing scale
- `--font-size-*` - Typography scale
- `--radius-*` - Border radius values
- `--shadow-*` - Box shadow definitions

## Deployment

The website is deployed to **Google Cloud Run** using Cloud Build. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

```bash
# Using Cloud Build (recommended)
gcloud builds submit --config cloudbuild.yaml

# Or using Makefile
make deploy
```

### Infrastructure

Infrastructure is managed with Terraform. See [terraform/README.md](./terraform/README.md) for infrastructure setup and management.

## Development Workflow

1. **Make changes** - Edit files in `app/` or `components/`
2. **Test locally** - Run `npm run dev` to see changes
3. **Build** - Run `npm run build` to verify production build
4. **Deploy** - Push to main branch or run Cloud Build manually

## Key Features

- **Responsive Design** - Mobile-first, works on all devices
- **Interactive Map** - World map showing global founder origins
- **SEO Optimized** - Next.js App Router with metadata
- **Type Safe** - Full TypeScript coverage
- **Modular Architecture** - Reusable components and styles
- **Performance** - Optimized images and code splitting

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev` and `npm run build`
4. Submit a pull request

## License

Private - Seattle Venture Labs

## Support

For questions or issues:
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Check [terraform/README.md](./terraform/README.md) for infrastructure questions
- Contact the development team