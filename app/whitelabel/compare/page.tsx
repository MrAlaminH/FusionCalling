import type { Metadata } from "next";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/white-label/CTA";
import { comparisons } from "@/lib/comparisons";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";
import { truncateAtWord } from "@/lib/utils";

const title = "Best White-Label AI Voice Platforms Compared";
const description =
  "Compare white-label AI voice platforms side-by-side: pricing, sub-accounts, features & multi-provider import for Vapi, Retell & ElevenLabs. From $99/mo.";

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title: `${title} | Fusion Calling`,
    description: truncateAtWord(description, 158),
    path: "/whitelabel/compare",
  }),
};

const WHITELABEL_COMPARISON_ROWS = [
  {
    label: "Starting Monthly Cost",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("starting")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "$99/mo",
  },
  {
    label: "Voice Providers Supported",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("voice")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "Vapi, Retell AI, ElevenLabs",
  },
  {
    label: "Sub-Accounts Included",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("sub") ||
        r.label.toLowerCase().includes("account") ||
        r.label.toLowerCase().includes("client")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "6–Unlimited",
  },
  {
    label: "White-Label Dashboard",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("dashboard") ||
        r.label.toLowerCase().includes("white label") ||
        r.label.toLowerCase().includes("branding")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "Full (logo, domain, colors, email)",
  },
  {
    label: "Client Portal",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("portal") ||
        r.label.toLowerCase().includes("client")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "Yes — per-client branded portal",
  },
  {
    label: "Sub-Account Billing",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("billing") ||
        r.label.toLowerCase().includes("revenue") ||
        r.label.toLowerCase().includes("keep")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "Keep 100% of revenue",
  },
  {
    label: "Minute Rebilling",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("minute") ||
        r.label.toLowerCase().includes("min") ||
        r.label.toLowerCase().includes("usage")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "Yes",
  },
  {
    label: "Onboarding Model",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("onboarding") ||
        r.label.toLowerCase().includes("setup")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "Guided self-serve (1–2 days)",
  },
  {
    label: "API Access",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("api")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "Yes (Scale plan)",
  },
  {
    label: "Dedicated Account Manager",
    getValue: (c: (typeof comparisons)[number]) => {
      const row = c.comparisonRows.find((r) =>
        r.label.toLowerCase().includes("account") ||
        r.label.toLowerCase().includes("manager") ||
        r.label.toLowerCase().includes("support")
      );
      return row?.competitor ?? "—";
    },
    fusionValue: "Yes (Scale plan)",
  },
];

