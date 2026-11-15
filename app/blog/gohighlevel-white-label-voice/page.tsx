import type { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import { AGENCY_WHITE_LABEL_VIDEO } from "@/lib/videos";
import PostLayout from "@/components/blog/PostLayout";

/* eslint-disable react/no-unescaped-entities */
import { primaryButton } from "@/components/ui/button-styles";

const post = getBlogPost("gohighlevel-white-label-voice")!;
const author = getAuthor(post.author ?? "voice-team")!
const faqs = blogFaqs["gohighlevel-white-label-voice"];

export const metadata: Metadata = buildPostMetadata(post, author);

export default function GoHighLevelBlogPost() {
  return (
    <>
      <script
        id="gohighlevel-blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogGraph({
              slug: post.slug,
              // Headline = visible H1 text.
              title: "Adding Voice AI to Your GoHighLevel Agency",
              description: post.description,
              image: post.image,
              datePublished: post.date,
              dateModified: post.updated,
              authorSchemaId: author.authorSchemaId,
              faqs,
              crumbName: "Adding Voice AI to Your GoHighLevel Agency",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        heroVideo={AGENCY_WHITE_LABEL_VIDEO}
        titleLead="Adding Voice AI to Your"
        titleHighlight="GoHighLevel Agency"
        dek={
          <>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              A partnership guide for GoHighLevel agencies. Keep GHL as your CRM and
              add a dedicated, white-label voice AI layer your clients can use today.
            </p>
            <p className="text-brand-light font-semibold mb-8">
              Running a GoHighLevel agency?{" "}
              <Link href="/whitelabel/gohighlevel" className="underline hover:text-brand transition-colors">
                See our white-label voice AI for GoHighLevel
              </Link>
              .
            </p>
          </>
        }
        author={author}
        faqs={faqs}
        toc={[
          { id: "perfect-fit", title: "Why GHL Agencies Are a Perfect Fit for Voice AI" },
          { id: "where-voice-ai-fits", title: "Where Voice AI Fits in a GHL Agency" },
          { id: "how-it-works-together", title: "How Fusion Calling + GoHighLevel Work Together" },
          { id: "gohighlevel-setup", title: "Step-by-Step: Connecting Voice AI to GHL Sub-Accounts" },
          { id: "dedicated-voice-layer", title: "Why a Dedicated Voice Layer Complements GoHighLevel" },
          { id: "built-in-crm", title: "Don't Have GoHighLevel Yet? Fusion Calling Includes a CRM" },
          { id: "cost-math", title: "The Per-Client Cost Math, Worked" },
          { id: "economics", title: "The Economics: Simple and Predictable" },
          { id: "pitfalls", title: "Pitfalls to Avoid Before Launch" },
        ]}
      >
        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="perfect-fit" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
              Why GHL Agencies Are a Perfect Fit for Voice AI
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              GoHighLevel is an excellent all-in-one marketing and CRM platform
              that thousands of agencies run on. If you&apos;re one of them, you
              already serve the local businesses that need call handling the most:
              dental offices, home services, med spas, real estate teams, legal
              practices, and small service businesses that live and die by the
              phone.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fusion Calling is <strong className="text-brand-light">not a competitor</strong> of
              GoHighLevel. It&apos;s a dedicated,{" "}
              <Link href="/glossary/white-label" className="text-brand-light hover:text-brand transition-colors">
                white-label
              </Link>{" "}
              voice AI layer that
              integrates with GHL to handle the calls your clients can&apos;t
              always get to. The message is simple:
            </p>
            <p className="text-brand-light text-lg font-semibold">
              Keep GoHighLevel as your CRM; add Fusion Calling as your dedicated,
              white-label voice AI layer.
            </p>
            <p className="text-gray-300 leading-relaxed">
              And if you don&apos;t use GoHighLevel yet, Fusion Calling includes a
              built-in CRM of its own — so you can start a voice AI agency without
              paying for a separate, expensive CRM.
            </p>
          </div>

          {/* Where Voice AI Fits in a GHL Agency */}
          <div>
            <h2 id="where-voice-ai-fits" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Where Voice AI Fits in a GHL Agency
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Most of our partners come from the GoHighLevel ecosystem, and they
              use voice AI to solve the same problems their clients ask about
              every day. Fusion Calling handles the call, then syncs the outcome
              back to GHL via webhooks and CRM integration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">📞 Missed-Call Recovery</h3>
                <p className="text-gray-400 text-sm">
                  Answer every after-hours or overflow call instantly, capture the
                  caller&apos;s details, and push the lead straight into a GHL
                  pipeline.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">🗓️ Appointment Booking</h3>
                <p className="text-gray-400 text-sm">
                  Let AI book, reschedule, and confirm appointments against your
                  clients&apos; calendars, then trigger GHL automations.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">🎯 Lead Qualification</h3>
                <p className="text-gray-400 text-sm">
                  Pre-screen inbound callers, score the lead, and route hot
                  opportunities to the right team inside GoHighLevel.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">⏰ Reminders & Follow-Up</h3>
                <p className="text-gray-400 text-sm">
                  Send outbound reminders and follow-ups, log the result, and keep
                  the GHL contact record up to date.
                </p>
              </div>
            </div>
          </div>

          {/* How Fusion Calling + GoHighLevel Work Together */}
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="how-it-works-together" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              How Fusion Calling + GoHighLevel Work Together
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fusion Calling connects to GoHighLevel through{" "}
              <Link href="/glossary/crm-integration" className="text-brand-light hover:text-brand transition-colors">
                CRM integration
              </Link>{" "}
              and{" "}
              <Link href="/glossary/webhook" className="text-brand-light hover:text-brand transition-colors">
                webhooks
              </Link>
              , and reaches 2,200+ other apps through our integration network (the
              full setup is covered in our{" "}
              <Link href="/docs" className="text-brand-light hover:text-brand transition-colors">
                docs
              </Link>
              ). Here&apos;s what that looks like for an agency:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">
                    Sync to GHL via API &amp; Webhooks
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Call outcomes, captured leads, and appointments flow back into
                    your GHL CRM and automations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏷️</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">
                    White-Label Under Your Brand
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Branded portals on your own domain, with your pricing. Your
                    clients never see Fusion Calling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">
                    Per-Client Sub-Accounts
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Spin up an isolated sub-account for each GHL client, each with
                    its own numbers, agents, and settings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💳</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">
                    Bill Clients Your Way
                  </h3>
                  <p className="text-gray-400 text-sm">
                    You set the price and you bill the client directly. Keep 100%
                    of what you charge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-step: connecting voice AI to GHL sub-accounts */}
          <div>
            <h2 id="gohighlevel-setup" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Step-by-Step: Connecting Voice AI to GHL Sub-Accounts
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The integration is configuration, not code. Most agencies
              complete the API and webhook setup in one to two hours, guided by
              our team as part of the{" "}
              <strong className="text-brand-light">24-hour launch</strong>.
              Here&apos;s the sequence:
            </p>

            <div className="space-y-4">
              <div className="glass-light rounded-2xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-2">
                  1. Connect your GoHighLevel workspace
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Link Fusion Calling to each client&apos;s GHL sub-account via
                  API and webhooks, so calls, contacts, notes, and call
                  outcomes flow back into the right GHL workspace automatically.
                </p>
              </div>

              <div className="glass-light rounded-2xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-2">
                  2. Point a GHL webhook at Fusion Calling
                </h3>
                <p className="text-gray-400 leading-relaxed mb-3">
                  In GoHighLevel, go to <strong>Settings → Automation → Webhooks</strong>{" "}
                  and click <strong>Add Webhook</strong>. Configure it as a{" "}
                  <strong>POST</strong> to your Fusion Calling leads endpoint
                  with an <code className="text-brand-light break-all">Authorization: Bearer YOUR_API_KEY</code>{" "}
                  header, mapping the contact&apos;s name, phone, and email in
                  the body. That&apos;s how a new GHL contact triggers a voice
                  agent. The full walkthrough with the payload is in our{" "}
                  <Link href="/docs" className="text-brand-light hover:text-brand transition-colors">
                    API &amp; webhook docs
                  </Link>
                  .
                </p>
              </div>

              <div className="glass-light rounded-2xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-2">
                  3. Import or build the agents
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Bring your existing Vapi, Retell, or ElevenLabs agent
                  configurations and API keys — or build fresh ones — and
                  assign each agent to the client it serves.
                </p>
              </div>

              <div className="glass-light rounded-2xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-2">
                  4. Brand each client&apos;s portal and set pricing
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Set each sub-account&apos;s logo, domain, and pricing.
                  Clients see a fully branded voice AI product — Fusion Calling
                  stays invisible end to end — and you keep 100% of what you
                  charge.
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              Before rolling out to every sub-account, fire one test contact
              through the GHL workflow and confirm it lands in Fusion Calling
              with the right fields.
            </p>
          </div>

          {/* Why a Dedicated Voice Layer */}
          <div>
            <h2 id="dedicated-voice-layer" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Why a Dedicated Voice Layer Complements GoHighLevel
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              GoHighLevel is outstanding at CRM, automation, and marketing. A
              dedicated voice layer complements GHL by going deep on the calls
              themselves, so you don&apos;t have to build and maintain that
              complexity in-house.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Specialized Voice Depth
                </h3>
                <p className="text-gray-400 text-sm">
                  Conversation design, voice tuning, and call analytics built
                  specifically for phone automation.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Multi-Provider Support
                </h3>
                <p className="text-gray-400 text-sm">
                  Choose the best engine per client with Vapi, Retell, and
                  ElevenLabs all available on one platform.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Live Demo
                </h3>
                <p className="text-gray-400 text-sm">
                  Hear the voice quality yourself on the Fusion Calling homepage
                  before you offer it to clients.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Done-With-You Setup
                </h3>
                <p className="text-gray-400 text-sm">
                  Launch your first client&apos;s voice AI in 24 hours with
                  guided, done-with-you onboarding.
                </p>
              </div>
            </div>
          </div>

          {/* Don't have GoHighLevel? Built-in CRM */}
          <div>
            <h2 id="built-in-crm" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Don&apos;t Have GoHighLevel Yet? Fusion Calling Includes a CRM
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Everything above assumes you already run on GoHighLevel. But many
              agencies are just starting out, and GoHighLevel&apos;s higher
              tiers — the ones you need to white-label client sub-accounts —
              are a real expense before you&apos;ve landed a single voice AI
              client. Here&apos;s the part most agencies miss:
            </p>
            <p className="text-brand-light text-lg font-semibold mb-6">
              Fusion Calling includes its own built-in CRM (lead management), so
              you don&apos;t need a separate CRM to run a voice AI agency. (For a
              head-to-head breakdown, see our guide to the{" "}
              <Link href="/blog/gohighlevel-alternative-for-voice-ai" className="underline hover:text-brand transition-colors">
                GoHighLevel alternative for voice-first agencies
              </Link>
              .)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">📇 Leads Captured Automatically</h3>
                <p className="text-gray-400 text-sm">
                  Every inbound call and outbound campaign feeds leads straight
                  into the built-in CRM — contacts, call history, and lead status,
                  with no extra integration to build.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">💰 One Subscription, Not Two</h3>
                <p className="text-gray-400 text-sm">
                  Voice agents and the CRM come together in one platform, so you
                  skip paying for a separate CRM on top of your voice tool.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">🧩 Easier to Maintain</h3>
                <p className="text-gray-400 text-sm">
                  One login, one bill, one support team. Less to integrate, sync,
                  and troubleshoot across separate tools.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">🔗 Still Connects to GHL If You Want</h3>
                <p className="text-gray-400 text-sm">
                  If a client already uses GoHighLevel, Fusion Calling syncs to it
                  via API and webhooks — use the built-in CRM for new clients and
                  GHL for existing ones, all from one platform.
                </p>
              </div>
            </div>
          </div>

          {/* Per-Client Cost Math */}
          <div>
            <h2 id="cost-math" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              The Per-Client Cost Math, Worked
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Before launch, know your floor. Two subscriptions determine it:
              your GoHighLevel agency plan and your Fusion Calling platform
              plan. Neither charges per client beyond tier limits, so the
              monthly math is fixed:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  GoHighLevel agency plans
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Starter — $97/mo (3 sub-accounts)</li>
                  <li>• Agency Unlimited — $297/mo</li>
                  <li>• SaaS mode — $497/mo</li>
                </ul>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Fusion Calling partner plans
                </h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Starter — $99/mo (6 sub-accounts)</li>
                  <li>• Growth — $299/mo (20 sub-accounts)</li>
                  <li>• Scale — $499/mo (unlimited sub-accounts)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30 mb-6">
              <h3 className="text-xl font-bold text-brand-light mb-3">
                A worked example
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Take a realistic setup: an agency on GoHighLevel&apos;s Agency
                Unlimited plan ($297/mo) plus Fusion Calling&apos;s Starter
                tier ($99/mo, 6 sub-accounts). Fixed platform cost:{" "}
                <strong className="text-brand-light">$396/mo</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Now price the service. As a modeling assumption — not a rule —
                many partners package white-label voice AI at{" "}
                <strong className="text-brand-light">$297–$497/month</strong>{" "}
                per client, depending on volume and vertical. At the low end:
                six clients × $297 ={" "}
                <strong className="text-brand-light">$1,782/month</strong>{" "}
                against $396 in platform cost, and you keep 100% of the
                difference. Even while you&apos;re still landing clients, the
                second signed account already covers both subscriptions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Watch the ceilings, not the unit costs: GHL&apos;s Starter plan
                caps you at 3 sub-accounts and Fusion Calling&apos;s Starter
                covers 6, so the constraint on growth is your tier limits —
                tier up before your client roster runs out of slots.
              </p>
            </div>
          </div>

          {/* Economics Note */}
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="economics" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              The Economics: Simple and Predictable
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              You pay a flat monthly subscription for the Fusion Calling platform
              and you keep 100% of what you charge your clients. Your only cost is
              the subscription (tier details on our{" "}
              <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                pricing page
              </Link>
              ):
            </p>

            <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30 mb-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong>Starter — $99/mo</strong> for up to 6 client
                    sub-accounts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong>Growth — $299/mo</strong> for up to 20 client
                    sub-accounts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong>Scale — $499/mo</strong> for unlimited client
                    sub-accounts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong>Keep 100%</strong> of the revenue you charge clients,
                    with full pricing control
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
              <p className="text-center text-brand-light font-semibold text-lg">
                💡 One flat subscription, no per-minute math, and every dollar you
                bill stays with your agency
              </p>
            </div>
          </div>

          {/* Pitfalls */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="pitfalls" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Pitfalls to Avoid Before Launch
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Skipping the single-contact test.</strong>{" "}
                  A misconfigured webhook fails silently — the GHL workflow
                  &ldquo;runs&rdquo; while nothing reaches Fusion Calling. Fire
                  one test contact through and verify it arrives before
                  pointing every sub-account at the webhook.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Exposing your API key client-side.</strong>{" "}
                  Webhook calls to Fusion Calling should always run
                  server-side (via GHL&apos;s automation builder or your own
                  backend), never from browser JavaScript where the key is
                  visible to anyone.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Forgetting SMS registration.</strong>{" "}
                  Confirmations, reminders, and missed-call texts only deliver
                  if the numbers are registered — A2P 10DLC (or toll-free
                  verification). Unregistered numbers can silently fail, so
                  register before launch, not after the first complaint.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Cloning one agent config across every client.</strong>{" "}
                  Each client needs their own greeting, qualification
                  questions, and calendar connection. A generic shared agent is
                  the fastest way to churn a white-label account.
                </span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="glass-light rounded-2xl p-8 border border-brand/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Add Voice AI Without Changing Your Stack
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              GoHighLevel stays at the center of your agency. Fusion Calling slots
              in alongside it as your dedicated, white-label voice AI layer,
              integrating through API and webhooks so calls and leads flow back
              into GHL. Here&apos;s what you get:
            </p>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  A <strong>complementary voice layer</strong> that works with
                  GoHighLevel, not against it
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>White-label delivery</strong> on your domain, with your
                  pricing and per-client sub-accounts
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Multi-provider choice</strong> across Vapi, Retell, and
                  ElevenLabs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>100% of client revenue</strong> on a simple monthly
                  subscription
                </span>
              </li>
            </ul>

            <Link
              href="/whitelabel"
              className={primaryButton}
            >
              Explore the Fusion Calling White-Label Platform
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
