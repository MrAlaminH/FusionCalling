const FALLBACK_SITE_URL = "https://www.fusioncalling.com";

export const SITE_URL = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = raw && raw.length > 0 ? raw : FALLBACK_SITE_URL;
  return url.replace(/\/+$/, "");
})();

// Editorial "last updated" date used as the `dateModified` signal across
// content pages (industries, comparisons, etc.) where the source data only
// carries a `datePublished` value. Keeps structured-data freshness honest.
export const CONTENT_LAST_UPDATED = "2026-09-15";

// Human-readable twin for visible "Last updated" text, derived from
// CONTENT_LAST_UPDATED so the schema date and the visible date can't diverge.
export const CONTENT_LAST_UPDATED_LABEL = new Date(
  `${CONTENT_LAST_UPDATED}T00:00:00Z`
).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});
