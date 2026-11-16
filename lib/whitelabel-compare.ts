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
  // Ordered by closeness to Fusion Calling: multi-provider resell layers with
  // rebilling first, then self-serve white-label on proprietary engines, then
  // usage/enterprise tiers where white-label is gated or contractual.
  {
    name: "VoiceAIWrapper",
    emoji: "🎚️",
    blurb:
      "Mature self-serve resell layer with 5 providers, BYO keys, and Stripe rebilling. Advertises SOC 2 with a HIPAA BAA on its Pro tier (verify before committing).",
    href: "/alternative/voiceaiwrapper",
    cells: {
      startingPrice: "$29/mo (Starter)",
      subAccounts:
        "5 client accounts on Growth (+$12–15/extra); unlimited on higher tiers",
      branding: "Yes — white-label client portals",
      providers: "Vapi, Retell, ElevenLabs, Bolna, Ultravox",
      billing: "Stripe rebilling + external billing",
      byoKeys: "Yes — BYO keys (Vapi, Retell)",
      trial: "Not published",
    },
  },
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
      byoKeys: "Not published",
      trial: "Not published",
    },
  },
  {
    name: "Vapify",
    emoji: "⚡",
    blurb:
      "Lowest-cost Vapi-focused white-label wrapper (officially listed in Vapi's docs as a white-label platform for Vapi). Best for solo operators running a single Vapi client.",
    href: "/alternative/vapify",
    cells: {
      startingPrice: "From ~$29/mo (1 sub-account)",
      subAccounts:
        "1 at entry; ~$149/mo Scale; unlimited via ~$399/mo Partner plan (sales call)",
      branding: "Yes — white-label wrapper for Vapi",
      providers: "Vapi only",
      billing: "Not published",
      byoKeys: "Not published",
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
      byoKeys: "Not published",
      trial: "Not published",
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
      providers: "Not published (proprietary platform)",
      billing: "Usage-based, ~$0.09–0.12/min",
      byoKeys: "Not published",
      trial: "Not published",
    },
  },
  {
    name: "Stammer AI",
    emoji: "🧩",
    blurb:
      "White-label chat + voice agents with tiered sub-account growth: Pro, Agency, and unlimited SaaS mode.",
    cells: {
      startingPrice: "$99/mo (Pro white-label)",
      subAccounts:
        "5 chat + 5 voice agents (~$10/extra agent); 20 sub-accounts on $197/mo Agency; unlimited on $497/mo SaaS mode",
      branding: "Yes — white-label with SaaS-mode reselling",
      providers: "Proprietary chat + voice agents",
      billing: "Not published",
      byoKeys: "Not published",
      trial: "Not published",
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
      branding: "Yes — white-label for GHL agencies",
      providers: "Proprietary + Twilio telephony",
      billing: "Not published",
      byoKeys: "Not published",
      trial: "Not published",
    },
  },
  {
    name: "Synthflow",
    emoji: "🌊",
    blurb:
      "Polished no-code builder on a single proprietary engine; pay-as-you-go usage pricing with agency sub-account billing via Stripe and enterprise/custom quotes for larger deployments.",
    href: "/alternative/synthflow",
    cells: {
      startingPrice:
        "Pay-as-you-go usage (~$0.07–0.08/min advertised) + custom quotes",
      subAccounts: "Agency sub-accounts billed via Stripe (verify current terms)",
      branding: "Yes — enterprise white-label via custom contract",
      providers: "Proprietary single engine",
      billing: "Usage-based + enterprise custom quotes",
      byoKeys: "Not published",
      trial: "Enterprise pilot",
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
      byoKeys: "Not published",
      trial: "Not published",
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
