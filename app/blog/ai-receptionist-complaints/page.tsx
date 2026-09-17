import type { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";

/* eslint-disable react/no-unescaped-entities */

const post = getBlogPost("ai-receptionist-complaints")!;
const teamAuthor = getAuthor("voice-team")!;
const faqs = blogFaqs["ai-receptionist-complaints"];

export const metadata: Metadata = buildPostMetadata(post, teamAuthor);

function Quote({
  children,
  source,
}: {
  children: React.ReactNode;
  source: string;
}) {
  return (
    <blockquote className="border-l-2 border-brand/50 pl-4 my-4">
      <p className="text-gray-300 italic leading-relaxed">{children}</p>
      <footer className="text-sm text-gray-500 mt-1 not-italic">
        &mdash; {source}
      </footer>
    </blockquote>
  );
}

export default function AIReceptionistComplaintsBlogPost() {
  return (
    <>
      <script
        id="ai-receptionist-complaints-blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogGraph({
              slug: post.slug,
              title: post.title,
              description: post.description,
              image: post.image,
              datePublished: post.date,
              authorSchemaId: teamAuthor.authorSchemaId,
              faqs,
              crumbName: "AI Receptionist Complaints: 55 Real User Reports Analyzed",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="AI Receptionist Complaints:"
        titleHighlight="55 Real User Reports, Analyzed"
        dek={
          <>
            We read 55 individual user reports &mdash; plus 10 more provider
            review pages and two FTC enforcement documents &mdash; across
            Reddit, Trustpilot, and the Apple App Store, all collected on
            September 16, 2026. These are the complaints that come up most, in
            buyers&apos; and callers&apos; own words, and the checklist that
            helps you avoid every one of them when choosing an{" "}
            <Link href="/ai-receptionist" className="text-brand-light hover:text-brand transition-colors">
              AI receptionist
            </Link>
            .
          </>
        }
        author={teamAuthor}
        faqs={faqs}
        toc={[
          { id: "what-we-analyzed", title: "What we analyzed (and how)" },
          { id: "complaint-patterns", title: "The five complaint patterns" },
          { id: "human-fallback", title: "The root cause: no way out" },
          { id: "red-flags", title: "Five red flags to check before buying" },
          { id: "how-fusion-addresses", title: "How Fusion Calling addresses these" },
        ]}
      >
        <div className="space-y-8">
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="what-we-analyzed" className="scroll-mt-28 mb-4">
              What we analyzed (and how)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most of what&apos;s written about AI receptionists comes from the
              companies selling them. We wanted the other side: what actual
              buyers and callers say when no vendor is in the room. So we read{" "}
              <strong>55 individual user reports</strong> &mdash; 42 Reddit
              discussions, 9 Trustpilot reviews, and 4 Apple App Store
              reviews &mdash; plus 10 more provider review pages at summary
              level and two FTC enforcement documents. Everything was collected
              on <strong>September 16, 2026</strong>, and the key sources are
              linked throughout this article.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Being honest about the method: G2 and Capterra block automated
              reading, Reddit cuts off bulk access after a handful of threads,
              and several large Trustpilot profiles (Smith.ai, Synthflow, My AI
              Front Desk) only yielded summary statistics, not individual
              reviews. So this is a snapshot of accessible public sentiment,
              not a scientific survey &mdash; but it involves more primary-source
              reading than any &ldquo;best AI receptionist&rdquo; listicle
              publishes.
            </p>
            <div className="overflow-x-auto rounded-xl border border-brand/30 mb-6">
              <table>
                <thead>
                  <tr>
                    <th>Complaint category</th>
                    <th>Reports</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Failed call handling (hangups, mishearing, rejection)</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>Positive or notable experiences</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>Billing &amp; pricing surprises</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>Integration &amp; setup problems</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Booking &amp; scheduling failures</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Voice quality &amp; latency</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Sales overpromising</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Support quality</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Two things to know before reading on. First, per-provider counts
              in our sample are too small to rank vendors &mdash; the value is in
              the <em>patterns</em>, not the brands. Second, we deliberately
              kept the 16 positive reports (29% of the sample) so this isn&apos;t
              a hit piece: the happy users are the ones who explain what
              separates working deployments from disasters.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="complaint-patterns" className="scroll-mt-28 mb-4">
              The five complaint patterns that repeat
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3">
              1. Callers hang up on the AI &mdash; and the business never finds out (9 reports)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              The most common failure in the sample isn&apos;t a robotic voice
              or a wrong answer. It&apos;s a caller giving up, hanging up, and
              quietly calling a competitor &mdash; with no message taken and no
              trace left behind:
            </p>
            <Quote source="Sona (by Quo/OpenPhone) user, r/quo">
              &ldquo;Having issues with Sona as well. All my callers get
              frustrated and hang up on it.&rdquo;
            </Quote>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;We tested one on our HVAC line and it hung up on 3
              people&hellip; only found out because they called back angry.&rdquo;
            </Quote>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;Mine also randomly hung up mid conversation. It sounded so
              real that people thought the business owner hung up on them.&rdquo;
            </Quote>
            <p className="text-gray-300 leading-relaxed">
              The customer side shows up too &mdash; an entire r/sales thread
              asks{" "}
              <a
                href="https://www.reddit.com/r/sales/comments/1to9799/anyone_else_hang_up_when_the_receptionist_is_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-light hover:text-brand transition-colors underline decoration-brand/40"
              >
                &ldquo;Anyone else instantly hang up when you call a business
                and the receptionist is AI?&rdquo;
              </a>{" "}
              What makes this the worst failure mode: unlike a wrong answer,
              an abandoned call generates no transcript, no log, and no signal
              that you just lost a customer.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-8">
              2. Misunderstanding, glitches, and endless loops (5+ reports)
            </h3>
            <Quote source="dentist, r/Dentists">
              &ldquo;It glitches, it misunderstands you, it sends you in
              endless loops. Just absolutely not.&rdquo;
            </Quote>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;It handled booking great but completely failed at anything
              that wasn&apos;t on the script.&rdquo;
            </Quote>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;We spent weeks building the knowledge base and it still
              asks people to repeat themselves.&rdquo;
            </Quote>
            <p className="text-gray-300 leading-relaxed">
              The pattern behind these: agents tuned for a happy path that
              callers don&apos;t stay on. When real speech &mdash; accents,
              interruptions, unusual requests &mdash; falls off that path, a
              badly configured agent repeats itself instead of handing off.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-8">
              3. Usage-based billing shocks (7 reports)
            </h3>
            <Quote source="Sona (by Quo/OpenPhone) user, r/quo">
              &ldquo;A 20 to 30 second inbound call that&apos;s basically a
              quick exchange shouldn&apos;t cost the same as a 5+ minute,
              multi-turn conversation.&rdquo;
            </Quote>
            <Quote source="Goodcall reviewer, Trustpilot, Dec 2023">
              &ldquo;They promise new members a free account forever but now
              they have changed their access to the voicemail access&hellip;
              They are asking for nearly $60 per month to now access the
              calls.&rdquo;
            </Quote>
            <Quote source="Air AI reviewer, Trustpilot">
              &ldquo;This team promises, does not deliver, keeps everyone
              waiting for refunds until they sell someone else&hellip; I waited
              9 months for my refund that was promised.&rdquo;
            </Quote>
            <p className="text-gray-300 leading-relaxed">
              Credits, per-call minimums, and usage tiers are where the gap
              between advertised and actual price lives. We broke down how
              overages and setup fees work in our{" "}
              <Link href="/blog/ai-receptionist-cost" className="text-brand-light hover:text-brand transition-colors">
                AI receptionist cost guide
              </Link>{" "}
              &mdash; the short version: get the overage rate and billing
              granularity in writing before you sign.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-8">
              4. Booking failures: wrong service, double-bookings, loop-backs (3 reports)
            </h3>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;It booked a roofing inspection for a customer who wanted a
              cleaning. Total miss. I watched the transcript and the AI just
              confidently confirmed the wrong service.&rdquo;
            </Quote>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;I canceled after it double booked two jobs on the same
              day. No apology, just another appointment to fix.&rdquo;
            </Quote>
            <Quote source="dental office manager, r/Dentists">
              &ldquo;Between 3&ndash;5 callers looping back into reception
              because they can&apos;t see the date/time they want.&rdquo;
            </Quote>
            <p className="text-gray-300 leading-relaxed">
              A booking agent that misreads intent creates work instead of
              saving it &mdash; the double-booked job costs more to unwind than
              a missed call would have.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-8">
              5. The demo-vs-reality gap (4 reports)
            </h3>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;The sales demo sounds flawless because they pre-record or
              heavily tune that flow. Your real deployment is way messier.&rdquo;
            </Quote>
            <Quote source="Goodcall reviewer, Trustpilot, Jan 2025">
              &ldquo;Goodcall starts immediately with upsell options to service
              I don&apos;t want or need. There is no interaction, just a
              constant sales pitch.&rdquo;
            </Quote>
            <p className="text-gray-300 leading-relaxed mb-2">
              And one buyer discovered the gap from the other side &mdash; a
              patient, not an owner:
            </p>
            <Quote source="patient, r/Dentists">
              &ldquo;I just discovered my dentist office is using AI front desk
              agents when I called to speak with the front desk&hellip; I am
              likely going to look for another dentist.&rdquo;
            </Quote>
            <p className="text-gray-300 leading-relaxed">
              Deploying AI on the main line without telling staff &mdash; or
              callers &mdash; is a choice, and it backfires.
            </p>

            <div className="glass-light rounded-xl p-6 border border-red-500/20 mt-6">
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong className="text-white">
                  The rarest pattern is the most expensive: emergency triage.
                </strong>{" "}
                Two reports in the sample describe AI agents that treated
                urgent calls as routine:
              </p>
              <Quote source="business owner, r/aiToolForBusiness">
                &ldquo;Had an AI answer our emergency call for a burst pipe and
                schedule an appointment for next week. We ended up paying for
                water damage.&rdquo;
              </Quote>
              <Quote source="business owner, r/aiToolForBusiness">
                &ldquo;The AI tried to transfer a customer to our cell phones
                at 2 AM. None of us picked up and the customer thought they
                were ghosted.&rdquo;
              </Quote>
              <p className="text-gray-300 leading-relaxed">
                An agent that can&apos;t recognize an emergency doesn&apos;t
                just lose a lead &mdash; it converts a caller into a liability.
              </p>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="human-fallback" className="scroll-mt-28 mb-4">
              The root cause behind most of these complaints: no way out
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Re-read the quotes above and notice what&apos;s actually being
              complained about. Very few are &ldquo;the AI sounded robotic.&rdquo;
              Almost all of them are <strong>the AI had no graceful
              exit</strong>: it hung up instead of taking a message, repeated
              itself instead of transferring, booked next Tuesday instead of
              flagging an emergency.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The users in our sample who are happy with their AI receptionist
              say this explicitly. They&apos;re the ones who configured the
              exit:
            </p>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;It&apos;s why I always recommend having a fallback human
              option&hellip; The receptionist AI can handle basic stuff, but the
              moment it hits something weird it needs to hand off fast.&rdquo;
            </Quote>
            <Quote source="business owner, r/aiToolForBusiness">
              &ldquo;We ended up turning it off for new customers and only
              using it for after hours&hellip; For regular hours, customers want
              a human or at least the option of one.&rdquo;
            </Quote>
            <Quote source="dentist, r/Dentists">
              &ldquo;Most patients would rather be picked up by an AI than not
              picked up at all!&rdquo;
            </Quote>
            <Quote source="dental practice, r/Dentistry">
              &ldquo;Way better than just dumping people into voicemail.&rdquo;
            </Quote>
            <p className="text-gray-300 leading-relaxed mb-4">
              The App Store reviews agree &mdash; Rosie users write{" "}
              <em>&ldquo;SO much better (and cheaper) than the call center we
              were using&rdquo;</em> and <em>&ldquo;good for after hours after
              I leave the shop.&rdquo;</em> Even on the provider side, the
              single 5-star Trustpilot review in our sample (Vapi) praises
              exactly this: a technician who{" "}
              <em>&ldquo;helped me through a couple of things and also set up a
              follow-up call the next day.&rdquo;</em>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              So the dividing line isn&apos;t AI versus human &mdash; it&apos;s{" "}
              <strong>designed versus dumped</strong>. Before you turn any
              agent live, four things must be configured:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Scope.</strong> A written list of what the agent
                  handles (booking, FAQs, messages) and what it never touches.
                  One owner put it best:{" "}
                  <em>&ldquo;the tech works when the business clearly defines
                  what it should and shouldn&apos;t do. Most just turn it on and
                  hope for the best.&rdquo;</em>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Escalation triggers.</strong> Transfer to a human on
                  caller request, after two consecutive misunderstandings, on
                  emotional or upset language, and on emergency keywords
                  (&ldquo;burst pipe&rdquo;, &ldquo;bleeding&rdquo;, &ldquo;emergency&rdquo;).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>After-hours rules.</strong> A 2 AM transfer to an
                  unanswered cell is the same as a hangup &mdash; decide who
                  actually gets pinged and what the agent says when nobody
                  picks up.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Weekly transcript review.</strong> Every failure
                  pattern in this article is visible in transcripts within days
                  of launch. The businesses that read them fix the top gap and
                  compound; the ones that don&apos;t end up as the angry
                  call-back in someone else&apos;s case study.
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Notice also what did <em>not</em> appear in our sample: complaints
              about recording consent or AI disclosure. That&apos;s one area
              where being proactive matters anyway &mdash; the legal landscape
              is changing fast, which we cover in our{" "}
              <Link href="/blog/voice-ai-security-compliance" className="text-brand-light hover:text-brand transition-colors">
                voice AI security &amp; compliance guide
              </Link>
              .
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="red-flags" className="scroll-mt-28 mb-4">
              Five red flags the reviews teach you to check before buying
            </h2>
            <ul className="space-y-4 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong>Usage or credit pricing without per-second detail.</strong>{" "}
                  The single largest billing complaint in the sample. Ask for
                  the overage rate, billing granularity, and what counts as a
                  billable call &mdash; in writing &mdash; or choose a flat-rate plan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong>A demo recorded on their script.</strong> If the demo
                  can&apos;t be run live against your own phone number with
                  your scenarios &mdash; interruptions, background noise, an
                  accent, an emergency phrase &mdash; assume it was tuned for
                  the recording.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong>Walls of short 5-star onboarding reviews.</strong>{" "}
                  In our sample, AnswerForce shows 5.0 from 774 Trustpilot
                  reviews &mdash; almost all brief onboarding-era praise &mdash;
                  while grassroots community sentiment for the category is far
                  more mixed. Trustpilot averages among providers we checked
                  ranged from 1.2 to 5.0. Always read the 1-star filter and
                  recent community threads before the rating.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong>No human-escalation configuration.</strong> If a
                  vendor can&apos;t show you, on a live call, exactly how their
                  agent hands off to a person &mdash; and what happens when
                  nobody&apos;s available &mdash; walk away. That&apos;s the
                  burst-pipe scenario.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong>Cancellation and refund terms you haven&apos;t
                  read.</strong> One Vapi reviewer complained there&apos;s{" "}
                  <em>&ldquo;no way to remove or cancel your account&hellip;
                  run by bots and not humans.&rdquo;</em> And the category has
                  a documented worst case: the{" "}
                  <a
                    href="https://www.ftc.gov/news-events/news/press-releases/2026/03/air-ai-its-owners-will-be-banned-marketing-business-opportunities-settle-ftc-charges-company-misled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light hover:text-brand transition-colors underline decoration-brand/40"
                  >
                    FTC&apos;s case against Air AI
                  </a>{" "}
                  (filed August 2025, settlement announced March 2026) alleges
                  false earnings and refund claims and resulted in an $18
                  million judgment and a ban on marketing business
                  opportunities. Prefer month-to-month terms with no
                  long-term contract.
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Every one of these checks takes minutes. Compare it to what the
              unhappy users in our sample paid to learn them: refunds waited on
              for months, double-booked schedules, and one business owner who
              concluded it was <em>&ldquo;cheaper to hire someone part time
              than to keep fixing the AI&apos;s mistakes.&rdquo;</em>
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="how-fusion-addresses" className="scroll-mt-28 mb-4">
              How Fusion Calling is designed around these exact complaints
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We built Fusion Calling after seeing these failure modes firsthand,
              so each one maps to a design decision:
            </p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Human handoff with full context.</strong> When a call
                  exceeds the agent&apos;s scope &mdash; caller request, repeated
                  confusion, emotional language, emergency keywords &mdash; it
                  transfers to a person with a summary, the caller&apos;s
                  details, and the reason for the handoff. No silent hangups,
                  no loops.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Flat monthly pricing, $0 setup, no contracts.</strong>{" "}
                  Business plans run $149/mo with 500 included minutes to
                  $497/mo with 2,100 minutes &mdash; no credits to decode, and
                  month-to-month terms mean you&apos;re never trapped{" "}
                  <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                    (full pricing details)
                  </Link>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>Try it before you buy it.</strong> Our homepage demo
                  is live and unscripted &mdash; interrupt it, feed it noise,
                  try to break it. During onboarding we test with your real
                  scenarios before anything goes live, and{" "}
                  <Link href="/calculator" className="text-brand-light hover:text-brand transition-colors">
                    the ROI calculator
                  </Link>{" "}
                  shows the math with your numbers, not ours.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong>No vendor lock-in.</strong> Fusion is a layer over
                  Vapi, Retell, and ElevenLabs &mdash; bring your own agents or
                  accounts, switch engines per client, and export your work.
                  The cancellation-friction complaints in our sample simply
                  can&apos;t happen here by design.
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              If you&apos;re an agency, all of this carries over to your
              clients through the{" "}
              <Link href="/whitelabel/reseller-program" className="text-brand-light hover:text-brand transition-colors">
                white-label reseller program
              </Link>{" "}
              from $99/mo &mdash; including the escalation config and transcript
              reviews your clients will judge you on. And if you&apos;re
              weighing AI against other options, start with the{" "}
              <Link href="/blog/ai-receptionist-cost" className="text-brand-light hover:text-brand transition-colors">
                real cost breakdown
              </Link>
              , then hear the difference yourself on the live demo.
            </p>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
