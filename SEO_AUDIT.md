# SEO Audit: fusioncalling.com

**Audit Date:** 2026-07-20  
**Site:** https://www.fusioncalling.com (Next.js 14, App Router, React 18, TypeScript, Tailwind, Radix UI)  
**Business:** White-label AI voice agent platform for agencies — resell Vapi, Retell, ElevenLabs under own brand  
**Target Keywords:** white-label AI voice, AI phone call automation, AI receptionist, voice AI reseller, Vapi white label, Retell white label, agency voice AI  

---

## Executive Summary

### Top Risks
| Risk | Severity | Evidence |
|------|----------|----------|
| **Homepage H1 missing on initial paint** (Hero renders via client component) | 🔴 Critical | `Hero` is a client component with no server-rendered H1; first meaningful heading is deep in DOM |
| **No pricing page** — pricing is only an anchor `#pricing` on homepage | 🔴 Critical | Sitemap explicitly excludes `/pricing` (line 7-8 `sitemap.ts`); no indexable pricing URL |
| **Duplicate canonical on `/`** — root layout + page.tsx both emit canonical | 🟡 High | Root layout has no canonical; page.tsx sets canonical: "/" but Next.js also adds one |
| **OGP image not unique per section** — all pages share `/opengraph-image.png` | 🟡 High | `lib/seo.ts:68` defaults to single OG image; industries, alternatives, blog posts lack unique social cards |
| **Blog index `metadata` missing `openGraph` / `twitter`** | 🟡 High | `app/blog/page.tsx:6-13` only has title/description; no social cards |
| **Glossary term pages not in sitemap** — only `/glossary` hub is listed | 🟡 High | `sitemap.ts:53` has `/glossary` but not 50+ term pages from `glossaryTerms` |
| **`/alternative` hub canonical points to `/alternative` but page is `/alternative`** | 🟢 Low | Self-referencing canonical is fine, but paginated children missing `rel="next/prev"` |

### Top Opportunities
1. **Create `/pricing` page** — high-intent commercial keyword; currently only anchor link
2. **Add unique OG images per hub page** (industries, alternatives, whitelabel, blog posts)
3. **Add glossary term pages to sitemap** — 50+ long-tail definition pages
4. **Add FAQ/HowTo schema to all hub pages** — already on many, but missing on `/industries`, `/alternative`
5. **Internal link from blog posts → `/whitelabel` and `/industries/[slug]`** — currently sparse

---

## Site Structure

### Pages Inventoried (from `app/` + `sitemap.ts`)
| Route | Type | Priority (sitemap) | Metadata Quality | Schema |
|-------|------|-------------------|------------------|--------|
| `/` | Homepage | 1.0 | Excellent (title, desc, keywords, OG, Twitter, canonical, full Schema.org graph) | WebPage, LocalBusiness, Service, Product, VideoObject, SoftwareApplication, FAQPage |
| `/about` | Static | 0.7 | Good (title, desc, OG, canonical) | AboutPage, Person, FAQPage |
| `/ai-phone-call-automation` | Explainer | 0.7 | Good (title, desc, keywords, OG, canonical) | Article, WebPage, BreadcrumbList |
| `/whitelabel` | Core landing | 0.9 | Excellent (full metadata, OG, Twitter, canonical, rich schema) | LocalBusiness, Service, Product, FAQPage, HowTo, VideoObject, BreadcrumbList |
| `/whitelabel/gohighlevel` | Vertical landing | 0.7 | Good (metaTitle, metaDesc, keywords, OG, canonical) | ComparisonPage schema in component |
| `/alternative` | Comparison hub | 0.8 | Good (title, desc, keywords, OG via `buildOpenGraph`) | CollectionPage, BreadcrumbList |
| `/alternative/[slug]` (9) | Comparison pages | 0.7 | Excellent (dynamic metaTitle, metaDesc, keywords, unique OG images) | Article, BreadcrumbList |
| `/industries` | Vertical hub | 0.8 | Good (title, desc, keywords, OG via `buildOpenGraph`) | CollectionPage, BreadcrumbList |
| `/industries/[slug]` (13) | Vertical pages | 0.7 | Excellent (dynamic metaTitle, agencyDescription, keywords, OG) | Article schema in component |
| `/glossary` | Glossary hub | 0.8 | Good (title, desc, keywords, OG) | CollectionPage, DefinedTermSet, BreadcrumbList |
| `/glossary/[slug]` (50+) | Term pages | **MISSING from sitemap** | Good (dynamic metadata in component) | Article/DefinedTerm schema in component |
| `/blog` | Blog index | 0.7 | **Missing OG/Twitter** | CollectionPage, BreadcrumbList |
| `/blog/[slug]` (7) | Articles | 0.7 | Excellent (full Article schema, OG, Twitter, canonical) | Article, BreadcrumbList, speakable |
| `/docs` | Docs hub | 0.9 | Good (title, desc, keywords, OG via `buildOpenGraph`) | — (component renders) |
| `/docs/*` (5) | Doc pages | 0.8 | Good (dynamic metadata per page) | — |
| `/calculator` | Tool | 0.7 | Good (title, desc, keywords, OG, FAQ schema) | WebApplication, FAQPage, BreadcrumbList |
| `/team` + `/team/[slug]` | Team pages | 0.7 | Not in sitemap (only 2 pages) | — |
| `/privacy`, `/terms` | Legal | 0.7 | Basic | — |

