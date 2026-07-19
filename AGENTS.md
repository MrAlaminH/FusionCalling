# Fusion Calling — AGENTS.md

Next.js 14 (App Router) marketing site for fusioncalling.com. React 18, TypeScript strict, Tailwind CSS, Radix UI.

## Commands

```bash
npm run dev          # dev server (localhost:3000)
npm run build        # production build
npm run start        # run production build
npm run lint         # eslint (next/core-web-vitals + typescript)
npm run typecheck    # tsc --noEmit
npm run analyze      # bundle analyzer (ANALYZE=true npm run build)
npm run optimize-images  # scripts/optimize-images.mjs
npm run openapi:gen  # generate OpenAPI spec (scripts/generate-openapi.ts)
npm run indexnow:submit  # submit IndexNow (scripts/indexnow-submit.ts)
```

**Order matters**: `lint → typecheck → build` before deploy.

## Structure

```
app/                    # App Router pages (route segments = folders)
  page.tsx              # Home page
  layout.tsx            # Root layout (providers, fonts, globals.css)
  api/                  # API routes (if any)
  blog/ docs/ about/ ...# Marketing pages
components/             # Shared UI components (Radix + custom)
lib/                    # Utilities, helpers, constants
scripts/                # Build-time / CI scripts (analyze, optimize-images, openapi, indexnow)
public/                 # Static assets (large opengraph-image.png at root)
styles/                 # globals.css only (Tailwind imports)
```

**Path alias**: `@/*` maps to project root (see tsconfig.json).

## Key Conventions

- **Strict TypeScript** — `strict: true`, no `any`, prefer `type` over `interface`
- **Tailwind only** — no CSS modules, no inline styles; use `clsx` + `tailwind-merge` for class composition
- **Radix UI primitives** — accordion, dialog, dropdown-menu, label, navigation-menu, slot
- **Server Components by default** — add `"use client"` only when needed (interactivity, hooks, browser APIs)
- **Image optimization** — `next/image` with configured `deviceSizes`/`imageSizes` (next.config.mjs)
- **Analytics** — PostHog via `PostHogPageView` component in layout
- **Sitemap/robots** — generated via `next-sitemap` (sitemap.ts, robots.ts)

## Common Tasks

| Task | Command / Location |
|------|-------------------|
| Add a page | Create `app/<route>/page.tsx` |
| Add API route | Create `app/api/<route>/route.ts` |
| New UI component | `components/<name>.tsx` (export from `components/ui/` if reusable) |
| Update styles | Tailwind classes in component; globals.css only for `@tailwind` imports |
| Type-check only | `npm run typecheck` (fast, no emit) |
| Check bundle size | `ANALYZE=true npm run build` → opens report |
| Lint fix | `npm run lint -- --fix` |

## Gotchas

- **Large opengraph-image.png** (135KB) at `app/opengraph-image.png` — optimize before replacing
- **PostHog** key loaded from env (`NEXT_PUBLIC_POSTHOG_KEY`) — required for analytics
- **Cal.com embed** via `@calcom/embed-react` — configured in components using it
- **No test runner configured** — add Vitest/Jest if needed
- **Node 18+** required (per README)

## Env Vars (create `.env.local`)

```
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
# Cal.com, API keys, etc. as needed
```

## Deploy

Vercel (recommended) — connects to GitHub, runs `build` on push to main. Ensure `lint` + `typecheck` pass in CI.