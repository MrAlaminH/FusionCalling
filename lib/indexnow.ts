/**
 * IndexNow configuration.
 *
 * IndexNow lets us tell Bing, Yandex, Naver, Seznam, and Yep that our URLs have
 * changed, so they are re-crawled within minutes instead of waiting for the
 * normal discovery cycle. The key file is served at
 * `/<INDEXNOW_KEY>.txt` and must contain exactly this key string.
 *
 * Ownership is proven by serving the key file; we then POST our URLs to the
 * IndexNow API (see `scripts/indexnow-submit.ts`).
 */
export const INDEXNOW_KEY = "fc9b2a4e7d1c8350a6e9f2b4c7d8e1a3";

/** IndexNow API endpoints (any one will propagate to the others). */
export const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
] as const;

/**
 * Build the key-location URL for the given site host. IndexNow requires the key
 * file to live on the SAME host as the URLs being submitted, so this must be
 * derived from the actual deployment SITE_URL at runtime (never hardcoded to
 * production, or non-prod submissions are rejected with HTTP 422).
 */
export function indexNowKeyLocation(siteUrl: string): string {
  const base = siteUrl.trim().replace(/\/+$/, "");
  return `${base}/${INDEXNOW_KEY}.txt`;
}

