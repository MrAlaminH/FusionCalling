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
import Script from "next/script";

export const metadata: Metadata = {
  title: "White-label AI Voice Solution | Fusion Calling Partner Program",
  description:
    "Become a Fusion Calling partner and white-label our AI voice solution. Offer powerful AI phone automation under your own brand. Full branding, custom voice training, and dashboard included.",
  keywords: [
    "white-label AI voice solution",
    "resell AI phone automation",
    "agency partnership program",
    "AI voice reseller",
    "white-label call center AI",
    "agency SaaS partnership",
    "AI voice reseller program",
    "white label call center software",
    "agency AI partnership pricing",
    "B2B voice automation platform",
  ],
  alternates: {
    canonical: "/whitelabel",
  },
  openGraph: {
    title: "White-label AI Voice Solution | Fusion Calling Partner Program",
    description:
      "Become a Fusion Calling partner and white-label our AI voice solution. Offer powerful AI phone automation under your own brand.",
    url: "https://www.fusioncalling.com/whitelabel",
    siteName: "Fusion Calling",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Fusion Calling - White-label AI Voice Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WhiteLabelPage() {
  const faqs = [
    {
      question: "What is a white-label partnership?",
      answer:
        "A white-label partnership allows you to sell our AI voice calling solution under your own brand. Your clients see your logo, your colors, and interact with your branded interface while we handle the technology and infrastructure behind the scenes.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "Once approved, you can launch your white-label solution within 1-2 days. This includes branding setup, voice training, and dashboard customization. Our team guides you through every step of the process.",
    },
    {
      question: "Do I need technical expertise?",
      answer:
        "No technical expertise is required. We provide a fully managed white-label solution. You focus on sales and client relationships while we handle all technical aspects including integrations, updates, and maintenance.",
    },
    {
      question: "What's the difference between partner tiers?",
      answer:
        "The main differences are the number of sub-accounts, the support level, and the price. Starter includes 6 sub-accounts and client portal access for $99/month. Growth includes 20 sub-accounts with priority support and advanced analytics for $299/month. Scale includes unlimited sub-accounts, a dedicated account manager, and API access for $499/month. On every tier you keep 100% of what you charge your clients.",
    },
    {
      question: "Can I use my own domain?",
      answer:
        "Absolutely. We set up your white-label solution on your own domain (e.g., app.youragency.com). Your clients will never know about Fusion Calling unless you choose to tell them—you have complete brand control.",
    },
  ];

  return (
    <>
          <Script
            id="whitelabel-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "LocalBusiness",
                    "@id": "https://www.fusioncalling.com/whitelabel#localbusiness",
                    name: "Fusion Calling White-label Partner Program",
                    image: "https://www.fusioncalling.com/logo.png",
                    description: "White-label AI voice solution for agencies and resellers. Offer AI phone automation under your own brand with full customization and pricing you control.",
                    url: "https://www.fusioncalling.com/whitelabel",
                    telephone: "+1-202-998-3591",
                    email: "partners@fusioncalling.com",
                    parentOrganization: {
                      "@id": "https://www.fusioncalling.com/#organization"
                    },
                    areaServed: {
                      "@type": "Country",
                      name: "United States"
                    }
                  },
                  {
                    "@type": "Service",
                    "@id": "https://www.fusioncalling.com/whitelabel#service",
                    name: "White-label AI Voice Solution",
                    description: "Partner program allowing agencies and resellers to offer AI phone call automation under their own brand. Includes full white-label dashboard, custom voice training, and subscription-based pricing you control.",
                    provider: {
                      "@id": "https://www.fusioncalling.com/#organization"
                    },
                    offers: [
                      {
                        "@type": "Offer",
                        name: "Starter Partner Plan",
                        price: "99",
                        priceCurrency: "USD",
                        description: "6 sub-accounts, complete white-labeling, client portal access",
                        availability: "https://schema.org/InStock",
                        url: "https://www.fusioncalling.com/whitelabel"
                      },
                      {
                        "@type": "Offer",
                        name: "Growth Partner Plan",
                        price: "299",
                        priceCurrency: "USD",
                        description: "20 sub-accounts, priority support, advanced analytics",
                        availability: "https://schema.org/InStock",
                        url: "https://www.fusioncalling.com/whitelabel"
                      },
                      {
                        "@type": "Offer",
                        name: "Scale Partner Plan",
                        price: "499",
                        priceCurrency: "USD",
                        description: "Unlimited sub-accounts, dedicated account manager, API access",
                        availability: "https://schema.org/InStock",
                        url: "https://www.fusioncalling.com/whitelabel"
                      }
                    ],
                    audience: {
                      "@type": "Audience",
                      audienceType: "Marketing agencies, call centers, SaaS resellers, consultants"
                    },
                    keywords: "white-label AI voice, agency partnership, AI reseller, voice AI platform, call center white-label"
                  },
                  {
                    "@type": "BreadcrumbList",
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
                    ],
                  },
                  {
                    "@type": "Product",
                    "@id": "https://www.fusioncalling.com/whitelabel#product",
                    name: "Fusion Calling White-label AI Voice Solution",
                    description:
                      "Become a Fusion Calling partner and white-label our AI voice solution. Offer powerful AI phone automation under your own brand.",
                    brand: {
                      "@id": "https://www.fusioncalling.com/#organization",
                    },
                    category: "Business Software",
                    offers: [
                      {
                        "@type": "Offer",
                        name: "Starter Plan",
                        price: "99",
                        priceCurrency: "USD",
                        priceValidUntil: "2027-12-31",
                        availability: "https://schema.org/InStock",
                        url: "https://www.fusioncalling.com/whitelabel",
                      },
                      {
                        "@type": "Offer",
                        name: "Growth Plan",
                        price: "299",
                        priceCurrency: "USD",
                        priceValidUntil: "2027-12-31",
                        availability: "https://schema.org/InStock",
                        url: "https://www.fusioncalling.com/whitelabel",
                      },
                      {
                        "@type": "Offer",
                        name: "Scale Plan",
                        price: "499",
                        priceCurrency: "USD",
                        priceValidUntil: "2027-12-31",
                        availability: "https://schema.org/InStock",
                        url: "https://www.fusioncalling.com/whitelabel",
                      },
                    ],
                  },
                  {
                    "@type": "FAQPage",
                    "@id": "https://www.fusioncalling.com/whitelabel#faqpage",
                    mainEntity: faqs.map((faq) => ({
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
                    "@id": "https://www.fusioncalling.com/whitelabel#howto",
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
                    "@id": "https://www.fusioncalling.com/whitelabel#video",
                    name: "Fusion Calling White-label Demo",
                    description: "Watch our demo video to see how the white-label AI voice solution works.",
                    thumbnailUrl: ["https://www.fusioncalling.com/hero-thambnail.png"],
                    uploadDate: "2024-01-01",
                    contentUrl: "https://player.vimeo.com/video/1155684546",
                    embedUrl: "https://player.vimeo.com/video/1155684546",
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
      <section id="how-it-works" className="scroll-mt-24">
        <HowItWorks />
      </section>
      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>
      <section id="benefits" className="scroll-mt-16">
        <Benefits />
      </section>
      <section id="faq" className="scroll-mt-16">
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
