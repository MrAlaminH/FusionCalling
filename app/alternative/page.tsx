import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { comparisons } from "@/lib/comparisons";
import { whitelabelPlatforms } from "@/lib/whitelabel-compare";
import { SITE_URL } from "@/lib/site-url";
import { breadcrumbSchema, buildOpenGraph, faqSchema, itemListSchema } from "@/lib/seo";
import { LAUNCH, PROVIDERS, WHOLESALE_STARTER } from "@/lib/product-facts";
import { primaryButton } from "@/components/ui/button-styles";
import PostFaq from "@/components/blog/PostFaq";

const title = `Vapi Alternatives: Bland, Retell, Synthflow, Famulor`;
// Alternatives-first framing — GSC queries hitting this hub are "vapi
// alternative", "bland ai alternative", "synthflow alternative" etc., and
// /whitelabel/compare owns the feature-matrix framing. Title leads with the
// biggest hub query and names the next-highest-impression brands (vapi 1,101,
// bland 395, retell 352, synthflow 273, famulor 215 hub impressions, 90d GSC)
// — the pre-2026-11-11 title named no brands (1 click / 1,555 imp), and the
// 2026-11-06 one omitted Vapi entirely despite 4× Bland's volume.
const description = `Compare Vapi, Bland AI, Retell, Synthflow, Famulor and more — pricing, features, white-label support. Fusion Calling white-label plans from $99/mo.`;

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/alternative" }),
};

// Single source for the hub FAQ: the FAQPage schema node and the visible
// FAQ section below both render THIS array, so schema text and page text
// can never diverge.
const alternativeFaqs = [
  {
    question: "How does Fusion Calling compare to other white-label voice AI platforms?",
    answer: `Fusion Calling is the only platform that pairs multi-provider support (Vapi, Retell AI, and ElevenLabs) with a guided ${LAUNCH.guided} launch, full brand ownership on your domain, and 100% revenue kept. Several competitors support multiple providers too, but usually as self-serve wrappers or single-CRM-native stacks — the guided launch and done-with-you support are the difference.`,
  },
  {
    question: "Which white-label voice AI platform is best for agencies?",
    answer: "For agencies wanting multi-provider flexibility, full brand control, and fastest time-to-revenue, Fusion Calling leads. Vapify leans Vapi-first but also supports Retell. ChatDash supports Retell, Vapi, and ElevenLabs but is GoHighLevel-first. Synthflow and Bland AI run single proprietary engines. VoiceAIWrapper is a Vapi/Retell-focused wrapper with billing tooling. Fusion Calling's multi-provider layer + guided launch is the differentiator.",
  },
  {
    question: "Can I switch providers later if I start with one?",
    answer: "With Fusion Calling, yes — you can add or switch between Vapi, Retell, and ElevenLabs agents anytime within the same dashboard. Other platforms typically require rebuilding on a new platform. Fusion Calling's abstraction layer prevents vendor lock-in.",
  },
  {
    question: "What is the best alternative to Vapi for outbound voice AI?",
    answer: "For engineers building custom agents, Vapi itself is a strong engine. But if you want outbound AI calling as a product you resell — without building infrastructure — Fusion Calling runs Vapi, Retell, and ElevenLabs outbound campaigns in one white-label dashboard from $99/month with 6 client sub-accounts, Stripe rebilling, and a 24-hour guided launch once approved. The guides below compare each side by side.",
  },
  {
    question: "Which AI calling platforms work for healthcare workflows like prior authorization?",
    answer: "Prior-authorization calls are high-volume, repetitive outbound work — well-suited to AI agents. Compare platforms on healthcare workflow support, CRM integration, consent and recording compliance, and per-call economics. Fusion Calling supports consent-aware outbound campaigns with CRM logging from $149/month, and agencies serving clinics typically white-label it at their own pricing. Verify PHI/HIPAA handling requirements with any vendor before deploying.",
  },
];
// Vertical feature-matrix rows — same layout as /whitelabel/compare: feature
// rows down the side, platform columns across, Fusion highlighted first.
// Platform columns come from matrixRows (DISPLAY_ORDER); Fusion's column
// comes from product-facts so the hub can never contradict /pricing or the
// comparison pages it links to.
const matrixFeatures = [
  {
    key: "entry",
    label: "Starting Monthly Cost",
    fusion: `$${WHOLESALE_STARTER.price}/mo (${WHOLESALE_STARTER.subAccounts} sub-accounts)`,
  },
  {
    key: "providers",
    label: "Voice Providers Supported",
    fusion: PROVIDERS.plus,
  },
  {
    key: "byo",
    label: "BYO API Keys",
    fusion: "Yes — BYO API keys",
  },
  {
    key: "onboarding",
    label: "Onboarding Model",
    fusion: `Guided, ${LAUNCH.guided}`,
  },
] as const;

