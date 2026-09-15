import type { Metadata } from "next";
import Link from "next/link";
import { CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { getTeamAuthor } from "@/lib/authors";
import { buildOpenGraph } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-posts";
import { blogFaqs } from "@/lib/blog-faqs";
import { buildBlogGraph } from "@/lib/blog-schema";
import PostLayout from "@/components/blog/PostLayout";
import { primaryButton } from "@/components/ui/button-styles";

/* eslint-disable react/no-unescaped-entities */

const post = blogPosts.find((p) => p.slug === "vapi-white-label-platform")!;
const teamAuthor = getTeamAuthor();
const faqs = blogFaqs["vapi-white-label-platform"];

export const metadata: Metadata = {
  title: "White-Label Vapi: Vapi Alone Isn't Resellable",
  description:
    "Vapi is great voice AI but has no native white-label: you can't resell it under your brand. Fusion Calling adds branding, portals, and billing to resell Vapi.",
  ...buildOpenGraph({
    title: "White-Label Vapi: Vapi Alone Isn't Resellable",
    description:
      "Vapi is excellent voice AI infrastructure, but it has no native white-label. Fusion Calling is the white-label layer that lets agencies resell Vapi under their own brand.",
    path: "/blog/vapi-white-label-platform",
    image: "/blog/blog5.webp",
    type: "article",
    publishedTime: `${post.date}T00:00:00Z`,
    modifiedTime: `${CONTENT_LAST_UPDATED}T00:00:00Z`,
    authors: ["Fusion Calling"],
  }),
};

export default function VapiWhiteLabelBlogPost() {
  return (
    <>
      <script
        id="vapi-blog-schema"
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
              crumbName: "White-Labeling Vapi with Fusion Calling",
            })
          ),
        }}
      />

      <PostLayout
        post={post}
        titleLead="White-Labeling Vapi with"
        titleHighlight="Fusion Calling"
        dek={
          <>
            Vapi is excellent voice AI infrastructure. Fusion Calling is the
            white-label agency layer built to work with it — adding branding,
            client portals, multi-client management, and billing so agencies can
            resell Vapi under their own brand.
          </>
        }
        author={teamAuthor}
        faqs={faqs}
        toc={[
          { id: "why-agencies-love-vapi", title: "Why Agencies Love Vapi — and Where the Gap Is" },
          { id: "what-fusion-adds", title: "What Fusion Calling Adds on Top of Vapi" },
          { id: "how-they-work-together", title: "How Vapi + Fusion Calling Work Together" },
          { id: "who-this-is-for", title: "Who This Is For" },
          { id: "the-economics", title: "The Economics: You Keep 100%" },
        ]}
      >
        <div className="space-y-8">
          <p className="text-brand-light font-semibold">
            Looking to launch your own white-labeled Vapi agency?{" "}
            <Link href="/whitelabel/vapi" className="underline hover:text-brand transition-colors">
              See our white-label Vapi platform
            </Link>
            .
          </p>

          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="why-agencies-love-vapi" className="scroll-mt-28 text-2xl font-bold text-white mb-4">
              Why Agencies Love Vapi — and Where the Gap Is
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <Link href="/glossary/vapi" className="text-brand-light hover:text-brand transition-colors">
                Vapi
              </Link>{" "}
              has become a go-to choice for agencies building voice AI
              practices. It delivers fast, reliable, real-time voice
              infrastructure that handles the hard part of conversational AI —
              speech, latency, telephony, and model orchestration. For the
              engineering that powers great calls, Vapi is genuinely
              excellent.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              But most agencies who build on Vapi hit the same wall: Vapi
              alone isn&apos;t white-label or resellable. It is developer{" "}
              <Link href="/glossary/white-label" className="text-brand-light hover:text-brand transition-colors">
                white-label
              </Link>{" "}
              infrastructure, not a sellable product. To actually turn Vapi
              into something you can charge clients for under your own brand,
              you need a layer on top —{" "}
              <Link href="/whitelabel/vapi" className="text-brand-light hover:text-brand transition-colors">
                Fusion Calling&apos;s white-label Vapi platform
              </Link>{" "}
              — and that layer is what most teams try (and struggle) to build
              themselves.
            </p>
            <p className="text-brand-light text-lg font-semibold">
              That gap is exactly where Fusion Calling fits. We&apos;re built
              with Vapi, not against it.
            </p>
          </div>

          {/* What Fusion Calling Adds */}
          <div>
            <h2 id="what-fusion-adds" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              What Fusion Calling Adds on Top of Vapi
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fusion Calling is the white-label agency layer for Vapi. Most of
              our users come <em>from</em> Vapi — they love the infrastructure
              and use Fusion Calling to turn it into a branded, sellable
              product. Instead of building a custom white-label app yourself
              (typically a $45K project and months of work), Fusion Calling
              gives you everything you need to launch in about 7 days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Branding &amp; Custom Domain
                </h3>
                <p className="text-gray-400 text-sm">
                  Apply your logo, colors, and custom domain so every client
                  touchpoint carries your brand — not someone else&apos;s.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Client Portals
                </h3>
                <p className="text-gray-400 text-sm">
                  Give each client their own branded login to view and manage
                  their voice AI without ever seeing your backend.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Sub-Account Management
                </h3>
                <p className="text-gray-400 text-sm">
                  Run many clients from one dashboard, with isolated
                  sub-accounts, usage, and settings per client.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Client Billing &amp; Rebilling
                </h3>
                <p className="text-gray-400 text-sm">
                  Set your own pricing and bill clients directly. You keep
                  100% of what you charge — Fusion Calling takes no cut.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-brand/20 mt-6">
              <p className="text-gray-300 leading-relaxed">
                The point isn&apos;t to replace Vapi. It&apos;s to save you
                from building a custom white-label application yourself. A
                build-it-yourself approach typically runs about{" "}
                <strong className="text-brand-light">$45K</strong> and takes
                months. With Fusion Calling&apos;s done-with-you setup, most
                agencies launch in about{" "}
                <strong className="text-brand-light">7 days</strong>.
              </p>
            </div>
          </div>

          {/* How They Work Together */}
          <div>
            <h2 id="how-they-work-together" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              How Vapi + Fusion Calling Work Together
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The integration is designed to be straightforward. Fusion
              Calling sits in front of Vapi and handles the agency experience,
              while Vapi keeps powering the actual calls.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Connect your Vapi account</h3>
                  <p className="text-gray-400 text-sm">
                    Bring your existing Vapi account and API key — a{" "}
                    <Link href="/glossary/bring-your-own-key" className="text-brand-light hover:text-brand transition-colors">
                      bring-your-own-key
                    </Link>{" "}
                    model with a one-time connection. You keep the infrastructure
                    you already trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏷️</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Brand it</h3>
                  <p className="text-gray-400 text-sm">
                    Apply your logo, colors, and custom domain so clients see
                    your brand everywhere.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Manage clients</h3>
                  <p className="text-gray-400 text-sm">
                    Spin up isolated sub-accounts and client portals, each
                    with their own usage and settings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💳</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Bill clients</h3>
                  <p className="text-gray-400 text-sm">
                    Set your own pricing, bill clients directly, and keep 100%
                    of what you charge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="glass-light rounded-2xl p-8 border border-brand/20">
            <h2 id="who-this-is-for" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              Who This Is For
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fusion Calling is built for the people who already see the value
              in Vapi and need to make it sellable:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Agencies
                </h3>
                <p className="text-gray-400 text-sm">
                  Marketing, lead-gen, and services agencies adding voice AI
                  to their offering under their own brand.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  Resellers
                </h3>
                <p className="text-gray-400 text-sm">
                  Operators who want to resell voice AI with branded client
                  portals and direct billing — no custom build required.
                </p>
              </div>
              <div className="glass-light rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-bold text-brand-light mb-3">
                  GHL Agencies Using Vapi
                </h3>
                <p className="text-gray-400 text-sm">
                  GoHighLevel agencies already running Vapi who want a
                  white-label layer that ties into their stack.
                </p>
              </div>
            </div>
          </div>

          {/* Economics Note */}
          <div className="glass rounded-2xl p-8 border border-brand/20">
            <h2 id="the-economics" className="scroll-mt-28 text-3xl font-bold text-white mb-6">
              The Economics: You Keep 100%
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fusion Calling is a simple, flat subscription — we don&apos;t
              take a cut of your client revenue. You keep 100% of whatever
              you charge your clients. Your only cost is the Fusion Calling
              subscription (full details on our{" "}
              <Link href="/pricing" className="text-brand-light hover:text-brand transition-colors">
                pricing page
              </Link>
              ):
            </p>

            <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30 mb-6">
              <h3 className="text-xl font-bold text-brand-light mb-4">
                White-Label Tiers
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong>Starter — $99/mo</strong> (6 sub-accounts)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong>Growth — $299/mo</strong> (20 sub-accounts)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>
                    <strong>Scale — $499/mo</strong> (unlimited sub-accounts)
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Beyond Vapi, Fusion Calling also supports Retell AI and
              ElevenLabs, and integrates with GoHighLevel via API and
              webhooks (connecting across 2,200+ apps — see the{" "}
              <Link href="/docs" className="text-brand-light hover:text-brand transition-colors">
                API &amp; webhook docs
              </Link>
              ). You can see it all in
              action on our{" "}
              <Link href="/#show-case" className="text-brand-light hover:text-brand transition-colors">
                live interactive demo
              </Link>{" "}
              on the homepage.
            </p>
          </div>

          {/* Conclusion */}
          <div className="glass-light rounded-2xl p-8 border border-brand/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Built With Vapi, Not Against It
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Vapi built excellent voice AI infrastructure. Fusion Calling
              built the agency layer that lets you resell it under your own
              brand. Most of our users were already on Vapi — they just needed
              branding, client portals, sub-accounts, and billing to turn it
              into a real product.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Instead of spending months and tens of thousands building a
              custom white-label app, you can launch your branded voice AI
              practice in about 7 days with done-with-you onboarding. Ready to
              see the{" "}
              <Link href="/whitelabel/vapi" className="text-brand-light hover:text-brand transition-colors">
                white-label Vapi platform
              </Link>{" "}
              up close?
            </p>
            <Link
              href="/whitelabel"
              className={primaryButton}
            >
              Start White-Labeling Vapi
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </PostLayout>
    </>
  );
}
