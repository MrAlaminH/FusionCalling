import { SITE_URL } from "@/lib/site-url";

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
  longBio: string[];
  specialties: string[];
};

export const authors: Author[] = [
  {
    slug: "alamin",
    name: "Alamin",
    role: "Founder & CEO",
    bio: "Alamin is the founder and CEO of Fusion Calling, a white-label AI voice automation platform helping agencies launch branded voice AI businesses. With a background in building scalable SaaS products and voice AI infrastructure, he has helped 500+ agencies deploy AI phone agents across real estate, healthcare, insurance, home services, and more. He writes about voice AI strategy, agency growth, and the future of conversational automation.",
    shortBio:
      "Founder of Fusion Calling. Building the infrastructure for 500+ agencies to launch white-label voice AI businesses. Previously scaled B2B SaaS to 7-figures ARR.",
    avatar: "/avatars/male_avatar.svg",
    linkedin: "https://www.linkedin.com/in/alamin",
    twitter: "https://x.com/MrAlaminH",
    email: "alamin@fusioncalling.com",
    authorSchemaId: `${SITE_URL}/team/alamin#person`,
    longBio: [
      "Alamin founded Fusion Calling in 2022 after recognizing that agencies wanted to sell voice AI but lacked the infrastructure to white-label, manage multi-provider deployments, and bill clients under their own brand.",
      "Before Fusion Calling, he built and exited a B2B SaaS platform serving 2,000+ SMB customers. He brings deep experience in agency business models, recurring revenue architecture, and voice AI technology stacks.",
      "He's passionate about democratizing access to enterprise-grade voice AI, enabling agencies of any size to compete with major platforms. When not building, he's advising early-stage founders on go-to-market strategy and SaaS pricing.",
    ],
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
    name: "Fusion Calling Team",
    role: "Product & Voice Engineering",
    bio: "The Fusion Calling team builds and operates the white-label AI voice platform used by 500+ agencies worldwide. Our product and voice engineering team specializes in multi-provider voice AI (Vapi, Retell, ElevenLabs), white-label infrastructure, and agency go-to-market strategies. We publish technical guides, industry benchmarks, and agency playbooks based on production data from millions of automated calls.",
    shortBio:
      "The engineering and voice AI team behind Fusion Calling's multi-provider platform. Experts in Vapi, Retell, ElevenLabs integration, conversation design, and production voice deployments.",
    avatar: "/avatars/female_avatar.svg",
    linkedin: "https://www.linkedin.com/company/fusion-calling/",
    twitter: "https://x.com/MrAlaminH",
    email: "team@fusioncalling.com",
    authorSchemaId: `${SITE_URL}/team/voice-team#person`,
    longBio: [
      "The Fusion Calling Voice Team comprises conversation designers, voice engineers, and platform architects who have collectively deployed 10,000+ AI voice agents across real estate, healthcare, insurance, home services, and legal verticals.",
      "They specialize in optimizing latency, barge-in handling, endpointing accuracy, and multi-turn conversation flows. The team maintains direct partnerships with Vapi, Retell, and ElevenLabs engineering teams to ensure Fusion Calling customers get early access to new features and priority support.",
      "Their published work includes the industry's most comprehensive voice AI glossary (76 terms), benchmark studies on provider performance, and open-source tooling for voice agent testing.",
    ],
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

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getTeamAuthor(): Author {
  const author = authors.find((a) => a.slug === "voice-team");
  if (!author) throw new Error("Team author missing from registry");
  return author;
}

export function getAuthorBySchemaId(id: string): Author | undefined {
  return authors.find((a) => a.authorSchemaId === id);
}
