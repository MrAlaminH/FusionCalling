import type { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";
import { primaryButton } from "@/components/ui/button-styles";

/* eslint-disable react/no-unescaped-entities */

const post = getBlogPost("retell-ai-white-label")!;
const author = getAuthor(post.author ?? "voice-team")!
const faqs = blogFaqs["retell-ai-white-label"];

export const metadata: Metadata = buildPostMetadata(post, author);

export default function RetellAIBlogPost() {
  return (
    <>
      <script
        id="retell-blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogGraph({
              slug: post.slug,
              // Headline = visible H1 text.
              title: "White-Labeling Retell AI with Fusion Calling",
              description: post.description,
              image: post.image,
              datePublished: post.date,
              dateModified: post.updated,
              authorSchemaId: author.authorSchemaId,
              faqs,
              crumbName: "Can You White-Label Retell AI? Here's How",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="White-Labeling Retell AI"
        titleHighlight="with Fusion Calling"
        dek={
          <>
            Retell AI is a powerful conversational voice engine. Fusion Calling
            is the white-label agency layer built to work with it — adding
            branding, client portals, multi-client management, and client
            billing so you can resell Retell under your own brand.
          </>
        }
        author={author}
        faqs={faqs}
        toc={[
          { id: "great-voice-engine", title: "A Great Voice Engine, Now a Sellable Product" },
          { id: "what-fusion-adds", title: "What Fusion Calling Adds on Top of Retell" },
          { id: "how-they-work-together", title: "How Retell + Fusion Calling Work Together" },
          { id: "bring-your-agents", title: "Bring Your Retell Agents Along" },
          { id: "the-economics", title: "The Economics: Simple and Yours" },
          { id: "built-with-retell-and-more", title: "Built With Retell — And Ready for More" },
        ]}
      >
        <div className="space-y-8">
          <p className="text-brand-light font-semibold">
            Ready to resell Retell under your brand?{" "}
            <Link href="/whitelabel/retell" className="underline hover:text-brand transition-colors">
              See our white-label Retell platform
            </Link>
            .
          </p>

          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="great-voice-engine" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
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
            <h2 id="what-fusion-adds" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              What Fusion Calling Adds on Top of Retell
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Think of Fusion Calling as the agency layer that wraps around Retell. You
              bring your Retell account; we provide everything your clients see and
              everything you need to run a multi-client business. This saves you from
              building the white-label layer yourself — most agencies launch in{" "}
              <strong className="text-brand-light">24 hours</strong> instead of weeks or
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
                typically getting you to launch within 24 hours.
              </p>
            </div>
          </div>

          {/* How They Work Together */}
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="how-they-work-together" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="bring-your-agents" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="the-economics" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="built-with-retell-and-more" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
              AI business in 24 hours.
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
              className={primaryButton}
            >
              Start White-Labeling Retell
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
