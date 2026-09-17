import type { Metadata } from "next";
import { whitelabelProviders, buildProviderGraph } from "@/lib/whitelabel-providers";
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

const schema = buildProviderGraph(provider, {
  audience: "Marketing agencies, call centers, SaaS resellers",
  extraFaqs,
});

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
