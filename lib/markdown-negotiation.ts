// Markdown content negotiation for AI agents.
//
// When a client sends `Accept: text/markdown` (see
// https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/),
// middleware fetches the HTML version of the page and converts it here.
//
// Edge-safe: RegExp + string ops only (no DOM, no Node APIs) so this module
// can be imported from `middleware.ts` (Edge runtime).

export const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";

// Header set on the internal HTML fetch so middleware can tell it apart
// from the agent's outer request and skip re-conversion (loop guard).
export const INTERNAL_BYPASS_HEADER = "x-markdown-internal";

// Rough token estimate (~4 chars/token). Used for the `x-markdown-tokens`
// and `x-original-tokens` response headers (same convention as Cloudflare).
export function estimateTokens(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}

// True when the Accept header expresses a preference for text/markdown.
export function wantsMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  return accept.toLowerCase().includes("text/markdown");
}

type PageMeta = {
  title: string;
  description: string;
  image: string;
};

function firstGroup(html: string, re: RegExp): string {
  const m = re.exec(html);
  return m?.[1]?.trim() ?? "";
}

function extractMeta(html: string): PageMeta {
  const docTitle = firstGroup(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const metaTitle = firstGroup(
    html,
    /<meta[^>]+name=["']title["'][^>]*content=["']([^"']*)["']/i
  );
  const ogTitle = firstGroup(
    html,
    /<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']*)["']/i
  );
  const metaDesc = firstGroup(
    html,
    /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i
  );
  const ogDesc = firstGroup(
    html,
    /<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']*)["']/i
  );
  const ogImage = firstGroup(
    html,
    /<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']*)["']/i
  );
  // Standard <meta name> wins over og: fallbacks (Cloudflare convention).
  return {
    title: decodeEntities(metaTitle || ogTitle || docTitle),
    description: decodeEntities(metaDesc || ogDesc),
    image: ogImage,
  };
}

function extractJsonLd(html: string): string[] {
  const blocks: string[] = [];
  const re =
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const raw = m[1]?.trim();
    if (raw) blocks.push(raw);
  }
  return blocks;
}

// Prefer the content landmark; fall back to body, then the whole document.
function extractContent(html: string): string {
  const main = firstGroup(html, /<main[^>]*>([\s\S]*?)<\/main>/i);
  if (main) return main;
  const article = firstGroup(html, /<article[^>]*>([\s\S]*?)<\/article>/i);
  if (article) return article;
  const body = firstGroup(html, /<body[^>]*>([\s\S]*?)<\/body>/i);
  return body || html;
}

export function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, dec: string) =>
      String.fromCharCode(parseInt(dec, 10))
    );
}

