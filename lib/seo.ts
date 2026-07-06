import { SITE_URL } from "@/lib/site-url";

export const BRAND = {
  name: "Fusion Calling",
  siteName: "Fusion Calling",
  twitter: "@fusioncalling",
  locale: "en_US",
  defaultOgImage: "/opengraph-image.png",
} as const;

type BuildOgArgs = {
  title: string;
  description: string;
  path: string; // e.g. "/whitelabel"
  image?: string; // path or absolute URL
  type?: "website" | "article";
};

/**
 * Build a complete, consistent OpenGraph + Twitter block for a page.
 * Always emits a canonical URL, a 1200x630 image (default if none given),
 * and matching Twitter card fields so social/AI previews are never empty.
 */
export function buildOpenGraph({
  title,
  description,
  path,
  image = BRAND.defaultOgImage,
  type = "website",
}: BuildOgArgs) {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.siteName,
      locale: BRAND.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      site: BRAND.twitter,
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: path,
    },
  };
}
