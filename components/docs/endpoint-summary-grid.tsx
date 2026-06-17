"use client";

import { Endpoint } from "@/app/docs/api-reference/data/endpoints";
import { scrollToId } from "@/app/docs/api-reference/lib/scroll";
import { ArrowRight } from "lucide-react";

const METHOD_STYLES: Record<string, string> = {
  GET: "bg-blue-500/15 text-blue-300 ring-blue-500/30",
  POST: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  PATCH: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  DELETE: "bg-red-500/15 text-red-300 ring-red-500/30",
};

export default function EndpointSummaryGrid({
  endpoints,
}: {
  endpoints: Endpoint[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {endpoints.map((e) => (
        <button
          key={e.id}
          type="button"
          onClick={() => scrollToId(e.id)}
          className="group text-left rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-colors p-3"
        >
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center justify-center h-5 px-1.5 rounded text-[10px] font-bold tracking-wide ring-1 ${METHOD_STYLES[e.method]}`}
            >
              {e.method}
            </span>
            <code className="font-mono text-xs text-gray-200 truncate">{e.path}</code>
            <ArrowRight className="h-3.5 w-3.5 ml-auto text-gray-600 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>
          <p className="mt-1.5 text-xs text-gray-500 truncate">{e.summary}</p>
        </button>
      ))}
    </div>
  );
}
