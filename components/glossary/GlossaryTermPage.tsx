import Link from "next/link";
import Script from "next/script";
import type { GlossaryTerm } from "@/lib/glossary";
import { slugifyTerm, getRelatedTerms } from "@/lib/glossary";
import { SITE_URL } from "@/lib/site-url";

export default function GlossaryTermPage({ term }: { term: GlossaryTerm }) {
  const slug = slugifyTerm(term.term);
  const related = getRelatedTerms(term, 6);
  const articleUrl = `${SITE_URL}/glossary/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE_URL}/glossary` },
          { "@type": "ListItem", position: 3, name: term.term, item: articleUrl },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${articleUrl}#term`,
        name: term.term,
        description: term.definition,
        inDefinedTermSet: `${SITE_URL}/glossary`,
        url: articleUrl,
      },
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        url: articleUrl,
        headline: `${term.term} - Voice AI Term Explained`,
        description: term.definition,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: { "@type": "Organization", name: "Fusion Calling", url: `${SITE_URL}/` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <Script
        id={`${slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/glossary"
            className="inline-flex items-center text-brand-light hover:text-brand-light mb-8 transition-colors"
          >
            ← Back to Glossary
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-brand to-brand-strong rounded-full text-sm font-semibold text-white">
              {term.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              {term.term}
            </span>
          </h1>
        </div>

        {/* Definition */}
        <div className="glass rounded-2xl p-8 border border-brand/20 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-light mb-4">
            Definition
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">{term.definition}</p>
        </div>

        {/* Why it matters */}
        <div className="glass-light rounded-2xl p-8 border border-brand/30 mb-10">
          <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
            <h2 className="text-xl font-bold text-brand-light mb-3">
              Why it matters
            </h2>
            <p className="text-gray-300 leading-relaxed">{term.whyItMatters}</p>
          </div>
        </div>

        {/* Related terms */}
        {related.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Related Terms</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.term}
                  href={`/glossary/${slugifyTerm(r.term)}`}
                  className="glass-light rounded-full px-5 py-2.5 border border-brand/20 hover:border-brand/40 transition-all text-gray-300 hover:text-brand-light text-sm font-medium"
                >
                  {r.term}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="glass rounded-2xl p-8 border border-brand/30">
          <h2 className="text-2xl font-bold text-white mb-3">
            Put Voice AI to Work for Your Agency
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Understanding the terminology is the first step. Launching a branded
            voice AI practice is the next. Fusion Calling helps agencies go live in
            about 7 days, with multi-provider support, done-with-you onboarding,
            and full brand ownership.
          </p>
          <Link
            href="/whitelabel"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
          >
            Explore the Partner Program
            <span className="ml-2">→</span>
          </Link>
        </div>
      </article>
    </>
  );
}
