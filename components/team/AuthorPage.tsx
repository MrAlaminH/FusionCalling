import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import type { Author } from "@/lib/authors";
import { SITE_URL } from "@/lib/site-url";

export default function AuthorPage({ author }: { author: Author }) {
  const authorUrl = `${SITE_URL}/team/${author.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Team", item: `${SITE_URL}/team` },
          { "@type": "ListItem", position: 3, name: author.name, item: authorUrl },
        ],
      },
      {
        "@type": "Person",
        "@id": author.authorSchemaId,
        name: author.name,
        url: authorUrl,
        jobTitle: author.role,
        worksFor: {
          "@id": "https://www.fusioncalling.com/#organization",
        },
        description: author.shortBio,
        image: `${SITE_URL}${author.avatar}`,
        sameAs: [author.linkedin, author.twitter].filter(Boolean) as string[],
        email: author.email,
        knowsAbout: [
          "Voice AI",
          "Conversational AI",
          "White-label SaaS",
          "Agency Growth",
          "AI Phone Automation",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${authorUrl}#profile`,
        mainEntity: { "@id": author.authorSchemaId },
        description: `Author profile for ${author.name}, ${author.role} at Fusion Calling.`,
        url: authorUrl,
      },
    ],
  };

  return (
    <>
      <Script
        id={`${author.slug}-author-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center text-brand-light hover:text-brand-light mb-8 transition-colors"
          >
            ← Back to Team
          </Link>

          <Image
            src={author.avatar}
            alt={author.name}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-brand/30 object-cover"
            priority
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            {author.name}
          </h1>
          <p className="text-xl text-brand-light mb-6">{author.role}</p>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                LinkedIn
              </a>
            )}
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                Twitter
              </a>
            )}
            {author.email && (
              <a
                href={`mailto:${author.email}`}
                className="hover:text-brand transition-colors"
              >
                Email
              </a>
            )}
          </div>
        </div>

        {/* Bio */}
        <div className="glass rounded-2xl p-8 border border-brand/20 mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">About</h2>
          <div className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed">
            {author.bio.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Published Articles - would be populated from content */}
        <div className="glass rounded-2xl p-8 border border-brand/20">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Publications</h2>
          <p className="text-gray-400 mb-6">
            Articles and guides authored or co-authored by {author.name}.
          </p>
          <div className="space-y-4">
            <Link
              href="/blog/how-to-start-a-voice-ai-agency"
              className="flex items-center gap-4 p-4 glass-light rounded-xl border border-brand/20 hover:border-brand/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📖</span>
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-brand-light transition-colors">
                  How to Start a Voice AI Agency in 2025
                </h3>
                <p className="text-gray-400 text-sm">Agency Growth · 9 min read</p>
              </div>
            </Link>
            <Link
              href="/industries"
              className="flex items-center gap-4 p-4 glass-light rounded-xl border border-brand/20 hover:border-brand/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🏢</span>
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-brand-light transition-colors">
                  AI Voice by Industry: Complete Guide
                </h3>
                <p className="text-gray-400 text-sm">Industry Use Cases · 12 industries covered</p>
              </div>
            </Link>
            <Link
              href="/alternative"
              className="flex items-center gap-4 p-4 glass-light rounded-xl border border-brand/20 hover:border-brand/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚔️</span>
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-brand-light transition-colors">
                  White-Label Voice AI Platform Comparisons
                </h3>
                <p className="text-gray-400 text-sm">Platform Comparisons · 8 competitors analyzed</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}