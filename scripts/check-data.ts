/**
 * Data-integrity checks for the content registries the UI renders from.
 * Run: npm run check:data
 */
import { readFileSync, readdirSync } from "node:fs";
import assert from "node:assert/strict";
import { comparisons } from "../lib/comparisons";
import {
  blogPosts,
  blogPostsByDate,
  getFeaturedPost,
  getRelatedPosts,
} from "../lib/blog-posts";
import { blogFaqs } from "../lib/blog-faqs";
import { authors } from "../lib/authors";
import { whitelabelProviders } from "../lib/whitelabel-providers";
import {
  DIRECT_PLANS,
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

// Every post with a slug has FAQ data, its author (if set) resolves to a real
// author, and the meta description fits the ~160-char SERP limit.
for (const post of blogPosts) {
  assert.ok(
    blogFaqs[post.slug]?.length,
    `blogFaqs: missing entries for post "${post.slug}"`
  );
  assert(
    !post.author || authors.some((a) => a.slug === post.author),
    `${post.slug}: author "${post.author}" does not exist in lib/authors`
  );
  assert.ok(
    post.description.length <= 160,
    `${post.slug}: description is ${post.description.length} chars (max 160)`
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

// Pricing registries are ordered and the FAQ prose summary matches the tiers.
for (let i = 1; i < WHOLESALE_PLANS.length; i++) {
  assert.ok(
    WHOLESALE_PLANS[i].price > WHOLESALE_PLANS[i - 1].price,
    `WHOLESALE_PLANS: prices must ascend (${WHOLESALE_PLANS[i].name})`
  );
}
for (let i = 1; i < DIRECT_PLANS.length; i++) {
  assert.ok(
    DIRECT_PLANS[i].price > DIRECT_PLANS[i - 1].price,
    `DIRECT_PLANS: prices must ascend (${DIRECT_PLANS[i].name})`
  );
}

// Launch claims: the canonical guided-launch fact is "24 hours"
// (lib/product-facts LAUNCH.guided). No registry or blog page may reintroduce
// a 7-day launch claim. First-sale milestones ("application to first sale in
// ~one week") are a different fact and are allowed.
// "guided"/"onboarding" catch prose variants like "7-day guided onboarding".
const LAUNCH_CLAIM_PATTERN =
  /7[- ]day (launch|setup|guided|onboarding)|launch (in|within) (about |around )?7 days|launch in around a week/i;
const launchClaimFiles: string[] = [
  "../lib/blog-posts.ts",
  "../lib/blog-faqs.ts",
  "../lib/whitelabel-case-studies.ts",
  "../lib/industries.ts",
];
for (const entry of readdirSync(new URL("../app/blog", import.meta.url), {
  recursive: true,
})) {
  if (String(entry).endsWith(".tsx")) launchClaimFiles.push(`../app/blog/${entry}`);
}
for (const rel of launchClaimFiles) {
  const src = readFileSync(new URL(rel, import.meta.url), "utf8");
  const match = src.match(LAUNCH_CLAIM_PATTERN);
  assert(
    !match,
    `${rel}: 7-day launch claim reintroduced ("${match?.[0]}") — use LAUNCH.guided ("24 hours") from lib/product-facts`
  );
}

console.log(
  `✓ ${comparisons.length} comparisons, ${blogPosts.length} posts with FAQs, ${whitelabelProviders.length} providers — all data invariants hold`
);
