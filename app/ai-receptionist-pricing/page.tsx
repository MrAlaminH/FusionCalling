import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import { comparisons } from "@/lib/comparisons";
import { WHOLESALE_STARTER } from "@/lib/product-facts";
import { breadcrumbSchema, articleSchema, faqSchema, buildOpenGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";
import { PAGE_UPDATED } from "@/lib/page-updated";

const title = "AI Receptionist Pricing: 2026 Benchmark";
const description =
  "What AI receptionists cost in 2026: entry prices for 21 voice AI platforms, the median published plan, what changes the price, and how flat-rate reseller plans compare.";

const pageUpdated = PAGE_UPDATED["/ai-receptionist-pricing"];

// Parse "$120/mo (3 clients)" / "~$125/mo (verify current)" / "From ~$255/mo"
// into a monthly number. "Pro (annual)" style entries still state a monthly
// rate, so they parse. Usage-based, /yr-only, and quote-only entries stay
// unparsed and are excluded from the stats (counted and shown with raw text).
function parseMonthlyPrice(raw: string): number | null {
  const m = raw.match(/\$~?(\d[\d,]+)\s*\/\s*mo/i);
  return m ? Number(m[1].replace(/,/g, "")) : null;
}

type Row = {
  slug: string;
  name: string;
  emoji: string;
  entry: string;
  onboarding: string;
  monthly: number | null;
};

function buildRows(): Row[] {
  const rows = comparisons.map((c) => {
    const entryRow = c.comparisonRows.find(
      (r) => r.label === "Starting monthly cost",
    );
    const onboardingRow = c.comparisonRows.find(
      (r) => r.label === "Onboarding model",
    );
    const entry = entryRow?.competitor ?? "See current pricing";
    return {
      slug: c.slug,
      name: c.competitorName,
      emoji: c.heroEmoji,
      entry,
      onboarding: onboardingRow?.competitor ?? "—",
      monthly: parseMonthlyPrice(entry),
    };
  });
  // Fusion's own row comes from product-facts so it can never contradict /pricing.
  rows.push({
    slug: "",
    name: "Fusion Calling",
    emoji: "🚀",
    entry: `$${WHOLESALE_STARTER.price}/mo (${WHOLESALE_STARTER.subAccounts} sub-accounts)`,
    onboarding: "Guided, 24 hours",
    monthly: WHOLESALE_STARTER.price,
  });
  return rows.sort((a, b) => {
    if (a.monthly === null) return 1;
    if (b.monthly === null) return -1;
    return a.monthly - b.monthly;
  });
}

const rows = buildRows();
const parsed = rows
  .filter((r) => r.monthly !== null)
  .map((r) => r.monthly as number)
  .sort((a, b) => a - b);
const median =
  parsed.length % 2 === 1
    ? parsed[(parsed.length - 1) / 2]
    : Math.round((parsed[parsed.length / 2 - 1] + parsed[parsed.length / 2]) / 2);
const unparsedCount = rows.length - parsed.length;

const quickAnswer = `Most voice AI platforms hide their entry price: only ${parsed.length} of ${rows.length} we track publish a monthly plan, and those cluster between $${Math.min(
  ...parsed,
)} and $${Math.max(...parsed)} per month (median $${median}). Usage-metered engines add $0.05–$0.33 per minute on top. Fusion Calling publishes all plans: $99–$499/mo with sub-accounts included.`;

const faqs = [
  {
    question: "How much does an AI receptionist cost per month?",
    answer: `Entry plans from providers that publish pricing run $${Math.min(
      ...parsed,
    )}–$${Math.max(
      ...parsed,
    )} per month (median $${median} across ${parsed.length} platforms, October 2026). Budget tiers usually include a single client or portal; plans that include multiple client sub-accounts start around $99/mo. Usage-metered platforms bill separately per minute — roughly $0.05/min platform fees plus $0.23–$0.33/min all-in once speech, language, and telephony costs are added.`,
  },
  {
    question: "Why do AI receptionist prices vary so much?",
    answer:
      "Three things drive the spread: what's bundled (a single workspace vs. client sub-accounts and rebilling), how you pay (flat monthly vs. per-minute usage), and who it's sold to (self-serve vs. sales-led enterprise contracts). The cheapest plans are single-client; white-label plans with sub-accounts cost more but are built for agencies reselling to multiple clients.",
  },
  {
    question: "Which platforms publish their pricing publicly?",
    answer: `Of the ${rows.length - 1} platforms in this benchmark, ${parsed.length - 1} plus Fusion Calling list a monthly entry price on their site. The rest quote usage-based rates, custom enterprise contracts, or no public pricing at all — the table above shows each platform's exact status.`,
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/ai-receptionist-pricing" }),
};

export default function PricingBenchmarkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Receptionist Pricing", path: "/ai-receptionist-pricing" },
      ]),
      articleSchema({
        path: "/ai-receptionist-pricing",
        name: title,
        headline: "AI Receptionist Pricing: The 2026 Benchmark",
        description,
        datePublished: pageUpdated,
        dateModified: pageUpdated,
      }),
      faqSchema(faqs, `${SITE_URL}/ai-receptionist-pricing#faqpage`),
    ],
  };

  return (
    <>
      <script
        id="ai-receptionist-pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="min-h-screen w-full bg-black">
        <Navbar />

        {/* Hero */}
        <section className="relative w-full bg-gradient-to-b from-zinc-950 via-black to-black pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-4">
              2026 Market Benchmark
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Receptionist Pricing
              </span>
              , Compared
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Entry prices for {rows.length} voice AI platforms — what&apos;s
              public, what&apos;s hidden, and what actually changes the bill.
              Collected from each platform&apos;s own pricing pages and
              comparison data in October 2026.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Updated{" "}
              {new Date(`${pageUpdated}T00:00:00Z`).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </p>
          </div>
        </section>

        {/* Quick answer */}
        <section className="w-full bg-black pb-4" aria-label="Quick answer">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="glass-light rounded-2xl border border-brand/30 p-6 md:p-8">
              <h2 className="text-lg font-bold text-white mb-3">Quick answer</h2>
              <p className="text-gray-300 leading-relaxed">{quickAnswer}</p>
            </div>
          </div>
        </section>

        {/* The benchmark table */}
        <section id="benchmark" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Entry prices by platform
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl">
              The cheapest publicly listed plan per platform, quoted exactly as
              each platform states it. Monthly-published plans sort first;
              everything else follows with its exact status.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[680px] text-sm">
                <caption className="sr-only">
                  AI receptionist platform entry prices as of October 2026,
                  sorted by published monthly price
                </caption>
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-400">
                      Platform
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-400">
                      Entry price (as published)
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-400">
                      Onboarding
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.name}
                      className={`border-b border-white/5 last:border-b-0 ${
                        row.name === "Fusion Calling"
                          ? "bg-brand/[0.06]"
                          : ""
                      }`}
                    >
                      <th scope="row" className="px-4 py-3 text-left font-medium text-gray-200">
                        <span className="mr-2" aria-hidden>
                          {row.emoji}
                        </span>
                        {row.slug ? (
                          <Link
                            href={`/alternative/${row.slug}`}
                            className="hover:text-brand-light transition-colors"
                          >
                            {row.name}
                          </Link>
                        ) : (
                          row.name
                        )}
                      </th>
                      <td className="px-4 py-3 text-gray-300">{row.entry}</td>
                      <td className="px-4 py-3 text-gray-400">{row.onboarding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Methodology & limitations */}
        <section id="methodology" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How this was calculated
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-200">Method.</strong> We tracked
                the &quot;starting monthly cost&quot; each platform states on
                its own pricing page or in its plans documentation, as captured
                in our comparison data ({comparisons.length} platforms,
                October 2026). Where a plan is advertised per client or per
                portal, we quote it exactly as published. Monthly-published
                dollar figures were extracted programmatically; annual-only,
                per-minute, and quote-only entries are shown verbatim and
                excluded from the statistics.
              </p>
              <p>
                <strong className="text-gray-200">Findings.</strong> {parsed.length}{" "}
                of {rows.length} platforms publish a monthly entry price:
                median <strong className="text-gray-200">${median}/mo</strong>,
                range ${Math.min(...parsed)}–${Math.max(...parsed)}/mo. The{" "}
                {unparsedCount} remaining platforms either bill per minute,
                quote custom contracts, or publish no pricing at all — in this
                market, <em>hiding the price is the norm, not the exception</em>.
              </p>
              <p>
                <strong className="text-gray-200">Limitations.</strong> Prices
                change without notice and tiers get renamed; verify on the
                vendor&apos;s page before buying. Entry plans also bundle very
                different things — a $29 single-portal plan and a $99
                six-sub-account plan are not equivalent offers. This page is
                updated when our comparison data changes; each figure links to
                a full comparison with the platform&apos;s current positioning.
              </p>
            </div>
          </div>
        </section>

        {/* Where Fusion fits */}
        <section id="flat-rate" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Where Fusion Calling sits
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Fusion Calling&apos;s plans run $99–$499/mo flat — above the
              single-client budget tier, because every plan includes client
              sub-accounts, white-label branding, and Stripe rebilling for
              agencies reselling under their own brand. There is no per-minute
              platform fee on top: the ${WHOLESALE_STARTER.price} Starter plan
              includes {WHOLESALE_STARTER.subAccounts} client sub-accounts.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Compare the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                full plan breakdown
              </Link>
              , see how we stack up in the{" "}
              <Link href="/alternative" className="text-brand hover:underline">
                per-platform comparisons
              </Link>
              , or read the{" "}
              <Link
                href="/blog/ai-receptionist-cost"
                className="text-brand hover:underline"
              >
                AI receptionist cost guide
              </Link>{" "}
              for what drives total cost beyond the entry price.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Pricing questions, answered
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Sources />

        <Footer />
      </main>
    </>
  );
}
