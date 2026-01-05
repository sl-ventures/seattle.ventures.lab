# UI Design Specification
## Based on Foothill Ventures Design System

**Version 1.0 | January 2025**

---

## 1. Design Overview

This specification captures the visual design system of Foothill Ventures, a technology-focused venture capital firm. The design emphasizes professionalism, clarity, and technical sophistication while maintaining warmth and approachability.

### 1.1 Design Philosophy

- **Minimalist & Clean:** Ample white space, clear hierarchy
- **Professional & Trustworthy:** Sophisticated color palette, refined typography
- **Technology-Forward:** Modern aesthetics, subtle animations
- **Human-Centered:** Approachable imagery, clear communication

---

## 2. Color Palette

### 2.1 Primary Colors

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| Primary Green | `#22C55E` | rgb(34, 197, 94) | CTAs, accents, active states, success indicators |
| Dark Green | `#166534` | rgb(22, 101, 52) | Hover states, emphasis |
| Black | `#000000` | rgb(0, 0, 0) | Primary text, headings |
| Dark Gray | `#1F2937` | rgb(31, 41, 55) | Secondary text, footer background |
| Medium Gray | `#6B7280` | rgb(107, 114, 128) | Body text, descriptions |
| Light Gray | `#F3F4F6` | rgb(243, 244, 246) | Section backgrounds, cards |
| Border Gray | `#E5E7EB` | rgb(229, 231, 235) | Borders, dividers |
| White | `#FFFFFF` | rgb(255, 255, 255) | Primary background |

### 2.2 Color Usage Guidelines

```css
:root {
  --color-primary: #22C55E;
  --color-primary-dark: #166534;
  --color-primary-light: #86EFAC;
  --color-black: #000000;
  --color-gray-900: #1F2937;
  --color-gray-600: #6B7280;
  --color-gray-400: #9CA3AF;
  --color-gray-200: #E5E7EB;
  --color-gray-100: #F3F4F6;
  --color-white: #FFFFFF;
}
```

---

## 3. Typography

### 3.1 Font Family

**Primary Font:** Inter (sans-serif)

**Fallback Stack:**
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### 3.2 Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Headline | 48-64px | 800 | 1.1 | -0.02em | Black |
| H1 | 36-48px | 700 | 1.2 | -0.02em | Black |
| H2 | 28-32px | 700 | 1.25 | -0.01em | Dark Gray |
| H3 | 20-24px | 600 | 1.3 | 0 | Dark Gray |
| H4 | 18-20px | 600 | 1.4 | 0 | Dark Gray |
| Body Large | 18px | 400 | 1.6 | 0 | Medium Gray |
| Body | 16px | 400 | 1.6 | 0 | Medium Gray |
| Body Small | 14px | 400 | 1.5 | 0 | Medium Gray |
| Caption | 12px | 400 | 1.4 | 0.01em | Gray |
| Button | 14-16px | 600 | 1 | 0.01em | Inherit |
| Nav Link | 16px | 600 | 1 | 0 | Black/White |
| Tag/Label | 12px | 500 | 1 | 0.05em | Gray |

### 3.3 Typography CSS

```css
:root {
  --font-family: 'Inter', system-ui, sans-serif;
  
  /* Fluid Typography */
  --font-size-hero: clamp(2.5rem, 5vw, 4rem);
  --font-size-h1: clamp(2rem, 4vw, 3rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2rem);
  --font-size-h3: clamp(1.25rem, 2vw, 1.5rem);
  --font-size-body-lg: 1.125rem;
  --font-size-body: 1rem;
  --font-size-body-sm: 0.875rem;
  --font-size-caption: 0.75rem;
  
  /* Line Heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (8-point grid)

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `space-1` | 0.25rem | 4px | Tight spacing, icon gaps |
| `space-2` | 0.5rem | 8px | Small gaps, inline elements |
| `space-3` | 0.75rem | 12px | Button padding (y-axis) |
| `space-4` | 1rem | 16px | Standard gap, card padding |
| `space-5` | 1.25rem | 20px | Medium component spacing |
| `space-6` | 1.5rem | 24px | Section internal spacing |
| `space-8` | 2rem | 32px | Component spacing |
| `space-10` | 2.5rem | 40px | Large gaps |
| `space-12` | 3rem | 48px | Large component gaps |
| `space-16` | 4rem | 64px | Section breaks |
| `space-20` | 5rem | 80px | Large section padding |
| `space-24` | 6rem | 96px | Hero section padding |
| `space-32` | 8rem | 128px | Extra large sections |

### 4.2 Grid System

```css
:root {
  --container-max: 1280px;
  --container-padding: clamp(1rem, 5vw, 4rem);
  --grid-columns: 12;
  --grid-gutter: 1.5rem;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}

