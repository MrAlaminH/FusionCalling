import type { MetadataRoute } from "next";

const FALLBACK_SITE_URL = "https://www.fusioncalling.com";

function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteUrl = raw && raw.length > 0 ? raw : FALLBACK_SITE_URL;
  return siteUrl.replace(/\/+$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}


