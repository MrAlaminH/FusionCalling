import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "AI Voice by Industry | Fusion Calling",
  description:
    "Explore how white-label AI voice agents serve every industry, from real estate and dental to insurance, home services, legal, automotive, call centers, and financial services.",
  alternates: {
    canonical: "/industries",
  },
  keywords: [
    "ai voice by industry",
    "ai voice use cases",
    "white label voice ai",
    "ai calling agent",
    "industry voice automation",
    "voice ai for agencies",
  ],
  openGraph: {
    title: "AI Voice by Industry | Fusion Calling",
    description:
      "Explore how white-label AI voice agents serve every industry, from real estate and dental to insurance and financial services.",
    url: "https://www.fusioncalling.com/industries",
    siteName: "Fusion Calling",
    type: "website",
  },
};

export default function IndustriesHubPage() {
  return (
    <>
      <Script
        id="industries-index-schema"
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
                    name: "Industries",
                    item: "https://www.fusioncalling.com/industries",
                  },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": "https://www.fusioncalling.com/industries#collectionpage",
                url: "https://www.fusioncalling.com/industries",
                name: "AI Voice by Industry",
                description:
                  "Explore how white-label AI voice agents serve every industry.",
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
              AI Voice for Every Industry
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Every business runs on the phone. See how white-label AI voice agents
              capture leads, book appointments, and follow up automatically across
              the industries your agency serves.
            </p>
          </div>

          {/* Industry grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
              >
                <div className="glass-light h-full rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-all duration-500 hover:shadow-premium">
                  <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-xl mb-6 overflow-hidden border border-brand/10 group-hover:border-brand/30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-5xl">{industry.emoji}</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                        {industry.category}
                      </span>
                      <span className="text-gray-500">{industry.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-brand-light transition-colors leading-tight">
                      AI Voice for {industry.name}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {industry.subtitle}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <span className="text-gray-500 text-sm">
                        {industry.useCases.length} use cases
                      </span>
                      <span className="text-orange-400 text-sm group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Why agencies care */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-brand/30 mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                One Platform, Every Vertical
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Each industry page above shows the use cases, ROI, and the agency
                angle. With Fusion Calling, you can serve them all under one branded
                platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  emoji: "🧩",
                  title: "Pre-Built Templates",
                  body: "Industry-specific agent templates get each client live in days.",
                },
                {
                  emoji: "🎯",
                  title: "Multiple Use Cases",
                  body: "Inbound, outbound, scheduling, and recall from one dashboard.",
                },
                {
                  emoji: "💎",
                  title: "Full Brand Ownership",
                  body: "Everything under your own domain, logo, and pricing — your clients only see your brand.",
                },
                {
                  emoji: "🤝",
                  title: "Guided Launch",
                  body: "Done-with-you onboarding so you can focus on selling.",
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
