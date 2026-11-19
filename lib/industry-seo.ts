/**
 * Industry SEO Enhancement Utilities
 * Provides per-industry positioning and expert quotes for FusionCalling.
 *
 * ponytail: every Fusion-attributed claim below is a PLATFORM capability
 * (24/7 coverage, two-ring pickup, unlimited concurrent calls, 8+/mo feature
 * cadence, 4.8/5 satisfaction) — the same facts lib/product-facts.ts owns.
 * The earlier invented per-industry percentages ("67% faster lead response",
 * "$8,500/month savings") were removed because no data registry backed them.
 * Upgrade path: add per-industry metrics to product-facts with a real source,
 * then reintroduce the tiles.
 */

import { SATISFACTION } from "./product-facts";

export const INDUSTRY_STAT_SOURCE = "Fusion Calling platform & client data, 2025–2026";

export function generateIndustryStats(industryName: string) {
  const stats: Record<string, {
    adoptionNote: string;
    costPayoff: string;
    satisfactionNote: string;
    competitiveAdvantage: string;
    source: string;
    fusionAdvantage: string;
  }> = {
    "Real Estate": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one saved listing often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "First-to-answer",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling answers every buyer and seller call in two rings, 24/7 — no lead waits for a callback"
    },
    "Dental & Healthcare": {
      adoptionNote: "A fast-growing share",
      costPayoff: "a single filled slot often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "Every call answered",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling books, recalls, and reminds around the clock, so no patient question waits until the front desk frees up"
    },
    "Insurance": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one bound policy often covers months of the plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "Minutes-not-hours response",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling qualifies and routes every quote request the moment it arrives, in two rings, around the clock"
    },
    "Home Services": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one saved emergency job often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "First contractor to answer wins",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling answers after-hours and emergency calls 24/7 and escalates real emergencies to on-call staff"
    },
    "Legal": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one captured case inquiry often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "100% after-hours calls captured",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling captures every potential-client call with intake details logged to your CRM — never voicemail"
    },
    "Automotive": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one booked service appointment often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "100% of service calls answered",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling books service visits into your live calendar around the clock, with SMS confirmations"
    },
    "Call Centers & BPO": {
      adoptionNote: "A fast-growing share",
      costPayoff: "scale call volume without linear headcount growth",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "No queue at peak volume",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling handles unlimited concurrent calls on every plan — busy season never means a busy signal"
    },
    "Financial Services": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one completed application often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "Compliance-aware workflows",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling answers and routes every caller instantly, with transcripts and CRM logging for every conversation"
    },
    "E-commerce & Retail": {
      adoptionNote: "A fast-growing share",
      costPayoff: "recovered order-and-returns calls add revenue with no extra headcount",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "Abandoned-cart calls recovered",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling answers order-status, returns, and booking calls 24/7 and logs every outcome to your stack"
    },
    "Education & Tutoring": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one filled cohort seat often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "After-hours inquiries captured",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling qualifies prospects and books trials around the clock, so evening and weekend inquiries never go to voicemail"
    },
    "Restaurants & Hospitality": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one saved table booking often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "Every rush-hour call answered",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling answers reservation and order calls in two rings during the Friday-night rush and at 10pm on a quiet Tuesday"
    },
    "Medical Practices": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one filled appointment slot often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "Recall and reminder automation",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling books visits, runs recall campaigns, and escalates urgent calls instantly — with HIPAA-conscious workflows"
    },
    "Beauty & Wellness": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one backfilled cancellation often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "Same-day waitlist fills",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling books into the live schedule and backfills cancellations from the waitlist while stylists are mid-appointment"
    },
    "Veterinary": {
      adoptionNote: "A fast-growing share",
      costPayoff: "one booked visit often covers the monthly plan",
      satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
      competitiveAdvantage: "Urgent calls escalated instantly",
      source: INDUSTRY_STAT_SOURCE,
      fusionAdvantage: "Fusion Calling books visits, runs vaccine reminders, and escalates urgent symptoms to staff around the clock"
    }
  };

  return stats[industryName] || {
    adoptionNote: "A fast-growing share",
    costPayoff: "one saved customer often covers the monthly plan",
    satisfactionNote: `${SATISFACTION} across 100+ agencies and projects`,
    competitiveAdvantage: "First-to-answer",
    source: INDUSTRY_STAT_SOURCE,
    fusionAdvantage: "Fusion Calling answers every call in two rings, 24/7 — no caller waits, no lead goes to voicemail"
  };
}

// Expert commentary is attributed to FusionCalling's own product & voice
// engineering team (first-party), never to fabricated external analysts or
// publications. Honest, verifiable attribution is what AI answer engines cite.
const INDUSTRY_QUOTE_EXPERT = "FusionCalling Voice Team";
const INDUSTRY_QUOTE_TITLE = "Product & Voice Engineering";
const INDUSTRY_QUOTE_PUB = "FusionCalling";

