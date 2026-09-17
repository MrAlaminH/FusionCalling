import type { Metadata } from "next";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { getBlogPost } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph, buildPostMetadata } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";

/* eslint-disable react/no-unescaped-entities */
import { primaryButton } from "@/components/ui/button-styles";

const post = getBlogPost("how-to-start-a-voice-ai-agency")!;
const teamAuthor = getAuthor("alamin")!;
const faqs = blogFaqs["how-to-start-a-voice-ai-agency"];

export const metadata: Metadata = buildPostMetadata(post, teamAuthor);

export default function StartVoiceAIAgencyBlogPost() {
  return (
    <>
      <script
        id="start-agency-blog-schema"
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
              crumbName: "How to Start a Voice AI Agency in 2026",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="How to Start a Voice AI Agency"
        titleHighlight="in 2026"
        dek={
          <>
            The smart way to launch a voice AI agency business isn&apos;t to build
            voice infrastructure from scratch &mdash; it&apos;s to partner with a{" "}
            <Link href="/glossary/white-label" className="text-brand-light hover:text-brand transition-colors">
              white-label
            </Link>{" "}
            platform through an{" "}
            <Link href="/whitelabel/reseller-program" className="text-brand-light hover:text-brand transition-colors">
              AI voice agent reseller program
            </Link>{" "}
            and resell under your own brand. Here&apos;s the step-by-step
            playbook.
          </>
        }
        author={teamAuthor}
        faqs={faqs}
        toc={[
          { id: "why-2026", title: "Why 2026 Is the Moment for Voice AI Agencies" },
          { id: "white-label-shortcut", title: "The White-Label Shortcut: Don't Build, Partner" },
          { id: "step-by-step", title: "Step-by-Step: Launch Your Voice AI Agency" },
          { id: "what-you-need", title: "What You Need to Get Started" },
          { id: "common-mistakes", title: "Common Mistakes to Avoid" },
        ]}
      >
        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="why-2026" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
              Why 2026 Is the Moment for Voice AI Agencies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Voice AI has crossed the line from novelty to necessity. Businesses
              in every vertical &mdash; from real estate offices juggling after-hours
              leads to dental clinics trying to stop missed calls &mdash; are actively
              looking for someone to handle their phone conversations with AI. The
              demand is here. The question is who captures it.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Three forces make 2026 the breakout year to start a voice AI agency:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-white">Demand.</strong> Small businesses
                  miss an estimated 60% of inbound calls. Every missed call is lost
                  revenue, and owners finally understand it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-white">Margins.</strong> Voice AI is sold
                  as a high-value service (not a commodity), so you keep healthy
                  margins on every client you onboard.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-white">Recurring revenue.</strong> Voice
                  AI is billed monthly, which means your agency compounds into a
                  predictable, sellable book of business.
                </span>
              </li>
            </ul>
            <p className="text-brand-light text-lg font-semibold">
              The winners in 2026 won&apos;t be the agencies that build voice
              infrastructure &mdash; they&apos;ll be the ones that distribute it.
            </p>
          </div>

          {/* The White-Label Shortcut */}
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="white-label-shortcut" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              The White-Label Shortcut: Don&apos;t Build, Partner
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The single biggest mistake new agency owners make is trying to build
              voice infrastructure from scratch &mdash; wiring up telephony,
              stitching together STT, LLMs, and TTS, managing carrier compliance,
              and re-inventing agent tooling. That&apos;s a 12-month engineering
              project before you sign a single client.
            </p>

            <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30 mb-6">
              <h3 className="text-xl font-bold text-brand-light mb-4">
                The Partner-First Model
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    Don&apos;t build infra &mdash; partner with a white-label
                    platform that already integrates the best providers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    Sell voice AI under <strong>your own brand</strong>, with your
                    own pricing, your own domain, and your own client relationships.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    You keep <strong>100% of client revenue</strong> &mdash; the
                    platform is just the enablement layer underneath.
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Fusion Calling formalizes this with an{" "}
                <Link href="/whitelabel/reseller-program" className="text-brand-light hover:text-brand transition-colors">
                  AI voice agent reseller program
                </Link>{" "}
                with tiers from $99/month.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Fusion Calling is that enablement layer: it plugs into Vapi, Retell
              AI, and ElevenLabs, gives you a white-label dashboard, sub-accounts,
              and done-with-you onboarding &mdash; so you can focus on selling and
              growing instead of debugging telephony.
            </p>
          </div>

          {/* Step-by-Step */}
          <div>
            <h2 id="step-by-step" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Step-by-Step: Launch Your Voice AI Agency
            </h2>

            <div className="space-y-4">
              <div className="glass-light rounded-2xl p-8 border border-brand/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">
                  1. Pick a White-Label Platform
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Choose a platform that&apos;s multi-provider (so you&apos;re never
                  locked in), offers done-with-you setup, and has a live interactive
                  demo you can actually sell from. Fusion Calling checks all three:
                  Vapi + Retell + ElevenLabs out of the box, hands-on onboarding,
                  and a{" "}
                  <Link href="/#show-case" className="text-brand-light hover:text-brand transition-colors">
                    live demo on the homepage
                  </Link>{" "}
                  you can walk prospects through.
                </p>
              </div>

              <div className="glass-light rounded-2xl p-8 border border-brand/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">
                  2. Choose a Niche or Industry
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Generalists starve; specialists scale. Pick one vertical to dominate
                  first &mdash; real estate, dental, home services, legal, HVAC, or
                  MedSpa are all proven. Each niche has the same pain (missed calls =
                  lost revenue) but a different script, vocabulary, and price point.
                  Start narrow, build a repeatable template, then expand.{" "}
                  <Link href="/industries" className="text-brand-light hover:text-brand transition-colors">
                    Browse the industries we&apos;ve mapped out
                  </Link>{" "}
                  to find your wedge.
                </p>
              </div>

              <div className="glass-light rounded-2xl p-8 border border-brand/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">
                  3. Set Your Pricing &amp; Packages
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  This is the part traditional reseller programs get wrong. With a
                  white-label model, <strong>you keep 100% of what you charge
                  clients</strong>. Your only cost is your{" "}
                  <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                    platform subscription
                  </Link>{" "}
                  ($99&ndash;$499/mo depending on tier). Build 2&ndash;3 packages
                  (e.g. a starter plan for solo operators, a growth plan for
                  multi-location businesses) and price by value, not by minutes.
                  Not sure what a client is worth? Model it with the{" "}
                  <Link href="/calculator" className="text-brand-light hover:text-brand transition-colors">
                    voice AI ROI calculator
                  </Link>
                  .
                </p>
              </div>

              <div className="glass-light rounded-2xl p-8 border border-brand/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">
                  4. Build Your First Agent
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Don&apos;t start from a blank canvas. Use a niche template, customize
                  the greeting and qualification questions, connect a number, and test.
                  With done-with-you onboarding, most partners get a production-ready
                  agent live in about <strong>7 days</strong> &mdash; no code required.
                </p>
              </div>

              <div className="glass-light rounded-2xl p-8 border border-brand/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">
                  5. Land Your First Client
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Selling voice AI is easiest when you can show, not tell. Use the{" "}
                  <Link href="/#show-case" className="text-brand-light hover:text-brand transition-colors">
                    live interactive demo
                  </Link>{" "}
                  to let a prospect actually <em>talk</em> to an
                  agent on a real number. Walk them through a missed-call recovery
                  scenario for their own business. A 5-minute live demo closes more
                  deals than any slide deck.
                </p>
              </div>

              <div className="glass-light rounded-2xl p-8 border border-brand/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">
                  6. Scale: Clients, Sub-Accounts, Verticals
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Once the first client is live and happy, repeat. Add clients into
                  dedicated sub-accounts so each one is isolated and billable
                  separately. Then layer on a second vertical, a second agent per
                  client, or premium packages. The platform scales with you &mdash;
                  from 6 sub-accounts on Starter all the way to unlimited on Scale.
                </p>
              </div>
            </div>
          </div>

          {/* What You Need to Get Started */}
          <div>
            <h2 id="what-you-need" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              What You Need to Get Started
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Less than you think. Here&apos;s the actual shortlist:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧩</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">A White-Label Platform</h3>
                  <p className="text-gray-400 text-sm">
                    A multi-provider platform like Fusion Calling that handles
                    telephony, providers, and the dashboard under your brand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">A Chosen Niche</h3>
                  <p className="text-gray-400 text-sm">
                    One industry you understand and can speak to, so your demos and
                    scripts feel native to the prospect.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">A CRM or Stack to Plug Into</h3>
                  <p className="text-gray-400 text-sm">
                    Fusion Calling integrates with GoHighLevel via API and webhooks,
                    connecting to 2,200+ apps so agents slot into your clients&apos;
                    existing workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎙️</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">A Live Demo You Can Sell From</h3>
                  <p className="text-gray-400 text-sm">
                    A real, working agent on a real number so prospects can call in
                    and experience it themselves in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Mistakes to Avoid */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="common-mistakes" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
              Common Mistakes to Avoid
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Building instead of partnering.</strong>{" "}
                  Every month you spend wiring telephony is a month of lost client
                  revenue. Partner first.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Picking too broad a niche.</strong>{" "}
                  &ldquo;Anyone with a phone&rdquo; isn&apos;t a niche. Own one
                  vertical before expanding.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Pricing by the minute.</strong>{" "}
                  Sell outcomes and subscriptions, not call minutes &mdash; that&apos;s
                  how you protect margins.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                <span>
                  <strong className="text-white">Skipping the live demo.</strong>{" "}
                  Talking about AI never beats letting a prospect call an agent and
                  hear it for themselves.
                </span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="glass-light rounded-2xl p-8 border border-brand/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Voice AI Agency This Week
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              2026 is the year voice AI goes mainstream &mdash; and the agencies that
              move now will own the relationships. You don&apos;t need to build
              infrastructure, raise funding, or hire engineers. You need a white-label
              partner, a niche, and a live demo. Fusion Calling gives you the platform
              so you can:
            </p>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>Offer Vapi, Retell, and ElevenLabs under your own brand</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>Keep 100% of what you charge clients</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>Launch your first agent in about 7 days</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                <span>Start on the AI voice agent reseller program from $99/mo with $0 setup and a 3-day free trial</span>
              </li>
            </ul>

            <Link
              href="/whitelabel/reseller-program"
              className={primaryButton}
            >
              Join the AI Voice Agent Reseller Program
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
