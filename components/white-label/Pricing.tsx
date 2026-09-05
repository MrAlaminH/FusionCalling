"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Check, Star, ArrowRight } from "lucide-react";
import { BillingToggle, type BillingCycle } from "@/components/ui/billing-toggle";

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Launch your first voice AI clients under your own brand.",
      priceMonthly: 99,
      priceYearly: 89,
      popular: false,
      features: [
        "6 Sub-Accounts",
        "Direct Calendar Booking",
        "Complete White-Labeling",
        "Client Portal Access",
        "Vapi + Retell Support",
        "Minute Rebilling",
      ],
      cta: "Start 3-day Free Trial",
    },
    {
      name: "Growth",
      description: "Scale to more clients with priority support and deeper insights.",
      priceMonthly: 299,
      priceYearly: 269,
      popular: true,
      features: [
        "20 Sub-Accounts",
        "Everything in Starter",
        "Priority Support",
        "Advanced Analytics",
        "Custom Onboarding",
      ],
      cta: "Start 3-day Free Trial",
    },
    {
      name: "Scale",
      description: "Unlimited clients with a dedicated manager and API access.",
      priceMonthly: 499,
      priceYearly: 449,
      popular: false,
      features: [
        "Unlimited Sub-Accounts",
        "Everything in Growth",
        "Dedicated Account Manager",
        "API Access",
        "Custom Integrations",
        "Early Feature Access",
      ],
      cta: "Start 3-day Free Trial",
    },
  ];

  return (
    <section className="w-full bg-black relative section-spacing">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="particle [animation-duration:10s]"
          style={{
            width: "300px",
            height: "300px",
            top: "15%",
            left: "20%",
          }}
        />
        <div
          className="particle [animation-duration:12s] [animation-delay:2s]"
          style={{
            width: "250px",
            height: "250px",
            bottom: "20%",
            right: "15%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <Reveal animation="animate-fade-in-up" className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              White-Label Voice AI Pricing Plans
            </span>
          </h2>
          <p className="font-body text-gray-400 text-lg md:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your agency&apos;s needs. Scale up as you
            grow.
          </p>
        </Reveal>

        {/* Billing Cycle Toggle */}
        <Reveal animation="animate-fade-in-up" delay={0.15} className="flex justify-center mb-10 md:mb-14">
          <BillingToggle value={billing} onChange={setBilling} />
        </Reveal>

        {/* Pricing Cards with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? "md:-translate-y-4 md:scale-105" : ""
              }`}
            >
              {/* Glow effect for popular plan (CSS-only pulse) */}
              {plan.popular && (
                <div className="absolute -inset-4 bg-gradient-to-br from-brand/30 via-brand-strong/20 to-transparent rounded-3xl blur-3xl -z-10 animate-pulse [animation-duration:4s]" />
              )}

              <div
                className={`h-full rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${
                  plan.popular
                    ? "glass border-brand/40 shadow-premium-lg"
                    : "glass-light border-gray-800/50 hover:border-brand/30 shadow-premium"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 -right-4 md:-top-5 md:-right-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-strong rounded-full shadow-premium-lg animate-pulse" />
                      <Star
                        viewBox="0 0 24 24"
                        className="w-6 h-6 md:w-7 md:h-7 text-white fill-white z-10 relative"
                      />
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6 md:mb-8">
                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm md:text-base mb-4 ${plan.popular ? "text-brand-light" : "text-gray-400"}`}
                  >
                    {plan.description}
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      {billing === "yearly" && (
                        <span className="font-display text-2xl md:text-3xl font-medium text-gray-500 line-through">
                          ${plan.priceMonthly}
                        </span>
                      )}
                      <span
                        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold ${plan.popular ? "text-white" : "text-brand"}`}
                      >
                        ${billing === "yearly" ? plan.priceYearly : plan.priceMonthly}
                      </span>
                      <span
                        className={`text-sm md:text-base ${plan.popular ? "text-brand-light" : "text-gray-400"}`}
                      >
                        /month
                      </span>
                    </div>
                    {billing === "yearly" && (
                        <div className="flex flex-wrap items-center gap-2 animate-in fade-in duration-300">
                          <span className="text-xs md:text-sm text-brand-light/80">
                            billed annually
                          </span>
                          <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] md:text-xs font-semibold text-green-400 ring-1 ring-inset ring-green-500/30">
                            Save ${(plan.priceMonthly - plan.priceYearly) * 12}/yr
                          </span>
                        </div>
                      )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`min-w-5 min-h-5 md:min-w-6 md:min-h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                          plan.popular
                            ? "bg-gradient-to-br from-brand to-brand-strong"
                            : "bg-green-500"
                        } shadow-premium`}
                      >
                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                      </div>
                      <span
                        className={`font-body text-xs md:text-sm ${plan.popular ? "text-gray-200" : "text-gray-300"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#cta"
                  className={`block w-full text-center rounded-xl py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-300 shadow-premium hover:scale-105 hover:-translate-y-0.5 active:scale-[0.98] ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand to-brand-strong text-white hover:from-brand-strong hover:to-orange-700"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info - Redesigned Compact Version */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          {/* Single unified card with compact info */}
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-6 md:p-8 border border-brand/20">
              {/* Header */}
              <div className="text-center mb-6 md:mb-8">
                <p className="font-display text-white text-lg md:text-xl font-semibold mb-2">
                  Simple, Transparent Pricing
                </p>
                <p className="font-body text-gray-400 text-sm md:text-base">
                  No hidden fees. No surprises. Start free, scale as you grow.
                </p>
              </div>

              {/* Info badges in a more compact layout */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {[
                  { value: "$0", label: "Setup Fee", icon: "💰" },
                  { value: "3 Days", label: "Free Trial", icon: "🎯" },
                  {
                    value: "Cancel Anytime",
                    label: "No Contracts",
                    icon: "🔓",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-gradient-to-br from-brand/10 to-brand-strong/5 border border-brand/20 hover:border-brand/40 hover:-translate-y-0.5 hover:scale-[1.05] transition-premium-fast"
                  >
                    <span className="text-lg md:text-xl">{item.icon}</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-base md:text-lg font-bold text-brand">
                        {item.value}
                      </span>
                      <span className="font-body text-xs md:text-sm text-gray-400">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
