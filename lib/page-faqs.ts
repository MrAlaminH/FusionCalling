// Single source for the FAQ arrays that live in lib (not inside page files)
// so BOTH the rendered pages and the AI feed (scripts/generate-llms.ts) can
// consume the same verbatim text — page JSON-LD and llms-full.txt can never
// drift apart. Pages import these aliased as `faqs`.
export type PageFaq = { question: string; answer: string };

export const aiPhoneCallAutomationFaqs: PageFaq[] = [
  {
    question: "What is AI phone call automation?",
    answer:
      "AI phone call automation is software that handles business phone calls without a human on the line: it answers inbound calls, places outbound calls, holds natural conversations, and completes follow-through work like booking, CRM updates, and SMS confirmations. Fusion Calling runs both directions on one platform from $149/month.",
  },
  {
    question:
      "What is the difference between AI phone call automation and an AI receptionist?",
    answer:
      "Automation is the whole capability — every inbound and outbound workflow running on software. The AI receptionist is one application of it: the inbound voice agent that answers your lines like a front-desk employee. If you only need inbound coverage, start with the AI phone call receptionist guide; if you also want outbound campaigns, reminders, or qualification, you need the full automation platform described on this page.",
  },
  {
    question: "Does it handle outbound calls or only inbound?",
    answer:
      "Both. Inbound agents answer, book, and route; outbound agents dial lists in parallel for follow-ups, re-engagement, qualification, and reminders. You can run one direction or both on the same account, under the same calling rules and minute pool.",
  },
  {
    question: "How much does AI phone call automation cost?",
    answer:
      "Plans start at $149/month with 500 included minutes — agencies resell from $99/month; full tiers on /pricing.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most deployments go live within days of kickoff: connect your number, provide your business knowledge, set greetings and handoff rules, then test with the team before switching it on. Complex multi-workflow setups take longer, but a single inbound or outbound workflow is typically live in under a week.",
  },
  {
    question: "What tools does it connect to?",
    answer:
      "Calendars for booking, CRMs for lead and outcome logging, SMS for confirmations and follow-ups, and Zapier for 2,200+ additional apps. The agent reads and writes during the call, so records stay current without staff typing anything in by hand.",
  },
  {
    question: "Is automated outbound calling legal?",
    answer:
      "Outbound rules depend on your jurisdiction — in the US, the TCPA governs consent, calling hours, and do-not-call obligations, and automation does not exempt you. Fusion Calling supports consent-aware workflows, time-of-day windows, and opt-out handling, but list consent and compliance decisions remain your responsibility. Consult counsel for your program.",
  },
  {
    question: "Can agencies white-label it?",
    answer:
      "Yes. Agencies resell the platform under their own brand with client sub-accounts, branded portals, and Stripe rebilling from $99/month. Each client gets their own agents, numbers, and rules while you manage everything from one dashboard.",
  },
  {
    question: "Which AI outbound calling platform integrates with our CRM?",
    answer:
      "Fusion Calling logs calls, outcomes, and transcripts to your CRM, connects to GoHighLevel and HubSpot, and reaches 2,200+ additional apps via Zapier, with API and webhook access for custom stacks. Outbound results write back during the call, so lead records stay current without manual entry.",
  },
];

