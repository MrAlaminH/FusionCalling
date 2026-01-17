"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Zap, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ValueProp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: DollarSign,
      title: "New Revenue Stream",
      description:
        "Monetize AI phone automation with high-margin recurring revenue. Set your own pricing and keep the difference.",
    },
    {
      icon: Zap,
      title: "Launch in Days",
      description:
        "Skip months of development. Our proven technology lets you go to market in days, not years.",
    },
    {
      icon: Users,
      title: "Scale Without Limits",
      description:
        "Serve unlimited clients with our robust infrastructure. From startups to enterprises, we handle it all.",
    },
    {
      icon: Shield,
      title: "Full Control",
      description:
        "Maintain complete ownership of your client relationships. We're your technology partner, not your competitor.",
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
            Why Agencies Choose
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Fusion Calling
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Partner with us to offer enterprise-grade AI phone automation under
            your brand. No technical expertise required, just pure business
            growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                <Card className="bg-black border-orange-500/20 group hover:border-orange-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 h-full min-h-[220px]">
                  <CardContent className="p-6 space-y-4 flex flex-col items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-grow">
                      {benefit.description}
                    </p>
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6">
            Join agencies already generating 6-figure revenue streams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                Active Partners
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                10M+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                AI Calls Handled
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                99.9%
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                Uptime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
