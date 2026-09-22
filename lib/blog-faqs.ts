import type { BlogFaq } from "@/components/blog/PostFaq";

/**
 * Per-post FAQ data — the single source for BOTH the visible FAQ section and
 * the FAQPage JSON-LD. Extracted from the posts` schema blocks so the two can
 * never diverge (Google requires FAQ content to be visible on the page).
 */
export const blogFaqs: Record<string, BlogFaq[]> = {
  "ai-receptionist-complaints": [
    {
      "question": "What is the most common complaint about AI receptionists?",
      "answer": "In our analysis of 55 public user reports (collected September 16, 2026), the most common failure was callers hanging up on the AI — 9 reports described frustrated callers abandoning calls, often without the business ever finding out. Misunderstanding and endless loops were the next most common call-handling complaint, followed by usage-based billing surprises. Almost all of these trace to one root cause: the agent had no configured way to hand off to a human."
    },
    {
      "question": "Are AI receptionists worth it despite the complaints?",
      "answer": "Often yes — 16 of the 55 reports in our analysis (29%) were positive, and the happy users share a pattern: they defined exactly what the AI handles, configured escalation triggers to a human, set after-hours rules, and reviewed transcripts weekly. Typical wins were after-hours coverage and replacing voicemail — 'most patients would rather be picked up by an AI than not picked up at all,' as one dentist put it. The complaints concentrate in deployments where the agent was turned on with no exit path."
    },
    {
      "question": "How do I avoid usage-based billing surprises?",
      "answer": "Ask three questions in writing before signing: what is the per-minute or per-call rate once included minutes run out, is billing per-second or rounded up, and what counts as a billable call? Billing opacity was behind 7 of the 55 reports we analyzed. Flat-rate plans with included minutes — like Fusion Calling's $149–$497/mo business plans with $0 setup and no contracts — remove the surprise entirely."
    },
    {
      "question": "Did the FTC really sue an AI calling company?",
      "answer": "Yes. In August 2025 the FTC sued Air AI (Air AI Technologies) over alleged false earnings and refund claims sold as business opportunities. The proposed settlement, announced March 24, 2026, included an $18 million monetary judgment and banned the company and its owners from marketing business opportunities or making unsubstantiated earnings claims. It's a useful reminder to buy month-to-month from vendors whose refund and cancellation terms you've actually read."
    },
    {
      "question": "How do I test an AI receptionist honestly before buying?",
      "answer": "Demand a live call to your own phone number using your scenarios, not the vendor's demo script: interrupt the agent mid-sentence, call from a noisy environment, ask a question that isn't in its knowledge base, say an emergency keyword, and ask to speak to a human. Then check what happens on each failure path — a message taken, a transfer with context, or a hangup. Finally, read the provider's 1-star reviews and recent community threads before trusting its average rating."
    }
  ],
  "missed-call-text-back-vs-ai-receptionist": [
    {
      "question": "Is missed-call text-back free in GoHighLevel?",
      "answer": "The feature itself is included in every GoHighLevel plan, but you need a plan to run it — Starter is $97/month, Unlimited $297, Agency Pro $497 — and each text-back message counts toward your SMS usage limits. Your numbers also need A2P 10DLC registration (or toll-free verification) or the texts can silently fail."
    },
    {
      "question": "How fast does missed-call text-back send the message?",
      "answer": "It fires once the call is marked missed — GoHighLevel recommends a 10-20 second ring timeout first, then the text goes out automatically. Any claim of delivery within an exact number of seconds is a vendor figure, not an official one. The important structural point: the caller has already heard voicemail before the text exists."
    },
    {
      "question": "Which is better for after-hours calls?",
      "answer": "Both work after hours, but they do different things: text-back sends a template text inviting the caller to continue by SMS, while an AI receptionist answers live, answers questions, books appointments, and can escalate an emergency to an on-call human. For emergency-driven businesses like HVAC and plumbing, live answering with keyword escalation is the safer after-hours layer."
    },
    {
      "question": "Can I use both an AI receptionist and text-back together?",
      "answer": "Yes — and it's the strongest setup. The AI receptionist answers in two rings and books on the first call, so very few calls are ever missed; when one genuinely is, text-back sends the safety-net SMS and the agent can even place an outbound call-back. Agencies can run this whole flow white-labeled in each client's sub-account from $99/month."
    },
    {
      "question": "Does missed-call text-back actually recover leads?",
      "answer": "Honestly: nobody has published reliable primary research on recovery rates. The 'recovers 20-35% of leads' figure circulating in comparison articles is an unsourced vendor claim, and the '85% of callers won't call back' stat has no original source at all. What is well documented is speed-to-lead: the primary 2007 Oldroyd study found leads contacted within five minutes were roughly 100x more likely to connect than those contacted 30 minutes later — which is an argument for answering the call live, not just texting it back."
    }
  ],
  "ai-receptionist-call-recording-laws": [
    {
      "question": "Is it legal to use an AI receptionist for my business?",
      "answer": "Yes. No federal US law prohibits answering your own inbound calls with an AI receptionist. The FCC's February 2024 ruling on AI-generated voices regulates calls your system makes (outbound), not calls it answers. The rules that do apply to inbound use: state call-recording consent laws, the FTC's ban on impersonating people or businesses, and a growing set of state AI-disclosure laws like Utah's."
    },
    {
      "question": "Do I have to tell callers they're talking to an AI?",
      "answer": "As of September 2026, no federal rule requires AI disclosure on inbound calls. But Utah requires disclosure when consumers ask (and at the outset for regulated occupations), Colorado phases in a general disclosure duty on June 30, 2026, and California requires verbal AI disclaimers in healthcare patient communications. The best practice is simple: a one-line notice at the start of the call — 'this call may be recorded and may be answered by an automated assistant' — which also satisfies state recording-consent exposure."
    },
    {
      "question": "Which states require all-party consent to record phone calls?",
      "answer": "The commonly counted list is 13 states: California, Connecticut, Delaware, Florida, Illinois, Maryland, Massachusetts, Michigan, Montana, Nevada, New Hampshire, Pennsylvania, and Washington — plus Oregon's hybrid rule (one-party by telephone, all-party in person) and Vermont under common law. In the remaining states, federal-style one-party consent applies. We verified the statute text for 8 of these in our guide and mark which ones; confirm your own state's current statute before standardizing on recording."
    },
    {
      "question": "Does my AI receptionist vendor need to sign a HIPAA BAA?",
      "answer": "If your practice is a HIPAA covered entity and the vendor creates, receives, maintains, or transmits protected health information on your behalf — which an AI receptionist handling patient calls does — the vendor is a business associate and a written Business Associate Agreement is required (45 CFR 164.502(e) and 164.504(e)). Ask for the BAA before going live, not after the first patient call."
    },
    {
      "question": "What did the FCC's 2024 AI voice ruling actually change?",
      "answer": "The ruling (FCC 24-17, February 8, 2024) confirmed that AI-generated voices count as 'artificial or prerecorded voice' under the existing TCPA. That means any call your system MAKES with an AI voice to cell phones needs prior express consent — written consent for marketing — with penalties of $500 per call, up to $1,500 for willful violations, plus calling-hour and do-not-call rules. It did not change anything about answering inbound calls with an AI receptionist."
    }
  ],
  "ai-receptionist-cost": [
    {
      "question": "How much does an AI receptionist cost per month?",
      "answer": "Most AI receptionists cost between $14 and $65 per month on budget self-serve plans, $200 to $600 per month on mid-tier business plans, and up to $3,000 per month at the premium end. Fusion Calling business plans start at $149 per month with 500 included minutes and scale to $497 per month with 2,100 minutes, with no setup fee."
    },
    {
      "question": "Is there a per-minute AI receptionist pricing model?",
      "answer": "Yes. Many vendors price by usage instead of a flat monthly fee, and human answering services typically charge $1 to $3 per minute. The trap is overage pricing: once you exceed your included minutes, extra time typically runs $0.10 to $0.50 per minute, so a cheap-looking plan can balloon on a busy month."
    },
    {
      "question": "What hidden costs should I watch for?",
      "answer": "Four are most common: setup fees (typically $250 to $5,000 at some vendors), per-minute overage charges beyond your included minutes, integration or add-on fees (typically $50 to $500 per month for CRM and calendar connections), and compliance or premium-voice add-ons. Fusion Calling charges $0 setup and requires no long-term contracts."
    },
    {
      "question": "How much does a human receptionist cost compared to an AI receptionist?",
      "answer": "A full-time human receptionist typically costs $3,000 or more per month in salary alone, before benefits, and covers roughly 40 hours per week. An AI receptionist runs a flat $14 to $600 per month for most businesses and answers 24/7. Many teams use AI for routine calls and keep humans for judgment calls."
    },
    {
      "question": "Can agencies resell AI receptionists for a profit?",
      "answer": "Yes. Fusion Calling's white-label partner plans start at $99 per month (Starter, 6 sub-accounts), scale to $299 for Growth and $499 for Scale with unlimited sub-accounts, and launch in 24 hours with Stripe rebilling. You package the platform at your own prices and keep 100% of client revenue."
    }
  ],
  "ai-voice-agents-for-small-business": [
    {
      "question": "Can a small business afford AI voice?",
      "answer": "Yes. Fusion Calling business plans start at $149/mo with $0 setup and no contracts, including 500 minutes, calendar booking, and SMS. Most small businesses find a single saved job per month covers the subscription, since missed calls that once went to voicemail now get answered, booked, and followed up automatically."
    },
    {
      "question": "Do callers know it's AI?",
      "answer": "Modern AI voice agents sound natural and conversational, so most callers simply continue the conversation without noticing. Voices, greetings, and scripts are customized to your business, and you can always offer a live handoff — the agent transfers to a human with full context whenever a caller asks or a situation needs judgment."
    },
    {
      "question": "Can my agency offer this to clients?",
      "answer": "Yes. Fusion Calling's white-label partner plans start at $99/mo for 6 sub-accounts, letting you resell voice AI under your own brand, domain, and pricing. Each client gets a branded portal with their own agents and billing while you manage everything centrally — and you keep 100% of what you charge them."
    },
    {
      "question": "What's the ROI for a typical small business?",
      "answer": "A 5-person HVAC company missing 15 calls a week at a $500 average job value leaves roughly $390K a year on the table. At $149/mo, an AI agent capturing the majority of those calls recovers a multiple of its cost — which is why busy trades routinely report ROI figures above 2000% once after-hours and overflow calls are covered."
    },
    {
      "question": "Which industries benefit most from AI voice agents?",
      "answer": "Home services like HVAC, plumbing, and roofing see the fastest payback, followed by dental and healthcare practices, legal offices, real estate teams, automotive shops, and restaurants. The common thread is simple: high call volumes, after-hours inquiries, and clear revenue per captured lead — anywhere a missed call means a lost customer, AI voice pays for itself."
    },
    {
      "question": "Can AI agents book appointments into my calendar?",
      "answer": "Yes. Fusion Calling agents check real-time availability across Google Calendar, Outlook, and Cal.com, then book, reschedule, or cancel appointments directly during the call. Confirmations and reminders go out automatically by SMS, which cuts no-shows without your staff lifting a finger."
    },
    {
      "question": "What happens if the AI can't handle a call?",
      "answer": "The agent transfers gracefully to a human with full context — a call summary, captured details, and the reason for transfer. You define the escalation rules up front: complex questions, emotional callers, specific keywords, or VIP clients all route to your team instantly while routine calls stay automated."
    },
    {
      "question": "How quickly can a small business deploy an AI voice agent?",
      "answer": "With done-with-you onboarding, most small businesses go live in 7–14 days. You pick a proven template for your trade, customize the greeting and booking rules, connect your phone number and calendar, then test with real calls before customers hear a thing. No engineering or IT staff required at any step."
    },
    {
      "question": "What does an AI voice agent cost a small team each month?",
      "answer": "Small teams typically start on the $149/mo business plan, which covers the platform, AI call handling, transcripts, calendar booking, and 500 included minutes. There is $0 setup and no contract. Since one recovered job a month usually exceeds $149 in value, the plan tends to pay for itself quickly."
    },
    {
      "question": "How long does launch take for a small team with no tech staff?",
      "answer": "Most non-technical teams launch in 7–14 days with done-with-you onboarding. You pick a template for your trade, we help connect your number and calendar, you test with real calls before going live — and the team tunes greetings and booking rules with you until every call sounds right."
    }
  ],
  "gohighlevel-alternative-for-voice-ai": [
    {
      "question": "Does Fusion Calling really replace GoHighLevel?",
      "answer": "For voice-first agencies, yes — Fusion Calling includes a built-in CRM for lead management alongside your AI voice agents, white-label client portals, and billing. If a client still needs GoHighLevel's full marketing suite (email funnels, SMS campaigns, pipeline automations), you can integrate Fusion Calling with GoHighLevel via API and webhooks instead of replacing it."
    },
    {
      "question": "Is the CRM included in the price?",
      "answer": "Yes — lead management is built in on every plan. Contacts, call logs, transcripts, lead statuses, notes, and the lead pipeline are all part of the Fusion Calling platform, with no separate CRM subscription required."
    },
    {
      "question": "Can I bring leads over from GoHighLevel?",
      "answer": "Yes. Contacts can be imported into the Fusion Calling CRM directly, or you can keep GoHighLevel and sync data back and forth using Fusion Calling's API and webhooks, which connect to 2,200+ apps."
    },
    {
      "question": "What's the cost difference vs GoHighLevel?",
      "answer": "GoHighLevel starts at $297/mo for agencies. Fusion Calling starts at $99/mo with voice AI, CRM, portals, and white-label included — no per-feature upsells. Voice-first agencies typically save 60%+ by consolidating."
    },
    {
      "question": "Does the built-in CRM support pipelines and automations?",
      "answer": "The Fusion Calling CRM includes lead pipelines, status tracking, notes, and webhook-based automations. For advanced marketing automations (email sequences, SMS drips), you can layer GoHighLevel on top via integration."
    },
    {
      "question": "Can I use Fusion Calling alongside GoHighLevel?",
      "answer": "Yes. Many agencies use Fusion Calling for voice AI + CRM and keep GoHighLevel for marketing automations. Webhooks sync calls, leads, and appointments bidirectionally."
    },
    {
      "question": "Is the CRM white-labeled too?",
      "answer": "Yes. The entire Fusion Calling platform — voice agents, CRM, client portals, billing — is white-labeled under your agency brand. Your clients see your logo, your domain, your pricing."
    }
  ],
  "gohighlevel-white-label-voice": [
    {
      "question": "Do I have to leave GoHighLevel to use Fusion Calling?",
      "answer": "No. Fusion Calling integrates with GoHighLevel via API and webhooks. You keep GoHighLevel as your CRM and add Fusion Calling as a dedicated, white-label voice AI layer that syncs calls and leads back into your GHL workflows."
    },
    {
      "question": "Can I white-label voice AI for my GoHighLevel clients?",
      "answer": "Yes. Fusion Calling lets you offer voice AI under your own brand with branded portals, your own domain, and your own pricing. You manage each client in a separate sub-account and bill them however you choose."
    },
    {
      "question": "Does Fusion Calling sync calls and leads back to GoHighLevel?",
      "answer": "Yes. Fusion Calling connects to GoHighLevel through API and webhooks, so call outcomes, captured leads, and appointment activity flow back into your GHL CRM and automations for follow-up."
    },
    {
      "question": "Can I use Fusion Calling's built-in CRM instead of GoHighLevel?",
      "answer": "Yes. Fusion Calling includes a built-in lead management CRM on every plan — contacts, call logs, transcripts, lead statuses, notes, and pipeline — with no separate GHL subscription required for voice-first agencies."
    },
    {
      "question": "What data syncs between Fusion Calling and GoHighLevel?",
      "answer": "Inbound/outbound call logs, recordings, transcripts, captured lead data (name, phone, email, custom fields), appointment bookings, call outcomes (qualified, booked, voicemail, etc.), and lead status changes."
    },
    {
      "question": "Does this work with GHL sub-accounts for my clients?",
      "answer": "Yes. Each Fusion Calling sub-account can webhook into a corresponding GHL sub-account, so your clients see their voice AI activity in their own GHL workspace while you manage everything centrally."
    },
    {
      "question": "How long does the integration take to set up?",
      "answer": "API + webhook configuration typically takes 1-2 hours. Our team provides done-with-you setup guidance as part of the guided 24-hour launch."
    }
  ],
  "how-to-automate-phone-calls-with-ai": [
    {
      "question": "How much does it cost to start automating phone calls with AI?",
      "answer": "Fusion Calling plans start at $99/month for the Starter plan with 6 sub-accounts, then $299/month for Growth and $499/month for Scale. Voice minutes are billed by the voice provider on top of the platform plan. See the pricing page for current plan details."
    },
    {
      "question": "How long does it take to launch your first AI call agent?",
      "answer": "Most small teams go live in days, often within about a week, when they start with one use case. Guided onboarding covers connecting your number, calendar, and CRM, plus testing before your first live call."
    },
    {
      "question": "What happens when the AI can't handle a call?",
      "answer": "You set handoff rules before launch. When a call hits a limit — an upset caller, a pricing dispute, or anything outside the script — the agent transfers to a person, takes a message, or books a follow-up. Every call is logged with a transcript so your team can follow up."
    },
    {
      "question": "How is AI call automation different from IVR?",
      "answer": "IVR is the old press-1-for-sales phone menu. Callers push buttons and wait through rigid options. AI call automation holds a real spoken conversation: it understands plain speech, answers questions, books times, and routes edge cases to a person."
    },
    {
      "question": "Are AI phone calls recorded, and do I need consent?",
      "answer": "Calls can be recorded and transcribed, and recording and consent rules differ by state and country. Common practice is to play a notice that the call may be recorded and to get consent where required. Ask legal counsel about the rules that apply to your business before you launch."
    }
  ],
  "how-to-start-a-voice-ai-agency": [
    {
      "question": "Do I need to know how to code to start a voice AI agency?",
      "answer": "No. With a white-label platform like Fusion Calling, you get no-code agent building plus done-with-you onboarding. You can launch a fully branded voice AI agency without writing a single line of code."
    },
    {
      "question": "How much does it cost to start a voice AI agency?",
      "answer": "You can start from $99/month with $0 setup and a 3-day free trial. The only cost is your monthly platform subscription ($99-$499/mo depending on tier), and you keep 100% of what you charge your clients."
    },
    {
      "question": "Which voice providers can I offer my clients?",
      "answer": "Through Fusion Calling you can offer Vapi, Retell AI, and ElevenLabs. The multi-provider platform lets you match each client with the best voice engine for their use case, all under your own brand."
    },
    {
      "question": "How long does it take to launch my first client?",
      "answer": "Most partners get a production-ready agent live in 24 hours with done-with-you onboarding. No code required — just pick a niche template, customize the greeting and qualification questions, connect a number, and test."
    },
    {
      "question": "What niche should I pick for my voice AI agency?",
      "answer": "The highest-ROI verticals are real estate, dental/healthcare, insurance, home services (HVAC, plumbing), and legal. These industries have high call volumes, clear pain points (missed calls = lost revenue), and budget for automation."
    },
    {
      "question": "Can I white-label the entire platform including the client portal?",
      "answer": "Yes. Fusion Calling provides a fully white-label dashboard, client portals, custom domain (app.youragency.com), your logo, and your pricing. Your clients never see the Fusion Calling brand."
    },
    {
      "question": "How do I bill my clients?",
      "answer": "Fusion Calling includes Stripe rebilling so you set your own pricing, create packages, and bill clients directly. You keep 100% of client revenue — the platform only charges your flat monthly subscription."
    },
    {
      "question": "What if a client needs GoHighLevel integration?",
      "answer": "Fusion Calling integrates with GoHighLevel via API and webhooks. Calls, leads, and appointments sync back into your client's GHL sub-account so their workflows continue uninterrupted."
    },
    {
      "question": "Is a voice AI agency business profitable?",
      "answer": "Yes. Wholesale platform access starts from $99/month, and typical packaged client pricing runs $297-$497/month. Five clients at $297 covers about $1,485/month in revenue against a $99-$299 platform cost, and the margins stay with you as the reseller."
    }
  ],
  "retell-ai-white-label": [
    {
      "question": "Do I keep my Retell account?",
      "answer": "Yes. You connect your existing Retell API key to Fusion Calling. We layer the white-label agency experience on top of Retell, so your agents, assistants, and configurations carry over without a rebuild."
    },
    {
      "question": "Can I resell Retell under my own brand?",
      "answer": "Yes. That is exactly what Fusion Calling adds. You apply your branding, custom domain, and pricing on top of Retell, then manage and bill clients from a white-label portal that carries your agency's identity."
    },
    {
      "question": "Does Fusion Calling support other providers too?",
      "answer": "Yes. Fusion Calling works with Vapi, Retell AI, and ElevenLabs. You can choose the best provider per client or use case without rebuilding your white-label setup."
    },
    {
      "question": "Can I migrate existing Retell agents to Fusion Calling?",
      "answer": "Yes. Your Retell assistants and configurations remain in your Retell account. Fusion Calling manages the client-facing layer — branding, portals, billing — while Retell continues to power the actual conversations."
    },
    {
      "question": "Does Fusion Calling mark up Retell's per-minute costs?",
      "answer": "No. You bring your own Retell API key and pay Retell directly for usage. Fusion Calling charges a flat monthly platform fee ($99-$499/mo) with no markup on voice minutes."
    },
    {
      "question": "How long does it take to white-label my Retell setup?",
      "answer": "Most partners launch in 24 hours with our done-with-you onboarding. Connect your Retell API key, apply your branding, and start reselling Retell under your own brand."
    },
    {
      "question": "Can I use Retell for some clients and Vapi for others?",
      "answer": "Absolutely. Fusion Calling unifies Vapi, Retell AI, and ElevenLabs under one white-label dashboard. Assign the best engine per client — Retell for natural support flows, Vapi for cost-sensitive outbound, ElevenLabs for premium voices."
    },
    {
      "question": "How much does it cost to resell Retell agents under my brand?",
      "answer": "Plans start at $99/month for 6 sub-accounts. You import your existing Retell agents with your API key, so there is no rebuild, and you set your own client prices on top."
    }
  ],
  "vapi-vs-retell-vs-elevenlabs": [
    {
      "question": "Which voice AI provider is best?",
      "answer": "It depends on the use case. Vapi is great for building flexible custom agents, Retell AI excels at low-latency conversational quality, and ElevenLabs offers best-in-class realistic voices. That's exactly why Fusion Calling supports all three — so you can match each client to the best engine."
    },
    {
      "question": "Can I use more than one provider?",
      "answer": "Yes. Fusion Calling lets you use Vapi, Retell, and ElevenLabs and match each client to the best engine for their use case — for example, ElevenLabs voices for a premium receptionist and Vapi for a cost-sensitive outbound campaign."
    },
    {
      "question": "Do I manage separate accounts for each provider?",
      "answer": "You bring your own provider API keys, and Fusion Calling unifies Vapi, Retell, and ElevenLabs under one white-label dashboard so you manage every client and every engine from a single place."
    },
    {
      "question": "What is the latency difference between providers?",
      "answer": "Retell AI typically achieves the lowest end-to-end latency (sub-500ms) due to its speech-to-speech architecture. Vapi and ElevenLabs (when used via TTS) are slightly higher but still conversational. Fusion Calling lets you pick the engine that meets your latency requirements per client."
    },
    {
      "question": "Can I switch providers for a client after launch?",
      "answer": "Yes. Since Fusion Calling is a multi-provider layer, you can change the underlying voice engine for any client without rebuilding their agent or changing your white-label setup."
    },
    {
      "question": "Which provider is best for outbound campaigns?",
      "answer": "Vapi is generally preferred for high-volume outbound campaigns due to its flexible developer platform, cost efficiency at scale, and robust tool calling for custom workflows."
    },
    {
      "question": "Which provider has the most realistic voices?",
      "answer": "ElevenLabs is widely recognized for the most realistic, expressive TTS voices with voice cloning and multilingual support — ideal for premium receptionists and branded experiences."
    }
  ],
  "vapi-white-label-platform": [
    {
      "question": "Do I need to leave Vapi to use Fusion Calling?",
      "answer": "No. Fusion Calling is built to layer on top of your existing Vapi account. Bring your Vapi account and API key, connect it once, and Fusion Calling adds the white-label agency layer — branding, client portals, sub-accounts, and billing — while Vapi keeps powering the calls."
    },
    {
      "question": "Can I resell Vapi under my own brand?",
      "answer": "Yes — that is exactly what Fusion Calling adds. Vapi is excellent voice AI infrastructure, but on its own it is not white-label or resellable. Fusion Calling turns Vapi into a branded, sellable product with your logo, your custom domain, your client portals, and your pricing. You keep 100% of what you charge clients."
    },
    {
      "question": "How long does setup take?",
      "answer": "Most partners launch in 24 hours thanks to our done-with-you onboarding. Instead of spending months building a custom $45K white-label app, you connect your Vapi account, apply your branding, and start reselling within 24 hours."
    },
    {
      "question": "Can I use other providers alongside Vapi?",
      "answer": "Yes. Fusion Calling supports Vapi, Retell AI, and ElevenLabs simultaneously. You can assign different providers to different clients based on their needs — all managed from one white-label dashboard."
    },
    {
      "question": "Does Fusion Calling mark up Vapi's per-minute costs?",
      "answer": "No. You bring your own Vapi API key and pay Vapi directly for usage. Fusion Calling charges a flat monthly platform fee ($99-$499/mo) with no markup on voice minutes."
    },
    {
      "question": "Can I migrate existing Vapi agents to Fusion Calling?",
      "answer": "Yes. Your Vapi assistants, phone numbers, and configurations remain in your Vapi account. Fusion Calling manages the client-facing layer — branding, portals, billing — while Vapi continues to power the actual calls."
    },
    {
      "question": "What happens if Vapi changes their API?",
      "answer": "Fusion Calling maintains the integration layer and updates it proactively when providers release API changes. Your white-label operation stays stable without you needing to rewrite code."
    }
  ],
  "voice-ai-security-compliance": [
    {
      "question": "How is call audio encrypted at rest and in transit for voice AI platforms?",
      "answer": "In transit, reputable voice AI platforms encrypt call audio with TLS for signaling and SRTP for media, so streams cannot be read in motion. At rest, recordings and transcripts are typically protected with AES-256 encryption, scoped access controls, and retention policies you configure. Exact coverage varies by provider and telephony carrier — review each vendor's security documentation and confirm certifications like SOC 2 before committing."
    },
    {
      "question": "How long should call analytics data be kept under GDPR?",
      "answer": "GDPR says keep personal data only as long as you need it. For call analytics, that means setting a clear retention period, deleting recordings and transcripts on schedule, and honoring deletion requests. Ask your vendor what retention controls they offer."
    },
    {
      "question": "What rules apply to outbound dialing and call recording?",
      "answer": "In the US, the TCPA requires consent for autodialed and prerecorded calls, and many states require all parties to consent to recording. Rules differ by country and state, so check consent, calling-hour, and do-not-call requirements before you launch outbound campaigns."
    },
    {
      "question": "How does interruption handling (barge-in) work in voice AI?",
      "answer": "Barge-in lets the agent notice when a caller starts talking over it, stop speaking, and listen. Good systems use full-duplex audio so both sides can be heard at once. Test it on a live call: interrupt the agent mid-sentence and see how fast and politely it yields."
    },
    {
      "question": "How can you detect synthetic voices and prevent misuse?",
      "answer": "Common safeguards include disclosing that the caller is speaking with an AI, keeping audit logs of calls, restricting voice cloning to consented voices, and using provider abuse monitoring. Ask your vendor which of these controls they support."
    },
    {
      "question": "How can you tell a synthetic voice on a support call?",
      "answer": "Start by asking for clear disclosure, so every caller knows they are speaking with an AI. On the call, listen for flat tone, odd pauses, or answers that ignore interruptions, and flag them for human review. Keep recordings and logs so a person can check anything that sounds off."
    },
    {
      "question": "What TCPA and consent rules apply to AI outbound calls?",
      "answer": "For AI outbound calls, get consent before you dial, honor opt-outs right away, and play a short notice when a call is recorded. Keep logs of consent, call times, and do-not-call checks for every campaign. Rules differ by state and country, so ask counsel before you launch."
    },
    {
      "question": "Which CPaaS features matter for AI voice calling?",
      "answer": "Look for an outbound dialing API that is simple to set up, with clear docs for starting and tracking calls. Make sure call recording can be turned on or off per use case, with transcripts tied to each call. Finally, check for GDPR retention controls like auto-delete and per-caller deletion."
    }
  ],
  "will-ai-replace-receptionists": [
    {
      "question": "Will AI replace receptionists?",
      "answer": "Mostly no. AI reliably takes over routine call work — answering, booking, reminders, and common questions — while humans keep judgment calls, sensitive conversations, and relationships. The realistic 2026 picture is a hybrid: the AI absorbs the repetitive volume, the role shifts toward higher-value work, and businesses that pair the two capture more calls without losing the human touch."
    },
    {
      "question": "Are AI receptionists worth it for small businesses?",
      "answer": "Usually yes when missed calls cost revenue. Industry estimates suggest small businesses miss around 60% of inbound calls, and AI receptionist plans run from $149 to $497 per month versus $3,000 or more for a full-time hire. If your team cannot answer every call in two rings, a handful of captured appointments typically covers the subscription."
    },
    {
      "question": "Can AI answer phone calls as well as a human?",
      "answer": "For routine calls, close enough that most callers are fine with it: modern voice agents respond in under a second, book appointments accurately, and answer common questions consistently. They still struggle with emotional conversations, heavy background noise, and genuinely unusual requests — which is why well-configured deployments transfer those moments to a human with the transcript attached."
    },
    {
      "question": "What tasks should stay with human staff?",
      "answer": "Keep judgment calls, sensitive or emotional conversations, price negotiations, complaints, loyal-customer relationships, and unusual requests with people. AI handles the repetitive volume — answering, booking, reminders, FAQs, and messages — while humans handle the moments where empathy, discretion, or negotiation changes the outcome. That split is what the most successful deployments in 2026 converge on."
    },
    {
      "question": "How do businesses introduce an AI receptionist to callers?",
      "answer": "Simply and honestly. A short disclosure such as 'This is the automated assistant for [business]' at the start of the call, consistent branding, and an instant path to a human when asked. Callers adapt quickly to good AI, and clear disclosure builds trust — some jurisdictions also require it for call recording, so check local rules before launch."
    }
  ]
};
