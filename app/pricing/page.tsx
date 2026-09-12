import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const PricingSection = dynamic(() => import("@/components/pricing-section"), { ssr: true });

const pricingFaqs = [
  {
    question: "What is included in each pricing plan?",
    answer:
      "All plans include 24/7 AI voice agents, full portal access, all integrations, CRM and lead routing, auto-tagging and logging, and 99.9% uptime guarantee. Pro adds inbound/outbound call handling, outbound routing, private Slack support, advanced FAQ handling, and custom LLM integration. Enterprise adds custom trained voice, dedicated support/developer, extensive scripting, and extensive testing.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "Starter has no setup fee. Pro has a one-time $799 setup fee. Enterprise has a one-time $1,250 setup fee. Setup includes agent configuration, integration setup, testing, and launch support.",
  },
  {
    question: "What happens if I exceed my monthly minutes?",
    answer:
      "Additional minutes are billed at the plan's overage rate. Starter: $0.30/min, Pro: $0.25/min, Enterprise: $0.20/min. You'll receive notifications at 80% and 95% usage.",
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
      description: "Simple, fair pricing for AI phone call automation. Plans from $149/month with 500-2,100 included minutes. No long-term contracts. 14-day money-back guarantee.",
      inLanguage: "en-US",
      dateModified: CONTENT_LAST_UPDATED,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${SITE_URL}/pricing#breadcrumb` },
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/pricing#starter`,
      name: "Fusion Calling Starter Plan",
      description: "Perfect for small teams. Includes 500 minutes/month, full portal access, all integrations, CRM and lead routing, auto-tagging, 24/7 performance.",
      image: `${SITE_URL}/cardImage.jpg`,
      sku: "FC-STARTER-001",
      brand: { "@type": "Brand", name: "Fusion Calling" },
      category: "Business Automation",
      offers: {
        "@type": "Offer",
        name: "Starter Plan - Monthly",
        price: "149.00",
        priceCurrency: "USD",
        validFrom: "2026-01-15T09:00:00-05:00",
        priceValidUntil: "2027-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
        description: "500 minutes/month, full portal access, all integrations, CRM & lead routing, auto-tagging & logging",
        seller: { "@type": "Organization", name: "Fusion Calling", "@id": `${SITE_URL}/#organization` },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "US",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 14,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
            transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
          },
        },
      },
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/pricing#pro`,
      name: "Fusion Calling Pro Plan",
      description: "For growing businesses. Includes 1,050 minutes/month, everything in Starter, inbound/outbound call handling, outbound routing, private Slack support, advanced FAQ handling, custom LLM integration.",
      image: `${SITE_URL}/cardImage.jpg`,
      sku: "FC-PRO-001",
      brand: { "@type": "Brand", name: "Fusion Calling" },
      category: "Business Automation",
      offers: {
        "@type": "Offer",
        name: "Pro Plan - Monthly",
        price: "249.00",
        priceCurrency: "USD",
        validFrom: "2026-01-15T09:00:00-05:00",
        priceValidUntil: "2027-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
        description: "1,050 minutes/month, inbound/outbound handling, outbound routing, private Slack support, advanced FAQ, custom LLM",
        seller: { "@type": "Organization", name: "Fusion Calling", "@id": `${SITE_URL}/#organization` },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "US",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 14,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
            transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
          },
        },
      },
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/pricing#enterprise`,
      name: "Fusion Calling Enterprise Plan",
      description: "For large organizations. Includes 2,100 minutes/month, everything in Pro, custom trained voice, dedicated support and developer, extensive scripting, extensive testing.",
      image: `${SITE_URL}/cardImage.jpg`,
      sku: "FC-ENTERPRISE-001",
      brand: { "@type": "Brand", name: "Fusion Calling" },
      category: "Business Automation",
      offers: {
        "@type": "Offer",
        name: "Enterprise Plan - Monthly",
        price: "497.00",
        priceCurrency: "USD",
        validFrom: "2026-01-15T09:00:00-05:00",
        priceValidUntil: "2027-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
        description: "2,100 minutes/month, custom trained voice, dedicated support & developer, extensive scripting & testing",
        seller: { "@type": "Organization", name: "Fusion Calling", "@id": `${SITE_URL}/#organization` },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "US",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 14,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
            transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
          },
        },
      },
    },
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
  title: "Pricing",
  description: "Simple, fair pricing for AI phone call automation. Plans from $149/month with 500-2,100 included minutes. No long-term contracts. 14-day money-back guarantee.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Fusion Calling",
    description: "Simple, fair pricing for AI phone call automation. Plans from $149/month with 500-2,100 included minutes. No long-term contracts.",
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
    title: "Pricing | Fusion Calling",
    description: "Simple, fair pricing for AI phone call automation. Plans from $149/month.",
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
                <details key={faq.question} className="group border-2 border-brand/20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded-card p-4 md:p-6 transition-all duration-300 hover:border-brand/40">
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