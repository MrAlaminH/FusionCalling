# Fusion Calling — Full SEO Audit Report

**Date:** Aug 25, 2026 · **Scope:** Technical, On-Page, Performance/CWV, Content/E-E-A-T, Crawlability
**Overall health:** Solid foundation (schema coverage is excellent, sitemap/robots well built, no raw `<img>`, good fonts/caching) — but there are **1 critical entity/404 bug**, several High-priority issues that actively leak ranking signals (double title brands, missing OG images on money pages, orphan `/pricing`, keyword cannibalization, contradictory trust claims), and a set of Medium cleanups.

---

## 🔴 CRITICAL

| # | Issue | Where | Evidence | Impact | Fix |
|---|-------|-------|----------|--------|-----|
| 1 | **Broken author entity: sitewide schema points to a 404 URL** | `app/layout.tsx:141-143`, `lib/authors.ts:28,37`, `app/team/[slug]/page.tsx:46` | Layout JSON-LD declares `@id: ".../team/voice-team#person"` but `url: ".../team/fusioncalling-team"` — that URL isn't in `generateStaticParams` → real 404. Two divergent author registries exist (`lib/authors.ts` vs local array in team page). Team index links to `/team/fusioncalling-team` → **404 from your own nav** | Breaks author-entity consolidation used by every Article schema site-wide (E-E-A-T); live broken internal link | Unify on one slug (`voice-team` — already referenced by 8 blog pages + glossary/industry/comparison schemas). Update `lib/authors.ts`, delete the duplicate local array in `app/team/[slug]/page.tsx`, fix layout Person `url`. Add a redirect `fusioncalling-team → voice-team` |

---

## 🟠 HIGH

