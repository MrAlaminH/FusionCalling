import type { MetadataRoute } from "next";

const FALLBACK_SITE_URL = "https://www.fusioncalling.com";

function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteUrl = raw && raw.length > 0 ? raw : FALLBACK_SITE_URL;
  return siteUrl.replace(/\/+$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const paths = [
    "/",
    "/docs",
    "/pricing",
    "/integrations",
    "/voices",
    "/use-cases/inbound-calls",
    "/use-cases/outbound-calls",
    "/privacy",
    "/terms",
  ] as const;

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}


