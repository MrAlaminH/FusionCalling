/**
 * Submit every URL in the live sitemap.xml to IndexNow (Bing, Yandex, etc.).
 *
 * Usage:
 *   SITE_URL=https://www.fusioncalling.com npm run indexnow:submit
 *
 * Run this after a deploy, or whenever you publish/update pages, so the engines
 * re-crawl changed URLs within minutes.
 */
import {
  INDEXNOW_KEY,
  INDEXNOW_ENDPOINTS,
  indexNowKeyLocation,
} from "../lib/indexnow";

const SITE_URL = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.fusioncalling.com"
)
  .trim()
  .replace(/\/+$/, "");

const KEY_LOCATION = indexNowKeyLocation(SITE_URL);

// Single shared timeout so a stalled peer can never hang the deploy step.
function withTimeout(ms = 15_000): AbortSignal {
  // AbortSignal.timeout is available in Node 18+ (the Next 14 runtime floor).
  return AbortSignal.timeout(ms);
}

async function fetchSitemapUrls(): Promise<string[]> {
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  console.log(`Fetching sitemap: ${sitemapUrl}`);
  const res = await fetch(sitemapUrl, {
    redirect: "follow",
    signal: withTimeout(),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap (${res.status} ${res.statusText})`);
  }
  const xml = await res.text();
  const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) =>
    m[1].trim(),
  );
  const unique = Array.from(new Set(urls));
  if (unique.length === 0) {
    throw new Error("Sitemap contained no <loc> URLs");
  }
  return unique;
}

async function submitToEndpoint(
  endpoint: string,
  urls: string[],
): Promise<void> {
  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
      signal: withTimeout(),
    });
  } catch (err) {
    console.warn(`  ${endpoint} -> error: ${(err as Error).message}`);
    return;
  }

  // 200 = accepted for processing, 202 = accepted (queued), 422 = key mismatch.
  const ok = res.status === 200 || res.status === 202;
  console.log(
    `  ${endpoint} -> ${res.status} ${res.statusText}${ok ? " (ok)" : ""}`,
  );
  if (!ok) {
    const text = await res.text().catch(() => "");
    console.warn(`      response: ${text.slice(0, 200)}`);
  }
}

async function main() {
  console.log(`IndexNow submit for ${SITE_URL}`);
  console.log(`Key: ${INDEXNOW_KEY}`);
  console.log(`Key location: ${KEY_LOCATION}\n`);

  const urls = await fetchSitemapUrls();
  console.log(`Found ${urls.length} URLs in sitemap.\n`);

  // Endpoints are independent (each propagates to the others), so submit them
  // concurrently. A timeout or failure on one must not block the others.
  const results = await Promise.allSettled(
    INDEXNOW_ENDPOINTS.map((endpoint) => submitToEndpoint(endpoint, urls)),
  );
  const failed = results.filter((r) => r.status === "rejected").length;
  if (failed > 0) {
    console.warn(`\n${failed} endpoint(s) rejected unexpectedly.`);
  }

  console.log("\nDone. Confirm the key is reachable:");
  console.log(`  ${KEY_LOCATION}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
