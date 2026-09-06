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

const provider = whitelabelProviders.find((p) => p.slug === "retell")!;
const metaDescription = truncateAtWord(provider.description, 158);
const relatedCaseStudies = whitelabelCaseStudies.filter((cs) =>
  provider.relatedCaseStudySlugs?.includes(cs.slug),
);

const faqs = [
  ...provider.faqs,
  {
    question: "Can I resell Retell agents under my own brand?",
    answer:
      "Yes. You import your existing Retell agents and API keys with no rebuild, then resell them under your own brand. You set your own client pricing and keep 100% of what you charge. Most partners launch in 24 hours with 30 days of support included.",
  },
  {
    question: "Do my clients ever see Retell?",
    answer:
      "No. Your clients see only your domain, logo, and pricing. Call usage stays on your Retell account behind the scenes. Fusion Calling stays invisible unless you tell them.",
  },
];

const retellschema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/whitelabel/retell#webpage`,
      url: `${SITE_URL}/whitelabel/retell`,
      name: provider.title,
      description: provider.description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: CONTENT_LAST_UPDATED,
      breadcrumb: {
        "@id": `${SITE_URL}/whitelabel/retell#breadcrumb`,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "p"],
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/whitelabel/retell#service`,
      name: "White-label AI Voice Agents for Retell AI",
      description: provider.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "Audience",
        audienceType:
          "Retell AI partners, AI voice agencies, SaaS resellers",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/whitelabel/retell#breadcrumb`,
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
          name: "Retell AI",
          item: `${SITE_URL}/whitelabel/retell`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/whitelabel/retell#faqpage`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: provider.title,
  description: metaDescription,
  ...buildOpenGraph({
    title: provider.title,
    description: metaDescription,
    path: "/whitelabel/retell",
  }),
};

export default function RetellWhiteLabelPage() {
  return (
    <>
      <script
        id="retell-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(retellschema) }}
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
              <li className="text-brand-light">Retell AI</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section
          id="retell-hero"
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
                href="#retell-pricing"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-brand px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-brand/20"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="retell-features"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why Retell AI partners choose{" "}
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

        <section id="retell-differentiators" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why white-label{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  {provider.name}
                </span>{" "}
                with Fusion Calling
              </h2>
            </div>
            <div className="space-y-4">
              {provider.differentiators.map((d) => (
                <div key={d.heading} className="rounded-xl border border-white/10 p-5">
                  <h3 className="font-semibold text-white mb-1">{d.heading}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <div id="retell-pricing">
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
                  Retell vs Vapi
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Which engine fits each client use case.
                </span>
              </Link>
              <Link
                href="/whitelabel/elevenlabs"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  Retell vs ElevenLabs
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Natural support flows or premium voices.
                </span>
              </Link>
              <Link
                href="/whitelabel/gohighlevel"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  Retell + GoHighLevel
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Run Retell agents inside GHL sub-accounts.
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
        <section id="retell-faq" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Everything Retell AI partners ask before they resell AI voice.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
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
        <section id="retell-resources" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Learn more about white-labeling{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  {provider.name}
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Guides, comparisons, and real partner results.
              </p>
            </div>
            <div className="space-y-4">
              {provider.blogGuide && (
                <Link
                  href={provider.blogGuide.href}
                  className="block glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-1">
                    Guide: {provider.blogGuide.label}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Step-by-step walkthrough of importing your Retell AI agents
                    and reselling them under your own brand.
                  </p>
                </Link>
              )}
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/whitelabel/case-studies/${cs.slug}`}
                  className="block glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-1">
                    Case study: How {cs.agencyName} pivoted to white-label AI
                    voice ({cs.heroStats[0]?.value}/month)
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

        <ProviderCrossLinks currentSlug="retell" />

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
