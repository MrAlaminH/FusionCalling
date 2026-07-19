export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  shortBio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  authorSchemaId: string;
};

export const authors: Author[] = [
  {
    slug: "alamin",
    name: "Alamin",
    role: "Founder & CEO",
    bio: "Alamin is the founder and CEO of Fusion Calling, a white-label AI voice automation platform helping agencies launch branded voice AI businesses. With a background in building scalable SaaS products and voice AI infrastructure, he has helped 500+ agencies deploy AI phone agents across real estate, healthcare, insurance, home services, and more. He writes about voice AI strategy, agency growth, and the future of conversational automation.",
    shortBio: "Founder & CEO of Fusion Calling. Building the infrastructure for 500+ voice AI agencies.",
    avatar: "/avatars/alamin.webp",
    linkedin: "https://www.linkedin.com/in/alamin",
    twitter: "https://twitter.com/alamin",
    email: "alamin@fusioncalling.com",
    authorSchemaId: "https://www.fusioncalling.com/team/alamin#person",
  },
  {
    slug: "fusioncalling-team",
    name: "Fusion Calling Team",
    role: "Product & Voice Engineering",
    bio: "The Fusion Calling team builds and operates the white-label AI voice platform used by 500+ agencies worldwide. Our product and voice engineering team specializes in multi-provider voice AI (Vapi, Retell, ElevenLabs), white-label infrastructure, and agency go-to-market strategies. We publish technical guides, industry benchmarks, and agency playbooks based on production data from millions of automated calls.",
    shortBio: "The team behind Fusion Calling's voice AI platform. 500+ agencies, millions of calls automated.",
    avatar: "/avatars/team.webp",
    linkedin: "https://www.linkedin.com/company/fusion-calling/",
    twitter: "https://twitter.com/fusioncalling",
    email: "team@fusioncalling.com",
    authorSchemaId: "https://www.fusioncalling.com/team/fusioncalling-team#person",
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorBySchemaId(id: string): Author | undefined {
  return authors.find((a) => a.authorSchemaId === id);
}