"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, TestTube2, Rocket, BarChart3, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: 1,
      title: "Build",
      description:
        "Utilize the voice AI API and our intuitive agent builder to create custom voice AI agents effortlessly.",
      icon: Bot,
    },
    {
      number: 2,
      title: "Test",
      description:
        "Perform comprehensive agent testing with built-in test LLM features to ensure seamless handling of edge cases.",
      icon: TestTube2,
    },
    {
      number: 3,
      title: "Deploy",
      description:
        "Easily deploy your agents to phone calls, web calls, SMS, and more.",
      icon: Rocket,
    },
    {
      number: 4,
      title: "Monitor",
      description:
        "Track success rates, latency, and user sentiment through call history dashboard. Quickly identify failed calls.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-orange-600 text-center font-bold text-3xl md:text-4xl pb-4"
          >
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-center md:text-xl mb-6"
          >
            Learn how to build, test, deploy, and monitor your voice AI agents
            with Fusion Calling.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
            >
              <div
                className={`bg-black border-orange-500/20 rounded-lg p-6 h-full  border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] ${
                  hoveredStep === index
                    ? " hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]"
                    : "border-orange-500/20"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center mr-4">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    Step {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connections for desktop */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal arrow for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-full w-6 -translate-y-1/2 text-orange-600">
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{
                          x: hoveredStep === index ? 0 : -5,
                          opacity: hoveredStep === index ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center"
                      >
                        <div className="h-0.5 w-full bg-orange-600"></div>
                        <ArrowRight className="w-6 h-6 absolute -right-3" />
                      </motion.div>
                    </div>

                    {/* Vertical arrow for mobile/tablet */}
                    <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-orange-600">
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{
                          y: hoveredStep === index ? 0 : -5,
                          opacity: hoveredStep === index ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-0.5 h-6 bg-orange-600"></div>
                        <ArrowRight className="w-6 h-6 rotate-90 absolute -bottom-3" />
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
