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
    "/docs/api-reference",
    "/docs/lead-management",
    "/docs/agent-configuration",
    "/docs/admin-section",
    "/docs/sms-messaging",
    "/pricing",
    "/integrations",
    "/voices",
    "/use-cases/inbound-calls",
    "/use-cases/outbound-calls",
    "/whitelabel",
    "/calculator",
    "/privacy",
    "/terms",
    "/blog",
    "/blog/vapi-white-label-platform",
    "/blog/retell-ai-white-label",
    "/blog/gohighlevel-white-label-voice",
  ] as const;

  return paths.map((path) => {
    const priority = path === "/" ? 1 : 
                    path.startsWith("/docs/") ? 0.8 :
                    path === "/docs" ? 0.9 :
                    path === "/pricing" || path === "/whitelabel" ? 0.8 : 0.7;
    const changeFrequency = path === "/" ? "weekly" :
                          path.startsWith("/docs/") ? "monthly" :
                          "monthly";
    
    return {
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}


