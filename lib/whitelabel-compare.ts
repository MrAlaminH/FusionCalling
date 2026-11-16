import { OFFER, PROVIDERS, WHOLESALE_PLANS } from "@/lib/product-facts";

/**
 * Hand-authored data for the /whitelabel/compare table — every cell is written
 * explicitly instead of fuzzy-matched out of lib/comparisons.ts, so a row can
 * never pick up the wrong competitor value. Researched 2026-11-16; cells we
 * could not verify from public sources say "Not published" (never a bare "—",
 * which would imply a competitor lacks the feature).
 */

export type WhitelabelCompareCells = {
  startingPrice: string;
  subAccounts: string;
  branding: string;
  providers: string;
  billing: string;
  byoKeys: string;
  trial: string;
};

export type WhitelabelComparePlatform = {
  name: string;
  emoji: string;
  blurb: string;
  /** Internal comparison page — omitted when no page exists (card renders without a link). */
  href?: string;
  /** Highlights the column in the comparison table. Fusion Calling only. */
  isFusion?: boolean;
  cells: WhitelabelCompareCells;
};

const [starter, growth, scale] = WHOLESALE_PLANS;

export const whitelabelPlatforms: WhitelabelComparePlatform[] = [
  {
    name: "Fusion Calling",
    emoji: "🏆",
    blurb: `Multi-provider white-label (${PROVIDERS.list}) with ${starter.subAccounts} sub-accounts from $${starter.price}/mo, Stripe rebilling, keep 100% of revenue, and a 24-hour guided launch.`,
    href: "/whitelabel",
    isFusion: true,
    cells: {
      startingPrice: `$${starter.price}/mo (${starter.name})`,
      subAccounts: `${starter.subAccounts} included ($${growth.price}/mo → ${growth.subAccounts}, $${scale.price}/mo → ${scale.subAccounts})`,
      branding: "Full — branded portal + custom domain",
      providers: PROVIDERS.plus,
      billing: "Stripe rebilling — keep 100% of revenue",
      byoKeys: "Yes — BYO API keys",
      trial: `${OFFER.trial} free trial`,
    },
  },
  // Owner-directed display order (2026-11-16): platforms Fusion demonstrably
  // beats lead the table so the highlighted column reads strongest, and the
  // strongest rival (VoiceAIWrapper — deep BYOK, Stripe rebilling) is
  // deliberately placed LAST. Not sorted by closeness or price — do not
  // reorder without the owner's say-so.
  {
    name: "ChatDash",
    emoji: "💬",
    blurb:
      "GoHighLevel-native platform with outcome-based billing — charge clients per booked appointment or qualified lead.",
    href: "/alternative/chatdash",
    cells: {
      startingPrice: "$120/mo (3 clients)",
      subAccounts: "3 clients (+$15/extra); 10 on $600/mo Ultimate",
      branding: "Yes — white-label for agencies",
      providers: "Retell, Vapi, ElevenLabs",
      billing: "Native Stripe + outcome-based billing",
      byoKeys: "Yes — bring own Retell/Vapi/ElevenLabs accounts",
      trial: "7-day trial, no card",
    },
  },
  {
    name: "Trillet",
    emoji: "🎧",
    blurb:
      "Australia-based self-serve white-label platform with unlimited agents; Studio includes 3 clients and 1,000 minutes, Agency unlocks unlimited sub-accounts.",
    cells: {
      startingPrice: "$99/mo (Studio)",
      subAccounts: "3 clients on Studio; unlimited on $299/mo Agency",
      branding: "Yes — self-serve white-label",
      providers: "Multi-provider catalog (Rime, ElevenLabs, Cartesia, OpenAI, Hume)",
      billing: "$0.12/min + telephony after included minutes",
      byoKeys: "No — BYO phone numbers only",
      trial: "7-day trial (card required)",
    },
  },
  {
    name: "Stammer AI",
    emoji: "🧩",
    blurb:
      "White-label chat + voice agents on a proprietary engine; wallet-based client billing and SaaS-mode reselling on the Pro plan.",
    cells: {
      startingPrice: "From $49/mo (Standard, unbranded); $99/mo Pro white-label",
      subAccounts:
        "5 chat + 5 voice agents (~$10/extra agent) on Pro; higher tiers now custom (Enterprise)",
      branding: "Yes — white-label on Pro and above",
      providers: "Proprietary chat + voice agents",
      billing: "Client wallet rebilling + Stripe subscriptions — keep 100% markup",
      byoKeys: "Yes — LLM API keys (chat only)",
      trial: "7–14-day trial",
    },
  },
  {
    name: "Thinkrr",
    emoji: "🧠",
    blurb:
      "Deepest GoHighLevel-native sync in the category, with bundled Twilio telephony across every client sub-account.",
    href: "/alternative/thinkrr",
    cells: {
      startingPrice: "$39/mo (Kickstart)",
      subAccounts: "1 at entry; 3 on $199/mo Lite; unlimited on $499/mo",
      branding: "Yes — white-label add-on for GHL agencies",
      providers: "Proprietary + Twilio telephony",
      billing: "Resell at your own pricing (Stripe rebilling not documented)",
      byoKeys: "Not documented",
      trial: "7-day free trial",
    },
  },
  {
    name: "Vapify",
    emoji: "⚡",
    blurb:
      "Lowest-cost white-label wrapper for Vapi and Retell (officially listed in Vapi's docs). Best for solo operators running clients on a single provider.",
    href: "/alternative/vapify",
    cells: {
      startingPrice: "From ~$29/mo (1 sub-account)",
      subAccounts:
        "1 at entry; 5 on $69/mo Business; 10 on $149/mo Scale; unlimited via $399/mo Partner (sales call)",
      branding: "Yes — white-label wrapper for Vapi",
      providers: "Vapi + Retell",
      billing: "Stripe direct to your account — no platform fee",
      byoKeys: "Yes — your own Vapi/Retell keys",
      trial: "14-day trial",
    },
  },
  {
    name: "Voicerr AI",
    emoji: "📞",
    blurb:
      "Budget bundle wrapping Vapi and Retell with a website builder, lead finder, workflows, and multi-currency client billing.",
    href: "/alternative/voicerr",
    cells: {
      startingPrice: "$28/mo Pro (annual billing)",
      subAccounts: "Unlimited clients and assistants",
      branding: "Yes — white-label websites and portal",
      providers: "Vapi + Retell (ElevenLabs announced)",
      billing: "Stripe automation, multi-currency",
      byoKeys: "Vapi keys — yes; Retell not documented",
      trial: "Free trial (duration unstated)",
    },
  },
  {
    name: "Synthflow",
    emoji: "🌊",
    blurb:
      "Polished no-code builder on a single proprietary engine — now sold as annual enterprise agreements scoped to call volume, with client workspaces under your brand (no published per-minute rate or self-serve trial).",
    href: "/alternative/synthflow",
    cells: {
      startingPrice: "Enterprise-only — annual contract scoped to call volume",
      subAccounts: "Client workspaces under your brand (enterprise contract)",
      branding: "Yes — enterprise white-label via custom contract",
      providers: "Proprietary single engine",
      billing: "Annual enterprise agreement",
      byoKeys: "Yes — ElevenLabs voices + OpenAI LLM (gated BYOK)",
      trial: "None — no free plan or trial",
    },
  },
  {
    name: "Autocalls",
    emoji: "☎️",
    blurb:
      "Usage-based voice platform with an unlimited sub-account White Label tier ($419/mo, 3,500 min included, ~$0.09/min overage).",
    cells: {
      startingPrice:
        "$249/mo Agency (no client-facing branding); $419/mo Agency White Label",
      subAccounts: "Unlimited sub-accounts on the $419/mo White Label tier",
      branding: "White-label at $419/mo tier; $249/mo tier is unbranded",
      providers: "Usage-based proprietary engine",
      billing: "Usage-based (~$0.09/min overage)",
      byoKeys: "No — all-in per-minute rate",
      trial: "None — free live demo call",
    },
  },
  {
    name: "VoiceAIWrapper",
    emoji: "🎚️",
    blurb:
      "Self-serve resell layer with BYO keys for Vapi, Retell, and ElevenLabs and Stripe rebilling on your own account. Advertises SOC 2 with HIPAA documentation (verify current tier before committing).",
    href: "/alternative/voiceaiwrapper",
    cells: {
      startingPrice: "Free PAYG plan; paid from $79/mo (Growth)",
      subAccounts:
        "1 client on PAYG (+$20/mo per extra); 3 on $79/mo Growth (+$15/extra); 20 on $499/mo Scale (+$12/extra)",
      branding: "Yes — white-label client portals",
      providers: "Native engine + BYOK: Vapi, Retell, ElevenLabs",
      billing: "Stripe rebilling (your account) + external billing API (Scale)",
      byoKeys: "Yes — Vapi, Retell, ElevenLabs",
      trial: "7-day trial (card required) + free PAYG plan",
    },
  },
];

export const whitelabelCompareRows: {
  key: keyof WhitelabelCompareCells;
  label: string;
}[] = [
  { key: "startingPrice", label: "Starting Monthly Cost" },
  { key: "subAccounts", label: "Sub-Accounts Included" },
  { key: "branding", label: "White-Label Branding" },
  { key: "providers", label: "Voice Providers Supported" },
  { key: "billing", label: "Client Billing / Rebilling" },
  { key: "byoKeys", label: "BYO API Keys" },
  { key: "trial", label: "Free Trial" },
];
