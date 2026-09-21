import { SITE_URL } from "@/lib/site-url";
import { breadcrumbSchema, faqSchema, offerSchema, webPageSchema } from "@/lib/seo";
import { WHOLESALE_PLANS, wholesalePricingSummary } from "@/lib/product-facts";

export type WhiteLabelProvider = {
  slug: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  h1Prefix: string;
  h1Highlight: string;
  h1Suffix: string;
  keywords: string[];
  features: { title: string; description: string }[];
  differentiators: { heading: string; text: string }[];
  faqs: { question: string; answer: string }[];
  /** Optional custom title for ProviderCrossLinks cards (defaults to "White-Label {name}"). */
  crossLinkTitle?: string;
  /** Blog guide for this provider (deep link for internal cross-linking). */
  blogGuide?: { href: string; label: string };
  /** Slugs of related case studies under /whitelabel/case-studies. */
  relatedCaseStudySlugs?: string[];
};

/** Full visible H1, assembled from the three hero parts — also the schema page/service name. */
export function providerH1(provider: WhiteLabelProvider): string {
  return `${provider.h1Prefix} ${provider.h1Highlight} ${provider.h1Suffix}`;
}

export const whitelabelProviders: WhiteLabelProvider[] = [
  {
    slug: "vapi",
    name: "Vapi",
    badge: "Built for Vapi Partners",
    title: "White Label Vapi AI Voice Agents",
    description:
      "White label Vapi AI voice agents under your own brand. Import your Vapi agents and API keys, wrap them in a branded dashboard, and keep 100% of revenue.",
    h1Prefix: "White-Label",
    h1Highlight: "Vapi AI Voice Agents",
    h1Suffix: "Under Your Own Brand",
    blogGuide: {
      href: "/blog/vapi-white-label-platform",
      label: "How to White-Label Vapi AI Voice Agents (Agency Guide)",
    },
    relatedCaseStudySlugs: ["voicewave-marketing", "apex-realty-group"],
    differentiators: [
      {
        heading: "Bring your own Vapi account and keys",
        text: "Fusion Calling sits on top of the Vapi account you already run: import your agent configurations, keep your provider settings, and let clients meet only your brand. Vapi usage and billing stay on your account while the platform wraps them in sub-accounts, client portals, and Stripe rebilling.",
      },
      {
        heading: "Best for agencies already building on Vapi",
        text: "If your team already ships Vapi workloads, white-labeling beats re-platforming. Nothing about your agents changes — but every client gets an isolated, branded sub-account instead of sharing your builder, and you stop giving clients logins to raw tooling.",
      },
      {
        heading: "Vapi vs. Retell vs. ElevenLabs, from the Vapi side",
        text: "Pick Vapi when you want maximum pipeline control and bring-your-own-key economics; Retell when deployment speed matters most; ElevenLabs when premium voice quality is the selling point. Because Fusion Calling is provider-agnostic, many partners run Vapi for technical clients alongside ElevenLabs for brand-critical front doors — one dashboard, mixed engines per client.",
      },
    ],
    keywords: [
      "white label vapi",
      "white label vapi ai",
      "vapi ai white label",
      "can you white label vapi",
      "vapi white label dashboard",
      "resell vapi agents",
      "vapi reseller program",
      "white label ai voice agents",
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
        question: "Can I white label Vapi AI voice agents?",
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
          `You pay a wholesale monthly rate to Fusion Calling (${wholesalePricingSummary()}) and keep 100% of what you charge your clients. Minute rebilling lets you control margin on every client. Your Vapi API usage costs are separate and handled through your Vapi account.`,
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
      {
        question: "What developer-level control do I keep when white-labeling Vapi?",
        answer:
          "All of it. Vapi is the developer-flexibility engine: you keep your assistants, functions and tool calls, pipeline and model settings, and BYOK billing on your own Vapi account. Fusion Calling only wraps that setup in branded sub-accounts, client portals, and Stripe rebilling — so technical clients get full Vapi programmability without ever seeing raw tooling.",
      },
    ],
  },
  {
    slug: "retell",
    name: "Retell AI",
    badge: "Built for Retell AI Partners",
    title: "White Label Retell AI Voice Agents",
    description:
      "White label Retell AI voice agents under your own brand. Import your Retell agents, launch branded client portals in ~24 hours, and keep 100% of revenue.",
    h1Prefix: "White-Label",
    h1Highlight: "Retell AI Voice Agents",
    h1Suffix: "Under Your Own Brand",
    blogGuide: {
      href: "/blog/retell-ai-white-label",
      label: "How to White-Label Retell AI Voice Agents (Agency Guide)",
    },
    relatedCaseStudySlugs: ["callflow-solutions"],
    differentiators: [
      {
        heading: "Fastest path from Retell agent to branded client launch",
        text: "Retell's agent builder is one of the quickest to production, and white-labeling keeps it that way: import your Retell agents unchanged, add your logo and domain, and a client-ready portal goes live in about 24 hours — without rebuilding a single workflow. On the call itself, Retell's low-latency engine and fast interruption handling keep conversations natural, with the agent yielding in a fraction of a second when callers barge in.",
      },
      {
        heading: "Best for agencies standardizing on one engine",
        text: "If Retell is your team's default engine, the white-label layer turns it into a product: per-client sub-accounts with separate minutes and billing, branded call logs and transcripts for renewals, and pricing you set — instead of reselling Retell through spreadsheets and shared logins.",
      },
      {
        heading: "Retell vs. Vapi vs. ElevenLabs, from the Retell side",
        text: "Pick Retell when launch speed and simplicity win the deal; Vapi when a technical client needs deep pipeline control and BYOK; ElevenLabs when the voice itself has to impress. Fusion Calling is provider-agnostic, so you can standardize on Retell for most clients and mix in the others where a specific account calls for it.",
      },
    ],
    keywords: [
      "white label retell ai",
      "retell ai white label",
      "can you white label retell ai",
      "retell ai reseller",
      "white label retell agents",
      "resell retell ai agents",
      "white label ai voice agents",
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
        question: "Can I white label Retell AI voice agents?",
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
          `You pay a wholesale monthly rate to Fusion Calling (${wholesalePricingSummary()}) and keep 100% of what you charge your clients. Minute rebilling lets you control margin on every client. Your Retell API usage costs remain separate through your Retell account.`,
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
      {
        question: "How fast do Retell agents respond, and do they handle interruptions?",
        answer:
          "That is Retell's signature strength: low-latency turn-taking with fast interruption handling, so callers can barge in mid-sentence and the agent yields naturally instead of talking over them. White-labeled through Fusion Calling you keep that sub-second responsiveness, plus branded sub-accounts, call logs with transcripts for renewals, and minute rebilling at prices you set.",
      },
    ],
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    badge: "Built for ElevenLabs Partners",
    title: "White Label ElevenLabs AI Voice Agents",
    description:
      "White label ElevenLabs AI voice agents under your own brand. Ship premium voices and voice clones under your logo, domain, and pricing — keep 100% of revenue.",
    h1Prefix: "White-Label",
    h1Highlight: "ElevenLabs AI Voice Agents",
    h1Suffix: "Under Your Own Brand",
    relatedCaseStudySlugs: ["voicewave-marketing"],
    differentiators: [
      {
        heading: "Premium voices for brand-critical phone experiences",
        text: "ElevenLabs is the engine agencies reach for when the voice itself is the product — receptionist front doors, premium client accounts, and brands where a robotic caller costs deals. That means industry-leading neural text-to-speech plus custom voice cloning, so each client gets a distinctive on-brand persona. White-labeled, that voice quality ships under your logo and your domain.",
      },
      {
        heading: "Best for client-facing, high-touch deployments",
        text: "ElevenLabs-powered agents suit inbound front-door roles where every call shapes brand perception. The white-label layer adds what a voice engine alone cannot give an agency: isolated client sub-accounts, portals on your domain, and Stripe rebilling at prices you set.",
      },
      {
        heading: "ElevenLabs vs. Vapi vs. Retell, from the ElevenLabs side",
        text: "Pick ElevenLabs when voice quality and brand experience are the selling point; Vapi when a technical client wants deep pipeline control and BYOK; Retell when speed of deployment leads the conversation. Fusion Calling lets you deploy ElevenLabs for flagship accounts and the other engines elsewhere — per client, from one dashboard.",
      },
    ],
    keywords: [
      "white label elevenlabs",
      "can you white label elevenlabs",
      "elevenlabs white label agent",
      "resell elevenlabs ai agents",
      "white label ai voice agents",
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
        question: "Can I white label ElevenLabs AI voice agents?",
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
          `You pay a wholesale monthly rate to Fusion Calling (${wholesalePricingSummary()}) and keep 100% of what you charge your clients. Minute rebilling lets you control margin. Your ElevenLabs API usage costs remain separate through your ElevenLabs account.`,
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
      {
        question: "How do ElevenLabs voice quality and voice cloning work under white-label?",
        answer:
          "You build the voice in your own ElevenLabs account — including custom cloned voices matched to each client's brand — and Fusion Calling ships it under your logo, domain, and pricing. Clients hear ElevenLabs' premium neural voices on every call but never see ElevenLabs branding; you keep per-client voice personas, portals, and rebilling in one dashboard.",
      },
    ],
  },
  {
    slug: "gohighlevel",
    name: "GoHighLevel",
    badge: "Built for GoHighLevel Agencies",
    title: "White Label GoHighLevel AI Voice Agents",
    description:
      "White label AI voice agents for GoHighLevel sub-accounts. Run Vapi, Retell, or ElevenLabs agents in each client account — keep 100% of revenue.",
    h1Prefix: "White-Label AI Voice Agents for",
    h1Highlight: "GoHighLevel",
    h1Suffix: "Sub-Accounts",
    crossLinkTitle: "GoHighLevel Voice AI Integration",
    blogGuide: {
      href: "/blog/gohighlevel-white-label-voice",
      label: "White-Label AI Voice for GoHighLevel Agencies",
    },
    relatedCaseStudySlugs: ["voicewave-marketing", "callflow-solutions"],
    differentiators: [],
    keywords: [
      "gohighlevel ai voice agent",
      "white label ai voice gohighlevel",
      "gohighlevel voice ai",
      "white label ai voice for agencies",
      "resell ai voice to ghl clients",
      "ghl agency voice ai white label",
      "white label ai voice agents",
    ],
    features: [
      {
        title: "Drop into client sub-accounts",
        description:
          "Launch AI voice agents for each GoHighLevel client under your own logo, domain, and pricing.",
      },
      {
        title: "Import Vapi, Retell & ElevenLabs",
        description:
          "Bring your existing agent configurations and API keys — we layer white-label branding on top.",
      },
      {
        title: "100% white-label",
        description:
          "Your clients see only your brand. Fusion Calling stays completely invisible.",
      },
      {
        title: "Rebilling & margin control",
        description:
          "Set your own client pricing and keep 100% of what you charge, with minute rebilling.",
      },
      {
        title: "24/7 call handling",
        description:
          "Answer, qualify, and book across every client — no missed calls, no hires.",
      },
      {
        title: "Centralized multi-tenant dashboard",
        description:
          "Manage every client's agents, minutes, and billing from one partner dashboard.",
      },
    ],
    faqs: [
      {
        question:
          "Can I white label AI voice agents inside GoHighLevel?",
        answer:
          "Yes. Fusion Calling is built to drop into your GoHighLevel stack so you can launch AI voice agents for each client sub-account under your own brand. Your clients interact only with your logo, domain, and pricing — Fusion Calling stays invisible.",
      },
      {
        question: "Do I need a separate login for every client?",
        answer:
          "No. The white-label partner dashboard gives you centralized, multi-tenant control. Onboard new GoHighLevel clients in minutes, manage their agents, minutes, and billing from one place, and scale to unlimited sub-accounts on the Scale plan.",
      },
      {
        question: "Can I import my existing Vapi, Retell, or ElevenLabs agents?",
        answer:
          "Yes. Fusion Calling is multi-provider: bring your existing Vapi, Retell AI, and ElevenLabs agent configurations and API keys, and we layer white-label branding, client portals, lead management, and rebilling on top — so you resell them under one branded dashboard.",
      },
      {
        question: "How does billing work for my GoHighLevel clients?",
        answer:
          "You set your own client pricing and keep 100% of what you charge. Plans start at $99/month for 6 sub-accounts, $299 for 20, and $499 for unlimited, with minute rebilling so you control your margin on every client.",
      },
      {
        question: "Will my clients see Fusion Calling branding?",
        answer:
          "No. The platform is 100% white-labeled — your logo, colors, domain, and email. Your GoHighLevel clients experience a fully branded AI voice product and never see Fusion Calling unless you tell them.",
      },
      {
        question: "How does the GoHighLevel voice AI integration work?",
        answer:
          "Fusion Calling links to each client sub-account via API and webhooks. Calls push contacts, notes, and outcomes back into the right GHL workspace. You can run Vapi, Retell, or ElevenLabs agents per client, all under your own brand.",
      },
      {
        question: "How much does it cost to resell voice AI to GHL sub-accounts?",
        answer:
          "Plans start at $99/month for 6 sub-accounts. You set your own client pricing and keep 100% of what you charge. Minute rebilling lets you control your margin on every client.",
      },
      {
        question: "Does this replace GoHighLevel's Missed Call Text Back?",
        answer:
          "No — it makes it rarely needed. The white-label AI voice agent answers calls in two rings, 24/7, so there is far less to text back about. When a call is genuinely missed, GoHighLevel's native Missed Call Text Back still fires in your client's brand, and the AI agent can also place a call-back that qualifies and books the lead. You can resell the whole flow inside each client sub-account.",
      },
    ],
  },
];