// Compact at-a-glance matrix values per competitor (kept short for the table).
const matrixRows = comparisons.map((c) => {
  const entry = c.comparisonRows.find((r) => r.label === "Starting monthly cost");
  const providers = c.comparisonRows.find(
    (r) => r.label === "Voice providers supported",
  );
  const onboarding = c.comparisonRows.find((r) => r.label === "Onboarding model");
  // BYO API Keys: reuse the researched cells from lib/whitelabel-compare.ts
  // (single source of truth, matched by platform name). Vapi is a BYO-models
  // engine per its own comparison copy. Everything else isn't verified from
  // public sources — same "Not published" convention as /whitelabel/compare
  // (never a bare "—", which would imply the feature is missing).
  const byo = whitelabelPlatforms.find(
    (p) => p.name === c.competitorName,
  )?.cells.byoKeys;
  return {
    slug: c.slug,
    name: c.competitorName,
    emoji: c.heroEmoji,
    entry: entry?.competitor ?? "—",
    providers: providers?.competitor ?? "—",
    byo:
      byo ??
      (c.slug === "vapi" ? "Yes — BYO models" : "Not published"),
    onboarding: onboarding?.competitor ?? "—",
  };
});

// Owner call 2026-11-16: engines (Bland AI, Retell AI, ElevenLabs) and
// GoHighLevel are not platforms buyers weigh Fusion Calling against, so their
// columns are dropped from the at-a-glance table only. Their comparison pages
// and the cards below stay untouched — those pages rank and still need the
// internal links.
const TABLE_EXCLUDED = new Set([
  "bland-ai",
  "retell",
  "gohighlevel",
  "elevenlabs",
]);
const matrixColumns = matrixRows.filter(
  (row) => !TABLE_EXCLUDED.has(row.slug),
);