.grid {
  display: grid;
  gap: var(--grid-gutter);
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
```

### 4.3 Section Spacing

| Section Type | Vertical Padding (Desktop) | Vertical Padding (Mobile) |
|--------------|---------------------------|---------------------------|
| Hero | 120px - 160px | 80px - 100px |
| Standard Section | 80px - 120px | 60px - 80px |
| Content Block | 40px - 60px | 32px - 48px |
| Card Internal | 24px - 32px | 20px - 24px |

---

## 5. Components

### 5.1 Navigation

#### Header Navigation

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: transparent;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
}

.header.scrolled {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-link {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-black);
  text-decoration: none;
  padding: 8px 16px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.active {
  color: var(--color-primary);
}
```

**Specs:**
- Logo: Left-aligned, SVG format, ~160px width
- Nav Links: Right-aligned, 32px horizontal spacing
- Mobile: Hamburger menu at 768px breakpoint

### 5.2 Buttons

| Variant | Background | Text | Border | Hover State |
|---------|------------|------|--------|-------------|
| Primary | `#22C55E` | White | None | `#16A34A` (darken) |
| Secondary | Transparent | `#22C55E` | 2px `#22C55E` | Fill green, white text |
| Ghost | Transparent | Black | None | Underline |
| Dark | `#1F2937` | White | None | `#374151` (lighten) |

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #16A34A;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: white;
}

.btn-ghost {
  background: transparent;
  color: var(--color-black);
  border: none;
  padding: 8px 0;
}

.btn-ghost:hover {
  text-decoration: underline;
}

.btn-dark {
  background: var(--color-gray-900);
  color: white;
  border: none;
}

.btn-dark:hover {
  background: #374151;
}

/* With Arrow Icon */
.btn-arrow::after {
  content: '→';
  transition: transform 0.2s ease;
}

.btn-arrow:hover::after {
  transform: translateX(4px);
}
```

### 5.3 Cards

#### Portfolio Card

```css
.card-portfolio {
  background: white;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card-portfolio:hover {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.card-portfolio-image {
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
}

.card-portfolio-content {
  padding: 24px;
}

.card-portfolio-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 8px;
}

.card-portfolio-description {
  font-size: 14px;
  color: var(--color-gray-600);
  line-height: 1.5;
}

.card-portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  background: var(--color-gray-100);
  border-radius: 9999px;
  color: var(--color-gray-600);
}
```

#### Team Member Card

```css
.card-team {
  text-align: center;
}

.card-team-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
}

.card-team-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 4px;
}

.card-team-title {
  font-size: 14px;
  color: var(--color-gray-600);
  margin-bottom: 12px;
}

.card-team-social {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.card-team-social a {
  color: var(--color-gray-400);
  transition: color 0.2s ease;
}

.card-team-social a:hover {
  color: var(--color-primary);
}
```

#### Stat Card

```css
.stat-card {
  text-align: center;
  padding: 24px;
}

.stat-value {
  font-size: 48px;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gray-600);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 6. Page Sections

### 6.1 Hero Section

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0;
}

.hero-content {
  max-width: 600px;
}

.hero-headline {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-black);
  margin-bottom: 24px;
}

.hero-headline strong {
  font-weight: 800;
}

.hero-subheadline {
  font-size: 18px;
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 500px;
}

