export type BlogPost = {
  slug: string;
  /** Full editorial title — used for the h1 area, JSON-LD headline, and cards. */
  title: string;
  /** SERP/social-safe variant when the full title is too long for results pages. */
  metaTitle?: string;
  /**
   * THE description: meta description, OG/Twitter, JSON-LD, and index cards all
   * derive from it. Never restate it in a page.
   */
  description: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  /**
   * Author slug from lib/authors. Omit for the default Fusion Calling team
   * byline. Single source for post bylines and the /team/<slug> article list.
   */
  author?: string;
  /**
   * Real last-updated date, once a post has materially changed. Falls back to
   * `date` in the sitemap until set. Set to the 2026 rewrite date on the
   * seven Feb-2025 posts; set it when you actually revise any other post.
   */
  updated?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-start-a-voice-ai-agency",
    title: "How to Start a Voice AI Agency in 2026: A Step-by-Step Guide",
    metaTitle: "How to Start a Voice AI Agency in 2026",
    description:
      "Learn how to start an AI voice agency with a white-label platform. Keep 100% of client revenue, launch in 24 hours, and scale with Vapi, Retell & ElevenLabs.",
    date: "2025-02-13",
    updated: "2026-09-19",
    category: "Agency Growth",
    readTime: "9 min read",
    image: "/blog/blog1.webp",
    author: "alamin",
  },
  {
    slug: "gohighlevel-alternative-for-voice-ai",
    title: "GoHighLevel Alternative for Voice AI: Built-In CRM + Voice Agents",
    metaTitle: "GoHighLevel Alternative for Voice AI (2026)",
    description:
      "Fusion Calling bundles AI voice agents with a built-in CRM for voice-first agencies — no GoHighLevel subscription needed to run a voice AI agency.",
    date: "2025-02-16",
    updated: "2026-09-19",
    category: "Buyer's Guide",
    readTime: "9 min read",
    image: "/blog/blog2.webp",
  },
  {
    slug: "vapi-vs-retell-vs-elevenlabs",
    title: "Vapi vs Retell vs ElevenLabs: Choosing the Right Voice AI Provider",
    metaTitle: "Vapi vs Retell vs ElevenLabs: Which Wins?",
    description:
      "A fair, neutral comparison of the three leading voice AI providers, and why you don't have to pick just one when you use Fusion Calling's multi-provider layer.",
    date: "2025-02-14",
    updated: "2026-09-19",
    category: "Buyer's Guide",
    readTime: "8 min read",
    image: "/blog/blog3.webp",
  },
  {
    slug: "ai-voice-agents-for-small-business",
    title: "AI Voice Agents for Small Business: Use Cases & ROI",
    metaTitle: "AI Voice Agents for Small Business (2026)",
    description:
      "How restaurants and small businesses use AI voice agents to answer every call, book appointments, and stay open 24/7 — plus the ROI math for a first client.",
    date: "2025-02-15",
    updated: "2026-09-19",
    category: "Use Cases",
    readTime: "8 min read",
    image: "/blog/blog4.webp",
    author: "alamin",
  },
  {
    slug: "vapi-white-label-platform",
    title: "Does Vapi Offer White Label? How It Works",
    metaTitle: "White-Label Vapi: It's Not Resellable Alone",
    description:
      "Does Vapi offer white label natively? Learn how agencies resell Vapi under their own brand in 2026, what's missing, and the step-by-step setup.",
    date: "2025-02-10",
    updated: "2026-09-19",
    category: "Integration Guide",
    readTime: "7 min read",
    image: "/blog/blog5.webp",
  },
  {
    slug: "retell-ai-white-label",
    title: "Can You White-Label Retell AI? Here's How",
    description:
      "How agencies white-label Retell AI for clients like dental clinics, how it compares with Vapi on cost and setup, and the step-by-step path to launch.",
    date: "2025-02-11",
    updated: "2026-09-19",
    category: "Integration Guide",
    readTime: "7 min read",
    image: "/blog/blog6.webp",
  },
  {
    slug: "gohighlevel-white-label-voice",
    // Informational "integration" angle — the transactional "white-label AI
    // voice for GoHighLevel" query is owned by /whitelabel/gohighlevel.
    title: "GoHighLevel Voice AI Integration: Setup & Costs",
    description:
      "Step-by-step guide to adding white-label voice AI to GoHighLevel: webhook setup, per-client costs, pricing math, and pitfalls to avoid before launch.",
    date: "2025-02-12",
    updated: "2026-09-19",
    category: "Integration Guide",
    readTime: "8 min read",
    image: "/blog/blog7.webp",
  },
  {
    slug: "how-to-automate-phone-calls-with-ai",
    title: "How to Automate Phone Calls with AI: Setup to First Live Call",
    metaTitle: "How to Automate Phone Calls with AI",
    description:
      "How to automate phone calls with AI in five steps: pick a use case, connect number, calendar, and CRM, add knowledge, test calls, launch with handoff rules.",
    date: "2026-09-05",
    category: "How-To Guide",
    readTime: "6 min read",
    image: "/blog/blog4.webp",
  },
  {
    slug: "voice-ai-security-compliance",
    title: "Voice AI Security & Compliance: Encryption, GDPR, Interruption Handling",
    metaTitle: "Voice AI Security & Compliance Guide (2026)",
    description:
      "How call audio is encrypted in transit and at rest (TLS/SRTP, AES-256), plus GDPR, TCPA consent, barge-in, and NIST baselines for voice AI compliance.",
    date: "2026-09-05",
    category: "Security Guide",
    readTime: "7 min read",
    image: "/blog/blog3.webp",
  },
  {
    slug: "ai-receptionist-cost",
    title: "How Much Does an AI Receptionist Cost in 2026? (Real Pricing)",
    metaTitle: "AI Receptionist Cost in 2026: Real Pricing",
    description:
      "Real 2026 AI receptionist pricing: per-minute vs per-month models, hidden costs like setup fees and overages, and where Fusion Calling sits from $149/mo.",
    date: "2026-09-06",
    category: "Buyer's Guide",
    readTime: "8 min read",
    image: "/blog/blog2.webp",
  },
  {
    slug: "ai-receptionist-complaints",
    title: "AI Receptionist Complaints: 55 Real User Reports Analyzed",
    metaTitle: "AI Receptionist Complaints: 55 Real Reports",
    description:
      "We analyzed 55 real user reports of AI receptionists. The five complaints that come up most — hangups, loops, billing shocks — and how to avoid them.",
    date: "2026-09-16",
    category: "Buyer's Guide",
    readTime: "9 min read",
    image: "/blog/blog5.webp",
  },
  {
    slug: "missed-call-text-back-vs-ai-receptionist",
    title: "Missed-Call Text-Back vs AI Receptionist (2026)",
    metaTitle: "Missed-Call Text-Back vs AI Receptionist",
    description:
      "Missed-call text-back texts callers after the call is already lost; an AI receptionist answers live in two rings and books. Verified pricing, honest stats.",
    date: "2026-09-16",
    category: "Buyer's Guide",
    readTime: "8 min read",
    image: "/blog/blog7.webp",
  },
  {
    slug: "ai-receptionist-call-recording-laws",
    title: "AI Receptionist Call Recording Laws by State (2026)",
    metaTitle: "AI Call Recording Laws by State (2026)",
    description:
      "Yes, AI receptionists are legal in the US. The verified 2026 map: 13 all-party consent states, FCC AI-voice rules, disclosure laws, and a compliance checklist.",
    date: "2026-09-16",
    category: "Security Guide",
    readTime: "10 min read",
    image: "/blog/blog3.webp",
  },
  {
    slug: "will-ai-replace-receptionists",
    title: "Will AI Replace Receptionists? What Actually Changes in 2026",
    metaTitle: "Will AI Replace Receptionists? 2026 Outlook",
    description:
      "Mostly no: AI receptionists handle routine calls while humans keep judgment, empathy, and relationships. What to automate, what to keep, and the 2026 outlook.",
    date: "2026-09-06",
    category: "Use Cases",
    readTime: "8 min read",
    image: "/blog/blog3.webp",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/**
 * Registry order is authoring order, never display order — every display
 * surface (index grid, featured, related) sorts by date through this.
 */
export const blogPostsByDate: BlogPost[] = [...blogPosts].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function getFeaturedPost(): BlogPost {
  return blogPostsByDate[0];
}

/** Same category first, then most recent others — both date-sorted. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return [
    ...blogPostsByDate.filter(
      (p) => p.slug !== post.slug && p.category === post.category
    ),
    ...blogPostsByDate.filter(
      (p) => p.slug !== post.slug && p.category !== post.category
    ),
  ].slice(0, limit);
}
