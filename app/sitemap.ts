import type { MetadataRoute } from "next";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { glossaryTerms, slugifyTerm, GLOSSARY_LAST_UPDATED } from "@/lib/glossary";
import { blogPosts } from "@/lib/blog-posts";
import { whitelabelCaseStudies } from "@/lib/whitelabel-case-studies";
import { whitelabelLocations } from "@/lib/whitelabel-locations";

// IMPORTANT: every path here MUST resolve to a real App Router route (a
// `page.tsx`). Listing URLs that 404 wastes crawl budget and erodes sitemap
// trust. The pricing lives at `/pricing` (standalone page), so it IS included.
const STATIC_PATHS = [
  "/",
  "/about",
  "/docs",
  "/docs/api-reference",
  "/docs/lead-management",
  "/docs/agent-configuration",
  "/docs/admin-section",
  "/docs/sms-messaging",
  "/whitelabel",
  "/whitelabel/gohighlevel",
  "/whitelabel/vapi",
  "/whitelabel/retell",
  "/whitelabel/elevenlabs",
  "/whitelabel/compare",
  "/whitelabel/case-studies",
  "/whitelabel/locations",
  "/ai-phone-call-automation",
  "/calculator",
  "/pricing",
  "/privacy",
  "/terms",
  "/blog",
  "/team",
  "/team/alamin",
  "/team/voice-team",
  "/alternative",
  "/alternative/chatdash",
  "/alternative/vapify",
  "/alternative/voicerr",
  "/alternative/voiceaiwrapper",
  "/alternative/synthflow",
  "/alternative/thinkrr",
  "/alternative/bland-ai",
  "/alternative/air-ai",
  "/industries",
  "/industries/ai-voice-for-real-estate",
  "/industries/ai-voice-for-dental",
  "/industries/ai-voice-for-insurance",
  "/industries/ai-voice-for-home-services",
  "/industries/ai-voice-for-law-firms",
  "/industries/ai-voice-for-automotive",
  "/industries/ai-voice-for-call-centers",
  "/industries/ai-voice-for-financial-services",
  "/industries/ai-voice-for-ecommerce-retail",
  "/industries/ai-voice-for-education-tutoring",
  "/industries/ai-voice-for-restaurants-hospitality",
  "/glossary",
] as const;

const GLOSSARY_PATHS = glossaryTerms.map((t) => `/glossary/${slugifyTerm(t.term)}`);
const CASE_STUDY_PATHS = whitelabelCaseStudies.map((cs) => `/whitelabel/case-studies/${cs.slug}`);
const LOCATION_PATHS = whitelabelLocations.map((loc) => `/whitelabel/locations/${loc.slug}`);
const BLOG_PATHS = blogPosts.map((p) => `/blog/${p.slug}`);

// Real, maintained editorial dates — never `new Date()`. A lastmod that
// changes on every deploy teaches Google to ignore it entirely.
function lastmodFor(path: string): Date {
  const blogPost = BLOG_PATHS.includes(path)
    ? blogPosts.find((p) => `/blog/${p.slug}` === path)
    : undefined;
  if (blogPost?.date) return new Date(blogPost.date);
  if (path.startsWith("/glossary")) return new Date(GLOSSARY_LAST_UPDATED);
  return new Date(CONTENT_LAST_UPDATED);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const paths: readonly string[] = [
    ...STATIC_PATHS,
    ...GLOSSARY_PATHS,
    ...CASE_STUDY_PATHS,
    ...LOCATION_PATHS,
    ...BLOG_PATHS,
  ];

  // Guard: never emit duplicate or empty URLs into the sitemap.
  const seen = new Set<string>();
  const deduped = paths.filter((path) => {
    if (!path || seen.has(path)) return false;
    seen.add(path);
    return true;
  });

  return deduped.map((path) => {
    const priority =
      path === "/"
        ? 1
        : path.startsWith("/docs/")
        ? 0.8
        : path === "/docs"
        ? 0.9
        : path === "/whitelabel" ||
          path === "/whitelabel/vapi" ||
          path === "/whitelabel/retell" ||
          path === "/whitelabel/elevenlabs" ||
          path === "/pricing"
        ? 0.9
        : path === "/whitelabel/compare" ||
          path === "/whitelabel/case-studies" ||
          path === "/whitelabel/locations" ||
          path === "/alternative" ||
          path === "/industries" ||
          path === "/glossary"
        ? 0.8
        : path.startsWith("/whitelabel/case-studies/") ||
          path.startsWith("/whitelabel/locations/") ||
          path.startsWith("/alternative/") ||
          path.startsWith("/industries/") ||
          path.startsWith("/blog/")
        ? 0.7
        : path.startsWith("/glossary/")
        ? 0.6
        : path === "/terms" || path === "/privacy"
        ? 0.3
        : path.startsWith("/team")
        ? 0.5
        : 0.7;
    const changeFrequency =
      path === "/"
        ? "weekly"
        : path.startsWith("/docs/")
        ? "monthly"
        : "monthly";

    return {
      url: `${baseUrl}${path}`,
      lastModified: lastmodFor(path),
      changeFrequency,
      priority,
    };
  });
}