.hero-image {
  max-width: 100%;
  height: auto;
}
```

**Layout Options:**
- Split layout: Text left (50%), Image right (50%)
- Centered: Text centered, image below or as background

### 6.2 Feature Showcase (Tabbed)

```css
.tabs-nav {
  display: flex;
  gap: 32px;
  border-bottom: 1px solid var(--color-gray-200);
  margin-bottom: 48px;
}

.tab-button {
  padding: 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-gray-600);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-button:hover {
  color: var(--color-black);
}

.tab-button.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.tab-panel {
  display: none;
  animation: fadeIn 0.3s ease;
}

.tab-panel.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 6.3 Testimonials

```css
.testimonial {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-quote-mark {
  font-size: 80px;
  color: var(--color-gray-200);
  line-height: 1;
  margin-bottom: 24px;
}

.testimonial-text {
  font-size: 24px;
  font-style: italic;
  color: var(--color-gray-900);
  line-height: 1.6;
  margin-bottom: 32px;
}

.testimonial-author {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-black);
}

.testimonial-role {
  font-size: 14px;
  color: var(--color-gray-600);
}
```

### 6.4 Investment Focus Grid

```css
.focus-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.focus-card {
  padding: 32px;
  background: white;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.focus-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.1);
}

.focus-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
}

.focus-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.focus-description {
  font-size: 14px;
  color: var(--color-gray-600);
}
```

### 6.5 Footer

```css
.footer {
  background: var(--color-gray-900);
  color: white;
  padding: 80px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-logo {
  width: 160px;
  margin-bottom: 24px;
}

.footer-description {
  font-size: 14px;
  color: var(--color-gray-400);
  line-height: 1.6;
  max-width: 300px;
}

.footer-heading {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}

.footer-link {
  display: block;
  font-size: 14px;
  color: var(--color-gray-400);
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--color-primary);
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  color: white;
  font-size: 20px;
  transition: color 0.2s ease;
}

.footer-social a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
  color: var(--color-gray-400);
}
```

---

## 7. Animations & Interactions

### 7.1 Transition Defaults

```css
:root {
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### 7.2 Hover Effects

```css
/* Links */
a {
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary);
}

/* Buttons */
.btn {
  transition: all var(--transition-fast);
}

.btn:hover {
  transform: translateY(-2px);
}

/* Cards */
.card {
  transition: all var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Images in containers */
.image-zoom {
  overflow: hidden;
}

.image-zoom img {
  transition: transform var(--transition-slow);
}

.image-zoom:hover img {
  transform: scale(1.05);
}
```

### 7.3 Scroll Animations

```css
/* Fade In Up */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-out-expo), 
              transform 0.6s var(--ease-out-expo);
}

.animate-fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger Children */
.stagger-children > * {
  opacity: 0;
  transform: translateY(20px);
}

.stagger-children.is-visible > *:nth-child(1) { transition-delay: 0ms; }
.stagger-children.is-visible > *:nth-child(2) { transition-delay: 100ms; }
.stagger-children.is-visible > *:nth-child(3) { transition-delay: 200ms; }
.stagger-children.is-visible > *:nth-child(4) { transition-delay: 300ms; }

.stagger-children.is-visible > * {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s var(--ease-out-expo), 
              transform 0.6s var(--ease-out-expo);
}
```

### 7.4 JavaScript for Scroll Animations

```javascript
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-fade-in-up, .stagger-children')
  .forEach(el => observer.observe(el));
```

---

## 8. Responsive Design

### 8.1 Breakpoints

| Name | Min Width | CSS Variable | Description |
|------|-----------|--------------|-------------|
| Mobile | 0px | - | Base styles, single column |
| sm | 640px | `--breakpoint-sm` | 2-column grids |
| md | 768px | `--breakpoint-md` | Tablet, expanded nav |
| lg | 1024px | `--breakpoint-lg` | Desktop, full layout |
| xl | 1280px | `--breakpoint-xl` | Max container width |
| 2xl | 1536px | `--breakpoint-2xl` | Large screens |

### 8.2 Media Query Usage

```css
/* Mobile First Approach */
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
```

### 8.3 Mobile Adaptations

```css
/* Navigation - Mobile */
@media (max-width: 767px) {
  .nav-desktop {
    display: none;
  }
  
  .nav-mobile-toggle {
    display: block;
  }
  
  .nav-mobile {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 320px;
    background: white;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1001;
  }
  
  .nav-mobile.is-open {
    transform: translateX(0);
  }
}

