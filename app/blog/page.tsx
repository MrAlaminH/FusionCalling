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
    slug: "how-to-start-a-voice-ai-agency",
    title: "How to Start a Voice AI Agency in 2025: A Step-by-Step Guide",
    description:
      "The smart way to launch a voice AI agency without building infrastructure: partner with a white-label platform, pick a niche, set pricing, and land your first client.",
    date: "2025-02-13",
    category: "Agency Growth",
    readTime: "9 min read",
    image: "/blog/start-voice-ai-agency.jpg",
  },
  {
    slug: "gohighlevel-alternative-for-voice-ai",
    title: "GoHighLevel Alternative for Voice AI: Built-In CRM + Voice Agents",
    description:
      "For voice-first agencies, Fusion Calling bundles AI voice agents with a built-in CRM, so you don't need an expensive GoHighLevel subscription just to run a voice AI agency.",
    date: "2025-02-16",
    category: "Buyer's Guide",
    readTime: "9 min read",
    image: "/blog/ghl-alternative-voice-ai.jpg",
  },
  {
    slug: "vapi-vs-retell-vs-elevenlabs",
    title: "Vapi vs Retell vs ElevenLabs: Choosing the Right Voice AI Provider",
    description:
      "A fair, neutral comparison of the three leading voice AI providers, and why you don't have to pick just one when you use Fusion Calling's multi-provider layer.",
    date: "2025-02-14",
    category: "Buyer's Guide",
    readTime: "8 min read",
    image: "/blog/vapi-vs-retell-vs-elevenlabs.jpg",
  },
  {
    slug: "ai-voice-agents-for-small-business",
    title: "AI Voice Agents for Small Business: Use Cases & ROI",
    description:
      "Every missed call is lost revenue. See how small businesses use AI voice agents to capture leads, book appointments, and stay open 24/7, plus the ROI math.",
    date: "2025-02-15",
    category: "Use Cases",
    readTime: "8 min read",
    image: "/blog/ai-voice-small-business.jpg",
  },
  {
    slug: "vapi-white-label-platform",
    title: "White-Labeling Vapi with Fusion Calling: A Guide for Agencies",
    description:
      "Vapi is excellent voice AI infrastructure. Fusion Calling is the white-label agency layer built to work with it, so you can resell Vapi under your own brand.",
    date: "2025-02-10",
    category: "Integration Guide",
    readTime: "7 min read",
    image: "/blog/vapi-comparison.jpg",
  },
  {
    slug: "retell-ai-white-label",
    title: "White-Labeling Retell AI with Fusion Calling",
    description:
      "Retell AI is a powerful conversational voice engine. Fusion Calling layers on top to add branding, client portals, and billing so agencies can resell Retell.",
    date: "2025-02-11",
    category: "Integration Guide",
    readTime: "7 min read",
    image: "/blog/retell-comparison.jpg",
  },
  {
    slug: "gohighlevel-white-label-voice",
    title: "Adding White-Label Voice AI to Your GoHighLevel Agency",
    description:
      "Keep GoHighLevel as your CRM and add Fusion Calling as your dedicated, white-label voice AI layer, syncing calls and leads straight back into GHL.",
    date: "2025-02-12",
    category: "Integration Guide",
    readTime: "8 min read",
    image: "/blog/gohighlevel-comparison.jpg",
  },
];

const categories = [
  "All",
  "Agency Growth",
  "Integration Guide",
  "Buyer's Guide",
  "Use Cases",
];

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