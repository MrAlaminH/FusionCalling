import type { MetadataRoute } from "next";

const FALLBACK_SITE_URL = "https://www.fusioncalling.com";

function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteUrl = raw && raw.length > 0 ? raw : FALLBACK_SITE_URL;
  return siteUrl.replace(/\/+$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  const disallow = ["/api/", "/admin/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      // Explicitly allow major search + AI search engine crawlers so they are
      // never accidentally blocked by a future global rule. Per RFC 9309 a
      // crawler that matches a specific group uses ONLY that group (it does not
      // merge the `*` group), so each named group must repeat the disallow to
      // keep /api/ and /admin/ protected.
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow,
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow,
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}


