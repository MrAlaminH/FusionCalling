"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Zap, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ValueProp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const benefits = [
    {
      icon: DollarSign,
      title: "New Revenue Stream",
      description:
        "Monetize AI phone automation with high-margin recurring revenue. Set your own pricing and keep the difference.",
      stat: "$10K+",
      statLabel: "Avg. Monthly Revenue",
    },
    {
      icon: Zap,
      title: "Launch in Days",
      description:
        "Skip months of development. Our proven technology lets you go to market in days, not years.",
      stat: "7 Days",
      statLabel: "Average Launch Time",
    },
    {
      icon: Users,
      title: "Scale Without Limits",
      description:
        "Serve unlimited clients with our robust infrastructure. From startups to enterprises, we handle it all.",
      stat: "Unlimited",
      statLabel: "Client Capacity",
    },
    {
      icon: Shield,
      title: "Full Control",
      description:
        "Maintain complete ownership of your client relationships. We're your technology partner, not your competitor.",
      stat: "100%",
      statLabel: "Brand Ownership",
    },
  ];

  const stats = [
    { value: "20+", label: "Active Partners" },
    { value: "5M+", label: "AI Calls Handled" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="w-full bg-black relative section-spacing" ref={ref}>
      {/* Atmospheric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "350px",
            height: "350px",
            top: "10%",
            right: "5%",
          }}
        />
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{
            width: "280px",
            height: "280px",
            bottom: "20%",
            left: "8%",
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
            Why Agencies Choose
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Fusion Calling
            </span>
          </h2>
          <p className="font-body text-gray-400 text-lg md:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
            Partner with us to offer enterprise-grade AI phone automation under
            your brand. No technical expertise required, just pure business
            growth.
          </p>
        </motion.div>

        {/* Asymmetric Benefits Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 50,
                  scale: isInView ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/25 via-orange-600/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <Card className="glass-light h-full transition-premium border-gray-800/50 hover:border-orange-500/40 group-hover:bg-gradient-to-br group-hover:from-orange-500/5 group-hover:to-transparent">
                  <CardContent className="p-6 md:p-8 space-y-5 flex flex-col h-full relative overflow-hidden">
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl -z-10" />

                    {/* Icon with animation */}
                    <motion.div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/60 transition-premium-fast shadow-premium"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1.0],
                      }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-orange-500" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-grow space-y-3">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Stat highlight */}
                    <div className="pt-4 border-t border-gray-800/50 group-hover:border-orange-500/30 transition-colors duration-300">
                      <div className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                        {benefit.stat}
                      </div>
                      <div className="font-body text-xs md:text-sm text-gray-500">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 border border-orange-500/20 shadow-premium-lg">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-green-500/5 rounded-3xl -z-10" />

            <p className="font-body text-gray-400 text-base md:text-lg lg:text-xl text-center mb-10 md:mb-12">
              Join agencies already generating 6-figure revenue streams
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1 + idx * 0.15,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1.0],
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-orange-500 to-orange-600 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs md:text-sm text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
