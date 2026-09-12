import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;
  // RFC 9309: the `Host` directive takes a bare hostname (no scheme/path).
  // Googlebot ignores it if a scheme like https:// is included.
  const host = baseUrl.replace(/^https?:\/\//, "");

  // Query-string search URLs (/search?q=...) are infinite combinations of
  // the same noindex page. Blocking the query variants preserves crawl
  // budget for real content (the "Discovered - currently not indexed" queue).
  // `/search?*` only matches URLs containing `?`, so the `/search` page
  // itself stays crawlable (most-specific-match wins over `Allow: /`).
  const disallow = ["/api/", "/admin/", "/search?*"];

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
    host,
  };
}


