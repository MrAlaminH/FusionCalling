import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * Security + SEO-relevant headers applied to every route.
 * Each is a static header (no per-request cost) and ships in the Vercel/Node
 * response by default. Keep additions narrowly scoped; broad Policies can
 * break third-party embeds (Cal.com, PostHog, YouTube).
 */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    // 2 years, include subdomains, preload-ready (only enable preload once
    // you're certain all subdomains are HTTPS — usually safe for this site).
    value: "max-age=63072000; includeSubDomains",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    // Explicitly disable camera, microphone, geolocation, and interest-based
    // advertising APIs we don't use. Keep the list minimal so we don't break
    // legitimate embeds (Cal.com widget, PostHog, YouTube demos).
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't leak `X-Powered-By: Next.js` — minor fingerprint reduction.
  poweredByHeader: false,
  images: {
    // Serve modern formats first. AVIF is ~30% smaller than WebP; WebP stays
    // as the fallback for older browsers.
    formats: ["image/avif", "image/webp"],
    // Cap the top end of generated srcsets. 4K variants are wasteful for a
    // marketing site and force the browser toward huge candidates.
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Immutable caching for static assets — content-addressed by webpack,
        // so the hash in the filename guarantees freshness.
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff2|woff|ttf|eot|otf|css|js)",
        locale: false,
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
