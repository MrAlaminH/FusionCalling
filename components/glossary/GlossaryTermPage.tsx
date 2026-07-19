import Link from "next/link";
import type { GlossaryTerm } from "@/lib/glossary";
import {
  slugifyTerm,
  getRelatedTerms,
  getGlossaryCitations,
  GLOSSARY_LAST_UPDATED,
} from "@/lib/glossary";
import { SITE_URL } from "@/lib/site-url";

export default function GlossaryTermPage({ term }: { term: GlossaryTerm }) {
  const slug = slugifyTerm(term.term);
  const related = getRelatedTerms(term, 6);
  const sources = getGlossaryCitations(term.category);
  const articleUrl = `${SITE_URL}/glossary/${slug}`;

  // Answer-first FAQ derived from the term's own definition + related terms.
  // Emitted as FAQPage schema (a top GEO signal) and rendered for readers.
  const relatedNames = related.map((r) => r.term);
  const faqs = [
    {
      question: `What is ${term.term}?`,
      answer: term.definition,
    },
    {
      question: `Why does ${term.term} matter for AI voice agents?`,
      answer: term.whyItMatters,
    },
    {
      question: `How is ${term.term} used in AI phone call automation?`,
      answer: `In AI phone call automation, ${term.term} is part of the ${term.category} foundation. ${term.whyItMatters} It connects closely to related concepts like ${relatedNames
        .slice(0, 3)
        .join(", ")}, which together shape how a voice agent understands callers and completes real tasks such as booking appointments and qualifying leads.`,
    },
  ];

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
        articleSection: term.category,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${articleUrl}#term` },
        author: { "@id": "https://www.fusioncalling.com/team/voice-team#person" },
        publisher: { "@id": `${SITE_URL}/#organization` },
        datePublished: GLOSSARY_LAST_UPDATED,
        dateModified: GLOSSARY_LAST_UPDATED,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
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

        {/* FAQ — answer-first, also emitted as FAQPage schema */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.question}
                className="glass rounded-2xl p-6 border border-brand/20"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{f.answer}</p>
              </div>
            ))}
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

        {/* Authoritative sources — GEO citations */}
        {sources.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Definitions and claims on this page are grounded in the following
              authoritative external references.
            </p>
            <ul className="flex flex-wrap gap-3">
              {sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2.5 border border-brand/20 hover:border-brand/40 transition-all text-gray-300 hover:text-brand-light text-sm font-medium"
                  >
                    {s.label}
                    <span aria-hidden className="text-brand-light">↗</span>
                  </a>
                </li>
              ))}
            </ul>
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