export default function WhitelabelComparePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/whitelabel/compare#webpage`,
        url: `${SITE_URL}/whitelabel/compare`,
        name: title,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        dateModified: CONTENT_LAST_UPDATED,
        breadcrumb: {
          "@id": `${SITE_URL}/whitelabel/compare#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/whitelabel/compare#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "White-label Partner Program",
            item: `${SITE_URL}/whitelabel`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Compare White-Label Platforms",
            item: `${SITE_URL}/whitelabel/compare`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/whitelabel/compare#faqpage`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best white-label AI voice platform?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best white-label AI voice platform depends on your needs, but Fusion Calling stands out for multi-provider support (Vapi, Retell AI, ElevenLabs), sub-account billing where you keep 100% of revenue, full white-label dashboard with custom domain and branding, and plans starting at $99/month for 6 sub-accounts.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a white-label AI voice platform cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "White-label AI voice platforms typically range from $99/month to $499/month wholesale. Fusion Calling offers three tiers: Starter ($99/mo, 6 sub-accounts), Growth ($299/mo, 20 sub-accounts), and Scale ($499/mo, unlimited sub-accounts, dedicated account manager, API access). Partners keep 100% of what they charge clients.",
            },
          },
          {
            "@type": "Question",
            name: "Which white-label AI voice platform supports Vapi, Retell, and ElevenLabs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fusion Calling is one of the few white-label platforms with native multi-provider import: Vapi, Retell AI, and ElevenLabs. You can import existing agents and API keys from any provider and resell them under one branded dashboard.",
            },
          },
        ],
      },
      {
        "@type": "Table",
        "@id": `${SITE_URL}/whitelabel/compare#table`,
        name: "White-Label AI Voice Platform Comparison",
        description:
          "Side-by-side comparison of top white-label AI voice platforms including Fusion Calling, Vapify, Voicerr, VoiceAIWrapper, Synthflow, Thinkrr, Bland AI, and Air AI.",
      },
    ],
  };

  return (
    <>
      <script
        id="compare-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Hero */}
        <section className="relative pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full glass-light px-4 py-1.5 text-xs sm:text-sm text-brand-light border border-brand/20 mb-6">
              Side-by-Side Comparison
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Best White-Label AI Voice Platforms{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                Compared
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Compare the top white-label AI voice platforms for agencies.
              We&apos;ve analyzed pricing, features, sub-account support, and
              white-label capabilities so you can make the right choice.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                <table className="min-w-full divide-y divide-brand/20">
                  <thead>
                    <tr>
                      <th className="sticky left-0 bg-black px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-400 min-w-[140px]">
                        Feature
                      </th>
                      <th className="bg-gradient-to-r from-brand/20 to-brand/10 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-brand-light min-w-[120px]">
                        Fusion Calling
                      </th>
                      {comparisons.map((c) => (
                        <th
                          key={c.slug}
                          className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-400 min-w-[120px]"
                        >
                          {c.competitorName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand/10">
                    {WHITELABEL_COMPARISON_ROWS.map((row, i) => (
                      <tr
                        key={row.label}
                        className={
                          i % 2 === 0
                            ? "bg-white/[0.02]"
                            : "bg-transparent"
                        }
                      >
                        <td className="sticky left-0 bg-black px-4 py-3 text-sm font-medium text-white whitespace-nowrap">
                          {row.label}
                        </td>
                        <td className="bg-gradient-to-r from-brand/10 to-brand/5 px-4 py-3 text-center text-sm text-brand-light font-semibold">
                          {row.fusionValue}
                        </td>
                        {comparisons.map((c) => (
                          <td
                            key={c.slug}
                            className="px-4 py-3 text-center text-sm text-gray-400"
                          >
                            {row.getValue(c)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Cards */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Details
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                Dive deeper into each white-label AI voice platform.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisons.map((c) => (
                <a
                  key={c.slug}
                  href={`/alternative/${c.slug}`}
                  className="group glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <div className="text-3xl mb-3">{c.heroEmoji}</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-light transition-colors mb-2">
                    {c.competitorName}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {c.quickAnswer}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-brand-light">
                      Read full comparison
                    </span>
                    <span className="text-brand-light text-sm group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Common questions about white-label AI voice platforms.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "What is the best white-label AI voice platform?",
                  a: "The best white-label AI voice platform depends on your needs. Fusion Calling offers the most flexibility with multi-provider support (Vapi, Retell AI, ElevenLabs), full white-label branding, sub-account billing where you keep 100% of revenue, and plans starting at $99/month for 6 sub-accounts.",
                },
                {
                  q: "How much does a white-label AI voice platform cost?",
                  a: "White-label AI voice platforms typically range from $99/month to $499/month wholesale. Fusion Calling offers Starter ($99/mo, 6 sub-accounts), Growth ($299/mo, 20 sub-accounts, priority support, advanced analytics), and Scale ($499/mo, unlimited sub-accounts, dedicated account manager, API access). Partners keep 100% of what they charge clients.",
                },
                {
                  q: "Which platform supports Vapi, Retell, AND ElevenLabs?",
                  a: "Fusion Calling is one of the few white-label platforms with native multi-provider import: Vapi, Retell AI, and ElevenLabs. You can import existing agents and API keys from any provider and resell them under one branded dashboard.",
                },
                {
                  q: "Can I switch from another white-label platform to Fusion Calling?",
                  a: "Yes. Because Fusion Calling is multi-provider, you can bring your existing Vapi, Retell, or ElevenLabs agents and API keys. The transition is smooth — your agents keep working while we layer white-label branding, client portals, and rebilling on top.",
                },
                {
                  q: "Do I need to commit to a long-term contract?",
                  a: "No. Fusion Calling offers month-to-month billing with no long-term contracts. There's a 3-day free trial on all plans, and you can upgrade, downgrade, or cancel at any time.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="glass-light rounded-xl p-6 border border-brand/20"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
