// Extract all JSON-LD blocks from target pages and write a normalized snapshot.
// Usage: node scripts/schema-snapshot.mjs <outfile> [baseUrl]
import { writeFileSync } from "node:fs";

const BASE = process.argv[3] || "http://localhost:3111";
const OUT = process.argv[2] || "/tmp/fc-schema-baseline.json";

const blogSlugs = [
  "ai-receptionist-cost", "ai-voice-agents-for-small-business",
  "gohighlevel-alternative-for-voice-ai", "gohighlevel-white-label-voice",
  "how-to-automate-phone-calls-with-ai", "how-to-start-a-voice-ai-agency",
  "retell-ai-white-label", "vapi-vs-retell-vs-elevenlabs",
  "vapi-white-label-platform", "voice-ai-security-compliance",
  "will-ai-replace-receptionists",
];
const comparisonSlugs = [
  "chatdash", "vapify", "voicerr", "voiceaiwrapper", "synthflow", "thinkrr",
  "bland-ai", "air-ai", "vapi", "retell", "elevenlabs", "gohighlevel",
  "aioncalls", "birdcall", "voiceflow", "voicestamp", "voicelate", "famulor",
  "verloop", "drop-cowboy",
];
const paths = [
  "/blog", ...blogSlugs.map((s) => `/blog/${s}`),
  "/alternative", ...comparisonSlugs.map((s) => `/alternative/${s}`),
  "/whitelabel", "/whitelabel/vapi", "/whitelabel/retell",
  "/whitelabel/elevenlabs", "/whitelabel/gohighlevel",
  "/whitelabel/compare", "/whitelabel/case-studies",
  "/whitelabel/locations", "/whitelabel/reseller-program",
];

function extractLd(html) {
  const blocks = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      blocks.push(JSON.parse(m[1]));
    } catch {
      blocks.push({ _parseError: true });
    }
  }
  return blocks;
}

// Reduce a schema graph to a stable summary: per block, @type list + @id list +
// FAQ question names + breadcrumb item names. Keeps the diff readable while
// still catching lost nodes, lost FAQs, and broken @id references.
function summarize(block) {
  const out = { types: [], ids: [], faqs: [], crumbs: [] };
  const visit = (n) => {
    if (Array.isArray(n)) return n.forEach(visit);
    if (!n || typeof n !== "object") return;
    if (typeof n["@type"] === "string") out.types.push(n["@type"]);
    if (Array.isArray(n["@type"])) out.types.push(...n["@type"]);
    if (typeof n["@id"] === "string") out.ids.push(n["@id"]);
    if (n["@type"] === "Question" && typeof n.name === "string") out.faqs.push(n.name);
    if (n["@type"] === "ListItem" && typeof n.name === "string") out.crumbs.push(n.name);
    for (const [k, v] of Object.entries(n)) {
      if (k !== "@type" && k !== "@id" && typeof v === "object") visit(v);
    }
  };
  visit(block);
  out.types.sort();
  out.ids.sort();
  return out;
}

const snapshot = {};
let failures = 0;
for (const path of paths) {
  try {
    const res = await fetch(`${BASE}${path}`);
    const html = await res.text();
    snapshot[path] = {
      status: res.status,
      blocks: extractLd(html).map(summarize),
    };
    if (res.status !== 200) failures++;
  } catch (e) {
    snapshot[path] = { status: `ERROR: ${e.message}`, blocks: [] };
    failures++;
  }
  console.log(`${snapshot[path].status} ${path}`);
}

writeFileSync(OUT, JSON.stringify(snapshot, null, 2));
console.log(`\nWrote ${OUT} (${paths.length} pages, ${failures} non-200)`);
if (failures > 0) process.exit(1);
