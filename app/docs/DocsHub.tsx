import Link from "next/link";
import { GEO_SOURCES } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";
import DocsSearchInput from "./docs-search-input";
import DocsGrid from "./docs-grid";
import DocsFaqAccordion from "@/components/docs/docs-faq";

const docFaqs = [
  {
    question: "Where do I start if I'm new?",
    answer:
      "Start with Agent Configuration (10 min, Beginner) to create your first voice agent, then Lead Management to upload leads. Developers integrating programmatically should jump to the API Reference Quick Start.",
  },
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

const journeySteps = [
  {
    step: "01",
    title: "Pick your path",
    text: "New to voice AI? Start with Agent Setup. Integrating? Open the API Reference.",
  },
  {
    step: "02",
    title: "Follow the guide",
    text: "Each guide lists time + level up front, with steps, best practices, and troubleshooting.",
  },
  {
    step: "03",
    title: "Ship + scale",
    text: "Connect webhooks, sync your CRM, then scale with SMS campaigns and retries.",
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
                    item: `${SITE_URL}/`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Documentation",
                    item: `${SITE_URL}/docs`,
                  },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": `${SITE_URL}/docs#collectionpage`,
                url: `${SITE_URL}/docs`,
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
        {/* Hero — split-screen: type left, live API panel right */}
        <div className="border-b border-brand/20 bg-gradient-to-br from-brand/10 via-brand/5 to-brand-strong/10 py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-2xl">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-black/40 px-4 py-1.5 text-xs sm:text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                    Documentation · 5 guides · ~65 min total
                  </span>
                </div>
                <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
                    Fusion Calling
                  </span>{" "}
                  Docs
                </h1>
                <p className="mb-8 text-lg sm:text-xl leading-relaxed text-gray-400">
                  Set up your first AI voice agent in 10 minutes, or integrate
                  the Calendar + Leads APIs with copy-paste examples.
                </p>

                {/* Search Bar (client island) */}
                <DocsSearchInput />
                <p className="mt-2 text-xs text-gray-500">
                  Try &ldquo;webhooks&rdquo;, &ldquo;agent&rdquo;, or
                  &ldquo;Twilio&rdquo; — filters guides + topics below.
                </p>

                {/* Quick links */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/docs/agent-configuration"
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-brand text-white font-medium hover:bg-brand-strong transition"
                  >
                    Start here: Agent Setup · 10 min
                  </Link>
                  <Link
                    href="/docs/api-reference"
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-gray-300 hover:text-brand hover:border-brand/40 transition"
                  >
                    API Reference
                  </Link>
                  <Link
                    href="/docs/api-reference#webhooks"
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-gray-300 hover:text-brand hover:border-brand/40 transition"
                  >
                    Webhooks
                  </Link>
                </div>
              </div>

              {/* Real API call — the product's core primitive, at a glance */}
              <div className="rounded-xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="ml-2 text-xs text-gray-500 font-mono">
                    fusion-calling — events
                  </span>
                  <span className="ml-auto rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400">
                    200 OK
                  </span>
                </div>
                <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-brand">$</span>{" "}
                    <span className="text-gray-300">
                      curl https://app.fusioncalling.com
                    </span>
                    {"\n"}
                    {"  "}
                    <span className="text-gray-300">
                      /api/calendar/external/v1/events \
                    </span>
                    {"\n"}
                    {"  "}
                    <span className="text-gray-500">-H</span>{" "}
                    <span className="text-gray-300">
                      &quot;Authorization: Bearer fc_live_…&quot;
                    </span>
                    {"\n\n"}
                    <span className="text-green-400">200 OK</span>
                    {"\n"}
                    <span className="text-gray-400">
                      {"{ "}
                      <span className="text-gray-300">&quot;events&quot;</span>
                      {": ["}
                      <span className="text-gray-300">
                        &quot;booked-call-tue-2pm&quot;
                      </span>
                      {" … ] }"}
                    </span>
                  </code>
                </pre>
                <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
                  <p className="text-xs text-gray-500">
                    Copy-paste examples in every endpoint.
                  </p>
                  <Link
                    href="/docs/api-reference#your-first-request"
                    className="text-xs font-medium text-brand-light hover:text-brand"
                  >
                    Your first request →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Grid + static content — server rendered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-16">
          {/* How it works — 3-step journey */}
          <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {journeySteps.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="mb-3 font-mono text-xs text-brand">{s.step}</p>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-gray-400">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Filtered grid (client island) */}
          <DocsGrid />

          {/* FAQ — native accordion, single-open; also emitted as FAQPage schema */}
          <div className="mt-16">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-gray-500">
              Questions
            </p>
            <h2 className="mb-6 max-w-[24ch] text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The ones we&rsquo;re asked most often.
            </h2>
            <DocsFaqAccordion faqs={docFaqs} />
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
                    className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2.5 text-gray-300 hover:text-brand-strong hover:border-brand/40 transition text-sm font-medium"
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand hover:bg-brand-strong text-white font-medium rounded-lg transition hover:scale-105"
                >
                  Schedule a Call
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-brand/50 text-white font-medium rounded-lg hover:bg-brand/10 transition"
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
