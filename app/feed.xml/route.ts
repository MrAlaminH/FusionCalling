import { SITE_URL } from "@/lib/site-url";
import { blogPosts } from "@/lib/blog-posts";
import { authors } from "@/lib/authors";

export const dynamic = "force-static";

// RSS 2.0 requires RFC-822 dates; keep to the standard's exact format.
function rfc822(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString();
}

// Escape the five XML special characters for element/attribute text.
function esc(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

// Freshness signal derived from real editorial dates — never `new Date()`,
// matching the sitemap convention (a feed that bumps on every deploy teaches
// crawlers to ignore it).
function lastBuildDate(): string {
  const latest = blogPosts
    .map((p) => p.updated ?? p.date)
    .sort()
    .at(-1);
  return latest ? rfc822(latest) : rfc822("2026-01-01");
}

export async function GET() {
  const items = blogPosts
    .map((post) => {
      const author = post.author
        ? authors.find((a) => a.slug === post.author)
        : undefined;
      const link = `${SITE_URL}/blog/${post.slug}`;
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <category>${esc(post.category)}</category>
      <description>${esc(post.description)}</description>${author ? `\n      <dc:creator>${esc(author.name)}</dc:creator>` : ""}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Fusion Calling — AI Phone Call Automation Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Guides and comparisons on AI voice agents, AI receptionists, and white-label voice AI for businesses and agencies.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
