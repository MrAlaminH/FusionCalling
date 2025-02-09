"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import InboundCalls from "./sub/inbound-calls";
import OutboundCalls from "./sub/outbound-calls";

export default function EndlessUseCases() {
  const [activeTab, setActiveTab] = useState<"outbound" | "inbound">(
    "outbound"
  );

  // Animation variants
  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const tabButtonVariants = {
    rest: {
      scale: 1,
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Real-world usecases
        </h1>

        {/* Enhanced Tab Switcher */}
        <Card className="w-full max-w-md mx-auto mb-6 p-1.5 bg-zinc-900 border-zinc-800 rounded-xl shadow-2xl">
          <div className="relative flex gap-1 bg-zinc-900 rounded-lg">
            {/* Animated Background Indicator */}
            <motion.div
              layoutId="active-tab-background"
              className="absolute inset-0 bg-orange-500/20 rounded-lg"
              initial={false}
              animate={{
                x: activeTab === "outbound" ? "0%" : "100%",
                width: "50%",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />

            {/* Outbound Tab */}
            <motion.button
              variants={tabButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab("outbound")}
              className={cn(
                "relative flex-1 text-sm font-medium px-4 py-3 rounded-lg z-10 transition-colors",
                activeTab === "outbound"
                  ? "text-orange-600 font-bold"
                  : "text-gray-400 hover:text-gray-200"
              )}
            >
              Outbound Calls
            </motion.button>

            {/* Inbound Tab */}
            <motion.button
              variants={tabButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab("inbound")}
              className={cn(
                "relative flex-1 text-sm font-medium px-4 py-3 rounded-lg z-10 transition-colors",
                activeTab === "inbound"
                  ? "text-orange-600 font-bold"
                  : "text-gray-400 hover:text-gray-200"
              )}
            >
              Inbound Calls
            </motion.button>
          </div>
        </Card>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {activeTab === "outbound" ? <OutboundCalls /> : <InboundCalls />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
