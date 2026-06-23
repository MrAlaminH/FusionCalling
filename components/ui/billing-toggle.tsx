"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type BillingCycle = "monthly" | "yearly";

export function BillingToggle({
  value,
  onChange,
  className,
}: {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        role="tablist"
        aria-label="Billing cycle"
        className="relative flex w-full max-w-[360px] items-center rounded-full border border-white/10 bg-zinc-900/80 p-1.5 shadow-premium backdrop-blur"
      >
        {/* Sliding pill — animated via `left` (rigid body, no overlap/squeeze). */}
        <motion.div
          className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/40 ring-1 ring-orange-400/30"
          initial={false}
          animate={{ left: value === "monthly" ? "0.375rem" : "50%" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          style={{ width: "calc(50% - 0.375rem)" }}
        />

        {(["monthly", "yearly"] as const).map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(option)}
              className={cn(
                "relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 px-2 text-sm font-bold capitalize transition-colors duration-200",
                active
                  ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                  : "text-gray-400 hover:text-gray-200"
              )}
            >
              {option}
              {option === "yearly" && (
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase leading-none tracking-wider transition-colors duration-200",
                    active
                      ? // On the orange slider: invert to dark pill for contrast
                        "bg-black/90 text-orange-300 ring-1 ring-inset ring-orange-400/60"
                      : // On the dark side: pop with an orange gradient
                        "bg-gradient-to-r from-orange-400 to-orange-600 text-black ring-1 ring-inset ring-orange-300/40"
                  )}
                >
                  Save 10%
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
