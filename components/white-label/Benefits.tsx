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
  const isInView = useInView(ref, { once: true });

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
            Partner
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Benefits
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to succeed as a Fusion Calling partner. From
            training materials to dedicated support, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-black border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6">
            Ready to experience these benefits?
          </p>
          <a
            href="#cta"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium text-white transition-all hover:from-orange-600 hover:to-orange-700 hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Apply to Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
}
