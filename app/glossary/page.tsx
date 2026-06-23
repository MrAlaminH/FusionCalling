import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { glossaryTerms, glossaryCategories, slugifyTerm } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Voice AI Glossary | Fusion Calling",
  description:
    "A complete glossary of voice AI terms for agencies. Plain-English definitions for ASR, TTS, latency, HIPAA, white-label, and more, to help you build and sell voice AI.",
  alternates: {
    canonical: "/glossary",
  },
  keywords: [
    "voice ai glossary",
    "ai voice terminology",
    "what is asr",
    "what is tts",
    "white label voice ai",
    "voice ai definitions",
  ],
  openGraph: {
    title: "Voice AI Glossary | Fusion Calling",
    description:
      "A complete glossary of voice AI terms for agencies, with plain-English definitions.",
    url: "https://www.fusioncalling.com/glossary",
    siteName: "Fusion Calling",
    type: "website",
  },
};

export default function GlossaryHubPage() {
  const sorted = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term),
  );

  // Group by first letter
  const letters = Array.from(
    new Set(sorted.map((t) => t.term[0].toUpperCase())),
  ).sort();

  const byLetter = (letter: string) =>
    sorted.filter((t) => t.term[0].toUpperCase() === letter);

  const byCategory = (cat: string) => sorted.filter((t) => t.category === cat);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.fusioncalling.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Glossary",
            item: "https://www.fusioncalling.com/glossary",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.fusioncalling.com/glossary#collectionpage",
        url: "https://www.fusioncalling.com/glossary",
        name: "Voice AI Glossary",
        description:
          "A complete glossary of voice AI terms for agencies, with plain-English definitions.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.fusioncalling.com/#website" },
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://www.fusioncalling.com/glossary#termset",
        name: "Voice AI Glossary",
        hasDefinedTerm: sorted.map((t) => ({
          "@type": "DefinedTerm",
          name: t.term,
          description: t.definition,
          url: `https://www.fusioncalling.com/glossary/${slugifyTerm(t.term)}`,
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="glossary-index-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white py-8 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 pt-4 md:pt-6 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Voice AI Glossary
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              {glossaryTerms.length} essential voice AI terms, defined in plain
              English. Whether you&apos;re building or selling voice AI, this is your
              reference for the vocabulary that powers the industry.
            </p>
          </div>

          {/* A-Z quick nav */}
          <div className="glass rounded-2xl p-4 md:p-6 border border-brand/20 mb-12">
            <div className="flex flex-wrap justify-center gap-1.5">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand/10 text-brand-light hover:bg-brand hover:text-white font-bold transition-all text-sm"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Terms by letter */}
          <div className="space-y-12 mb-16">
            {letters.map((letter) => (
              <section key={letter} id={letter} className="scroll-mt-28">
                <h2 className="text-3xl font-bold text-brand-light mb-6 border-b border-brand/20 pb-3">
                  {letter}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {byLetter(letter).map((t) => (
                    <Link
                      key={t.term}
                      href={`/glossary/${slugifyTerm(t.term)}`}
                      className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-brand-light transition-colors mb-1">
                            {t.term}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {t.category}
                          </span>
                        </div>
                        <span className="text-orange-400 text-sm group-hover:translate-x-1 transition-transform flex-shrink-0">
                          →
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mt-3 line-clamp-2">
                        {t.definition}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Browse by category */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
              Browse by Category
            </h2>
            <p className="text-gray-400 text-center mb-8">
              {glossaryCategories.length} categories covering the full voice AI
              stack.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {glossaryCategories.map((cat) => (
                <div
                  key={cat}
                  className="glass-light rounded-2xl p-6 border border-brand/20"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-2">{cat}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {byCategory(cat).length} terms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {byCategory(cat).slice(0, 4).map((t) => (
                      <Link
                        key={t.term}
                        href={`/glossary/${slugifyTerm(t.term)}`}
                        className="text-xs text-gray-400 hover:text-brand-light transition-colors"
                      >
                        {t.term}
                        {byCategory(cat).indexOf(t) < 3 ? "," : ""}
                      </Link>
                    ))}
                    {byCategory(cat).length > 4 && (
                      <span className="text-xs text-gray-600">
                        +{byCategory(cat).length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-brand/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Put These Terms Into Practice?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Fusion Calling gives agencies a branded voice AI platform with
              multi-provider support, guided onboarding, and full brand ownership.
            </p>
            <Link
              href="/whitelabel"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
            >
              Explore the Partner Program
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
