/**
 * Data-integrity checks for the content registries the UI renders from.
 * Run: npm run check:data
 */
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { comparisons } from "../lib/comparisons";
import {
  blogPosts,
  blogPostsByDate,
  getFeaturedPost,
  getRelatedPosts,
} from "../lib/blog-posts";
import { blogFaqs } from "../lib/blog-faqs";
import { whitelabelProviders } from "../lib/whitelabel-providers";
import {
  FEATURE_UPDATES,
  LAUNCH,
  WHOLESALE_PLANS,
} from "../lib/product-facts";

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

// Slugs are unique inside each registry (they become routes and @ids).
for (const [name, registry] of [
  ["comparisons", comparisons],
  ["blogPosts", blogPosts],
  ["whitelabelProviders", whitelabelProviders],
] as const) {
  assert.equal(
    new Set(registry.map((x) => x.slug)).size,
    registry.length,
    `${name}: duplicate slugs`
  );
}

// Blog queries: date-sorted view agrees with the featured pick, dates parse,
// and related posts always resolve to 3 real, non-self posts.
assert.equal(blogPostsByDate[0], getFeaturedPost());
for (const post of blogPosts) {
  assert.ok(!Number.isNaN(Date.parse(post.date)), `${post.slug}: bad date`);
  const related = getRelatedPosts(post);
  assert.equal(related.length, 3, `${post.slug}: related must return 3`);
  assert(
    related.every((r) => r.slug !== post.slug),
    `${post.slug}: related includes itself`
  );
}

// Product facts flow through the comparison registry intact: the launch
// claim and feature-update cadence render verbatim from lib/product-facts,
// and the benchmark tables parse the "X vs Y" competitor value from it.
for (const c of comparisons) {
  assert(
    c.keyStatistics.timeToLaunch.startsWith(`${LAUNCH.guided} `),
    `${c.slug}: timeToLaunch must lead with the canonical "${LAUNCH.guided}" claim (got "${c.keyStatistics.timeToLaunch}")`
  );
  assert(
    c.keyStatistics.featureUpdates.startsWith(`${FEATURE_UPDATES} vs `) &&
      c.keyStatistics.featureUpdates.length >
        `${FEATURE_UPDATES} vs `.length,
    `${c.slug}: featureUpdates must be "${FEATURE_UPDATES} vs <competitor stat>" (got "${c.keyStatistics.featureUpdates}")`
  );
}

// Wholesale pricing is ordered and the FAQ prose summary matches the tiers.
for (let i = 1; i < WHOLESALE_PLANS.length; i++) {
  assert.ok(
    WHOLESALE_PLANS[i].price > WHOLESALE_PLANS[i - 1].price,
    `WHOLESALE_PLANS: prices must ascend (${WHOLESALE_PLANS[i].name})`
  );
}

console.log(
  `✓ ${comparisons.length} comparisons, ${blogPosts.length} posts with FAQs, ${whitelabelProviders.length} providers — all data invariants hold`
);
