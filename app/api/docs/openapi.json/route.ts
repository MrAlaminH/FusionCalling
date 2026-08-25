import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// `/openapi.json` (static file in public/) is the canonical spec URL.
// This legacy route redirects there with a permanent 301.
export async function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/openapi.json", request.url), 301);
}