export const aiVoiceAgentFaqs: PageFaq[] = [
  {
    question: "What is an AI voice agent?",
    answer:
      "An AI voice agent is software that holds spoken phone conversations on behalf of a business: it listens, understands intent, replies in a natural voice, and completes tasks like booking appointments or updating a CRM. It combines speech recognition, a language model, and voice synthesis with telephony and business integrations — no human on the line.",
  },
  {
    question: "Is an AI voice agent the same as an AI receptionist?",
    answer:
      "A receptionist is one type of voice agent — the inbound one that answers your lines. 'AI voice agent' is the broader category: it also covers outbound sales agents, qualification agents, and reminder agents. Our AI phone call receptionist guide covers the inbound type; AI phone call automation covers the full platform.",
  },
  {
    question: "How do AI voice agents work technically?",
    answer:
      "Four stages run in a loop: automatic speech recognition transcribes the caller, a large language model decides the response using your business knowledge, text-to-speech renders it in a natural voice, and integrations execute actions like booking or CRM updates. The full loop typically completes in under a second, which is why conversations feel fluid.",
  },
  {
    question: "Can AI voice agents handle outbound calls?",
    answer:
      "Yes. The same agent technology dials lists in parallel for cold calling, lead qualification, reminders, and follow-ups — inside calling-hour windows and consent rules you configure. Inbound and outbound can run on the same account and minute pool.",
  },
  {
    question: "How much does an AI voice agent cost?",
    answer:
      "Plans start at $149/month with 500 included minutes — compare every tier on /pricing.",
  },
  {
    question: "Do callers know they're talking to an AI?",
    answer:
      "Best practice is transparency when asked — most businesses introduce the agent by name in the greeting, which callers accept readily. The conversation itself feels natural: fast replies, realistic pacing, interruption handling, and multiple languages.",
  },
  {
    question: "What can't AI voice agents do?",
    answer:
      "They don't replace human judgment: complex disputes, emotional conversations, and unusual requests should transfer to your team — which is why warm transfers with full transcripts are a core feature, not an afterthought. They also don't exempt outbound programs from telemarketing rules like the TCPA.",
  },
  {
    question: "How do I choose an AI voice agent platform?",
    answer:
      "Test interruption handling with messy calls, verify tasks complete during the call (booking, CRM, SMS), prefer minute-pooled over per-seat pricing, confirm compliance controls, and measure time-to-live in days not months. Hear live demo calls on our homepage before comparing plans.",
  },
  {
    question: "Can an AI receptionist qualify leads from phone calls?",
    answer:
      "Yes. The agent asks your qualifying questions on live inbound calls — budget, timeline, location, service need — scores the caller against your rules, writes everything to your CRM, and books appointments for qualified leads. Unqualified callers still get answered, so you capture the long tail that voicemail loses.",
  },
];

export const aiReceptionistFaqs: PageFaq[] = [
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist is software that answers your business phone calls like a front-desk employee: it greets callers, answers questions using your business knowledge, books appointments into your calendar, takes messages, sends SMS confirmations, and transfers urgent calls to your team. It works 24/7 and handles many calls at the same time.",
  },
  {
    question: "How much does an AI receptionist cost?",
    answer:
      "Plans start at $149/month with 500 included minutes. There is no permanent free tier, but every plan starts with a 3-day free trial, a 14-day money-back guarantee, and a live demo call you can take before committing — see /pricing for the full breakdown across all tiers.",
  },
  {
    question: "Will AI replace receptionists?",
    answer:
      "No — it replaces the repetitive part of the job. The AI handles routine calls: bookings, hours, directions, reminders, and message-taking. Judgment calls, sensitive conversations, and loyal-customer relationships stay with your people. Most businesses use the AI as the first line so staff time goes to conversations that need a human.",
  },
  {
    question: "Are AI receptionists worth it for small businesses?",
    answer:
      "Usually, yes — the math is about missed calls. If your business misses 20 calls a month and closes 1 in 4 at $300 average value, that is $1,500 in lost revenue, more than the plan cost. An AI receptionist makes sense when a missed call means lost work: home services, clinics, restaurants, real estate, and law firms see the fastest payback.",
  },
  {
    question: "Can callers tell they are talking to an AI?",
    answer:
      "Owners usually settle this from transcripts, not theory: callers who get an instant correct booking rarely ask whether the voice was human. The voices come from natural-sounding speech engines like ElevenLabs, and customers report them up to 95% indistinguishable from human speakers in blind listening tests. Best practice is a named greeting up front plus disclosure when asked, with a human-transfer rule for anything emotional — speed plus honesty beats both hold music and a surprise reveal.",
  },
  {
    question: "What happens when the AI cannot help a caller?",
    answer:
      "You set the rules for call transfer and escalation. Emergencies, angry callers, or requests you mark human-only trigger a warm transfer to you or your team, with the transcript, caller details, and reason for the handoff attached. Nothing gets stranded, and nobody has to start over.",
  },
  {
    question: "How is an AI receptionist different from an answering service?",
    answer:
      "An answering service takes messages on your behalf, per minute, from a script. An AI receptionist takes action on your behalf: it books into your actual calendar, answers from your real business knowledge, sends SMS confirmations, and updates your CRM — at a flat monthly rate instead of per-minute billing.",
  },
  {
    question: "Can I resell an AI receptionist to my clients?",
    answer:
      "Yes. Agencies, consultants, and MSPs resell Fusion Calling as a white-label AI receptionist under their own brand and pricing, with client sub-accounts and Stripe rebilling included. Partner plans start at $99/month — see the white-label program for details.",
  },
  {
    question: "Do I need a new phone number for an AI receptionist?",
    answer:
      "No. Your existing business number and carrier stay exactly as they are — calls route to the AI receptionist with forwarding you control, and porting is optional, never required.",
  },
];
