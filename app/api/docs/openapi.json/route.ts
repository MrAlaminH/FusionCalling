import { NextResponse } from "next/server";
import { generateOpenAPI } from "@/app/docs/api-reference/lib/openapi";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(generateOpenAPI(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
