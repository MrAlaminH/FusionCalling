import type { Metadata } from "next";
import Link from "next/link";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/white-label/CTA";
import { whitelabelLocations } from "@/lib/whitelabel-locations";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";
import { truncateAtWord } from "@/lib/utils";

const title = "White-Label AI Voice Agents by US State";
const description =
  "White-label AI voice agents for agencies in 10 states including California, Texas, Florida & New York. Resell Vapi, Retell & ElevenLabs under your brand.";

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title: `${title} | Fusion Calling Partner Program`,
    description: truncateAtWord(description, 158),
    path: "/whitelabel/locations",
  }),
};

export default function WhitelabelLocationsHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/whitelabel/locations#webpage`,
        url: `${SITE_URL}/whitelabel/locations`,
        name: title,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        dateModified: CONTENT_LAST_UPDATED,
        breadcrumb: {
          "@id": `${SITE_URL}/whitelabel/locations#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/whitelabel/locations#breadcrumb`,
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
            name: "Locations",
            item: `${SITE_URL}/whitelabel/locations`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/whitelabel/locations#collection`,
        name: title,
        description,
        mainEntity: whitelabelLocations.map((loc) => ({
          "@type": "WebPage",
          name: loc.metaTitle,
          url: `${SITE_URL}/whitelabel/locations/${loc.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="locations-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Hero */}
        <section className="relative pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full glass-light px-4 py-1.5 text-xs sm:text-sm text-brand-light border border-brand/20 mb-6">
              Nationwide Coverage
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              White-Label AI Voice Agents for{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                Agencies Across the US
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Resell AI voice agents under your own brand — no matter where your
              clients are. Each state page includes local industry insights,
              compliance guidance, and market-specific strategies.
            </p>
          </div>
        </section>

        {/* State Grid */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Available States
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                We&apos;re expanding nationwide. Click your state for
                localized partner information, industry insights, and
                compliance guidance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {whitelabelLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/whitelabel/locations/${loc.slug}`}
                  className="group glass-light rounded-2xl p-5 sm:p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-light transition-colors">
                      {loc.stateName}
                    </h3>
                    <span className="text-xs font-mono text-gray-500">
                      {loc.abbreviation}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                    {loc.metaDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.topIndustries.slice(0, 3).map((ind) => (
                      <span
                        key={ind}
                        className="inline-flex items-center rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium text-brand-light"
                      >
                        {ind}
                      </span>
                    ))}
                    {loc.topIndustries.length > 3 && (
                      <span className="text-[10px] text-gray-500 self-center">
                        +{loc.topIndustries.length - 3}
                      </span>
                    )}
                  </div>
                </Link>
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
