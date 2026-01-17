"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileCheck,
  Palette,
  DollarSign,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      icon: FileCheck,
      step: "01",
      title: "Apply & Get Approved",
      description:
        "Submit your application and get approved within 48 hours. We review your agency to ensure a successful partnership.",
    },
    {
      icon: Palette,
      step: "02",
      title: "Customize Your Brand",
      description:
        "Set up your white-label environment with your logo, colors, and custom voice. Launch your branded AI solution.",
    },
    {
      icon: DollarSign,
      step: "03",
      title: "Set Your Pricing",
      description:
        "Define your pricing model and margins. You have complete control over what you charge your clients.",
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Start Selling & Earning",
      description:
        "Begin onboarding clients and generating recurring revenue. Scale as fast as you want with our infrastructure.",
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
            How to Launch Your
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              White-label Business
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            From application to first sale in as little as one week. We handle
            the technology, you focus on growing your agency.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line connecting steps - visible on md and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-orange-500/0"></div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <span className="text-2xl sm:text-3xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-grow w-full">
                    <Card className="bg-black border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 group">
                      <CardContent className="p-6 sm:p-8">
                        <div className="flex items-start gap-4 sm:gap-6">
                          <div className="flex-shrink-0 hidden md:block">
                            <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                              <Icon className="w-7 h-7 text-orange-500" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            {/* Mobile icon - visible only on small screens */}
                            <div className="flex md:hidden items-center gap-3 mb-3">
                              <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-orange-500" />
                              </div>
                              <h3 className="text-xl sm:text-2xl font-bold text-white">
                                {step.title}
                              </h3>
                            </div>
                            <div className="hidden md:block mb-3">
                              <h3 className="text-xl sm:text-2xl font-bold text-white">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Arrow indicator - visible on md and up */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1/2 mt-8 z-20">
                      <ArrowRight className="w-8 h-8 text-orange-500" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6">
            Ready to launch your white-label business?
          </p>
          <a
            href="#cta"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium text-white transition-all hover:from-orange-600 hover:to-orange-700 hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Apply Now
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
