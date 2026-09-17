/**
 * Single source of truth for Fusion Calling's commercial facts — pricing,
 * launch-time claims, provider support, trial terms. Data registries
 * (comparisons, whitelabel-providers) and page templates import from here so
 * a price or claim change is one edit and rendered copy can't contradict
 * itself across pages.
 *
 * Two distinct pricing surfaces exist; keep them separate:
 * - DIRECT_PLANS: end businesses buying AI receptionist coverage.
 * - WHOLESALE_PLANS: agencies reselling the platform white-label.
 */

export type WholesalePlan = {
  name: string;
  /** Monthly USD. */
  price: number;
  /** Annual-billing monthly equivalent (what the pricing toggle shows). */
  priceYearly: number;
  subAccounts: number | "unlimited";
};

export type DirectPlan = {
  name: string;
  /** Monthly USD. */
  price: number;
  includedMinutes: number;
  /** One-time setup fee (0 = none). */
  setupFee: number;
  /** Overage rate label, e.g. "$0.30/min". */
  overageRate: string;
};

export const WHOLESALE_PLANS: WholesalePlan[] = [
  { name: "Starter", price: 99, priceYearly: 89, subAccounts: 6 },
  { name: "Growth", price: 299, priceYearly: 269, subAccounts: 20 },
  { name: "Scale", price: 499, priceYearly: 449, subAccounts: "unlimited" },
];

export const DIRECT_PLANS: DirectPlan[] = [
  { name: "Starter", price: 149, includedMinutes: 500, setupFee: 0, overageRate: "$0.30/min" },
  { name: "Pro", price: 249, includedMinutes: 1050, setupFee: 799, overageRate: "$0.25/min" },
  { name: "Enterprise", price: 497, includedMinutes: 2100, setupFee: 1250, overageRate: "$0.20/min" },
];

/**
 * Launch-time claims. These are three different facts — don't blur them:
 * guided = branded agency platform launch; approval = application review;
 * firstSale = application through first client sale (conservative end-to-end).
 */
export const LAUNCH = {
  guided: "24 hours",
  approval: "48 hours",
  firstSale: "as little as one week",
  /** Post-launch done-with-you support window. */
  supportWindow: "30 days",
} as const;

export const OFFER = {
  trial: "3 days",
  setupFee: 0,
  guarantee: "14-day money-back",
} as const;

export const PROVIDERS = {
  /** Compact "+"-joined form for tables. */
  plus: "Vapi + Retell + ElevenLabs",
  /** Prose list form. */
  list: "Vapi, Retell, and ElevenLabs",
} as const;

/** Feature-update cadence published across comparison surfaces. */
export const FEATURE_UPDATES = "8+/month";
export const SATISFACTION = "4.8/5";
export const UPTIME_SLA = "99.9%";

/** Wholesale tier summary used verbatim inside registry FAQ prose. */
export function wholesalePricingSummary(): string {
  const [starter, growth, scale] = WHOLESALE_PLANS;
  return `starting at $${starter.price}/month for ${starter.subAccounts} sub-accounts, $${growth.price} for ${growth.subAccounts}, $${scale.price} for unlimited`;
}
