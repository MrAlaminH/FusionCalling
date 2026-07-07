import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { glossaryTerms, slugifyTerm } from "@/lib/glossary";

// IMPORTANT: every path here MUST resolve to a real App Router route (a
// `page.tsx`). Listing URLs that 404 wastes crawl budget and erodes sitemap
// trust. The pricing lives at `/#pricing` (an anchor on the homepage), so it is
// intentionally NOT a standalone sitemap entry.
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
  "/calculator",
  "/privacy",
  "/terms",
  "/blog",
  "/blog/vapi-white-label-platform",
  "/blog/retell-ai-white-label",
  "/blog/gohighlevel-white-label-voice",
  "/blog/how-to-start-a-voice-ai-agency",
  "/blog/vapi-vs-retell-vs-elevenlabs",
  "/blog/ai-voice-agents-for-small-business",
  "/blog/gohighlevel-alternative-for-voice-ai",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const lastModified = new Date();

  const paths: readonly string[] = [...STATIC_PATHS, ...GLOSSARY_PATHS];

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
        : path === "/whitelabel"
        ? 0.9
        : path === "/alternative" ||
          path === "/industries" ||
          path === "/glossary"
        ? 0.8
        : path.startsWith("/alternative/") || path.startsWith("/industries/")
        ? 0.7
        : path.startsWith("/glossary/")
        ? 0.6
        : 0.7;
    const changeFrequency =
      path === "/"
        ? "weekly"
        : path.startsWith("/docs/")
        ? "monthly"
        : "monthly";

    return {
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
