import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Vapi vs Retell vs ElevenLabs: Choosing the Right Voice AI Provider",
  description:
    "A neutral, practical comparison of Vapi, Retell AI, and ElevenLabs for voice AI agencies — their strengths, best use cases, and how Fusion Calling unifies all three under one white-label dashboard.",
  keywords: [
    "vapi vs retell ai",
    "elevenlabs voice AI",
    "voice AI provider comparison",
    "best voice AI platform",
    "retell ai vs elevenlabs",
    "white label voice AI",
  ],
  alternates: {
    canonical: "/blog/vapi-vs-retell-vs-elevenlabs",
  },
  openGraph: {
    title: "Vapi vs Retell vs ElevenLabs: Choosing the Right Voice AI Provider",
    description:
      "A neutral, practical comparison of Vapi, Retell AI, and ElevenLabs for voice AI agencies — their strengths, best use cases, and how Fusion Calling unifies all three.",
    url: "https://www.fusioncalling.com/blog/vapi-vs-retell-vs-elevenlabs",
    siteName: "Fusion Calling",
    images: [
      {
        url: "/blog/vapi-vs-retell-vs-elevenlabs.jpg",
        width: 1200,
        height: 630,
        alt: "Vapi vs Retell vs ElevenLabs Voice AI Provider Comparison",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-02-14T00:00:00Z",
    modifiedTime: "2025-02-14T00:00:00Z",
    authors: ["Fusion Calling"],
  },
};

export default function VapiVsRetellVsElevenLabsBlogPost() {
  return (
    <>
      <Script
        id="provider-guide-blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.fusioncalling.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://www.fusioncalling.com/blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Vapi vs Retell vs ElevenLabs: Choosing the Right Voice AI Provider",
                    item: "https://www.fusioncalling.com/blog/vapi-vs-retell-vs-elevenlabs",
                  },
                ],
              },
              {
                "@type": "Article",
                "@id": "https://www.fusioncalling.com/blog/vapi-vs-retell-vs-elevenlabs#article",
                url: "https://www.fusioncalling.com/blog/vapi-vs-retell-vs-elevenlabs",
                name: "Vapi vs Retell vs ElevenLabs: Choosing the Right Voice AI Provider",
                headline:
                  "Vapi vs Retell vs ElevenLabs: Choosing the Right Voice AI Provider",
                description:
                  "A neutral, practical comparison of Vapi, Retell AI, and ElevenLabs for voice AI agencies — their strengths, best use cases, and how Fusion Calling unifies all three under one white-label dashboard.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": "https://www.fusioncalling.com/#website",
                },
                datePublished: "2025-02-14T00:00:00Z",
                dateModified: "2025-02-14T00:00:00Z",
                author: {
                  "@type": "Organization",
                  name: "Fusion Calling",
                  url: "https://www.fusioncalling.com/",
                },
                publisher: {
                  "@id": "https://www.fusioncalling.com/#organization",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Which voice AI provider is best?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It depends on the use case. Vapi is great for building flexible custom agents, Retell AI excels at low-latency conversational quality, and ElevenLabs offers best-in-class realistic voices. That's exactly why Fusion Calling supports all three — so you can match each client to the best engine.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I use more than one provider?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Fusion Calling lets you use Vapi, Retell, and ElevenLabs and match each client to the best engine for their use case — for example, ElevenLabs voices for a premium receptionist and Vapi for a cost-sensitive outbound campaign.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I manage separate accounts for each provider?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You bring your own provider API keys, and Fusion Calling unifies Vapi, Retell, and ElevenLabs under one white-label dashboard so you manage every client and every engine from a single place.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-brand-light hover:text-brand-light mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-brand to-brand-strong rounded-full text-sm font-semibold text-white">
              Buyer's Guide
            </span>
            <span className="text-gray-500 text-sm">8 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Vapi vs Retell vs ElevenLabs:
            <br />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              Choosing the Right Provider
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            A neutral, practical comparison of the three leading voice AI
            providers — their strengths, best use cases, and how Fusion Calling
            unifies all three under one white-label dashboard.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>February 14, 2025</span>
            <span>•</span>
            <span>By Fusion Calling Team</span>
          </div>
        </div>

        {/* Featured Image Placeholder */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-brand/20">
          <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-strong/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎙️</div>
              <div className="text-lg text-gray-500">
                Choosing the Right Voice AI Provider
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Voice AI Is Built From a Few Core Providers
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Modern voice AI isn't a single technology — it's assembled from a
                small number of specialized providers that each handle a part of
                the stack: the conversational agent logic, the real-time
                speech-to-speech pipeline, and the voices themselves. Most
                production voice agents you hear today are powered by a handful
                of engines working together.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                That means the provider you build on matters. Each of the three
                leading platforms — Vapi, Retell AI, and ElevenLabs — has genuine
                strengths, and the &quot;best&quot; choice depends on what you're
                building, who the client is, and what trade-offs you can accept.
              </p>
              <p className="text-brand-light text-lg font-semibold">
                The good news: you don't have to commit to just one.
              </p>
            </div>

            {/* Three Provider Profiles */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                The Three Leading Providers, Compared Fairly
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                All three are excellent platforms. Here's an honest look at what
                each one genuinely does well.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <div className="text-4xl mb-4">🛠️</div>
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Vapi
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    A flexible developer platform with broad tooling for building
                    custom voice agents. Popular for teams that want deep control
                    over call flows, tools, and integrations.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Highly programmable agent framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Great for custom outbound campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Cost-efficient at scale</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <div className="text-4xl mb-4">🎙️</div>
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Retell AI
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    A speech-to-speech platform known for strong conversational
                    quality and low latency. Excels at natural back-and-forth
                    dialogue that feels responsive in real time.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Low-latency real-time conversation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Smooth handling of interruptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Natural turn-taking</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <div className="text-4xl mb-4">🗣️</div>
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    ElevenLabs
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    The leader in realistic, expressive text-to-speech voices.
                    Ideal when the quality and personality of the voice is the
                    priority — receptionists, premium brands, and narrated
                    experiences.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Best-in-class natural voices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Voice cloning and custom voices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Wide multilingual library</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Neutral Comparison Table */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Quick Comparison: Provider Strengths
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-4 px-4 text-white font-bold">Provider</th>
                      <th className="text-left py-4 px-4 text-white font-bold">Best For</th>
                      <th className="text-left py-4 px-4 text-white font-bold">Strength</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-brand-light">Vapi</td>
                      <td className="py-4 px-4">Custom agents, high-volume outbound</td>
                      <td className="py-4 px-4">Flexible developer platform</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-brand-light">Retell AI</td>
                      <td className="py-4 px-4">Real-time conversation, support flows</td>
                      <td className="py-4 px-4">Low latency & conversational quality</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-brand-light">ElevenLabs</td>
                      <td className="py-4 px-4">Premium voices, branded receptionists</td>
                      <td className="py-4 px-4">Best-in-class realistic TTS voices</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                All three are strong, complementary platforms. None is
                universally &quot;best&quot; — the right engine depends on the use case.
              </p>
            </div>

            {/* You Don't Have to Choose Just One */}
            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                You Don't Have to Choose Just One
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Here's the key insight most agencies miss: this isn't a
                winner-take-all decision. Different clients and use cases call for
                different engines — and Fusion Calling is built to support all
                three under one roof.
              </p>

              <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Fusion Calling is a multi-provider white-label layer that sits on
                  top of Vapi, Retell, and ElevenLabs. It's not a replacement for
                  any of them — it's the partnership layer that lets you use the
                  right engine per client.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <span>
                      <strong className="text-white">Premium receptionist?</strong>{" "}
                      ElevenLabs voices for a polished, branded experience.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <span>
                      <strong className="text-white">Cost-sensitive outbound?</strong>{" "}
                      Vapi to keep costs down at volume.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <span>
                      <strong className="text-white">Natural support dialogue?</strong>{" "}
                      Retell AI for responsive, low-latency conversation.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-300 leading-relaxed">
                You bring your provider API keys; Fusion Calling unifies them
                under a single white-label dashboard so every client is managed in
                one place — no matter which engine powers their calls.
              </p>
            </div>

            {/* How Agencies Use Multiple Providers */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                How Agencies Use Multiple Providers
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Premium Brand Voices</h3>
                    <p className="text-gray-400 text-sm">
                      Route high-touch receptionist and concierge clients to
                      ElevenLabs for the most realistic, on-brand voices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">High-Volume Outbound</h3>
                    <p className="text-gray-400 text-sm">
                      Use Vapi for large outbound campaigns where flexibility and
                      cost efficiency at scale matter most.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Responsive Support</h3>
                    <p className="text-gray-400 text-sm">
                      Lean on Retell AI for support and triage flows where low
                      latency and natural turn-taking are essential.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Match Per Client</h3>
                    <p className="text-gray-400 text-sm">
                      Assign the best engine to each client's use case, all from
                      one white-label dashboard — no re-platforming required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Economics Note */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Economics: Simple and Yours
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fusion Calling keeps the model simple. Your only platform cost is
                a flat monthly subscription — and you keep 100% of the revenue you
                charge your clients.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-5 border border-brand/20">
                  <h3 className="text-brand-light font-bold mb-2">Starter</h3>
                  <p className="text-2xl font-bold text-white mb-1">$99<span className="text-sm font-normal text-gray-500">/mo</span></p>
                  <p className="text-gray-400 text-sm">6 sub-accounts</p>
                </div>
                <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-5 border border-brand/20">
                  <h3 className="text-brand-light font-bold mb-2">Growth</h3>
                  <p className="text-2xl font-bold text-white mb-1">$299<span className="text-sm font-normal text-gray-500">/mo</span></p>
                  <p className="text-gray-400 text-sm">20 sub-accounts</p>
                </div>
                <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-5 border border-brand/20">
                  <h3 className="text-brand-light font-bold mb-2">Scale</h3>
                  <p className="text-2xl font-bold text-white mb-1">$499<span className="text-sm font-normal text-gray-500">/mo</span></p>
                  <p className="text-gray-400 text-sm">Unlimited sub-accounts</p>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Keep 100% of the revenue you charge your clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>One subscription covers Vapi, Retell, and ElevenLabs access</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Launch your white-label practice in about 7 days</span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    Which provider is best?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    It depends on the use case. Vapi is great for building
                    flexible custom agents, Retell AI excels at low-latency
                    conversational quality, and ElevenLabs offers best-in-class
                    realistic voices. That's exactly why Fusion Calling supports
                    all three — so you can match each client to the best engine.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    Can I use more than one provider?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Yes. Fusion Calling lets you use Vapi, Retell, and ElevenLabs
                    and match each client to the best engine for their use case —
                    for example, ElevenLabs voices for a premium receptionist and
                    Vapi for a cost-sensitive outbound campaign.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    Do I manage separate accounts?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You bring your own provider API keys, and Fusion Calling
                    unifies Vapi, Retell, and ElevenLabs under one white-label
                    dashboard so you manage every client and every engine from a
                    single place.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Choose the Right Engine — For Every Client
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Vapi, Retell AI, and ElevenLabs are each excellent at what they
                do, and none is a one-size-fits-all answer. The agencies that win
                are the ones who can match each client to the right engine instead
                of being locked into a single provider.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Fusion Calling is the white-label layer that makes that possible —
                unifying all three providers under one branded dashboard so you
                keep full control, keep 100% of your client revenue, and launch in
                about a week. You can hear it for yourself on our live homepage
                demo, then decide which engines fit your clients best.
              </p>

              <Link
                href="/whitelabel"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                Start Your White-Label Practice
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Related Posts */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/vapi-white-label-platform"
                  className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                    White-Labeling Vapi with Fusion Calling
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How to bring your Vapi build under a single white-label
                    dashboard for your clients.
                  </p>
                </Link>
                <Link
                  href="/blog/retell-ai-white-label"
                  className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                    White-Labeling Retell AI with Fusion Calling
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Pair Retell AI's conversational quality with a fully branded
                    agency experience.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-brand/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-strong flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">FC</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">About the Author</h3>
              <p className="text-gray-400 text-sm mb-3">
                <strong className="text-brand-strong">Fusion Calling Team</strong>
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We're the team behind Fusion Calling's white-label AI voice platform. Having helped 50+ agencies launch profitable voice AI practices since 2022, we specialize in helping businesses scale their phone operations with cutting-edge automation technology.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="https://www.fusioncalling.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-strong hover:text-brand transition-colors"
                >
                  Website →
                </a>
                <a
                  href="/whitelabel"
                  className="text-brand-strong hover:text-brand transition-colors"
                >
                  Partner Program →
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
