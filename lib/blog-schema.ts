import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import { buildOpenGraph } from "@/lib/seo";
import type { BlogPost } from "@/lib/blog-posts";
import type { Author } from "@/lib/authors";
import type { BlogFaq } from "@/components/blog/PostFaq";
/**
 * The post record is the single source for <title>, meta description, and the
 * OG/Twitter block — pages can't diverge from it because they don't restate it.
 * `post.metaTitle` (optional, on the record) is the SERP-shortened variant;
 * everything else derives from the record verbatim.
 */
export function buildPostMetadata(post: BlogPost, author: Author): Metadata {
  const title = post.metaTitle ?? post.title;
  return {
    title,
    description: post.description,
    ...buildOpenGraph({
      title,
      description: post.description,
      path: `/blog/${post.slug}`,
      image: post.image,
      type: "article",
      publishedTime: `${post.date}T00:00:00Z`,
      // Same source the sitemap lastmod uses, so the page's freshness signal
      // and its sitemap entry can never disagree.
      modifiedTime: `${post.updated ?? post.date}T00:00:00Z`,
      authors: [author.name],
    }),
  };
}

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
  dateModified,
  authorSchemaId,
  faqs,
  crumbName,
  authorPerson,
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  /** ISO date the post materially changed; falls back to publish date. Keep
   *  in sync with the sitemap lastmod (both read `post.updated ?? post.date`). */
  dateModified?: string;
  authorSchemaId: string;
  faqs: BlogFaq[];
  /** Optional breadcrumb label when it differs from the title. */
  crumbName?: string;
  /**
   * Full author record for non-team bylines. The root layout @graph only
   * carries the voice-team Person, so a post bylined to anyone else must
   * embed its own Person node — otherwise `author.@id` dangles inside the
   * served page. Pass the page's `author` when it isn't the voice team.
   */
  authorPerson?: Author;
}) {
  // Person node for non-team authors, so every author @id in this graph
  // resolves to a node in the same served page (layout graph + page graph).
  const authorNode = authorPerson
    ? [
        {
          "@type": "Person",
          "@id": authorPerson.authorSchemaId,
          name: authorPerson.name,
          url: `${SITE_URL}/team/${authorPerson.slug}`,
          jobTitle: authorPerson.role,
          description: authorPerson.shortBio,
          image: `${SITE_URL}${authorPerson.avatar}`,
          worksFor: { "@id": `${SITE_URL}/#organization` },
        },
      ]
    : [];
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
        dateModified: `${dateModified ?? datePublished}T00:00:00Z`,
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
      ...authorNode,
    ],
  };
}