**Total indexable URLs in sitemap:** ~100 (including 50 glossary terms NOT included)  
**Missing from sitemap:** 50+ glossary term pages, `/team`, `/team/[slug]`

### URL Quality
- Clean, hierarchical, keyword-rich slugs (e.g., `/industries/ai-voice-for-dental`, `/alternative/vapi-vs-retell-vs-elevenlabs`)
- No trailing slashes, no query params in sitemap
- `sitemap.ts` has deduplication guard and priority/changefreq logic — well implemented

---

## On-Page SEO

### Homepage (`/`) — **Critical Issues**

| Element | Status | Details |
|---------|--------|---------|
| **Title** | ✅ | "AI Phone Call Automation & AI Receptionist \| Fusion Calling" (62 chars) |
| **Meta Description** | ✅ | 156 chars, includes primary keywords |
| **H1** | ❌ **MISSING on SSR** | `Hero` component is client-side (`"use client"`); no server-rendered H1 in page.tsx. First H1 appears in `Hero` after hydration. |
| **H2 Hierarchy** | ⚠️ Fragmented | Sections are code-split components; headings rendered client-side. No semantic H2-H6 structure in initial HTML. |
| **Schema** | ✅ Excellent | 7 schema types in single graph: WebPage, LocalBusiness, Service, Product, VideoObject, SoftwareApplication, FAQPage |
| **Canonical** | ⚠️ Duplicate risk | Page sets `alternates.canonical: "/"`; Next.js also injects canonical from metadataBase |
| **OG/Twitter** | ✅ Complete | Custom title, description, image (`/opengraph-image.png`) |
| **Internal Links** | ✅ Rich | Nav, footer, CTA buttons, schema breadcrumbs |

**Fix:** Add server-rendered `<h1>` in `page.tsx` before dynamic components, or make `Hero` a server component with static H1.

### Whitelabel (`/whitelabel`) — **Strong**
- Full metadata + unique OG image (`/og.jpg`)
- 9 schema types including HowTo, FAQPage, VideoObject, Product with offers
- Pricing tiers in schema with prices, currency, availability
- FAQ content matches visible FAQ section

### Alternative Hub (`/alternative`) — **Good**
- Comparison matrix table with competitor data
- Schema: CollectionPage + BreadcrumbList
- Unique OG images per child page (`/alternative/[slug]`)
- **Missing:** FAQ schema on hub page; `rel="next/prev"` not applicable (not paginated)

### Industries Hub (`/industries`) — **Good**
- Grid of 13 industry cards with emojis, descriptions, use case counts
- Schema: CollectionPage + BreadcrumbList
- **Missing:** FAQ schema, unique OG image (uses default `/opengraph-image.png`)

### Glossary Hub (`/glossary`) — **Good**
- 50+ terms, A-Z navigation, category browse
- Schema: DefinedTermSet with all terms + URLs
- **Critical:** Term pages **NOT in sitemap** — 50+ definition pages invisible to crawlers

