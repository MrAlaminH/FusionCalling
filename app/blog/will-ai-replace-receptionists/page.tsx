import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { getAuthor } from "@/lib/authors";
import { buildOpenGraph } from "@/lib/seo";

/* eslint-disable react/no-unescaped-entities */

const teamAuthor = getAuthor("voice-team")!;

export const metadata: Metadata = {
  title: "Will AI Replace Receptionists? What Changes in 2026",
  description:
    "Mostly no — AI receptionists handle routine calls while humans keep judgment and relationships. What to automate, what to keep, and what it means for owners and front-desk teams in 2026.",
  ...buildOpenGraph({
    title: "Will AI Replace Receptionists? What Actually Changes in 2026",
    description:
      "Mostly no — AI receptionists handle routine calls while humans keep judgment and relationships. What to automate, what to keep, and what it means for owners and front-desk teams in 2026.",
    path: "/blog/will-ai-replace-receptionists",
    image: "/blog/blog3.webp",
    type: "article",
    publishedTime: "2026-09-06T00:00:00Z",
    modifiedTime: `${CONTENT_LAST_UPDATED}T00:00:00Z`,
    authors: ["Fusion Calling"],
  }),
};

export default function WillAIReplaceReceptionistsBlogPost() {
  return (
    <>
      <script
        id="will-ai-replace-receptionists-blog-schema"
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
                    name: "Will AI Replace Receptionists? What Actually Changes in 2026",
                    item: `${SITE_URL}/blog/will-ai-replace-receptionists`,
                  },
                ],
              },
              {
                "@type": "Article",
                "@id": `${SITE_URL}/blog/will-ai-replace-receptionists#article`,
                url: `${SITE_URL}/blog/will-ai-replace-receptionists`,
                name: "Will AI Replace Receptionists? What Actually Changes in 2026",
                headline:
                  "Will AI Replace Receptionists? What Actually Changes in 2026",
                description:
                  "Mostly no — AI receptionists handle routine calls while humans keep judgment and relationships. What to automate, what to keep, and what it means for owners and front-desk teams in 2026.",
                inLanguage: "en-US",
                image: `${SITE_URL}/blog/blog3.webp`,
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                datePublished: "2026-09-06T00:00:00Z",
                dateModified: `${CONTENT_LAST_UPDATED}T00:00:00Z`,
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
                    name: "Will AI replace receptionists?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Mostly no. AI reliably takes over routine call work — answering, booking, reminders, and common questions — while humans keep judgment calls, sensitive conversations, and relationships. The realistic 2026 picture is a hybrid: the AI absorbs the repetitive volume, the role shifts toward higher-value work, and businesses that pair the two capture more calls without losing the human touch.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are AI receptionists worth it for small businesses?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Usually yes when missed calls cost revenue. Industry estimates suggest small businesses miss around 60% of inbound calls, and AI receptionist plans run from $149 to $497 per month versus $3,000 or more for a full-time hire. If your team cannot answer every call in two rings, a handful of captured appointments typically covers the subscription.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can AI answer phone calls as well as a human?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "For routine calls, close enough that most callers are fine with it: modern voice agents respond in under a second, book appointments accurately, and answer common questions consistently. They still struggle with emotional conversations, heavy background noise, and genuinely unusual requests — which is why well-configured deployments transfer those moments to a human with the transcript attached.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What tasks should stay with human staff?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Keep judgment calls, sensitive or emotional conversations, price negotiations, complaints, loyal-customer relationships, and unusual requests with people. AI handles the repetitive volume — answering, booking, reminders, FAQs, and messages — while humans handle the moments where empathy, discretion, or negotiation changes the outcome. That split is what the most successful deployments in 2026 converge on.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do businesses introduce an AI receptionist to callers?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Simply and honestly. A short disclosure such as 'This is the automated assistant for [business]' at the start of the call, consistent branding, and an instant path to a human when asked. Callers adapt quickly to good AI, and clear disclosure builds trust — some jurisdictions also require it for call recording, so check local rules before launch.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-brand-light hover:text-brand-light mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-brand to-brand-strong rounded-full text-sm font-semibold text-white">
              Use Cases
            </span>
            <span className="text-gray-500 text-sm">8 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Will AI Replace
            <br />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              Receptionists?
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Mostly no. AI receptionists now take the routine call work &mdash;
            answering every call, booking appointments, and fielding common
            questions &mdash; while human receptionists keep the judgment calls,
            sensitive conversations, and relationships. Here&apos;s what
            actually changes in 2026, for owners and front-desk teams alike.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>September 6, 2026</span>
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
            <span>Last updated: September 6, 2026</span>
          </div>
        </div>

        <div className="relative mb-12 rounded-3xl overflow-hidden border border-brand/20">
          <Image
            src="/blog/blog3.webp"
            alt="Will AI Replace Receptionists? What Actually Changes in 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-8">
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Short Answer
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The question isn&apos;t really &ldquo;AI or human?&rdquo; &mdash;
                it&apos;s which parts of the job each one does best. The
                consensus across 2026 industry content is blunt:
              </p>
              <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <p className="text-white text-lg font-medium leading-relaxed">
                  AI won&apos;t replace receptionists &mdash; it automates the
                  repetitive parts of the job. Expect AI to answer routine
                  calls around the clock, book appointments, and handle common
                  questions, while humans keep judgment calls, sensitive
                  conversations, and customer relationships. The role shifts
                  toward higher-value work, and businesses that pair the two
                  capture more calls without losing the human touch.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                What AI Receptionists Take Over
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                AI receptionists are strongest where the work is high-volume,
                repetitive, and rules-based. In 2026, that reliably includes:
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Answering every call in two rings, 24/7</strong>{" "}
                    &mdash; nights, weekends, holidays, and peak-hour overflows
                    included.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Appointment booking and reminders</strong>{" "}
                    &mdash; scheduling, rescheduling, and no-show follow-ups
                    without putting anyone on hold.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Common questions</strong>{" "}
                    &mdash; hours, directions, pricing, parking &mdash;
                    answered instantly and consistently, every time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Message-taking</strong> with
                    accurate caller details, routed to the right person with a
                    transcript.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">SMS follow-ups</strong> so
                    confirmations, reminders, and callbacks happen without
                    anyone remembering to send them.
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                None of this needs a person&apos;s judgment &mdash; which is
                exactly why it&apos;s the first work to automate.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                What Stays Human
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The parts of the front desk that decide outcomes &mdash; not
                just answer them &mdash; stay with people:
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Judgment calls</strong>{" "}
                    &mdash; exceptions, edge cases, and &ldquo;it
                    depends&rdquo; situations no script can cover.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Sensitive or emotional conversations</strong>{" "}
                    &mdash; upset callers, complaints, and bad news.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Negotiations</strong> over
                    pricing, terms, or scheduling conflicts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Loyal-customer relationships</strong>,
                    where familiarity is the value.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Unusual requests</strong>{" "}
                    that fall outside anything the AI has been configured to
                    handle.
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                This is a complement, not a replacement: the AI absorbs the
                volume so people can be present for the conversations where a
                person genuinely changes the result.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                What This Means for Business Owners
              </h2>
              <ul className="space-y-4 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">Missed calls are the real cost.</strong>{" "}
                    Industry estimates suggest small businesses miss an
                    estimated 60% of inbound calls &mdash; after-hours callers,
                    hold-time abandoners, and voicemail leavers who rarely call
                    back. Capturing even a fraction of those is usually worth
                    more than the subscription itself.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">AI is now the affordable first line.</strong>{" "}
                    A full-time receptionist costs $3,000+/month in salary
                    alone and covers 40 hours a week. Business plans run from
                    $149/mo with 500 included minutes up to $497/mo with 2,100
                    minutes, with no long-term contracts &mdash; see the full{" "}
                    <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                      pricing
                    </Link>{" "}
                    breakdown.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong className="text-white">People move up the value chain.</strong>{" "}
                    With routine volume absorbed, staff time shifts to the work
                    that actually needs a person: in-person service, complex
                    cases, and following up on warm leads.
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                The math most owners land on: automate the calls that don&apos;t
                need a human, and spend the savings on people for the moments
                that do.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                What This Means for Front-Desk Teams
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you work a front desk, the honest answer is that the routine
                workload drops &mdash; and that&apos;s a shift, not an ending.
                Fewer interruptions from repetitive calls means more time for
                the people standing in front of you. In practice, the role
                tends to move in three directions:
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    More <strong className="text-white">customer and patient experience</strong>{" "}
                    &mdash; check-ins, in-person service, and follow-up quality
                    that a phone agent can&apos;t deliver.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    More <strong className="text-white">oversight of the AI</strong>{" "}
                    &mdash; reviewing transcripts, tuning scripts, and setting
                    escalation rules for when a caller should reach a human.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    More <strong className="text-white">high-context work</strong>{" "}
                    &mdash; the emotional, negotiated, or unusual calls the AI
                    is designed to hand off.
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Teams that learn to supervise the AI tend to become more
                valuable, not less: the tools need someone who knows the
                business inside out to configure them well.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Should Your Business Hire an AI Receptionist?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                It&apos;s a strong fit when call volume is the bottleneck. If
                any of these sound familiar, you&apos;re a candidate:
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>You get more calls than your team can answer in two rings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Missed calls are turning into lost bookings or leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Customers try to reach you after hours or during peak times</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Most calls are routine: hours, directions, pricing, booking</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Two or more usually means the fix pays for itself. An{" "}
                <Link href="/ai-receptionist" className="text-brand-light hover:text-brand transition-colors">
                  AI receptionist platform
                </Link>{" "}
                gets you live fast, and{" "}
                <Link href="/ai-phone-call-automation" className="text-brand-light hover:text-brand transition-colors">
                  how AI phone call automation works
                </Link>{" "}
                explains what&apos;s happening under the hood before you
                commit. Business plans run from $149/mo with 500 included
                minutes to $497/mo with 2,100 minutes, with no contracts &mdash;
                full details on{" "}
                <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                  pricing
                </Link>
                .
              </p>
              <Link
                href="/ai-receptionist"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                See the AI Receptionist Platform
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    Will AI replace receptionists?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mostly no. AI reliably takes over routine call work &mdash;
                    answering, booking, reminders, and common questions &mdash;
                    while humans keep judgment calls, sensitive conversations,
                    and relationships. The realistic 2026 picture is a hybrid:
                    the AI absorbs the repetitive volume, the role shifts
                    toward higher-value work, and businesses that pair the two
                    capture more calls without losing the human touch.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    Are AI receptionists worth it for small businesses?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Usually yes when missed calls cost revenue. Industry
                    estimates suggest small businesses miss around 60% of
                    inbound calls, and AI receptionist plans run from $149 to
                    $497 per month versus $3,000 or more for a full-time hire.
                    If your team can&apos;t answer every call in two rings, a
                    handful of captured appointments typically covers the
                    subscription.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    Can AI answer phone calls as well as a human?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    For routine calls, close enough that most callers are fine
                    with it: modern voice agents respond in under a second,
                    book appointments accurately, and answer common questions
                    consistently. They still struggle with emotional
                    conversations, heavy background noise, and genuinely
                    unusual requests &mdash; which is why well-configured
                    deployments transfer those moments to a human with the
                    transcript attached.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    What tasks should stay with human staff?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Keep judgment calls, sensitive or emotional conversations,
                    price negotiations, complaints, loyal-customer
                    relationships, and unusual requests with people. AI handles
                    the repetitive volume &mdash; answering, booking, reminders,
                    FAQs, and messages &mdash; while humans handle the moments
                    where empathy, discretion, or negotiation changes the
                    outcome. That split is what the most successful deployments
                    in 2026 converge on.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-light mb-2">
                    How do businesses introduce an AI receptionist to callers?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Simply and honestly. A short disclosure such as
                    &ldquo;This is the automated assistant for
                    [business]&rdquo; at the start of the call, consistent
                    branding, and an instant path to a human when asked.
                    Callers adapt quickly to good AI, and clear disclosure
                    builds trust &mdash; some jurisdictions also require it for
                    call recording, so check local rules before launch.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/ai-receptionist-cost"
                  className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                    How Much Does an AI Receptionist Cost in 2026?
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Real 2026 AI receptionist pricing, the hidden costs most
                    buyers miss, and where flat-rate plans fit.
                  </p>
                </Link>
                <Link
                  href="/blog/ai-voice-agents-for-small-business"
                  className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                    AI Voice Agents for Small Business: Use Cases &amp; ROI
                  </h3>
                  <p className="text-gray-400 text-sm">
                    The highest-ROI voice AI use cases for small businesses
                    &mdash; and the ROI math behind them.
                  </p>
                </Link>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Bottom Line
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                AI won&apos;t replace receptionists &mdash; it replaces the
                missed calls, the hold music, and the after-hours voicemail.
                The businesses winning in 2026 pair an AI first line with
                people who handle the moments that matter:
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Every call answered in two rings, 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Booking, reminders, FAQs, and messages fully automated</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Humans kept for judgment, empathy, and relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Plans from $149/mo with 500 minutes, no contracts</span>
                </li>
              </ul>
              <Link
                href="/ai-receptionist"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                Try an AI Receptionist on Your Own Number
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

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
                    href="/ai-receptionist"
                    className="text-brand-strong hover:text-brand transition-colors"
                  >
                    AI Receptionist →
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
