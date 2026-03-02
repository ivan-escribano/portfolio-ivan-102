# Migration Plan: Portfolio HTML to Next.js

> All work must match `docs/portfolio.html` as the visual reference. The end result must look and behave identically — only the internal code structure changes.

## Phase 1 — Foundation

- [x] Configure ESLint and Prettier
- [x] Set up `globals.css` with design tokens (colors, fonts, spacing) as CSS variables
- [x] Configure font loading (Playfair Display, DM Sans, JetBrains Mono) in `layout.tsx`
- [x] Extract logo and hero images to `public/images/`
- [x] Set up SEO metadata, Open Graph, Twitter Cards, sitemap, robots.txt

## Phase 2 — Static Sections

Each section as its own folder under `app/components/`:

```
app/components/
├── navbar/          # Floating pill nav + mobile side drawer
├── hero/            # Full-screen hero with world drift animation
├── projects/        # Project cards grid (5 cards)
├── testimonials/    # Testimonial cards with real Cloudinary photos (9 cards)
├── experience/      # Vertical timeline with bullet points (3 entries)
├── trusted-by/      # Infinite logo marquee (8 companies)
└── contact/         # Email, LinkedIn, social icons, footer
```

Build order:

1. [x] Navbar
2. [x] Hero
3. [x] Projects
4. [x] Testimonials
5. [x] Experience
6. [x] Trusted By
7. [x] Contact

## Phase 3 — Interactive Sections

1. [x] **Hero animation** — Word-by-word headline reveal on load, world drift background
2. [x] **About + Terminal** — Two-column layout with nested `Terminal` sub-component

```
app/components/about/
├── About.component.tsx
├── About.module.css
├── about.config.ts
└── sub-components/
    └── terminal/
        ├── Terminal.component.tsx
        ├── Terminal.module.css
        ├── Terminal.interface.ts
        ├── terminal.config.ts
        └── use-terminal.hook.ts
```

3. [x] **Philosophy** — Video terminal frame with Kobe Bryant quote

## Phase 4 — Polish & Verification

- [ ] Scroll animations (IntersectionObserver for fade-in, slide-in effects)
- [ ] Side-by-side comparison with `portfolio.html`
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Performance optimization
