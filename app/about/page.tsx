import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  FileCheck2,
  Lock,
  Phone,
  ShieldCheck,
  Store,
} from "lucide-react";
import { SITE_URL } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui/reveal";

export const revalidate = 86400;

const aboutFaqs = [
  {
    question: "What does Fusion Calling do?",
    answer:
      "Fusion Calling provides AI voice agents that automate inbound and outbound business calls 24/7 — booking appointments, qualifying leads, answering customer questions, and scaling phone operations without adding headcount.",
  },
  {
    question: "Who founded Fusion Calling?",
    answer:
      "Fusion Calling was founded by Alamin, a voice-AI engineer focused on practical, production-grade phone automation. He still leads the platform today and works directly with agency partners.",
  },
  {
    question: "When was Fusion Calling founded?",
    answer:
      "Fusion Calling was founded in 2022 and has since helped 500+ agencies and businesses launch profitable voice-AI practices.",
  },
  {
    question: "Where is Fusion Calling based?",
    answer:
      "Fusion Calling is a US-based, fully remote company. Because the platform is cloud-hosted, partners and customers run their phone operations from anywhere while calls are answered 24/7.",
  },
  {
    question: "How much does Fusion Calling cost?",
    answer:
      "Direct plans start at $149/month (Starter, 500 minutes), with Pro at $249/month and Enterprise at $497/month — every plan includes a 99.9% uptime guarantee and a 14-day money-back guarantee. Agencies reselling the platform white-label start at $99/month and keep 100% of what they charge their clients.",
  },
  {
    question: "Which voice AI providers does Fusion Calling support?",
    answer:
      "Fusion Calling is provider-agnostic across Vapi, Retell AI, and ElevenLabs, so each call runs on the best engine for the job instead of locking you into a single vendor. Agencies can import existing agent configurations from any of the three.",
  },
  {
    question: "Which industries use Fusion Calling?",
    answer:
      "Teams across real estate, dental, insurance, home services, legal, automotive, restaurants, ecommerce, and financial services use Fusion Calling to automate phone operations with human-like voice agents.",
  },
  {
    question: "How is Fusion Calling different from other voice AI platforms?",
    answer:
      "Three things: a multi-provider layer across Vapi, Retell, and ElevenLabs; a true white-label program where agencies keep 100% of client revenue; and transparency — public pricing from $149/month and a published benchmark of entry prices across 21 voice AI platforms.",
  },
];

const stats = [
  { value: "2022", label: "Founded" },
  { value: "500+", label: "Agencies & businesses launched" },
  { value: "4.8/5", label: "Customer satisfaction" },
  { value: "99.9%", label: "Uptime guarantee" },
];

const whatWeBuild = [
  {
    icon: Phone,
    title: "AI receptionists for businesses",
    description:
      "Human-like agents answer every inbound call 24/7 — booking appointments, answering questions, and following up by SMS so no lead slips through.",
    href: "/ai-receptionist",
    linkText: "Explore the AI receptionist",
  },
  {
    icon: Activity,
    title: "Outbound call automation",
    description:
      "Import a lead list and agents run the campaigns: dialing, qualifying, booking interested prospects into your calendar, and logging every outcome to your CRM.",
    href: "/ai-phone-call-automation",
    linkText: "Explore call automation",
  },
  {
    icon: Store,
    title: "White-label platform for agencies",
    description:
      "Agencies resell the entire platform under their own brand — custom domain, branded dashboard, their pricing — and keep 100% of client revenue.",
    href: "/whitelabel",
    linkText: "See the partner program",
  },
];

