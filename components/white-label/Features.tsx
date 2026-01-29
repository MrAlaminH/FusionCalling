"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Palette,
  LayoutDashboard,
  Settings,
  ChevronRight,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Palette,
      title: "Full Brand Customization",
      description:
        "Add your logo, choose your colors, and customize every visual element. Your clients will only see your brand, never ours. Complete control over your agency's visual identity.",
      items: [
        "Custom logo placement & branding",
        "Brand color palette integration",
        "White-label domain setup",
        "Custom email templates & notifications",
      ],
      image: "/feature/feature1.png",
      highlights: [
        { icon: Zap, text: "Setup in minutes" },
        { icon: Shield, text: "No code required" },
      ],
    },
    {
      icon: LayoutDashboard,
      title: "White-label Dashboard",
      description:
        "Provide your clients with a powerful branded dashboard to manage their AI agents, view detailed analytics, and access call recordings. All under your agency's name.",
      items: [
        "Custom dashboard URL with your domain",
        "Your branding throughout the interface",
        "Client access management & permissions",
        "Real-time analytics & reporting",
      ],
      image: "/feature/feature2.png",
      highlights: [
        { icon: Smartphone, text: "Mobile responsive" },
        { icon: Zap, text: "Instant updates" },
      ],
    },
    {
      icon: Settings,
      title: "Flexible Configuration",
      description:
        "Configure call handling, routing, and AI behavior to match your clients' unique business requirements. From simple IVR to complex multi-step workflows.",
      items: [
        "Custom call flows & scripts",
        "Intelligent routing & escalation",
        "Dynamic conversation adaptation",
        "CRM integration & data sync",
      ],
      image: "/feature/feature3.png",
      highlights: [
        { icon: Shield, text: "Enterprise ready" },
        { icon: Zap, text: "Scale effortlessly" },
      ],
    },
  ];

  return (
    <section className="w-full bg-black relative section-spacing" ref={ref}>
      {/* Atmospheric Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "300px",
            height: "300px",
            top: "10%",
            left: "5%",
          }}
        />
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            width: "250px",
            height: "250px",
            top: "50%",
            right: "10%",
          }}
        />
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            width: "200px",
            height: "200px",
            bottom: "10%",
            left: "30%",
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight">
            Complete White-label
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Solution
            </span>
          </h2>
          <p className="font-body text-gray-400 text-lg md:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to launch and scale your AI phone automation
            business under your own brand. No technical expertise required.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 60,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Text Content - 5/12 on desktop */}
                <div
                  className={`order-1 lg:col-span-5 ${!isEven ? "lg:order-2" : ""}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : isEven ? -30 : 30,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.5 + index * 0.15,
                      ease: [0.25, 0.1, 0.25, 1.0],
                    }}
                    className="space-y-5 md:space-y-6 lg:space-y-7"
                  >
                    {/* Icon - Slightly smaller */}
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-orange-500/5 border border-orange-500/30 shadow-premium"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1.0],
                      }}
                    >
                      <Icon className="w-7 h-7 md:w-9 md:h-9 text-orange-500" />
                    </motion.div>

                    {/* Title - Slightly reduced for better balance */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description - More concise */}
                    <p className="font-body text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Features List - More compact */}
                    <ul className="space-y-2 md:space-y-2.5">
                      {feature.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 md:gap-2.5 text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: isInView ? 1 : 0,
                            x: isInView ? 0 : -10,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.7 + index * 0.15 + idx * 0.05,
                            ease: [0.25, 0.1, 0.25, 1.0],
                          }}
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mt-2 md:mt-2.5 flex-shrink-0 shadow-premium" />
                          <span className="font-body text-sm md:text-base">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Highlights - More compact badges */}
                    <div className="flex flex-wrap gap-2.5 md:gap-3 pt-1">
                      {feature.highlights.map((highlight, idx) => {
                        const HighlightIcon = highlight.icon;
                        return (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2 md:gap-2.5 px-3.5 py-1.5 md:px-4 md:py-2 rounded-xl glass-light border border-orange-500/20 hover:border-orange-500/40 transition-premium-fast"
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.9 + index * 0.15 + idx * 0.1,
                              ease: [0.25, 0.1, 0.25, 1.0],
                            }}
                          >
                            <HighlightIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
                            <span className="font-body text-xs md:text-sm text-gray-300 font-medium">
                              {highlight.text}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>

                {/* Image Content - 7/12 on desktop for larger, more prominent images */}
                <div
                  className={`order-2 lg:col-span-7 ${!isEven ? "lg:order-1" : ""} relative`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      scale: isInView ? 1 : 0.92,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.4 + index * 0.15,
                      ease: [0.25, 0.1, 0.25, 1.0],
                    }}
                    className="relative group"
                  >
                    {/* Multi-layer glow system - Enhanced for larger images */}
                    <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/25 via-orange-600/10 to-transparent rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/15 via-transparent to-transparent rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

                    {/* Image Container with glassmorphism - Larger and more prominent */}
                    <div className="relative rounded-3xl overflow-hidden border border-orange-500/20 bg-gradient-to-br from-gray-900 via-gray-800/50 to-gray-900 shadow-premium-lg">
                      {/* Decorative top gradient bar */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70" />

                      {/* Browser window controls */}
                      <div className="absolute top-4 left-4 flex gap-2 z-20">
                        <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-lg" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-lg" />
                        <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-lg" />
                      </div>

                      {/* Image - Enhanced with better sizing */}
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={1200}
                        height={900}
                        className="relative z-10 w-full h-auto object-cover pt-8 pb-3 px-3"
                      />

                      {/* Glass reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-20" />

                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30" />

                      {/* Shimmer effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-40 pointer-events-none"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="mt-16 md:mt-20 lg:mt-24 text-center"
        >
          <motion.a
            href="#cta"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl glass-light border border-orange-500/30 hover:border-orange-500/50 transition-premium cursor-pointer group shadow-premium"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-display text-white font-semibold text-lg md:text-xl">
              Ready to start your white-label journey?
            </span>
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-orange-500 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
