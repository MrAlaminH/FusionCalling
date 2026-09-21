import type { Metadata } from "next";
import { whitelabelProviders, buildProviderGraph } from "@/lib/whitelabel-providers";
import { buildOpenGraph } from "@/lib/seo";
import { truncateAtWord } from "@/lib/utils";
import ProviderPageTemplate from "@/components/white-label/ProviderPageTemplate";

const provider = whitelabelProviders.find((p) => p.slug === "elevenlabs")!;
const metaDescription = truncateAtWord(provider.description, 158);

const title = provider.title;
const description = metaDescription;

const schema = buildProviderGraph(provider, {
  audience: "ElevenLabs agencies, marketing agencies, SaaS resellers",
});

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title,
    description,
    path: "/whitelabel/elevenlabs",
  }),
};

export default function ElevenLabsWhiteLabelPage() {
  return (
    <ProviderPageTemplate
      provider={provider}
      schema={schema}
      featuresHeadingLabel="ElevenLabs agencies"
      faqSubtitle="Everything ElevenLabs agencies ask before they resell AI voice."
      resourcesHeading={
        <>
          Learn more about white-labeling{" "}
          <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
            {provider.name}
          </span>
        </>
      }
      resourcesIntro="Real partner results with white-label AI voice."
      guideBlurb="Step-by-step walkthrough of importing your ElevenLabs voices and reselling them under your own brand."
      caseStudyHeading={(agencyName, stat) =>
        `How ${agencyName} built a white-label AI voice practice (${stat}/month)`
      }
      compareLinks={[
        {
          href: "/whitelabel/vapi",
          title: "Vapi white-label",
          note: "Resell Vapi agents under your own brand.",
        },
        {
          href: "/whitelabel/retell",
          title: "Retell white-label",
          note: "Resell Retell agents under your own brand.",
        },
        {
          href: "/whitelabel/gohighlevel",
          title: "ElevenLabs + GoHighLevel",
          note: "Run ElevenLabs voices inside GHL sub-accounts.",
        },
        {
          href: "/whitelabel/compare",
          title: "Compare all providers",
          note: "Pricing and features side by side.",
        },
      ]}
      navbarLinks={[
        { label: "Home", href: "/whitelabel" },
        { label: "Features", href: "#elevenlabs-features" },
        { label: "Pricing", href: "#elevenlabs-pricing" },
        { label: "FAQs", href: "#elevenlabs-faq" },
        { label: "All providers", href: "/whitelabel/compare" },
      ]}
    />
  );
}