### Blog Index (`/blog`) — **Missing Social Metadata**
```typescript
// app/blog/page.tsx:6-13 — ONLY title + description + canonical
export const metadata: Metadata = {
  title: "Blog | White-Label Voice AI Insights",
  description: "...",
  alternates: { canonical: "/blog" },
}; // NO openGraph, NO twitter
```
- No OG image, no Twitter card — social shares will be blank
- Schema present (CollectionPage) but incomplete without image

### Blog Posts (`/blog/[slug]`) — **Excellent**
- Full Article schema with `speakable`, author, publisher, dates
- Unique OG images per post (`/blog/blogN.webp`)
- Keywords targeted per post

### Docs Hub (`/docs`) & Pages — **Good**
- Technical content with API references
- Metadata via `buildOpenGraph()` helper
- **Missing:** Sidebar navigation not crawlable (client-side only in `DocsHub`)

### Calculator (`/calculator`) — **Good**
- Interactive tool with FAQ schema
- WebApplication schema with free pricing
- GEO citations to authoritative sources

---

## Technical SEO

### Sitemap (`/sitemap.xml`)
| Check | Status | Notes |
|-------|--------|-------|
| Valid XML | ✅ | Generated via `next-sitemap` / `app/sitemap.ts` |
| All indexable pages | ❌ | Missing 50+ glossary terms, `/team`, `/team/[slug]` |
| Priority logic | ✅ | Home=1.0, whitelabel/docs=0.9, hubs=0.8, children=0.7, glossary terms=0.6 |
| Changefreq | ✅ | Home=weekly, docs=monthly, others=monthly |
| Lastmod | ✅ | Uses build-time `new Date()` — same for all; should use content dates |

### Robots (`/robots.txt`)
| Check | Status | Notes |
|-------|--------|-------|
| Allows all | ✅ | `User-agent: *` Allow: `/` |
| Disallows `/api/`, `/admin/` | ✅ | Correct |
| Explicit allow for AI crawlers | ✅ | GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, CCBot |
| Sitemap reference | ✅ | `Sitemap: https://www.fusioncalling.com/sitemap.xml` |
| Host directive | ✅ | `Host: www.fusioncalling.com` (RFC 9309 compliant) |

### Canonicals
- **Root layout:** `metadataBase: "https://www.fusioncalling.com/"` — good
- **Pages:** Most set `alternates.canonical` correctly
- **Issue:** Homepage sets canonical to `"/"` while metadataBase already handles it — duplicate signal

### Internal Linking
| Area | Score | Evidence |
|------|-------|----------|
| Nav/Footer | ✅ | Consistent across all pages |
| Hub → Children | ✅ | Industries hub links to 13 `/industries/[slug]`; Alternative hub links to 9 `/alternative/[slug]` |
| Blog → Hubs | ⚠️ Weak | Blog posts link to `/` and `/blog` but rarely to `/whitelabel` or `/industries/[slug]` |
| Schema Breadcrumbs | ✅ | Every page with schema has BreadcrumbList |
| Contextual Links | ⚠️ | Some in content (e.g., blog posts), but not systematic |

### Images
| Check | Status |
|-------|--------|
| `next/image` usage | ✅ All images use `next/image` with `fill` or explicit sizes |
| OG images | ⚠️ Most pages use default `/opengraph-image.png` (135KB — large per AGENTS.md) |
| Unique OG per page | ❌ Only `/whitelabel` (`/og.jpg`), `/alternative/[slug]`, `/blog/[slug]` have unique images |
| Alt text | ✅ Present on all `next/image` usages seen |

### Structured Data (Schema.org)
- **Comprehensive** on all major pages (Home, Whitelabel, Alternative children, Industries children, Blog posts, Calculator, Glossary)
- **Types used:** WebPage, Article, CollectionPage, LocalBusiness, Service, Product, Offer, FAQPage, HowTo, VideoObject, SoftwareApplication, BreadcrumbList, DefinedTermSet, AboutPage, Person, WebApplication
- **Quality:** High — includes `@id` references, nested graphs, prices, ratings, reviews, speakable
- **Validation:** Should pass Google Rich Results Test

---

## Keyword Opportunities

