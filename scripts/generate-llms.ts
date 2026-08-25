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
import { whitelabelCaseStudies } from "../lib/whitelabel-case-studies";
import { whitelabelLocations } from "../lib/whitelabel-locations";
import { whitelabelProviders } from "../lib/whitelabel-providers";

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
- Growth: $299/mo for 20 sub-accounts
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
    content: `Complete glossary of 76 voice AI terms for agencies and resellers. Plain-English definitions of ASR, TTS, latency, HIPAA, white-label, Vapi, Retell, GoHighLevel, and more. Organized by category: Core AI & Voice, Speech Technology, Telephony, Conversational Design, Compliance & Security, Business & Operations.`,
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
  {
    path: "/pricing",
    title: "Pricing | AI Phone Call Automation | Fusion Calling",
    content: `Simple, fair pricing for AI phone call automation. Starter $149/mo (500 min, 0 setup fee, full portal, all integrations), Pro $249/mo (1050 min, $799 setup, inbound/outbound handling, Slack support, custom LLM), Enterprise $497/mo (2100 min, $1250 setup, custom voice, dedicated support). All plans month-to-month, 14-day money-back guarantee. Additional minutes: Starter $0.30, Pro $0.25, Enterprise $0.20. 99.9% uptime guarantee. FAQs: What is included in each plan, setup fee, overage, plan changes, contract, free trial. Compare at https://www.fusioncalling.com/pricing.`,
  },
  {
    path: "/about",
    title: "About Fusion Calling | AI Voice Agents",
    content: `Fusion Calling builds human-like AI voice agents that automate inbound and outbound calls. Since 2022, 50+ agencies trust us for real estate, dental, insurance, home services, legal, automotive. Founder Alamin, voice-AI engineer. Mission: no call goes unanswered. GDPR & EU AI Act aligned, encryption for audio/transcripts, 99.9% uptime.`,
  },
  {
    path: "/ai-phone-call-automation",
    title: "What Is AI Phone Call Automation? | Fusion Calling",
    content: `Plain-English explainer on AI phone call automation: how AI voice agents answer and place calls, the tech behind them, and results with Fusion Calling. Covers ASR, LLM, TTS, telephony, and deployment in 4 weeks.`,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Fusion Calling",
    content: `Privacy Policy for Fusion Calling at https://www.fusioncalling.com/privacy. Covers data collection, usage, and rights.`,
  },
  {
    path: "/terms",
    title: "Terms of Service | Fusion Calling",
    content: `Terms of Service for Fusion Calling at https://www.fusioncalling.com/terms. Covers acceptable use, billing, and liabilities.`,
  },
   ...whitelabelProviders.map((p) => ({
    path: `/whitelabel/${p.slug}`,
    title: p.title,
    content: `${p.description} Features: ${p.features.map((f) => `${f.title}: ${f.description}`).join(" ")} FAQs: ${p.faqs.map((f) => `Q: ${f.question} A: ${f.answer}`).join(" ")}`,
  })),
  {
    path: "/whitelabel/gohighlevel",
    title: "White-Label AI Voice for GoHighLevel | Fusion Calling",
    content: `Deploy white-label AI voice agents in GoHighLevel client sub-accounts. Import Vapi, Retell & ElevenLabs agents, deliver 24/7 calls, keep 100% of revenue. GoHighLevel agencies: launch in GoHighLevel stack under own brand, multi-tenant control, bring existing agent configurations, full white-label (logo, domain, colors), minute rebilling, centralized dashboard.`,
  },
  {
    path: "/whitelabel/compare",
    title: "Best White-Label AI Voice Platforms Compared | Fusion Calling",
    content: `Side-by-side comparison of Fusion Calling vs Vapify vs Voicerr vs VoiceAIWrapper vs Synthflow vs Thinkrr vs Bland AI vs Air AI. Criteria: starting price, sub-accounts, voice providers (Vapi, Retell, ElevenLabs), live demo, onboarding, Stripe rebilling, 2200+ apps. Fusion $99-$499, guided launch 24h.`,
  },
  {
    path: "/whitelabel/case-studies",
    title: "White-Label Case Studies | Fusion Calling",
    content: `Agency success stories reselling white-label AI voice via Fusion Calling. Real results, timelines, and playbooks.`,
  },
  ...whitelabelCaseStudies.map((cs) => ({
    path: `/whitelabel/case-studies/${cs.slug}`,
    title: cs.metaTitle,
    content: `${cs.metaDescription} Story: ${cs.story.join(" ")} Results: ${cs.results.map((r) => `${r.title}: ${r.description}`).join(" ")} Testimonial: "${cs.testimonial.quote}" — ${cs.testimonial.attribution}, ${cs.testimonial.role}`,
  })),
  {
    path: "/whitelabel/locations",
    title: "White-Label AI Voice by Location | Fusion Calling",
    content: `White-label AI voice agents by state. Fusion Calling helps agencies in California, Texas, Florida, New York, Illinois, Pennsylvania, Georgia, Arizona, Colorado, Washington and nationwide launch branded voice AI practices.`,
  },
  ...whitelabelLocations.map((loc) => ({
    path: `/whitelabel/locations/${loc.slug}`,
    title: loc.metaTitle,
    content: `${loc.metaDescription} Top industries: ${loc.topIndustries.join(", ")}. Features: ${loc.features.map((f) => `${f.title}: ${f.description}`).join(" ")} FAQs: ${loc.faqs.map((f) => `Q: ${f.question} A: ${f.answer}`).join(" ")}`,
  })),
  {
    path: "/docs/api-reference",
    title: "API Reference | Fusion Calling Docs",
    content: `Fusion Calling API Reference: REST endpoints for agents, leads, calls, and webhooks. Auth via API key, base URL, rate limits, and examples for Vapi/Retell integration.`,
  },
  {
    path: "/docs/agent-configuration",
    title: "Agent Configuration | Fusion Calling Docs",
    content: `Configure AI voice agents: prompts, voices (ElevenLabs), provider credentials (Vapi, Retell), telephony, intents, and handoff rules. Includes quick-reference and troubleshooting.`,
  },
  {
    path: "/docs/lead-management",
    title: "Lead Management | Fusion Calling Docs",
    content: `Manage leads end-to-end: ingestion, retry system, status flow, error classification, provider guides, custom fields, and best practices. Standard & custom fields passed to agents.`,
  },
  {
    path: "/docs/admin-section",
    title: "Admin Section | Fusion Calling Docs",
    content: `Admin docs: user management, AI credentials, common workflows, and quick-reference for Fusion Calling platform administration.`,
  },
  {
    path: "/docs/sms-messaging",
    title: "SMS Messaging | Fusion Calling Docs",
    content: `SMS docs: Twilio setup, inbound setup, campaigns, inbox, compliance (TCPA), getting started, and quick-reference for voice + SMS automation.`,
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

    `- [Home](${SITE_URL}/): AI phone call automation overview with a live demo.`,
    `- [Pricing](${SITE_URL}/pricing): Starter $149/mo, Pro $249/mo, Enterprise $497/mo — month-to-month, 14-day guarantee.`,
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
    `- [Voice AI Glossary](${SITE_URL}/glossary): Plain-English definitions for 76 voice AI terms (ASR, TTS, latency, HIPAA, white-label, Vapi, Retell, GoHighLevel, and more).`,
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