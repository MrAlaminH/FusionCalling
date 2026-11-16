import type { Metadata } from "next";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import CTA from "@/components/white-label/CTA";
import PostFaq from "@/components/blog/PostFaq";
import { primaryButton, secondaryButton } from "@/components/ui/button-styles";
import { SITE_URL } from "@/lib/site-url";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { buildOpenGraph } from "@/lib/seo";
import { WHOLESALE_STARTER } from "@/lib/product-facts";
import {
  AGENCY_WHITE_LABEL_VIDEO,
  videoObjectSchema,
} from "@/lib/videos";
import VideoEmbed from "@/components/video-embed";
import {
  whitelabelCompareRows,
  whitelabelPlatforms,
} from "@/lib/whitelabel-compare";
import { truncateAtWord } from "@/lib/utils";

const title = "White-Label AI Voice Platforms Compared";
const description = `Compare white-label AI voice platforms side-by-side: pricing, sub-accounts, features & multi-provider import for Vapi, Retell & ElevenLabs. From $${WHOLESALE_STARTER.price}/mo.`;

// Single source of truth: the FAQPage schema and the visible FAQ list must
// render the exact same questions/answers (Google requires visible content).
const COMPARE_FAQS = [
  {
    question: "What is the best white-label AI voice platform?",
    answer: "The best white-label AI voice platform depends on your needs. Fusion Calling offers the most flexibility with multi-provider support (Vapi, Retell AI, ElevenLabs), full white-label branding, sub-account billing where you keep 100% of revenue, and plans starting at $99/month for 6 sub-accounts.",
  },
  {
    question: "How much does a white-label AI voice platform cost?",
    answer: "Self-serve white-label AI voice platforms range widely — from ~$28–29/month entry tiers (Vapify, Voicerr) to $499+/month for unlimited sub-accounts. Fusion Calling offers Starter ($99/mo, 6 sub-accounts), Growth ($299/mo, 20 sub-accounts, priority support, advanced analytics), and Scale ($499/mo, unlimited sub-accounts, dedicated account manager, API access). Partners keep 100% of what they charge clients.",
  },
  {
    question: "Which platform supports Vapi, Retell, AND ElevenLabs?",
    answer: "Fusion Calling is one of the few white-label platforms with native multi-provider import: Vapi, Retell AI, and ElevenLabs. You can import existing agents and API keys from any provider and resell them under one branded dashboard.",
  },
  {
    question: "Can I switch from another white-label platform to Fusion Calling?",
    answer: "Yes. Because Fusion Calling is multi-provider, you can bring your existing Vapi, Retell, or ElevenLabs agents and API keys. The transition is smooth — your agents keep working while we layer white-label branding, client portals, and rebilling on top.",
  },
  {
    question: "Do I need to commit to a long-term contract?",
    answer: "No. Fusion Calling offers month-to-month billing with no long-term contracts. There's a 3-day free trial on all plans, and you can upgrade, downgrade, or cancel at any time.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title: `${title} | Fusion Calling`,
    description: truncateAtWord(description, 158),
    path: "/whitelabel/compare",
  }),
};

export default function WhitelabelComparePage() {
  const fusion = whitelabelPlatforms[0];
  const competitors = whitelabelPlatforms.slice(1);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: "/whitelabel/compare",
        name: title,
        description,
        breadcrumbId: `${SITE_URL}/whitelabel/compare#breadcrumb`,
      }),
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "White-label Partner Program", path: "/whitelabel" },
          { name: "Compare White-Label Platforms", path: "/whitelabel/compare" },
        ],
        `${SITE_URL}/whitelabel/compare#breadcrumb`
      ),
      faqSchema(COMPARE_FAQS, `${SITE_URL}/whitelabel/compare#faqpage`),
      videoObjectSchema(AGENCY_WHITE_LABEL_VIDEO, "/whitelabel/compare"),
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
              Compare {whitelabelPlatforms.length} white-label AI voice
              platforms for agencies reselling voice AI under their own brand.
              We&apos;ve compared wholesale pricing, sub-accounts, Stripe
              rebilling, and multi-provider import so you can pick the resale
              platform with the best margin.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
              Buying voice AI for your own business calls instead of reselling
              to clients? See our{" "}
              <a
                href="/alternative"
                className="text-brand-light hover:text-brand underline underline-offset-4 transition-colors"
              >
                end-user voice AI platform comparisons
              </a>
              .
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#cta" className={primaryButton}>
                Book a Demo
              </a>
              <a href="#platform-details" className={secondaryButton}>
                Explore Platform Details
              </a>
            </div>
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
                        {fusion.name}
                      </th>
                      {competitors.map((p) => (
                        <th
                          key={p.name}
                          className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-400 min-w-[120px]"
                        >
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand/10">
                    {whitelabelCompareRows.map((row, i) => (
                      <tr
                        key={row.key}
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
                          {fusion.cells[row.key]}
                        </td>
                        {competitors.map((p) => (
                          <td
                            key={p.name}
                            className="px-4 py-3 text-center text-sm text-gray-400"
                          >
                            {p.cells[row.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-6 text-center text-xs sm:text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Pricing and plans verified November 2026 against each
              vendor&apos;s own site. &quot;Not published&quot; / &quot;Not
              documented&quot; means we couldn&apos;t verify a figure from
              public sources — confirm with the vendor. Where a competitor
              wins a dimension (e.g. Vapify&apos;s $29 entry), we say so —
              our strengths are multi-provider coverage, BYO API keys,
              sub-account capacity, and a 24-hour guided launch.
            </p>
          </div>
        </section>

        {/* See it in action — video tour after the table */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                See the platform in action
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                A two-minute tour of the white-label portal agencies resell
                with — your branding, your pricing, client sub-accounts
                included.
              </p>
            </div>
            <VideoEmbed
              videoId={AGENCY_WHITE_LABEL_VIDEO.id}
              title={AGENCY_WHITE_LABEL_VIDEO.title}
              duration="2 min"
            />
          </div>
        </section>

        {/* Detailed Comparison Cards */}
        <section id="platform-details" className="w-full bg-black section-spacing">
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
              {whitelabelPlatforms.map((p) => {
                const cardClass =
                  "group glass-light rounded-2xl p-6 border border-brand/20 transition-premium h-full";
                const body = (
                  <>
                    <div className="text-3xl mb-3">{p.emoji}</div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-light transition-colors mb-2">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {p.blurb}
                    </p>
                    {p.href && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-brand-light">
                          {p.isFusion ? "Explore the platform" : "Read full comparison"}
                        </span>
                        <span className="text-brand-light text-sm group-hover:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </div>
                    )}
                  </>
                );
                return p.href ? (
                  <a
                    key={p.name}
                    href={p.href}
                    className={`${cardClass} hover:border-brand/40`}
                  >
                    {body}
                  </a>
                ) : (
                  <div key={p.name} className={cardClass}>
                    {body}
                  </div>
                );
              })}
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
                Common questions from agencies about reselling white-label AI
                voice. Buying for your own team instead? See the{" "}
                <a
                  href="/alternative"
                  className="text-brand-light hover:text-brand underline underline-offset-4 transition-colors"
                >
                  end-user voice AI platform comparisons
                </a>
                .
              </p>
            </div>
            <PostFaq faqs={COMPARE_FAQS} title="" />
          </div>
        </section>

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </main>
    </>
  );
}
