import { SITE_URL } from "@/lib/site-url";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { breadcrumbSchema, buildOpenGraph } from "@/lib/seo";
import { blogPostsByDate, getFeaturedPost } from "@/lib/blog-posts";
import BlogGrid from "@/components/blog/BlogGrid";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | White-Label Voice AI Insights",
  description:
    "Expert insights on white-label AI voice platforms, agency growth strategies, and voice automation trends. Learn how to build profitable AI voice businesses.",
  ...buildOpenGraph({
    title: "Blog | White-Label Voice AI Insights",
    description:
      "Expert insights on white-label AI voice platforms, agency growth strategies, and voice automation trends. Learn how to build profitable AI voice businesses.",
    path: "/blog",
    image: "/blog/blog1.webp",
  }),
};

const featured = getFeaturedPost();
const restPosts = blogPostsByDate.filter((p) => p.slug !== featured.slug);

export default function BlogPage() {
  return (
    <>
      <script
        id="blog-index-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              breadcrumbSchema([
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
              ]),
              {
                "@type": "CollectionPage",
                "@id": `${SITE_URL}/blog#collectionpage`,
                url: `${SITE_URL}/blog`,
                name: "Fusion Calling Blog",
                description:
                  "Expert insights on white-label AI voice platforms, agency growth strategies, and voice automation trends.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
              },
            ],
          }),
        }}
      />
      <div className="bg-gradient-to-b from-black via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8 md:py-16">
          {/* h1 (not SectionHeader) — the index needs exactly one h1 for the
              heading outline; SectionHeader renders an h2. */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Voice AI Agency{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Expert analysis on white-label platforms, agency growth strategies,
              and the future of voice automation. Build your AI voice business
              with confidence.
            </p>
          </div>

          {/* Featured post */}
          <div className="mb-16">
            <Link
              href={`/blog/${featured.slug}`}
              className="group glass rounded-3xl border border-brand/20 hover:border-brand/40 hover:shadow-premium-lg transition-premium overflow-hidden grid md:grid-cols-2"
            >
              <div className="relative aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-brand to-brand-strong px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-foreground mb-4">
                  Featured
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight text-white group-hover:text-brand-light transition-colors mb-4">
                  {featured.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {featured.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{featured.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{featured.readTime}</span>
                  <span aria-hidden="true">•</span>
                  <span className="text-brand-light">{featured.category}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Category filter + grid */}
          <BlogGrid posts={restPosts} />

          {/* Start here — internal hub links */}
          <div className="mt-16">
            <div className="glass rounded-3xl p-8 md:p-10 border border-brand/20">
              <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-4">
                Start here
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                <Link
                  href="/ai-phone-call-automation"
                  className="text-brand-light hover:text-brand transition-colors underline-offset-4 hover:underline"
                >
                  Call automation guide
                </Link>
                <Link
                  href="/alternative"
                  className="text-brand-light hover:text-brand transition-colors underline-offset-4 hover:underline"
                >
                  Platform alternatives
                </Link>
                <Link
                  href="/industries"
                  className="text-brand-light hover:text-brand transition-colors underline-offset-4 hover:underline"
                >
                  Industries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
