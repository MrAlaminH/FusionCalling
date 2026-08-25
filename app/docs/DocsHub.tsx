import Link from "next/link";
import { GEO_SOURCES } from "@/lib/seo";
import DocsSearchInput from "./docs-search-input";
import DocsGrid from "./docs-grid";

const docFaqs = [
  {
    question: "What can I build with the Fusion Calling documentation?",
    answer:
      "The docs cover everything you need to integrate and run AI voice agents: the External Calendar and Leads APIs, authentication, webhooks, agent configuration, lead management, SMS messaging, and the admin section.",
  },
  {
    question: "How do I authenticate API requests?",
    answer:
      "Every API request is authenticated with a bearer token as documented in the API Reference. Webhooks push call outcomes, lead events, and transcriptions to your endpoints so you can sync them into any CRM.",
  },
  {
    question: "Does Fusion Calling support white-label resellers?",
    answer:
      "Yes. Agencies can resell AI voice agents under their own brand using the white-label program, bringing their own Vapi, Retell, or ElevenLabs keys and managing unlimited client sub-accounts from one dashboard.",
  },
];

const docSources = [
  GEO_SOURCES.fusionApi,
  GEO_SOURCES.schema,
  GEO_SOURCES.googleSearchCentral,
];

export default function DocsHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                    name: "Documentation",
                    item: "https://www.fusioncalling.com/docs",
                  },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": "https://www.fusioncalling.com/docs#collectionpage",
                url: "https://www.fusioncalling.com/docs",
                name: "Fusion Calling Documentation",
                description:
                  "Complete documentation for Fusion Calling AI voice automation platform",
              },
              {
                "@type": "FAQPage",
                mainEntity: docFaqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand/10 via-brand/5 to-brand-strong/10 py-16 sm:py-24 border-b border-brand/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
                  Fusion Calling
                </span>
                <br />
                Documentation
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Complete guides and API documentation for integrating and using Fusion Calling&apos;s AI voice automation platform.
              </p>

              {/* Search Bar (client island) */}
              <DocsSearchInput />
            </div>
          </div>
        </div>

        {/* Documentation Grid + static content — server rendered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
          {/* Filtered grid (client island) */}
          <DocsGrid />

          {/* FAQ — answer-first; also emitted as FAQPage schema */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Documentation FAQ
            </h2>
            <div className="space-y-4">
              {docFaqs.map((f) => (
                <div
                  key={f.question}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {f.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Authoritative sources — GEO citations */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
            <ul className="flex flex-wrap gap-3">
              {docSources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2.5 text-gray-300 hover:text-brand-strong hover:border-brand/40 transition-all text-sm font-medium"
                  >
                    {s.label}
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Getting Started CTA */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Help Getting Started?
              </h2>
              <p className="text-gray-400 mb-8">
                Our team can help you integrate Fusion Calling into your workflow and optimize your AI voice automation strategy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://cal.com/mralamin/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand hover:bg-brand-strong text-white font-medium rounded-lg transition-all hover:scale-105"
                >
                  Schedule a Call
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-brand/50 text-white font-medium rounded-lg hover:bg-brand/10 transition-all"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