/* Hero - Mobile */
@media (max-width: 767px) {
  .hero {
    padding: 80px 0;
    min-height: auto;
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-image {
    order: -1;
    margin-bottom: 32px;
  }
}

/* Footer - Mobile */
@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
}
```

---

## 9. Complete CSS Variables Reference

```css
:root {
  /* ============================================
     COLORS
     ============================================ */
  --color-primary: #22C55E;
  --color-primary-dark: #166534;
  --color-primary-light: #86EFAC;
  --color-primary-bg: #F0FDF4;
  
  --color-black: #000000;
  --color-white: #FFFFFF;
  
  --color-gray-900: #1F2937;
  --color-gray-800: #374151;
  --color-gray-700: #4B5563;
  --color-gray-600: #6B7280;
  --color-gray-500: #9CA3AF;
  --color-gray-400: #D1D5DB;
  --color-gray-300: #E5E7EB;
  --color-gray-200: #F3F4F6;
  --color-gray-100: #F9FAFB;
  
  /* ============================================
     TYPOGRAPHY
     ============================================ */
  --font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 
                 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  --font-size-xs: 0.75rem;     /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 2rem;       /* 32px */
  --font-size-4xl: 2.5rem;     /* 40px */
  --font-size-5xl: 3rem;       /* 48px */
  --font-size-6xl: 4rem;       /* 64px */
  
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  --line-height-none: 1;
  --line-height-tight: 1.1;
  --line-height-snug: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.75;
  
  /* ============================================
     SPACING
     ============================================ */
  --space-0: 0;
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
  
  /* ============================================
     LAYOUT
     ============================================ */
  --container-max: 1280px;
  --container-padding: clamp(1rem, 5vw, 4rem);
  --header-height: 80px;
  
  /* ============================================
     BORDER RADIUS
     ============================================ */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
  
  /* ============================================
     SHADOWS
     ============================================ */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
  --shadow-card: 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-card-hover: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  /* ============================================
     TRANSITIONS
     ============================================ */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* ============================================
     Z-INDEX
     ============================================ */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}
```

---

## 10. Icons & Assets

### 10.1 Icon System

**Recommended Libraries:**
- Heroicons (https://heroicons.com)
- Lucide Icons (https://lucide.dev)
- Feather Icons (https://feathericons.com)

**Icon Specifications:**
- Style: Outline/stroke icons (not filled)
- Stroke Width: 1.5px - 2px
- Sizes: 16px (small), 20px (default), 24px (large)
- Color: Inherit from parent

```css
.icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
}

.icon-sm { width: 16px; height: 16px; }
.icon-lg { width: 24px; height: 24px; }
```

### 10.2 Social Media Icons

Primary social links used:
- LinkedIn
- Twitter/X
- Email

```css
.social-icons {
  display: flex;
  gap: 16px;
}

.social-icon {
  width: 20px;
  height: 20px;
  color: var(--color-gray-400);
  transition: color var(--transition-fast);
}

.social-icon:hover {
  color: var(--color-primary);
}

