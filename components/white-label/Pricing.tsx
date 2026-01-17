"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, ArrowRight } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const plans = [
    {
      name: "Starter Partner",
      description: "Perfect for agencies starting out",
      commission: "20%",
      minClients: "5",
      price: null,
      buildFee: "$0",
      popular: false,
      features: [
        "Full white-label branding",
        "Custom voice AI training",
        "Basic dashboard",
        "Email support",
        "Marketing resources",
        "API access",
        "No minimum commitment",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro Partner",
      description: "For growing agencies",
      commission: "30%",
      minClients: "15",
      price: null,
      buildFee: "$0",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced dashboard",
        "Priority support (48h response)",
        "Custom branding consultation",
        "Sales training materials",
        "Dedicated account manager",
        "Higher commission rate",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise Partner",
      description: "For established agencies",
      commission: "40%",
      minClients: "30",
      price: null,
      buildFee: "$0",
      popular: false,
      features: [
        "Everything in Pro",
        "White-label mobile app",
        "24/7 dedicated support",
        "Custom integrations",
        "Revenue share optimization",
        "Beta feature access",
        "Maximum commission rate",
        "Quarterly business reviews",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Partner Tiers &
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Commission Rates
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Choose the partnership level that fits your agency&apos;s growth goals.
            Scale up as you grow with our clients.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className={`relative ${
                plan.popular
                  ? "md:transform md:-translate-y-2 md:scale-105"
                  : ""
              }`}
            >
              <div
                className={`h-full rounded-xl p-4 sm:p-6 md:p-8 border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-black border-orange-500 shadow-lg shadow-orange-500/20"
                    : "bg-black border-orange-500/20 hover:border-orange-500/40"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                      <div className="absolute inset-0">
                        <Star
                          viewBox="0 0 24 24"
                          className="w-full h-full text-orange-500 fill-orange-500"
                        />
                      </div>
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-white z-10" />
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      plan.popular ? "text-orange-100" : "text-gray-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl sm:text-4xl font-bold ${
                          plan.popular ? "text-white" : "text-orange-500"
                        }`}
                      >
                        {plan.commission}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-orange-100" : "text-gray-400"
                        }`}
                      >
                        Commission
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {plan.minClients} minimum clients
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <div
                        className={`min-w-4 min-h-4 sm:min-w-5 sm:min-h-5 rounded-full ${
                          plan.popular ? "bg-orange-600" : "bg-green-500"
                        } flex items-center justify-center mt-0.5 flex-shrink-0`}
                      >
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span
                        className={`text-xs sm:text-sm ${
                          plan.popular ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#cta"
                  className={`block w-full text-center rounded-lg py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                $0
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                Setup Fee
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                30 Days
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                Free Trial
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                Cancel Anytime
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                No Long-term Contracts
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
