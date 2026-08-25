import { Metadata } from "next";
import VoiceCalculator from "./VoiceCalculator";
import { buildOpenGraph, GEO_SOURCES } from "@/lib/seo";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site-url";

const title = "Voice Throughput Calculator";
const description =
  "Calculate your AI voice call throughput capacity. Plan lead processing, forecast call volumes, and optimize infrastructure for Vapi and Retell AI platforms.";

const calculatorFaqs = [
  {
    question: "What does the voice throughput calculator measure?",
    answer:
      "It estimates how many leads or calls your AI voice setup can process per minute, hour, shift, and day based on concurrency (parallel calls), average call duration, number of accounts, and how often your batch job wakes up.",
  },
  {
    question: "How is AI call capacity calculated?",
    answer:
      "Capacity is the lower of two limits: the theoretical throughput (concurrency ÷ average duration × accounts) and the cron-restricted throughput (concurrency × accounts ÷ batch interval). The calculator reports the realistic lower bound so you plan for steady-state volume, not a best case.",
  },
  {
    question: "What is a cron bottleneck in voice AI?",
    answer:
      "A cron bottleneck happens when calls finish faster than your batch job triggers the next round. For example, 1-minute calls with a 3-minute batch interval leave 2 minutes of idle capacity. Reducing the batch interval or switching to a queue-based trigger removes the bottleneck.",
  },
];

const calculatorSources = [
  GEO_SOURCES.fusionApi,
  GEO_SOURCES.schema,
];

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
    {
      "@type": "FAQPage",
      mainEntity: calculatorFaqs.map((f) => ({
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
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/calculator" }),
};

export default function CalculatorPage() {
  return (
    <>
      <script
        id="calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <section className="bg-black text-white border-b border-brand/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-light mb-3">
            AI Call Capacity Planning
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Use the calculator below to estimate how many leads your AI voice
            agents can handle. Throughput depends on how many calls run in
            parallel, how long each call lasts, and how often your system
            triggers the next batch — the tool shows the realistic steady-state
            limit, not an optimistic best case.
          </p>
        </div>
      </section>
      <VoiceCalculator />
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {calculatorFaqs.map((f) => (
              <div
                key={f.question}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Sources</h2>
          <ul className="flex flex-wrap gap-3">
            {calculatorSources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2.5 text-gray-300 hover:text-brand-strong hover:border-brand/40 transition-all text-sm font-medium"
                >
                  {s.label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
