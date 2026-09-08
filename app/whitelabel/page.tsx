import { SITE_URL } from "@/lib/site-url";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/white-label/Hero";
import ValueProp from "@/components/white-label/ValueProp";
import Features from "@/components/white-label/Features";
import HowItWorks from "@/components/white-label/HowItWorks";
import Pricing from "@/components/white-label/Pricing";
import Benefits from "@/components/white-label/Benefits";
import FAQ from "@/components/white-label/FAQ";
import CTA from "@/components/white-label/CTA";
import type { Metadata } from "next";
import Link from "next/link";
import { CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";
import { whitelabelFaqs } from "@/lib/whitelabel-faqs";
import { SectionHeader } from "@/components/ui/section-header";

const PROVIDER_LINKS = [
  {
    href: "/whitelabel/vapi",
    title: "Vapi white-label reselling",
    description: "Import Vapi agents, brand them as your own, and resell with pricing you control.",
  },
  {
    href: "/whitelabel/retell",
    title: "Retell AI white-label reselling",
    description: "Bring Retell AI agents into your branded dashboard and keep 100% of client revenue.",
  },
  {
    href: "/whitelabel/elevenlabs",
    title: "ElevenLabs white-label reselling",
    description: "Resell ElevenLabs voice agents under your agency brand with your own domain and portal.",
  },
  {
    href: "/whitelabel/gohighlevel",
    title: "GoHighLevel voice AI integration",
    description: "Plug AI voice calling into GoHighLevel sub-accounts and sell it to your clients.",
  },
];

export const metadata: Metadata = {
  title: "White-Label AI Voice Agents From $99/mo",
  description:
    "White-label AI voice platform for agencies: resell under your brand. 6 sub-accounts, 24-hour launch, Stripe rebilling.",
  ...buildOpenGraph({
    title: "White-Label AI Voice Agents From $99/mo",
    description:
      "White-label AI voice platform for agencies: resell under your brand. 6 sub-accounts, 24-hour launch, Stripe rebilling.",
    path: "/whitelabel",
  }),
};

export default function WhiteLabelPage() {
  return (
    <>
          <script
            id="whitelabel-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Service",
                    "@id": `${SITE_URL}/whitelabel#service`,
                    name: "White-label AI Voice Solution",
                    description: "Partner program allowing agencies and resellers to offer AI phone call automation under their own brand. Includes full white-label dashboard, custom voice training, and subscription-based pricing you control.",
                    provider: {
                      "@id": `${SITE_URL}/#organization`
                    },
                    audience: {
                      "@type": "Audience",
                      audienceType: "Marketing agencies, call centers, SaaS resellers, consultants"
                    },
                  },
                  {
                    "@type": "BreadcrumbList",
                    "@id": `${SITE_URL}/whitelabel#breadcrumb`,
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
                    ],
                  },
                  {
                    "@type": "WebPage",
                    "@id": `${SITE_URL}/whitelabel#webpage`,
                    url: `${SITE_URL}/whitelabel`,
                    name: "White-label AI Voice Solution | Fusion Calling Partner Program",
                    description: "Become a Fusion Calling partner and white-label our AI voice solution. Offer powerful AI phone automation under your own brand.",
                    inLanguage: "en-US",
                    isPartOf: { "@id": `${SITE_URL}/#website` },
                    dateModified: CONTENT_LAST_UPDATED,
                    breadcrumb: { "@id": `${SITE_URL}/whitelabel#breadcrumb` },
                    speakable: {
                      "@type": "SpeakableSpecification",
                      cssSelector: ["h1"]
                    }
                  },
                  {
                    "@type": "Product",
                    "@id": `${SITE_URL}/whitelabel#product`,
                    name: "Fusion Calling White-label AI Voice Solution",
                    description:
                      "Become a Fusion Calling partner and white-label our AI voice solution. Offer powerful AI phone automation under your own brand.",
                    image: `${SITE_URL}/cardImage.jpg`,
                    sku: "FC-WHITELABEL-001",
                    brand: {
                      "@type": "Brand",
                      name: "Fusion Calling",
                    },
                    category: "Business Software",
                    offers: [
                      {
                        "@type": "Offer",
                        name: "Starter Plan",
                        price: "99.00",
                        priceCurrency: "USD",
                        priceValidUntil: "2027-12-31",
                        availability: "https://schema.org/InStock",
                        url: `${SITE_URL}/whitelabel`,
                        seller: {
                          "@type": "Organization",
                          name: "Fusion Calling",
                        },
                      },
                      {
                        "@type": "Offer",
                        name: "Growth Plan",
                        price: "299.00",
                        priceCurrency: "USD",
                        priceValidUntil: "2027-12-31",
                        availability: "https://schema.org/InStock",
                        url: `${SITE_URL}/whitelabel`,
                        seller: {
                          "@type": "Organization",
                          name: "Fusion Calling",
                        },
                      },
                      {
                        "@type": "Offer",
                        name: "Scale Plan",
                        price: "499.00",
                        priceCurrency: "USD",
                        priceValidUntil: "2027-12-31",
                        availability: "https://schema.org/InStock",
                        url: `${SITE_URL}/whitelabel`,
                        seller: {
                          "@type": "Organization",
                          name: "Fusion Calling",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "FAQPage",
                    "@id": `${SITE_URL}/whitelabel#faqpage`,
                    mainEntity: whitelabelFaqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                      },
                    })),
                  },
                  {
                    "@type": "HowTo",
                    "@id": `${SITE_URL}/whitelabel#howto`,
                    name: "How to Launch Your White-label AI Voice Business",
                    description:
                      "From application to first sale in as little as one week. We handle the technology, you focus on growing your agency.",
                    step: [
                      {
                        "@type": "HowToStep",
                        name: "Apply for Partnership",
                        text: "Submit your application and get approved within 48 hours. We review your agency to ensure a successful partnership.",
                      },
                      {
                        "@type": "HowToStep",
                        name: "Customize Your Brand",
                        text: "Set up your white-label environment with your logo, colors, and domain. Launch your branded AI solution.",
                      },
                      {
                        "@type": "HowToStep",
                        name: "Set Your Pricing",
                        text: "Define your pricing model and margins. You have complete control over what you charge your clients.",
                      },
                      {
                        "@type": "HowToStep",
                        name: "Start Selling & Earning",
                        text: "Begin onboarding clients and generating recurring revenue. Scale as fast as you want with our infrastructure.",
                      },
                    ],
                  },
                  {
                    "@type": "VideoObject",
                    "@id": `${SITE_URL}/whitelabel#video`,
                    name: "Fusion Calling White-label AI Voice Demo",
                    description:
                      "See the Fusion Calling white-label AI voice platform in action: branded dashboard, sub-account management, and live AI phone agents under your own domain.",
                    thumbnailUrl:
                      `${SITE_URL}/new-hero-thumbnail.png`,
                    uploadDate: "2026-01-15",
                    duration: "PT2M0S",
                    contentUrl: "https://vimeo.com/1225047351",
                    embedUrl: "https://player.vimeo.com/video/1225047351",
                    regionsAllowed: ["US", "CA", "GB", "AU"],
                    isFamilyFriendly: true,
                    publisher: {
                      "@id": `${SITE_URL}/#organization`,
                    },
                  },
                ],
              }),
            }}
          />
      <main id="main" className="min-h-screen w-full bg-black">
      <WhiteLabelNavbar />
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="value-prop" className="scroll-mt-24">
        <ValueProp />
      </section>
      <section id="features" className="scroll-mt-24">
        <Features />
      </section>
      <section className="w-full bg-black section-rhythm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader
            title="Resell Vapi, Retell & ElevenLabs Under Your Brand"
            highlight="Vapi, Retell & ElevenLabs"
            subtitle="Fusion Calling is provider-agnostic — pick the engine that fits each client and resell it under your own brand."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {PROVIDER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-light rounded-xl p-5 md:p-6 border border-brand/20 hover:border-brand/40 transition-premium group"
              >
                <h3 className="text-base md:text-lg font-bold text-brand-light mb-1 group-hover:text-brand transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">{link.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/whitelabel/case-studies"
              className="text-gray-400 hover:text-brand underline-offset-4 hover:underline transition-colors"
            >
              White-label case studies
            </Link>
            <Link
              href="/whitelabel/locations"
              className="text-gray-400 hover:text-brand underline-offset-4 hover:underline transition-colors"
            >
              White-label availability by location
            </Link>
          </div>
        </div>
      </section>
      <section id="reseller-program" className="w-full bg-black section-rhythm scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader
            title="AI Voice Agent Reseller Program"
            highlight="Reseller Program"
            subtitle="Buy wholesale from $99/month, set your own client pricing, and keep 100% of the margin. Sub-accounts, Stripe rebilling, and a 24-hour launch are included on every plan."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20">
              <h3 className="text-base md:text-lg font-bold text-brand-light mb-1">
                Your pricing, your margins
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Package an AI receptionist at $197–$497/month and keep every dollar above the wholesale rate.
              </p>
            </div>
            <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20">
              <h3 className="text-base md:text-lg font-bold text-brand-light mb-1">
                Stripe rebilling built in
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Bill clients on your own Stripe account with automated recurring invoices in your brand.
              </p>
            </div>
            <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20">
              <h3 className="text-base md:text-lg font-bold text-brand-light mb-1">
                Launch in 24 hours
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Add your logo, colors, and domain, then import Vapi, Retell, or ElevenLabs agents the same day.
              </p>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-gray-400">
            Model your margins in the{" "}
            <Link
              href="/calculator"
              className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
            >
              white-label margin calculator
            </Link>
            , see real partner results in our{" "}
            <Link
              href="/whitelabel/case-studies"
              className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
            >
              reseller case studies
            </Link>
            , or explore the full{" "}
            <Link
              href="/whitelabel/reseller-program"
              className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
            >
              AI voice agent reseller program
            </Link>
            .
          </p>
        </div>
      </section>
      <section
        id="white-label-receptionist"
        className="w-full bg-black section-rhythm scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader
            title="White-Label AI Receptionist & Answering Service"
            highlight="AI Receptionist"
            subtitle="Package the platform as a white-label AI receptionist for your clients: it answers every call 24/7, books appointments, takes messages, and transfers urgent callers — all under your agency brand."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20">
              <h3 className="text-base md:text-lg font-bold text-brand-light mb-1">
                24/7 call answering
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Every call picked up in two rings — nights, weekends, and holidays included.
              </p>
            </div>
            <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20">
              <h3 className="text-base md:text-lg font-bold text-brand-light mb-1">
                Booking &amp; reminders
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Books straight into your client&apos;s calendar and sends automated appointment reminders.
              </p>
            </div>
            <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20">
              <h3 className="text-base md:text-lg font-bold text-brand-light mb-1">
                Smart transfer &amp; messages
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Screens callers, takes detailed messages, and warm-transfers urgent calls to your client&apos;s team.
              </p>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-gray-400">
            Ship it to any vertical — explore{" "}
            <Link
              href="/industries"
              className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
            >
              AI voice solutions by industry
            </Link>{" "}
            or browse our{" "}
            <Link
              href="/whitelabel/case-studies"
              className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
            >
              white-label answering service case studies
            </Link>
            .
          </p>
        </div>
      </section>
      <section id="how-it-works" className="scroll-mt-24">
        <HowItWorks />
      </section>
      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>
      <section id="benefits" className="scroll-mt-24">
        <Benefits />
      </section>
      <section id="faq" className="scroll-mt-24">
        <FAQ />
      </section>
      <section id="cta" className="scroll-mt-24">
        <CTA />
      </section>
      <Footer />
    </main>
    </>
  );
}
