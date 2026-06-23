import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog | Fusion Calling - White-Label Voice AI Insights",
  description:
    "Expert insights on white-label AI voice platforms, agency growth strategies, and voice automation trends. Learn how to build profitable AI voice businesses.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    slug: "vapi-white-label-platform",
    title: "Vapi White Label Platform: Why Fusion Calling is the Smarter Choice",
    description:
      "Discover why agencies choose Fusion Calling's white-label solution over direct Vapi integration. Save $45K in development costs and launch in 7 days.",
    date: "2024-06-23",
    category: "Platform Comparison",
    readTime: "8 min read",
    image: "/blog/vapi-comparison.jpg",
  },
  {
    slug: "retell-ai-white-label",
    title: "Retell AI White Label Reseller Program: The Fusion Calling Alternative",
    description:
      "Learn why Fusion Calling's white-label model delivers better economics and growth potential than Retell AI's minute-based reseller approach.",
    date: "2024-06-22",
    category: "Business Strategy",
    readTime: "7 min read",
    image: "/blog/retell-comparison.jpg",
  },
  {
    slug: "gohighlevel-white-label-voice",
    title: "GoHighLevel White Label Voice AI: Why Fusion Calling is Superior",
    description:
      "Compare GoHighLevel's voice AI features with Fusion Calling's specialized white-label platform. Built for agencies serious about voice automation.",
    date: "2024-06-21",
    category: "Platform Comparison",
    readTime: "9 min read",
    image: "/blog/gohighlevel-comparison.jpg",
  },
];

const categories = ["All", "Platform Comparison", "Business Strategy", "Industry Insights"];

export default function BlogPage() {
  return (
    <>
      <Script
        id="blog-index-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.fusioncalling.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://www.fusioncalling.com/blog",
                  },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": "https://www.fusioncalling.com/blog#collectionpage",
                url: "https://www.fusioncalling.com/blog",
                name: "Fusion Calling Blog",
                description:
                  "Expert insights on white-label AI voice platforms, agency growth strategies, and voice automation trends.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": "https://www.fusioncalling.com/#website",
                },
              },
            ],
          }),
        }}
      />
      
       <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 pt-4 md:pt-6 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent relative">
              Voice AI Agency Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 relative">
              Expert analysis on white-label platforms, agency growth strategies, and
              the future of voice automation. Build your AI voice business with confidence.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="glass rounded-3xl p-8 md:p-12 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-sm font-semibold text-white mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      <Link
                        href={`/blog/${blogPosts[0].slug}`}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {blogPosts[0].title}
                      </Link>
                  </h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {blogPosts[0].description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                    <span>•</span>
                    <span className="text-orange-400">{blogPosts[0].category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-xl border transition-all duration-300 font-medium ${
                    category === "All"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 border-orange-500 text-white"
                      : "border-orange-500/20 text-gray-400 hover:border-orange-500/40 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="glass-light h-full rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-premium">
                  {/* Post Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-xl mb-6 overflow-hidden border border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎯</div>
                        <div className="text-sm text-gray-500">Blog Post Image</div>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                        {post.category}
                      </span>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="text-orange-400 text-sm group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </div>
    </>
  );
}