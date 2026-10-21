import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import PostFaq from "@/components/blog/PostFaq";
import CTA from "@/components/white-label/CTA";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { primaryButton, secondaryButton } from "@/components/ui/button-styles";
import { buildOpenGraph, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";
import { WHOLESALE_PLANS } from "@/lib/product-facts";

const title = "White-Label Onboarding Guide — Launch in 48 Hours";
const description =
  "Your launch path as a Fusion Calling partner: start the 3-day free trial, follow the setup guides, and put your first branded AI voice agent live within 24–48 hours. Pricing, telephony, and support — all in one place.";

const CAL_URL = "https://cal.com/mralamin/discovery-call";
const APP_URL = "https://app.fusioncalling.com/";

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/whitelabel/onboarding" }),
};

type GuideLink = { label: string; href: string; external?: boolean };

const launchSteps: { n: string; title: string; text: string; guides: GuideLink[] }[] = [
  {
    n: "1",
    title: "Create your account",
    text: "Sign up at app.fusioncalling.com. Your 3-day free trial starts immediately — full platform access, $0 setup.",
    guides: [{ label: "Start the trial", href: APP_URL, external: true }],
  },
  {
    n: "2",
    title: "Make it yours",
    text: "Upload your logo, set your colors, connect your domain. Your clients only ever see your brand — about 15 minutes with the branding guide.",
    guides: [{ label: "Branding guide", href: "/docs/admin-section#branding" }],
  },
  {
    n: "3",
    title: "Plug in telephony & engines",
    text: "Connect Twilio or Telnyx for phone numbers and call routing. Vapi, Retell, or ElevenLabs keys are optional — add them if you'd rather have usage billed directly to your own provider account.",
    guides: [{ label: "AI credentials guide", href: "/docs/admin-section#ai-provider" }],
  },
  {
    n: "4",
    title: "Set your resale pricing",
    text: "Choose per-minute rates or monthly retainers per sub-account. Stripe rebilling is built in, and you keep 100% of what you charge.",
    guides: [{ label: "Credits & subscriptions guide", href: "/docs/admin-section#credits" }],
  },
  {
    n: "5",
    title: "Launch your first client",
    text: "Create a sub-account login, configure their voice agent, and go live. Most partners run their first live call within 24–48 hours of signing up.",
    guides: [
      { label: "Client sub-accounts", href: "/docs/admin-section#client-management" },
      { label: "First voice agent", href: "/docs/agent-configuration#creating-first-agent" },
    ],
  },
];

const checklist = [
  "Your logo (SVG or PNG) and brand colors",
  "A Twilio or Telnyx account — we'll help you connect it",
  "Optional: Vapi, Retell, or ElevenLabs API keys",
  "30 minutes for the optional onboarding call",
];

const planSummary = WHOLESALE_PLANS.map((p) => {
  const sub =
    p.subAccounts === "unlimited" ? "unlimited sub-accounts" : `${p.subAccounts} sub-accounts`;
  return `$${p.price}/mo ${p.name} (${sub})`;
}).join(" · ");

const costRows: { component: string; detail: string }[] = [
  {
    component: "Agency platform plan",
    detail: planSummary,
  },
  {
    component: "AI call processing",
    detail:
      "~$0.10/min pay-as-you-go — or bring your own Vapi, Retell, or ElevenLabs key and pay your provider directly",
  },
  {
    component: "Phone numbers & telephony",
    detail:
      "$1.25 per number/month + $0.005–$0.008/min carrier usage via your Twilio or Telnyx account",
  },
  {
    component: "Setup fee",
    detail: "$0 — and the 3-day free trial starts before any billing",
  },
];

const supportCards = [
  {
    title: "99.9% uptime SLA",
    text: "Core platform services and voice infrastructure run on redundant server deployments with automated failover routing.",
  },
  {
    title: "Humans on hand",
    text: "Monday–Friday, 9:00 AM–6:00 PM EST via email, dedicated ticket channels, and WhatsApp. Urgent issues get a response within 1 hour.",
  },
  {
    title: "24/7 monitoring",
    text: "Continuous automated monitoring after launch: proactive issue resolution, call flow optimization, and high agent availability.",
  },
];

const privacyPoints = [
  "Full data isolation per sub-account, with granular client access permissions",
  "Automatic call recording toggles, configurable retention schedules, and PII redaction",
  "Call recordings, transcripts, and personal data are never used to train public AI models",
  "HIPAA-ready deployment with BAA execution available as a $2,000 one-time add-on for healthcare",
];

