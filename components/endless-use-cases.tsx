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
          <div className="relative flex gap-1 bg-zinc-900 rounded-lg">
            {/* Animated Background Indicator - CSS transform */}
            <div
              className="absolute top-0 bottom-0 bg-brand/20 rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
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
              onClick={() => setActiveTab("outbound")}
              className={cn(
                "relative flex-1 text-sm font-medium px-4 py-3 rounded-lg z-10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
                activeTab === "outbound"
                  ? "text-brand-strong font-bold"
                  : "text-gray-400 hover:text-gray-200"
              )}
              aria-selected={activeTab === "outbound"}
              role="tab"
            >
              Outbound Calls
            </button>

            {/* Inbound Tab */}
            <button
              onClick={() => setActiveTab("inbound")}
              className={cn(
                "relative flex-1 text-sm font-medium px-4 py-3 rounded-lg z-10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
                activeTab === "inbound"
                  ? "text-brand-strong font-bold"
                  : "text-gray-400 hover:text-gray-200"
              )}
              aria-selected={activeTab === "inbound"}
              role="tab"
            >
              Inbound Calls
            </button>
          </div>
        </Card>

        {/* Content - CSS fade transition keyed by tab */}
        <div
          key={activeTab}
          className="animate-fade-in"
          style={{ animationDuration: "300ms" }}
        >
          {activeTab === "outbound" ? <OutboundCalls /> : <InboundCalls />}
        </div>
      </div>
    </section>
  );
}
