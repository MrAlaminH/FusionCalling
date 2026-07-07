import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats first. AVIF is ~30% smaller than WebP; WebP stays
    // as the fallback for older browsers.
    formats: ["image/avif", "image/webp"],
    // Cap the top end of generated srcsets. 4K variants are wasteful for a
    // marketing site and force the browser toward huge candidates.
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default withBundleAnalyzer(nextConfig);
