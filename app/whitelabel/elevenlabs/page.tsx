import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/white-label/Pricing";
import CTA from "@/components/white-label/CTA";
import ProviderCrossLinks from "@/components/white-label/ProviderCrossLinks";
import { whitelabelProviders } from "@/lib/whitelabel-providers";
import { whitelabelCaseStudies } from "@/lib/whitelabel-case-studies";
import { CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";
import { truncateAtWord } from "@/lib/utils";

const provider = whitelabelProviders.find((p) => p.slug === "elevenlabs")!;
const metaDescription = truncateAtWord(provider.description, 158);
const relatedCaseStudies = whitelabelCaseStudies.filter((cs) =>
  provider.relatedCaseStudySlugs?.includes(cs.slug),
);

const title = provider.title;
const description = metaDescription;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/whitelabel/elevenlabs#webpage`,
      url: `${SITE_URL}/whitelabel/elevenlabs`,
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: CONTENT_LAST_UPDATED,
      breadcrumb: {
        "@id": `${SITE_URL}/whitelabel/elevenlabs#breadcrumb`,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "p"],
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/whitelabel/elevenlabs#service`,
      name: "White-label AI Voice Agents for ElevenLabs",
      description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "Audience",
        audienceType:
          "ElevenLabs agencies, marketing agencies, SaaS resellers",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/whitelabel/elevenlabs#breadcrumb`,
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
          name: "White-label Partner Program",
          item: `${SITE_URL}/whitelabel`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ElevenLabs",
          item: `${SITE_URL}/whitelabel/elevenlabs`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/whitelabel/elevenlabs#faqpage`,
      mainEntity: provider.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title,
    description,
    path: "/whitelabel/elevenlabs",
  }),
};

export default function ElevenLabsWhiteLabelPage() {
  return (
    <>
      <script
        id="elevenlabs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-light transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/whitelabel" className="hover:text-brand-light transition-colors">
                  White-label Partner Program
                </Link>
              </li>
              <li>/</li>
              <li className="text-brand-light">ElevenLabs</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section
          id="elevenlabs-hero"
          className="relative pt-8 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8"
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

        {/* Compare providers — keep comparison intent on-site */}
        <nav
          aria-label="Compare white-label providers"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              Compare white-label providers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/whitelabel/vapi"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  ElevenLabs vs Vapi
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Premium voices or cost-effective calls.
                </span>
              </Link>
              <Link
                href="/whitelabel/retell"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  ElevenLabs vs Retell
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Which engine fits each client use case.
                </span>
              </Link>
              <Link
                href="/whitelabel/gohighlevel"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  ElevenLabs + GoHighLevel
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Run ElevenLabs voices inside GHL sub-accounts.
                </span>
              </Link>
              <Link
                href="/whitelabel/compare"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  Compare all providers
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Pricing and features side by side.
                </span>
              </Link>
            </div>
          </div>
        </nav>

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

        {/* Resources & cross-links */}
        <section id="elevenlabs-resources" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Learn more about white-labeling{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  {provider.name}
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Real partner results with white-label AI voice.
              </p>
            </div>
            <div className="space-y-4">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/whitelabel/case-studies/${cs.slug}`}
                  className="block glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-1">
                    Case study: How {cs.agencyName} built a white-label AI voice
                    practice ({cs.heroStats[0]?.value}/month)
                  </h3>
                  <p className="text-sm text-gray-400">{cs.metaDescription}</p>
                </Link>
              ))}
              <p className="text-center pt-4">
                <Link
                  href="/whitelabel/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
                >
                  Browse all partner case studies &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        <ProviderCrossLinks currentSlug="elevenlabs" />

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
