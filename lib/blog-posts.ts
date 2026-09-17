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
   * Real last-updated date, once a post has materially changed. Falls back to
   * `date` in the sitemap until set. ponytail: nothing populates this yet —
   * set it when you actually revise a post.
   */
  updated?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-start-a-voice-ai-agency",
    title: "How to Start a Voice AI Agency in 2026: A Step-by-Step Guide",
    metaTitle: "Start a Voice AI Agency in 2026: Step-by-Step",
    description:
      "Learn how to start an AI voice agency business with a white-label platform and our AI voice agent reseller program. Keep 100% of client revenue, launch in 7 days, scale with Vapi, Retell and ElevenLabs.",
    date: "2025-02-13",
    category: "Agency Growth",
    readTime: "9 min read",
    image: "/blog/blog1.webp",
  },
  {
    slug: "gohighlevel-alternative-for-voice-ai",
    title: "GoHighLevel Alternative for Voice AI: Built-In CRM + Voice Agents",
    metaTitle: "GoHighLevel Alternative for Voice AI (2026)",
    description:
      "For voice-first agencies, Fusion Calling bundles AI voice agents with a built-in CRM, so you don't need an expensive GoHighLevel subscription just to run a voice AI agency.",
    date: "2025-02-16",
    category: "Buyer's Guide",
    readTime: "9 min read",
    image: "/blog/blog2.webp",
  },
  {
    slug: "vapi-vs-retell-vs-elevenlabs",
    title: "Vapi vs Retell vs ElevenLabs: Choosing the Right Voice AI Provider",
    metaTitle: "Vapi vs Retell vs ElevenLabs: Which Is Best?",
    description:
      "A fair, neutral comparison of the three leading voice AI providers, and why you don't have to pick just one when you use Fusion Calling's multi-provider layer.",
    date: "2025-02-14",
    category: "Buyer's Guide",
    readTime: "8 min read",
    image: "/blog/blog3.webp",
  },
  {
    slug: "ai-voice-agents-for-small-business",
    title: "AI Voice Agents for Small Business: Use Cases & ROI",
    metaTitle: "AI Voice Agents for Small Business: 2026 Guide",
    description:
      "See how restaurants and other small businesses use AI voice agents to answer every call, book appointments, and stay open 24/7. Compare the cost with a Vapi-based build and see the ROI math for a first client.",
    date: "2025-02-15",
    category: "Use Cases",
    readTime: "8 min read",
    image: "/blog/blog4.webp",
  },
  {
    slug: "vapi-white-label-platform",
    title: "Does Vapi Offer White Label? How It Works",
    metaTitle: "White-Label Vapi: Vapi Alone Isn't Resellable",
    description:
      "Does Vapi offer white label natively? Learn how agencies resell Vapi under their own brand in 2026, what's missing, and the step-by-step setup.",
    date: "2025-02-10",
    category: "Integration Guide",
    readTime: "7 min read",
    image: "/blog/blog5.webp",
  },
  {
    slug: "retell-ai-white-label",
    title: "Can You White-Label Retell AI? Here's How",
    description:
      "Learn how agencies resell Retell AI under their own brand for clients like dental clinics, and how it compares with Vapi on cost and setup. Follow the step-by-step path before you launch.",
    date: "2025-02-11",
    category: "Integration Guide",
    readTime: "7 min read",
    image: "/blog/blog6.webp",
  },
  {
    slug: "gohighlevel-white-label-voice",
    title: "White-Label Voice AI for GoHighLevel: Costs",
    description:
      "Step-by-step guide to adding white-label voice AI to GoHighLevel: webhook setup, per-client costs, pricing math, and pitfalls to avoid before launch.",
    date: "2025-02-12",
    category: "Integration Guide",
    readTime: "8 min read",
    image: "/blog/blog7.webp",
  },
  {
    slug: "how-to-automate-phone-calls-with-ai",
    title: "How to Automate Phone Calls with AI: Setup to First Live Call",
    metaTitle: "How to Automate Phone Calls with AI",
    description:
      "How to automate phone calls with AI in five steps: pick a use case, connect your number, calendar, and CRM, add business knowledge, test calls, then launch with clear handoff rules. Includes AI call automation vs IVR, recording consent, and time-to-launch.",
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
      "How is call audio encrypted at rest and in transit? TLS plus SRTP in transit, AES-256 at rest, GDPR retention, TCPA outbound and recording consent, barge-in (80-150 ms), and synthetic-voice safeguards — with NIST SP 800-52/57 baselines.",
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
      "Mostly no: AI receptionists take over routine calls while humans keep judgment, empathy, and relationships. What to automate, what to keep, and what that means for owners and front-desk teams in 2026.",
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
