import type { Metadata } from "next";
import { whitelabelProviders, buildProviderGraph } from "@/lib/whitelabel-providers";
import { buildOpenGraph } from "@/lib/seo";
import { truncateAtWord } from "@/lib/utils";
import ProviderPageTemplate from "@/components/white-label/ProviderPageTemplate";

const provider = whitelabelProviders.find((p) => p.slug === "retell")!;
const metaDescription = truncateAtWord(provider.description, 158);

const extraFaqs = [
  {
    question: "Can I resell Retell agents under my own brand?",
    answer:
      "Yes. You import your existing Retell agents and API keys with no rebuild, then resell them under your own brand. You set your own client pricing and keep 100% of what you charge. Most partners launch in 24 hours with 30 days of support included.",
  },
  {
    question: "Do my clients ever see Retell?",
    answer:
      "No. Your clients see only your domain, logo, and pricing. Call usage stays on your Retell account behind the scenes. Fusion Calling stays invisible unless you tell them.",
  },
];

const schema = buildProviderGraph(provider, {
  audience: "Retell AI partners, AI voice agencies, SaaS resellers",
  extraFaqs,
});

export const metadata: Metadata = {
  title: provider.title,
  description: metaDescription,
  ...buildOpenGraph({
    title: provider.title,
    description: metaDescription,
    path: "/whitelabel/retell",
  }),
};

export default function RetellWhiteLabelPage() {
  return (
    <ProviderPageTemplate
      provider={provider}
      schema={schema}
      featuresHeadingLabel="Retell AI partners"
      faqSubtitle="Everything Retell AI partners ask before they resell AI voice."
      resourcesHeading={
        <>
          Learn more about white-labeling{" "}
          <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
            {provider.name}
          </span>
        </>
      }
      resourcesIntro="Guides, comparisons, and real partner results."
      guideBlurb="Step-by-step walkthrough of importing your Retell AI agents and reselling them under your own brand."
      caseStudyHeading={(agencyName, stat) =>
        `How ${agencyName} pivoted to white-label AI voice (${stat}/month)`
      }
      compareLinks={[
        {
          href: "/whitelabel/vapi",
          title: "Retell vs Vapi",
          note: "Which engine fits each client use case.",
        },
        {
          href: "/whitelabel/elevenlabs",
          title: "Retell vs ElevenLabs",
          note: "Natural support flows or premium voices.",
        },
        {
          href: "/whitelabel/gohighlevel",
          title: "Retell + GoHighLevel",
          note: "Run Retell agents inside GHL sub-accounts.",
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
        { label: "Features", href: "#retell-features" },
        { label: "Pricing", href: "#retell-pricing" },
        { label: "FAQs", href: "#retell-faq" },
        { label: "All providers", href: "/whitelabel/compare" },
      ]}
    />
  );
}
