"use client";

import { useState } from "react";
import { Check, Star } from "lucide-react";
import { BillingToggle, type BillingCycle } from "@/components/ui/billing-toggle";
import { cn } from "@/lib/utils";

const prices = {
  starter: { monthly: 149, yearly: 134 },
  pro: { monthly: 249, yearly: 224 },
  enterprise: { monthly: 497, yearly: 447 },
} as const;

type PlanId = keyof typeof prices;

interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  cta: string;
  href: string;
  popular?: boolean;
  setupFee?: number;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for small teams",
    cta: "Get Started",
    href: "#calendar",
    features: [
      "Includes 500 minutes",
      "Full Portal Access",
      "All Integrations Compatible",
      "Auto-tags and logs every lead",
      "CRM and lead routing integrations",
      "24/7 performance with no burnout",
      "Leave customized, emotional voicemails",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For growing businesses",
    cta: "Let's Start",
    href: "#calendar",
    popular: true,
    setupFee: 799,
    features: [
      "Includes 1050 minutes",
      "Everything in Starter",
      "Inbound / outbound call handling",
      "Outbound call routing integrations",
      "Private Slack channel for direct support",
      "Advanced FAQ handling",
      "Custom LLM Integration",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large organizations",
    cta: "Contact Sales",
    href: "#calendar",
    setupFee: 1250,
    features: [
      "Includes 2100 minutes",
      "Full Portal Access",
      "Everything in Pro",
      "Custom Trained Voice",
      "Dedicated Support and Developer",
      "Extensive script",
      "Extensive Testing",
    ],
  },
];

function PricingCard({
  plan,
  billing,
  nameHeading: NameHeading,
  featureListHeading: FeatureListHeading,
}: {
  plan: Plan;
  billing: BillingCycle;
  nameHeading: "h2" | "h3";
  featureListHeading: "h3" | "h4";
}) {
  const { monthly, yearly } = prices[plan.id];
  const activePrice = billing === "yearly" ? yearly : monthly;
  const annualSaving = (monthly - yearly) * 12;
  const popular = plan.popular;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-card p-4 md:p-6 transition-all duration-300 hover:-translate-y-1",
        popular
          ? "bg-gradient-to-b from-brand to-gray-900 text-white shadow-premium-lg hover:shadow-brand/40 lg:scale-105 lg:-translate-y-1"
          : "border-2 border-brand/20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white shadow-lg hover:shadow-brand/30"
      )}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-pill bg-gradient-to-r from-brand to-brand-strong px-3 py-1 text-xs font-bold uppercase tracking-wide text-black shadow-lg">
          <Star className="h-3 w-3 fill-current" />
          Popular
        </span>
      )}

      {/* Header */}
      <div className="mb-4 md:mb-5">
        <NameHeading className="text-base md:text-lg font-semibold font-display">
          {plan.name}
        </NameHeading>
        <p className="text-xs opacity-80">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-4 md:mb-5">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          {billing === "yearly" && (
            <span className="text-sm md:text-base font-medium text-gray-500 line-through">
              ${monthly}
            </span>
          )}
          <span className="text-2xl md:text-3xl font-bold font-display">
            ${activePrice}
          </span>
          <span className="text-xs opacity-80">/ per month</span>
        </div>
        {billing === "yearly" ? (
          <p className="text-xs font-semibold text-green-400">
            Billed annually · Save ${annualSaving}/year
          </p>
        ) : (
          <p className="text-xs opacity-80">Billed monthly</p>
        )}
      </div>

      {/* Setup fee — separated from features, clearly a one-time cost */}
      {plan.setupFee && (
        <p
          className={cn(
            "mb-4 rounded-md px-3 py-2 text-xs",
            popular
              ? "bg-black/20 text-white/80"
              : "bg-brand/10 text-brand"
          )}
        >
          One-time setup fee:{" "}
          <span className="font-semibold">${plan.setupFee}</span>
        </p>
      )}

      {/* CTA */}
      <a
        href={plan.href}
        className={cn(
          "w-full rounded-pill py-2 md:py-2.5 text-center text-xs md:text-sm font-medium transition-all duration-300 hover:shadow-lg",
          popular
            ? "bg-gradient-to-r from-brand to-brand-strong text-black"
            : "bg-white text-[#0f172a] hover:bg-gray-100"
        )}
      >
        {plan.cta}
      </a>

      {/* Features — pushed to bottom for consistent alignment */}
      <div
        className={cn(
          "mt-5 border-t pt-4 md:pt-5",
          popular ? "border-brand/60" : "border-gray-700"
        )}
      >
        <FeatureListHeading className="mb-3 text-xs md:text-sm font-medium">What you will get</FeatureListHeading>
        <ul className="space-y-2">
          {plan.features.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <div
                className={cn(
                  "mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full",
                  popular ? "bg-brand" : "bg-green-500"
                )}
              >
                <Check className="h-2.5 w-2.5 text-white" />
              </div>
              <span className="text-xs opacity-90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingSection({
  headingLevel = "h2",
}: {
  // The pricing page renders this section as the page's primary heading.
  // Everywhere else (e.g. the homepage #pricing anchor) it must stay an H2 so
  // it doesn't compete with the host page's own H1.
  headingLevel?: "h1" | "h2";
}) {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const Heading = headingLevel;
  // Keep the heading outline gap-free on both usages:
  // - /pricing renders the section title as H1 → plan names H2, features H3
  // - homepage anchor keeps the section title as H2 → plan names H3, features H4
  const cardNameLevel = headingLevel === "h1" ? "h2" : "h3";
  const featureListLevel = headingLevel === "h1" ? "h3" : "h4";
  return (
    <section className="w-full section-spacing bg-black text-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Title Header */}
        <div className="text-center mb-8 md:mb-10">
          <Heading className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-brand mb-2">
            Simple, Fair Pricing for AI Phone Automation
          </Heading>
          <p className="text-xs text-gray-400 md:text-sm max-w-xl mx-auto">
            Choose the perfect plan for your business needs. Scale effortlessly
            as you grow.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-8 md:mb-10">
          <BillingToggle value={billing} onChange={setBilling} />
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billing={billing}
              nameHeading={cardNameLevel}
              featureListHeading={featureListLevel}
            />
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-400 mt-6 md:mt-8 text-xs">
          *All plans include 24/7 support and 99.9% uptime guarantee
        </p>
      </div>
    </section>
  );
}
