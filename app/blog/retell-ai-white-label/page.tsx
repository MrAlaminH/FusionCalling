import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { getTeamAuthor } from "@/lib/authors";
import { buildOpenGraph } from "@/lib/seo";

/* eslint-disable react/no-unescaped-entities */

const teamAuthor = getTeamAuthor();

export const metadata: Metadata = {
  title: "Can You White-Label Retell AI? Here's How",
  description:
    "Retell AI powers conversations. Fusion Calling adds the white-label agency layer: branding, client portals, and billing, so you can resell Retell under your own brand.",
  ...buildOpenGraph({
    title: "Can You White-Label Retell AI? Here's How",
    description:
      "Retell AI powers great conversations. Fusion Calling adds the white-label agency layer — branding, client portals, multi-client management, and client billing — so you can resell Retell under your own brand.",
    path: "/blog/retell-ai-white-label",
    image: "/blog/blog6.webp",
    type: "article",
    publishedTime: "2025-02-11T00:00:00Z",
    modifiedTime: `${CONTENT_LAST_UPDATED}T00:00:00Z`,
    authors: ["Fusion Calling"],
  }),
};

export default function RetellAIBlogPost() {
  return (
    <>
      <script
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
                    item: `${SITE_URL}/`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: `${SITE_URL}/blog`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Can You White-Label Retell AI? Here's How",
                    item: `${SITE_URL}/blog/retell-ai-white-label`,
                  },
                ],
              },
              {
                "@type": "Article",
                "@id": `${SITE_URL}/blog/retell-ai-white-label#article`,
                url: `${SITE_URL}/blog/retell-ai-white-label`,
                name: "Can You White-Label Retell AI? Here's How",
                headline:
                  "Can You White-Label Retell AI? Here's How",
                description:
                  "Retell AI powers great conversations. Fusion Calling adds the white-label agency layer — branding, client portals, multi-client management, and client billing — so you can resell Retell under your own brand.",
                inLanguage: "en-US",
                image: `${SITE_URL}/blog/blog6.webp`,
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                datePublished: "2025-02-11T00:00:00Z",
                dateModified: "2026-07-07T00:00:00Z",
                author: { "@id": `${SITE_URL}/team/voice-team#person` },
                publisher: {
                  "@id": `${SITE_URL}/#organization`,
                },
                speakable: {
                  "@type": "SpeakableSpecification",
                  cssSelector: ["h1", ".prose"]
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
                  {
                    "@type": "Question",
                    name: "Can I migrate existing Retell agents to Fusion Calling?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Your Retell assistants and configurations remain in your Retell account. Fusion Calling manages the client-facing layer — branding, portals, billing — while Retell continues to power the actual conversations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Fusion Calling mark up Retell's per-minute costs?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. You bring your own Retell API key and pay Retell directly for usage. Fusion Calling charges a flat monthly platform fee ($99-$499/mo) with no markup on voice minutes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to white-label my Retell setup?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most partners launch in about 7 days with our done-with-you onboarding. Connect your Retell API key, apply your branding, and start reselling Retell under your own brand.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I use Retell for some clients and Vapi for others?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely. Fusion Calling unifies Vapi, Retell AI, and ElevenLabs under one white-label dashboard. Assign the best engine per client — Retell for natural support flows, Vapi for cost-sensitive outbound, ElevenLabs for premium voices.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does it cost to resell Retell agents under my brand?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Plans start at $99/month for 6 sub-accounts. You import your existing Retell agents with your API key, so there is no rebuild, and you set your own client prices on top.",
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

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-8">
            <span>February 11, 2025</span>
            <span>•</span>
            <Link
              href={`/team/${teamAuthor.slug}`}
              className="flex items-center gap-2 hover:text-brand-light transition-colors"
            >
              <Image
                src={teamAuthor.avatar}
                alt={`${teamAuthor.name}, ${teamAuthor.role} at Fusion Calling`}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span>By {teamAuthor.name}</span>
            </Link>
            <span>•</span>
            <span>Last updated: July 7, 2026</span>
          </div>

          <p className="text-brand-light font-semibold mb-8">
            Ready to resell Retell under your brand?{" "}
            <Link href="/whitelabel/retell" className="underline hover:text-brand transition-colors">
              See our white-label Retell platform
            </Link>
            .
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-12 rounded-3xl overflow-hidden border border-brand/20">
          <Image
            src="/blog/blog6.webp"
            alt="Can You White-Label Retell AI? Here's How"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
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
                <Link href="/glossary/retell-ai" className="text-brand-light hover:text-brand transition-colors">
                  Retell AI
                </Link>{" "}
                has earned its reputation for a reason. Its conversational
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
                to charge for it — which is exactly what{" "}
                <Link href="/whitelabel/retell" className="text-brand-light hover:text-brand transition-colors">
                  Fusion Calling's white-label Retell AI platform
                </Link>{" "}
                adds.
              </p>
              <p className="text-brand-light text-lg font-semibold">
                That is the{" "}
                <Link href="/glossary/white-label" className="underline hover:text-brand transition-colors">
                  white-label
                </Link>{" "}
                layer Fusion Calling is built to provide — alongside Retell,
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
                      Link your existing Retell account with a single API key — a{" "}
                      <Link href="/glossary/bring-your-own-key" className="text-brand-light hover:text-brand transition-colors">
                        bring-your-own-key
                      </Link>{" "}
                      setup, no migration required.
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
                around it. See the{" "}
                <Link href="/whitelabel/retell" className="text-brand-light hover:text-brand transition-colors">
                  white-label Retell platform
                </Link>{" "}
                for what clients get, or read our{" "}
                <Link href="/alternative/retell" className="text-brand-light hover:text-brand transition-colors">
                  Retell alternative comparison
                </Link>{" "}
                before you decide.
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
                The only cost is your Fusion Calling plan (full details on our{" "}
                <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                  pricing page
                </Link>
                ):
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
                Want to see it in action? There is a{" "}
                <Link href="/#show-case" className="text-brand-light hover:text-brand transition-colors">
                  live demo on the homepage
                </Link>
                , or you can{" "}
                <Link href="/whitelabel/retell" className="text-brand-light hover:text-brand transition-colors">
                  explore the white-label Retell AI platform
                </Link>{" "}
                before you apply to start white-labeling Retell today.
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
              <Image
                src={teamAuthor.avatar}
                alt={`${teamAuthor.name}, ${teamAuthor.role} at Fusion Calling`}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover border border-brand/30 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">About the Author</h3>
                <p className="text-gray-400 text-sm mb-3">
                  <Link
                    href={`/team/${teamAuthor.slug}`}
                    className="text-brand-strong hover:text-brand transition-colors"
                  >
                    <strong>{teamAuthor.name}</strong>
                  </Link>
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {teamAuthor.shortBio}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <a
                    href={`mailto:${teamAuthor.email}`}
                    className="text-brand-strong hover:text-brand transition-colors"
                  >
                    Email →
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
