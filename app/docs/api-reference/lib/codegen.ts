import type { Method, Param } from "@/app/docs/api-reference/data/endpoints";

export type CodeLang = "bash" | "javascript" | "python" | "php";

export const LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: "bash", label: "cURL" },
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "php", label: "PHP" },
];

type Values = Record<string, string>;

/** Convert a raw input string into a typed JS value based on the param kind. */
function coerce(kind: Param["kind"], raw: string): unknown {
  if (raw === undefined || raw === "") return undefined;
  switch (kind) {
    case "boolean":
      return raw === "true";
    case "number": {
      const n = Number(raw);
      return Number.isNaN(n) ? raw : n;
    }
    case "array":
      try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        return raw.split(",").map((s) => s.trim()).filter(Boolean);
      }
    case "object":
      try {
        return JSON.parse(raw);
      } catch {
        return raw;
      }
    default:
      return raw;
  }
}

/** Build the request body object from params + current input values. */
function buildBody(params: Param[] | undefined, values: Values): Record<string, unknown> | undefined {
  if (!params || params.length === 0) return undefined;
  const body: Record<string, unknown> = {};
  for (const p of params) {
    const raw = values[p.name] ?? p.default ?? "";
    const value = coerce(p.kind, raw);
    if (value === undefined || value === "") {
      if (p.required) body[p.name] = coerce(p.kind, p.example ?? "") ?? "";
    } else {
      body[p.name] = value;
    }
  }
  return Object.keys(body).length > 0 ? body : undefined;
}

export interface RequestModel {
  method: Method;
  url: string;
  apiKey: string;
  body?: string; // compact JSON string
}

export function buildRequest(opts: {
  method: Method;
  baseUrl: string;
  path: string;
  apiKey: string;
  pathParams?: Param[];
  queryParams?: Param[];
  bodyParams?: Param[];
  pathValues?: Values;
  queryValues?: Values;
  bodyValues?: Values;
}): RequestModel {
  const {
    method,
    baseUrl,
    path,
    apiKey,
    pathParams,
    queryParams,
    bodyParams,
    pathValues = {},
    queryValues = {},
    bodyValues = {},
  } = opts;

  let resolvedPath = path;
  (pathParams ?? []).forEach((p) => {
    const v = pathValues[p.name] ?? p.default ?? "";
    resolvedPath = resolvedPath.replace(`{${p.name}}`, encodeURIComponent(v || p.example || `{${p.name}}`));
  });

  const url = new URL(baseUrl + resolvedPath);
  (queryParams ?? []).forEach((p) => {
    const v = queryValues[p.name] ?? p.default ?? "";
    if (v.trim() !== "") url.searchParams.set(p.name, v);
  });

  const bodyObj = buildBody(bodyParams, bodyValues);
  return {
    method,
    url: url.toString(),
    apiKey,
    body: bodyObj ? JSON.stringify(bodyObj) : undefined,
  };
}

export function toCurl(r: RequestModel): string {
  const lines = [`curl -X ${r.method} "${r.url}" \\`, `  -H "Authorization: Bearer ${r.apiKey}"`];
  if (r.body) {
    const body = r.body.replace(/'/g, `'\\''`);
    lines.push(`  -H "Content-Type: application/json" \\`);
    lines.push(`  -d '${body}'`);
  } else {
    lines[lines.length - 1] = lines[lines.length - 1].replace(/ \\$/, "");
  }
  return lines.join("\n");
}

export function toJavaScript(r: RequestModel): string {
  const headers: string[] = [`    "Authorization": "Bearer ${r.apiKey}",`];
  if (r.body) headers.push(`    "Content-Type": "application/json",`);
  const bodyLine = r.body ? `  body: JSON.stringify(${r.body}),\n` : "";
  return `const res = await fetch("${r.url}", {
  method: "${r.method}",
  headers: {
${headers.join("\n").replace(/,$/, "")}
  },
${bodyLine}});

const data = await res.json();
console.log(data);`;
}

export function toPython(r: RequestModel): string {
  const bodyEsc = r.body ? r.body.replace(/'/g, "\\'") : "";
  const dataLine = r.body ? `, data='${bodyEsc}'` : "";
  return `import requests

headers = {
    "Authorization": "Bearer ${r.apiKey}",${
      r.body ? '\n    "Content-Type": "application/json",' : ""
    }
}

response = requests.${r.method.toLowerCase()}("${r.url}"${dataLine}, headers=headers)
print(response.json())`;
}

export function toPhp(r: RequestModel): string {
  const headers: string[] = [`    "Authorization: Bearer ${r.apiKey}",`];
  if (r.body) headers.push(`    "Content-Type: application/json",`);
  const bodyEsc = r.body ? r.body.replace(/'/g, "\\'") : "";
  const bodyLine = r.body ? `curl_setopt($ch, CURLOPT_POSTFIELDS, '${bodyEsc}');\n` : "";
  return `<?php
$ch = curl_init("${r.url}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${r.method}");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
${headers.join("\n").replace(/,\s*$/, "")}
]);
${bodyLine}$response = curl_exec($ch);
curl_close($ch);`;
}

export function renderRequest(lang: CodeLang, r: RequestModel): string {
  switch (lang) {
    case "javascript":
      return toJavaScript(r);
    case "python":
      return toPython(r);
    case "php":
      return toPhp(r);
    default:
      return toCurl(r);
  }
}

export function languageOf(lang: CodeLang): string {
  return lang === "bash" ? "bash" : lang;
}
