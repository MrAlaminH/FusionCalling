import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  INTERNAL_BYPASS_HEADER,
  MARKDOWN_CONTENT_TYPE,
  estimateTokens,
  htmlToMarkdownDocument,
  wantsMarkdown,
} from "./lib/markdown-negotiation";

// 2 MB origin cap (mirrors Cloudflare's Markdown-for-Agents limit).
const MAX_ORIGIN_BYTES = 2_097_152;

export function middleware(request: NextRequest) {
  // Internal HTML fetch (loop guard) and non-negotiated traffic pass through.
  // NOTE: Next.js App Router overwrites `Vary` on rendered HTML responses
  // downstream of middleware, so `Vary: Accept` can only be guaranteed on
  // the markdown responses we construct directly (see handleMarkdown).
  if (request.headers.has(INTERNAL_BYPASS_HEADER)) {
    return NextResponse.next();
  }
  if (!wantsMarkdown(request.headers.get("accept"))) {
    return NextResponse.next();
  }
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  return handleMarkdown(request);
}

async function handleMarkdown(request: NextRequest) {
  const target = new URL(request.url);
  let origin: Response;
  try {
    origin = await fetch(target.toString(), {
      headers: {
        accept: "text/html",
        [INTERNAL_BYPASS_HEADER]: "1",
        "user-agent":
          request.headers.get("user-agent") ?? "markdown-negotiation",
      },
    });
  } catch {
    return NextResponse.next();
  }

  const contentType = origin.headers.get("content-type") ?? "";
  // Only HTML pages are converted; APIs/assets fall back to normal routing.
  if (!origin.ok || !contentType.includes("text/html")) {
    return NextResponse.next();
  }
  const lengthHeader = origin.headers.get("content-length");
  if (lengthHeader && Number(lengthHeader) > MAX_ORIGIN_BYTES) {
    return NextResponse.next();
  }

  const html = await origin.text();
  if (html.length > MAX_ORIGIN_BYTES) {
    return NextResponse.next();
  }
  const markdown = htmlToMarkdownDocument(html);
  const body = request.method === "HEAD" ? "" : markdown;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": MARKDOWN_CONTENT_TYPE,
      Vary: "Accept",
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
      "x-markdown-tokens": String(estimateTokens(markdown)),
      "x-original-tokens": String(estimateTokens(html)),
      // Default Content Signals policy (origin sets none): agent use allowed.
      "content-signal": "ai-train=yes, search=yes, ai-input=yes",
    },
  });
}

// Page routes only: skip build assets, API routes, and files with static
// extensions (images, fonts, feeds, txt/xml discovery files — the latter are
// already machine-readable and must keep their own Content-Type).
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff2?|ttf|eot|otf|css|js|map|xml|txt|pdf|zip)$).*)",
  ],
};
