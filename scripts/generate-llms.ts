/**
 * Generate llms.txt and llms-full.txt at build time
 * llms.txt = index/summary (for discovery)
 * llms-full.txt = full content (for ingestion)
 * Run with: npx tsx scripts/generate-llms.ts
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE_URL } from "../lib/site-url";
import { industries } from "../lib/industries";
import { comparisons } from "../lib/comparisons";
import { glossaryTerms } from "../lib/glossary";
import { blogPosts } from "../lib/blog-posts";

const PAGES: { path: string; title: string; content: string }[] = [
  {
    path: "/",
    title: "AI Phone Call Automation & AI Receptionist | Fusion Calling",
    content: `Fusion Calling provides AI phone call automation for businesses. Our AI voice agents handle inbound and outbound calls 24/7: book appointments, qualify leads, and automate customer interactions with voice AI.

Key features:
- AI receptionist answers every call instantly
- Lead qualification and appointment booking
- 24/7 coverage without additional headcount
- Multi-provider support (Vapi, Retell, ElevenLabs)
- White-label platform for agencies
- CRM integrations (HubSpot, GoHighLevel, 2200+ apps)
- SMS automation and calendar booking

Pricing: Starter $149/mo (500 min), Pro $249/mo (1050 min), Enterprise $497/mo (2100 min). All plans include custom voice training, dedicated support, and white-label capabilities.`,
  },
  {
    path: "/whitelabel",
    title: "White-Label Voice AI Partner Program | Fusion Calling",
    content: `Fusion Calling White-Label Partner Program: Resell AI voice agents under your own brand. Full brand control, custom domain (app.youragency.com), white-label dashboard, and API access.

Partner tiers:
- Starter: $99/mo for 6 sub-accounts
- Growth: $299/mo for 25 sub-accounts  
- Scale: $499/mo for unlimited sub-accounts

Benefits:
- Keep 100% of what you charge clients
- Launch branded agency in 24 hours with guided onboarding
- 30 days of ongoing support
- Multi-provider flexibility (Vapi, Retell, ElevenLabs)
- Stripe rebilling for client billing
- 2,200+ app integrations via Zapier

Revenue calculator available at /calculator. Book a discovery call at cal.com/mralamin/discovery-call.`,
  },
  {
    path: "/industries",
    title: "AI Voice by Industry | Fusion Calling",
    content: `Explore how white-label AI voice agents serve every industry: real estate, dental, insurance, home services, legal, automotive, call centers, finance, e-commerce, education, and restaurants.

Each industry page includes use cases, ROI statistics, agency angle, and why Fusion Calling is the best platform for that vertical. Agencies can deploy pre-built templates in 7 days.`,
  },
  ...industries.map((ind) => ({
    path: `/industries/${ind.slug}`,
    title: ind.metaTitle,
    content: `${ind.intro.join(" ")} ${ind.useCases.map((u) => `${u.title}: ${u.description}`).join(" ")} ${ind.agencyAngle} ${ind.agencyPoints.join(" ")} Stats: ${ind.stats.map((s) => `${s.value} ${s.label}`).join(", ")} FAQs: ${ind.faqs.map((f) => `Q: ${f.question} A: ${f.answer}`).join(" ")}`,
  })),
  {
    path: "/alternative",
    title: "White-Label Voice AI Comparisons | Fusion Calling",
    content: `Side-by-side comparisons of top white-label voice AI platforms for agencies. Compare Fusion Calling vs ChatDash, Vapify, Voicerr, VoiceAIWrapper, Synthflow, Thinkrr, Bland AI, Air AI.

Comparison criteria: starting price, sub-accounts included, voice providers supported, live demo availability, onboarding model, GoHighLevel integration, client billing, top-tier pricing.`,
  },
  ...comparisons.map((c) => ({
    path: `/alternative/${c.slug}`,
    title: c.metaTitle,
    content: `${c.quickAnswer} ${c.intro.join(" ")} ${c.fusionCallingOverview.join(" ")} ${c.competitorBestFor} ${c.comparisonRows.map((r) => `${r.label}: ${c.competitorName} ${r.competitor} vs Fusion ${r.fusion}`).join(" ")} ${c.whyChooseFusionCalling.points.map((p) => `${p.title}: ${p.description}`).join(" ")} ${c.expertQuote.text} FAQs: ${c.faqs.map((f) => `Q: ${f.question} A: ${f.answer}`).join(" ")}`,
  })),
  {
    path: "/glossary",
    title: "Voice AI Glossary | Fusion Calling",
    content: `Complete glossary of 74+ voice AI terms for agencies and resellers. Plain-English definitions of ASR, TTS, latency, HIPAA, white-label, Vapi, Retell, GoHighLevel, and more. Organized by category: Core AI & Voice, Speech Technology, Telephony, Conversational Design, Compliance & Security, Business & Operations.`,
  },
  ...glossaryTerms.map((t) => ({
    path: `/glossary/${t.term.toLowerCase().replace(/&/g, "and").replace(/[()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`,
    title: `${t.term} | AI Glossary | Fusion Calling`,
    content: `${t.definition} ${t.whyItMatters} Related: ${t.related?.join(", ") || ""}`,
  })),
  {
    path: "/blog",
    title: "Blog | White-Label Voice AI Insights",
    content: `Expert insights on white-label AI voice platforms, agency growth strategies, and voice automation trends. Learn how to build profitable AI voice businesses.`,
  },
  ...blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    title: p.title,
    content: `${p.description} ${p.content || ""}`,
  })),
  {
    path: "/calculator",
    title: "Voice AI Agency Revenue Calculator | Fusion Calling",
    content: `Estimate your recurring revenue as a white-label voice AI agency. Input: number of clients, your monthly price per client, Fusion Calling wholesale cost. Output: monthly revenue, annual revenue, profit margin.`,
  },
  {
    path: "/docs",
    title: "Documentation | Fusion Calling",
    content: `Developer docs for Fusion Calling: admin section, agent configuration, lead management, SMS messaging, API reference. Configure agents using existing Vapi or Retell API keys. Standard and custom lead fields passed to agents automatically.`,
  },
  {
    path: "/team",
    title: "Our Team | Fusion Calling",
    content: `Meet the team behind Fusion Calling — founders, voice AI engineers, and agency growth experts building the future of white-label voice automation. 500+ agencies launched.`,
  },
];

function generateLLMS(): string {
  const lines = [
    `# Fusion Calling`,
    ``,
    `> Fusion Calling is a white-label AI voice automation platform. It deploys human-like AI phone agents that handle inbound and outbound calls — appointment scheduling, lead qualification, FAQ handling, voicemails, and 24/7 receptionist coverage — and lets agencies resell the entire platform under their own brand.`,
    ``,
    `Fusion Calling serves two audiences:`,
    ``,
    `1. **End businesses** — dental practices, real estate, insurance, and service companies that want AI agents answering and placing their calls.`,
    `2. **Agencies and resellers (primary focus)** — who white-label the platform, host it on their own domain, set their own pricing, and keep the margin between their client price and Fusion Calling's wholesale rate.`,
    ``,
    `The platform integrates with leading voice-AI providers. Agencies can bring existing agent configurations from **Vapi**, **Retell AI**, and the **GoHighLevel** ecosystem into Fusion Calling and resell them through a fully branded dashboard — no need to rebuild agents from scratch.`,
    ``,
    `## White-Label Partner Program`,
    ``,
    `- [Partner Program](${SITE_URL}/whitelabel): Resell AI voice agents under your own agency brand. Full brand control, custom domain (e.g. app.youragency.com), white-label dashboard, and API access.`,
    `- [Partner Pricing & Tiers](${SITE_URL}/whitelabel#pricing): Starter, Growth, and Scale partner tiers from $99 to $499/month based on the number of sub-accounts. Partners keep 100% of what they charge clients.`,
    `- [Revenue Calculator](${SITE_URL}/calculator): Estimate your recurring revenue based on number of clients and your per-client pricing.`,
    `- [Partner Benefits](${SITE_URL}/whitelabel#benefits): How It Works, onboarding, support levels, and earnings model.`,
    `- [Book a Demo](https://cal.com/mralamin/discovery-call): Schedule a discovery/partner call.`,
    ``,
    `## Bring Your Own Agent (Migration & Import)`,
    ``,
    `- [Vapi Comparison & Migration](${SITE_URL}/blog/vapi-white-label-platform): How agencies move from direct Vapi integration to a white-labeled, resellable platform — and what they save.`,
    `- [Retell AI Comparison & Migration](${SITE_URL}/blog/retell-ai-white-label): Migrating Retell AI agent configurations into a branded, resellable solution.`,
    `- [GoHighLevel Comparison](${SITE_URL}/blog/gohighlevel-white-label-voice): Adding white-label AI voice to a GoHighLevel-based agency stack.`,
    `- [Provider Integration Docs](${SITE_URL}/docs/lead-management): Configure agents using existing Vapi or Retell API keys and agent/assistant IDs; standard and custom lead fields are passed to the agent automatically.`,
    ``,
    `## Product`,
    ``,
    `- [Home](${SITE_URL}/): AI phone call automation overview with a live demo.`,
    `- [Pricing](${SITE_URL}/#pricing): Starter, Pro, and Enterprise plans with monthly/yearly billing.`,
    `- [Live Demo](${SITE_URL}/#show-case): Try an outbound or inbound AI call instantly.`,
    ``,
    `## Documentation`,
    ``,
    `- [Docs Home](${SITE_URL}/docs): Admin, agent configuration, lead management, SMS messaging, and API reference.`,
    `- [API Reference](${SITE_URL}/docs/api-reference)`,
    `- [Agent Configuration](${SITE_URL}/docs/agent-configuration)`,
    `- [Lead Management](${SITE_URL}/docs/lead-management)`,
    `- [SMS Messaging](${SITE_URL}/docs/sms-messaging)`,
    ``,
    `## Glossary & Comparisons (define and compare terms, cite-friendly)`,
    ``,
    `- [Voice AI Glossary](${SITE_URL}/glossary): Plain-English definitions for ~70 voice AI terms (ASR, TTS, latency, HIPAA, white-label, Vapi, Retell, GoHighLevel, and more).`,
    `- [White-Label Voice AI Comparisons](${SITE_URL}/alternative): Side-by-side comparisons of Fusion Calling vs ChatDash, Vapify, Voicerr, VoiceAIWrapper, Synthflow, and Thinkrr.`,
    `- [AI Voice by Industry](${SITE_URL}/industries): Use cases for real estate, dental, insurance, home services, law firms, automotive, call centers, and financial services.`,
    ``,
    `## Optional`,
    ``,
    `- [Blog](${SITE_URL}/blog)`,
    `- [Privacy Policy](${SITE_URL}/privacy)`,
    `- [Terms of Service](${SITE_URL}/terms)`,
  ];

  return lines.join("\n");
}

function generateLLMSFull(): string {
  const lines = [
    `# Fusion Calling - Full Content for AI Crawlers`,
    `# Generated at build time. Contains all indexable page content.`,
    `# Source: ${SITE_URL}`,
    `# Last updated: ${new Date().toISOString().split("T")[0]}`,
    ``,
  ];

  for (const page of PAGES) {
    lines.push(`## ${page.title}`);
    lines.push(`URL: ${SITE_URL}${page.path}`);
    lines.push(``);
    lines.push(page.content);
    lines.push(``);
    lines.push(`---`);
    lines.push(``);
  }

  return lines.join("\n");
}

const llms = generateLLMS();
const llmsFull = generateLLMSFull();

const llmsPath = resolve(process.cwd(), "public", "llms.txt");
const llmsFullPath = resolve(process.cwd(), "public", "llms-full.txt");

writeFileSync(llmsPath, llms, "utf8");
writeFileSync(llmsFullPath, llmsFull, "utf8");

console.log(`✓ llms.txt written to ${llmsPath} (${llms.length} chars)`);
console.log(`✓ llms-full.txt written to ${llmsFullPath} (${llmsFull.length} chars, ${PAGES.length} pages)`);