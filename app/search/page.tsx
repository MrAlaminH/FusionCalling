import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { glossaryTerms, slugifyTerm } from "@/lib/glossary";
import { industries } from "@/lib/industries";
import { comparisons } from "@/lib/comparisons";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Search | Fusion Calling",
  description:
    "Search Fusion Calling's voice AI glossary, industry guides, platform comparisons, and documentation.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

type Result = {
  type: "Glossary" | "Industry" | "Comparison" | "Page";
  title: string;
  description: string;
  href: string;
};

// Small static-catalog of marketing pages we want searchable. Kept inline
// (rather than e.g. scanning the app router tree) so the result copy is
// intentional and on-brand.
const PAGES: Result[] = [
  {
    type: "Page",
    title: "White-Label AI Voice Agents",
    description:
      "Resell AI voice agents under your own brand. Import Vapi, Retell, and ElevenLabs agents; keep 100% of revenue.",
    href: "/whitelabel",
  },
  {
    type: "Page",
    title: "Pricing — AI Phone Call Automation",
    description:
      "Plans from $149/month with 500–2,100 included minutes. No long-term contracts. 14-day money-back guarantee.",
    href: "/pricing",
  },
  {
    type: "Page",
    title: "AI Phone Call Automation Explainer",
    description:
      "Plain-English guide to AI phone call automation: how voice agents answer and place calls, the tech behind them, and results.",
    href: "/ai-phone-call-automation",
  },
  {
    type: "Page",
    title: "Voice Throughput Calculator",
    description:
      "Calculate your AI voice call throughput. Plan lead processing and forecast call volumes for Vapi and Retell.",
    href: "/calculator",
  },
  {
    type: "Page",
    title: "Fusion Calling Documentation",
    description:
      "Technical docs: API reference, agent configuration, lead management, SMS messaging, and admin tools.",
    href: "/docs",
  },
  {
    type: "Page",
    title: "About Fusion Calling",
    description:
      "Fusion Calling builds human-like AI voice agents that automate inbound and outbound calls. Founded 2022.",
    href: "/about",
  },
];

// Build the searchable catalog once at module load. Cheap (a few hundred items)
// and keeps request handling pure.
const CATALOG: Result[] = [
  ...PAGES,
  ...glossaryTerms.map((t) => ({
    type: "Glossary" as const,
    title: t.term,
    description: t.definition,
    href: `/glossary/${slugifyTerm(t.term)}`,
  })),
  ...industries.map((i) => ({
    type: "Industry" as const,
    title: `AI Voice for ${i.name}`,
    description: i.subtitle,
    href: `/industries/${i.slug}`,
  })),
  ...comparisons.map((c) => ({
    type: "Comparison" as const,
    title: `${c.competitorName} vs Fusion Calling`,
    description: c.subtitle,
    href: `/alternative/${c.slug}`,
  })),
];

function scoreResult(result: Result, q: string): number {
  const haystack = `${result.title} ${result.description}`.toLowerCase();
  if (!haystack.includes(q)) return 0;
  // Title matches rank higher than description matches.
  const titleHits = result.title.toLowerCase().split(q).length - 1;
  const descHits = result.description.toLowerCase().split(q).length - 1;
  return titleHits * 10 + descHits;
}

function search(q: string): Result[] {
  const query = q.trim().toLowerCase();
  if (query.length < 2) return [];
  return CATALOG.map((r) => ({ r, score: scoreResult(r, query) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 30)
    .map((x) => x.r);
}

const TYPE_BADGE: Record<Result["type"], string> = {
  Glossary: "bg-brand/10 text-brand-light border-brand/30",
  Industry: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  Comparison: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  Page: "bg-gray-500/10 text-gray-300 border-gray-500/30",
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const rawQuery = searchParams.q ?? "";
  const results = search(rawQuery);
  const hasQuery = rawQuery.trim().length >= 2;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Search", item: `${SITE_URL}/search` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/search#webpage`,
        url: `${SITE_URL}/search`,
        name: "Search | Fusion Calling",
        description:
          "Search Fusion Calling's voice AI glossary, industry guides, platform comparisons, and documentation.",
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
    ],
  };

  return (
    <>
      <Script
        id="search-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Search
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 leading-relaxed">
            Find voice AI terms, industry guides, platform comparisons, and docs.
          </p>

          {/* Search form — GET so queries are shareable and back-button friendly */}
          <form role="search" method="get" action="/search" className="mb-10">
            <div className="flex gap-3">
              <input
                type="search"
                name="q"
                defaultValue={rawQuery}
                aria-label="Search Fusion Calling"
                placeholder="Search — e.g. ASR, AI receptionist, Vapi, real estate"
                autoFocus
                className="flex-1 bg-zinc-900 border border-brand/30 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all"
              >
                Search
              </button>
            </div>
          </form>

          {/* Results */}
          {hasQuery && (
            <div>
              <p className="text-sm text-gray-500 mb-4">
                {results.length === 0
                  ? `No results for "${rawQuery}".`
                  : `${results.length} result${results.length === 1 ? "" : "s"} for "${rawQuery}".`}
              </p>

              {results.length > 0 && (
                <ul className="space-y-3">
                  {results.map((r) => (
                    <li key={`${r.type}-${r.href}`}>
                      <Link
                        href={r.href}
                        className="block glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h2 className="text-base md:text-lg font-semibold text-white group-hover:text-brand-light transition-colors">
                            {r.title}
                          </h2>
                          <span
                            className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${TYPE_BADGE[r.type]}`}
                          >
                            {r.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                          {r.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {results.length === 0 && (
                <div className="glass-light rounded-xl p-8 border border-brand/20 text-center">
                  <p className="text-gray-400 mb-4">
                    Try a different term, or browse our most popular resources:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/glossary" className="text-brand-light hover:text-brand transition-colors text-sm">
                      Voice AI Glossary →
                    </Link>
                    <Link href="/industries" className="text-brand-light hover:text-brand transition-colors text-sm">
                      Industries →
                    </Link>
                    <Link href="/alternative" className="text-brand-light hover:text-brand transition-colors text-sm">
                      Platform Comparisons →
                    </Link>
                    <Link href="/docs" className="text-brand-light hover:text-brand transition-colors text-sm">
                      Docs →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {!hasQuery && (
            <div className="glass-light rounded-xl p-6 border border-brand/20">
              <p className="text-sm text-gray-400 mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI receptionist",
                  "ASR",
                  "Vapi",
                  "real estate",
                  "white label",
                  "HIPAA",
                ].map((term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="text-xs px-3 py-1.5 rounded-full bg-brand/10 text-brand-light border border-brand/30 hover:bg-brand/20 transition-colors"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
