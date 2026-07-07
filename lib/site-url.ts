const FALLBACK_SITE_URL = "https://www.fusioncalling.com";

export const SITE_URL = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = raw && raw.length > 0 ? raw : FALLBACK_SITE_URL;
  return url.replace(/\/+$/, "");
})();

// Editorial "last updated" date used as the `dateModified` signal across
// content pages (industries, comparisons, etc.) where the source data only
// carries a `datePublished` value. Keeps structured-data freshness honest.
export const CONTENT_LAST_UPDATED = "2026-07-07";