/**
 * JSON-LD @graph shared by the four provider pages (WebPage + Service +
 * BreadcrumbList + FAQPage). Pages pass only what genuinely varies per page:
 * the audience line and any page-local FAQs.
 */
export function buildProviderGraph(
  provider: WhiteLabelProvider,
  {
    audience,
    extraFaqs = [],
  }: { audience: string; extraFaqs?: { question: string; answer: string }[] }
) {
  const base = `/whitelabel/${provider.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: base,
        name: providerH1(provider),
        description: provider.description,
        breadcrumbId: `${SITE_URL}${base}#breadcrumb`,
        speakable: ["h1", "h2", "p"],
      }),
      {
        "@type": "Service",
        "@id": `${SITE_URL}${base}#service`,
        name: providerH1(provider),
        description: provider.description,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        audience: { "@type": "Audience", audienceType: audience },
        // Real wholesale prices from lib/product-facts — the same tiers the
        // on-page <Pricing /> table renders, so schema and visible pricing
        // can never disagree.
        offers: WHOLESALE_PLANS.map((plan) =>
          offerSchema({
            name: `${plan.name} white-label plan`,
            price: plan.price,
            path: base,
          })
        ),
      },
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "White-label Partner Program", path: "/whitelabel" },
          { name: provider.name, path: base },
        ],
        `${SITE_URL}${base}#breadcrumb`
      ),
      faqSchema([...provider.faqs, ...extraFaqs], `${SITE_URL}${base}#faqpage`),
    ],
  };
}