function yamlEscape(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

// Convert an HTML fragment to Markdown. Covers the elements a marketing
// site emits (headings, links, images, lists, tables, code); anything else
// falls through to plain text via tag stripping.
export function htmlFragmentToMarkdown(fragment: string): string {
  let out = fragment;

  // Drop non-content landmarks and behavior (mirrors Cloudflare stripping).
  out = out.replace(/<header[\s\S]*?<\/header>/gi, "");
  out = out.replace(/<footer[\s\S]*?<\/footer>/gi, "");
  out = out.replace(/<nav[\s\S]*?<\/nav>/gi, "");
  out = out.replace(/<form[\s\S]*?<\/form>/gi, "");
  // Screen-reader-only nodes (e.g. "Skip to content") are noise for agents.
  out = out.replace(
    /<[^>]+class=["'][^"']*\bsr-only\b[^"']*["'][^>]*>[\s\S]*?<\/[^>]+>/gi,
    ""
  );
  // Scripts/styles/noscript carry no readable content (JSON-LD is extracted
  // separately before this runs).
  out = out.replace(/<script[\s\S]*?<\/script>/gi, "");
  out = out.replace(/<style[\s\S]*?<\/style>/gi, "");
  out = out.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  out = out.replace(/<!--[\s\S]*?-->/g, "");

  // Block structure → newlines first so inline rules compose.
  out = out.replace(/<(br|hr)[^>]*>/gi, "\n");
  out = out.replace(/<\/(p|div|section|article|header|footer|li|tr|blockquote)>/gi, "\n");
  out = out.replace(
    /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi,
    (_, level: string, inner: string) => `\n${"#".repeat(Number(level))} ${inner.trim()}\n`
  );
  out = out.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner: string) =>
    `\n${inner.trim().split("\n").map((l) => `> ${l}`.trimEnd()).join("\n")}\n`
  );
  out = out.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, inner: string) => {
    const code = inner.replace(/<[^>]+>/g, "");
    return `\n\`\`\`\n${decodeEntities(code).trim()}\n\`\`\`\n`;
  });
  out = out.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, inner: string) => `\`${inner.trim()}\``);

  // Tables → pipe rows (header separator omitted; agents parse rows fine).
  out = out.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, inner: string) => {
    const rows: string[] = [];
    const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rm: RegExpExecArray | null;
    while ((rm = rowRe.exec(inner)) !== null) {
      const cells: string[] = [];
      const cellRe = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi;
      let cm: RegExpExecArray | null;
      while ((cm = cellRe.exec(rm[1] ?? "")) !== null) {
        cells.push((cm[1] ?? "").replace(/<[^>]+>/g, "").trim());
      }
      if (cells.length > 0) rows.push(`| ${cells.join(" | ")} |`);
    }
    return rows.length > 0 ? `\n${rows.join("\n")}\n` : "";
  });

  // Lists: <li> → "- ", ordered context kept simple (agents don't need numbers).
  out = out.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, inner: string) => `\n- ${inner.trim()}`);
  out = out.replace(/<\/?(ul|ol)[^>]*>/gi, "\n");

  // Inline semantics.
  out = out.replace(
    /<a[^>]+href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_, href: string, text: string) => {
      const label = text.replace(/<[^>]+>/g, "").trim() || href;
      if (!href || href.startsWith("#")) return label;
      return `[${label}](${href})`;
    }
  );
  out = out.replace(
    /<img[^>]+src=["']([^"']*)["'][^>]*>/gi,
    (tag: string, src: string) => {
      const alt = firstGroup(tag, /alt=["']([^"']*)["']/i);
      return alt ? `\n![${alt}](${src})\n` : "";
    }
  );
  out = out.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**");
  out = out.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*");

  // Strip whatever tags remain, decode entities, normalize whitespace.
  out = out.replace(/<[^>]+>/g, "");
  out = decodeEntities(out);
  out = out
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trimEnd())
    .join("\n");
  // Collapse 3+ blank lines, trim, ensure headings aren't glued to text.
  out = out.replace(/\n{3,}/g, "\n\n").trim();
  out = out.replace(/([^\n])\n(#{1,6} )/g, "$1\n\n$2");
  return out;
}

// Full Markdown document: YAML frontmatter (meta) + body + JSON-LD block.
// Matches the Cloudflare "Markdown for Agents" output layout so agents can
// rely on one predictable structure.
export function htmlToMarkdownDocument(html: string): string {
  const meta = extractMeta(html);
  const jsonLd = extractJsonLd(html);
  const body = htmlFragmentToMarkdown(extractContent(html));

  const parts: string[] = [];
  const frontmatter: string[] = [];
  if (meta.title) frontmatter.push(`title: "${yamlEscape(meta.title)}"`);
  if (meta.description) frontmatter.push(`description: "${yamlEscape(meta.description)}"`);
  if (meta.image) frontmatter.push(`image: "${yamlEscape(meta.image)}"`);
  if (frontmatter.length > 0) {
    parts.push(`---\n${frontmatter.join("\n")}\n---`);
  }
  if (body) parts.push(body);
  if (jsonLd.length > 0) {
    parts.push(`\`\`\`json\n${jsonLd.join("\n")}\n\`\`\``);
  }
  return parts.join("\n\n");
}
