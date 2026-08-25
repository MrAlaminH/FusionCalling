"use client";

import { setDocSearchQuery, useDocSearchQuery } from "./doc-search-store";

export default function DocsSearchInput() {
  const searchQuery = useDocSearchQuery();

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search documentation..."
        value={searchQuery}
        onChange={(e) => setDocSearchQuery(e.target.value)}
        className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
      />
    </div>
  );
}
