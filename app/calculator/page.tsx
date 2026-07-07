import { Metadata } from "next";
import Script from "next/script";
import VoiceCalculator from "./VoiceCalculator";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";

const title = "Voice Throughput Calculator | AI Call Capacity Planning";
const description =
  "Calculate your AI voice call throughput capacity. Plan lead processing, forecast call volumes, and optimize infrastructure for Vapi and Retell AI platforms.";

const calculatorJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Calculator", item: `${SITE_URL}/calculator` },
      ],
    },
    {
      "@type": "WebApplication",
      name: "Fusion Calling Voice Throughput Calculator",
      url: `${SITE_URL}/calculator`,
      description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web-based",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/calculator`,
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "voice throughput calculator",
    "AI call capacity planning",
    "lead processing calculator",
    "voice automation scaling",
    "Vapi calculator",
    "Retell AI calculator",
    "call center capacity",
    "AI voice forecasting"
  ],
  ...buildOpenGraph({ title, description, path: "/calculator" }),
};

export default function CalculatorPage() {
  return (
    <>
      <Script
        id="calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <VoiceCalculator />
    </>
  );
}
