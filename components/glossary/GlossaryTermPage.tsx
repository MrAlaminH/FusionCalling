import Link from "next/link";
import type { GlossaryTerm } from "@/lib/glossary";
import {
  slugifyTerm,
  getRelatedTerms,
  getGlossaryCitations,
  GLOSSARY_LAST_UPDATED,
} from "@/lib/glossary";
import { SITE_URL } from "@/lib/site-url";

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const CTA_VARIANTS = [
  {
    heading: "Put Voice AI to Work for Your Agency",
    text: "Understanding the terminology is the first step. Launching a branded voice AI practice is the next. Fusion Calling helps agencies go live in 24 hours, with multi-provider support, done-with-you onboarding, and full brand ownership.",
    cta: "Explore the Partner Program",
  },
  {
    heading: "Turn This Concept Into Client Revenue",
    text: "Every term in this glossary maps to something you can resell: an agent that books, reminds, and follows up under your brand. Partner plans start at $99/month for 6 sub-accounts with Stripe rebilling built in.",
    cta: "See Partner Pricing",
  },
  {
    heading: "Hear It on a Live Call First",
    text: "Reading about voice AI only goes so far. Listen to recorded demo calls on the homepage, then bring your own test script — most agencies know within one call whether this fits their clients.",
    cta: "Hear the Live Demo",
  },
  {
    heading: "Launch Your First Voice Agent in 24 Hours",
    text: "Pick one use case — after-hours answering is the fastest win — and ship it branded this week. Guided setup covers voices, calendars, and transfer rules, so you sell while we handle the plumbing.",
    cta: "Start With Agent Setup",
  },
];

export default function GlossaryTermPage({ term }: { term: GlossaryTerm }) {
  const slug = slugifyTerm(term.term);
  const related = getRelatedTerms(term, 6);
  const sources = getGlossaryCitations(term.category);
  const articleUrl = `${SITE_URL}/glossary/${slug}`;

  // Answer-first FAQ. Q1/Q2 deliberately ask DIFFERENT questions than the
  // Definition / Why-it-matters blocks above (no verbatim restating), so each
  // answer adds new information. Emitted as FAQPage schema and rendered.
  const relatedNames = related.map((r) => r.term);
  const relatedList =
    relatedNames.slice(0, 3).join(", ") ||
    "booking, handoff, and follow-up basics";
  const firstRelated = relatedNames[0] ?? "call transcripts";
  const faqs = [
    {
      question: `How is ${term.term} used on a real phone call?`,
      answer: `On a live call, ${term.term} shows up in the moments that decide whether a caller books, waits, or hangs up. It sits in the ${term.category} layer of the voice stack and works alongside ${relatedList} — evaluate it on real calls with background noise and interruptions before trusting it in production.`,
    },
    {
      question: `Why does ${term.term} matter for AI voice agents?`,
      answer: `${term.whyItMatters} In practice, teams confirm it in the first weeks of ${firstRelated} review: when bookings hold and handoffs stay clean, the deployment is earning its keep.`,
    },
    {
      question: `How is ${term.term} used in AI phone call automation?`,
      answer: `In AI phone call automation, ${term.term} is part of the ${term.category} foundation. It connects closely to related concepts like ${relatedList}, which together shape how a voice agent understands callers and completes real tasks such as booking appointments and qualifying leads.`,
    },
  ];

  // Cross-sell boilerplate rotated by slug hash so 77 term pages don't share
  // one identical CTA paragraph.
  const cta = CTA_VARIANTS[hashSlug(slug) % CTA_VARIANTS.length];

  // Secondary "keep researching" link mapped from the term's category, so the
  // glossary's 80 pages vote for the receptionist/agent/automation money pages
  // they're actually about — not only the whitelabel program.
  const CATEGORY_GUIDES: Record<string, { href: string; label: string }> = {
    "Core AI & Voice": {
      href: "/ai-receptionist",
      label: "how an AI receptionist works",
    },
    "Speech Technology": {
      href: "/ai-voice-agent",
      label: "what an AI voice agent is",
    },
    Telephony: {
      href: "/ai-phone-call-automation",
      label: "AI phone call automation, end to end",
    },
    "Conversational Design": {
      href: "/ai-phone-call-receptionist",
      label: "the AI phone call receptionist guide",
    },
    "Compliance & Security": {
      href: "/ai-phone-call-receptionist",
      label: "running a compliant AI receptionist",
    },
    "Business & Operations": {
      href: "/ai-phone-answering-service",
      label: "the AI answering service buyer's guide",
    },
  };
  const categoryGuide = CATEGORY_GUIDES[term.category];

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
        image: `${SITE_URL}/cardImage.jpg`,
        inLanguage: "en-US",
        articleSection: term.category,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${articleUrl}#term` },
        author: { "@id": `${SITE_URL}/team/voice-team#person` },
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
            {term.platform && (
              <Link
                href={term.platform.href}
                className="inline-block mt-3 text-sm font-semibold text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
              >
                {term.platform.label}
              </Link>
            )}
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
                  className="glass-light rounded-full px-5 py-2.5 border border-brand/20 hover:border-brand/40 transition text-gray-300 hover:text-brand-light text-sm font-medium"
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
                    className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2.5 border border-brand/20 hover:border-brand/40 transition text-gray-300 hover:text-brand-light text-sm font-medium"
                  >
                    {s.label}
                    <span aria-hidden className="text-brand-light">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA — variant rotated by slug hash to avoid site-wide duplication */}
        <div className="glass rounded-2xl p-8 border border-brand/30">
          <h2 className="text-2xl font-bold text-white mb-3">{cta.heading}</h2>
          <p className="text-gray-400 leading-relaxed mb-6">{cta.text}</p>
          <Link
            href="/whitelabel"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition shadow-premium hover:shadow-premium-lg hover:scale-105"
          >
            {cta.cta}
            <span className="ml-2">→</span>
          </Link>
          {categoryGuide ? (
            <p className="mt-5 text-sm text-gray-400">
              Just researching? See{" "}
              <Link
                href={categoryGuide.href}
                className="text-brand-light hover:text-brand transition-colors"
              >
                {categoryGuide.label}
              </Link>
              .
            </p>
          ) : null}
        </div>
      </article>
    </>
  );
}
