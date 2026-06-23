export type GlossaryCategory =
  | "Core AI & Voice"
  | "Speech Technology"
  | "Telephony"
  | "Conversational Design"
  | "Compliance & Security"
  | "Business & Operations";

export type GlossaryTerm = {
  term: string;
  category: GlossaryCategory;
  definition: string;
  whyItMatters: string;
  related?: string[];
};

export function slugifyTerm(term: string): string {
  return term
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const glossaryTerms: GlossaryTerm[] = [
  // ---------- Core AI & Voice ----------
  {
    term: "AI Voice Agent",
    category: "Core AI & Voice",
    definition:
      "An AI voice agent is a software system that holds a spoken conversation with a caller, understanding speech and responding with synthesized voice in real time. It combines speech recognition, a language model, and text-to-speech to handle tasks like answering questions, qualifying leads, and booking appointments without a human on the line.",
    whyItMatters:
      "Voice agents let businesses answer every call instantly and operate 24/7, which is the core value agencies resell through a white-label platform.",
    related: ["Conversational AI", "AI Receptionist", "Large Language Model"],
  },
  {
    term: "AI Receptionist",
    category: "Core AI & Voice",
    definition:
      "An AI receptionist is a voice agent deployed to answer inbound calls for a business, greet callers, route them, answer common questions, and book appointments. It replaces or augments a human front-desk role.",
    whyItMatters:
      "The receptionist use case is the most common and fastest-to-deploy voice AI offering, making it an ideal first product for a new agency.",
    related: ["AI Voice Agent", "Inbound Calls", "Interactive Voice Response"],
  },
  {
    term: "Conversational AI",
    category: "Core AI & Voice",
    definition:
      "Conversational AI is the broad field of technology that enables machines to understand and participate in human-like dialogue, across voice and text. It spans speech recognition, natural language understanding, dialogue management, and response generation.",
    whyItMatters:
      "Understanding conversational AI helps agencies position voice agents as a category, not a novelty, when selling to buyers.",
    related: ["AI Voice Agent", "Natural Language Processing", "Large Language Model"],
  },
  {
    term: "Large Language Model",
    category: "Core AI & Voice",
    definition:
      "A large language model (LLM) is an AI system trained on vast amounts of text that can understand and generate human language. In voice AI, the LLM interprets what a caller says and decides how the agent should respond.",
    whyItMatters:
      "The LLM is the reasoning brain of a voice agent; choosing and configuring it well drives conversation quality and accuracy.",
    related: ["Natural Language Processing", "Prompt Engineering", "Function Calling"],
  },
  {
    term: "Natural Language Processing",
    category: "Core AI & Voice",
    definition:
      "Natural language processing (NLP) is the branch of AI focused on interpreting and generating human language. It powers intent recognition, entity extraction, and the language understanding behind voice agents.",
    whyItMatters:
      "NLP quality determines how naturally and accurately an agent understands real callers, including accents and phrasing.",
    related: ["Large Language Model", "Intent Recognition", "Named Entity Recognition"],
  },
  {
    term: "Voice Bot",
    category: "Core AI & Voice",
    definition:
      "A voice bot is an automated system that interacts with users through spoken language, typically over the phone or through a device. The term is often used interchangeably with voice agent, though voice bot can imply simpler, rule-based systems.",
    whyItMatters:
      "Modern LLM-powered voice agents far outperform older rule-based voice bots, which is a key selling point over legacy IVR systems.",
    related: ["AI Voice Agent", "Interactive Voice Response", "Conversational AI"],
  },

  // ---------- Speech Technology ----------
  {
    term: "Speech-to-Text",
    category: "Speech Technology",
    definition:
      "Speech-to-text (STT), also called automatic speech recognition, is the technology that converts spoken words into written text. In a voice agent, STT transcribes what the caller says so the system can understand and act on it.",
    whyItMatters:
      "STT accuracy directly affects whether the agent understands the caller, especially in noisy environments or with accents.",
    related: ["Automatic Speech Recognition", "Text-to-Speech", "Transcription"],
  },
  {
    term: "Automatic Speech Recognition",
    category: "Speech Technology",
    definition:
      "Automatic speech recognition (ASR) is the technology, powered by acoustic and language models, that converts spoken audio into text. It is the technical foundation beneath speech-to-text.",
    whyItMatters:
      "Higher-quality ASR providers like Deepgram improve recognition accuracy and reduce costly misunderstandings in automated calls.",
    related: ["Speech-to-Text", "Deepgram", "Transcription"],
  },
  {
    term: "Text-to-Speech",
    category: "Speech Technology",
    definition:
      "Text-to-speech (TTS) is the technology that converts written text into spoken audio. In voice AI, TTS generates the agent's voice responses, and modern neural TTS produces highly natural, human-like speech.",
    whyItMatters:
      "TTS quality shapes how human and trustworthy the agent sounds, which affects caller experience and conversion.",
    related: ["Synthetic Voice", "Voice Cloning", "ElevenLabs"],
  },
  {
    term: "Voice Cloning",
    category: "Speech Technology",
    definition:
      "Voice cloning is the technology that creates a synthetic voice modeled on a specific person's speech. Providers like ElevenLabs can generate custom voices for branded, consistent agent personas.",
    whyItMatters:
      "Custom voices let agencies deliver a distinctive, on-brand sound for each client, a premium differentiator.",
    related: ["Text-to-Speech", "ElevenLabs", "Synthetic Voice"],
  },
  {
    term: "Synthetic Voice",
    category: "Speech Technology",
    definition:
      "A synthetic voice is an artificially generated voice produced by text-to-speech or voice cloning systems, designed to sound natural and human-like rather than robotic.",
    whyItMatters:
      "Realistic synthetic voices are what make modern voice agents feel human enough to satisfy callers and close conversations.",
    related: ["Text-to-Speech", "Voice Cloning", "ElevenLabs"],
  },
  {
    term: "Latency",
    category: "Speech Technology",
    definition:
      "Latency is the delay between a caller finishing a phrase and the voice agent beginning its response. Lower latency creates a more natural, real-time conversation, while high latency causes awkward pauses.",
    whyItMatters:
      "Latency is one of the most important quality metrics in voice AI; sub-second response times feel conversational, while delays frustrate callers.",
    related: ["Endpointing", "Real-Time Processing", "Full-Duplex Communication"],
  },
  {
    term: "Barge-In",
    category: "Speech Technology",
    definition:
      "Barge-in is the ability of a voice agent to detect and respond when a caller interrupts while the agent is still speaking, pausing its own speech to yield the floor, just as humans do.",
    whyItMatters:
      "Barge-in support makes conversations feel natural and polite, a key sign of a high-quality voice agent.",
    related: ["Full-Duplex Communication", "Turn-Taking", "Latency"],
  },
  {
    term: "Full-Duplex Communication",
    category: "Speech Technology",
    definition:
      "Full-duplex communication means audio can be sent and received simultaneously, so both parties can speak and be heard at the same time. This enables natural interruptions during a call.",
    whyItMatters:
      "Full-duplex is what allows barge-in and overlapping speech, making agent conversations feel genuinely interactive.",
    related: ["Barge-In", "Turn-Taking", "WebRTC"],
  },
  {
    term: "Endpointing",
    category: "Speech Technology",
    definition:
      "Endpointing is the system's ability to detect when a caller has finished speaking so it can begin responding. Accurate endpointing avoids premature replies and awkward silences.",
    whyItMatters:
      "Good endpointing keeps conversations flowing naturally and prevents the agent from cutting callers off or waiting too long.",
    related: ["Latency", "Turn-Taking", "Automatic Speech Recognition"],
  },
  {
    term: "Turn-Taking",
    category: "Speech Technology",
    definition:
      "Turn-taking is the natural back-and-forth rhythm of a conversation, where participants alternate between speaking and listening. Voice agents manage turn-taking to keep exchanges smooth and human-like.",
    whyItMatters:
      "Natural turn-taking is a hallmark of high-quality voice AI and a major factor in caller satisfaction.",
    related: ["Barge-In", "Endpointing", "Full-Duplex Communication"],
  },
  {
    term: "Wake Word Detection",
    category: "Speech Technology",
    definition:
      "Wake word detection is the ability of a voice system to recognize a specific trigger word or phrase that activates it, commonly used in smart speakers and assistants.",
    whyItMatters:
      "Wake words matter for hands-free and embedded voice experiences, though phone-based agents typically engage on call connect instead.",
    related: ["Voice User Interface", "Hotword Detection", "Natural Language Processing"],
  },
  {
    term: "Hotword Detection",
    category: "Speech Technology",
    definition:
      "Hotword detection, similar to wake word detection, is the recognition of a specific phrase that signals the system to start listening or take an action.",
    whyItMatters:
      "Hotword capabilities enable always-on voice features in apps and devices beyond traditional phone calls.",
    related: ["Wake Word Detection", "Keyword Spotting", "Voice User Interface"],
  },
  {
    term: "Keyword Spotting",
    category: "Speech Technology",
    definition:
      "Keyword spotting is the technique of identifying specific words or phrases within continuous speech, used for triggering actions, routing calls, or detecting topics.",
    whyItMatters:
      "Keyword spotting helps agents recognize intent-critical phrases, like an emergency mention, to route calls correctly.",
    related: ["Intent Recognition", "Wake Word Detection", "Natural Language Processing"],
  },
  {
    term: "Noise Suppression",
    category: "Speech Technology",
    definition:
      "Noise suppression is audio processing that reduces background noise to improve speech clarity and recognition accuracy, important when callers are in noisy environments.",
    whyItMatters:
      "Effective noise suppression keeps recognition accurate on mobile and outdoor calls where background sound is unpredictable.",
    related: ["Automatic Speech Recognition", "Audio Processing", "Speech-to-Text"],
  },
  {
    term: "Audio Processing",
    category: "Speech Technology",
    definition:
      "Audio processing encompasses the techniques used to capture, clean, and analyze sound, including noise suppression, echo cancellation, and gain control, all of which improve voice AI quality.",
    whyItMatters:
      "Solid audio processing underpins clear calls and reliable recognition across varied environments and devices.",
    related: ["Noise Suppression", "Automatic Speech Recognition", "Jitter"],
  },
  {
    term: "Transcription",
    category: "Speech Technology",
    definition:
      "Transcription is the process of converting a call's spoken audio into written text. Voice AI platforms transcribe every call for records, search, quality review, and analytics.",
    whyItMatters:
      "Transcripts give agencies and clients a searchable record of every conversation, essential for QA, training, and compliance.",
    related: ["Speech-to-Text", "Call Analytics", "Automatic Speech Recognition"],
  },
  {
    term: "Deepgram",
    category: "Speech Technology",
    definition:
      "Deepgram is a leading automatic speech recognition provider known for fast, accurate, real-time speech-to-text. It is commonly used as the STT engine within voice AI stacks.",
    whyItMatters:
      "Choosing a strong STT provider like Deepgram improves recognition accuracy and responsiveness in production voice agents.",
    related: ["Automatic Speech Recognition", "Speech-to-Text", "ElevenLabs"],
  },
  {
    term: "ElevenLabs",
    category: "Speech Technology",
    definition:
      "ElevenLabs is a widely used AI voice provider known for highly realistic text-to-speech and voice cloning. It supplies premium synthetic voices for conversational AI agents.",
    whyItMatters:
      "ElevenLabs voices are a popular choice for natural-sounding agents, and Fusion Calling supports it as one of its core providers.",
    related: ["Text-to-Speech", "Voice Cloning", "Synthetic Voice"],
  },

  // ---------- Telephony ----------
  {
    term: "Telephony",
    category: "Telephony",
    definition:
      "Telephony refers to the technology and infrastructure for transmitting voice calls over telephone networks. Voice AI platforms connect to telephony providers to place and receive real phone calls.",
    whyItMatters:
      "Telephony is the bridge between AI software and the real phone network; reliability here determines whether calls connect and stay connected.",
    related: ["PSTN", "SIP", "VoIP", "Twilio"],
  },
  {
    term: "VoIP",
    category: "Telephony",
    definition:
      "Voice over Internet Protocol (VoIP) is the technology that delivers voice calls over the internet rather than traditional phone lines, enabling flexible, software-driven calling.",
    whyItMatters:
      "VoIP underpins modern cloud calling and lets voice AI platforms place calls globally without traditional phone hardware.",
    related: ["Telephony", "SIP", "WebRTC"],
  },
  {
    term: "PSTN",
    category: "Telephony",
    definition:
      "The Public Switched Telephone Network (PSTN) is the traditional, worldwide circuit-switched telephone network. Voice AI platforms bridge internet-based calling to the PSTN so agents can reach ordinary phones.",
    whyItMatters:
      "Connecting to the PSTN is what allows an AI agent to call or receive calls from any standard phone number.",
    related: ["Telephony", "VoIP", "SIP"],
  },
  {
    term: "SIP",
    category: "Telephony",
    definition:
      "Session Initiation Protocol (SIP) is a signaling protocol used to set up, manage, and tear down voice and video calls over IP networks. It is a backbone standard for VoIP telephony.",
    whyItMatters:
      "SIP connectivity enables flexible call routing and number provisioning for voice AI deployments at scale.",
    related: ["VoIP", "PSTN", "Telephony"],
  },
  {
    term: "WebRTC",
    category: "Telephony",
    definition:
      "Web Real-Time Communication (WebRTC) is a technology that enables real-time voice and video directly in web browsers, commonly used for in-browser voice widgets and click-to-call experiences.",
    whyItMatters:
      "WebRTC lets agencies embed voice agents directly into websites for instant, browser-based calling without plugins.",
    related: ["VoIP", "Full-Duplex Communication", "Telephony"],
  },
  {
    term: "Twilio",
    category: "Telephony",
    definition:
      "Twilio is a cloud communications platform that provides programmable voice, SMS, and telephony APIs. Many voice AI stacks use Twilio or similar carriers for phone numbers and call connectivity.",
    whyItMatters:
      "Twilio-style carriers supply the phone numbers and connectivity that let AI agents place and receive real calls.",
    related: ["Telephony", "VoIP", "PSTN"],
  },
  {
    term: "DTMF",
    category: "Telephony",
    definition:
      "Dual-Tone Multi-Frequency (DTMF) is the technology behind touch-tone keypad input, where pressing a number generates a specific tone. Voice systems can use DTMF for hybrid voice-and-keypad interactions.",
    whyItMatters:
      "DTMF lets callers input information like menu choices or account numbers via keypad alongside voice.",
    related: ["Interactive Voice Response", "Telephony"],
  },
  {
    term: "Interactive Voice Response",
    category: "Telephony",
    definition:
      "Interactive Voice Response (IVR) is the menu-based phone system that greets callers and routes them using voice or keypad inputs. Modern AI-driven IVR replaces rigid menus with natural conversation.",
    whyItMatters:
      "Upgrading legacy IVR to conversational AI is a common, high-value project agencies sell to existing call-handling businesses.",
    related: ["AI Receptionist", "Voice Bot", "DTMF"],
  },
  {
    term: "Jitter",
    category: "Telephony",
    definition:
      "Jitter is the variation in the timing of audio packet delivery over a network. High jitter causes choppy or distorted audio, so managing it is essential for clear voice calls.",
    whyItMatters:
      "Jitter and related network factors affect call quality; robust platforms mitigate them to keep conversations clear.",
    related: ["Audio Processing", "Latency", "VoIP"],
  },
  {
    term: "Inbound Calls",
    category: "Telephony",
    definition:
      "Inbound calls are calls that come into a business from customers or prospects. Voice AI agents handle inbound calls to answer questions, capture leads, and book appointments around the clock.",
    whyItMatters:
      "Capturing every inbound call is the highest-impact use case for most businesses and the easiest ROI story to sell.",
    related: ["Outbound Calls", "AI Receptionist", "Call Analytics"],
  },
  {
    term: "Outbound Calls",
    category: "Telephony",
    definition:
      "Outbound calls are calls placed by a business to customers or prospects, used for lead generation, reminders, follow-ups, surveys, and reactivation campaigns. Voice AI automates these at scale.",
    whyItMatters:
      "Automated outbound campaigns are a powerful growth lever and a premium offering agencies can resell.",
    related: ["Inbound Calls", "Connect Rate", "Call Analytics"],
  },
  {
    term: "Connect Rate",
    category: "Telephony",
    definition:
      "Connect rate is the percentage of outbound call attempts that successfully reach a live person. It is a key metric for outbound campaign effectiveness.",
    whyItMatters:
      "Improving connect rate directly increases the ROI of outbound calling, a measurable benefit agencies can promise.",
    related: ["Outbound Calls", "Call Analytics", "Call Routing"],
  },
  {
    term: "Call Routing",
    category: "Telephony",
    definition:
      "Call routing is the logic that directs incoming calls to the right destination, such as a specific agent, department, or human, based on intent, time, or business rules.",
    whyItMatters:
      "Smart routing ensures callers reach the right handler quickly, improving experience and conversion.",
    related: ["Interactive Voice Response", "Human Handoff", "Connect Rate"],
  },

  // ---------- Conversational Design ----------
  {
    term: "Intent Recognition",
    category: "Conversational Design",
    definition:
      "Intent recognition is the system's ability to identify the goal or purpose behind what a caller says, such as booking an appointment or asking about pricing, so it can respond appropriately.",
    whyItMatters:
      "Accurate intent recognition is what lets a voice agent understand what a caller actually wants and act on it.",
    related: ["Natural Language Processing", "Entity Extraction", "Function Calling"],
  },
  {
    term: "Named Entity Recognition",
    category: "Conversational Design",
    definition:
      "Named Entity Recognition (NER) is the extraction of specific data points from speech, such as names, dates, phone numbers, and amounts, so the agent can capture and act on structured information.",
    whyItMatters:
      "NER enables agents to collect lead details and booking information accurately during a conversation.",
    related: ["Intent Recognition", "Natural Language Processing", "Function Calling"],
  },
  {
    term: "Entity Extraction",
    category: "Conversational Design",
    definition:
      "Entity extraction is the process of identifying and pulling structured values, like a date or a budget figure, out of a caller's free-form speech for use in the conversation or a CRM.",
    whyItMatters:
      "Reliable entity extraction lets agents populate forms, calendars, and CRMs automatically from spoken input.",
    related: ["Named Entity Recognition", "Intent Recognition", "Function Calling"],
  },
  {
    term: "Function Calling",
    category: "Conversational Design",
    definition:
      "Function calling (or tool calling) is the ability of a language model to trigger external actions or APIs during a conversation, such as checking calendar availability, creating a booking, or looking up an account.",
    whyItMatters:
      "Function calling is what turns a chatbot into a working agent that can actually book, update, and retrieve real data.",
    related: ["Large Language Model", "Intent Recognition", "API"],
  },
  {
    term: "Prompt Engineering",
    category: "Conversational Design",
    definition:
      "Prompt engineering is the practice of designing and refining the instructions given to a language model so it behaves correctly, stays on topic, and represents a brand's voice and rules.",
    whyItMatters:
      "Good prompts are the single biggest lever on agent quality, accuracy, and brand consistency.",
    related: ["Large Language Model", "Guardrails", "Context"],
  },
  {
    term: "Guardrails",
    category: "Conversational Design",
    definition:
      "Guardrails are rules and constraints that keep a voice agent's responses safe, on-brand, and within scope, preventing off-topic, inappropriate, or hallucinated answers.",
    whyItMatters:
      "Guardrails protect brand reputation and reduce the risk of agents saying something wrong or out of scope.",
    related: ["Prompt Engineering", "Fallback Strategies", "Human Handoff"],
  },
  {
    term: "Context",
    category: "Conversational Design",
    definition:
      "Context is the information a voice agent remembers across a conversation, including prior statements and situational details, allowing coherent multi-turn dialogue.",
    whyItMatters:
      "Maintaining context is what makes a conversation feel natural and lets the agent handle complex, multi-step requests.",
    related: ["Multi-Turn Conversation", "Dialog Management", "Prompt Engineering"],
  },
  {
    term: "Multi-Turn Conversation",
    category: "Conversational Design",
    definition:
      "A multi-turn conversation is an exchange that spans several back-and-forth turns, requiring the agent to remember context and progress toward a goal across the dialogue.",
    whyItMatters:
      "Real business tasks like booking and qualification are multi-turn, so this capability is essential for useful agents.",
    related: ["Context", "Dialog Management", "Turn-Taking"],
  },
  {
    term: "Dialog Management",
    category: "Conversational Design",
    definition:
      "Dialog management is the control of a conversation's flow and state, deciding what the agent says next based on context, intent, and business rules.",
    whyItMatters:
      "Effective dialog management keeps conversations goal-oriented and prevents agents from going in circles.",
    related: ["Context", "Multi-Turn Conversation", "Intent Recognition"],
  },
  {
    term: "Human Handoff",
    category: "Conversational Design",
    definition:
      "Human handoff is the seamless transfer of a call from an AI agent to a live person when the request is too complex, sensitive, or requires human judgment.",
    whyItMatters:
      "A smooth handoff preserves customer experience and ensures complex issues reach a qualified human when needed.",
    related: ["Call Routing", "Guardrails", "Fallback Strategies"],
  },
  {
    term: "Fallback Strategies",
    category: "Conversational Design",
    definition:
      "Fallback strategies are predefined responses the agent uses when it cannot understand or handle a request, preventing dead ends and keeping the conversation productive.",
    whyItMatters:
      "Good fallbacks prevent frustrating loops and gracefully route callers to help or a human when needed.",
    related: ["Guardrails", "Human Handoff", "Dialog Management"],
  },
  {
    term: "Sentiment Analysis",
    category: "Conversational Design",
    definition:
      "Sentiment analysis is the detection of emotional tone in a caller's speech, allowing the system to gauge satisfaction or frustration and adjust or escalate accordingly.",
    whyItMatters:
      "Sentiment helps identify at-risk or upset callers for escalation and surfaces insights from call analytics.",
    related: ["Call Analytics", "Transcription", "Human Handoff"],
  },
  {
    term: "Voice User Interface",
    category: "Conversational Design",
    definition:
      "A Voice User Interface (VUI) is the design of how people interact with a system through voice, covering prompts, responses, flow, and error handling. Good VUI design makes agents feel natural and easy to use.",
    whyItMatters:
      "VUI quality is a major factor in adoption and satisfaction, distinguishing polished agents from clunky ones.",
    related: ["Conversational AI", "Prompt Engineering", "Turn-Taking"],
  },

  // ---------- Compliance & Security ----------
  {
    term: "HIPAA",
    category: "Compliance & Security",
    definition:
      "The Health Insurance Portability and Accountability Act (HIPAA) is a US law governing the protection of protected health information. Voice AI used in healthcare may require compliant infrastructure and a signed agreement.",
    whyItMatters:
      "Healthcare buyers require HIPAA-aware deployments, so agencies serving medical and dental clients must address it.",
    related: ["Business Associate Agreement", "SOC 2", "GDPR"],
  },
  {
    term: "Business Associate Agreement",
    category: "Compliance & Security",
    definition:
      "A Business Associate Agreement (BAA) is a contract required under HIPAA between a covered entity and a vendor that handles protected health information, defining how that data is safeguarded.",
    whyItMatters:
      "A signed BAA is often a procurement requirement before a healthcare client will sign, making it a deal-closer or deal-breaker.",
    related: ["HIPAA", "SOC 2", "GDPR"],
  },
  {
    term: "SOC 2",
    category: "Compliance & Security",
    definition:
      "SOC 2 is an auditing standard that evaluates a service organization's controls for security, availability, and confidentiality. It is commonly requested in enterprise and regulated procurement.",
    whyItMatters:
      "SOC 2 documentation is frequently required by larger and regulated clients during vendor review.",
    related: ["HIPAA", "Business Associate Agreement", "GDPR"],
  },
  {
    term: "GDPR",
    category: "Compliance & Security",
    definition:
      "The General Data Protection Regulation (GDPR) is the European Union's data privacy law governing how personal data is collected, stored, and processed, with strict consent and rights requirements.",
    whyItMatters:
      "Agencies serving EU clients or callers must ensure their voice AI handling complies with GDPR privacy rules.",
    related: ["HIPAA", "SOC 2", "Data Privacy"],
  },
  {
    term: "TCPA",
    category: "Compliance & Security",
    definition:
      "The Telephone Consumer Protection Act (TCPA) is a US law restricting telemarketing calls, auto-dialed calls, and prerecorded messages, requiring consent and governing outbound calling practices.",
    whyItMatters:
      "TCPA compliance is critical for any outbound calling campaign; agencies must follow consent and dialing rules.",
    related: ["Outbound Calls", "Connect Rate", "GDPR"],
  },
  {
    term: "Data Privacy",
    category: "Compliance & Security",
    definition:
      "Data privacy is the protection of personal information collected during interactions, including call recordings and transcripts, in line with regulations like GDPR and CCPA.",
    whyItMatters:
      "Handling call data responsibly is both a legal requirement and a trust signal for buyers.",
    related: ["GDPR", "HIPAA", "SOC 2"],
  },
  {
    term: "AES-256 Encryption",
    category: "Compliance & Security",
    definition:
      "AES-256 is a strong encryption standard used to secure data both at rest and in transit. It is a common baseline for protecting sensitive call and customer data.",
    whyItMatters:
      "Strong encryption is a standard expectation in vendor security reviews and supports compliance claims.",
    related: ["Data Privacy", "SOC 2", "HIPAA"],
  },

  // ---------- Business & Operations ----------
  {
    term: "White-Label",
    category: "Business & Operations",
    definition:
      "White-labeling is the practice of rebranding a product or service so an agency can sell it under its own brand. In voice AI, it lets agencies offer AI calling with their logo, domain, and pricing, while the underlying platform stays hidden.",
    whyItMatters:
      "White-labeling is the foundation of a voice AI agency, letting you build a branded product without building the technology yourself.",
    related: ["Reseller", "SaaS", "Bring Your Own Key"],
  },
  {
    term: "Reseller",
    category: "Business & Operations",
    definition:
      "A reseller is a partner who sells another company's product or service to end clients, often under their own brand and at their own price. Voice AI resellers keep the margin between their cost and what they charge clients.",
    whyItMatters:
      "Reselling is the business model behind white-label voice AI, and healthy margins can make it a lucrative recurring revenue stream.",
    related: ["White-Label", "Recurring Revenue", "SaaS"],
  },
  {
    term: "Bring Your Own Key",
    category: "Business & Operations",
    definition:
      "Bring Your Own Key (BYOK) is a model where an agency connects its own provider API keys (for example, Vapi or Retell) to a white-label platform, paying the provider directly for usage while the platform adds the management layer.",
    whyItMatters:
      "BYOK gives agencies transparency and control over per-minute costs, a key consideration when comparing platforms.",
    related: ["White-Label", "API", "Reseller"],
  },
  {
    term: "SaaS",
    category: "Business & Operations",
    definition:
      "Software as a Service (SaaS) is a software delivery model where customers pay a recurring subscription to access a cloud-hosted product. White-label voice AI is typically sold as SaaS by agencies to their clients.",
    whyItMatters:
      "The SaaS model creates predictable recurring revenue, which is highly attractive to agencies and their clients.",
    related: ["Recurring Revenue", "White-Label", "Reseller"],
  },
  {
    term: "Recurring Revenue",
    category: "Business & Operations",
    definition:
      "Recurring revenue is income that repeats on a regular basis, such as monthly subscriptions. Voice AI agencies build recurring revenue by charging clients a monthly retainer or subscription.",
    whyItMatters:
      "Recurring revenue is what makes a voice AI agency valuable and predictable, compared to one-off project work.",
    related: ["SaaS", "Reseller", "Churn"],
  },
  {
    term: "Churn",
    category: "Business & Operations",
    definition:
      "Churn is the rate at which clients cancel a subscription over time. Lowering churn is critical to growing and preserving recurring revenue in a voice AI agency.",
    whyItMatters:
      "Managing churn directly affects the long-term value and profitability of an agency's client base.",
    related: ["Recurring Revenue", "SaaS", "Customer Retention"],
  },
  {
    term: "API",
    category: "Business & Operations",
    definition:
      "An Application Programming Interface (API) is a set of rules that lets different software systems communicate. Voice AI platforms expose APIs so agencies can integrate calling, leads, and data with CRMs and other tools.",
    whyItMatters:
      "APIs are what make voice AI integratable with a client's existing tools, a key selling point for agencies.",
    related: ["Webhook", "Function Calling", "CRM Integration"],
  },
  {
    term: "Webhook",
    category: "Business & Operations",
    definition:
      "A webhook is an automated message sent from one system to another when an event occurs, such as a call ending. Voice AI platforms use webhooks to push call outcomes to CRMs and automation tools.",
    whyItMatters:
      "Webhooks let agencies connect call data to downstream workflows, like updating a CRM or triggering follow-ups.",
    related: ["API", "CRM Integration", "Function Calling"],
  },
  {
    term: "CRM Integration",
    category: "Business & Operations",
    definition:
      "CRM integration is the connection between a voice AI platform and a customer relationship management system, so call data, leads, and outcomes flow into the records a business already uses.",
    whyItMatters:
      "Integrating with CRMs like HubSpot or GoHighLevel makes voice AI far more valuable and stickier for clients.",
    related: ["API", "Webhook", "GoHighLevel"],
  },
  {
    term: "Call Analytics",
    category: "Business & Operations",
    definition:
      "Call analytics is the measurement and reporting of call performance, including volume, duration, outcomes, sentiment, and transcripts, giving agencies and clients insight into results.",
    whyItMatters:
      "Analytics are how agencies prove ROI and optimize agent performance for their clients.",
    related: ["Transcription", "Sentiment Analysis", "ROI Tracking"],
  },
  {
    term: "ROI Tracking",
    category: "Business & Operations",
    definition:
      "Return on Investment (ROI) tracking measures the financial return of a voice AI deployment, such as leads captured, appointments booked, or revenue generated relative to cost.",
    whyItMatters:
      "Demonstrating clear ROI is what retains clients and justifies recurring fees in a voice AI agency.",
    related: ["Call Analytics", "Recurring Revenue", "Connect Rate"],
  },
  {
    term: "Customer Retention",
    category: "Business & Operations",
    definition:
      "Customer retention is the ability to keep clients over time. In voice AI, retention is driven by measurable results, reliable service, and ongoing value beyond the initial setup.",
    whyItMatters:
      "Strong retention compounds recurring revenue and lowers the cost of growth for an agency.",
    related: ["Churn", "Recurring Revenue", "ROI Tracking"],
  },
  {
    term: "Vapi",
    category: "Business & Operations",
    definition:
      "Vapi is a popular voice AI platform and API for building and deploying voice agents. It is one of the core providers supported by Fusion Calling and many white-label wrappers in the market.",
    whyItMatters:
      "Vapi is a leading underlying engine; supporting it gives agencies flexibility and access to a mature provider.",
    related: ["Retell AI", "ElevenLabs", "White-Label"],
  },
  {
    term: "Retell AI",
    category: "Business & Operations",
    definition:
      "Retell AI is a conversational voice AI platform used to build voice agents. Alongside Vapi and ElevenLabs, it is one of the providers supported by Fusion Calling.",
    whyItMatters:
      "Multi-provider support, including Retell, lets agencies match each client to the best engine.",
    related: ["Vapi", "ElevenLabs", "White-Label"],
  },
  {
    term: "GoHighLevel",
    category: "Business & Operations",
    definition:
      "GoHighLevel (GHL) is a popular all-in-one marketing and CRM platform used widely by agencies. Voice AI platforms integrate with GoHighLevel to push leads, calls, and outcomes into client sub-accounts.",
    whyItMatters:
      "GoHighLevel integration is a major selling point for the large base of agencies already standardized on GHL.",
    related: ["CRM Integration", "API", "Webhook"],
  },
  {
    term: "Knowledge Base",
    category: "Conversational Design",
    definition:
      "A knowledge base is a structured set of information a voice agent can reference during a call to answer questions accurately, such as business details, services, and FAQs.",
    whyItMatters:
      "Connecting a knowledge base lets agents answer specific client questions correctly without hardcoded scripts.",
    related: ["Context", "Retrieval-Augmented Generation", "Function Calling"],
  },
  {
    term: "Retrieval-Augmented Generation",
    category: "Conversational Design",
    definition:
      "Retrieval-Augmented Generation (RAG) is a technique where a language model pulls in relevant information from a knowledge base or documents before responding, improving accuracy and reducing hallucination.",
    whyItMatters:
      "RAG lets agents give accurate, up-to-date, client-specific answers grounded in real information.",
    related: ["Knowledge Base", "Large Language Model", "Context"],
  },
  {
    term: "Hallucination",
    category: "Conversational Design",
    definition:
      "A hallucination is when a language model generates information that sounds plausible but is incorrect or fabricated. Guardrails, knowledge bases, and RAG help reduce hallucinations in voice agents.",
    whyItMatters:
      "Preventing hallucinations is critical to agent trustworthiness, especially when answering factual questions.",
    related: ["Guardrails", "Retrieval-Augmented Generation", "Knowledge Base"],
  },
  {
    term: "Real-Time Processing",
    category: "Speech Technology",
    definition:
      "Real-time processing is the handling of speech with minimal delay, so recognition, reasoning, and response happen fast enough to sustain a natural conversation.",
    whyItMatters:
      "Real-time processing is what makes a voice agent feel live and conversational rather than laggy.",
    related: ["Latency", "Endpointing", "Full-Duplex Communication"],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => slugifyTerm(t.term) === slug);
}

export function getRelatedTerms(term: GlossaryTerm, limit = 5): GlossaryTerm[] {
  if (!term.related || term.related.length === 0) return [];
  return term.related
    .map((name) => glossaryTerms.find((t) => t.term === name))
    .filter((t): t is GlossaryTerm => Boolean(t))
    .slice(0, limit);
}

export const glossaryCategories: GlossaryCategory[] = [
  "Core AI & Voice",
  "Speech Technology",
  "Telephony",
  "Conversational Design",
  "Compliance & Security",
  "Business & Operations",
];
