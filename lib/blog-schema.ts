import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import type { BlogFaq } from "@/components/blog/PostFaq";

/**
 * Single implementation of the blog post JSON-LD @graph (BreadcrumbList +
 * Article with speakable + FAQPage). Pages render it into a server-side
 * <script> so crawlers always see it; the FAQ data is shared with the visible
 * FAQ section so schema and page content can never diverge.
 */
export function buildBlogGraph({
  slug,
  title,
  description,
  image,
  datePublished,
  authorSchemaId,
  faqs,
  crumbName,
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  authorSchemaId: string;
  faqs: BlogFaq[];
  /** Optional breadcrumb label when it differs from the title. */
  crumbName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: crumbName ?? title,
            item: `${SITE_URL}/blog/${slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/blog/${slug}#article`,
        url: `${SITE_URL}/blog/${slug}`,
        name: title,
        headline: title,
        description,
        inLanguage: "en-US",
        image: `${SITE_URL}${image}`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        datePublished: `${datePublished}T00:00:00Z`,
        dateModified: `${CONTENT_LAST_UPDATED}T00:00:00Z`,
        author: { "@id": authorSchemaId },
        publisher: { "@id": `${SITE_URL}/#organization` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".prose"],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}
