"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Mic,
  LayoutDashboard,
  Code,
  Globe,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Palette,
      title: "Full Brand Customization",
      description:
        "Add your logo, choose your colors, and customize every visual element. Your clients will only see your brand, never ours.",
      items: [
        "Custom logo placement",
        "Brand color palette",
        "White-label domain",
        "Custom email templates",
      ],
    },
    {
      icon: Mic,
      title: "Custom Voice AI Training",
      description:
        "Train AI agents with your brand's voice and personality. Create consistent customer experiences that match your agency's style.",
      items: [
        "Voice cloning technology",
        "Brand personality training",
        "Multiple voice options",
        "Tone and style customization",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "White-label Dashboard",
      description:
        "Provide your clients with a branded dashboard to manage their AI agents, view analytics, and access call recordings.",
      items: [
        "Custom dashboard URL",
        "Your branding throughout",
        "Client access management",
        "Real-time analytics",
      ],
    },
    {
      icon: Code,
      title: "Full API Access",
      description:
        "Integrate our AI calling capabilities into your existing systems with comprehensive API documentation and SDK support.",
      items: [
        "RESTful API endpoints",
        "Webhook notifications",
        "Developer documentation",
        "SDK for major languages",
      ],
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description:
        "Serve global clients with AI agents that speak multiple languages fluently, expanding your market reach.",
      items: [
        "20+ languages supported",
        "Real-time translation",
        "Accent training",
        "Regional customization",
      ],
    },
    {
      icon: Settings,
      title: "Flexible Configuration",
      description:
        "Configure call handling, routing, and AI behavior to match your clients' unique business requirements.",
      items: [
        "Custom call flows",
        "Intelligent routing",
        "Script customization",
        "CRM integration",
      ],
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
            Complete White-label
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Solution
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to launch and scale your AI phone automation
            business under your own brand.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : isEven ? -20 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-black border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 group min-h-[280px]">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                        </div>
                      </div>
                      <div className="flex-grow space-y-3 sm:space-y-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        <ul className="space-y-2 sm:space-y-2.5">
                          {feature.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 sm:gap-3"
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-2 sm:mt-2.5 flex-shrink-0"></div>
                              <span className="text-gray-400 text-xs sm:text-sm">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