### Current Target Keywords (from metadata across site)
| Keyword Cluster | Pages Targeting | Gap |
|-----------------|-----------------|-----|
| "white label AI voice" | `/whitelabel`, `/alternative`, blog posts | — |
| "AI phone call automation" | `/`, `/ai-phone-call-automation` | — |
| "AI receptionist" | `/`, `/ai-phone-call-automation` | — |
| "Vapi white label" | `/blog/vapi-white-label-platform`, `/alternative/vapify` | — |
| "Retell white label" | `/blog/retell-ai-white-label`, `/alternative/thinkrr` | — |
| "GoHighLevel voice AI" | `/whitelabel/gohighlevel`, `/blog/gohighlevel-white-label-voice` | — |
| "voice AI agency" | `/blog/how-to-start-a-voice-ai-agency` | — |
| "AI voice for [industry]" | 13 `/industries/[slug]` pages | **Missing:** healthcare, legal specifics, solar, HVAC |
| "what is [voice AI term]" | 50 `/glossary/[slug]` pages | **Not indexed** (missing from sitemap) |

### Missing High-Intent Pages
| Keyword | Search Intent | Suggested URL |
|---------|---------------|---------------|
| "AI voice pricing" / "white label voice AI pricing" | Commercial | `/pricing` (currently only `#pricing` anchor) |
| "white label voice AI platform comparison" | Commercial | `/alternative` (exists) ✅ |
| "how to start AI voice agency" | Informational | `/blog/how-to-start-a-voice-ai-agency` ✅ |
| "AI voice agent demo" | Commercial | `/#show-case` anchor only |
| "voice AI API" | Developer | `/docs/api-reference` ✅ |

### Content Gaps
1. **No dedicated `/pricing` page** — high commercial intent, currently anchor-only
2. **Glossary terms not indexed** — 50+ long-tail definition queries lost
3. **Industry verticals missing:** Healthcare (HIPAA), Legal (attorney-client), Solar, HVAC, Mortgage
4. **No "Alternatives to [Competitor]" hub pages** — only comparison pages exist
5. **No case studies / customer stories section** — trust signal for agencies

---

## Competitor / SERP Comparison

> **Note:** Live SERP analysis requires Firecrawl/API access. Below is based on known competitive landscape for "white label AI voice" and codebase evidence.

| Competitor | Strengths | Gaps vs FusionCalling |
|------------|-----------|----------------------|
| **Vapify** | Strong SEO for "Vapi white label", pricing page, case studies | Single-provider (Vapi only) |
| **ChatDash** | Agency-focused content, comparison pages | Less technical depth |
| **Synthflow** | Large blog, "no-code" positioning, pricing transparency | Not white-label first |
| **Bland AI** | Developer-first, API docs, pricing page | No agency program |
| **VoiceAIWrapper** | Niche "wrapper" positioning | Thin content |

**Fusion Calling's Differentiators (not fully leveraged in SEO):**
- Multi-provider (Vapi + Retell + ElevenLabs) — unique
- 100% revenue keep — strong USP
- Guided 7-day launch — operational differentiator
- Live demo on homepage — conversion asset

---

## Prioritized Recommendations

### 🔴 Critical (Do This Week)

| # | Fix | File(s) | Effort | Impact |
|---|-----|---------|--------|--------|
| 1 | **Add server-rendered H1 to homepage** | `app/page.tsx` | 15 min | Core Web Vitals + SEO: first meaningful paint has heading |
| 2 | **Create `/pricing` page** (move from `#pricing` anchor) | New `app/pricing/page.tsx`, update `sitemap.ts` | 2-4 hrs | High-intent commercial traffic; currently unindexable |
| 3 | **Add glossary term pages to sitemap** | `app/sitemap.ts` — add `GLOSSARY_PATHS` to `STATIC_PATHS` | 10 min | 50+ long-tail definition pages indexed |
| 4 | **Add OG/Twitter metadata to `/blog` index** | `app/blog/page.tsx` | 10 min | Social shares for blog hub |

### 🟡 High (This Sprint)

