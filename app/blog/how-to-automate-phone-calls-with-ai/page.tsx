import type { Metadata } from "next";
import Link from "next/link";
import { getTeamAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";

/* eslint-disable react/no-unescaped-entities */
import { primaryButton } from "@/components/ui/button-styles";

const post = getBlogPost("how-to-automate-phone-calls-with-ai")!;
const teamAuthor = getTeamAuthor();
const faqs = blogFaqs["how-to-automate-phone-calls-with-ai"];

export const metadata: Metadata = buildPostMetadata(post, teamAuthor);

export default function HowToAutomatePhoneCallsWithAI() {
  return (
    <>
      <script
        id="how-to-automate-calls-blog-schema"
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
              crumbName: "How to Automate Phone Calls with AI: Setup to First Live Call",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="How to Automate Phone Calls with AI"
        titleHighlight="Setup to First Live Call"
        dek={
          <>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              AI call automation means an AI voice agent answers or makes phone
              calls for your business. It speaks in plain speech. It books,
              answers questions, and takes messages. This guide shows the five
              steps from setup to your first live call.
            </p>
            <p className="text-brand-light font-semibold mb-8">
              New to the topic? Start with our{" "}
              <Link href="/ai-phone-call-automation" className="underline hover:text-brand transition-colors">
                guide to AI call automation
              </Link>
              .
            </p>
          </>
        }
        author={teamAuthor}
        faqs={faqs}
        toc={[
          { id: "what-ai-call-automation-does", title: "What AI Call Automation Does" },
          { id: "step-1-pick-one-use-case", title: "Step 1: Pick One Use Case" },
          { id: "step-2-connect-number-calendar-crm", title: "Step 2: Connect Your Number, Calendar, and CRM" },
          { id: "step-3-add-knowledge-pick-voice", title: "Step 3: Add Business Knowledge and Pick a Voice" },
          { id: "step-4-make-test-calls", title: "Step 4: Make Test Calls" },
          { id: "step-5-launch-handoff-rules", title: "Step 5: Launch with Handoff Rules" },
          { id: "costs-and-timeline", title: "What It Costs and How Long It Takes" },
        ]}
      >
        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="what-ai-call-automation-does" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
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
            <h2 id="step-1-pick-one-use-case" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="step-2-connect-number-calendar-crm" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="step-3-add-knowledge-pick-voice" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="step-4-make-test-calls" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="step-5-launch-handoff-rules" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
            <h2 id="costs-and-timeline" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
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
              className={primaryButton}
            >
              See Plans and Start
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
