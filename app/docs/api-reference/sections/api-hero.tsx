"use client";

import { Search, Command, ArrowRight } from "lucide-react";
import { openSearch } from "@/components/docs/search/search-bus";
import ShareMenu from "@/components/docs/share-menu";

export default function ApiHero() {
  return (
    <div className="mb-10 sm:mb-14 animate-in fade-in-0 duration-700">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 mb-5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Calendar v1.0 · Leads v1.2
      </div>

      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
        API Reference
      </h1>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-6">
        Complete documentation for the Fusion Calling APIs. Manage calendar events and
        leads programmatically — with copy-paste examples and a built-in request builder.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          type="button"
          onClick={openSearch}
          className="group inline-flex items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-gray-400 hover:border-white/30 hover:text-gray-200 transition-colors w-full sm:w-80"
        >
          <span className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search endpoints…
          </span>
          <kbd className="inline-flex items-center gap-0.5 rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-gray-500">
            <Command className="h-2.5 w-2.5" /> K
          </kbd>
        </button>
        <a
          href="#quick-start"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-gray-500 shrink-0 text-xs sm:text-sm">Base URL</span>
            <code className="text-orange-400 text-xs sm:text-sm break-all">
              https://app.fusioncalling.com
            </code>
          </div>
          <ShareMenu />
        </div>
      </div>
    </div>
  );
}
