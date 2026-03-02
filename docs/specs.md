# Project Specifications

## Overview

A personal portfolio website for Ivan Escribano (AI & Software Engineer). Originally built as a single HTML file, now rebuilt in Next.js with a clean, component-based architecture. The visual result is identical to the original — only the internal structure has been modernized.

## Sections

The site is a single scrollable page with the following sections in order:

| Section | Description |
|---------|-------------|
| **Navbar** | Floating pill-shaped nav with logo, links, CTA button, and mobile side drawer |
| **Hero** | Full-screen intro with animated headline and world drift background |
| **About** | Two-column layout with intro text and interactive terminal |
| **Projects** | Grid of project cards with hover overlay and beam animations |
| **Testimonials** | Grid of testimonial cards with real photos from Cloudinary |
| **Experience** | Vertical timeline with bullet points and tech tags |
| **Trusted By** | Infinite horizontal marquee of company logos |
| **Philosophy** | Video in terminal frame with Kobe Bryant quote |
| **Contact** | Email, LinkedIn buttons, social icons, and footer |

## Architecture Principles

- **One component per section** — each section is self-contained with its own styles
- **Local styles** — CSS Modules scoped to each component, referencing shared tokens from `globals.css`
- **Content separated from layout** — all copy and data lives in `.config.ts` files, components only render
- **Self-contained interactivity** — terminal typewriter, scroll animations, and hero animation use standard browser APIs (no animation libraries)
- **Modern font loading** — Playfair Display, DM Sans, and JetBrains Mono loaded via `next/font`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules (plain CSS, no preprocessors) |
| Fonts | Playfair Display, DM Sans, JetBrains Mono |
| Icons | Lucide React |
| Images | Cloudinary |
| Linting | ESLint + Prettier |
| Deployment | Vercel |

## Component Convention

```
component-name/
├── ComponentName.component.tsx
├── ComponentName.module.css
├── component-name.config.ts        # Copy (COMPONENT_COPY object) + data arrays
└── ComponentName.interface.ts       # Types (when needed)
```

## Key Rules

- No `index.ts` barrel exports
- Interfaces live inside each component folder, not globally
- All copywriting text goes in `.config.ts` as a single `COMPONENT_COPY` object
- Data arrays (links, items, entries) are separate named exports in the same config file
- CSS class names use camelCase
- Native CSS nesting (max 3 levels)
- Mobile-first responsive with `min-width` breakpoints grouped at end of CSS file
- No Tailwind, no SCSS, no BEM
