#!/usr/bin/env node
/**
 * geo:check — assert-based smoke test for the GEO endpoints.
 * Run against a served build: `npm run geo:check` (expects localhost:3000)
 * or `node scripts/geo-check.mjs https://www.fusioncalling.com`.
 * Exits non-zero on the first broken contract so CI/deploy checks stay honest.
 */
import assert from "node:assert/strict";

const BASE = process.argv[2] ?? "http://localhost:3000";

async function get(path) {
  const res = await fetch(`${BASE}${path}`, { redirect: "follow" });
  return { status: res.status, headers: res.headers, text: await res.text() };
}

function ldBlocks(html) {
  return [...html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
  )].map((m) => JSON.parse(m[1]));
}

let failures = 0;
async function check(name, fn) {
  try {
    await fn();
    console.log(`  ok  ${name}`);
  } catch (err) {
    failures++;
    console.error(`FAIL  ${name}\n      ${err.message}`);
  }
}

// -- robots -----------------------------------------------------------------
const robots = await get("/robots.txt");
await check("robots: 200 + AI crawler groups present", () => {
  assert.equal(robots.status, 200);
  for (const ua of [
    "GPTBot", "OAI-SearchBot", "OAI-AdsBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User",
    "ClaudeBot", "Claude-User", "Claude-SearchBot", "Google-Extended",
    "Applebot-Extended", "meta-externalagent", "CCBot", "Bingbot", "Googlebot",
  ]) {
    assert.ok(
      new RegExp(`^User-agent: ${ua.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\s*$`, "im").test(robots.text),
      `missing User-agent group: ${ua}`
    );
  }
});

