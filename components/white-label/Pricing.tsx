"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, ArrowRight } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const plans = [
    {
      name: "Starter",
      description: "Perfect for agencies just starting with Voice AI",
      price: "$99",
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
      description: "For growing agencies scaling their Voice AI offerings",
      price: "$299",
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
      description: "For established agencies with unlimited client needs",
      price: "$499",
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
    <section className="w-full bg-black relative section-spacing" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "300px",
            height: "300px",
            top: "15%",
            left: "20%",
          }}
        />
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
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
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Pricing Plans
          </h2>
          <p className="font-body text-gray-400 text-lg md:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your agency&apos;s needs. Scale up as you
            grow.
          </p>
        </motion.div>

        {/* Pricing Cards with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 40,
                scale: isInView ? 1 : 0.95,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className={`relative ${plan.popular ? "md:-translate-y-4 md:scale-105" : ""}`}
              whileHover={{ y: -8 }}
            >
              {/* Glow effect for popular plan */}
              {plan.popular && (
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 via-orange-600/20 to-transparent rounded-3xl blur-3xl -z-10"
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              <div
                className={`h-full rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${
                  plan.popular
                    ? "glass border-orange-500/40 shadow-premium-lg"
                    : "glass-light border-gray-800/50 hover:border-orange-500/30 shadow-premium"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="absolute -top-4 -right-4 md:-top-5 md:-right-5"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-premium-lg animate-pulse" />
                      <Star
                        viewBox="0 0 24 24"
                        className="w-6 h-6 md:w-7 md:h-7 text-white fill-white z-10 relative"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="mb-6 md:mb-8">
                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm md:text-base mb-4 ${plan.popular ? "text-orange-200" : "text-gray-400"}`}
                  >
                    {plan.description}
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold ${plan.popular ? "text-white" : "text-orange-500"}`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm md:text-base ${plan.popular ? "text-orange-200" : "text-gray-400"}`}
                      >
                        /month
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + index * 0.1 + idx * 0.05,
                        ease: [0.25, 0.1, 0.25, 1.0],
                      }}
                    >
                      <div
                        className={`min-w-5 min-h-5 md:min-w-6 md:min-h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                          plan.popular
                            ? "bg-gradient-to-br from-orange-500 to-orange-600"
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
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#cta"
                  className={`block w-full text-center rounded-xl py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-300 shadow-premium ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info - Redesigned Compact Version */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="mt-12 md:mt-16 lg:mt-20"
        >
          {/* Single unified card with compact info */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="glass rounded-2xl p-6 md:p-8 border border-orange-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
            >
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
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/40 transition-premium-fast"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.1 + idx * 0.1,
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1.0],
                    }}
                  >
                    <span className="text-lg md:text-xl">{item.icon}</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-base md:text-lg font-bold text-orange-500">
                        {item.value}
                      </span>
                      <span className="font-body text-xs md:text-sm text-gray-400">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
