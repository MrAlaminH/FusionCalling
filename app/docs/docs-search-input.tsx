"use client";

import { Search } from "lucide-react";
import { setDocSearchQuery, useDocSearchQuery } from "./doc-search-store";

export default function DocsSearchInput() {
  const searchQuery = useDocSearchQuery();

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        role="searchbox"
        aria-label="Search documentation"
        placeholder="Search guides, endpoints, topics…"
        value={searchQuery}
        onChange={(e) => setDocSearchQuery(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-4 pl-11 pr-20 text-white placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand"
      />
      <kbd className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-gray-500 sm:inline-flex">
        ⌘K
      </kbd>
    </div>
  );
}
