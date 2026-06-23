import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "White-Labeling Vapi with Fusion Calling: A Guide for Agencies",
  description:
    "Fusion Calling is the white-label agency layer built to work with Vapi. Add branding, client portals, multi-client management, and billing so you can resell Vapi under your own brand.",
  keywords: [
    "vapi white label",
    "white label vapi",
    "resell vapi",
    "vapi agency partner",
    "vapi white-label platform",
    "voice AI white label",
  ],
  alternates: {
    canonical: "/blog/vapi-white-label-platform",
  },
  openGraph: {
    title: "White-Labeling Vapi with Fusion Calling: A Guide for Agencies",
    description:
      "Fusion Calling is the white-label agency layer built to work with Vapi. Add branding, client portals, multi-client management, and billing to resell Vapi under your own brand.",
    url: "https://www.fusioncalling.com/blog/vapi-white-label-platform",
    siteName: "Fusion Calling",
    images: [
      {
        url: "/blog/vapi-comparison.jpg",
        width: 1200,
        height: 630,
        alt: "White-Labeling Vapi with Fusion Calling",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-02-10T00:00:00Z",
    modifiedTime: "2025-02-10T00:00:00Z",
    authors: ["Fusion Calling"],
  },
};

export default function VapiWhiteLabelBlogPost() {
  return (
    <>
      <Script
        id="vapi-blog-schema"
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
                    name: "White-Labeling Vapi with Fusion Calling",
                    item: "https://www.fusioncalling.com/blog/vapi-white-label-platform",
                  },
                ],
              },
              {
                "@type": "Article",
                "@id": "https://www.fusioncalling.com/blog/vapi-white-label-platform#article",
                url: "https://www.fusioncalling.com/blog/vapi-white-label-platform",
                name: "White-Labeling Vapi with Fusion Calling: A Guide for Agencies",
                headline:
                  "White-Labeling Vapi with Fusion Calling: A Guide for Agencies",
                description:
                  "Fusion Calling is the white-label agency layer built to work with Vapi. Add branding, client portals, multi-client management, and billing so you can resell Vapi under your own brand.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": "https://www.fusioncalling.com/#website",
                },
                datePublished: "2025-02-10T00:00:00Z",
                dateModified: "2025-02-10T00:00:00Z",
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
                    name: "Do I need to leave Vapi to use Fusion Calling?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Fusion Calling is built to layer on top of your existing Vapi account. Bring your Vapi account and API key, connect it once, and Fusion Calling adds the white-label agency layer — branding, client portals, sub-accounts, and billing — while Vapi keeps powering the calls.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I resell Vapi under my own brand?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes — that is exactly what Fusion Calling adds. Vapi is excellent voice AI infrastructure, but on its own it is not white-label or resellable. Fusion Calling turns Vapi into a branded, sellable product with your logo, your custom domain, your client portals, and your pricing. You keep 100% of what you charge clients.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does setup take?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most partners launch in about 7 days thanks to our done-with-you onboarding. Instead of spending months building a custom $45K white-label app, you connect your Vapi account, apply your branding, and start reselling in roughly a week.",
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
            White-Labeling Vapi with
            <br />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              Fusion Calling
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Vapi is excellent voice AI infrastructure. Fusion Calling is the
            white-label agency layer built to work with it — adding branding,
            client portals, multi-client management, and billing so agencies can
            resell Vapi under their own brand.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>February 10, 2025</span>
            <span>•</span>
            <span>By Fusion Calling Team</span>
          </div>
        </div>

        {/* Featured Image Placeholder */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-brand/20">
          <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-strong/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <div className="text-lg text-gray-500">Vapi + Fusion Calling, Built Together</div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Agencies Love Vapi — and Where the Gap Is
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vapi has become a go-to choice for agencies building voice AI
                practices. It delivers fast, reliable, real-time voice
                infrastructure that handles the hard part of conversational AI —
                speech, latency, telephony, and model orchestration. For the
                engineering that powers great calls, Vapi is genuinely
                excellent.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                But most agencies who build on Vapi hit the same wall: Vapi
                alone isn&apos;t white-label or resellable. It is developer
                infrastructure, not a sellable product. To actually turn Vapi
                into something you can charge clients for under your own brand,
                you need a layer on top — and that layer is what most teams try
                (and struggle) to build themselves.
              </p>
              <p className="text-brand-light text-lg font-semibold">
                That gap is exactly where Fusion Calling fits. We&apos;re built
                with Vapi, not against it.
              </p>
            </div>

            {/* What Fusion Calling Adds */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What Fusion Calling Adds on Top of Vapi
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fusion Calling is the white-label agency layer for Vapi. Most of
                our users come <em>from</em> Vapi — they love the infrastructure
                and use Fusion Calling to turn it into a branded, sellable
                product. Instead of building a custom white-label app yourself
                (typically a $45K project and months of work), Fusion Calling
                gives you everything you need to launch in about 7 days.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Branding &amp; Custom Domain
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Apply your logo, colors, and custom domain so every client
                    touchpoint carries your brand — not someone else&apos;s.
                  </p>
                </div>
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Client Portals
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Give each client their own branded login to view and manage
                    their voice AI without ever seeing your backend.
                  </p>
                </div>
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Sub-Account Management
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Run many clients from one dashboard, with isolated
                    sub-accounts, usage, and settings per client.
                  </p>
                </div>
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Client Billing &amp; Rebilling
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Set your own pricing and bill clients directly. You keep
                    100% of what you charge — Fusion Calling takes no cut.
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border border-brand/20 mt-6">
                <p className="text-gray-300 leading-relaxed">
                  The point isn&apos;t to replace Vapi. It&apos;s to save you
                  from building a custom white-label application yourself. A
                  build-it-yourself approach typically runs about{" "}
                  <strong className="text-brand-light">$45K</strong> and takes
                  months. With Fusion Calling&apos;s done-with-you setup, most
                  agencies launch in about{" "}
                  <strong className="text-brand-light">7 days</strong>.
                </p>
              </div>
            </div>

            {/* How They Work Together */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                How Vapi + Fusion Calling Work Together
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The integration is designed to be straightforward. Fusion
                Calling sits in front of Vapi and handles the agency experience,
                while Vapi keeps powering the actual calls.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Connect your Vapi account</h3>
                    <p className="text-gray-400 text-sm">
                      Bring your existing Vapi account and API key. One-time
                      connection — you keep the infrastructure you already trust.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏷️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Brand it</h3>
                    <p className="text-gray-400 text-sm">
                      Apply your logo, colors, and custom domain so clients see
                      your brand everywhere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Manage clients</h3>
                    <p className="text-gray-400 text-sm">
                      Spin up isolated sub-accounts and client portals, each
                      with their own usage and settings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Bill clients</h3>
                    <p className="text-gray-400 text-sm">
                      Set your own pricing, bill clients directly, and keep 100%
                      of what you charge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Who This Is For
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fusion Calling is built for the people who already see the value
                in Vapi and need to make it sellable:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Agencies
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Marketing, lead-gen, and services agencies adding voice AI
                    to their offering under their own brand.
                  </p>
                </div>
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    Resellers
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Operators who want to resell voice AI with branded client
                    portals and direct billing — no custom build required.
                  </p>
                </div>
                <div className="glass-light rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    GHL Agencies Using Vapi
                  </h3>
                  <p className="text-gray-400 text-sm">
                    GoHighLevel agencies already running Vapi who want a
                    white-label layer that ties into their stack.
                  </p>
                </div>
              </div>
            </div>

            {/* Economics Note */}
            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Economics: You Keep 100%
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fusion Calling is a simple, flat subscription — we don&apos;t
                take a cut of your client revenue. You keep 100% of whatever
                you charge your clients. Your only cost is the Fusion Calling
                subscription:
              </p>

              <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30 mb-6">
                <h3 className="text-xl font-bold text-brand-light mb-4">
                  White-Label Tiers
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <span>
                      <strong>Starter — $99/mo</strong> (6 sub-accounts)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <span>
                      <strong>Growth — $299/mo</strong> (20 sub-accounts)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <span>
                      <strong>Scale — $499/mo</strong> (unlimited sub-accounts)
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Beyond Vapi, Fusion Calling also supports Retell AI and
                ElevenLabs, and integrates with GoHighLevel via API and
                webhooks (connecting across 2,200+ apps). You can see it all in
                action on our{" "}
                <Link href="/" className="text-brand-light hover:text-brand transition-colors">
                  live interactive demo
                </Link>{" "}
                on the homepage.
              </p>
            </div>

            {/* Conclusion */}
            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Built With Vapi, Not Against It
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Vapi built excellent voice AI infrastructure. Fusion Calling
                built the agency layer that lets you resell it under your own
                brand. Most of our users were already on Vapi — they just needed
                branding, client portals, sub-accounts, and billing to turn it
                into a real product.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Instead of spending months and tens of thousands building a
                custom white-label app, you can launch your branded voice AI
                practice in about 7 days with done-with-you onboarding.
              </p>
              <Link
                href="/whitelabel"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                Start White-Labeling Vapi
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
                  href="/blog/retell-ai-white-label"
                  className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                    White-Labeling Retell AI with Fusion Calling
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How the same agency layer works with Retell AI for branding,
                    client portals, and billing.
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
                    A practical comparison of the voice AI providers Fusion
                    Calling supports.
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