| # | Fix | File(s) | Effort | Impact |
|---|-----|---------|--------|--------|
| 5 | **Unique OG images per hub** (industries, alternative, whitelabel, docs, calculator) | Create `/public/og-industries.png`, etc.; update metadata | 2-3 hrs | Social CTR, AI answer engine citations |
| 6 | **Add FAQ schema to `/industries` and `/alternative` hubs** | `app/industries/page.tsx`, `app/alternative/page.tsx` | 30 min | Rich results for "AI voice for [industry]" queries |
| 7 | **Fix duplicate canonical on homepage** | Remove `alternates.canonical` from `app/page.tsx:37` | 5 min | Clean canonical signal |
| 8 | **Add `/team` and `/team/[slug]` to sitemap** | `app/sitemap.ts` | 5 min | Team pages indexed (E-E-A-T) |
| 9 | **Use content `lastModified` in sitemap** | `app/sitemap.ts` — use `CONTENT_LAST_UPDATED` or per-page dates | 30 min | Freshness signal for crawlers |
| 10 | **Internal linking campaign** — blog posts → `/whitelabel`, `/industries/[slug]` | Edit 7 blog posts | 1 hr | Topical authority flow |

### 🟢 Medium (Next Sprint)

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 11 | Add case studies / customer stories section (`/case-studies`) | 4-8 hrs | Trust, conversion, long-tail keywords |
| 12 | Create "Alternatives to [Competitor]" hub pages (e.g., `/alternative/vapi-alternatives`) | 2-3 hrs per page | Capture comparison intent |
| 13 | Add missing industry verticals: Healthcare/HIPAA, Legal, Solar, HVAC, Mortgage | 2-3 hrs per page | Vertical search traffic |
| 14 | Optimize `/opengraph-image.png` (135KB → <100KB) | 15 min | Page speed, social render |
| 15 | Add `speakable` schema to glossary term pages (voice search) | 30 min | GEO / voice assistant visibility |
| 16 | Implement `rel="next/prev"` or pagination schema for blog index if >10 posts | 30 min | Crawl efficiency |
| 17 | Add `indexnow` submission on deploy (script exists: `npm run indexnow:submit`) | CI config | Faster indexing |

### 🔵 Low (Backlog)

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 18 | Add `WebSite` search action schema (sitelinks searchbox) | 30 min | Brand SERP |
| 19 | Implement `ItemList` schema for blog category pages | 1 hr | Rich results |
| 20 | Add hreflang if international expansion planned | 2 hrs | International SEO |
| 21 | Set up Google Search Console / Bing Webmaster Tools verification (env vars exist in layout) | 15 min | Monitoring |

---

## Sources

| Source | Type | What Was Checked |
|--------|------|------------------|
| `app/layout.tsx` | Root layout | Global metadata, schema, fonts, verification tags |
| `app/page.tsx` | Homepage | Metadata, schema, sections, components |
| `app/whitelabel/page.tsx` | Core landing | Metadata, schema (9 types), FAQ, HowTo, pricing |
| `app/alternative/page.tsx` | Comparison hub | Metadata, matrix table, schema |
| `app/alternative/[slug]/page.tsx` | Comparison pages | Dynamic metadata, unique OG images |
| `app/industries/page.tsx` | Industries hub | Metadata, grid, schema |
| `app/industries/[slug]/page.tsx` | Industry pages | Dynamic metadata, schema in component |
| `app/glossary/page.tsx` | Glossary hub | Metadata, DefinedTermSet schema |
| `app/blog/page.tsx` | Blog index | Metadata (missing OG), schema |
| `app/blog/[slug]/page.tsx` (sample) | Blog posts | Full Article schema, OG, speakable |
| `app/docs/page.tsx` | Docs hub | Metadata via `buildOpenGraph` |
| `app/calculator/page.tsx` | Calculator tool | Metadata, WebApplication + FAQ schema |
| `app/sitemap.ts` | Sitemap config | All paths, priorities, changefreq, dedup |
| `app/robots.ts` | Robots.txt | Rules, AI crawler allows, sitemap ref |
| `lib/seo.ts` | SEO utilities | `buildOpenGraph`, `GEO_SOURCES`, `BRAND` |
| `lib/glossary.ts` | Glossary data | 50 terms, categories, citations |
| `lib/industries.ts` | Industries data | 13 verticals, metadata fields |
| `lib/comparisons.ts` | Comparisons data | 9 competitors, metadata fields |

---

## Rerun Inputs

```yaml
workflow: firecrawl-seo-audit
site: https://www.fusioncalling.com
keywords:
  - "white label AI voice"
  - "AI phone call automation"
  - "AI receptionist"
  - "voice AI reseller"
  - "Vapi white label"
  - "Retell white label"
  - "GoHighLevel voice AI"
  - "voice AI agency"
  - "AI voice for real estate"
  - "AI voice for dental"
output: markdown
```