"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  GraduationCap,
  HeadphonesIcon,
  FileText,
  Zap,
  TrendingUp,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const benefits = [
    {
      icon: Code2,
      title: "No Technical Expertise Needed",
      description:
        "Launch your white-label solution without writing a single line of code. We handle all technical requirements.",
    },
    {
      icon: GraduationCap,
      title: "White-label Training Materials",
      description:
        "Access comprehensive training resources, including sales scripts, demo videos, and onboarding guides.",
    },
    {
      icon: FileText,
      title: "Marketing Resources Provided",
      description:
        "Get ready-to-use marketing assets, from presentations to case studies, to help you sell effectively.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support Included",
      description:
        "Access our support team whenever you need help. Premium partners get priority 24/7 support.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description:
        "Get your white-label solution live in days, not months. Streamlined onboarding for rapid deployment.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description:
        "Handle unlimited clients and calls with our robust, enterprise-grade infrastructure that grows with you.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description:
        "Your clients' data is protected with bank-level security, compliance, and privacy standards.",
    },
    {
      icon: Users,
      title: "Partner Community",
      description:
        "Join a network of successful agencies sharing strategies, insights, and best practices.",
    },
  ];

  return (
    <section className="w-full bg-black relative section-spacing" ref={ref}>
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "250px",
            height: "250px",
            top: "20%",
            right: "15%",
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
            delay: 3,
          }}
          style={{
            width: "200px",
            height: "200px",
            bottom: "30%",
            left: "10%",
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
            Partner
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Benefits
            </span>
          </h2>
          <p className="font-body text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to succeed as a Fusion Calling partner. From
            training materials to dedicated support, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Benefits Grid - Asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
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
                  delay: 0.3 + index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <Card className="glass-light h-full transition-premium border-gray-800/50 hover:border-orange-500/40">
                  <CardContent className="p-6 md:p-8 space-y-4 md:space-y-5 flex flex-col h-full">
                    {/* Icon with enhanced styling */}
                    <motion.div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-orange-500/15 to-orange-600/5 border border-orange-500/25 flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 transition-premium-fast shadow-premium"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-orange-500" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Subtle bottom accent */}
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-500/50 to-orange-600/50 group-hover:w-full transition-all duration-500 ease-out" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <p className="font-body text-gray-400 text-base md:text-lg lg:text-xl mb-6 md:mb-8">
            Ready to experience these benefits?
          </p>
          <motion.a
            href="#cta"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 md:px-10 lg:px-12 py-3.5 md:py-4 lg:py-5 text-sm md:text-base font-medium text-white transition-premium shadow-premium hover:shadow-premium-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply to Become a Partner
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
