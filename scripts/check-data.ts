/**
 * Data-integrity checks for the content registries the UI renders from.
 * Run: npm run check:data
 */
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { comparisons } from "../lib/comparisons";
import { blogPosts } from "../lib/blog-posts";
import { blogFaqs } from "../lib/blog-faqs";
import { whitelabelProviders } from "../lib/whitelabel-providers";

// Every curated related list must resolve to 3 real, non-self comparisons.
for (const c of comparisons) {
  const related = c.related ?? [];
  assert.equal(
    related.length,
    3,
    `${c.slug}: related must list exactly 3 slugs (got ${related.length})`
  );
  for (const slug of related) {
    assert.notEqual(slug, c.slug, `${c.slug}: related includes itself`);
    assert(
      comparisons.some((o) => o.slug === slug),
      `${c.slug}: related slug "${slug}" does not exist`
    );
  }
}

// Benchmarks exist only for the competitors with comparable internal data.
const BENCHMARKED = [
  "VoiceAIWrapper",
  "Synthflow",
  "Thinkrr",
  "ChatDash",
  "Vapify",
  "Voicerr",
];
const benchFile = readFileSync(
  new URL("../components/compare/BenchmarkTable.tsx", import.meta.url),
  "utf8"
);
for (const name of BENCHMARKED) {
  assert.ok(
    benchFile.includes(`"${name}"`) || benchFile.includes(`${name}:`),
    `BenchmarkTable: expected entry for ${name}`
  );
}

// Every post with a slug has FAQ data, and every FAQ key maps to a real post.
for (const post of blogPosts) {
  assert.ok(
    blogFaqs[post.slug]?.length,
    `blogFaqs: missing entries for post "${post.slug}"`
  );
}
for (const slug of Object.keys(blogFaqs)) {
  assert(
    blogPosts.some((p) => p.slug === slug),
    `blogFaqs: key "${slug}" has no matching blog post`
  );
}

// Whitelabel registry: gohighlevel included (drives sitemap + cross-links).
assert(
  whitelabelProviders.some((p) => p.slug === "gohighlevel"),
  "whitelabelProviders: gohighlevel entry missing"
);
for (const p of whitelabelProviders) {
  assert.ok(p.faqs.length >= 4, `${p.slug}: expected at least 4 FAQs`);
  assert.ok(p.features.length >= 3, `${p.slug}: expected at least 3 features`);
}

console.log(
  `✓ ${comparisons.length} comparisons, ${blogPosts.length} posts with FAQs, ${whitelabelProviders.length} providers — all data invariants hold`
);
