import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/white-label/CTA";
import { whitelabelCaseStudies } from "@/lib/whitelabel-case-studies";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "White-Label AI Voice Partner Case Studies | Fusion Calling";
const description =
  "Real agencies building recurring revenue with white-label AI voice. See how partners generate $12K–$18K/month reselling AI voice agents under their own brand.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "white-label AI voice case studies",
    "AI voice reseller success stories",
    "agency AI voice revenue",
    "white-label voice AI partner results",
    "AI voice agency case study",
  ],
  alternates: {
    canonical: "/whitelabel/case-studies",
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/whitelabel/case-studies`,
    siteName: "Fusion Calling",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Fusion Calling - Partner Case Studies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WhitelabelCaseStudiesHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/whitelabel/case-studies#webpage`,
        url: `${SITE_URL}/whitelabel/case-studies`,
        name: title,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        dateModified: CONTENT_LAST_UPDATED,
        breadcrumb: {
          "@id": `${SITE_URL}/whitelabel/case-studies#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/whitelabel/case-studies#breadcrumb`,
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
            name: "Case Studies",
            item: `${SITE_URL}/whitelabel/case-studies`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/whitelabel/case-studies#collection`,
        name: title,
        description,
        mainEntity: whitelabelCaseStudies.map((cs) => ({
          "@type": "Article",
          headline: cs.metaTitle,
          url: `${SITE_URL}/whitelabel/case-studies/${cs.slug}`,
          author: { "@type": "Organization", name: cs.agencyName },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="case-studies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Hero */}
        <section className="relative pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full glass-light px-4 py-1.5 text-xs sm:text-sm text-brand-light border border-brand/20 mb-6">
              Partner Success Stories
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Real Agencies Building Recurring Revenue with{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                White-Label AI Voice
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              From marketing agencies to call centers — see how real partners
              launch, scale, and earn with Fusion Calling&apos;s white-label
              platform. Every story includes real numbers and real results.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {whitelabelCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/whitelabel/case-studies/${cs.slug}`}
                  className="group glass-light rounded-2xl p-6 sm:p-8 border border-brand/20 hover:border-brand/40 transition-premium flex flex-col"
                >
                  {/* Industry badge */}
                  <span className="inline-flex self-start items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-light mb-4">
                    {cs.industry}
                  </span>

                  {/* Agency name */}
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-brand-light transition-colors mb-3">
                    {cs.agencyName}
                  </h2>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
                    {cs.metaDescription}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
                    {cs.heroStats.slice(0, 4).map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-lg font-bold text-brand-light">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="text-xs text-gray-500 border-t border-brand/10 pt-3">
                    {cs.location}
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
