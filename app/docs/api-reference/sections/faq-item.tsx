"use client";

import { ChevronDown } from "lucide-react";

// Native <details>/<summary> so the answer is in the server-rendered HTML
// (crawlers see it without clicking); CSS handles the open state.
export default function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden">
      <summary className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-medium text-gray-100">{q}</span>
        <ChevronDown className="h-4 w-4 text-gray-500 shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <p className="px-4 pb-4 text-sm text-gray-400">{a}</p>
    </details>
  );
}
