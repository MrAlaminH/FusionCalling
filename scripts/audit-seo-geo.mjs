// Reproducible SEO/GEO audit harness.
// Crawls the statically-built Next.js output (.next/server/app) and scores:
//  - crawlability (sitemap coverage, robots AI-bot access)
//  - indexation (canonical, noindex, metadata present)
//  - titles, descriptions, H1
//  - internal links
//  - structured data (JSON-LD, FAQPage)
//  - GEO signals (citations/authoritative external links, statistics, answer-first intro)
//  - answer-readiness vs target query benchmark
// Usage: node scripts/audit-seo-geo.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SERVER = path.join(ROOT, ".next", "server", "app");

const SITE_URL = "https://www.fusioncalling.com";

function htmlFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) htmlFiles(full, acc);
    else if (ent.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function pathForFile(file) {
  const rel = path.relative(SERVER, file).replace(/\\/g, "/").replace(/\.html$/, "");
  if (rel === "index") return "/";
  return "/" + rel;
}

function grab(html, re) {
  const m = html.match(re);
  return m ? m[1] : null;
}
function grabAll(html, re) {
  return [...html.matchAll(re)].map((m) => m[1]);
}

// ---- Collect pages ----
const files = htmlFiles(SERVER).filter((f) => !f.includes("_not-found"));
const pages = [];
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  const url = pathForFile(f);
  const title = grab(html, /<title>([^<]*)<\/title>/i);
  const description = grab(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = grab(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const robotsMeta = grab(html, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const h1 = grabAll(html, /<h1[^>]*>(.*?)<\/h1>/gis).map((s) =>
    s.replace(/<[^>]+>/g, "").trim()
  );
  const ldJson = grabAll(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  let hasFaq = false;
  let validLd = 0;
  for (const block of ldJson) {
    try {
      const parsed = JSON.parse(block);
      const graph = Array.isArray(parsed) ? parsed : parsed["@graph"] || [parsed];
      const flat = Array.isArray(parsed) ? parsed : graph;
      const arr = Array.isArray(parsed) ? parsed : graph;
      const types = arr.flatMap((n) => [n["@type"]]).filter(Boolean);
      if (types.includes("FAQPage")) hasFaq = true;
      validLd++;
    } catch {
      /* invalid json-ld */
    }
  }
  // Strip tags, count words
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.split(/\s+/).filter(Boolean).length;

  // First paragraph (visible body text) - answer-first heuristic
  const firstP = grab(html, /<p[^>]*>([\s\S]*?)<\/p>/i);
  const firstPText = firstP ? firstP.replace(/<[^>]+>/g, "").trim() : "";

  // Links
  const internalLinks = grabAll(html, /<a\s+[^>]*href="(\/[^"]*)"/gi).map((h) =>
    h.split("#")[0]
  );
  const extLinks = grabAll(html, /<a\s+[^>]*href="(https?:\/\/[^"]*)"/gi)
    .map((h) => new URL(h).hostname.replace(/^www\./, ""))
    .filter((h) => !h.includes("fusioncalling.com"));
  const uniqueExt = [...new Set(extLinks)];

  // Images alt
  const imgTags = grabAll(html, /<img[^>]*>/gi);
  const imgsNoAlt = imgTags.filter((t) => !/\salt=/.test(t)).length;
  const imgsTotal = imgTags.length;

  // Statistics signal: percentages or numbers with context
  const hasStats = /\b\d{1,3}%\b|\$\d|\b\d{2,}\+?\s*(minutes|calls|hours|users|businesses|agents|customers)\b/i.test(
    text
  );

  pages.push({
    url,
    title,
    titleLen: title ? title.length : 0,
    description,
    descLen: description ? description.length : 0,
    canonical,
    robotsMeta,
    h1Count: h1.length,
    h1: h1[0] || null,
    validLd,
    hasFaq,
    words,
    firstPLen: firstPText.length,
    firstP: firstPText.slice(0, 160),
    internalCount: new Set(internalLinks).size,
    extCitationDomains: uniqueExt,
    extCitations: uniqueExt.length,
    imgsNoAlt,
    imgsTotal,
    hasStats,
  });
}

// ---- Sitemap coverage ----
const sitemapPath = path.join(SERVER, "sitemap.xml");
const sitemapRaw = fs.readFileSync(sitemapPath + ".body", "utf8");
const sitemapUrls = grabAll(sitemapRaw, /<loc>([^<]+)<\/loc>/g).map((u) =>
  u.replace(SITE_URL, "")
);
const sitemapSet = new Set(sitemapUrls);
const pagePathSet = new Set(pages.map((p) => p.url));
const indexablePages = pages.filter((p) => p.robotsMeta !== "noindex");
const missingFromSitemap = indexablePages
  .map((p) => p.url)
  .filter((u) => !sitemapSet.has(u));
const sitemapOrphans = sitemapUrls.filter((u) => !pagePathSet.has(u));

// ---- robots AI-bot access ----
const robotsRaw = fs.readFileSync(path.join(SERVER, "robots.txt.body"), "utf8");
const aiBots = [
  "Googlebot",
  "Bingbot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "CCBot",
];
const allowedBots = aiBots.filter((b) => {
  const re = new RegExp(`user-agent:\\s*${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i");
  return re.test(robotsRaw);
});

// ---- Target-query benchmark ----
// Each target query should map to one answer-ready page (indexable, in sitemap,
// has canonical, has FAQ/answer-first, has citations, title present).
const targetQueries = [
  { q: "ai phone call automation", url: "/" },
  { q: "ai receptionist", url: "/" },
  { q: "ai voice agents for real estate", url: "/industries/ai-voice-for-real-estate" },
  { q: "ai voice agents for dental", url: "/industries/ai-voice-for-dental" },
  { q: "vapi alternative", url: "/alternative/vapify" },
  { q: "bland ai alternative", url: "/alternative/bland-ai" },
  { q: "synthflow alternative", url: "/alternative/synthflow" },
  { q: "go high level white label voice", url: "/whitelabel/gohighlevel" },
  { q: "what is an ai voice agent", url: "/glossary/ai-voice-agent" },
  { q: "ai call cost calculator", url: "/calculator" },
  { q: "ai phone call automation docs", url: "/docs" },
];
const pageByUrl = Object.fromEntries(pages.map((p) => [p.url, p]));
const benchmark = targetQueries.map((t) => {
  const p = pageByUrl[t.url];
  const issues = [];
  if (!p) issues.push("no page rendered");
  else {
    if (!sitemapSet.has(p.url)) issues.push("not in sitemap");
    if (!p.canonical) issues.push("no canonical");
    if (!p.title) issues.push("no title");
    else if (p.titleLen < 25 || p.titleLen > 65) issues.push("title length");
    if (!p.description) issues.push("no meta description");
    if (!p.hasFaq && !p.hasStats) issues.push("no answer/citation signal");
    if (p.extCitations === 0) issues.push("no external citations");
    if (p.words < 300) issues.push("thin content");
  }
  return { q: t.q, url: t.url, ready: issues.length === 0, issues };
});

// ---- Score & rank gaps ----
const issues = [];
for (const p of pages) {
  if (p.robotsMeta !== "noindex") {
    if (!sitemapSet.has(p.url))
      issues.push({ impact: "CRITICAL", area: "crawlability", url: p.url, msg: "Page missing from sitemap.xml" });
    if (!p.canonical)
      issues.push({ impact: "HIGH", area: "indexation", url: p.url, msg: "Missing canonical URL" });
  }
  if (!p.title) issues.push({ impact: "HIGH", area: "title", url: p.url, msg: "Missing <title>" });
  else if (p.titleLen < 25)
    issues.push({ impact: "MED", area: "title", url: p.url, msg: `Title too short (${p.titleLen})` });
  else if (p.titleLen > 65)
    issues.push({ impact: "MED", area: "title", url: p.url, msg: `Title too long (${p.titleLen})` });
  if (!p.description)
    issues.push({ impact: "HIGH", area: "indexation", url: p.url, msg: "Missing meta description" });
  else if (p.descLen < 70 || p.descLen > 160)
    issues.push({ impact: "LOW", area: "description", url: p.url, msg: `Meta desc length ${p.descLen}` });
  if (p.h1Count === 0)
    issues.push({ impact: "HIGH", area: "page intent", url: p.url, msg: "No H1" });
  else if (p.h1Count > 1)
    issues.push({ impact: "MED", area: "page intent", url: p.url, msg: `Multiple H1 (${p.h1Count})` });
  if (p.validLd === 0 && p.url !== "/privacy" && p.url !== "/terms")
    issues.push({ impact: "MED", area: "structured data", url: p.url, msg: "No JSON-LD structured data" });
  if (p.words < 300)
    issues.push({ impact: "HIGH", area: "answer-first content", url: p.url, msg: `Thin content (${p.words} words)` });
  if (p.extCitations === 0)
    issues.push({ impact: "HIGH", area: "source citations", url: p.url, msg: "No external authoritative citations (GEO -40%)" });
  if (p.internalCount < 3)
    issues.push({ impact: "MED", area: "internal links", url: p.url, msg: `Few internal links (${p.internalCount})` });
  if (p.imgsTotal > 0 && p.imgsNoAlt > 0)
    issues.push({ impact: "LOW", area: "accessibility", url: p.url, msg: `${p.imgsNoAlt}/${p.imgsTotal} imgs missing alt` });
}

const order = { CRITICAL: 0, HIGH: 1, MED: 2, LOW: 3 };
issues.sort((a, b) => order[a.impact] - order[b.impact]);

// ---- Report ----
console.log("=".repeat(70));
console.log("SEO/GEO AUDIT REPORT");
console.log("=".repeat(70));
console.log(`\nPages audited: ${pages.length}`);
console.log(`Sitemap URLs: ${sitemapUrls.length}`);
console.log(`AI bots allowed in robots.txt: ${allowedBots.length}/${aiBots.length} (${allowedBots.join(", ")})`);

console.log("\n--- CRAWLABILITY: indexable pages missing from sitemap ---");
if (missingFromSitemap.length === 0) console.log("  none");
else missingFromSitemap.forEach((u) => console.log("  MISSING: " + u));
if (sitemapOrphans.length) {
  console.log("--- Sitemap URLs with no rendered page (orphans) ---");
  sitemapOrphans.forEach((u) => console.log("  ORPHAN: " + u));
}

console.log("\n--- TARGET-QUERY BENCHMARK (answer-ready?) ---");
for (const b of benchmark)
  console.log(`  [${b.ready ? "READY" : "GAP  "}] ${b.q} -> ${b.url} ${b.issues.length ? ":: " + b.issues.join(", ") : ""}`);

console.log("\n--- RANKED GAPS ---");
const counts = {};
for (const i of issues) counts[i.impact] = (counts[i.impact] || 0) + 1;
console.log("  Impact totals:", JSON.stringify(counts));
const byArea = {};
for (const i of issues) {
  const key = `${i.area}:${i.msg}`;
  byArea[key] = byArea[key] || { ...i, urls: [] };
  byArea[key].urls.push(i.url);
}
for (const k of Object.keys(byArea)) {
  const g = byArea[k];
  console.log(`  [${g.impact}] ${k} (${g.urls.length} page(s))`);
}

// Machine-readable summary for diffing across runs
const summary = {
  pages: pages.length,
  sitemapMissing: missingFromSitemap,
  sitemapOrphans,
  benchmarkReady: benchmark.filter((b) => b.ready).length,
  benchmarkTotal: benchmark.length,
  issuesByImpact: counts,
  criticalOrHigh: issues.filter((i) => i.impact === "CRITICAL" || i.impact === "HIGH").length,
};
fs.writeFileSync(path.join(ROOT, "audit-summary.json"), JSON.stringify(summary, null, 2));
console.log("\nSUMMARY: " + JSON.stringify(summary));
