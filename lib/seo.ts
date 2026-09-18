import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

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
    url: `${SITE_URL}/docs/api-reference`,
  },
} as const;

export type GeoCitation = { label: string; url: string };

export const BRAND = {
  name: "Fusion Calling",
  siteName: "Fusion Calling",
  twitter: "@MrAlaminH",
  locale: "en_US",
  defaultOgImage: "/opengraph-image.png",
} as const;

type BuildOgArgs = {
  title: string;
  description: string;
  path: string; // e.g. "/whitelabel"
  image?: string; // path or absolute URL
  type?: "website" | "article";
  /** Article-only: ISO publish date (emitted as openGraph.publishedTime). */
  publishedTime?: string;
  /** Article-only: ISO last-modified date (emitted as openGraph.modifiedTime). */
  modifiedTime?: string;
  /** Article-only: author names (emitted as openGraph.authors). */
  authors?: string[];
  /** Intrinsic width of the OG image (defaults to 1200). */
  imageWidth?: number;
  /** Intrinsic height of the OG image (defaults to 630). */
  imageHeight?: number;
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
  publishedTime,
  modifiedTime,
  authors,
  imageWidth = 1200,
  imageHeight = 630,
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
      ...(type === "article" && publishedTime
        ? { publishedTime }
        : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      ...(type === "article" && authors?.length ? { authors } : {}),
      images: [
        {
          url: imageUrl,
          width: imageWidth,
          height: imageHeight,
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
      // Feed discovery on every page that uses this builder. Pages override
      // the whole `alternates` key (shallow merge), so the layout-level copy
      // alone never renders on them — it must live here too.
      types: {
        "application/rss+xml": `${SITE_URL}/feed.xml`,
      },
    },
  };
}

/**
 * ---- JSON-LD builders ----
 *
 * Structural nodes for the site's schema.org @graphs. Pages pass facts; these
 * builders own the shape, the @id wiring against the root layout's
 * Organization/WebSite registry, and required fields, so copied fragments
 * can't drift apart between pages. Any Faq-like {question, answer} object
 * satisfies FaqItem structurally (comparisons, providers, industries, blog).
 */

export type FaqItem = { question: string; answer: string };

export function faqSchema(faqs: readonly FaqItem[], id?: string) {
  return {
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
  id?: string
) {
  return {
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function webPageSchema({
  path,
  name,
  description,
  breadcrumbId,
  speakable,
}: {
  path: string;
  name: string;
  description: string;
  /** @id of the BreadcrumbList node this page references. */
  breadcrumbId?: string;
  /** CSS selectors for the SpeakableSpecification (e.g. ["h1"]). */
  speakable?: string[];
}) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    dateModified: CONTENT_LAST_UPDATED,
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
    ...(speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: speakable,
          },
        }
      : {}),
  };
}

export function articleSchema({
  path,
  name,
  headline,
  description,
  image,
  datePublished,
  authorSchemaId = `${SITE_URL}/team/voice-team#person`,
}: {
  path: string;
  name: string;
  headline: string;
  description: string;
  /** Image path or absolute URL. */
  image?: string;
  datePublished: string;
  authorSchemaId?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    url: `${SITE_URL}${path}`,
    name,
    headline,
    description,
    ...(image
      ? {
          image: image.startsWith("http")
            ? image
            : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`,
        }
      : {}),
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    datePublished,
    dateModified: CONTENT_LAST_UPDATED,
    author: { "@id": authorSchemaId },
    publisher: { "@id": `${SITE_URL}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose"],
    },
  };
}

/** Product Offer node with the merchant return policy + digital-goods shipping details. */
export function offerSchema({
  name,
  price,
  path,
}: {
  name: string;
  price: number;
  path: string;
}) {
  return {
    "@type": "Offer",
    name,
    price: price.toFixed(2),
    priceCurrency: "USD",
    validFrom: "2026-01-15T09:00:00-05:00",
    priceValidUntil: "2027-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}${path}`,
    seller: {
      "@type": "Organization",
      name: "Fusion Calling",
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "US",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 14,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
      },
    },
  };
}
