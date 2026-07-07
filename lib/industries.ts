import type { Faq } from "./comparisons";

export type IndustryUseCase = {
  emoji: string;
  title: string;
  description: string;
};

export type IndustryStat = {
  value: string;
  label: string;
};

export type IndustryAdvantage = {
  emoji: string;
  title: string;
  description: string;
};

export type Industry = {
  slug: string;
  name: string;
  emoji: string;
  category: "Industry Use Case";
  readTime: string;
  datePublished: string;
  productSupported: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  h1Highlight: string;
  subtitle: string;
  intro: string[];
  useCases: IndustryUseCase[];
  stats: IndustryStat[];
  agencyAngle: string;
  agencyPoints: string[];
  whyFusion: IndustryAdvantage[];
  faqs: Faq[];
};

const sharedWhyFusion: IndustryAdvantage[] = [
  {
    emoji: "⚡",
    title: "Launch in Days, Not Months",
    description:
      "Pre-built agent templates and a guided setup get your first client live in about 7 days with a fully branded portal.",
  },
  {
    emoji: "🎚️",
    title: "Multi-Provider by Default",
    description:
      "Vapi, Retell, and ElevenLabs are supported out of the box, so you pick the best engine for each client's needs.",
  },
  {
    emoji: "💎",
    title: "Full Brand Ownership",
    description:
      "White-label everything under your own domain, logo, and pricing. Your clients only ever see your brand, and you keep 100% of what you charge.",
  },
  {
    emoji: "🤝",
    title: "Done-With-You Support",
    description:
      "Our team helps configure flows, integrations, and client onboarding so you can focus on selling, not engineering.",
  },
];

