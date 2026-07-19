import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

type Author = {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  shortBio: string;
  longBio: string[];
  linkedin?: string;
  twitter?: string;
  email: string;
  authorSchemaId: string;
  specialties: string[];
};

const authors: Author[] = [
  {
    slug: "alamin",
    name: "Alamin",
    role: "Founder & CEO",
    avatar: "/avatars/male_avatar.svg",
    shortBio: "Founder of Fusion Calling. Building the infrastructure for 500+ agencies to launch white-label voice AI businesses. Previously scaled B2B SaaS to 7-figures ARR.",
    longBio: [
      "Alamin founded Fusion Calling in 2022 after recognizing that agencies wanted to sell voice AI but lacked the infrastructure to white-label, manage multi-provider deployments, and bill clients under their own brand.",
      "Before Fusion Calling, he built and exited a B2B SaaS platform serving 2,000+ SMB customers. He brings deep experience in agency business models, recurring revenue architecture, and voice AI technology stacks.",
      "He's passionate about democratizing access to enterprise-grade voice AI, enabling agencies of any size to compete with major platforms. When not building, he's advising early-stage founders on go-to-market strategy and SaaS pricing.",
    ],
    linkedin: "https://linkedin.com/in/alamin",
    twitter: "https://twitter.com/fusioncalling",
    email: "alamin@fusioncalling.com",
    authorSchemaId: "https://www.fusioncalling.com/team/alamin#person",
    specialties: [
      "Voice AI Strategy",
      "White-label SaaS Architecture",
      "Agency Business Models",
      "Multi-provider Voice Infrastructure",
      "Recurring Revenue Optimization",
    ],
  },
  {
    slug: "voice-team",
    name: "FusionCalling Voice Team",
    role: "Product & Voice Engineering",
    avatar: "/avatars/female_avatar.svg",
    shortBio: "The engineering and voice AI team behind Fusion Calling's multi-provider platform. Experts in Vapi, Retell, ElevenLabs integration, conversation design, and production voice deployments.",
    longBio: [
      "The FusionCalling Voice Team comprises conversation designers, voice engineers, and platform architects who have collectively deployed 10,000+ AI voice agents across real estate, healthcare, insurance, home services, and legal verticals.",
      "They specialize in optimizing latency, barge-in handling, endpointing accuracy, and multi-turn conversation flows. The team maintains direct partnerships with Vapi, Retell, and ElevenLabs engineering teams to ensure Fusion Calling customers get early access to new features and priority support.",
      "Their published work includes the industry's most comprehensive voice AI glossary (74 terms), benchmark studies on provider performance, and open-source tooling for voice agent testing.",
    ],
    linkedin: "https://linkedin.com/company/fusion-calling",
    twitter: "https://twitter.com/fusioncalling",
    email: "voice@fusioncalling.com",
    authorSchemaId: "https://www.fusioncalling.com/team/voice-team#person",
    specialties: [
      "Conversation Design",
      "Voice Provider Integration (Vapi, Retell, ElevenLabs)",
      "Latency Optimization",
      "ASR/TTS Tuning",
      "Multi-turn Dialog Management",
      "Compliance (HIPAA, TCPA, GDPR)",
    ],
  },
];

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const author = authors.find((a) => a.slug === params.slug);
  if (!author) {
    return { title: "Team Member Not Found" };
  }

  const url = `${SITE_URL}/team/${author.slug}`;
  const title = `${author.name} | ${author.role} | Fusion Calling`;

  return {
    title,
    description: author.shortBio,
    alternates: { canonical: `/team/${author.slug}` },
    openGraph: {
      title,
      description: author.shortBio,
      url,
      siteName: "Fusion Calling",
      type: "profile",
      images: [
        {
          url: `${SITE_URL}${author.avatar}`,
          width: 512,
          height: 512,
          alt: author.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description: author.shortBio,
      images: [`${SITE_URL}${author.avatar}`],
    },
  };
}

export default function TeamMemberPage({
  params,
}: {
  params: { slug: string };
}) {
  const author = authors.find((a) => a.slug === params.slug);
  if (!author) {
    notFound();
  }

  const url = `${SITE_URL}/team/${author.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Team", item: `${SITE_URL}/team` },
          { "@type": "ListItem", position: 3, name: author.name, item: url },
        ],
      },
      {
        "@type": "Person",
        "@id": author.authorSchemaId,
        name: author.name,
        url,
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
          ...author.specialties,
        ],
        alumniOf: {
          "@type": "Organization",
          name: "Fusion Calling",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: `${author.name} Profile`,
        description: author.shortBio,
        mainEntity: { "@id": author.authorSchemaId },
        isPartOf: { "@id": "https://www.fusioncalling.com/team#collection" },
        dateModified: CONTENT_LAST_UPDATED,
      },
    ],
  };

  return (
    <>
      <Script
        id={`${author.slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <a
              href="/team"
              className="inline-flex items-center text-brand-light hover:text-brand transition-colors"
            >
              ← Back to Team
            </a>
          </div>

          {/* Profile Header */}
          <div className="text-center mb-12">
            <div className="w-36 h-36 mx-auto mb-6 rounded-full border-4 border-brand/30 overflow-hidden">
              <Image
                src={author.avatar}
                alt={author.name}
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              {author.name}
            </h1>
            <p className="text-brand-light text-lg font-medium mb-2">{author.role}</p>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">{author.shortBio}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-brand hover:text-brand transition-all group"
                aria-label={`${author.name} on LinkedIn`}
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-brand transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-brand hover:text-brand transition-all group"
                aria-label={`${author.name} on Twitter`}
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-brand transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            )}
            <a
              href={`mailto:${author.email}`}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-brand hover:text-brand transition-all group"
              aria-label={`Email ${author.name}`}
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Bio */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <div className="space-y-6">
              {author.longBio.map((paragraph, i) => (
                <p key={i} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {author.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-4 py-2 bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-full border border-brand/20 text-brand-light text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 border border-brand/30 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Work with {author.name.split(" ")[0]}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Whether you&apos;re an agency looking to launch voice AI, a founder
              building in the space, or a voice AI enthusiast — let&apos;s connect.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/whitelabel"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                Explore Partner Program
              </Link>
              <a
                href={`mailto:${author.email}`}
                className="inline-flex items-center px-6 py-3 border border-brand/30 text-brand-light font-semibold rounded-xl hover:border-brand hover:bg-brand/10 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}