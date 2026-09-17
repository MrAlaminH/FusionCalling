import type { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";

/* eslint-disable react/no-unescaped-entities */
import { primaryButton } from "@/components/ui/button-styles";

const post = getBlogPost("ai-voice-agents-for-small-business")!;
const teamAuthor = getAuthor("alamin")!;
const faqs = blogFaqs["ai-voice-agents-for-small-business"];

export const metadata: Metadata = buildPostMetadata(post, teamAuthor);

export default function SmallBusinessVoiceAgentsBlogPost() {
  return (
    <>
      <script
        id="small-business-blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogGraph({
              slug: post.slug,
              title: post.title,
              description: post.description,
              image: post.image,
              datePublished: post.date,
              dateModified: post.updated ?? post.date,
              authorSchemaId: teamAuthor.authorSchemaId,
              faqs,
              crumbName: "AI Voice Agents for Small Business: Use Cases & ROI",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="AI Voice Agents for"
        titleHighlight="Small Business"
        dek={
          <>
            Use cases, the ROI math, and why every missed call is real revenue
            walking out the door — a practical, ROI-focused guide for small
            businesses and the agencies that serve them.
          </>
        }
        author={teamAuthor}
        faqs={faqs}
        toc={[
          { id: "hidden-cost", title: "The Hidden Cost of Every Missed Call" },
          { id: "why-missed-calls-hurt", title: "Why Missed Calls Hurt So Much" },
          { id: "top-use-cases", title: "Top Use Cases for Small Businesses" },
          { id: "roi-math", title: "The ROI Math: Before vs After" },
          { id: "for-agencies", title: "For Agencies Serving Small Businesses" },
        ]}
      >
        <div className="space-y-8">
          {/* Introduction — The Hidden Cost */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="hidden-cost" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
              The Hidden Cost of Every Missed Call
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For a small business, the phone isn't just a communication
              channel — it's the sound of revenue. Every incoming call is a
              potential job, a new client, or a repeat booking. The problem is
              that a huge share of those calls never get answered. Lines are
              busy, the front desk is on another call, it's after hours, or
              the single person who picks up stepped out for ten minutes.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each missed call is more than a minor inconvenience. It's a lost
              job that often goes straight to a competitor who happened to
              pick up. Voicemail barely helps — most callers simply hang up
              and dial the next business on the list. Add in nights, weekends,
              and peak hours, and the leak becomes constant.
            </p>
            <p className="text-brand-light text-lg font-semibold">
              <Link href="/glossary/ai-voice-agent" className="underline hover:text-brand transition-colors">
                AI voice agents
              </Link>{" "}
              close that gap by answering every call
              instantly, 24/7 — capturing the revenue that's currently
              slipping away.
            </p>
          </div>

          {/* Stat Strip */}
          <div>
            <h2 id="why-missed-calls-hurt" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Why Missed Calls Hurt So Much
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The numbers tell a familiar story for anyone who has run a small
              business. These are typical industry benchmarks, intended to
              illustrate the problem — not Fusion Calling–specific guarantees.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <p className="text-4xl font-bold text-brand-light mb-2">62%</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  of inbound calls to small businesses go unanswered.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <p className="text-4xl font-bold text-brand-light mb-2">78%</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  of callers hang up after a couple of rings if no one picks
                  up.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <p className="text-4xl font-bold text-brand-light mb-2">60%+</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  of customers call a competitor after an unanswered call.
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-4 italic">
              Figures are illustrative industry estimates to show the scale of
              the missed-call problem.
            </p>
          </div>

          {/* Top Use Cases */}
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="top-use-cases" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Top Use Cases for Small Businesses
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              An AI voice agent isn't just an answering machine. It's a
              front-desk employee that never takes a break. Here's where small
              businesses see the biggest impact:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Missed-Call Recovery</h3>
                  <p className="text-gray-400 text-sm">
                    Every call gets answered, qualified, and routed or booked
                    so revenue stops leaking to voicemail. New to the
                    concept? Start with our{" "}
                    <Link href="/ai-phone-call-automation" className="text-brand-light hover:text-brand transition-colors">
                      guide to AI phone call automation
                    </Link>
                    . This is the core pitch for{" "}
                    <Link href="/industries/ai-voice-for-home-services" className="text-brand-light hover:text-brand transition-colors">
                      home services
                    </Link>{" "}
                    businesses especially.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">24/7 Appointment Booking</h3>
                  <p className="text-gray-400 text-sm">
                    Callers book directly into your calendar at any hour —
                    nights, weekends, and peak hours included. Dental and
                    healthcare clinics live on this: see our{" "}
                    <Link href="/industries/ai-voice-for-dental" className="text-brand-light hover:text-brand transition-colors">
                      AI voice playbook for dental
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Lead Capture & Qualification</h3>
                  <p className="text-gray-400 text-sm">
                    Capture every caller's details and qualify the job before
                    it ever reaches your team. Real estate teams use this to
                    screen buyers and sellers around the clock — see our{" "}
                    <Link href="/industries/ai-voice-for-real-estate" className="text-brand-light hover:text-brand transition-colors">
                      AI voice playbook for real estate
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Reminders & Recall</h3>
                  <p className="text-gray-400 text-sm">
                    Automated appointment reminders and follow-ups cut no-shows
                    and bring lapsed customers back. Run your own numbers with
                    our{" "}
                    <Link href="/calculator" className="text-brand-light hover:text-brand transition-colors">
                      missed-call ROI calculator
                    </Link>{" "}
                    to see what fewer no-shows are worth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">❓</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">FAQ Handling</h3>
                  <p className="text-gray-400 text-sm">
                    Hours, pricing, location, and common questions answered
                    instantly without tying up your staff.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌙</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">After-Hours Coverage</h3>
                  <p className="text-gray-400 text-sm">
                    When you're closed, your agent keeps answering and booking
                    — so after-hours calls become customers, not losses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The ROI Math */}
          <div>
            <h2 id="roi-math" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              The ROI Math: Before vs After
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The case for an AI voice agent comes down to simple arithmetic.
              Compare what happens today with what happens once every call is
              answered (or plug your own numbers into our{" "}
              <Link href="/calculator" className="text-brand-light hover:text-brand transition-colors">
                missed-call ROI calculator
              </Link>
              ):
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📉</span>
                  <h3 className="text-lg font-bold text-gray-300">Before</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Phone rings — no one is available</li>
                  <li>• Call goes to voicemail</li>
                  <li>• Caller hangs up and moves on</li>
                  <li>• A competitor gets the job</li>
                  <li className="text-gray-300 font-semibold">• Revenue lost, every time</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📈</span>
                  <h3 className="text-lg font-bold text-brand-light">After</h3>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Phone rings — agent answers instantly</li>
                  <li>• Agent qualifies the caller</li>
                  <li>• Appointment booked into your calendar</li>
                  <li>• You keep the customer</li>
                  <li className="text-brand-light font-semibold">• Revenue captured, every time</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Now weigh that recovered revenue against the cost. Fusion Calling
              runs from{" "}
              <strong className="text-brand-light">$99 to $499/mo</strong>{" "}
              depending on how many locations or sub-accounts you manage (full
              tier details on our{" "}
              <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                pricing page
              </Link>
              ). For
              most small businesses, recovering a single job per month covers
              the entire subscription — and most recover far more than that.
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
                💡 One recovered job a month usually pays for the plan — the
                rest is recovered revenue you'd otherwise never see.
              </p>
            </div>
          </div>

          {/* For Agencies Serving Small Businesses */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="for-agencies" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              For Agencies Serving Small Businesses
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you run an agency, missed-call recovery and 24/7 booking are
              exactly the problems your small-business clients are losing sleep
              over. Instead of sending them elsewhere, you can offer a branded
              voice AI solution right alongside your other services.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With Fusion Calling, you{" "}
              <strong className="text-brand-light">white-label</strong> the
              entire platform under your own brand — your logo, your domain,
              your pricing. You offer voice AI to your SMB clients, and you
              keep{" "}
              <strong className="text-brand-light">
                100% of what you charge
              </strong>
              . Fusion Calling is simply your subscription; the client revenue
              is entirely yours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Your Brand, Your Clients
                </h3>
                <p className="text-gray-400 text-sm">
                  Apply your logo, colors, and custom domain so every client
                  touchpoint carries your agency's identity — never anyone
                  else's.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Done-With-You Setup
                </h3>
                <p className="text-gray-400 text-sm">
                  Our team helps you connect a provider, apply your branding,
                  and onboard your first clients — typically a launch in
                  24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="glass-light rounded-2xl p-8 border border-brand/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stop Losing Calls, Start Capturing Revenue
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              For a small business, an AI voice agent isn't a luxury — it's the
              difference between a ringing phone that leads to a booked job and
              one that leads to nothing. Fusion Calling is the platform small
              businesses (and the agencies that serve them) use to deploy these
              agents, with support for Vapi, Retell AI, and ElevenLabs so you
              can match the right voice to each use case.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Get started with{" "}
              <strong className="text-brand-light">$0 setup</strong> and a{" "}
              <strong className="text-brand-light">3-day free trial</strong>,
              watch the{" "}
              <Link href="/#show-case" className="text-brand-light hover:text-brand transition-colors">
                live demo on the homepage
              </Link>
              , or apply to white-label
              Fusion Calling for your own clients.
            </p>

            <Link
              href="/whitelabel"
              className={primaryButton}
            >
              Start White-Labeling Fusion Calling
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
