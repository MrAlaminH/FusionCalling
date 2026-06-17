"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, CornerDownLeft, FileText } from "lucide-react";
import { ENDPOINTS } from "@/app/docs/api-reference/data/endpoints";
import { scrollToId } from "@/app/docs/api-reference/lib/scroll";
import { onOpenSearch } from "./search-bus";

const METHOD_STYLES: Record<string, string> = {
  GET: "bg-blue-500/15 text-blue-300 ring-blue-500/30",
  POST: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  PATCH: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  DELETE: "bg-red-500/15 text-red-300 ring-red-500/30",
};

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  group: "Endpoints" | "Guide";
  method?: string;
}

const GUIDE_ITEMS: SearchItem[] = [
  { id: "quick-start", title: "Quick Start", subtitle: "Get started in 5 minutes", group: "Guide" },
  { id: "authentication", title: "Authentication", subtitle: "API keys & the Bearer header", group: "Guide" },
  { id: "calendar-api", title: "Calendar API", subtitle: "Manage calendar events", group: "Guide" },
  { id: "cal-datetime-formats", title: "Datetime Formats", subtitle: "Accepted date/time inputs", group: "Guide" },
  { id: "cal-boolean-fields", title: "Boolean Field Rules", subtitle: "all_day, google_meet_enabled", group: "Guide" },
  { id: "leads-api", title: "Leads API", subtitle: "Create, read & update leads", group: "Guide" },
  { id: "leads-fields", title: "Fields & Default Feed", subtitle: "Required/optional fields", group: "Guide" },
  { id: "integration-guides", title: "Integration Guides", subtitle: "GoHighLevel, n8n, Zapier, web forms", group: "Guide" },
  { id: "reference", title: "Reference", subtitle: "Errors, rate limits, best practices", group: "Guide" },
  { id: "error-codes", title: "Error Codes", subtitle: "Status codes & solutions", group: "Guide" },
  { id: "rate-limiting", title: "Rate Limiting", subtitle: "Limits, headers & retries", group: "Guide" },
  { id: "best-practices", title: "Best Practices", subtitle: "Security & performance", group: "Guide" },
  { id: "changelog", title: "Changelog", subtitle: "API version history", group: "Guide" },
];

const ALL_ITEMS: SearchItem[] = [
  ...ENDPOINTS.map<SearchItem>((e) => ({
    id: e.id,
    title: e.summary,
    subtitle: `${e.method} ${e.path}`,
    group: "Endpoints",
    method: e.method,
  })),
  ...GUIDE_ITEMS,
];

function score(query: string, text: string): number | null {
  if (!query) return 0;
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (t.startsWith(q)) return 100 - (t.length - q.length);
  const idx = t.indexOf(q);
  if (idx !== -1) return 60 - idx;
  // subsequence match
  let qi = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++;
  }
  return qi === q.length ? 20 : null;
}

function rank(item: SearchItem, query: string): number | null {
  const s1 = score(query, item.title);
  const s2 = score(query, item.subtitle);
  if (s1 === null && s2 === null) return null;
  return Math.max(s1 ?? 0, s2 ?? 0);
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    const off = onOpenSearch(() => setOpen(true));
    return () => {
      window.removeEventListener("keydown", onKey);
      off();
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const results = useMemo(() => {
    const filtered = ALL_ITEMS.map((item) => ({ item, s: rank(item, query) }))
      .filter((r) => r.s !== null)
      .sort((a, b) => (b.s ?? 0) - (a.s ?? 0))
      .map((r) => r.item)
      .slice(0, 12);
    return filtered;
  }, [query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const choose = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 60);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const sel = results[active];
      if (sel) choose(sel.id);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-[12vh] z-[61] w-[calc(100vw-2rem)] max-w-xl -translate-x-1/2 outline-none"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="overflow-hidden rounded-xl border border-white/15 bg-zinc-950/95 shadow-2xl shadow-black/50 ring-1 ring-white/5">
            <div className="flex items-center gap-2.5 border-b border-white/10 px-4">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search endpoints and guide…"
                className="h-12 flex-1 bg-transparent text-sm text-white placeholder-gray-600 outline-none"
              />
              <kbd className="hidden sm:inline-flex items-center rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-gray-500">
                Esc
              </kbd>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-gray-500">
                  No results for “{query}”
                </p>
              ) : (
                <ul>
                  {results.map((item, i) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => choose(item.id)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                          i === active ? "bg-white/10" : "hover:bg-white/5"
                        }`}
                      >
                        {item.method ? (
                          <span
                            className={`inline-flex items-center justify-center h-5 min-w-[2.5rem] px-1.5 rounded text-[10px] font-bold ring-1 ${METHOD_STYLES[item.method]}`}
                          >
                            {item.method}
                          </span>
                        ) : (
                          <FileText className="h-4 w-4 text-gray-500 shrink-0" />
                        )}
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm text-gray-100 truncate">{item.title}</span>
                          <span className="block text-xs text-gray-500 truncate">{item.subtitle}</span>
                        </span>
                        {i === active && (
                          <CornerDownLeft className="h-3.5 w-3.5 text-gray-600 shrink-0" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[11px] text-gray-600">
              <span>Search Fusion Calling API Reference</span>
              <span className="flex items-center gap-2">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
              </span>
            </div>
          </div>
          <Dialog.Title className="sr-only">Search API reference</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search endpoints and guide sections.
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
