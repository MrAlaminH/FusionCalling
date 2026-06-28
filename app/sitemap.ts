import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { glossaryTerms, slugifyTerm } from "@/lib/glossary";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
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
    "/industries",
    "/industries/ai-voice-for-real-estate",
    "/industries/ai-voice-for-dental",
    "/industries/ai-voice-for-insurance",
    "/industries/ai-voice-for-home-services",
    "/industries/ai-voice-for-law-firms",
    "/industries/ai-voice-for-automotive",
    "/industries/ai-voice-for-call-centers",
    "/industries/ai-voice-for-financial-services",
    "/glossary",
    ...glossaryTerms.map((t) => `/glossary/${slugifyTerm(t.term)}`),
  ];

  return paths.map((path) => {
    const priority = path === "/" ? 1 :
                    path.startsWith("/docs/") ? 0.8 :
                    path === "/docs" ? 0.9 :
                    path === "/pricing" || path === "/whitelabel" ? 0.8 :
                    path === "/alternative" || path === "/industries" || path === "/glossary" ? 0.8 :
                    path.startsWith("/alternative/") || path.startsWith("/industries/") ? 0.7 :
                    path.startsWith("/glossary/") ? 0.6 : 0.7;
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