const onboardingFaqs = [
  {
    question: "Do I need my own API keys to launch?",
    answer:
      "No. The platform runs on built-in voice engines, so you can go live without touching a single API key. If you prefer, bring your own Vapi, Retell, or ElevenLabs keys and usage is billed directly to your provider account — the AI credentials guide walks you through connecting them.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Most partners launch within 24–48 hours of signing up. Branding takes about 15 minutes with the branding guide, and your first sub-account can be live the same day. If you'd rather have us configure everything with you, book the optional onboarding call.",
  },
  {
    question: "What happens after the 3-day free trial?",
    answer:
      "Pick the plan that fits your client roster: Starter at $99/month (6 sub-accounts), Growth at $299/month (20), or Scale at $499/month (unlimited). Upgrading is instant with zero migration overhead, plans are month-to-month, and there are no long-term contracts.",
  },
  {
    question: "Is our call data private?",
    answer:
      "Yes. Every sub-account's data is fully isolated with granular access permissions. You control call recording toggles and retention schedules, PII redaction is built in, and none of your recordings, transcripts, or personal data are ever used to train public AI models.",
  },
  {
    question: "Can I serve healthcare clients?",
    answer:
      "Yes. A dedicated HIPAA compliance setup — including Business Associate Agreement (BAA) execution — is available as a $2,000 one-time add-on, on top of the standard privacy controls like PII redaction and configurable retention.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      path: "/whitelabel/onboarding",
      name: title,
      description,
      breadcrumbId: `${SITE_URL}/whitelabel/onboarding#breadcrumb`,
      speakable: ["h1"],
    }),
    breadcrumbSchema(
      [
        { name: "Home", path: "/" },
        { name: "White-label Partner Program", path: "/whitelabel" },
        { name: "Onboarding Guide", path: "/whitelabel/onboarding" },
      ],
      `${SITE_URL}/whitelabel/onboarding#breadcrumb`,
    ),
    faqSchema(onboardingFaqs, `${SITE_URL}/whitelabel/onboarding#faqpage`),
  ],
};

