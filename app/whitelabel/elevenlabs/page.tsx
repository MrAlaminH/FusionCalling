import type { Metadata } from "next";
import Script from "next/script";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/white-label/Pricing";
import CTA from "@/components/white-label/CTA";
import { whitelabelProviders } from "@/lib/whitelabel-providers";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const provider = whitelabelProviders.find((p) => p.slug === "elevenlabs")!;

const title = provider.title;
const description = provider.description;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.fusioncalling.com/whitelabel/elevenlabs#webpage",
      url: "https://www.fusioncalling.com/whitelabel/elevenlabs",
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.fusioncalling.com/#website" },
      dateModified: CONTENT_LAST_UPDATED,
      breadcrumb: {
        "@id": "https://www.fusioncalling.com/whitelabel/elevenlabs#breadcrumb",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "p"],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.fusioncalling.com/whitelabel/elevenlabs#service",
      name: "White-label AI Voice Agents for ElevenLabs",
      description,
      provider: { "@id": "https://www.fusioncalling.com/#organization" },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "Audience",
        audienceType:
          "ElevenLabs agencies, marketing agencies, SaaS resellers",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fusioncalling.com/whitelabel/elevenlabs#breadcrumb",
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
          name: "White-label Partner Program",
          item: "https://www.fusioncalling.com/whitelabel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ElevenLabs",
          item: "https://www.fusioncalling.com/whitelabel/elevenlabs",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fusioncalling.com/whitelabel/elevenlabs#faqpage",
      mainEntity: provider.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "Product",
      "@id": "https://www.fusioncalling.com/whitelabel#product",
      name: "Fusion Calling White-label AI Voice Solution",
      description:
        "Become a Fusion Calling partner and white-label our AI voice solution. Offer powerful AI phone automation under your own brand.",
      image: "https://www.fusioncalling.com/cardImage.jpg",
      brand: { "@type": "Brand", name: "Fusion Calling" },
      category: "Business Software",
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  keywords: provider.keywords,
  alternates: {
    canonical: "/whitelabel/elevenlabs",
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/whitelabel/elevenlabs`,
    siteName: "Fusion Calling",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Fusion Calling - White-label AI Voice for ElevenLabs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ElevenLabsWhiteLabelPage() {
  return (
    <>
      <Script
        id="elevenlabs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Hero */}
        <section
          id="elevenlabs-hero"
          className="relative pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full glass-light px-4 py-1.5 text-xs sm:text-sm text-brand-light border border-brand/20 mb-6">
              {provider.badge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              {provider.h1Prefix}{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                {provider.h1Highlight}
              </span>{" "}
              Agencies
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              {provider.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-strong px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-all shadow-premium hover:shadow-premium-lg hover:from-brand-strong hover:to-orange-700 hover:scale-105"
              >
                Book a Demo
              </a>
              <a
                href="#elevenlabs-pricing"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-brand px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-brand/20"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="elevenlabs-features"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why ElevenLabs agencies choose{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  Fusion Calling
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                Everything you need to launch and resell AI voice under your own
                brand — without building the technology.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {provider.features.map((f) => (
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
        <div id="elevenlabs-pricing">
          <Pricing />
        </div>

        {/* FAQ */}
        <section id="elevenlabs-faq" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Everything ElevenLabs agencies ask before they resell AI voice.
              </p>
            </div>
            <div className="space-y-4">
              {provider.faqs.map((faq) => (
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
