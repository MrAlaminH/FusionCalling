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
  title: "White-Label AI Voice Agents From $99/mo (Vapi, Retell, ElevenLabs)",
  description:
    "White-label AI voice agent platform for agencies & resellers: resell AI voice agents as software under your brand. 6 sub-accounts, 24-hour launch, Stripe rebilling. Keep 100% of revenue.",
  ...buildOpenGraph({
    title: "White-Label AI Voice Agents From $99/mo (Vapi, Retell, ElevenLabs)",
    description:
      "Launch your white-label voice AI agency in 24 hours. Import Vapi, Retell & ElevenLabs agents into one platform, brand them as yours, set your pricing, keep 100% of revenue.",
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
                      `${SITE_URL}/hero-thumbnail.jpg`,
                    uploadDate: "2026-01-15",
                    duration: "PT2M0S",
                    contentUrl: "https://vimeo.com/1155684546",
                    embedUrl: "https://player.vimeo.com/video/1155684546",
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
      <section className="w-full bg-black py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Resell{" "}
            <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
              Vapi, Retell &amp; ElevenLabs
            </span>{" "}
            Under Your Brand
          </h2>
          <p className="text-gray-400 text-base sm:text-lg text-center mb-10 md:mb-12">
            Fusion Calling is provider-agnostic — pick the engine that fits each client and resell it under your own brand.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROVIDER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium group"
              >
                <h3 className="text-base font-bold text-brand-light mb-1 group-hover:text-brand transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-400">{link.description}</p>
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
      <section id="how-it-works" className="scroll-mt-24">
        <HowItWorks />
      </section>
      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>
      <section id="benefits" className="scroll-mt-16">
        <Benefits />
      </section>
      <section className="w-full bg-black py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
            White-label voice AI software your agency owns
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-4">
            This is software, not a done-for-you service. You run it under your own domain, with your logo and your client accounts. Your clients log in to your brand, not ours.
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-4">
            The platform connects to the tools you already use. Import agents from{" "}
            <Link href="/whitelabel/vapi" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">Vapi</Link>,{" "}
            <Link href="/whitelabel/retell" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">Retell</Link>, and{" "}
            <Link href="/whitelabel/elevenlabs" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">ElevenLabs</Link>, or plug voice calling into{" "}
            <Link href="/whitelabel/gohighlevel" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">GoHighLevel</Link> sub-accounts.{" "}
            <Link href="/whitelabel/compare" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">Compare the white-label platform options</Link> to pick the setup that fits each client.
          </p>
          <p className="text-gray-400 text-base sm:text-lg">
            You work as a reseller with full control. You set the pricing, you bill the client, and you keep 100% of what you charge above the plan cost.
          </p>
        </div>
      </section>
      <section id="economics" className="w-full bg-black py-16 sm:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
            White-label AI voice agent reseller economics
          </h2>
          <p className="text-gray-400 text-base sm:text-lg text-center mb-10 md:mb-12">
            Buy wholesale, sell retail. Your platform cost stays flat while
            client pricing follows the value of an answered phone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="glass-light rounded-xl p-5 border border-brand/20">
              <p className="text-sm font-semibold text-brand-light mb-1">
                Receptionist Basic
              </p>
              <p className="text-2xl font-bold text-white mb-2">$197–$297/mo</p>
              <p className="text-sm text-gray-400">
                Inbound white-label AI voice agent, call logging, basic CRM,
                standard voice. Best for home services, salons, and small
                retail replacing missed calls.
              </p>
            </div>
            <div className="glass-light rounded-xl p-5 border border-brand/20">
              <p className="text-sm font-semibold text-brand-light mb-1">
                Receptionist Pro
              </p>
              <p className="text-2xl font-bold text-white mb-2">$397–$597/mo</p>
              <p className="text-sm text-gray-400">
                Inbound plus outbound white-label voice AI, advanced CRM,
                premium voice, analytics with monthly review. Best for real
                estate, dental and medical, and B2B services.
              </p>
            </div>
            <div className="glass-light rounded-xl p-5 border border-brand/20">
              <p className="text-2xl font-bold text-white mb-2">$797–$1,497/mo</p>
              <p className="text-sm font-semibold text-brand-light mb-1">
                Growth Engine
              </p>
              <p className="text-sm text-gray-400">
                Pro plus managed outbound campaigns and dedicated reporting.
                Best for high-ticket roofing, solar, legal, and finance where
                eight extra estimates cover the retainer.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 p-5 sm:p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">
              Wholesale in, retail out — why 1–2 clients cover the platform
            </h3>
            <ul className="text-sm text-gray-400 leading-relaxed space-y-2 list-disc pl-5">
              <li>
                Starter $99/mo includes 6 sub-accounts, Growth $299/mo
                includes 20, Scale $499/mo is unlimited. You keep 100% of what
                you charge above the plan.
              </li>
              <li>
                Clients compare you to a hire or to lost revenue, not to
                minutes. Price on outcomes — bookings, answered calls,
                recovered carts — never on wholesale cost.
              </li>
              <li>
                Import existing{" "}
                <Link href="/whitelabel/vapi" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">Vapi</Link>,{" "}
                <Link href="/whitelabel/retell" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">Retell AI</Link>, and{" "}
                <Link href="/whitelabel/elevenlabs" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">ElevenLabs</Link>{" "}
                agents with no rebuild, then{" "}
                <Link href="/whitelabel/compare" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">compare white-label platform options</Link>{" "}
                per client.
              </li>
              <li>
                Launch in about 24 hours: apply, add your logo and domain,
                connect calendar and CRM, test calls, then bill via Stripe
                rebilling. See{" "}
                <Link href="/pricing" className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors">pricing details</Link>{" "}
                for every tier.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand/20 bg-black/40 p-5 sm:p-6">
            <h3 className="font-semibold text-brand-light mb-3">
              Full white-label checklist
            </h3>
            <ul className="text-sm text-gray-400 leading-relaxed space-y-2 list-disc pl-5">
              <li>Custom domain, logo, colors, and favicon — your brand only</li>
              <li>Client sub-accounts with self-service portal access</li>
              <li>Stripe rebilling with pricing you control</li>
              <li>Call logs, transcripts, recordings, and analytics per client</li>
              <li>Platform name fully hidden from clients</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="faq" className="scroll-mt-16">
        <FAQ />
      </section>
      <div className="text-center px-4 pb-4">
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Comparing platforms?{" "}
          <Link
            href="/whitelabel/compare"
            className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
          >
            See how we compare
          </Link>{" "}
          or{" "}
          <Link
            href="/pricing"
            className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
          >
            see pricing details
          </Link>
          .
        </p>
      </div>
      <section id="cta" className="scroll-mt-24">
        <CTA />
      </section>
      <Footer />
    </main>
    </>
  );
}
