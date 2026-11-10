// Guard: homepage FAQ copy lives twice — components/FAQs.tsx (rendered accordion)
// and the FAQPage JSON-LD in app/page.tsx. They must stay in sync or the schema
// goes stale. Run: node scripts/check-faq-sync.mjs
// ponytail: regex extraction assumes plain-string answers with no "}" inside
// and the question-then-answer field order; if FAQ answers ever become JSX or
// reorder fields, rewrite this as a proper AST parse.
import { readFileSync } from "node:fs";

const str = String.raw`((?:[^"\\]|\\.)*)`;
const tsx = readFileSync("components/FAQs.tsx", "utf8");
const page = readFileSync("app/page.tsx", "utf8");

const rxTsx = new RegExp(String.raw`question:\s*"?` + str + String.raw`"?,\s*\n\s*answer:\s*"?` + str, "g");
const rxJsonLd = new RegExp(String.raw`name:\s*"` + str + String.raw`",\s*\n\s*acceptedAnswer:\s*\{\s*"@type":\s*"Answer",\s*text:\s*"` + str + `"`, "g");

const extract = (content, rx) => {
  const map = new Map();
  for (const [, q, a] of content.matchAll(rx)) map.set(q.replace(/\\"/g, '"'), a.replace(/\\"/g, '"'));
  return map;
};

const rendered = extract(tsx, rxTsx);
const schema = extract(page, rxJsonLd);

let failed = false;
for (const [q, a] of rendered) {
  if (!schema.has(q)) { console.error(`✗ missing from JSON-LD: "${q}"`); failed = true; }
  else if (schema.get(q) !== a) { console.error(`✗ answer drift: "${q}"`); failed = true; }
}
for (const q of schema.keys()) {
  if (!rendered.has(q)) { console.error(`✗ missing from FAQs.tsx: "${q}"`); failed = true; }
}

if (rendered.size === 0) { console.error("✗ extracted 0 FAQ pairs — regex or file layout changed"); process.exit(1); }
if (failed) process.exit(1);
console.log(`✓ ${rendered.size} FAQ entries in sync between components/FAQs.tsx and app/page.tsx JSON-LD`);
