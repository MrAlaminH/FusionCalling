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
        className="relative flex w-full max-w-[280px] items-center rounded-full border border-white/10 bg-zinc-900/80 p-1 shadow-premium backdrop-blur"
      >
        <motion.div
          className="absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
          initial={false}
          animate={{ x: value === "monthly" ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          style={{ width: "calc(50% - 0.25rem)" }}
        />
        {(["monthly", "yearly"] as const).map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={value === option}
            onClick={() => onChange(option)}
            className={cn(
              "relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full py-1.5 text-xs font-semibold capitalize transition-colors duration-200 sm:text-sm",
              value === option
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            )}
          >
            {option}
            {option === "yearly" && (
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-wide text-white ring-1 ring-inset ring-white/25">
                Save 10%
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