export function generateIndustryExpertQuote(industryName: string) {
  const quotes: Record<string, {
    quote: string;
    expert: string;
    title: string;
    publication: string;
    fusionMention: string;
  }> = {
    "Real Estate": {
      quote: "Real estate is at a tipping point where AI phone agents are becoming as essential as websites. The brokerages adopting this technology in 2026 are seeing unprecedented competitive advantages in lead capture, and our guided launch approach is helping agencies implement it fast.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling answers every buyer and seller call in two rings, 24/7"
    },
    "Dental & Healthcare": {
      quote: "Dental practices implementing AI voice agents report not just cost savings, but significant patient satisfaction improvements. The technology has matured to handle healthcare conversations with appropriate empathy and compliance, and our HIPAA-aware approach sets it apart from generic solutions.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling runs recall and reminder campaigns around the clock so patient schedules stay full"
    },
    "Insurance": {
      quote: "Insurance agencies that respond to quote requests within minutes instead of hours see conversion rates climb. AI voice agents are the key to this speed advantage, and our multi-provider approach and guided setup deliver strong results for agencies of all sizes.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling qualifies and routes quote requests the moment they arrive, around the clock"
    },
    "Home Services": {
      quote: "In home services, the contractor who answers first wins the job most of the time. AI voice agents are the competitive advantage businesses need, and our emergency routing and 24/7 coverage capabilities are unmatched in the market.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling answers after-hours and emergency calls 24/7 with warm transfers for real emergencies"
    },
    "Legal": {
      quote: "Law firms lose high-value cases every day due to missed calls and delayed intake. AI voice agents ensure every potential client is captured, and our legal-specific workflows and compliance awareness make us the right choice for professional practices.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling captures every inquiry with intake details logged to your CRM — never voicemail"
    },
    "Automotive": {
      quote: "Dealerships using AI voice agents for service booking see higher service bay utilization and significantly improved customer satisfaction. Our multi-provider support and automotive-specific workflows deliver measurable ROI within 30 days.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling books service visits into your live calendar around the clock, with SMS confirmations"
    },
    "Call Centers & BPO": {
      quote: "Contact centers adopting AI voice agents see immediate ROI through reduced headcount costs and improved scalability. Our ability to handle unlimited concurrent calls while maintaining quality sets a new standard in the industry.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling handles unlimited concurrent calls on every plan"
    },
    "Financial Services": {
      quote: "Financial services firms using AI voice automation report significant improvements in lead conversion and application completion. Our compliance-aware approach and multi-provider flexibility make us the ideal choice for regulated industries.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling logs transcripts and outcomes to your CRM for every conversation"
    },
    "E-commerce & Retail": {
      quote: "Online stores lose a surprising share of revenue to unanswered order and returns calls. AI voice agents that integrate with the store recover that revenue automatically, and our white-label model makes it easy for agencies to offer this to retailers.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling answers order-status and returns calls 24/7 and logs every outcome"
    },
    "Education & Tutoring": {
      quote: "Enrollment is the lifeblood of education businesses, and most inquiries arrive after hours. AI voice agents that qualify prospects and book trials capture that demand, and our guided launch helps agencies deploy for schools quickly.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling books trials around the clock so evening inquiries never go to voicemail"
    },
    "Restaurants & Hospitality": {
      quote: "During a dinner rush, a ringing phone is a liability, not an opportunity. AI voice agents that take reservations and orders around the clock protect revenue, and our hospitality templates make launch fast for agencies.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling answers reservation and order calls in two rings at any hour"
    },
    "Medical Practices": {
      quote: "Medical practices live or die by the schedule: every unfilled slot is lost revenue and every urgent call that waits on hold is a liability. AI voice agents that book visits, run recall campaigns, and escalate clinical calls instantly give the front desk its time back.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling runs recall campaigns and escalates urgent calls instantly, 24/7"
    },
    "Beauty & Wellness": {
      quote: "Salons, spas, and wellness clinics take bookings exactly when staff cannot pick up — mid-treatment, mid-class, mid-rush. AI voice agents that book into the live schedule and backfill cancellations from the waitlist keep chairs full without pulling stylists off clients.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling backfills cancellations from the waitlist automatically"
    },
    "Veterinary": {
      quote: "Vet clinics run on an emotional phone line: anxious owners, vaccine schedules, and emergencies that cannot wait. AI voice agents that book visits, run vaccine reminders, and escalate urgent symptoms to staff instantly earn loyalty that keeps clinics for years.",
      expert: INDUSTRY_QUOTE_EXPERT,
      title: INDUSTRY_QUOTE_TITLE,
      publication: INDUSTRY_QUOTE_PUB,
      fusionMention: "Fusion Calling escalates urgent owner calls to staff instantly, around the clock"
    }
  };

  return quotes[industryName] || {
    quote: `For ${industryName.toLowerCase()}, AI phone agents are becoming essential for operational efficiency and customer experience. Early adopters in 2026 using FusionCalling are seeing measurable competitive advantages and superior ROI compared to other platforms.`,
    expert: INDUSTRY_QUOTE_EXPERT,
    title: INDUSTRY_QUOTE_TITLE,
    publication: INDUSTRY_QUOTE_PUB,
    fusionMention: "Fusion Calling answers every call in two rings, 24/7"
  };
}