| # | Issue | Where | Evidence | Impact | Fix |
|---|-------|-------|----------|--------|-----|
| 2 | **Double brand suffix in titles** ("… \| Fusion Calling \| Fusion Calling") | `app/page.tsx:25`, `app/glossary/page.tsx:8`, `app/glossary/[slug]/page.tsx:26`, `app/team/*`, `app/industries/page.tsx:6`, `app/whitelabel/{compare,case-studies,locations}` | Root template `%s \| Fusion Calling` + pages hardcode brand again. Home renders **76-char truncated title with brand twice**; all ~79 glossary pages affected | Truncated SERP titles, wasted chars, looks spammy on your most important URLs | Remove `\| Fusion Calling` from page-level titles (template appends it), or use `title.absolute` |
| 3 | **No og:image on home page, /about, and all 79 glossary term pages** | `app/page.tsx:33-44`, `app/about/page.tsx:32-39`, `app/glossary/[slug]/page.tsx` | Next.js shallow-merges `openGraph`: child object without `images` fully replaces layout's OG image. Glossary generator omits `images` entirely | Broken social/AI-crawler previews on your money pages and GEO play | Add `images` or route these pages through `buildOpenGraph()` |
| 4 | **`/pricing` is an orphan page** | Navbar/Footer point to `/#pricing`; only link to `/pricing` is inside `/search` | Sitemap includes it at priority 0.9, but zero link equity flows to it | A commercial money page with no internal links won't rank | Point Navbar + Footer "Pricing" to `/pricing`; add contextual links from home & whitelabel pages |
| 5 | **Multiple `<h1>` per page (sr-only + visible)** | `about:106+113`, `ai-phone-call-automation:101+114`, `calculator:98` + `VoiceCalculator.tsx:115`, `docs:26` + `DocsHub.tsx:209`, `whitelabel:432` + `white-label/Hero.tsx:132` | Two H1s on 5 key pages | Confuses heading semantics; minor ranking signal dilution | Delete the sr-only duplicates, keep visible hero H1s |
| 6 | **Keyword cannibalization: blog integration posts vs `/whitelabel/{vapi,retell,gohighlevel}`** | `blog/vapi-white-label-platform` vs `/whitelabel/vapi` (and Retell/GHL pairs) | Both target identical head terms ("white label vapi", "resell vapi") with same intent, overlapping FAQs, and **don't link to each other** | Google splits rankings between your own pages | Differentiate intent (provider page = transactional; blog = informational guide angle), interlink bidirectionally with descriptive anchors |
| 7 | **Contradictory trust claims (NAP + traction numbers)** | Footer `+1 (914) 639-4069` vs JSON-LD `+1-202-998-3591`; `hello@` vs `contact@` vs `partners@`; "50+" agencies (`about`) vs "500+" (`authors.ts`, team); founded 2022 vs "since 2025" | Inconsistent NAP and claims across footer, About, schema, bios | Trust/E-E-A-T signal damage; confusing for Google's entity understanding | Pick one phone, one email strategy, one traction claim; mirror everywhere including JSON-LD |
| 8 | **LCP element animated invisible at first paint (home hero)** | `components/Hero.tsx:108-189` | H1 starts `opacity: 0, y: -20` with framer-motion delays up to 1.0s | Directly hurts LCP on your most important page | Remove opacity-0 start on H1/subhead/CTA; use CSS-only reveals (`ui/reveal.tsx` pattern already exists) |
| 9 | **Freshness signals contradict each other** | Blog posts show Feb 2025 dates only; Article schema says `dateModified: 2026-07-07` while OG `modifiedTime` = publish date; one post has typo `2025-07-07` vs siblings' 2026; titles still say "in 2025" | Schema contradicts OG tags on same page; stale-looking content | Weakens freshness trust; "2025" titles now outdated | Show "Last updated" on-page, sync OG modifiedTime with schema dateModified, fix year typo, refresh "in 2025" → current year |
| 10 | **No host-canonicalization redirects in repo** | `next.config.mjs` has zero `redirects()`; no middleware | www/apex/http policy lives only in Vercel config; canonicals assume `www` works | One config drift away from split-brain hosting serving 200s on two hosts | Add apex→www 301 in `next.config.mjs redirects()`; verify Vercel domain rules |
| 11 | **Blog author bylines are generic, unlinked placeholders** | e.g. `vapi-white-label-platform/page.tsx:207,536-567` | "By Fusion Calling Team" plain text; bio box uses initials avatar, links only to homepage itself; rich `lib/authors.ts` profiles unused | Weak author E-E-A-T on all articles | Link bylines to `/team/*` pages, use real avatars, render bio from single source |

---

## 🟡 MEDIUM

