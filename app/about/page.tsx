import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Fusion Calling | AI Phone Call Automation Company",
  description:
    "Fusion Calling builds human-like AI voice agents that automate inbound and outbound business calls. Learn about our team, our mission, and why 50+ agencies trust us since 2022.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Fusion Calling | AI Phone Call Automation Company",
    description:
      "We help businesses and agencies automate phone calls with human-like AI voice agents. 50+ agencies served since 2022.",
    url: "https://www.fusioncalling.com/about",
    siteName: "Fusion Calling",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-28 pb-12 md:pt-36 md:pb-16">
        <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
          About us
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          The team behind your{" "}
          <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
            AI receptionist
          </span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Fusion Calling is an AI phone-call automation platform that lets
          businesses handle inbound and outbound calls 24/7 with human-like
          voice agents. We book appointments, qualify leads, answer customer
          questions, and scale phone operations — without adding headcount.
        </p>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Our mission
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Every missed call is a missed customer. Our mission is to make
          enterprise-grade conversational AI accessible to businesses of every
          size — so no call goes unanswered and no team burns out on repetitive
          phone work.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Since 2022 we&apos;ve helped 50+ agencies and businesses launch
          profitable voice-AI practices, and we&apos;ve shipped white-label
          infrastructure used across real estate, dental, insurance, home
          services, legal, and automotive teams.
        </p>
      </section>

      {/* Founder */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-10 md:py-14">
        <div className="rounded-2xl border border-brand/20 bg-black/40 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
          <Image
            src="/logo.png"
            alt="Fusion Calling founder"
            width={80}
            height={80}
            className="rounded-full ring-2 ring-brand/30"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Meet the founder
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Fusion Calling was founded by Alamin, a voice-AI engineer focused
              on practical, production-grade phone automation. The team combines
              telephony, LLM orchestration, and text-to-speech expertise to ship
              agents that sound and behave like real people.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/MrAlaminH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand hover:underline"
              >
                Follow on X
              </a>
              <a
                href="https://www.linkedin.com/company/fusion-calling/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Trust &amp; compliance
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "GDPR & EU AI Act aligned data handling",
            "Advanced encryption for call audio and transcripts",
            "ISO certifications; SOC 2 in progress",
            "99.9% uptime guarantee on every plan",
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-brand/20 bg-black/40 p-4 text-sm text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to automate your calls?
        </h2>
        <p className="text-gray-400 mb-6">
          Explore the platform or talk with our team about a custom voice agent.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#pricing"
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
      </section>
    </main>
  );
}
