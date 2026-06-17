"use client";

import { useMemo, useState } from "react";
import {
  Link2,
  Loader2,
  Send,
  RotateCcw,
  Asterisk,
  ListChecks,
  Terminal,
  CornerDownRight,
} from "lucide-react";
import { Endpoint, Param, BASE_URL } from "@/app/docs/api-reference/data/endpoints";
import {
  buildRequest,
  renderRequest,
  languageOf,
} from "@/app/docs/api-reference/lib/codegen";
import { buildPermalink } from "@/app/docs/api-reference/lib/scroll";
import { useLanguage } from "./language-context";
import LanguageTabs from "./language-tabs";
import CopyButton from "./copy-button";
import ParamTable from "./param-table";
import CodeBlock from "./code-block";

type Tab = "params" | "try" | "response";

const METHOD_STYLES: Record<string, string> = {
  GET: "bg-blue-500/15 text-blue-300 ring-blue-500/30",
  POST: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  PATCH: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  DELETE: "bg-red-500/15 text-red-300 ring-red-500/30",
};

const PRIORITY_STYLES: Record<string, { label: string; cls: string }> = {
  essential: { label: "Essential", cls: "bg-red-500/10 text-red-300 ring-red-500/20" },
  frequent: { label: "Frequent", cls: "bg-amber-500/10 text-amber-300 ring-amber-500/20" },
  advanced: { label: "Advanced", cls: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20" },
};

function seedValues(params?: Param[]): Record<string, string> {
  const out: Record<string, string> = {};
  params?.forEach((p) => {
    if (p.default !== undefined) out[p.name] = p.default;
  });
  return out;
}

function statusTone(code: number) {
  if (code >= 200 && code < 300) return "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30";
  if (code >= 400 && code < 500) return "bg-amber-500/15 text-amber-300 ring-amber-500/30";
  if (code >= 500) return "bg-red-500/15 text-red-300 ring-red-500/30";
  return "bg-white/10 text-gray-300 ring-white/20";
}

/** Split a path like /events/{id} into segments, highlighting {params}. */
function renderPath(path: string) {
  return path.split(/(\{[^}]+\})/g).map((seg, i) => {
    if (/^\{[^}]+\}$/.test(seg)) {
      return (
        <span key={i} className="text-orange-400">
          {seg}
        </span>
      );
    }
    return <span key={i}>{seg}</span>;
  });
}

