import type { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";
import { primaryButton } from "@/components/ui/button-styles";

/* eslint-disable react/no-unescaped-entities */

const post = getBlogPost("will-ai-replace-receptionists")!;
const teamAuthor = getAuthor("voice-team")!;
const faqs = blogFaqs["will-ai-replace-receptionists"];

export const metadata: Metadata = buildPostMetadata(post, teamAuthor);

export default function WillAIReplaceReceptionistsBlogPost() {
  return (
    <>
      <script
        id="will-ai-replace-receptionists-blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogGraph({
              slug: post.slug,
              title: post.title,
              description: post.description,
              image: post.image,
              datePublished: post.date,
              dateModified: post.updated,
              authorSchemaId: teamAuthor.authorSchemaId,
              faqs,
              crumbName: "Will AI Replace Receptionists? What Actually Changes in 2026",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="Will AI Replace"
        titleHighlight="Receptionists?"
        dek={
          <>
            Mostly no. AI receptionists now take the routine call work &mdash;
            answering every call, booking appointments, and fielding common
            questions &mdash; while human receptionists keep the judgment calls,
            sensitive conversations, and relationships. Here&apos;s what
            actually changes in 2026, for owners and front-desk teams alike.
          </>
        }
        author={teamAuthor}
        faqs={faqs}
        toc={[
          { id: "the-short-answer", title: "The Short Answer" },
          { id: "what-ai-takes-over", title: "What AI Receptionists Take Over" },
          { id: "what-stays-human", title: "What Stays Human" },
          { id: "for-business-owners", title: "What This Means for Business Owners" },
          { id: "for-front-desk-teams", title: "What This Means for Front-Desk Teams" },
          { id: "should-you-hire", title: "Should Your Business Hire an AI Receptionist?" },
        ]}
      >
        <div className="space-y-8">
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="the-short-answer" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
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
            <h2 id="what-ai-takes-over" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="what-stays-human" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="for-business-owners" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="for-front-desk-teams" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="should-you-hire" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
              className={primaryButton}
            >
              See the AI Receptionist Platform
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Conclusion */}
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
              className={primaryButton}
            >
              Try an AI Receptionist on Your Own Number
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
