# Stone Cliff Window Cleaning Window Cleaning

A full rebuild of the Stone Cliff Window Cleaning Window Cleaning marketing site — React + TypeScript, Tailwind CSS, React Router, React Hook Form, React Toastify, and a custom Three.js/GLSL shader hero.

## Stack

- **React 18 + TypeScript** — component architecture, strict typing
- **Vite** — dev server & build
- **Tailwind CSS** — utility-first styling with a custom design-token theme (`tailwind.config.ts`)
- **React Router v6** — multi-page routing (`/`, `/services`, `/about`, `/reviews`, `/contact`)
- **React Hook Form** — validated quote-request form on the Contact page
- **React Toastify** — success/error toast notifications on form submit
- **Three.js** — a hand-written GLSL fragment shader (`src/shaders/GlassRippleCanvas.tsx`) rendering an animated, mouse-reactive "water on glass" ripple — the site's signature visual, used in the hero and final CTA
- **Dark / light theme** — class-based, persisted to `localStorage`, defaults to system preference, toggle in the navbar

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build locally
```

Requires Node 18+.

## Design system

Colors, type, and spacing are defined once in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0B1F33` | Dark surfaces / heading text |
| `sky` | `#2E90D9` | Primary brand / links / CTA |
| `glass` | `#8FD9E8` | Accent, dark-mode highlights |
| `amber` | `#F2A93B` | Secondary CTA accent |
| `cloud` | `#F7FAFC` | Light surface background |

Type: **Space Grotesk** (display/headings), **Inter** (body), **IBM Plex Mono** (eyebrow labels & stats), loaded via Google Fonts in `index.html`.

## Project structure

```
src/
  components/     Navbar, Footer, Layout, ThemeToggle, PageHeader, SectionHeading,
                   RevealOnScroll, RatingStars, AccordionItem
  context/        ThemeContext (dark/light mode)
  data/           content.ts — all site copy & structured data in one place
  pages/          Home, Services, About, Reviews, Contact, NotFound
  sections/       Hero, Stats, ServicesGrid, WhyUs, Process, Testimonials,
                   ServiceAreas, FAQ, CTA
  shaders/        GlassRippleCanvas.tsx — the Three.js shader component
  types/          Shared TypeScript interfaces
```

## Notes

- The contact form (`src/pages/Contact.tsx`) currently simulates a network request. Swap the `setTimeout` in `onSubmit` for a real API/email endpoint (e.g. Formspree, a serverless function, or your own backend) when ready to go live.
- All copy lives in `src/data/content.ts` — update business details, services, testimonials, service areas, and FAQs from that single file.
- The shader respects `prefers-reduced-motion` and automatically re-themes when dark/light mode changes.
