import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/white-label/Pricing";
import CTA from "@/components/white-label/CTA";
import { buildOpenGraph } from "@/lib/seo";

const title = "AI Voice Agent Reseller Program";
const description =
  "Resell AI voice agents under your own brand. Wholesale from $99/mo with 6 sub-accounts, Stripe rebilling, and 100% margin control. Launch your reseller business in 24 hours.";

const programSteps = [
  {
    t: "1. Apply & get approved",
    d: "Submit a short application and hear back within 48 hours. We review your agency or consultancy to make sure every partner can succeed with the platform.",
  },
  {
    t: "2. Brand your platform",
    d: "Add your logo, colors, and domain. Your client portal, call agents, and billing all run under your brand — Fusion Calling stays invisible to your clients.",
  },
  {
    t: "3. Set pricing & resell",
    d: "Package AI voice agents at prices you choose, bill clients through your own Stripe account with built-in rebilling, and keep 100% of what you charge.",
  },
];

const audiences = [
  {
    t: "Marketing agencies",
    d: "Add a high-margin, recurring AI service to your retainers. Launch a branded AI receptionist or calling service for every client in about 24 hours.",
  },
  {
    t: "MSPs & telecom consultants",
    d: "Your clients already buy connectivity and phone systems from you. AI voice agents are the natural next line item — resell them without building infrastructure.",
  },
  {
    t: "GoHighLevel agencies",
    d: "Deploy agents into client sub-accounts and sync calls, leads, and appointments back into GHL workflows you already run.",
  },
  {
    t: "SaaS founders & entrepreneurs",
    d: "Stand up a vertical AI voice product under your own brand without hiring engineers — the platform is the product, you own the customer.",
  },
];

const included = [
  {
    t: "Client sub-accounts",
    d: "Isolate every client with their own agents, numbers, minutes, and billing — 6 sub-accounts on Starter, 20 on Growth, unlimited on Scale.",
  },
  {
    t: "Stripe rebilling",
    d: "Bill clients on your own Stripe account with automated recurring invoices in your brand. You set the price; you keep the margin.",
  },
  {
    t: "White-label dashboard & portal",
    d: "Your logo, colors, and domain (app.youragency.com). Clients log into your platform, not ours.",
  },
  {
    t: "Multi-provider voice engines",
    d: "Resell Vapi, Retell AI, and ElevenLabs from one dashboard — match each client to the right engine without re-platforming.",
  },
  {
    t: "Call logs, transcripts & analytics",
    d: "Every call recorded, transcribed, and searchable, so you can prove value in client reviews and renewals.",
  },
  {
    t: "Done-with-you onboarding",
    d: "24-hour guided launch: import existing agents or start from templates, connect calendars and CRMs, and go live with support.",
  },
];

const rpFaqs = [
  {
    question: "How does the AI voice agent reseller program work?",
    answer:
      "You buy the platform wholesale and resell it under your own brand. Apply for partnership (approved within 48 hours), add your logo, domain, and pricing, then package AI voice agents for your clients. Your clients see only your brand while Fusion Calling runs the speech AI, telephony, and dashboard behind the scenes. Most partners launch within 24 hours of approval.",
  },
  {
    question: "How much does it cost to join the reseller program?",
    answer:
      "Partner plans start at $99/month (Starter, 6 sub-accounts) with $0 setup fee and a 3-day free trial. Growth is $299/month with 20 sub-accounts and priority support. Scale is $499/month with unlimited sub-accounts, a dedicated account manager, and API access. There are no long-term contracts — plans are billed monthly.",
  },
  {
    question: "How much can I earn as a reseller?",
    answer:
      "You keep 100% of what you charge above the platform cost. Most partners package an AI receptionist at $197–$497/month per client. For example, 6 clients at $297/month is $1,782 in monthly revenue against a $99 Starter subscription — roughly $1,683 in monthly margin. One or two clients typically cover the platform cost entirely.",
  },
  {
    question: "Do I need technical skills to resell AI voice agents?",
    answer:
      "No. The platform is fully managed: speech recognition, language models, text-to-speech, telephony, and hosting are all handled for you. You get no-code agent templates, done-with-you onboarding, and support. Your job is sales and client relationships, not engineering.",
  },
  {
    question: "Can I use my own domain and branding?",
    answer:
      "Yes. Your dashboard and client portal run on your own domain (for example, app.youragency.com) with your logo, colors, and pricing. Clients never see the Fusion Calling brand unless you choose to mention it.",
  },
  {
    question: "Is there a contract or minimum commitment?",
    answer:
      "No long-term contracts. Partner plans are month-to-month, start with a 3-day free trial, and you can upgrade or downgrade between Starter, Growth, and Scale as your client roster changes.",
  },
];

const rpSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/whitelabel/reseller-program#webpage`,
      url: `${SITE_URL}/whitelabel/reseller-program`,
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: CONTENT_LAST_UPDATED,
      breadcrumb: {
        "@id": `${SITE_URL}/whitelabel/reseller-program#breadcrumb`,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "p"],
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/whitelabel/reseller-program#service`,
      name: "AI Voice Agent Reseller Program",
      description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "Audience",
        audienceType:
          "Marketing agencies, MSPs, telecom consultants, GoHighLevel agencies, SaaS resellers",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Starter Partner Plan",
          price: "99.00",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/whitelabel/reseller-program`,
        },
        {
          "@type": "Offer",
          name: "Growth Partner Plan",
          price: "299.00",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/whitelabel/reseller-program`,
        },
        {
          "@type": "Offer",
          name: "Scale Partner Plan",
          price: "499.00",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/whitelabel/reseller-program`,
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/whitelabel/reseller-program#breadcrumb`,
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
          name: "AI Voice Agent Reseller Program",
          item: `${SITE_URL}/whitelabel/reseller-program`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/whitelabel/reseller-program#faqpage`,
      mainEntity: rpFaqs.map((f) => ({
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
    title: `${title} | Fusion Calling`,
    description,
    path: "/whitelabel/reseller-program",
  }),
};

export default function ResellerProgramPage() {
  return (
    <>
      <script
        id="reseller-program-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rpSchema) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
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
              <li className="text-brand-light">Reseller Program</li>
            </ol>
          </div>
        </nav>

        <section
          id="rp-hero"
          className="relative pt-8 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full glass-light px-4 py-1.5 text-xs sm:text-sm text-brand-light border border-brand/20 mb-6">
              For Agencies, MSPs &amp; Consultants
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              AI Voice Agent{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                Reseller Program
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Buy wholesale from $99/month, set your own client pricing, and
              keep 100% of the margin. White-label dashboard, client
              sub-accounts, Stripe rebilling, and Vapi + Retell + ElevenLabs
              engines are included from day one.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
              New to reselling voice? Read the{" "}
              <Link
                href="/blog/how-to-start-a-voice-ai-agency"
                className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
              >
                step-by-step guide to starting a voice AI agency
              </Link>{" "}
              or{" "}
              <Link
                href="/whitelabel/compare"
                className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
              >
                compare white-label providers
              </Link>{" "}
              first.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-strong px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-all shadow-premium hover:shadow-premium-lg hover:from-brand-strong hover:to-orange-700 hover:scale-105"
              >
                Apply to the Program
              </a>
              <a
                href="#rp-pricing"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-brand px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-brand/20"
              >
                View Partner Pricing
              </a>
            </div>
          </div>
        </section>

        <section
          id="rp-how-it-works"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                How the reseller program works
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                From application to your first branded client launch in days,
                not months.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programSteps.map((s) => (
                <div
                  key={s.t}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {s.t}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="rp-margins"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Your reseller margins, in plain numbers
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                One or two clients typically cover the platform cost. Here is a
                realistic Starter-plan month:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-light rounded-2xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  What you pay
                </h3>
                <p className="text-3xl font-bold text-white mb-2">$99/mo</p>
                <p className="text-sm text-gray-400">
                  Starter partner plan: 6 client sub-accounts, $0 setup, no
                  contract.
                </p>
              </div>
              <div className="glass-light rounded-2xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  What you charge
                </h3>
                <p className="text-3xl font-bold text-white mb-2">
                  $297<span className="text-lg text-gray-400">/client/mo</span>
                </p>
                <p className="text-sm text-gray-400">
                  Typical packaged AI receptionist price ($197–$497 is the
                  common range).
                </p>
              </div>
              <div className="glass-light rounded-2xl p-6 border border-brand/30 bg-gradient-to-br from-brand/10 to-brand-strong/5">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Your margin at 6 clients
                </h3>
                <p className="text-3xl font-bold text-white mb-2">
                  ~$1,683/mo
                </p>
                <p className="text-sm text-gray-400">
                  $1,782 client revenue minus the $99 platform. You keep 100%
                  of the spread.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="rp-audience" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Who the reseller program is for
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                If you have client relationships, you already have the hard
                part.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((a) => (
                <div
                  key={a.t}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {a.t}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rp-included" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What&apos;s included for resellers
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                Everything you need to run a branded AI voice practice — none
                of the infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map((f) => (
                <div
                  key={f.t}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {f.t}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="rp-pricing">
          <Pricing />
        </div>

        <section id="rp-faq" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Reseller program FAQ
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                What partners ask before they join.
              </p>
            </div>
            <div className="space-y-4">
              {rpFaqs.map((faq) => (
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
            <p className="text-gray-400 text-center mt-8 text-sm sm:text-base">
              Weighing the build-vs-resell decision?{" "}
              <Link
                href="/blog/how-to-start-a-voice-ai-agency"
                className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
              >
                Read the full voice AI agency playbook
              </Link>
              .
            </p>
          </div>
        </section>

        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
