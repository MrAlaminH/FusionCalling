import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { getTeamAuthor } from "@/lib/authors";
import { buildOpenGraph } from "@/lib/seo";

/* eslint-disable react/no-unescaped-entities */

const teamAuthor = getTeamAuthor();

export const metadata: Metadata = {
  title: "How to Automate Phone Calls with AI: Setup to First Live Call",
  description:
    "Learn how to automate phone calls with AI in five simple steps: pick a use case, connect your number, calendar, and CRM, add business knowledge, test calls, then launch with clear handoff rules.",
  ...buildOpenGraph({
    title: "How to Automate Phone Calls with AI: Setup to First Live Call",
    description:
      "Learn how to automate phone calls with AI in five simple steps: pick a use case, connect your number, calendar, and CRM, add business knowledge, test calls, then launch with clear handoff rules.",
    path: "/blog/how-to-automate-phone-calls-with-ai",
    image: "/blog/blog4.webp",
    type: "article",
    publishedTime: "2026-09-05T00:00:00Z",
    modifiedTime: `${CONTENT_LAST_UPDATED}T00:00:00Z`,
    authors: ["Fusion Calling"],
  }),
};

export default function HowToAutomatePhoneCallsWithAI() {
  return (
    <>
      <script
        id="how-to-automate-calls-blog-schema"
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
                    name: "How to Automate Phone Calls with AI: Setup to First Live Call",
                    item: `${SITE_URL}/blog/how-to-automate-phone-calls-with-ai`,
                  },
                ],
              },
              {
                "@type": "Article",
                "@id": `${SITE_URL}/blog/how-to-automate-phone-calls-with-ai#article`,
                url: `${SITE_URL}/blog/how-to-automate-phone-calls-with-ai`,
                name: "How to Automate Phone Calls with AI: Setup to First Live Call",
                headline:
                  "How to Automate Phone Calls with AI: Setup to First Live Call",
                description:
                  "Learn how to automate phone calls with AI in five simple steps: pick a use case, connect your number, calendar, and CRM, add business knowledge, test calls, then launch with clear handoff rules.",
                inLanguage: "en-US",
                image: `${SITE_URL}/blog/blog4.webp`,
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                datePublished: "2026-09-05T00:00:00Z",
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
                    name: "How much does it cost to start automating phone calls with AI?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Fusion Calling plans start at $99/month for the Starter plan with 6 sub-accounts, then $299/month for Growth and $499/month for Scale. Voice minutes are billed by the voice provider on top of the platform plan. See the pricing page for current plan details.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to launch your first AI call agent?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most small teams go live in days, often within about a week, when they start with one use case. Guided onboarding covers connecting your number, calendar, and CRM, plus testing before your first live call.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What happens when the AI can't handle a call?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You set handoff rules before launch. When a call hits a limit — an upset caller, a pricing dispute, or anything outside the script — the agent transfers to a person, takes a message, or books a follow-up. Every call is logged with a transcript so your team can follow up.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How is AI call automation different from IVR?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "IVR is the old press-1-for-sales phone menu. Callers push buttons and wait through rigid options. AI call automation holds a real spoken conversation: it understands plain speech, answers questions, books times, and routes edge cases to a person.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are AI phone calls recorded, and do I need consent?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Calls can be recorded and transcribed, and recording and consent rules differ by state and country. Common practice is to play a notice that the call may be recorded and to get consent where required. Ask legal counsel about the rules that apply to your business before you launch.",
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
              How-To Guide
            </span>
            <span className="text-gray-500 text-sm">6 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            How to Automate Phone Calls with AI
            <br />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              Setup to First Live Call
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            AI call automation means an AI voice agent answers or makes phone
            calls for your business. It speaks in plain speech. It books,
            answers questions, and takes messages. This guide shows the five
            steps from setup to your first live call.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-8">
            <span>September 5, 2026</span>
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
            New to the topic? Start with our{" "}
            <Link href="/ai-phone-call-automation" className="underline hover:text-brand transition-colors">
              guide to AI phone call automation
            </Link>
            .
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-12 rounded-3xl overflow-hidden border border-brand/20">
          <Image
            src="/blog/blog4.webp"
            alt="How to Automate Phone Calls with AI: Setup to First Live Call"
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
                What AI Call Automation Does
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                An AI voice agent handles real phone calls for you. It greets
                the caller. It listens. It replies in a natural voice. It can
                book a time, answer common questions, or pass notes to your team.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                You do not need new phones or new staff to start. The agent
                works with your current number and tools. Each step below is
                simple on its own. Most small teams finish all five in days.
              </p>
              <p className="text-brand-light text-lg font-semibold">
                Start small. Fix fast. Then add more call types.
              </p>
            </div>

            {/* Step 1 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Step 1: Pick One Use Case
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Start with one call type. Good first picks are after-hours
                answering, appointment booking, or lead follow-up. One use case
                keeps setup fast and testing clear.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Pick the call type that costs you the most missed revenue today.{" "}
                <Link href="/industries/ai-voice-for-real-estate" className="text-brand-light hover:text-brand transition-colors">
                  Real estate teams often start with lead follow-up
                </Link>
                , since speed to lead matters so much there. You can add more
                call types once the first one works well.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Step 2: Connect Your Number, Calendar, and CRM
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Next, connect the three things your calls touch. First, your
                phone number. You can port your current number or start with a
                new one for testing.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Then connect your calendar, so the agent can offer real open
                slots and book them on the spot. Then connect your CRM, so call
                notes, leads, and bookings land where your team already works.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Automation tools like Zapier can bridge gaps between tools that
                do not link directly. Keep this step lean. Connect only what
                your first use case needs.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Step 3: Add Business Knowledge and Pick a Voice
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Now teach the agent about your business. Add your hours,
                prices, services, and answers to common questions. Use short
                answers in your own words.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Then pick a voice that fits your brand and listen to how it
                sounds on a real call. Short scripts work best. Long scripts
                cause more mistakes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Set clear limits too. Write down what the agent may promise and
                what it must pass to a person. Clear limits keep every call safe.
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Step 4: Make Test Calls
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Make test calls before you go live. Call the number yourself.
                Try normal questions first, then try hard ones. Check names,
                times, and booking details in your calendar and CRM after each
                call.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Fix wrong answers in your knowledge base, then test again. Ask
                two or three staff members to try to break it. Ten good test
                calls catch most problems.
              </p>
            </div>

            {/* Step 5 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Step 5: Launch with Handoff Rules
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Go live with clear handoff rules. Tell the agent exactly when
                to transfer to a person, when to take a message, and when to
                book a follow-up. Common triggers are upset callers, pricing
                disputes, and anything outside the script.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Review call recordings and transcripts each week at first. Fix
                one or two weak spots per week. Small fixes add up fast, and
                each round makes the agent more solid.
              </p>
            </div>

            {/* Cost and time */}
            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                What It Costs and How Long It Takes
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cost and timing are simple. Plans start at $99 per month, with
                full details on our{" "}
                <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                  pricing page
                </Link>
                . Voice minutes are billed by the voice provider on top of the
                plan.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Most teams launch in days when they start with one use case. To
                see what missed calls cost you today, run the numbers in our{" "}
                <Link href="/calculator" className="text-brand-light hover:text-brand transition-colors">
                  ROI calculator
                </Link>
                . It makes the business case clear before you commit.
              </p>
            </div>

            {/* Conclusion */}
            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Your First Live Call Is Close
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You now know the full path. Pick one use case. Connect your
                number, calendar, and CRM. Add business knowledge and a voice.
                Test well. Then launch with handoff rules that keep callers in
                good hands.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Want the bigger picture first? Read our{" "}
                <Link href="/ai-phone-call-automation" className="text-brand-light hover:text-brand transition-colors">
                  guide to AI phone call automation
                </Link>
                , or check current plans and start your setup today.
              </p>

              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                See Plans and Start
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
                  href="/blog/ai-voice-agents-for-small-business"
                  className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                    AI Voice Agents for Small Business: Use Cases & ROI
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How small businesses use AI voice agents to answer every
                    call, book appointments, and stay open 24/7.
                  </p>
                </Link>
                <Link
                  href="/blog/vapi-white-label-platform"
                  className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                    Does Vapi Offer White Label? How It Works
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How agencies resell Vapi under their own brand, and the
                    step-by-step setup.
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
