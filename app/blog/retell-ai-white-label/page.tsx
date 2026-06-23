import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "White-Labeling Retell AI with Fusion Calling",
  description:
    "Retell AI powers great conversations. Fusion Calling adds the white-label agency layer — branding, client portals, multi-client management, and client billing — so you can resell Retell under your own brand.",
  keywords: [
    "retell ai white label",
    "white label retell ai",
    "retell ai integration",
    "resell retell ai",
    "white label voice AI",
    "agency voice platform",
  ],
  alternates: {
    canonical: "/blog/retell-ai-white-label",
  },
  openGraph: {
    title: "White-Labeling Retell AI with Fusion Calling",
    description:
      "Retell AI powers great conversations. Fusion Calling adds the white-label agency layer — branding, client portals, multi-client management, and client billing — so you can resell Retell under your own brand.",
    url: "https://www.fusioncalling.com/blog/retell-ai-white-label",
    siteName: "Fusion Calling",
    images: [
      {
        url: "/blog/retell-comparison.jpg",
        width: 1200,
        height: 630,
        alt: "White-Labeling Retell AI with Fusion Calling",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-02-11T00:00:00Z",
    modifiedTime: "2025-02-11T00:00:00Z",
    authors: ["Fusion Calling"],
  },
};

export default function RetellAIBlogPost() {
  return (
    <>
      <Script
        id="retell-blog-schema"
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
                    name: "White-Labeling Retell AI with Fusion Calling",
                    item: "https://www.fusioncalling.com/blog/retell-ai-white-label",
                  },
                ],
              },
              {
                "@type": "Article",
                "@id": "https://www.fusioncalling.com/blog/retell-ai-white-label#article",
                url: "https://www.fusioncalling.com/blog/retell-ai-white-label",
                name: "White-Labeling Retell AI with Fusion Calling",
                headline:
                  "White-Labeling Retell AI with Fusion Calling",
                description:
                  "Retell AI powers great conversations. Fusion Calling adds the white-label agency layer — branding, client portals, multi-client management, and client billing — so you can resell Retell under your own brand.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": "https://www.fusioncalling.com/#website",
                },
                datePublished: "2025-02-11T00:00:00Z",
                dateModified: "2025-02-11T00:00:00Z",
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
                    name: "Do I keep my Retell account?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. You connect your existing Retell API key to Fusion Calling. We layer the white-label agency experience on top of Retell, so your agents, assistants, and configurations carry over without a rebuild.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I resell Retell under my own brand?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. That is exactly what Fusion Calling adds. You apply your branding, custom domain, and pricing on top of Retell, then manage and bill clients from a white-label portal that carries your agency's identity.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Fusion Calling support other providers too?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Fusion Calling works with Vapi, Retell AI, and ElevenLabs. You can choose the best provider per client or use case without rebuilding your white-label setup.",
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
              Integration Guide
            </span>
            <span className="text-gray-500 text-sm">7 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            White-Labeling Retell AI
            <br />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              with Fusion Calling
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Retell AI is a powerful conversational voice engine. Fusion Calling is the
            white-label agency layer built to work with it — adding branding, client
            portals, multi-client management, and client billing so you can resell Retell
            under your own brand.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>February 11, 2025</span>
            <span>•</span>
            <span>By Fusion Calling Team</span>
          </div>
        </div>

        {/* Featured Image Placeholder */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-brand/20">
          <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-strong/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <div className="text-lg text-gray-500">Retell AI + Fusion Calling Integration</div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                A Great Voice Engine, Now a Sellable Product
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Retell AI has earned its reputation for a reason. Its conversational
                quality, low-latency responses, and flexible agent configuration make it
                one of the strongest voice engines available for building natural-sounding
                AI calls. If you are already building on Retell, you have made a smart
                technology choice.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                What Retell gives you is the <strong className="text-brand-light">engine</strong>.
                What most agencies discover, though, is that an engine on its own is not
                yet a product you can sell to clients at scale. To turn Retell into a
                branded, billable offering, you need a layer on top: your own identity,
                dedicated client access, a way to manage multiple clients, and a clean way
                to charge for it.
              </p>
              <p className="text-brand-light text-lg font-semibold">
                That is the layer Fusion Calling is built to provide — alongside Retell,
                not against it.
              </p>
            </div>

            {/* What Fusion Calling Adds */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What Fusion Calling Adds on Top of Retell
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Think of Fusion Calling as the agency layer that wraps around Retell. You
                bring your Retell account; we provide everything your clients see and
                everything you need to run a multi-client business. This saves you from
                building the white-label layer yourself — most agencies launch in about{" "}
                <strong className="text-brand-light">7 days</strong> instead of weeks or
                months of custom development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Full Branding & Custom Domain
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Apply your logo, colors, and a custom domain so every client touchpoint
                    carries your agency's identity — never anyone else's.
                  </p>
                </div>
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    White-Label Client Portals
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Give each client their own branded login to review calls, agents, and
                    activity without ever leaving your brand.
                  </p>
                </div>
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Sub-Account Management
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Manage every client from a single dashboard, with per-client settings,
                    usage, and permissions cleanly separated.
                  </p>
                </div>
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Client Rebilling
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Set your own pricing per client and bill them directly through the
                    platform — no spreadsheets, no manual invoicing.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <h3 className="text-xl font-bold text-brand-light mb-3">
                  Done-With-You Setup
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  You are not left to figure it out alone. Our team helps you connect your
                  Retell account, apply your branding, and onboard your first clients —
                  typically getting you to launch in around a week.
                </p>
              </div>
            </div>

            {/* How They Work Together */}
            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                How Retell + Fusion Calling Work Together
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The flow is intentionally simple. Fusion Calling sits in front of Retell,
                handling the client-facing experience and the business operations, while
                Retell keeps doing what it does best: the conversation itself.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Connect Retell</h3>
                    <p className="text-gray-400 text-sm">
                      Link your existing Retell account with a single API key — no migration
                      required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏷️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Brand It</h3>
                    <p className="text-gray-400 text-sm">
                      Apply your logo, colors, and custom domain across the entire client
                      experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Manage Clients</h3>
                    <p className="text-gray-400 text-sm">
                      Spin up sub-accounts and white-label portals for each client from one
                      dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Bill Clients</h3>
                    <p className="text-gray-400 text-sm">
                      Set your own prices and rebill clients directly — you keep 100% of what
                      you charge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bring Your Retell Agents Along */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Bring Your Retell Agents Along
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have already invested time in Retell — configuring agents, writing
                prompts, tuning assistants — that work comes with you. Fusion Calling does
                not require you to rebuild your agents from scratch.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Because we connect to your Retell account directly, your existing agent
                configs and assistants carry over. You keep the conversational setup you
                already trust; you simply gain a branded, multi-client, billable product
                around it.
              </p>
            </div>

            {/* Economics Note */}
            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Economics: Simple and Yours
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fusion Calling is a subscription, not a take of your revenue. You set the
                price you charge clients, and you keep{" "}
                <strong className="text-brand-light">100% of that client revenue</strong>.
                The only cost is your Fusion Calling plan:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                  <h3 className="text-lg font-bold text-brand-light mb-2">Starter</h3>
                  <p className="text-3xl font-bold text-white mb-2">$99<span className="text-base font-normal text-gray-400">/mo</span></p>
                  <p className="text-gray-400 text-sm">Up to 6 sub-accounts</p>
                </div>
                <div className="bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                  <h3 className="text-lg font-bold text-brand-light mb-2">Growth</h3>
                  <p className="text-3xl font-bold text-white mb-2">$299<span className="text-base font-normal text-gray-400">/mo</span></p>
                  <p className="text-gray-400 text-sm">Up to 20 sub-accounts</p>
                </div>
                <div className="bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                  <h3 className="text-lg font-bold text-brand-light mb-2">Scale</h3>
                  <p className="text-3xl font-bold text-white mb-2">$499<span className="text-base font-normal text-gray-400">/mo</span></p>
                  <p className="text-gray-400 text-sm">Unlimited sub-accounts</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <p className="text-center text-brand-light font-semibold text-lg">
                  💡 You keep 100% of client revenue — Fusion Calling never takes a cut of what
                  you charge.
                </p>
              </div>
            </div>

            {/* Provider Flexibility & GHL */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Built With Retell — And Ready for More
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fusion Calling is built to work with Retell, and it also supports{" "}
                <strong className="text-brand-light">Vapi and ElevenLabs</strong>, so you can
                match the right provider to each client or use case without rebuilding your
                white-label setup. Need to tie calls into your clients' existing tools?
                Fusion Calling integrates with GoHighLevel via API and webhooks, and connects
                to more than 2,200 apps — so voice AI fits into the workflows your clients
                already run.
              </p>
            </div>

            {/* Conclusion */}
            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Turn Retell Into Your Branded Product
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Retell AI gives you a best-in-class voice engine. Fusion Calling gives you
                the agency layer to sell it: your brand, your client portals, your sub-accounts,
                and your billing. Together, they let you launch a complete, white-label voice
                AI business in about 7 days.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Want to see it in action? There is a live demo on the homepage, or you can
                apply to start white-labeling Retell today.
              </p>

              <Link
                href="/whitelabel"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                Start White-Labeling Retell
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
                    How Fusion Calling adds branding, client portals, and billing on top of
                    the Vapi voice platform.
                  </p>
                </Link>
                <Link
                  href="/blog/vapi-vs-retell-vs-elevenlabs"
                  className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                    Vapi vs Retell vs ElevenLabs: Choosing a Provider
                  </h3>
                  <p className="text-gray-400 text-sm">
                    A practical guide to picking the right voice provider for each client and
                    use case.
                  </p>
                </Link>
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
        </div>
      </article>
      </>
    );
}