export default function CompareHubPage() {
  // Fusion's own matrix row is sourced from lib/product-facts so the hub can
  // never contradict the detailed comparison pages it links to.
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Alternative", path: "/alternative" },
      ]),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/alternative#collectionpage`,
        url: `${SITE_URL}/alternative`,
        // Name = visible H1 text.
        name: "Voice AI Platform Alternatives",
        description:
          "Side-by-side voice AI platform comparisons for teams evaluating end-user fit.",
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      faqSchema(alternativeFaqs, `${SITE_URL}/alternative#faqpage`),
      itemListSchema(
        comparisons.map((c) => ({
          name: c.competitorName,
          path: `/alternative/${c.slug}`,
        })),
        `${SITE_URL}/alternative#itemlist`,
        "Voice AI platform comparisons",
      ),
    ],
  };

  return (
    <>
<script
        id="alternative-index-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 pt-4 md:pt-6 relative z-10">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
              Voice AI Platform
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent"> Alternatives</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Looking for a voice AI alternative? {comparisons.length}{" "}
              honest, side-by-side guides — Fusion Calling vs Vapi, Retell AI,
              Synthflow, Smith.ai and more — covering providers, pricing,
              onboarding, and support. Written for buyers evaluating fit, not
              hype — for teams comparing platforms from India, the US, and
              beyond.
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              <strong className="text-white">Quick verdict:</strong> agencies
              reselling voice AI under their own brand →{" "}
              <strong className="text-white">Fusion Calling</strong> (from
              $99/mo, 6 sub-accounts, Vapi + Retell + ElevenLabs in one
              dashboard). Developers building custom stacks →{" "}
              <strong className="text-white">Vapi</strong> or{" "}
              <strong className="text-white">Bland AI</strong>. Enterprise
              no-code teams → <strong className="text-white">Synthflow</strong>.
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed px-4">
              Reselling voice AI to clients under your own brand instead? See
              our{" "}
              <Link
                href="/whitelabel/compare"
                className="text-brand-light hover:text-brand underline underline-offset-4 transition-colors"
              >
                white-label comparison
              </Link>{" "}
              of reseller platforms with sub-accounts and rebilling.
            </p>
          </div>

          {/* At-a-glance matrix */}
          <div className="mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 text-center">
              The Category at a Glance
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              A quick overview of the main players and what they cost. Click
              any platform for the full breakdown — or see the{" "}
              <Link
                href="/ai-receptionist-pricing"
                className="text-brand-light hover:text-brand underline underline-offset-4"
              >
                AI receptionist pricing benchmark
              </Link>{" "}
              for the market-wide entry-price table.
            </p>

            <div className="glass rounded-3xl p-4 md:p-8 border border-brand/20">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="sticky left-0 bg-black px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-300 min-w-[140px]">
                        Platform
                      </th>
                      <th className="bg-gradient-to-r from-brand/20 to-brand/10 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-brand-light min-w-[150px]">
                        <span className="mr-1">🚀</span> Fusion Calling
                      </th>
                      {matrixColumns.map((row) => (
                        <th
                          key={row.slug}
                          className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-400 min-w-[130px]"
                        >
                          <Link
                            href={`/alternative/${row.slug}`}
                            className="hover:text-brand-light transition-colors"
                          >
                            <span className="mr-1">{row.emoji}</span>
                            {row.name}
                          </Link>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/60">
                    {matrixFeatures.map((feature, i) => (
                      <tr
                        key={feature.label}
                        className={
                          i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                        }
                      >
                        <td className="sticky left-0 bg-black px-4 py-3 text-sm font-medium text-white whitespace-nowrap">
                          {feature.label}
                        </td>
                        <td className="bg-gradient-to-r from-brand/10 to-brand/5 px-4 py-3 text-center text-sm text-brand-light font-semibold">
                          {feature.fusion}
                        </td>
                        {matrixColumns.map((row) => (
                          <td
                            key={row.slug}
                            className="px-4 py-3 text-center text-sm text-gray-400"
                          >
                            {row[feature.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Detailed comparison cards */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
              Every Alternative, Compared in Detail
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Explore detailed comparisons of the top white-label voice AI platforms. 
              Each analysis covers features, pricing, onboarding, and why Fusion Calling 
              is the superior choice for growing agencies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comparisons.map((post) => (
                <Link
                  key={post.slug}
                  href={`/alternative/${post.slug}`}
                  className="group block"
                >
                  <div className="glass-light h-full rounded-2xl overflow-hidden border border-brand/20 hover:border-brand/40 transition duration-300 hover:shadow-premium hover:shadow-premium-lg">
                    {/* Image Section */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt={`${post.competitorName} vs Fusion Calling comparison`}
                        title={`Best ${post.competitorName} Alternatives for AI Phone Call Agents`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-light transition-colors leading-tight">
                        {post.h1}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {post.subtitle}
                      </p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 pt-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand" />
                          <span className="text-xs text-gray-400">{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand" />
                          <span className="text-xs text-gray-400">2026 Updated</span>
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        {/* Category Badge */}
                        <span className="px-2 py-1 bg-brand/10 text-brand text-[10px] font-medium rounded-full border border-brand/30">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-brand-light group-hover:text-brand transition-colors">
                          <span className="text-xs font-medium">
                            Compare {post.competitorName} vs Fusion Calling
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform text-xs">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bolna subsection — "bolna ai competitors" ranks on this hub, so
              the answer lives here (no dedicated page; phase 3, 2026-10-28). */}
          <div className="mb-16">
            <div className="glass-light rounded-2xl p-8 border border-brand/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-3">
                Bolna AI competitors &amp; alternatives
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Bolna is an open-source voice AI framework for building
                conversational phone agents from speech components — speech
                recognition, an LLM, and speech synthesis — either self-hosted
                or on its cloud. That makes it a fit for engineering teams who
                want source-level control and are comfortable running their own
                infrastructure.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Teams that want a finished product instead of a framework
                usually end up comparing commercial platforms. The closest
                documented alternatives:
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <Link href="/alternative/vapi" className="text-brand-light hover:text-brand transition-colors">
                    Vapi
                  </Link>{" "}
                  — BYO-models engine with a transparent platform fee; tooling and billing are self-built.
                </li>
                <li>
                  <Link href="/alternative/retell" className="text-brand-light hover:text-brand transition-colors">
                    Retell AI
                  </Link>{" "}
                  — usage-based platform with strong call-center tooling; resale layer is self-built.
                </li>
                <li>
                  <Link href="/alternative/bland-ai" className="text-brand-light hover:text-brand transition-colors">
                    Bland AI
                  </Link>{" "}
                  — API-first calling for high-volume outbound; agency workflows are self-built.
                </li>
                <li>
                  <Link href="/whitelabel/compare" className="text-brand-light hover:text-brand transition-colors">
                    Fusion Calling
                  </Link>{" "}
                  — a managed white-label platform with 6 sub-accounts from $99/mo for agencies reselling under their own brand.
                </li>
              </ul>
            </div>
          </div>

          {/* What makes Fusion Calling different */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-brand/30 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Makes Fusion Calling Different
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every platform above is a capable option. Fusion Calling is the
                only one that combines these four competitive advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "●",
                  title: "Full Brand Ownership",
                  body: "Everything under your own domain, logo, and pricing. Your clients only ever see your brand.",
                },
                {
                  icon: "◆",
                  title: "Live Demo",
                  body: "Prospects hear real AI calls on your site before they ever sign up. Try before you buy.",
                },
                {
                  icon: "✦",
                  title: "Multi-Provider",
                  body: "Vapi, Retell, and ElevenLabs supported. Each client gets the best engine for their needs.",
                },
                {
                  icon: "●",
                  title: "Guided Launch",
                  body: "Done-with-you onboarding gets your branded agency live within 24 hours of approval with 30 days of support.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition duration-300 group"
                >
                  <div className="text-3xl mb-4 text-brand-light group-hover:text-brand transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-light transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/whitelabel"
                className={primaryButton}
              >
                Explore the Partner Program
                <span className="ml-2">→</span>
              </Link>
              <p className="mt-4 text-sm text-gray-400">
                Already comparing costs?{" "}
                <Link
                  href="/pricing"
                  className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
                >
                  Compare plans and pricing
                </Link>
                . Reselling to clients?{" "}
                <Link
                  href="/whitelabel/compare"
                  className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
                >
                  See the white-label comparison
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Visible FAQ — renders alternativeFaqs verbatim, the same array
              the FAQPage schema node above is built from. */}
          <div className="max-w-4xl mx-auto mb-16">
            <PostFaq faqs={alternativeFaqs} />
          </div>
        </div>
      </div>
    </>
  );
}
