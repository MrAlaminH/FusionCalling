import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/white-label/Pricing";
import CTA from "@/components/white-label/CTA";
import {
  whitelabelLocations,
  type WhiteLabelLocation,
} from "@/lib/whitelabel-locations";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";
import { truncateAtWord } from "@/lib/utils";


export function generateStaticParams() {
  return whitelabelLocations.map((loc) => ({ slug: loc.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const loc = whitelabelLocations.find((l) => l.slug === params.slug);
  if (!loc) return { title: "Location Not Found" };

  return {
    title: loc.metaTitle,
    description: truncateAtWord(loc.metaDescription, 158),
    ...buildOpenGraph({
      title: loc.metaTitle,
      description: truncateAtWord(loc.metaDescription, 158),
      path: `/whitelabel/locations/${loc.slug}`,
    }),
  };
}

export default function LocationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = whitelabelLocations.find((l) => l.slug === params.slug);
  if (!loc) notFound();

  return (
    <>
      <script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(loc)) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Breadcrumb */}
        <nav className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/whitelabel" className="hover:text-brand-light transition-colors">
                  White-Label Program
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/whitelabel/locations" className="hover:text-brand-light transition-colors">
                  Locations
                </Link>
              </li>
              <li>/</li>
              <li className="text-brand-light">{loc.stateName}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative pt-8 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full glass-light px-4 py-1.5 text-xs sm:text-sm text-brand-light border border-brand/20 mb-6">
              {loc.abbreviation} &middot; {loc.agencyCount} Active Agencies
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              White-Label AI Voice Agents for{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                {loc.stateName}
              </span>{" "}
              Agencies
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              {loc.metaDescription}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-strong px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-all shadow-premium hover:shadow-premium-lg hover:from-brand-strong hover:to-orange-700 hover:scale-105"
              >
                Book a Demo
              </a>
              <a
                href={`#${loc.slug}-pricing`}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-brand px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-brand/20"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Top Industries */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Top Industries in {loc.stateName}
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Industries driving the most demand for AI voice in{" "}
                {loc.stateName}.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {loc.topIndustries.map((ind) => (
                <span
                  key={ind}
                  className="inline-flex items-center rounded-full glass-light px-4 py-2 text-sm font-medium text-brand-light border border-brand/20"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why {loc.stateName} agencies choose{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  Fusion Calling
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                Everything you need to launch and resell AI voice under your own
                brand — tailored for {loc.stateName}.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {loc.features.map((f) => (
                <div
                  key={f.title}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <div id={`${loc.slug}-pricing`}>
          <Pricing />
        </div>

        {/* FAQ */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                What {loc.stateName} agencies ask before reselling AI voice.
              </p>
            </div>
            <div className="space-y-4">
              {loc.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="glass-light rounded-xl p-6 border border-brand/20"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
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

function buildSchema(loc: WhiteLabelLocation) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/whitelabel/locations/${loc.slug}#webpage`,
        url: `${SITE_URL}/whitelabel/locations/${loc.slug}`,
        name: loc.metaTitle,
        description: loc.metaDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        dateModified: CONTENT_LAST_UPDATED,
        breadcrumb: {
          "@id": `${SITE_URL}/whitelabel/locations/${loc.slug}#breadcrumb`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "p"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/whitelabel/locations/${loc.slug}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 4,
            name: loc.stateName,
            item: `${SITE_URL}/whitelabel/locations/${loc.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/whitelabel/locations/${loc.slug}#service`,
        name: `White-label AI Voice Agents for ${loc.stateName}`,
        description: loc.metaDescription,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: {
          "@type": "State",
          name: loc.stateName,
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Marketing agencies, call centers, SaaS resellers, consultants",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/whitelabel/locations/${loc.slug}#faqpage`,
        mainEntity: loc.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}
