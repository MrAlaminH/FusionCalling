import Link from "next/link";
import type { Metadata } from "next";
import { whitelabelProviders, buildProviderGraph } from "@/lib/whitelabel-providers";
import { buildOpenGraph } from "@/lib/seo";
import { Reveal } from "@/components/ui/reveal";
import ProviderPageTemplate from "@/components/white-label/ProviderPageTemplate";

const provider = whitelabelProviders.find((p) => p.slug === "gohighlevel")!;
const title = provider.title;
const description = provider.description;

const schema = buildProviderGraph(provider, {
  audience: "GoHighLevel agencies, marketing agencies, SaaS resellers",
});

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title: `${title} | Fusion Calling`,
    description,
    path: "/whitelabel/gohighlevel",
  }),
};

export default function GHLWhiteLabelPage() {
  return (
    <ProviderPageTemplate
      provider={provider}
      schema={schema}
      featuresHeadingLabel="GoHighLevel agencies"
      faqSubtitle="Everything GoHighLevel agencies ask before they resell AI voice."
      resourcesHeading={
        <>
          Learn more about AI voice in{" "}
          <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
            GoHighLevel
          </span>
        </>
      }
      resourcesIntro="Guides and real partner results for GHL agencies."
      guideBlurb="How to deploy branded AI voice agents across your GHL client sub-accounts, step by step."
      caseStudyHeading={(agencyName, stat) =>
        `How ${agencyName} built a white-label AI voice practice (${stat}/month)`
      }
      compareLinks={[
        {
          href: "/whitelabel/vapi",
          title: "GoHighLevel + Vapi",
          note: "Resell Vapi agents inside GHL sub-accounts.",
        },
        {
          href: "/whitelabel/retell",
          title: "GoHighLevel + Retell",
          note: "Resell Retell agents inside GHL sub-accounts.",
        },
        {
          href: "/whitelabel/elevenlabs",
          title: "GoHighLevel + ElevenLabs",
          note: "Resell ElevenLabs voices inside GHL sub-accounts.",
        },
        {
          href: "/whitelabel/compare",
          title: "Compare all providers",
          note: "Pricing and features side by side.",
        },
      ]}
      heroIntro="Deploy AI voice agents directly inside your GoHighLevel client sub-accounts. Import your Vapi, Retell & ElevenLabs agents, deliver 24/7 call handling and booking, and resell everything under your own brand."
      heroNote={
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
          New to reselling voice? Read our{" "}
          <Link
            href="/blog/gohighlevel-white-label-voice"
            className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
          >
            GoHighLevel white-label voice guide
          </Link>{" "}
          or{" "}
          <Link
            href="/whitelabel/compare"
            className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
          >
            compare white-label providers
          </Link>{" "}
          before you pick a plan.
        </p>
      }
      navbarLinks={[
        { label: "Home", href: "/whitelabel" },
        { label: "Features", href: "#gohighlevel-features" },
        { label: "Pricing", href: "#gohighlevel-pricing" },
        { label: "FAQs", href: "#gohighlevel-faq" },
        { label: "All providers", href: "/whitelabel/compare" },
      ]}
      extraSection={
        <section
          id="gohighlevel-missed-call-text-back"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Missed-Call Text Back,{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  White-Labeled
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                GoHighLevel&apos;s native Missed Call Text Back sends an
                automatic SMS when a call goes unanswered. Pair it with Fusion
                Calling&apos;s white-label AI voice agent and the missed call
                mostly disappears: the AI answers in two rings, 24/7, takes the
                message or books the appointment, and the text-back flow remains
                as the safety net — all under your agency&apos;s brand inside
                client sub-accounts.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MCTB_CARDS.map((f) => (
                <div
                  key={f.t}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="font-display text-lg font-bold text-brand-light mb-3">
                    {f.t}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}

const MCTB_CARDS = [
  {
    t: "AI answers before it becomes missed",
    d: "The white-label voice agent picks up in two rings around the clock, so most callers never reach voicemail — and never need the text-back in the first place.",
  },
  {
    t: "Text back as the safety net",
    d: "Keep GoHighLevel's Missed Call Text Back running for the edge cases. Your client's caller gets the SMS in your client's brand, with the conversation logged to the sub-account.",
  },
  {
    t: "Call-backs that book, not just notify",
    d: "The AI agent can call missed callers back, qualify them, and book straight into the calendar — turning a dead lead into a booked appointment.",
  },
];