const principles = [
  {
    title: "Provider-neutral by design",
    description:
      "Vapi, Retell, and ElevenLabs on one platform. Each call runs on the best engine for the job — no single-vendor lock-in.",
  },
  {
    title: "Transparent pricing",
    description:
      "Public plans from $149/month, and we publish a benchmark of entry prices across 21 voice AI platforms — including competitors'.",
  },
  {
    title: "Ship weekly",
    description:
      "8+ feature updates ship every month across the platform, so agents keep improving without a re-engagement project.",
  },
  {
    title: "Answer, don't oversell",
    description:
      "Plain-English documentation, a 77-term voice AI glossary, and honest comparisons — even when the answer is “not us”.",
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "GDPR & EU AI Act aligned",
    description: "Data handling designed around EU requirements from day one.",
  },
  {
    icon: Lock,
    title: "Encrypted calls",
    description:
      "Call audio and transcripts are encrypted in transit and at rest.",
  },
  {
    icon: FileCheck2,
    title: "SOC 2 in progress",
    description: "ISO certifications held; SOC 2 audit underway.",
  },
  {
    icon: Activity,
    title: "99.9% uptime",
    description: "Backed by an uptime guarantee on every plan, not just enterprise tiers.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: "About Fusion Calling",
      description:
        "Fusion Calling builds human-like AI voice agents that automate inbound and outbound business calls. Learn about our team, our mission, and why 500+ agencies trust us since 2022.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: {
        "@type": "BreadcrumbList",
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
            name: "About",
            item: `${SITE_URL}/about`,
          },
        ],
      },
    },
    {
      // Canonical founder entity — same @id the /team/alamin profile page
      // emits, so all pages describe one Person instead of three fragments.
      "@type": "Person",
      "@id": `${SITE_URL}/team/alamin#person`,
      url: `${SITE_URL}/team/alamin`,
      name: "Alamin",
      jobTitle: "Founder",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      sameAs: [
        "https://x.com/MrAlaminH",
        "https://www.linkedin.com/company/fusion-calling/",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: aboutFaqs.map((f) => ({
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
  title: {
    absolute: "About Fusion Calling — AI Voice Agents & Mission",
  },
  description:
    "Fusion Calling builds human-like AI voice agents that automate inbound and outbound calls. Learn our mission and why 500+ agencies trust us since 2022.",
  ...buildOpenGraph({
    title: "About Fusion Calling — AI Voice Agents & Mission",
    description:
      "Fusion Calling builds human-like AI voice agents that automate inbound and outbound calls. Learn our mission and why 500+ agencies trust us since 2022.",
    path: "/about",
    type: "website",
  }),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <main className="min-h-screen w-full bg-black text-white">
        {/* Hero — the slogan, set big. Type is the design. */}
        <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-[100%] bg-brand/10 blur-3xl"
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal animation="animate-fade-in-up">
              <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-4">
                About Fusion Calling
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl text-balance">
                No call goes{" "}
                <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                  unanswered.
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-relaxed">
                Fusion Calling is an AI phone-call automation platform. Our
                human-like voice agents answer and place business calls 24/7 —
                booking appointments, qualifying leads, and answering customer
                questions — so teams scale their phone operations without
                adding headcount.
              </p>
              <p className="mt-5 text-sm text-gray-500">
                Founded 2022 · US-based, fully remote team · 500+ agencies &amp;
                businesses
              </p>
            </Reveal>
          </div>
        </section>

        {/* Stats band */}
        <section aria-label="Fusion Calling in numbers" className="border-y border-white/10 bg-white/[0.02]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col py-8 md:py-10 px-2 sm:px-6">
                  <dt className="order-2 mt-1 text-sm text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-light to-brand-strong text-transparent bg-clip-text">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Story */}
        <section className="w-full py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
              <Reveal animation="animate-fade-in-left">
                <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
                  Our story
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
                  Started with a{" "}
                  <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                    missed call
                  </span>
                </h2>
              </Reveal>
              <Reveal animation="animate-fade-in-right" className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Fusion Calling was founded in 2022 by Alamin, a voice-AI
                  engineer who kept watching small businesses lose customers to
                  voicemail — after hours, during rush jobs, whenever the phone
                  rang and nobody could pick up. Enterprise call centers had
                  solved this problem years earlier; everyone else was priced
                  out.
                </p>
                <p>
                  So we built the platform we wanted to exist: AI voice agents
                  that sound and behave like real people, on telephony
                  infrastructure that doesn&apos;t break, at a price a
                  five-person company can afford. As agencies joined, the
                  platform grew a full white-label layer — partners now resell
                  it under their own brand, on their own domain, keeping 100%
                  of what they charge clients.
                </p>
                <p>
                  Today, 500+ agencies and businesses run on Fusion Calling
                  across real estate, dental, insurance, home services, legal,
                  and automotive — and we publish our{" "}
                  <Link
                    href="/ai-receptionist-pricing"
                    className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                  >
                    pricing benchmark
                  </Link>{" "}
                  and a{" "}
                  <Link
                    href="/glossary"
                    className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                  >
                    77-term voice AI glossary
                  </Link>{" "}
                  so buyers can evaluate the whole market, not just us. Curious
                  what it costs?{" "}
                  <Link
                    href="/pricing"
                    className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                  >
                    View pricing
                  </Link>{" "}
                  for transparent plans on every tier.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="w-full pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal className="mb-10 md:mb-14">
              <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
                What we build
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl text-balance">
                One platform,{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  three ways to use it
                </span>
              </h2>
            </Reveal>
            <ul className="grid gap-4 md:gap-6 md:grid-cols-3">
              {whatWeBuild.map((item, index) => (
                <Reveal
                  key={item.title}
                  as="li"
                  animation="animate-fade-in-up"
                  delay={index * 0.08}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-card border border-brand/20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/20">
                    <item.icon aria-hidden="true" className="h-6 w-6 text-brand" />
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 text-sm text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                    >
                      {item.linkText} →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Founder */}
        <section className="w-full pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal>
              <figure className="rounded-2xl border border-brand/20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-6 md:p-10 lg:p-12">
                <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-6">
                  Meet the founder
                </p>
                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-white max-w-4xl text-balance">
                  &ldquo;Every missed call is a missed customer. We built Fusion
                  Calling so a five-person business could answer the phone with
                  the polish of a Fortune 500 front desk — without adding
                  headcount.&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-4 border-t border-white/10 pt-6">
                  <Image
                    src="/avatars/male_avatar.png"
                    alt="Alamin, founder of Fusion Calling — voice AI engineer"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-brand/30"
                  />
                  <div className="flex-1">
                    <p className="text-white font-medium">
                      Alamin{" "}
                      <span className="text-gray-400 font-normal">
                        — Founder, Fusion Calling
                      </span>
                    </p>
                    <p className="text-sm text-zinc-400">
                      Voice-AI engineer.{" "}
                      <Link
                        href="/team/alamin"
                        className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                      >
                        More about Alamin
                      </Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <a
                      href="https://x.com/MrAlaminH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                    >
                      X
                    </a>
                    <a
                      href="https://www.linkedin.com/company/fusion-calling/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Principles */}
        <section className="w-full pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal className="mb-10 md:mb-14">
              <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
                How we work
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl text-balance">
                Principles we{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  ship by
                </span>
              </h2>
            </Reveal>
            <ul className="grid gap-4 md:gap-6 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <Reveal
                  key={principle.title}
                  as="li"
                  animation="animate-fade-in-up"
                  delay={(index % 2) * 0.08}
                  className="h-full"
                >
                  <div className="h-full rounded-card border border-brand/20 bg-black/40 p-6 transition duration-300 hover:border-brand/40">
                    <h3 className="text-lg font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Trust & compliance */}
        <section className="w-full pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal className="mb-10 md:mb-14">
              <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
                Trust &amp; compliance
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl text-balance">
                Serious about{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  security
                </span>
              </h2>
            </Reveal>
            <ul className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item, index) => (
                <Reveal
                  key={item.title}
                  as="li"
                  animation="animate-fade-in-up"
                  delay={index * 0.06}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-card border border-brand/20 bg-black/40 p-6">
                    <item.icon aria-hidden="true" className="h-5 w-5 text-brand" />
                    <h3 className="mt-3 text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <p className="mt-6 text-sm text-gray-400">
                Want the details? Read our{" "}
                <Link
                  href="/blog/voice-ai-security-compliance"
                  className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                >
                  voice AI security &amp; compliance guide
                </Link>{" "}
                — encryption standards, GDPR, TCPA consent, and recording-law
                basics. Or{" "}
                <Link
                  href="/docs"
                  className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                >
                  browse the documentation
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal className="mb-10 md:mb-14">
              <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl text-balance">
                About Fusion Calling,{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  answered
                </span>
              </h2>
            </Reveal>
            <div className="grid gap-4 md:gap-6 lg:grid-cols-2 items-start">
              {aboutFaqs.map((f, index) => (
                <Reveal
                  key={f.question}
                  animation="animate-fade-in-up"
                  delay={(index % 2) * 0.06}
                >
                  <div className="h-full rounded-card border border-brand/20 bg-black/40 p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {f.question}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {f.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full pb-20 md:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                Ready to stop{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  missing calls?
                </span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Hear the agent for yourself on the{" "}
                <Link
                  href="/#show-case"
                  className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                >
                  live demo
                </Link>
                , or talk with our team about a custom voice agent.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/pricing"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground hover:bg-brand-strong transition-colors"
                >
                  See pricing
                </Link>
                <a
                  href="https://cal.com/mralamin/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Book a discovery call
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
