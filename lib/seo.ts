import { SITE_URL } from "@/lib/site-url";

/**
 * Authoritative external references used to add GEO source citations.
 * Citing real, reputable sources is the single highest-impact GEO signal
 * (Princeton GEO study: +40% AI-answer-engine visibility). These are rendered
 * as outbound links on glossary, docs, and calculator pages.
 */
export const GEO_SOURCES = {
  schema: { label: "Schema.org", url: "https://schema.org" },
  schemaDefinedTerm: {
    label: "Schema.org — DefinedTerm",
    url: "https://schema.org/DefinedTerm",
  },
  w3cVoice: {
    label: "W3C Voice & Speech Standards",
    url: "https://www.w3.org/standards/voice/",
  },
  nistAi: {
    label: "NIST AI Risk Management Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  fccTcpa: {
    label: "FCC — Telephone Consumer Protection Act",
    url: "https://www.fcc.gov/robocall-truth",
  },
  googleAi: { label: "Google AI", url: "https://blog.google/technology/ai/" },
  googleSearchCentral: {
    label: "Google Search Central — Structured Data",
    url: "https://developers.google.com/search/docs/appearance/structured-data",
  },
  elevenLabs: { label: "ElevenLabs Docs", url: "https://elevenlabs.io/docs" },
  deepgram: { label: "Deepgram Docs", url: "https://developers.deepgram.com" },
  twilio: { label: "Twilio Docs", url: "https://www.twilio.com/docs" },
  fusionApi: {
    label: "Fusion Calling API Reference",
    url: "https://www.fusioncalling.com/docs/api-reference",
  },
} as const;

export type GeoCitation = { label: string; url: string };

export const BRAND = {
  name: "Fusion Calling",
  siteName: "Fusion Calling",
  twitter: "@fusioncalling",
  locale: "en_US",
  defaultOgImage: "/opengraph-image.png",
} as const;

type BuildOgArgs = {
  title: string;
  description: string;
  path: string; // e.g. "/whitelabel"
  image?: string; // path or absolute URL
  type?: "website" | "article";
};

/**
 * Build a complete, consistent OpenGraph + Twitter block for a page.
 * Always emits a canonical URL, a 1200x630 image (default if none given),
 * and matching Twitter card fields so social/AI previews are never empty.
 */
export function buildOpenGraph({
  title,
  description,
  path,
  image = BRAND.defaultOgImage,
  type = "website",
}: BuildOgArgs) {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.siteName,
      locale: BRAND.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      site: BRAND.twitter,
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: path,
    },
  };
}
