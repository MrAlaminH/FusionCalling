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
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Use Cases For AI Call Agent
        </h1>

        {/* Tab Switcher */}
        <Card className="w-full max-w-xs mx-auto mb-6 p-1.5 flex gap-1">
          <button
            onClick={() => setActiveTab("outbound")}
            className={cn(
              "flex-1 text-sm font-medium px-4 py-2 rounded-md transition-colors",
              activeTab === "outbound"
                ? "bg-orange-400/10 text-orange-600"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Outbound calls
          </button>
          <button
            onClick={() => setActiveTab("inbound")}
            className={cn(
              "flex-1 text-sm font-medium px-4 py-2 rounded-md transition-colors",
              activeTab === "inbound"
                ? "bg-orange-400/10 text-orange-600"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Inbound calls
          </button>
        </Card>

        {/* Banner */}
        <div className="relative w-full max-w-[200px] mx-auto mb-6">
          <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl" />
          <div className="relative text-center py-2 px-6 rounded-full bg-orange-400/10 text-orange-600 font-medium">
            {activeTab === "outbound" ? "Outbound calls" : "Inbound calls"}
          </div>
        </div>

        {/* Content */}
        {activeTab === "outbound" ? <OutboundCalls /> : <InboundCalls />}
      </div>
    </section>
  );
}
