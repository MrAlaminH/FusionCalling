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
        <h2 className="text-4xl font-bold text-center text-brand-strong mb-12">
          Real-world usecases
        </h2>

        {/* Enhanced Tab Switcher - CSS-only animation, no framer-motion */}
        <Card className="w-full max-w-md mx-auto mb-6 p-1.5 bg-zinc-900 border-zinc-800 rounded-xl shadow-2xl">
          <div
            role="tablist"
            aria-label="Use case call direction"
            className="relative flex gap-1 bg-zinc-900 rounded-lg"
          >
            {/* Animated Background Indicator - CSS transform */}
            <div
              className="absolute top-0 bottom-0 bg-brand/20 rounded-lg transition-transform duration-300 ease-[var(--ease-drawer)]"
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
