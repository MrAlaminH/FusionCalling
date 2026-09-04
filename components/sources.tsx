import Link from "next/link";

type Source = {
  label: string;
  detail: string;
  href: string;
};

// Every source here is a real, authoritative body or vendor that Fusion Calling
// either relies on (ElevenLabs, Deepgram) or must comply with (GDPR, FCC/TCPA,
// HIPAA). GEO research (Princeton, 2024) shows pages that explicitly cite
// sources are ~40% more likely to be cited by AI search engines.
const SOURCES: Source[] = [
  {
    label: "ElevenLabs — Text-to-Speech & Voice Cloning",
    detail:
      "The neural voice provider powering the human-like synthetic voices referenced throughout this site.",
    href: "https://elevenlabs.io/",
  },
  {
    label: "Deepgram — Automatic Speech Recognition",
    detail:
      "Real-time speech-to-text engine used for accurate call transcription and intent understanding.",
    href: "https://deepgram.com/",
  },
  {
    label: "GDPR — EU General Data Protection Regulation",
    detail:
      "The European data-privacy framework governing how caller data is collected, stored, and processed.",
    href: "https://gdpr.eu/",
  },
  {
    label: "FCC — Telephone Consumer Protection Act (TCPA)",
    detail:
      "US rules restricting auto-dialed and prerecorded outbound calls; central to compliant campaigns.",
    href: "https://www.fcc.gov/initiatives/telephone-consumer-protection-act-tcpa",
  },
  {
    label: "HHS — Health Insurance Portability & Accountability Act (HIPAA)",
    detail:
      "US healthcare privacy standard relevant to dental, medical, and insurance voice deployments.",
    href: "https://www.hhs.gov/hipaa/index.html",
  },
];

export default function Sources() {
  return (
    <section
      id="sources"
      className="w-full bg-black py-16 sm:py-20 md:py-24"
      aria-labelledby="sources-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl">
          <h2
            id="sources-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Sources &amp; References
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
            Fusion Calling&apos;s AI phone automation is built on leading voice
            infrastructure and operated in line with major telecommunications and
            data-privacy regulations. The following authoritative sources inform
            the capabilities and compliance claims on this page.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SOURCES.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group block h-full rounded-2xl border border-brand/20 bg-white/[0.02] p-5 sm:p-6 transition-colors hover:border-brand/50 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-white group-hover:text-brand-light transition-colors">
                    {source.label}
                  </h3>
                  <span
                    className="mt-1 text-brand flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {source.detail}
                </p>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xs text-gray-400">
          Looking for the platform itself? Explore our{" "}
          <Link
            href="/whitelabel"
            className="text-brand-strong hover:text-brand underline underline-offset-2 transition-colors"
          >
            white-label program
          </Link>{" "}
          or read the{" "}
          <Link
            href="/docs"
            className="text-brand-strong hover:text-brand underline underline-offset-2 transition-colors"
          >
            documentation
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
