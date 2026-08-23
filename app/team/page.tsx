import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { authors } from "@/lib/authors";

export const revalidate = 86400;
import { SITE_URL } from "@/lib/site-url";

const title = "Our Team | Fusion Calling";
const description = "Meet the team behind Fusion Calling — founders, voice AI engineers, and agency growth experts building the future of white-label voice automation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/team" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/team`,
    siteName: "Fusion Calling",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function TeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Team", item: `${SITE_URL}/team` },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/team#collection`,
        url: `${SITE_URL}/team`,
        name: "Fusion Calling Team",
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        hasPart: authors.map((author) => ({
          "@type": "ProfilePage",
          "@id": `${SITE_URL}/team/${author.slug}#profile`,
          url: `${SITE_URL}/team/${author.slug}`,
          name: author.name,
          mainEntity: { "@id": author.authorSchemaId },
        })),
      },
      ...authors.map((author) => ({
        "@type": "Person",
        "@id": author.authorSchemaId,
        name: author.name,
        url: `${SITE_URL}/team/${author.slug}`,
        jobTitle: author.role,
        worksFor: { "@id": "https://www.fusioncalling.com/#organization" },
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
      })),
    ],
  };

  return (
    <>
      <script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 pt-4 md:pt-6 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              The founders, engineers, and voice AI experts helping 500+ agencies launch
              profitable white-label voice AI businesses.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/team/${author.slug}`}
                className="group block"
              >
                <div className="glass rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-all duration-500 hover:shadow-premium">
                  <div className="text-center mb-6">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-brand/30 overflow-hidden group-hover:border-brand transition-colors">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-light transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-brand-light text-sm font-medium">{author.role}</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {author.shortBio}
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    {author.linkedin && (
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-brand transition-colors"
                        aria-label={`${author.name} on LinkedIn`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {author.twitter && (
                      <a
                        href={author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-brand transition-colors"
                        aria-label={`${author.name} on Twitter`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-brand/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We&apos;re always looking for voice AI enthusiasts, agency builders, and
              engineers who want to shape the future of conversational automation.
            </p>
            <Link
              href="/whitelabel"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
            >
              Explore the Partner Program
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}