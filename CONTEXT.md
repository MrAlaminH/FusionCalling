# Fusion Calling — Domain Context

Marketing site for fusioncalling.com: an AI receptionist / white-label voice AI platform.
Two audiences, two pricing surfaces — never blur them:

- **End businesses** buy AI receptionist coverage directly (DIRECT_PLANS).
- **Agencies/resellers** (primary) white-label the platform and resell it (WHOLESALE_PLANS).

## Domain glossary

- **Product facts** — the commercial truths of the platform (pricing tiers, launch-time
  claims, provider support, trial terms). Single home: `lib/product-facts.ts`. Data
  registries and templates import from it; a price change is one edit. The canonical
  launch claim is "24 hours" (guided platform launch); "one week" refers to
  application→first-sale, a different fact.
- **Blog post** — a record in `lib/blog-posts.ts` plus a body in
  `app/blog/<slug>/page.tsx`. The record is the interface: title, `metaTitle` (SERP-
  shortened variant), description, dates, FAQs (`lib/blog-faqs.ts`, keyed by slug).
  Metadata and JSON-LD derive from the record via `buildPostMetadata`/`buildBlogGraph`;
  pages never restate them. Display surfaces sort by date (`blogPostsByDate`,
  `getFeaturedPost`, `getRelatedPosts`) — registry order is authoring order.
- **Comparison** — a Fusion-vs-competitor page at `/alternative/<slug>` (20 entries in
  `lib/comparisons.ts`), rendered by the shared `ComparisonPage` module.
- **Provider** — a voice platform agencies bring (`lib/whitelabel-providers.ts`), pages
  at `/whitelabel/<slug>` via `ProviderPageTemplate`, schema via `buildProviderGraph`.
  Serves reseller intent; distinct from the comparison entry for the same platform.
- **Industry vertical** — `/industries/<slug>` from `lib/industries.ts`.

## Reference pattern (copy this)

The industries family and `/alternative/[slug]` show the house style:

1. Typed registry in `lib/` (data only, no rendering).
2. One deep renderer owning its JSON-LD (`IndustryPage`, `ComparisonPage`).
3. Thin route: `generateStaticParams` + `generateMetadata` + render.
4. Shared schema builders in `lib/seo.ts` (`faqSchema`, `breadcrumbSchema`,
   `webPageSchema`, `articleSchema`, `offerSchema`) beside `buildOpenGraph`.

## Invariants (enforced by `npm run check:data`, part of `build`)

- Every post has FAQs; every FAQ key maps to a post; slugs unique per registry.
- Comparison launch/feature-update claims lead with the canonical product facts.
- Benchmark tables parse competitor stats from the comparison entry (single source).

## Known ceilings

- `BlogPost.updated` exists for sitemap `lastmod` but nothing populates it yet — set it
  when a post is materially revised.
- `whitelabel-providers.ts` and `comparisons.ts` describe the same four platforms from
  two intents (reseller pitch vs comparison); deliberate — share facts via
  `lib/product-facts.ts`, don't merge the registries.
