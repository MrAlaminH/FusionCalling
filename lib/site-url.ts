const FALLBACK_SITE_URL = "https://www.fusioncalling.com";

export const SITE_URL = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = raw && raw.length > 0 ? raw : FALLBACK_SITE_URL;
  return url.replace(/\/+$/, "");
})();
