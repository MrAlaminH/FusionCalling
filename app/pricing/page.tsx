import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { DIRECT_PLANS, type DirectPlan } from "@/lib/product-facts";

const PricingSection = dynamic(() => import("@/components/pricing-section"), { ssr: true });

const fmt = (n: number) => n.toLocaleString("en-US");
const FROM_PRICE = Math.min(...DIRECT_PLANS.map((p) => p.price));
const MIN_MINUTES = Math.min(...DIRECT_PLANS.map((p) => p.includedMinutes));
const MAX_MINUTES = Math.max(...DIRECT_PLANS.map((p) => p.includedMinutes));
// Meta, OG, JSON-LD, and the FAQ prose all quote from DIRECT_PLANS via these
// so a price or minutes change on the plan records lands everywhere at once.
const PRICING_SUMMARY = `Plans from $${FROM_PRICE}/month with ${MIN_MINUTES}-${MAX_MINUTES} included minutes.`;

const setupFeeAnswer =
  DIRECT_PLANS.map((p) =>
    p.setupFee
      ? `${p.name} has a one-time $${fmt(p.setupFee)} setup fee.`
      : `${p.name} has no setup fee.`
  ).join(" ") +
  " Setup includes agent configuration, integration setup, testing, and launch support.";

const overageAnswer = `Additional minutes are billed at the plan's overage rate. ${DIRECT_PLANS.map(
  (p) => `${p.name}: ${p.overageRate}`
).join(", ")}. You'll receive notifications at 80% and 95% usage.`;

const pricingFaqs = [
  {
    question: "What is included in each pricing plan?",
    answer:
      "All plans include 24/7 AI voice agents, full portal access, all integrations, CRM and lead routing, auto-tagging and logging, and 99.9% uptime guarantee. Pro adds inbound/outbound call handling, outbound routing, private Slack support, advanced FAQ handling, and custom LLM integration. Enterprise adds custom trained voice, dedicated support/developer, extensive scripting, and extensive testing.",
  },
  {
    question: "Is there a setup fee?",
    answer: setupFeeAnswer,
  },
  {
    question: "What happens if I exceed my monthly minutes?",
    answer: overageAnswer,
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the next billing cycle.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "All plans are month-to-month with no long-term contract. Cancel anytime and you'll retain access until the end of your billing period.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We offer a 14-day money-back guarantee on all plans. Try the platform risk-free and if it's not a fit, request a full refund within 14 days.",
  },
];

// Per-plan editorial copy keyed by plan name — a renamed plan is a compile
// error. Prices and minute counts are data, not copy: they come from
// DIRECT_PLANS at render time.
const PLAN_DETAIL: Record<
  DirectPlan["name"],
  { sku: string; tagline: string; includes: string; offerIncludes: string }
> = {
  Starter: {
    sku: "FC-STARTER-001",
    tagline: "Perfect for small teams",
    includes:
      "full portal access, all integrations, CRM and lead routing, auto-tagging, 24/7 performance",
    offerIncludes:
      "full portal access, all integrations, CRM & lead routing, auto-tagging & logging",
  },
  Pro: {
    sku: "FC-PRO-001",
    tagline: "For growing businesses",
    includes:
      "everything in Starter, inbound/outbound call handling, outbound routing, private Slack support, advanced FAQ handling, custom LLM integration",
    offerIncludes:
      "inbound/outbound handling, outbound routing, private Slack support, advanced FAQ, custom LLM",
  },
  Enterprise: {
    sku: "FC-ENTERPRISE-001",
    tagline: "For large organizations",
    includes:
      "everything in Pro, custom trained voice, dedicated support and developer, extensive scripting, extensive testing",
    offerIncludes:
      "custom trained voice, dedicated support & developer, extensive scripting & testing",
  },
};

// Offer fields shared verbatim by every plan's Offer node. Digital SaaS —
// no return-policy/shipping fields (physical-goods markup on software is
// invalid merchant data per Google guidelines).
const OFFER_BASE = {
  priceCurrency: "USD",
  validFrom: "2026-01-15T09:00:00-05:00",
  priceValidUntil: "2027-12-31",
  itemCondition: "https://schema.org/NewCondition",
  availability: "https://schema.org/InStock",
  url: `${SITE_URL}/pricing`,
  seller: { "@type": "Organization", name: "Fusion Calling", "@id": `${SITE_URL}/#organization` },
};

const productNodes = DIRECT_PLANS.map((plan) => {
  const detail = PLAN_DETAIL[plan.name];
  return {
    "@type": "Product",
    "@id": `${SITE_URL}/pricing#${plan.name.toLowerCase()}`,
    name: `Fusion Calling ${plan.name} Plan`,
    description: `${detail.tagline}. Includes ${fmt(plan.includedMinutes)} minutes/month, ${detail.includes}.`,
    image: `${SITE_URL}/cardImage.jpg`,
    sku: detail.sku,
    brand: { "@type": "Brand", name: "Fusion Calling" },
    category: "Business Automation",
    offers: {
      "@type": "Offer",
      name: `${plan.name} Plan - Monthly`,
      price: plan.price.toFixed(2),
      ...OFFER_BASE,
      description: `${fmt(plan.includedMinutes)} minutes/month, ${detail.offerIncludes}`,
    },
  };
});

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/pricing#breadcrumb`,
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
          name: "Pricing",
          item: `${SITE_URL}/pricing`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/pricing#webpage`,
      url: `${SITE_URL}/pricing`,
      name: "Pricing | Fusion Calling",
      description: `Simple, fair pricing for AI phone call automation. ${PRICING_SUMMARY} No long-term contracts. 14-day money-back guarantee.`,
      inLanguage: "en-US",
      dateModified: CONTENT_LAST_UPDATED,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${SITE_URL}/pricing#breadcrumb` },
    },
    ...productNodes,
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/pricing#faqpage`,
      mainEntity: pricingFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: {
    // Absolute: keeps the $from-price hook under the ~60-char SERP limit
    // without the root template's " | Fusion Calling" suffix (site name shows
    // in the SERP badge anyway).
    absolute: `Pricing & Plans — AI Phone Automation from $${FROM_PRICE}/mo`,
  },
  description: `Simple, fair pricing for AI phone call automation. ${PRICING_SUMMARY} No long-term contracts. 14-day money-back guarantee.`,
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: `Pricing & Plans — AI Phone Automation from $${FROM_PRICE}/mo`,
    description: `Simple, fair pricing for AI phone call automation. ${PRICING_SUMMARY} No long-term contracts.`,
    url: `${SITE_URL}/pricing`,
    siteName: "Fusion Calling",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fusion Calling Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MrAlaminH",
    title: `Pricing & Plans — AI Phone Automation from $${FROM_PRICE}/mo`,
    description: `Simple, fair pricing for AI phone call automation. Plans from $${FROM_PRICE}/month.`,
    images: [`${SITE_URL}/opengraph-image.png`],
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <main id="main" className="min-h-screen w-full bg-black">
        <Navbar />
        <PricingSection headingLevel="h1" />
        <section id="pricing-faq" className="w-full section-spacing bg-black text-gray-200" aria-labelledby="pricing-faq-heading">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 id="pricing-faq-heading" className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-brand mb-8 md:mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {pricingFaqs.map((faq) => (
                <details key={faq.question} className="group border-2 border-brand/20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded-card p-4 md:p-6 transition duration-300 hover:border-brand/40">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none text-white font-medium text-base md:text-lg">
                    {faq.question}
                    <span className="flex-shrink-0 text-brand group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}