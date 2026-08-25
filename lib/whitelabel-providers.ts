export type WhiteLabelProvider = {
  slug: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  h1Prefix: string;
  h1Highlight: string;
  keywords: string[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  /** Blog guide for this provider (deep link for internal cross-linking). */
  blogGuide?: { href: string; label: string };
  /** Slugs of related case studies under /whitelabel/case-studies. */
  relatedCaseStudySlugs?: string[];
};

export const whitelabelProviders: WhiteLabelProvider[] = [
  {
    slug: "vapi",
    name: "Vapi",
    badge: "Built for Vapi Partners",
    title: "White-Label Vapi AI Voice Agents",
    description:
      "Resell Vapi AI voice agents under your own brand via Fusion Calling. Import your existing Vapi agent configurations and API keys, set your pricing, and keep 100% of revenue — with full white-label dashboard, client portals, and rebilling.",
    h1Prefix: "White-Label AI Voice Agents for",
    h1Highlight: "Vapi",
    blogGuide: {
      href: "/blog/vapi-white-label-platform",
      label: "How to White-Label Vapi AI Voice Agents (Agency Guide)",
    },
    relatedCaseStudySlugs: ["voicewave-marketing", "apex-realty-group"],
    keywords: [
      "white label Vapi AI voice",
      "resell Vapi agents",
      "Vapi white-label reseller",
      "Vapi AI voice for agencies",
      "Vapi partner program",
      "import Vapi agents white label",
      "Vapi AI reseller program",
      "Vapi white-label dashboard",
      "resell Vapi phone automation",
      "Vapi agency partnership",
    ],
    features: [
      {
        title: "Import existing Vapi agents",
        description:
          "Bring your Vapi agent configurations and API keys directly. Fusion Calling layers white-label branding, client portals, lead management, and rebilling on top — no agent rebuild required.",
      },
      {
        title: "100% white-label",
        description:
          "Your clients see only your logo, domain, colors, and pricing. Vapi and Fusion Calling stay completely invisible. Full brand control from dashboard to client portal.",
      },
      {
        title: "Set your own pricing",
        description:
          "Keep 100% of what you charge your clients. Plans start at $99/month wholesale for 6 sub-accounts, with minute rebilling so you control margin on every client.",
      },
      {
        title: "Multi-tenant sub-account management",
        description:
          "Manage every client's Vapi agents, minutes, and billing from one centralized dashboard. Onboard new clients in minutes, not days.",
      },
      {
        title: "24/7 AI call handling",
        description:
          "Deploy Vapi-powered AI agents across every client for round-the-clock call handling, lead qualification, and booking — no missed calls, no staffing.",
      },
      {
        title: "Pre-built integration ecosystem",
        description:
          "Connect Vapi agents to GoHighLevel, HubSpot, Salesforce, Zapier (2,200+ apps), and more. Your clients get seamless CRM and workflow integration out of the box.",
      },
    ],
    faqs: [
      {
        question: "Can I import my existing Vapi agents into Fusion Calling's white-label platform?",
        answer:
          "Yes. Fusion Calling is purpose-built for multi-provider white-label reselling. You bring your existing Vapi agent configurations and API keys. We layer white-label branding, client portals, lead management, and rebilling on top so you resell your Vapi agents under one branded dashboard — no agent rebuild needed.",
      },
      {
        question: "Will my clients see Vapi branding anywhere?",
        answer:
          "No. The platform is 100% white-labeled with your logo, colors, domain, and email. Your clients experience a fully branded AI voice product and never see Vapi or Fusion Calling unless you explicitly tell them.",
      },
      {
        question: "How does Vapi white-label pricing work?",
        answer:
          "You pay a wholesale monthly rate to Fusion Calling (starting at $99/month for 6 sub-accounts, $299 for 20, $499 for unlimited) and keep 100% of what you charge your clients. Minute rebilling lets you control margin on every client. Your Vapi API usage costs are separate and handled through your Vapi account.",
      },
      {
        question: "Can I use Vapi's full feature set through the white-label platform?",
        answer:
          "Yes. You maintain your Vapi account with full access to Vapi's features, tools, and settings. Fusion Calling adds white-label branding, client management, billing, and lead management on top — it does not restrict or limit Vapi's native capabilities.",
      },
      {
        question: "Do I need technical expertise to white-label Vapi?",
        answer:
          "No technical expertise required. Importing your Vapi agents takes minutes. We provide a fully managed white-label solution so you focus on sales and client relationships while we handle integrations, updates, and maintenance.",
      },
    ],
  },
  {
    slug: "retell",
    name: "Retell AI",
    badge: "Built for Retell AI Partners",
    title: "White-Label Retell AI Voice Agents",
    description:
      "Resell Retell AI voice agents under your own brand via Fusion Calling. Bring your existing Retell agent configurations and API keys, set your pricing, and keep 100% of the revenue — with full white-label dashboard, client management, and rebilling.",
    h1Prefix: "White-Label AI Voice Agents for",
    h1Highlight: "Retell AI",
    blogGuide: {
      href: "/blog/retell-ai-white-label",
      label: "How to White-Label Retell AI Voice Agents (Agency Guide)",
    },
    relatedCaseStudySlugs: ["callflow-solutions"],
    keywords: [
      "white label Retell AI voice",
      "resell Retell AI agents",
      "Retell AI white-label reseller",
      "Retell AI voice for agencies",
      "Retell AI partner program",
      "import Retell AI agents white label",
      "Retell AI reseller program",
      "Retell AI white-label dashboard",
      "resell Retell phone automation",
      "Retell AI agency partnership",
    ],
    features: [
      {
        title: "Import existing Retell agents",
        description:
          "Bring your Retell AI agent configurations and API keys directly. Fusion Calling adds white-label branding, client portals, lead management, and rebilling — no agent rebuild required.",
      },
      {
        title: "100% white-label",
        description:
          "Your clients see only your brand — logo, domain, colors, and pricing. Retell AI stays completely invisible. Full brand control from the partner dashboard to every client portal.",
      },
      {
        title: "Set your own pricing",
        description:
          "Keep 100% of what you charge your clients. Wholesale plans start at $99/month for 6 sub-accounts with minute rebilling so you control margin on every client.",
      },
      {
        title: "Centralized multi-tenant dashboard",
        description:
          "Manage every client's Retell agents, minutes, and billing from one dashboard. Onboard new clients in minutes — no separate logins, no manual setup.",
      },
      {
        title: "24/7 AI call handling",
        description:
          "Deploy Retell AI-powered voice agents across all your clients for round-the-clock call handling, lead qualification, and booking — no missed calls, no staffing costs.",
      },
      {
        title: "Seamless CRM & workflow integrations",
        description:
          "Connect Retell agents to GoHighLevel, HubSpot, Salesforce, Zapier (2,200+ apps), and more. Out-of-the-box integrations for every client workflow.",
      },
    ],
    faqs: [
      {
        question: "Can I import my existing Retell AI agents into Fusion Calling's white-label platform?",
        answer:
          "Yes. Fusion Calling supports Retell AI out of the box. Bring your existing Retell agent configurations and API keys. We layer white-label branding, client portals, lead management, and rebilling on top — so you resell under one branded dashboard with zero agent rebuild.",
      },
      {
        question: "Will my clients see Retell AI branding anywhere?",
        answer:
          "No. The platform is 100% white-labeled with your logo, colors, domain, and email. Your clients never see Retell AI or Fusion Calling unless you tell them. Complete brand control.",
      },
      {
        question: "How does Retell AI white-label pricing work?",
        answer:
          "You pay a wholesale monthly rate to Fusion Calling (starting at $99/month for 6 sub-accounts, $299 for 20, $499 for unlimited) and keep 100% of what you charge your clients. Minute rebilling lets you control margin on every client. Your Retell API usage costs remain separate through your Retell account.",
      },
      {
        question: "Can I still use Retell AI's full capabilities through the white-label platform?",
        answer:
          "Absolutely. You retain full access to Retell AI's features and tools through your Retell account. Fusion Calling adds white-label branding, client management, billing, and lead management without restricting Retell AI's native capabilities.",
      },
      {
        question: "Do I need technical expertise to white-label Retell AI?",
        answer:
          "No. Importing your Retell agents takes minutes with guided setup. We handle all technical aspects — integrations, updates, and maintenance — so you focus on selling and growing your agency.",
      },
    ],
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    badge: "Built for ElevenLabs Partners",
    title: "White-Label ElevenLabs Voice Agents",
    description:
      "Resell ElevenLabs voice agents under your own brand via Fusion Calling. Bring your existing ElevenLabs agent configurations and API keys, set your pricing, and keep 100% of the revenue — with full white-label dashboard, client portals, and rebilling.",
    h1Prefix: "White-Label AI Voice Agents for",
    h1Highlight: "ElevenLabs",
    relatedCaseStudySlugs: ["voicewave-marketing"],
    keywords: [
      "white label ElevenLabs voice",
      "resell ElevenLabs AI agents",
      "ElevenLabs white-label reseller",
      "ElevenLabs voice for agencies",
      "ElevenLabs partner program",
      "import ElevenLabs agents white label",
      "ElevenLabs reseller program",
      "ElevenLabs white-label dashboard",
      "resell ElevenLabs phone automation",
      "ElevenLabs agency partnership",
    ],
    features: [
      {
        title: "Import existing ElevenLabs agents",
        description:
          "Bring your ElevenLabs agent configurations and API keys directly. Fusion Calling adds white-label branding, client portals, lead management, and rebilling — no agent rebuild required.",
      },
      {
        title: "100% white-label",
        description:
          "Your clients see only your brand — logo, domain, colors, and pricing. ElevenLabs stays completely invisible. Full brand control from dashboard to client portal.",
      },
      {
        title: "Set your own pricing",
        description:
          "Keep 100% of what you charge your clients. Wholesale plans start at $99/month for 6 sub-accounts with minute rebilling so you control margin on every client.",
      },
      {
        title: "Multi-tenant client management",
        description:
          "Manage every client's ElevenLabs agents, minutes, and billing from one centralized dashboard. Onboard new clients in minutes, not days.",
      },
      {
        title: "Premium voice quality",
        description:
          "Leverage ElevenLabs' industry-leading voice synthesis and agent capabilities, delivered under your own brand. Your clients get the best voice AI on the market.",
      },
      {
        title: "Seamless workflow integrations",
        description:
          "Connect ElevenLabs agents to GoHighLevel, HubSpot, Salesforce, Zapier (2,200+ apps), and more. Out-of-the-box integrations for every client workflow.",
      },
    ],
    faqs: [
      {
        question: "Can I import my existing ElevenLabs agents into Fusion Calling's white-label platform?",
        answer:
          "Yes. Fusion Calling supports ElevenLabs out of the box. Bring your existing ElevenLabs agent configurations and API keys. We add white-label branding, client portals, lead management, and rebilling — zero agent rebuild needed.",
      },
      {
        question: "Will my clients see ElevenLabs branding anywhere?",
        answer:
          "No. The platform is 100% white-labeled with your logo, colors, domain, and email. Your clients never see ElevenLabs or Fusion Calling unless you explicitly tell them.",
      },
      {
        question: "How does ElevenLabs white-label pricing work?",
        answer:
          "You pay a wholesale monthly rate to Fusion Calling (starting at $99/month for 6 sub-accounts, $299 for 20, $499 for unlimited) and keep 100% of what you charge your clients. Minute rebilling lets you control margin. Your ElevenLabs API usage costs remain separate through your ElevenLabs account.",
      },
      {
        question: "Can I use ElevenLabs' full feature set through the white-label platform?",
        answer:
          "Yes. You retain full access to ElevenLabs' features, tools, and settings through your ElevenLabs account. Fusion Calling adds white-label branding, client management, billing, and lead management without restricting ElevenLabs' native capabilities.",
      },
      {
        question: "Do I need technical expertise to white-label ElevenLabs?",
        answer:
          "No. Importing your ElevenLabs agents takes minutes with guided setup. We handle all technical aspects — integrations, updates, and maintenance — so you focus on selling and growing your agency.",
      },
    ],
  },
];
