import type { Metadata } from "next";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { whitelabelProviders } from "@/lib/whitelabel-providers";
import { buildOpenGraph } from "@/lib/seo";
import { truncateAtWord } from "@/lib/utils";
import ProviderPageTemplate from "@/components/white-label/ProviderPageTemplate";

const provider = whitelabelProviders.find((p) => p.slug === "vapi")!;
const metaDescription = truncateAtWord(provider.description, 158);

const extraFaqs = [
  {
    question: "Do my clients ever see Vapi?",
    answer:
      "No. Your clients see only your brand — logo, domain, and pricing. You import your existing Vapi agents and API keys with no rebuild.     Usage stays on your Vapi account behind the scenes.",
  },
];

const faqs = [...provider.faqs, ...extraFaqs];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/whitelabel/vapi#webpage`,
      url: `${SITE_URL}/whitelabel/vapi`,
      name: provider.title,
      description: provider.description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: CONTENT_LAST_UPDATED,
      breadcrumb: {
        "@id": `${SITE_URL}/whitelabel/vapi#breadcrumb`,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "p"],
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/whitelabel/vapi#service`,
      name: "White-label AI Voice Agents for Vapi",
      description: provider.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "Audience",
        audienceType: "Marketing agencies, call centers, SaaS resellers",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/whitelabel/vapi#breadcrumb`,
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
          name: "Vapi",
          item: `${SITE_URL}/whitelabel/vapi`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/whitelabel/vapi#faqpage`,
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
    path: "/whitelabel/vapi",
  }),
};

export default function VapiWhiteLabelPage() {
  return (
    <ProviderPageTemplate
      provider={provider}
      schema={schema}
      featuresHeadingLabel="Vapi partners"
      faqSubtitle="Everything Vapi partners ask before they resell AI voice."
      resourcesHeading={
        <>
          Learn more about white-labeling{" "}
          <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
            {provider.name}
          </span>
        </>
      }
      resourcesIntro="Guides, comparisons, and real partner results."
      guideBlurb="Step-by-step walkthrough of importing your Vapi agents and reselling them under your own brand."
      caseStudyHeading={(agencyName, stat) =>
        `How ${agencyName} built a white-label AI voice practice (${stat}/month)`
      }
      compareLinks={[
        {
          href: "/whitelabel/retell",
          title: "Vapi vs Retell",
          note: "Which engine fits each client use case.",
        },
        {
          href: "/whitelabel/elevenlabs",
          title: "Vapi vs ElevenLabs",
          note: "Cost-effective calls or premium voices.",
        },
        {
          href: "/whitelabel/gohighlevel",
          title: "Vapi + GoHighLevel",
          note: "Run Vapi agents inside GHL sub-accounts.",
        },
        {
          href: "/whitelabel/compare",
          title: "Compare all providers",
          note: "Pricing and features side by side.",
        },
      ]}
      extraFaqs={extraFaqs}
      navbarLinks={[
        { label: "Home", href: "/whitelabel" },
        { label: "Features", href: "#vapi-features" },
        { label: "Pricing", href: "#vapi-pricing" },
        { label: "FAQs", href: "#vapi-faq" },
        { label: "All providers", href: "/whitelabel/compare" },
      ]}
    />
  );
}