// -- llms.txt ---------------------------------------------------------------
const llms = await get("/llms.txt");
await check("llms.txt: H1, blockquote, and key links", () => {
  assert.equal(llms.status, 200);
  assert.match(llms.text, /^# Fusion Calling\r?\n/, "first line must be the H1");
  assert.match(llms.text, /^> /m, "needs a blockquote summary");
  for (const path of ["/faq", "/contact", "/llms-full.txt", "/feed.xml", "/pricing", "/whitelabel"]) {
    assert.ok(llms.text.includes(`fusioncalling.com${path}`), `llms.txt missing link to ${path}`);
  }
  const blogLinks = llms.text.match(/fusioncalling\.com\/blog\//g)?.length ?? 0;
  assert.ok(blogLinks >= 10, `expected >=10 blog links, got ${blogLinks}`);
});

// -- ai.txt -------------------------------------------------------------------
const aiTxt = await get("/ai.txt");
await check("ai.txt: machine-readable summary", () => {
  assert.equal(aiTxt.status, 200);
  assert.match(aiTxt.text, /^site_name: Fusion Calling/m);
  for (const key of ["what_it_is:", "business_plans:", "wholesale_plans:", "full_content"]) {
    assert.ok(aiTxt.text.includes(key), `ai.txt missing ${key}`);
  }
});

// Apex host: machine files must be served directly (not redirected), since the
// simple fetchers that consume them often don't follow 301/308s. Only
// checkable against the production domain — localhost has no apex.
if (BASE.includes("fusioncalling.com")) {
  const apex = BASE.replace(/^https?:\/\/www\./, "https://");
  for (const path of ["/llms.txt", "/llms-full.txt", "/ai.txt", "/feed.xml", "/robots.txt", "/sitemap.xml", "/.well-known/ai-plugin.json"]) {
    const res = await fetch(`${apex}${path}`, { redirect: "manual" });
    await check(`apex ${path}: served directly (no redirect)`, () => {
      assert.equal(res.status, 200, `apex returned ${res.status}; redirect exemption missing in next.config.mjs`);
    });
  }
}

const llmsFull = await get("/llms-full.txt");
await check("llms-full.txt: served and covers FAQ/Contact", () => {
  assert.equal(llmsFull.status, 200);
  assert.ok(llmsFull.text.length > 10000, "suspiciously small for full content");
  assert.ok(llmsFull.text.includes("/faq"), "missing FAQ section");
  assert.ok(llmsFull.text.includes("/contact"), "missing Contact section");
});

// -- RSS feed ---------------------------------------------------------------
const feed = await get("/feed.xml");
await check("feed.xml: valid RSS with items", () => {
  assert.equal(feed.status, 200);
  assert.match(feed.headers.get("content-type") ?? "", /application\/rss\+xml/);
  assert.match(feed.text, /^<\?xml version="1\.0"/);
  assert.match(feed.text, /<rss version="2\.0"/);
  const items = feed.text.match(/<item>/g);
  assert.ok(items && items.length >= 10, `expected >=10 items, got ${items?.length ?? 0}`);
  assert.equal(feed.text.match(/<item>/g).length, feed.text.match(/<\/item>/g).length, "unbalanced items");
});

// -- ai-plugin.json -----------------------------------------------------------
const plugin = await get("/.well-known/ai-plugin.json");
await check("ai-plugin.json: valid manifest", () => {
  assert.equal(plugin.status, 200);
  const json = JSON.parse(plugin.text);
  assert.equal(json.schema_version, "v1");
  assert.ok(json.api?.url?.endsWith("/api/docs/openapi.json"), "api.url must point at the OpenAPI spec");
});

// -- sitemap ------------------------------------------------------------------
const sitemap = await get("/sitemap.xml");
await check("sitemap.xml: includes /faq and /contact", () => {
  assert.equal(sitemap.status, 200);
  assert.ok(sitemap.text.includes("<loc>https://www.fusioncalling.com/faq</loc>"));
  assert.ok(sitemap.text.includes("<loc>https://www.fusioncalling.com/contact</loc>"));
});

// -- /faq ---------------------------------------------------------------------
const faq = await get("/faq");
await check("/faq: H1 + FAQPage schema with 15+ visible questions", () => {
  assert.equal(faq.status, 200);
  assert.match(faq.text, /<h1[\s>]/, "missing H1");
  const graphs = ldBlocks(faq.text);
  const faqPage = graphs.find((g) =>
    (g["@graph"] ?? [g]).some((n) => n["@type"] === "FAQPage")
  );
  assert.ok(faqPage, "no FAQPage JSON-LD found");
  const node = (faqPage["@graph"] ?? [faqPage]).find((n) => n["@type"] === "FAQPage");
  assert.ok(node.mainEntity.length >= 15, `only ${node.mainEntity.length} questions in schema`);
  // Every schema question must be visible on the page (Google requirement).
  for (const q of node.mainEntity) {
    assert.ok(faq.text.includes(q.name), `schema question not visible on page: ${q.name}`);
  }
});

// -- /contact -----------------------------------------------------------------
const contact = await get("/contact");
await check("/contact: H1 + ContactPage schema", () => {
  assert.equal(contact.status, 200);
  assert.match(contact.text, /<h1[\s>]/);
  const blocks = ldBlocks(contact.text);
  assert.ok(
    blocks.some((g) => (g["@graph"] ?? [g]).some((n) => n["@type"] === "ContactPage")),
    "no ContactPage JSON-LD found"
  );
});

// -- homepage @graph ------------------------------------------------------------
const home = await get("/");
await check("/ : Organization (entity signals) + Service + WebSite schema", () => {
  assert.equal(home.status, 200);
  const nodes = ldBlocks(home.text).flatMap((g) => g["@graph"] ?? [g]);
  const org = nodes.find((n) => n["@type"] === "Organization");
  assert.ok(org, "no Organization node");
  assert.ok(org.sameAs?.length >= 2, "Organization needs sameAs links");
  assert.ok(org.foundingDate, "Organization missing foundingDate");
  assert.ok(org.knowsAbout?.length >= 3, "Organization missing knowsAbout");
  assert.ok(org.slogan, "Organization missing slogan");
  assert.ok(org.contactPoint?.telephone, "Organization missing contactPoint.telephone");
  assert.ok(nodes.some((n) => n["@type"] === "Service"), "no Service node");
  const website = nodes.find((n) => n["@type"] === "WebSite");
  assert.ok(website?.potentialAction?.["@type"] === "SearchAction", "WebSite missing SearchAction");
  assert.match(home.text, /application\/rss\+xml/, "missing RSS <link rel=alternate>");
});

if (failures > 0) {
  console.error(`\n${failures} check(s) failed against ${BASE}`);
  process.exit(1);
}
console.log(`\nAll GEO checks passed against ${BASE}`);