function Field({
  param,
  value,
  onChange,
}: {
  param: Param;
  value: string;
  onChange: (v: string) => void;
}) {
  const inputCls =
    "w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 transition-colors";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
        <code className="text-orange-400 text-sm">{param.name}</code>
        <span className="text-[11px] text-gray-500">{param.type}</span>
        {param.required ? (
          <span className="inline-flex items-center gap-0.5 text-[11px] text-red-400">
            <Asterisk className="h-2.5 w-2.5" /> required
          </span>
        ) : (
          <span className="text-[11px] text-gray-500">optional</span>
        )}
      </div>
      {param.kind === "boolean" ? (
        <select value={value} onChange={(e) => onChange(e.target.value)} className={inputCls}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      ) : param.enum ? (
        <select value={value} onChange={(e) => onChange(e.target.value)} className={inputCls}>
          <option value="">— none —</option>
          {param.enum.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : param.kind === "array" || param.kind === "object" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={param.example}
          rows={2}
          className={`${inputCls} font-mono resize-y`}
        />
      ) : (
        <input
          type={param.kind === "number" ? "number" : "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={param.example}
          className={inputCls}
        />
      )}
      <p className="mt-1 text-xs text-gray-500">{param.description}</p>
    </div>
  );
}

export default function EndpointCard({ endpoint }: { endpoint: Endpoint }) {
  const { language } = useLanguage();
  const [tab, setTab] = useState<Tab>("params");
  const [apiKey, setApiKey] = useState("YOUR_API_KEY");
  const [pathValues, setPathValues] = useState(() => seedValues(endpoint.pathParams));
  const [queryValues, setQueryValues] = useState(() => seedValues(endpoint.queryParams));
  const [bodyValues, setBodyValues] = useState(() => seedValues(endpoint.bodyParams));
  const [linkCopied, setLinkCopied] = useState(false);
  const [sendState, setSendState] = useState<"idle" | "loading" | "done">("idle");

  const request = useMemo(
    () =>
      buildRequest({
        method: endpoint.method,
        baseUrl: BASE_URL,
        path: endpoint.path,
        apiKey,
        pathParams: endpoint.pathParams,
        queryParams: endpoint.queryParams,
        bodyParams: endpoint.bodyParams,
        pathValues,
        queryValues,
        bodyValues,
      }),
    [endpoint, apiKey, pathValues, queryValues, bodyValues],
  );

  const code = useMemo(
    () => renderRequest(language, request),
    [language, request],
  );

  const hasParams =
    (endpoint.pathParams?.length ?? 0) +
      (endpoint.queryParams?.length ?? 0) +
      (endpoint.bodyParams?.length ?? 0) >
    0;

  const onSend = () => {
    setSendState("loading");
    window.setTimeout(() => setSendState("done"), 650);
  };

  const copyLink = () => {
    navigator.clipboard?.writeText(buildPermalink(endpoint.id));
    setLinkCopied(true);
    window.setTimeout(() => setLinkCopied(false), 2000);
  };

  const tabs: { id: Tab; label: string; icon: typeof ListChecks }[] = [
    { id: "params", label: "Parameters", icon: ListChecks },
    { id: "try", label: "Try it", icon: Terminal },
    { id: "response", label: "Response", icon: CornerDownRight },
  ];

  return (
    <div
      id={endpoint.id}
      className="scroll-mt-28 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-white/10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <span
              className={`inline-flex items-center justify-center h-7 px-2.5 rounded-md text-xs font-bold tracking-wide ring-1 ${METHOD_STYLES[endpoint.method]}`}
            >
              {endpoint.method}
            </span>
            <div className="min-w-0">
              <code className="block font-mono text-sm sm:text-base break-all text-gray-100">
                {renderPath(endpoint.path)}
              </code>
              <p className="mt-1 text-sm text-gray-400">{endpoint.summary}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {endpoint.priority && (
              <span
                className={`hidden sm:inline-flex items-center text-[11px] px-2 py-1 rounded-md ring-1 ${PRIORITY_STYLES[endpoint.priority].cls}`}
              >
                {PRIORITY_STYLES[endpoint.priority].label}
              </span>
            )}
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copy link to this endpoint"
              className="inline-flex items-center justify-center h-8 w-8 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
            >
              {linkCopied ? <span className="text-green-400 text-xs">✓</span> : <Link2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-3 sm:px-4 pt-2">
        <div role="tablist" className="flex items-center gap-1 border-b border-white/10">
          {tabs.map((t) => {
            const active = tab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className={`relative inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
                {active && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-orange-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        {tab === "params" && (
          <div className="space-y-5">
            {endpoint.useCases && endpoint.useCases.length > 0 && (
              <div className="text-xs text-gray-400">
                <span className="text-gray-500">Use cases: </span>
                {endpoint.useCases.join(" · ")}
              </div>
            )}
            {!hasParams && (
              <p className="text-sm italic text-gray-500">
                This endpoint takes no parameters.
              </p>
            )}
            {endpoint.pathParams && endpoint.pathParams.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Path Parameters
                </h5>
                <ParamTable params={endpoint.pathParams} />
              </div>
            )}
            {endpoint.queryParams && endpoint.queryParams.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Query Parameters
                </h5>
                <ParamTable params={endpoint.queryParams} />
              </div>
            )}
            {endpoint.bodyParams && endpoint.bodyParams.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Request Body
                </h5>
                <ParamTable params={endpoint.bodyParams} />
              </div>
            )}

            {/* Quick success response preview */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Success Response
                </h5>
                <span
                  className={`inline-flex items-center justify-center h-5 px-1.5 rounded text-[11px] font-bold ring-1 ${statusTone(endpoint.responseStatus)}`}
                >
                  {endpoint.responseStatus}
                </span>
              </div>
              <CodeBlock code={endpoint.responseExample} language="json" />
              <p className="mt-2 text-xs text-gray-500">
                Need every status code and common errors?{" "}
                <button
                  type="button"
                  onClick={() => setTab("response")}
                  className="text-orange-400 hover:text-orange-300 underline-offset-2 hover:underline"
                >
                  View the Response tab
                </button>
                .
              </p>
            </div>
          </div>
        )}

        {tab === "try" && (
          <div className="space-y-5">
            {/* API key */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                API Key
              </label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="YOUR_API_KEY"
                className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 font-mono focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30"
              />
            </div>

            {/* Editable fields */}
            {endpoint.pathParams?.map((p) => (
              <Field
                key={p.name}
                param={p}
                value={pathValues[p.name] ?? ""}
                onChange={(v) => setPathValues((s) => ({ ...s, [p.name]: v }))}
              />
            ))}
            {endpoint.queryParams?.map((p) => (
              <Field
                key={p.name}
                param={p}
                value={queryValues[p.name] ?? ""}
                onChange={(v) => setQueryValues((s) => ({ ...s, [p.name]: v }))}
              />
            ))}
            {endpoint.bodyParams?.map((p) => (
              <Field
                key={p.name}
                param={p}
                value={bodyValues[p.name] ?? ""}
                onChange={(v) => setBodyValues((s) => ({ ...s, [p.name]: v }))}
              />
            ))}

            {/* Generated request */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Request
                </h5>
                <div className="flex items-center gap-2">
                  <LanguageTabs />
                  <CopyButton value={code} iconOnly label="Copy request" />
                </div>
              </div>
              <CodeBlock code={code} language={languageOf(language)} />
            </div>

            {/* Send + simulated response */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <button
                  type="button"
                  onClick={onSend}
                  disabled={sendState === "loading"}
                  className="inline-flex items-center gap-2 h-9 px-3.5 rounded-md bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-sm font-medium transition-colors"
                >
                  {sendState === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {sendState === "loading" ? "Sending…" : "Send"}
                </button>
                {sendState === "done" && (
                  <button
                    type="button"
                    onClick={() => setSendState("idle")}
                    className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Reset
                  </button>
                )}
                <span className="text-xs text-gray-500">
                  Simulated response — no real request is sent.
                </span>
              </div>

              {sendState === "done" && (
                <div className="rounded-lg border border-white/10 bg-black/40 overflow-hidden">
                  <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
                    <span
                      className={`inline-flex items-center justify-center h-6 min-w-[2.5rem] px-2 rounded text-xs font-bold ring-1 ${statusTone(endpoint.responseStatus)}`}
                    >
                      {endpoint.responseStatus}
                    </span>
                    <span className="text-xs text-gray-400">
                      {endpoint.responseStatus < 300 ? "OK" : endpoint.responseStatus < 500 ? "Client Error" : "Server Error"}
                    </span>
                  </div>
                  <div className="px-4 py-2 text-[11px] text-gray-500 font-mono border-b border-white/5 space-y-0.5">
                    <div>content-type: application/json</div>
                    <div>x-ratelimit-limit: {endpoint.section === "calendar" ? 12 : 100}</div>
                    <div>x-ratelimit-remaining: {endpoint.section === "calendar" ? 11 : 99}</div>
                  </div>
                  <CodeBlock code={endpoint.responseExample} language="json" />
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "response" && (
          <div className="space-y-5">
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Example Response · {endpoint.responseStatus}
              </h5>
              <CodeBlock code={endpoint.responseExample} language="json" />
            </div>
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Status Codes
              </h5>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {endpoint.statusCodes.map((s) => (
                  <div
                    key={s.code}
                    className="flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                  >
                    <span
                      className={`inline-flex items-center justify-center h-5 min-w-[2.25rem] px-1.5 rounded text-[11px] font-bold ring-1 ${statusTone(s.code)}`}
                    >
                      {s.code}
                    </span>
                    <span className="text-sm text-gray-300">{s.description}</span>
                  </div>
                ))}
              </div>
            </div>
            {endpoint.commonErrors && endpoint.commonErrors.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Common Errors
                </h5>
                <div className="space-y-2">
                  {endpoint.commonErrors.map((e, i) => (
                    <div
                      key={i}
                      className="rounded-md border border-red-500/15 bg-red-500/[0.04] px-3 py-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-red-300">{e.code}</span>
                        <span className="text-sm text-gray-200">{e.condition}</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-400">
                        <span className="text-emerald-400/80">Fix: </span>
                        {e.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