| # | Issue | Where | Evidence | Impact | Fix |
|---|-------|-------|----------|--------|-----|
| 12 | **Sitemap lies about lastmod** — `lastModified: new Date()` on every URL every build | `app/sitemap.ts:70,127` | All ~140 URLs claim "changed today" every deploy | Google learns lastmod is unreliable → stops using it for recrawl priority | Use real dates you already maintain (`CONTENT_LAST_UPDATED`, per-post dates) |
| 13 | **Team pages missing from sitemap** | `app/sitemap.ts:10-62` | `/team`, `/team/alamin`, `/team/voice-team` indexable w/ Person schema but absent | Slower discovery, weaker entity signals | Add to `STATIC_PATHS` |
| 14 | **Hardcoded `https://www.fusioncalling.com` ×261 instead of `SITE_URL`** | `app/layout.tsx:23,57,116-182` + dozens more | Env override/staging would desync canonicals vs schema | Maintenance/env risk | Refactor to `SITE_URL` constant |
| 15 | **Inconsistent default OG image** (`/og.jpg` vs `/opengraph-image.png`) | Entire `/whitelabel/*` tree uses `/og.jpg`; rest uses PNG; `BRAND.defaultOgImage` exists but unused by most pages | Two brand images; twitter cards inherit mismatched root defaults | Social/AI preview inconsistency | Standardize all pages on `buildOpenGraph()` |
| 16 | **Glossary term pages have no inbound contextual links** | 76 term pages linked only via hub + related-terms | No blog/industry/product page links any specific term | Low PageRank to your biggest GEO asset | Add contextual glossary links from blog & industry copy (e.g., latency, TCPA mentions) |
| 17 | **Provider pages & industry/location/case-study children are hub/footer-only linked** | `/whitelabel/vapi` etc.: 1 inbound footer link each; blog CTAs go to generic `/whitelabel` | Integration blogs never link matching provider page | Weak topical clustering | Cross-link post ↔ provider page ↔ case studies |
| 18 | **Docs content rendered inside client boundary** | `app/docs/DocsHub.tsx` (337 lines, `"use client"`) wraps all docs content | Heavy hydration on text-heavy crawl-budget pages | CWV + crawl efficiency | Server-render article bodies; keep search/copy buttons as client islands |
| 19 | **framer-motion in 19 files for simple fades** | Hero, Features, Testimonial, Try-Demo, white-label/* etc. | ~30–50 KB gz hydration cost everywhere; white-label landing 100% client-rendered | INP/TBT across marketing pages | Migrate reveals to existing CSS `ui/reveal.tsx`; keep framer-motion only where layout animation needed |
| 20 | **Voice card audio pre-fetched eagerly** | `components/sub/voice-card.tsx:29` | `new Audio()` on mount → ~300 KB MP3 fetched per home view before interaction | Wasted bandwidth/mobile CPU | Lazy-create Audio on first play tap |
| 21 | **Skipped heading levels** (h1 → h3) | `app/industries/page.tsx:100→131`, `app/team/page.tsx:87→116` | Card headings h3 before any h2 | Semantic hierarchy issue | Change card headings to h2 |
| 22 | **Meta descriptions >160 chars** | `lib/whitelabel-providers.ts` (~230–236c), `whitelabel/compare` (~193c) | Truncated in SERP | Lost click-through messaging | Trim to ≤160 (`truncateAtWord` helper already exists) |
| 23 | **OpenAPI spec served at 2 URLs**; API copy robots-blocked-but-cacheable | `/openapi.json` + `/api/docs/openapi.json` | Duplicate doc; blocked URLs can still get indexed-if-linked | Thin-content index risk | Keep `/openapi.json`; drop/noindex the API route |
| 24 | **SearchAction targets noindex `/search`** | `app/layout.tsx:173-180` | WebSite SearchAction → noindex page that doesn't consume `?q=` server-side | Pointless/contradictory markup | Drop SearchAction or make /search handle q + indexable |
| 25 | **PostHog loaded on mount app-wide** | `app/providers.tsx:8-14` | ~50–100 KB gz analytics JS during load window | TBT/INP contribution | Init after idle/load event |
| 26 | **Possible eager autoplaying Vimeo on whitelabel landing** | `components/white-label/Hero.tsx:237-239` (`?autoplay=1`) | If rendered eagerly, video competes with LCP | LCP risk on key landing page | Click-to-play facade like `Try-Demo.tsx` |
| 27 | **Blog posts internally thin-linked** | Each post: only ~2× `/whitelabel` + sibling posts; nothing to pricing/calculator/glossary/industries/docs | No authoritative outbound citations either | Weak cluster equity flow | Add 3–6 contextual internal links + citations per post |
| 28 | **Duplicate metadata blocks: segment layouts vs pages** | `blog/layout.tsx` vs `blog/page.tsx` (+glossary, industries, alternative) | Divergent dead-code metadata; future footgun | Hygiene | Keep metadata only in `page.tsx` |
| 29 | **Immutable cache headers match unhashed public images** | `next.config.mjs:60-68` | `/opengraph-image.png`, `/og.jpg`, `/logo.webp` cached up to 1yr even when replaced without rename | Stale OG/social previews after updates | Exclude top-level public images or version filenames |

---

## 🟢 LOW

| # | Issue | Where | Fix |
|---|-------|-------|-----|
| 30 | Dead `next-sitemap` dependency + AGENTS.md says sitemap comes from next-sitemap (wrong — it's `app/sitemap.ts`) | package.json, AGENTS.md | `npm uninstall next-sitemap`; update AGENTS.md |
| 31 | `keywords` meta tag (ignored by Google since 2009) | `app/layout.tsx:30-43` + commercial pages | Remove |
| 32 | Keyword-stuffed awkward Twitter copy ("AI-powered ai receptionist … automation") | `app/layout.tsx:47-50,56` | Rewrite copy |
| 33 | Redundant manual favicon `<link>` (App Router injects it) | `app/layout.tsx:83` | Remove one |
| 34 | Person node indentation glitch suggests hand-edit; validate after fixes | `app/layout.tsx:114` | Run Rich Results Test post-fix |
| 35 | Orphan IndexNow key file `da3e5e7c….txt`; dead `components/team/AuthorPage.tsx`; dead metadata fallback branches on dynamic routes | public/, components | Delete/wire up |
| 36 | llms.txt data drift: "~70 terms" (actual 76), "$299 Growth = 25 sub-accounts" vs 20 elsewhere | public/llms*.txt, compare page | Regenerate + reconcile numbers |
| 37 | Decorative non-functional blog category filter buttons | `app/blog/page.tsx:190-205` | Make functional or remove |
| 38 | PNG assets not converted (ex1/ex2/thumbnail ≈ 420 KB total) | public/ | Run `npm run optimize-images` |
| 39 | No `minimumCacheTTL` for images; `lucide-react` could use `optimizePackageImports` | next.config.mjs | Add both |
| 40 | 404 page lacks its own metadata; large blurred `.particle` CSS animations costly on mobile; grain overlay compositing layer | not-found.tsx, globals.css | Minor polish |
| 41 | Case-study schema hardcodes `datePublished: "2026-07-07"` instead of data-driven | `case-studies/[slug]/page.tsx:249` | Source from data |
| 42 | "Live interactive demo" anchor links to `/` instead of `/#show-case` | vapi blog post | Fix href |

---

## ✅ What's already done well

- Structured data coverage across 40+ injection points (Organization graph, Article, FAQPage, DefinedTerm, BreadcrumbList on nearly everything) with safe `JSON.stringify` idiom
- FAQ schema matches rendered FAQ content verbatim (verified side-by-side)
- All 6 dynamic segments: `generateStaticParams` + true `notFound()` 404s — no soft-404 risk
- Clean slugs everywhere (lowercase kebab-case, consistent patterns)
- Zero raw `<img>` tags; AVIF pipeline; `next/font` self-hosted with swap; YouTube/Cal.com facade patterns; reserved space prevents CLS
- Correct noindex on `/search` (crawlable so noindex is honored); correct exclusion from sitemap
- AI crawlers explicitly allowed in robots (good GEO posture); llms.txt well structured
- Strong security headers incl. HSTS; immutable caching for hashed assets
- Descriptive anchor text throughout (zero "click here")

---

## 🎯 Recommended fix order

### Wave 1 — This week (critical + quick high-impact)
1. Fix author slug unification + 404 (#1)
2. De-double brand suffixes (#2) — mechanical find/fix across ~10 files
3. Restore og:image on home/about/glossary terms (#3)
4. Point nav Pricing to `/pricing` (#4)
5. Remove sr-only duplicate H1s (#5)
6. Reconcile NAP/traction claims (#7)

### Wave 2 — Next sprint
7. LCP de-animation of hero (#8) + framer-motion migration (#19)
8. Date/freshness sync (#9, #12) + refresh "2025" titles
9. Redirect rules in next.config (#10)
10. Cannibalization de-risking + cross-linking posts ↔ provider pages (#6, #17)
11. Author bylines → real profiles (#11)

### Wave 3 — Ongoing improvements
12. Internal-link expansion into glossary/industry children (#16, #27)
13. Docs server-rendering (#18), audio lazy-load (#20), PostHog deferral (#25)
14. Everything in the Medium/Low hygiene tables
