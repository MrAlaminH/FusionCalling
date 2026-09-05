import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { comparisons } from "@/lib/comparisons";
import { SITE_URL } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";

const title = "13 Best White-Label Voice AI Alternatives Compared (2026 Pricing)";
const description =
  "Compare Fusion Calling vs Vapi, Retell AI, Synthflow, Bland AI, Air AI + 8 more: pricing from $99/mo, providers, sub-accounts, onboarding. Live demo included.";

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/alternative" }),
};

// Compact at-a-glance matrix values per competitor (kept short for the table).
const matrixRows = comparisons.map((c) => {
  const entry = c.comparisonRows.find((r) => r.label === "Starting monthly cost");
  const providers = c.comparisonRows.find(
    (r) => r.label === "Voice providers supported",
  );
  const onboarding = c.comparisonRows.find((r) => r.label === "Onboarding model");
  return {
    slug: c.slug,
    name: c.competitorName,
    emoji: c.heroEmoji,
    entry: entry?.competitor ?? "—",
    providers: providers?.competitor ?? "—",
    onboarding: onboarding?.competitor ?? "—",
  };
});

export default function CompareHubPage() {
  return (
    <>
<script
        id="alternative-index-schema"
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
                    name: "Alternative",
                    item: `${SITE_URL}/alternative`,
                  },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": `${SITE_URL}/alternative#collectionpage`,
                url: `${SITE_URL}/alternative`,
                name: "White-Label Voice AI Platform Comparisons",
                description:
                  "Side-by-side comparisons of the top white-label voice AI platforms for agencies.",
                inLanguage: "en-US",
                isPartOf: { "@id": `${SITE_URL}/#website` },
              },
              {
                "@type": "FAQPage",
                "@id": `${SITE_URL}/alternative#faqpage`,
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How does Fusion Calling compare to other white-label voice AI platforms?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Fusion Calling is the only multi-provider white-label platform supporting Vapi, Retell AI, and ElevenLabs simultaneously. Competitors typically lock you into one provider. We also offer guided 7-day launch, full brand ownership on your domain, and you keep 100% of revenue.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which white-label voice AI platform is best for agencies?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "For agencies wanting multi-provider flexibility, full brand control, and fastest time-to-revenue, Fusion Calling leads. Vapify and ChatDash are Vapi-only. Synthflow and Bland AI are single-provider. VoiceAIWrapper is a basic wrapper. Fusion Calling's multi-provider layer + guided launch is unique.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I switch providers later if I start with one?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "With Fusion Calling, yes — you can add or switch between Vapi, Retell, and ElevenLabs agents anytime within the same dashboard. Other platforms typically require rebuilding on a new platform. Fusion Calling's abstraction layer prevents vendor lock-in.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 pt-4 md:pt-6 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Voice AI Platform Comparisons
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Honest, side-by-side comparisons of the leading white-label voice AI
              platforms for agencies. See how Fusion Calling stacks up on providers,
              pricing, onboarding, and how you get paid.
            </p>
          </div>

          {/* At-a-glance matrix */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
              The Category at a Glance
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              A quick overview of the main players. Click any name for the full
              breakdown.
            </p>

            <div className="glass rounded-3xl p-4 md:p-8 border border-brand/20 overflow-x-auto">
              <table className="w-full border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 px-4 text-gray-300 font-bold">
                      Platform
                    </th>
                    <th className="text-left py-4 px-4 text-gray-300 font-bold">
                      Entry Price
                    </th>
                    <th className="text-left py-4 px-4 text-gray-300 font-bold">
                      Providers
                    </th>
                    <th className="text-left py-4 px-4 text-gray-300 font-bold">
                      Onboarding
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {matrixRows.map((row) => (
                    <tr key={row.slug} className="border-b border-gray-800/60">
                      <td className="py-4 px-4">
                        <Link
                          href={`/alternative/${row.slug}`}
                          className="flex items-center gap-3 text-white hover:text-brand-light transition-colors"
                        >
                          <span className="text-xl">{row.emoji}</span>
                          <span className="font-medium">{row.name}</span>
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-gray-400">{row.entry}</td>
                      <td className="py-4 px-4 text-gray-400">{row.providers}</td>
                      <td className="py-4 px-4 text-gray-500">{row.onboarding}</td>
                    </tr>
                  ))}
                  <tr className="bg-gradient-to-r from-brand/10 to-brand-strong/5">
                    <td className="py-4 px-4">
                      <span className="flex items-center gap-3 text-white font-bold">
                        <span className="text-xl">🚀</span>
                        <span>Fusion Calling</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-green-400 font-medium">
                      $99/mo (6 sub-accounts)
                    </td>
                    <td className="py-4 px-4 text-green-400 font-medium">
                      Vapi + Retell + ElevenLabs
                    </td>
                    <td className="py-4 px-4 text-green-400 font-bold">
                      Guided, ~7 days
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed comparison cards */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
              Comprehensive Platform Comparisons
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
                  <div className="glass-light h-full rounded-2xl overflow-hidden border border-brand/20 hover:border-brand/40 transition-all duration-500 hover:shadow-premium hover:shadow-premium-lg">
                    {/* Image Section */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt={`${post.competitorName} vs Fusion Calling comparison`}
                        title={`Best ${post.competitorName} Alternatives for AI Phone Call Agents`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
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
                          <div className="w-2 h-2 rounded-full bg-green-500" />
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
                  body: "Done-with-you onboarding gets your branded agency live in 24 hours with 30 days of support.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-all duration-300 group"
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                Explore the Partner Program
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
