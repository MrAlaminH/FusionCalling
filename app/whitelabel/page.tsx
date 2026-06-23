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
        "The main differences are commission rates, support levels, and minimum client requirements. Starter Partners earn 20% commission with 5 minimum clients. Pro Partners earn 30% with 15 minimum clients. Enterprise Partners earn 40% with 30 minimum clients and get premium benefits like 24/7 support.",
    },
    {
      question: "Can I set my own pricing?",
      answer:
        "Yes! You have complete control over your pricing. Set any price point that works for your market. Your earnings are based on the difference between your client price and our wholesale rate, with additional commission on top.",
    },
    {
      question: "What support do partners receive?",
      answer:
        "All partners receive email and whatsapp support and access to our partner portal. Pro Partners get priority support (24-hour response time). Enterprise Partners receive 24/7 dedicated support with a dedicated account manager.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "Yes, there is a setup fee based on your chosen partner tier. We only charge a monthly fee based on your usage and your chosen partner tier. This makes it risk-free to get started.",
    },
    {
      question: "Can I use my own domain?",
      answer:
        "Absolutely. We will set up your white-label solution on your own domain (e.g., app.youragency.com). Your clients will never know about Fusion Calling unless you choose to tell them.",
    },
    {
      question: "How do voice and branding customization work?",
      answer:
        "You provide your brand assets (logo, colors, domain) and optionally a agent voice sample. Our team customizes your white-label environment and trains AI agents with your preferred voice. Most agencies complete this within their first week.",
    },
    {
      question: "Can I cancel my partnership?",
      answer:
        "Yes, you can cancel your partnership at any time without penalties. There are no long-term contracts. Any active clients you've brought on can continue using the service, and we handle the transition smoothly.",
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
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "87",
                  bestRating: "5",
                  worstRating: "1",
                },
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
      <main className="min-h-screen w-full bg-black">
      <WhiteLabelNavbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="value-prop">
        <ValueProp />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </main>
    </>
  );
}
