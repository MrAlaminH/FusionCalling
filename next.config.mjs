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
    // marketing site and force the browser toward huge candidates. 1920 is
    // the ceiling: it covers full-width heroes on large displays while
    // staying under the 2000px oversized-image heuristic used by SEO crawls,
    // so no `w=2048` candidate is ever emitted (no visual change — the
    // browser simply picks the 1920 variant at most).
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Re-check upstream images at least this often so source changes propagate.
    // 1 year: optimized-image URLs carry the deployment id (?dpl=…), so every
    // deploy gets a fresh URL and long-lived caching can never go stale.
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  webpack(config, { isServer }) {
    // Drop Next's unconditional app-router legacy polyfills (Array::at/flat,
    // Object.fromEntries, Promise::finally…). Every browser in the
    // package.json `browserslist` implements these natively, so the shims are
    // dead weight (~12 KB) in the initial bundle. Keep this alias and the
    // browserslist aligned: raise the browserslist floor if a target lacks
    // any polyfilled API. Upgrade-sensitive: verify after Next upgrades that
    // `app-index.js` still requires `../build/polyfills/polyfill-module`.
    if (!isServer) {
      config.resolve.alias["../build/polyfills/polyfill-module"] = false;
      config.resolve.alias[
        "next/dist/build/polyfills/polyfill-module"
      ] = false;
    }
    return config;
  },
  async redirects() {
    return [
      // Author-entity consolidation: the old team slug 404'd; every schema
      // reference now points at /team/voice-team.
      {
        source: "/team/fusioncalling-team",
        destination: "/team/voice-team",
        permanent: true,
      },
      // Legacy root /compare URLs (pre-rename to /alternative) still get
      // Google impressions (e.g. /compare/vapify-alternative Pos 8.75).
      // Preserve ranking signals by 301ing them to /alternative equivalents.
      // NOTE: /whitelabel/compare is a separate live page and is untouched.
      {
        source: "/compare",
        destination: "/alternative",
        permanent: true,
      },
      {
        source: "/compare/:slug",
        destination: "/alternative/:slug",
        permanent: true,
      },
      // Host canonicalization: serve one canonical host (www) so we never
      // split ranking signals across apex/www if platform config drifts.
      {
        source: "/:path*",
        has: [{ type: "host", value: "fusioncalling.com" }],
        destination: "https://www.fusioncalling.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Content-hashed build assets can be cached immutably forever.
        source: "/_next/static/:path*",
        locale: false,
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Unhashed public assets (opengraph-image.png, og.jpg, logo.webp…) get
        // replaced without renaming, so only cache them briefly.
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff2|woff|ttf|eot|otf)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