/* On dark backgrounds */
.footer .social-icon {
  color: white;
}
```

### 10.3 Logo Guidelines

- **Format:** SVG (preferred), PNG fallback
- **Versions:** Full logo (horizontal), Logomark only
- **Clear Space:** Minimum padding equal to logomark height
- **Color Variants:** Full color, White (for dark backgrounds)
- **Minimum Size:** 120px width for full logo

---

## 11. Sample Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your VC Firm</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="container">
      <nav class="nav">
        <a href="/" class="logo">
          <img src="logo.svg" alt="Logo">
        </a>
        <ul class="nav-links">
          <li><a href="/team" class="nav-link">Team</a></li>
          <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
          <li><a href="/blog" class="nav-link">Blog</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="nav-social">
          <!-- Social icons -->
        </div>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <h1 class="hero-headline">
            We back technical teams working on <strong>breakthrough products</strong>.
          </h1>
          <p class="hero-subheadline">
            Technology-focused venture fund investing in seed and A-round startups.
          </p>
          <a href="/portfolio" class="btn btn-primary btn-arrow">
            See our portfolio
          </a>
        </div>
        <div class="hero-image-wrapper">
          <img src="hero-image.png" alt="Hero" class="hero-image">
        </div>
      </div>
    </div>
  </section>

  <!-- Focus Areas -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">Investment Focus</h2>
      <div class="focus-grid">
        <div class="focus-card">
          <div class="focus-icon"><!-- Icon --></div>
          <h3 class="focus-title">Software</h3>
          <p class="focus-description">Enterprise SaaS, AI/ML, Developer Tools</p>
        </div>
        <div class="focus-card">
          <div class="focus-icon"><!-- Icon --></div>
          <h3 class="focus-title">Life Sciences</h3>
          <p class="focus-description">Biotech, Medical Devices, Digital Health</p>
        </div>
        <div class="focus-card">
          <div class="focus-icon"><!-- Icon --></div>
          <h3 class="focus-title">Deep Tech</h3>
          <p class="focus-description">Hardware, Materials, Energy</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Showcase -->
  <section class="section section-gray">
    <div class="container">
      <h2 class="section-title">Featured Portfolio</h2>
      <div class="tabs">
        <div class="tabs-nav">
          <button class="tab-button active">Company 1</button>
          <button class="tab-button">Company 2</button>
          <button class="tab-button">Company 3</button>
        </div>
        <div class="tab-panel active">
          <!-- Tab content -->
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="section">
    <div class="container">
      <div class="testimonial">
        <div class="testimonial-quote-mark">"</div>
        <blockquote class="testimonial-text">
          The team has always gone above and beyond for us.
        </blockquote>
        <cite class="testimonial-author">Dr. Jane Doe</cite>
        <p class="testimonial-role">CEO, Company Name</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer" id="contact">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <img src="logo-white.svg" alt="Logo" class="footer-logo">
          <p class="footer-description">
            Your VC Firm description here.
          </p>
          <address class="footer-address">
            123 Main Street<br>
            City, State 12345
          </address>
        </div>
        <div class="footer-nav">
          <h4 class="footer-heading">Links</h4>
          <a href="/team" class="footer-link">Team</a>
          <a href="/portfolio" class="footer-link">Portfolio</a>
          <a href="/blog" class="footer-link">Blog</a>
        </div>
        <div class="footer-contact">
          <h4 class="footer-heading">Contact</h4>
          <a href="mailto:contact@example.com" class="footer-link">contact@example.com</a>
        </div>
        <div class="footer-social-wrapper">
          <h4 class="footer-heading">Follow</h4>
          <div class="footer-social">
            <a href="#"><span class="icon">LinkedIn</span></a>
            <a href="#"><span class="icon">Twitter</span></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Your VC Firm. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="scripts.js"></script>
</body>
</html>
```

---

## 12. Tailwind CSS Configuration

If using Tailwind CSS, here's a matching configuration:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22C55E',
          dark: '#166534',
          light: '#86EFAC',
        },
        gray: {
          900: '#1F2937',
          800: '#374151',
          700: '#4B5563',
          600: '#6B7280',
          500: '#9CA3AF',
          400: '#D1D5DB',
          300: '#E5E7EB',
          200: '#F3F4F6',
          100: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
```

---

**End of UI Design Specification**

*This specification provides a comprehensive guide to replicate the Foothill Ventures design system for your web applications. Adjust values as needed to match your brand identity while maintaining the professional, clean aesthetic.*