export const industries: Industry[] = [
  {
    slug: "ai-voice-for-real-estate",
    name: "Real Estate",
    emoji: "🏠",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-01T00:00:00Z",
    productSupported: true,
    metaTitle: "AI Voice for Real Estate: Automate Leads & Showings",
    metaDescription:
      "How AI voice agents help real estate teams capture every lead, schedule showings, and follow up automatically. See use cases, ROI, and how agencies white-label it.",
    keywords: [
      "ai voice real estate",
      "ai calling agent real estate",
      "real estate lead qualification",
      "ai receptionist real estate",
      "voice ai for realtors",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Real Estate",
    subtitle:
      "Never miss a buyer or seller lead again. AI voice agents answer instantly, qualify prospects, and book showings around the clock.",
    intro: [
      "Real estate is a speed business. The agent who responds first usually wins the listing or the buyer, yet most inquiries arrive outside business hours when teams are showing homes or asleep. AI voice agents close that gap by answering every call instantly, qualifying the lead, and booking a showing directly into the calendar.",
      "With Fusion Calling, brokerages and the agencies that serve them can deploy a branded AI voice agent in days, one that handles inbound inquiries, outbound follow-up, and after-hours coverage without adding headcount.",
    ],
    useCases: [
      {
        emoji: "📞",
        title: "Instant Lead Capture",
        description:
          "Answer every buyer and seller inquiry on the first ring, 24/7, and capture name, budget, timeline, and property interest.",
      },
      {
        emoji: "🗓️",
        title: "Automated Showing Scheduling",
        description:
          "Book property showings straight into the agent's calendar with real-time availability, no back-and-forth.",
      },
      {
        emoji: "🔄",
        title: "Lead Nurture & Follow-Up",
        description:
          "Automatically re-engage cold, expired, and past-client leads with outbound calls to revive pipeline.",
      },
      {
        emoji: "🏷️",
        title: "Listing Inquiries",
        description:
          "Answer questions about active listings, open houses, and pricing, then route warm leads to the right agent.",
      },
    ],
    stats: [
      { value: "78%", label: "of leads choose the first agent to respond" },
      { value: "24/7", label: "after-hours coverage without extra staff" },
      { value: "<5s", label: "average time to first response" },
    ],
    agencyAngle:
      "Real estate is one of the most receptive markets for white-label voice AI, and one of the most profitable for agencies to serve.",
    agencyPoints: [
      "Brokerages and solo agents feel the pain of missed calls daily",
      "Monthly retainer pricing fits naturally alongside marketing services",
      "Each listing or buyer represents high lifetime value, so ROI is easy to prove",
      "Pre-built real estate agent templates let you launch a client in days",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "Can an AI voice agent really handle real estate leads?",
        answer:
          "Yes. A Fusion Calling AI agent answers instantly, asks the right qualifying questions (budget, timeline, property interest), and books a showing directly into a connected calendar. Warm or complex calls can be transferred live to a human agent.",
      },
      {
        question: "Does Fusion Calling integrate with real estate calendars and CRMs?",
        answer:
          "Fusion Calling supports calendar booking and integrates with 2,200+ apps including Google Calendar, HubSpot, and GoHighLevel, so showings and leads flow into the tools your client already uses.",
      },
      {
        question: "Can my agency white-label this for real estate clients?",
        answer:
          "Yes. With a Fusion Calling white-label plan you deploy the AI agent under your own brand and domain, bill clients your own pricing, and keep 100% of the revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-dental",
    name: "Dental & Healthcare",
    emoji: "🦷",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-02T00:00:00Z",
    productSupported: true,
    metaTitle: "AI Voice for Dental & Healthcare: Booking & Recall",
    metaDescription:
      "Reduce no-shows and fill the schedule with AI voice agents for dental and healthcare practices. See use cases, ROI, and how agencies white-label it.",
    keywords: [
      "ai voice dental",
      "ai receptionist dental office",
      "dental appointment reminder ai",
      "ai voice healthcare",
      "patient recall ai",
      "hipaa voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Dental & Healthcare",
    subtitle:
      "Fill cancellations, cut no-shows, and book new patients around the clock with an AI receptionist that never takes a break.",
    intro: [
      "Dental and healthcare practices lose revenue every time a call goes to voicemail during treatment, and every time a patient no-shows. An AI voice agent answers every call instantly, books appointments into the practice management system, and runs automated recall and reminder campaigns to keep the schedule full.",
      "Fusion Calling lets practices, and the agencies serving them, deploy a branded AI receptionist in days that handles scheduling, recalls, and patient questions while keeping conversations professional and compliant.",
    ],
    useCases: [
      {
        emoji: "🗓️",
        title: "24/7 Appointment Booking",
        description:
          "Schedule, reschedule, and cancel appointments directly into the practice calendar, even after hours.",
      },
      {
        emoji: "🔔",
        title: "Reminders & Recall",
        description:
          "Automated outbound calls reduce no-shows and reactivate overdue patients for cleanings and follow-ups.",
      },
      {
        emoji: "🆕",
        title: "New Patient Intake",
        description:
          "Collect new patient details, insurance information, and reason for visit before they arrive.",
      },
      {
        emoji: "❓",
        title: "Common Questions",
        description:
          "Answer hours, location, services, and pricing questions instantly, freeing up front-desk staff.",
      },
    ],
    stats: [
      { value: "30%", label: "average no-show reduction with reminders" },
      { value: "100%", label: "of after-hours calls answered" },
      { value: "0", label: "additional front-desk headcount required" },
    ],
    agencyAngle:
      "Healthcare and dental practices are ideal clients: predictable pain, clear ROI, and recurring needs that justify a monthly retainer.",
    agencyPoints: [
      "Front desks are overwhelmed and miss calls during treatment",
      "No-shows and unfilled cancellations are measurable, dollarized pain",
      "Recall campaigns deliver instant, visible schedule improvements",
      "Compliance-aware deployments fit HIPAA-conscious buyers",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "Is AI voice suitable for dental and healthcare practices?",
        answer:
          "Yes. Practices use Fusion Calling to answer calls, book and confirm appointments, run patient recall, and handle routine questions, freeing front-desk staff for in-person patients. Sensitive data handling should follow your practice's compliance requirements.",
      },
      {
        question: "How does the AI book appointments?",
        answer:
          "The agent checks real-time calendar availability and books, reschedules, or cancels appointments directly, then confirms details with the patient. It can also transfer complex or urgent calls to a human.",
      },
      {
        question: "Can I sell this to dental and medical clients under my brand?",
        answer:
          "Yes. White-label partners deploy a fully branded AI receptionist for each practice, set their own pricing, and keep 100% of client revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-insurance",
    name: "Insurance",
    emoji: "🛡️",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-03T00:00:00Z",
    productSupported: true,
    metaTitle: "AI Voice for Insurance Agencies: Quotes & Renewals",
    metaDescription:
      "AI voice agents for insurance agencies: capture quotes faster, follow up on claims, and retain renewals automatically. See use cases, ROI, and white-label options.",
    keywords: [
      "ai voice insurance",
      "ai calling agent insurance",
      "insurance lead qualification",
      "insurance renewal retention",
      "ai insurance receptionist",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Insurance",
    subtitle:
      "Respond to quote requests in seconds, follow up on claims, and retain renewals with an AI agent that works every lead.",
    intro: [
      "Insurance is competitive and speed-sensitive. Shoppers requesting a quote usually contact several agencies, and the fastest response wins the policy. An AI voice agent answers instantly, captures the details needed for a quote, and keeps renewals from slipping to a competitor.",
      "Fusion Calling helps agencies and the partners serving them deploy a branded AI agent that handles inbound quote intake, outbound renewal reminders, and claims follow-up without expanding the call center.",
    ],
    useCases: [
      {
        emoji: "💰",
        title: "Instant Quote Intake",
        description:
          "Capture caller details for auto, home, and life quotes instantly, then route warm leads to a licensed agent.",
      },
      {
        emoji: "🔁",
        title: "Renewal Retention",
        description:
          "Automated outbound calls remind clients of upcoming renewals and reduce policy churn to competitors.",
      },
      {
        emoji: "📋",
        title: "Claims Follow-Up",
        description:
          "Proactively update claimants on status and collect missing information to keep claims moving.",
      },
      {
        emoji: "🎯",
        title: "Lead Qualification",
        description:
          "Pre-qualify prospects on coverage needs and budget before an agent spends time on the file.",
      },
    ],
    stats: [
      { value: "5x", label: "higher contact rate when responding in minutes" },
      { value: "24/7", label: "quote capture, even after hours" },
      { value: "100%", label: "of renewals proactively touched" },
    ],
    agencyAngle:
      "Insurance agencies value retention and lead speed, both of which an AI voice agent improves measurably, making it an easy sell and a sticky retainer.",
    agencyPoints: [
      "Quote speed directly drives policy wins",
      "Renewal retention is a clear, dollarized metric",
      "Agencies are accustomed to monthly software and service fees",
      "Inbound and outbound use cases justify a broader engagement",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "How does an AI voice agent help an insurance agency?",
        answer:
          "It answers every call instantly to capture quote details, follows up on claims and renewals automatically, and pre-qualifies leads so agents spend time only on ready-to-buy prospects. Complex or licensed conversations can be transferred to a human.",
      },
      {
        question: "Can the AI transfer calls to a licensed agent?",
        answer:
          "Yes. The agent gathers information and can transfer warm or compliant-sensitive calls live to the right team member, with context carried over.",
      },
      {
        question: "Can my agency offer this to insurance clients?",
        answer:
          "Yes. White-label partners deploy a branded AI agent for each insurance client, control pricing, keep 100% of revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-home-services",
    name: "Home Services",
    emoji: "🔧",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-04T00:00:00Z",
    productSupported: false,
    metaTitle: "AI Voice for Home Services: HVAC, Plumbing & Roofing",
    metaDescription:
      "Never miss an emergency call. AI voice agents for home services handle dispatch, booking, and follow-up for HVAC, plumbing, roofing, and electrical businesses.",
    keywords: [
      "ai voice home services",
      "ai receptionist hvac",
      "plumbing ai answering service",
      "home services dispatch ai",
      "contractor ai voice agent",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Home Services",
    subtitle:
      "For HVAC, plumbing, roofing, and electrical teams, a missed call is a lost job. An AI agent answers every one, even at 2 a.m.",
    intro: [
      "Home services businesses live and die by the phone. A burst pipe or dead furnace is an emergency, and the contractor who answers first gets the job. But owners and technicians can't always pick up while on a roof or under a sink, and after-hours calls go to voicemail, then to a competitor.",
      "Fusion Calling gives home services companies, and the agencies that serve them, a branded AI agent that answers instantly, triages emergencies, books service appointments, and schedules estimates without adding staff.",
    ],
    useCases: [
      {
        emoji: "🚨",
        title: "Emergency Call Triage",
        description:
          "Answer emergency calls instantly, assess urgency, and route true emergencies to on-call technicians.",
      },
      {
        emoji: "📅",
        title: "Service Scheduling",
        description:
          "Book routine service and maintenance appointments directly into the dispatch calendar.",
      },
      {
        emoji: "📐",
        title: "Estimate Scheduling",
        description:
          "Qualify project leads and schedule on-site estimates for roofing, remodels, and installations.",
      },
      {
        emoji: "⭐",
        title: "Review & Follow-Up",
        description:
          "Automatically follow up after jobs to request reviews and book recurring maintenance.",
      },
    ],
    stats: [
      { value: "1st", label: "contractor to answer wins most jobs" },
      { value: "24/7", label: "emergency coverage, no overtime pay" },
      { value: "100%", label: "of inbound calls captured" },
    ],
    agencyAngle:
      "Home services is one of the easiest markets to sell voice AI into, because missed-call pain is felt every single day.",
    agencyPoints: [
      "Owners personally feel every missed job",
      "Emergency routing delivers immediate, tangible value",
      "These businesses already pay for answering services and CRMs",
      "High average job value makes the ROI obvious",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "Can the AI handle emergency vs. routine calls differently?",
        answer:
          "Yes. The agent triages each call, escalates genuine emergencies to on-call technicians, and books routine service and estimates into the calendar. This keeps true emergencies from getting lost in voicemail.",
      },
      {
        question: "Does it work for HVAC, plumbing, roofing, and electrical?",
        answer:
          "Yes. Fusion Calling agents are configured per trade and use case, so each home services client gets flows tailored to their services, service area, and dispatch process.",
      },
      {
        question: "Can I sell this to contractors under my own brand?",
        answer:
          "Yes. White-label partners deploy a branded AI agent for each contractor, set their own pricing, keep 100% of revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-law-firms",
    name: "Legal",
    emoji: "⚖️",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-05T00:00:00Z",
    productSupported: false,
    metaTitle: "AI Voice for Law Firms: Intake & Consultations",
    metaDescription:
      "Capture every potential client with AI voice agents for law firms. Automate intake, qualify cases, and schedule consultations around the clock.",
    keywords: [
      "ai voice law firm",
      "ai legal intake",
      "law firm ai receptionist",
      "attorney intake ai",
      "legal lead qualification",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Law Firms & Legal",
    subtitle:
      "Potential clients often call after hours and move on fast. An AI intake agent captures every case, qualifies it, and books the consultation.",
    intro: [
      "For law firms, every inbound call can be a high-value case, and potential clients frequently reach out outside business hours or while the firm is in court. A missed or delayed call often means the case goes elsewhere. An AI voice agent ensures every caller is captured, pre-qualified, and booked for a consultation.",
      "Fusion Calling lets firms, and the agencies serving them, deploy a branded intake agent that gathers case details, screens for conflicts and fit, and schedules consultations without expanding reception staff.",
    ],
    useCases: [
      {
        emoji: "📥",
        title: "Case Intake",
        description:
          "Capture case type, parties, timeline, and contact details consistently, every time, day or night.",
      },
      {
        emoji: "✅",
        title: "Lead Qualification",
        description:
          "Screen for practice-area fit and basic conflict checks before an attorney spends time on the file.",
      },
      {
        emoji: "📆",
        title: "Consultation Scheduling",
        description:
          "Book consultations directly into attorney calendars and send confirmations automatically.",
      },
      {
        emoji: "🔁",
        title: "Follow-Up",
        description:
          "Nurture signed-document pending leads and re-engage inquiries that haven't converted yet.",
      },
    ],
    stats: [
      { value: "100%", label: "of after-hours calls captured" },
      { value: "24/7", label: "intake coverage for time-sensitive cases" },
      { value: "0", label: "intake detail missed or forgotten" },
    ],
    agencyAngle:
      "Legal clients have high case values, making voice AI a high-ROI, easy-to-justify retainer for agencies serving the profession.",
    agencyPoints: [
      "Every missed call can equal a lost high-value case",
      "Intake consistency directly improves conversion",
      "Firms are accustomed to paying for intake and answering services",
      "Consultation booking ties neatly into calendar and CRM tools",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "Is AI voice appropriate for law firm intake?",
        answer:
          "Yes. Firms use Fusion Calling to capture case details consistently, pre-qualify leads for fit, and schedule consultations, then transfer complex or sensitive matters to an attorney. Confidentiality handling should follow the firm's professional responsibility rules.",
      },
      {
        question: "Can the AI screen for the right practice area?",
        answer:
          "Yes. The agent is configured to ask practice-area-specific questions and route or qualify leads accordingly, so attorneys only spend time on relevant cases.",
      },
      {
        question: "Can my agency offer this to law firms?",
        answer:
          "Yes. White-label partners deploy a branded intake agent for each firm, control pricing, keep 100% of revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-automotive",
    name: "Automotive",
    emoji: "🚗",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-06T00:00:00Z",
    productSupported: false,
    metaTitle: "AI Voice for Auto Dealers & Service: Booking & Recall",
    metaDescription:
      "AI voice agents for automotive dealerships and service centers. Book service appointments, manage recalls, and qualify sales leads around the clock.",
    keywords: [
      "ai voice automotive",
      "ai dealer receptionist",
      "auto service booking ai",
      "vehicle recall ai",
      "dealership ai calling",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Automotive",
    subtitle:
      "Keep service bays full and sales leads warm. An AI agent books service, handles recalls, and qualifies buyers without adding staff.",
    intro: [
      "Dealerships and service centers juggle two phone-heavy workflows: a service bay that needs to stay full, and a sales floor chasing leads. Missed calls mean empty bays and lost sales, while recall campaigns require reaching thousands of owners quickly.",
      "Fusion Calling helps automotive businesses, and the agencies serving them, deploy a branded AI agent that books service appointments, runs recall outreach, and qualifies sales leads at scale.",
    ],
    useCases: [
      {
        emoji: "🛠️",
        title: "Service Appointment Booking",
        description:
          "Book, confirm, and reschedule service appointments directly into the service lane calendar.",
      },
      {
        emoji: "📣",
        title: "Recall Campaigns",
        description:
          "Reach large numbers of owners quickly about open recalls and schedule corrective service.",
      },
      {
        emoji: "🚙",
        title: "Test Drive Scheduling",
        description:
          "Qualify sales leads and book test drives with the right vehicle and salesperson.",
      },
      {
        emoji: "⭐",
        title: "Post-Service Follow-Up",
        description:
          "Automatically follow up after service to collect reviews and rebook maintenance.",
      },
    ],
    stats: [
      { value: "100%", label: "of service calls answered" },
      { value: "24/7", label: "lead capture for online shoppers" },
      { value: "1000s", label: "of recall contacts per campaign" },
    ],
    agencyAngle:
      "Automotive combines high call volume with clear revenue per interaction, making it a strong, scalable vertical for agencies.",
    agencyPoints: [
      "Service utilization is a direct revenue lever",
      "Recall and reactivation campaigns are high-volume and measurable",
      "Dealerships already invest in CRM and marketing tech",
      "Both sales and service flows create multiple upsell paths",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "How does AI voice help an automotive business?",
        answer:
          "It keeps the service lane full by booking appointments, reaches owners at scale during recalls, and qualifies and books sales leads. Post-service follow-up also drives reviews and repeat business.",
      },
      {
        question: "Can it run large recall campaigns?",
        answer:
          "Yes. Outbound campaigns can contact large lists of owners, confirm recall status, and schedule service, with outcomes and transcripts tracked for compliance.",
      },
      {
        question: "Can my agency offer this to dealers and service centers?",
        answer:
          "Yes. White-label partners deploy a branded AI agent for each automotive client, set their own pricing, keep 100% of revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-call-centers",
    name: "Call Centers & BPO",
    emoji: "☎️",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-07T00:00:00Z",
    productSupported: false,
    metaTitle: "AI Voice for Call Centers & BPOs: Scale & Cut Costs",
    metaDescription:
      "AI voice agents for call centers and BPOs. Handle high-volume inbound and outbound calls, triage tier-1 queries, and scale without growing headcount.",
    keywords: [
      "ai voice call center",
      "ai bpo",
      "call center automation ai",
      "ai voice agent at scale",
      "outbound campaign ai",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Call Centers & BPO",
    subtitle:
      "Handle spikes in volume, automate tier-1 queries, and run high-volume outbound campaigns without scaling headcount linearly.",
    intro: [
      "Call centers and BPOs operate on thin margins and variable volume. Spikes overwhelm agents, while quiet periods waste capacity. AI voice agents absorb the predictable, repetitive work, handling tier-1 inquiries and large outbound campaigns so human agents focus on complex, high-value conversations.",
      "Fusion Calling gives contact centers and the agencies serving them a platform to deploy AI agents that handle high-volume inbound and outbound calls with recordings, transcripts, and analytics built in.",
    ],
    useCases: [
      {
        emoji: "📲",
        title: "High-Volume Inbound",
        description:
          "Absorb call spikes and handle routine inquiries instantly, with seamless handoff to human agents when needed.",
      },
      {
        emoji: "📤",
        title: "Outbound Campaigns",
        description:
          "Run large-scale lead generation, surveys, confirmations, and collections campaigns automatically.",
      },
      {
        emoji: "🔀",
        title: "Tier-1 Triage",
        description:
          "Resolve common requests (balances, hours, status) and escalate only what needs a human.",
      },
      {
        emoji: "📊",
        title: "Analytics & QA",
        description:
          "Every call is recorded, transcribed, and tagged for quality assurance and continuous improvement.",
      },
    ],
    stats: [
      { value: "24/7", label: "coverage across time zones" },
      { value: "1000s", label: "of concurrent calls handled" },
      { value: "100%", label: "of calls recorded and transcribed" },
    ],
    agencyAngle:
      "BPOs and contact centers are sophisticated buyers with high volume, making them ideal for agencies offering white-labeled AI capacity.",
    agencyPoints: [
      "Volume and margin pressure make automation compelling",
      "Inbound and outbound create multiple engagement models",
      "Built-in analytics support SLA and QA reporting clients expect",
      "Scalable capacity fits BPO growth models",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "Can AI voice agents handle high call-center volumes?",
        answer:
          "Yes. Fusion Calling supports high-volume inbound and outbound calling, with recordings, transcripts, and analytics on every call. Routine tier-1 queries are handled automatically and complex calls transfer to human agents.",
      },
      {
        question: "Does it integrate with existing contact-center tools?",
        answer:
          "Fusion Calling integrates via API and webhooks with CRMs and automation tools, so call data, transcripts, and outcomes flow into the systems your contact center already uses.",
      },
      {
        question: "Can my agency white-label this for BPO clients?",
        answer:
          "Yes. White-label partners deploy branded AI capacity for each client, control pricing, keep 100% of revenue, with unlimited sub-accounts on the Scale tier.",
      },
    ],
  },
  {
    slug: "ai-voice-for-financial-services",
    name: "Financial Services",
    emoji: "🏦",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-08T00:00:00Z",
    productSupported: false,
    metaTitle: "AI Voice for Financial Services: Advising & Scheduling",
    metaDescription:
      "AI voice agents for financial advisors, lenders, and fintechs. Qualify leads, schedule appointments, and follow up consistently and professionally.",
    keywords: [
      "ai voice financial services",
      "ai advisor scheduling",
      "fintech ai voice",
      "financial lead qualification",
      "loan application ai",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Financial Services",
    subtitle:
      "Qualify prospects, schedule advisor appointments, and follow up on applications with an AI agent that's available whenever clients call.",
    intro: [
      "Financial services firms, from advisors to lenders to fintechs, win business by responding fast and following up consistently. A delayed callback can lose a loan application or a new advisory client. An AI voice agent ensures every inquiry is captured, qualified, and scheduled.",
      "Fusion Calling lets financial services firms, and the agencies serving them, deploy a branded AI agent that qualifies leads, books appointments, and runs compliant follow-up on applications and renewals.",
    ],
    useCases: [
      {
        emoji: "🧑‍💼",
        title: "Advisor Appointment Setting",
        description:
          "Qualify prospects and schedule consultations with the right advisor based on needs and availability.",
      },
      {
        emoji: "📝",
        title: "Application Follow-Up",
        description:
          "Proactively follow up on incomplete loan and account applications to reduce abandonment.",
      },
      {
        emoji: "🎯",
        title: "Lead Qualification",
        description:
          "Pre-screen prospects on needs, assets, and timeline before an advisor engages.",
      },
      {
        emoji: "🔔",
        title: "Review & Renewal Reminders",
        description:
          "Remind clients of annual reviews, renewals, and important deadlines automatically.",
      },
    ],
    stats: [
      { value: "100%", label: "of inquiries captured, day or night" },
      { value: "24/7", label: "availability for time-sensitive leads" },
      { value: "<5s", label: "average response time" },
    ],
    agencyAngle:
      "Financial services clients have high lifetime value, making consistent follow-up and qualification a compelling, high-ROI use case.",
    agencyPoints: [
      "Speed to respond directly affects conversion",
      "Application abandonment is measurable, dollarized loss",
      "Firms already budget for compliance and CRM tooling",
      "High client lifetime value justifies a monthly retainer",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "Is AI voice suitable for financial services?",
        answer:
          "Yes. Firms use Fusion Calling to qualify prospects, schedule advisor appointments, and follow up on applications consistently. Sensitive transactions transfer to a human, and data handling should follow the firm's regulatory requirements.",
      },
      {
        question: "Can the AI follow up on incomplete applications?",
        answer:
          "Yes. Outbound follow-up campaigns re-engage applicants who started but didn't finish, recovering revenue that would otherwise be lost to abandonment.",
      },
      {
        question: "Can my agency offer this to financial clients?",
        answer:
          "Yes. White-label partners deploy a branded AI agent for each financial client, control pricing, keep 100% of revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-ecommerce-retail",
    name: "E-commerce & Retail",
    emoji: "🛒",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-09T00:00:00Z",
    productSupported: true,
    metaTitle: "AI Voice for E-commerce & Retail: Support, Orders & Returns",
    metaDescription:
      "Recover lost sales with AI voice agents for e-commerce and retail. Automate order status, returns, and support calls 24/7. See use cases, ROI, and how agencies white-label it.",
    keywords: [
      "ai voice ecommerce",
      "ai voice retail",
      "ecommerce order status ai",
      "retail customer support ai",
      "ai receptionist retail",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "E-commerce & Retail",
    subtitle:
      "Every abandoned-cart follow-up and 'where is my order' call is revenue at risk. An AI agent recovers sales and deflects support volume around the clock.",
    intro: [
      "Online stores generate a constant stream of routine phone calls: order status, returns, exchanges, and delivery questions. These calls arrive after hours and during peaks, when support teams are overwhelmed or offline, and each one is a chance to lose a customer or a sale.",
      "Fusion Calling lets retailers, and the agencies serving them, deploy a branded AI voice agent that answers order questions, processes returns and exchanges, and triggers abandoned-cart and back-in-stock follow-up calls automatically.",
    ],
    useCases: [
      {
        emoji: "📦",
        title: "Order Status & Tracking",
        description:
          "Answer 'where is my order' instantly by pulling live status from your store or fulfillment system.",
      },
      {
        emoji: "↩️",
        title: "Returns & Exchanges",
        description:
          "Walk customers through return eligibility, start the label, and book exchanges without a human agent.",
      },
      {
        emoji: "🛒",
        title: "Cart Recovery Calls",
        description:
          "Automatically re-engage shoppers who abandoned carts with a friendly, conversational reminder.",
      },
      {
        emoji: "🚚",
        title: "Restock & Back-in-Stock",
        description:
          "Call customers when wished-for items return to stock and guide them straight to checkout.",
      },
    ],
    stats: [
      { value: "24/7", label: "support coverage without adding headcount" },
      { value: "<5s", label: "average response to order questions" },
      { value: "100%", label: "of routine support calls deflected" },
    ],
    agencyAngle:
      "E-commerce is a massive, recurring-pain market where every recovered call is directly measurable revenue, making it an easy retainer to sell.",
    agencyPoints: [
      "Store owners feel support volume spikes around every sale event",
      "Order-status and returns calls are highly repetitive and automatable",
      "Cart-recovery calls produce immediate, attributable revenue",
      "Integrations with Shopify and WooCommerce make launch fast",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "Can an AI voice agent handle e-commerce support?",
        answer:
          "Yes. A Fusion Calling agent answers order-status, returns, and exchange questions by connecting to your store or fulfillment system, and can trigger follow-up calls for abandoned carts and restocks. Complex issues transfer to a human agent with context.",
      },
      {
        question: "Does it integrate with Shopify or WooCommerce?",
        answer:
          "Fusion Calling connects via API and webhooks to 2,200+ apps including Shopify and WooCommerce, so order data and follow-up actions flow into the tools your store already uses.",
      },
      {
        question: "Can my agency white-label this for retail clients?",
        answer:
          "Yes. White-label partners deploy a branded AI agent for each retail client, set their own pricing, and keep 100% of the revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-education-tutoring",
    name: "Education & Tutoring",
    emoji: "🎓",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-10T00:00:00Z",
    productSupported: false,
    metaTitle: "AI Voice for Education & Tutoring: Enrollment & Scheduling",
    metaDescription:
      "Fill cohorts and reduce no-shows with AI voice agents for tutoring centers, schools, and edtech. Automate enrollment calls, scheduling, and parent comms 24/7.",
    keywords: [
      "ai voice education",
      "ai voice tutoring",
      "tutoring enrollment ai",
      "education intake ai",
      "parent communication ai",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Education & Tutoring",
    subtitle:
      "Capture every prospective student and parent, schedule trials, and reduce no-shows with an AI agent that works around the academic calendar.",
    intro: [
      "Tutoring centers, bootcamps, and edtech programs live on enrollment calls and trial-booking, but inquiries spike after school hours and during campaigns when staff are teaching. Missed calls mean missed cohorts and lost tuition.",
      "Fusion Calling helps education providers, and the agencies serving them, deploy a branded AI voice agent that qualifies prospective students, books trial sessions, sends reminders, and follows up with parents, automatically.",
    ],
    useCases: [
      {
        emoji: "📝",
        title: "Enrollment Qualification",
        description:
          "Capture subject, grade level, goals, and availability for each inquiry and route warm leads to admissions.",
      },
      {
        emoji: "📅",
        title: "Trial & Class Scheduling",
        description:
          "Book trial lessons and classes directly into the calendar, even after hours and on weekends.",
      },
      {
        emoji: "🔔",
        title: "Reminders & No-Show Reduction",
        description:
          "Automated reminder calls reduce no-shows and keep cohorts full.",
      },
      {
        emoji: "👪",
        title: "Parent Communication",
        description:
          "Answer common parent questions about curriculum, schedules, and pricing consistently.",
      },
    ],
    stats: [
      { value: "100%", label: "of after-hours inquiries captured" },
      { value: "24/7", label: "enrollment coverage during campaigns" },
      { value: "<5s", label: "average time to first response" },
    ],
    agencyAngle:
      "Education and tutoring providers have predictable enrollment cycles and clear ROI from filled cohorts, making them ideal, recurring agency clients.",
    agencyPoints: [
      "Inquiries peak outside teaching hours when staff are busy",
      "Filled cohorts and fewer no-shows are directly dollarized",
      "Recurring terms and cohorts justify a monthly retainer",
      "Pre-built education flows let you launch a client in days",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "How can AI voice help a tutoring or education business?",
        answer:
          "It captures every inquiry, qualifies prospective students, books trial sessions, and runs reminder and follow-up calls, so admissions teams focus on converting warm leads instead of answering routine questions.",
      },
      {
        question: "Does it integrate with scheduling and CRM tools?",
        answer:
          "Fusion Calling integrates with calendars and 2,200+ apps, so trial bookings and lead details flow into the systems your education client already uses.",
      },
      {
        question: "Can my agency offer this to education clients?",
        answer:
          "Yes. White-label partners deploy a branded AI agent for each education client, control pricing, and keep 100% of revenue.",
      },
    ],
  },
  {
    slug: "ai-voice-for-restaurants-hospitality",
    name: "Restaurants & Hospitality",
    emoji: "🍽️",
    category: "Industry Use Case",
    readTime: "7 min read",
    datePublished: "2025-02-11T00:00:00Z",
    productSupported: false,
    metaTitle: "AI Voice for Restaurants & Hospitality: Reservations & Orders",
    metaDescription:
      "Never miss a reservation or phone order. AI voice agents for restaurants and hotels handle bookings, takeout, and catering calls 24/7. See use cases and ROI.",
    keywords: [
      "ai voice restaurant",
      "ai reservation agent",
      "restaurant phone order ai",
      "hotel concierge ai",
      "hospitality voice ai",
      "white label voice ai",
    ],
    h1: "AI Voice for",
    h1Highlight: "Restaurants & Hospitality",
    subtitle:
      "A ringing phone during a rush means a lost reservation or a dropped order. An AI agent answers every call, even at the peak of service.",
    intro: [
      "Restaurants and hotels lose business every time the phone rings unanswered during a rush, late night, or off-hours. Reservations go to competitors, takeout orders are abandoned, and catering leads go cold.",
      "Fusion Calling gives hospitality businesses, and the agencies serving them, a branded AI voice agent that takes reservations, processes phone orders, handles catering inquiries, and answers guest questions, automatically and around the clock.",
    ],
    useCases: [
      {
        emoji: "📅",
        title: "Reservations",
        description:
          "Book, modify, and cancel reservations directly into the reservation system, even at peak times.",
      },
      {
        emoji: "🥡",
        title: "Takeout & Phone Orders",
        description:
          "Capture takeout and delivery orders accurately and send them to the kitchen or POS without a staffed line.",
      },
      {
        emoji: "🍰",
        title: "Catering Inquiries",
        description:
          "Qualify catering leads, collect event details, and route them to the right person for follow-up.",
      },
      {
        emoji: "🏨",
        title: "Hotel Guest Services",
        description:
          "Answer guest questions about amenities, check-in, and local recommendations, and route requests to the front desk.",
      },
    ],
    stats: [
      { value: "100%", label: "of incoming reservation calls answered" },
      { value: "24/7", label: "coverage through late-night and off-peak" },
      { value: "0", label: "missed orders during the dinner rush" },
    ],
    agencyAngle:
      "Hospitality is a high-call-volume, thin-margin industry where every answered call protects revenue, making voice AI an easy, sticky sell.",
    agencyPoints: [
      "Phones ring constantly during service when staff can't answer",
      "Lost reservations and orders are immediate, visible revenue loss",
      "Takeout and catering are high-margin, repeatable use cases",
      "Pre-built hospitality flows launch a client in days",
    ],
    whyFusion: sharedWhyFusion,
    faqs: [
      {
        question: "Can an AI voice agent take restaurant reservations and orders?",
        answer:
          "Yes. The agent books and modifies reservations in your system, captures takeout and catering orders accurately, and answers common guest questions, freeing staff during the rush. Complex or special requests transfer to a person.",
      },
      {
        question: "Does it work for hotels as well as restaurants?",
        answer:
          "Yes. Fusion Calling agents are configured per venue, so a hotel can use the same platform for guest services, concierge questions, and reservation handling while a restaurant uses it for orders and bookings.",
      },
      {
        question: "Can I sell this to hospitality clients under my brand?",
        answer:
          "Yes. White-label partners deploy a branded AI agent for each venue, set their own pricing, and keep 100% of the revenue.",
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getRelatedIndustries(slug: string, limit = 3): Industry[] {
  return industries.filter((i) => i.slug !== slug).slice(0, limit);
}