function GuideLinks({ guides }: { guides: GuideLink[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      {guides.map((g) =>
        g.external ? (
          <a
            key={g.href}
            href={g.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-light hover:text-brand transition-colors"
          >
            {g.label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        ) : (
          <Link
            key={g.href}
            href={g.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-light hover:text-brand transition-colors"
          >
            {g.label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        ),
      )}
    </div>
  );
}

export default function OnboardingPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const rawTo = Array.isArray(searchParams?.to) ? searchParams?.to?.[0] : searchParams?.to;
  const name = rawTo?.trim().slice(0, 40) ?? "";

  return (
    <>
      <script
        id="onboarding-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main id="main" className="min-h-screen w-full bg-black">
        <WhiteLabelNavbar />

        {/* Hero */}
        <section id="hero" className="scroll-mt-24 border-b border-brand/20 bg-gradient-to-br from-brand/10 via-brand/5 to-brand-strong/10 py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-black/40 px-4 py-1.5 text-xs sm:text-sm text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                White-label partner onboarding
              </span>
              {name && (
                <p className="mb-3 text-lg text-brand-light">Welcome, {name} —</p>
              )}
              <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                You&rsquo;ve seen it work.{" "}
                <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
                  Here&rsquo;s how it goes live.
                </span>
              </h1>
              <p className="mb-8 text-lg sm:text-xl leading-relaxed text-gray-400">
                Everything from your discovery call, on one page: start the
                3-day free trial, follow the setup guides, and put your first
                branded voice agent live — most partners do it within 48 hours.
                No documents to wait on.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={primaryButton}>
                  Start your free trial
                </a>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                  Book an onboarding call
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                The call is optional — the guides below cover everything self-serve.
              </p>
            </div>
          </div>
        </section>

        {/* Recap strip */}
        <section className="w-full bg-black section-rhythm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <p className="text-center text-sm md:text-base text-gray-400 max-w-3xl mx-auto">
              You&rsquo;re getting your own branded dashboard with client
              sub-accounts, multi-engine voice AI (Vapi, Retell & ElevenLabs),
              calendar & CRM booking, and smart call routing — the full picture
              lives on the{" "}
              <Link
                href="/whitelabel"
                className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
              >
                white-label partner program
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* Launch steps */}
        <section id="launch-steps" className="w-full bg-black section-rhythm scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionHeader
              title="The Next 48 Hours, Step by Step"
              highlight="Step by Step"
              subtitle="Five steps from sign-up to your first live call. Each one links the exact guide that walks you through it."
            />
            <div className="max-w-3xl mx-auto">
              {launchSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.06}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-strong text-sm font-bold text-black">
                        {step.n}
                      </span>
                      {i < launchSteps.length - 1 && (
                        <span className="w-px flex-1 bg-gradient-to-b from-brand/40 to-transparent my-2" aria-hidden />
                      )}
                    </div>
                    <div className="pb-10">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.text}</p>
                      <GuideLinks guides={step.guides} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="w-full bg-black section-rhythm scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionHeader
              title="What to Have Ready"
              highlight="Have Ready"
              subtitle="Gather these four things and the whole launch fits inside an afternoon."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {checklist.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20 flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-brand/50 text-brand text-xs" aria-hidden>
                      ✓
                    </span>
                    <p className="text-sm md:text-base text-gray-300">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Costs */}
        <section id="costs" className="w-full bg-black section-rhythm scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionHeader
              title="What It Costs"
              highlight="Costs"
              subtitle="A predictable agency platform fee plus usage that scales with your call volume."
            />
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-brand/30">
                    <th scope="col" className="py-3 pr-4 text-xs uppercase tracking-wider text-gray-500 font-medium">Cost component</th>
                    <th scope="col" className="py-3 text-xs uppercase tracking-wider text-gray-500 font-medium">What you pay</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row) => (
                    <tr key={row.component} className="border-b border-white/10">
                      <th scope="row" className="py-4 pr-4 text-sm md:text-base font-semibold text-brand-light align-top">{row.component}</th>
                      <td className="py-4 text-sm md:text-base text-gray-300">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="max-w-4xl mx-auto mt-6 text-sm md:text-base text-gray-400">
              Partners typically package the full solution at{" "}
              <strong className="text-white">$197–$500+/month per client</strong>
              . Your margin is the spread — model it in the{" "}
              <Link
                href="/calculator"
                className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
              >
                white-label margin calculator
              </Link>{" "}
              or see the{" "}
              <Link
                href="/pricing"
                className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
              >
                full pricing breakdown
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Self-serve vs guided */}
        <section id="help" className="w-full bg-black section-rhythm scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionHeader
              title="Self-Serve or Guided — Your Call"
              highlight="Your Call"
              subtitle="Most partners finish with the guides alone. If you'd rather watch it done once, we're one click away."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <Reveal>
                <div className="glass-light rounded-xl p-6 md:p-8 border border-brand/20 h-full flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Do it yourself</h3>
                  <p className="text-sm md:text-base text-gray-400 flex-1">
                    Every step above links the exact guide. Branding, AI
                    credentials, credits, and client sub-accounts are all
                    covered in the documentation — no call required.
                  </p>
                  <Link href="/docs" className={`${secondaryButton} mt-6`}>
                    Open the setup guides
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="glass-light rounded-xl p-6 md:p-8 border border-brand/20 h-full flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Do it with us</h3>
                  <p className="text-sm md:text-base text-gray-400 flex-1">
                    Book a free onboarding call and we&rsquo;ll configure your
                    branding, telephony, and first sub-account together, live.
                    Recommended if you&rsquo;d rather see it done once.
                  </p>
                  <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className={`${primaryButton} mt-6`}>
                    Book an onboarding call
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Support & reliability */}
        <section id="support" className="w-full bg-black section-rhythm scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionHeader
              title="Support & Reliability"
              highlight="Reliability"
              subtitle="The commitments we put in writing to every partner."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {supportCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.06}>
                  <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20 h-full">
                    <h3 className="text-base md:text-lg font-bold text-brand-light mb-1">{card.title}</h3>
                    <p className="text-sm md:text-base text-gray-400">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section id="privacy" className="w-full bg-black section-rhythm scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionHeader
              title="Your Data Stays Yours"
              highlight="Stays Yours"
              subtitle="Enterprise-grade controls on every plan — this is the part your clients will ask about."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {privacyPoints.map((point, i) => (
                <Reveal key={point} delay={i * 0.06}>
                  <div className="glass-light rounded-xl p-5 md:p-6 border border-brand/20 h-full">
                    <p className="text-sm md:text-base text-gray-300">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full bg-black section-rhythm scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionHeader
              title="Questions Partners Ask Before Launch"
              highlight="Before Launch"
              subtitle="If yours isn't here, ask on the onboarding call or email hello@fusioncalling.com."
            />
            <div className="max-w-3xl mx-auto">
              <PostFaq faqs={onboardingFaqs} title="" />
            </div>
          </div>
        </section>

        {/* Final CTA — reuses the hub's calendar section */}
        <section id="cta" className="scroll-mt-24">
          <CTA />
        </section>
      </main>
    </>
  );
}
