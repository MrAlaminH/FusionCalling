"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import InboundCalls from "./sub/inbound-calls";
import OutboundCalls from "./sub/outbound-calls";

export default function EndlessUseCases() {
  const [activeTab, setActiveTab] = useState<"outbound" | "inbound">(
    "outbound"
  );

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center rounded-full glass-light border border-brand/20 px-4 py-1.5 text-xs sm:text-sm text-gray-300">
              Use Cases
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Real-world <span className="text-brand">use cases</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            One AI voice agent for every conversation — outbound outreach that
            qualifies and books, inbound support that never puts a caller on
            hold.
          </p>
        </div>

        {/* Enhanced Tab Switcher - CSS-only animation, no framer-motion */}
        <Card className="w-full max-w-md mx-auto mb-6 p-1.5 bg-zinc-900 border-zinc-800 rounded-xl shadow-2xl">
          <div
            role="tablist"
            aria-label="Use case call direction"
            className="relative flex gap-1 bg-zinc-900 rounded-lg"
          >
            {/* Animated Background Indicator - CSS transform, ease-out so the
                pill responds immediately to the tap */}
            <div
              className="absolute top-0 bottom-0 bg-brand/20 rounded-lg transition-transform duration-200 ease-[var(--ease-out)]"
              style={{
                width: "50%",
                transform:
                  activeTab === "outbound"
                    ? "translateX(0%)"
                    : "translateX(100%)",
              }}
              aria-hidden="true"
            />

            {/* Outbound Tab */}
            <button
              id="usecase-tab-outbound"
              onClick={() => setActiveTab("outbound")}
              className={cn(
                "relative flex-1 text-sm font-medium px-4 py-3 rounded-lg z-10 transition duration-200 hover:scale-[1.02] active:scale-[0.98]",
                activeTab === "outbound"
                  ? "text-brand font-bold"
                  : "text-gray-300 hover:text-gray-100"
              )}
              aria-selected={activeTab === "outbound"}
              aria-controls="usecase-panel-outbound"
              role="tab"
            >
              Outbound Calls
            </button>

            {/* Inbound Tab */}
            <button
              id="usecase-tab-inbound"
              onClick={() => setActiveTab("inbound")}
              className={cn(
                "relative flex-1 text-sm font-medium px-4 py-3 rounded-lg z-10 transition duration-200 hover:scale-[1.02] active:scale-[0.98]",
                activeTab === "inbound"
                  ? "text-brand font-bold"
                  : "text-gray-300 hover:text-gray-100"
              )}
              aria-selected={activeTab === "inbound"}
              aria-controls="usecase-panel-inbound"
              role="tab"
            >
              Inbound Calls
            </button>
          </div>
        </Card>

        {/* Content - CSS fade keyed by tab (remount replays the animation) */}
        <div
          key={activeTab}
          id={
            activeTab === "outbound"
              ? "usecase-panel-outbound"
              : "usecase-panel-inbound"
          }
          role="tabpanel"
          aria-labelledby={`usecase-tab-${activeTab}`}
          className="animate-fade-in"
        >
          {activeTab === "outbound" ? <OutboundCalls /> : <InboundCalls />}
        </div>
      </div>
    </section>
  );
}
