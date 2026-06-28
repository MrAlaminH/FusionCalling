import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { comparisons } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "White-Label Voice AI Comparisons | Fusion Calling",
  description:
    "Side-by-side comparisons of the top white-label voice AI platforms for agencies. Compare Fusion Calling against ChatDash, Vapify, Voicerr, VoiceAIWrapper, Synthflow, and Thinkrr.",
  alternates: {
    canonical: "/alternative",
  },
  keywords: [
    "white label voice ai comparison",
    "voice ai platform comparison",
    "vapi white label alternative",
    "best white label voice ai",
    "voice ai agency platform",
    "ai voice reseller program",
  ],
  openGraph: {
    title: "White-Label Voice AI Comparisons | Fusion Calling",
    description:
      "Side-by-side comparisons of the top white-label voice AI platforms for agencies.",
    url: "https://www.fusioncalling.com/alternative",
    siteName: "Fusion Calling",
    type: "website",
  },
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
      <Script
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
                    item: "https://www.fusioncalling.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Alternative",
                    item: "https://www.fusioncalling.com/alternative",
                  },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": "https://www.fusioncalling.com/compare#collectionpage",
    url: "https://www.fusioncalling.com/alternative",
                name: "White-Label Voice AI Platform Comparisons",
                description:
                  "Side-by-side comparisons of the top white-label voice AI platforms for agencies.",
                inLanguage: "en-US",
                isPartOf: { "@id": "https://www.fusioncalling.com/#website" },
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
              Full Breakdowns
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Each comparison is a balanced look at what the platform does well and
              where Fusion Calling offers something different.
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
                        alt={`${post.competitorName} vs Fusion Calling comparison - ${post.subtitle}`}
                        title={`Best ${post.competitorName} Alternatives for AI Phone Call Agents`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                          {post.category}
                        </span>
                      </div>
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
                        <span className="text-gray-500 text-xs">
                          {post.competitorBestFor.split(".")[0].slice(0, 35)}…
                        </span>
                        <div className="flex items-center gap-2 text-brand-light group-hover:text-brand transition-colors">
                          <span className="text-sm font-semibold">Read More</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
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
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Makes Fusion Calling Different
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every platform above is a capable option. Fusion Calling is the
                only one that combines these four things.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  emoji: "💎",
                  title: "Full Brand Ownership",
                  body: "Everything under your own domain, logo, and pricing — your clients only ever see your brand.",
                },
                {
                  emoji: "🎙️",
                  title: "Live Demo",
                  body: "Prospects hear real AI calls on your site before they ever sign up.",
                },
                {
                  emoji: "🔄",
                  title: "Multi-Provider",
                  body: "Vapi, Retell, and ElevenLabs supported, so each client gets the best engine.",
                },
                {
                  emoji: "🤝",
                  title: "Guided Launch",
                  body: "Done-with-you onboarding gets your branded agency live in about 7 days.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="glass-light rounded-2xl p-6 border border-brand/20 text-center"
                >
                  <div className="text-4xl mb-4">{f.emoji}</div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
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
