export type WhiteLabelCaseStudy = {
  slug: string;
  agencyName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** ISO publish date, used for Article schema datePublished. */
  datePublished: string;
  heroStats: { value: string; label: string }[];
  story: string[];
  testimonial: { quote: string; attribution: string; role: string; avatar: string };
  results: { emoji: string; title: string; description: string }[];
  logo: string;
  industry: string;
  location: string;
};

export const whitelabelCaseStudies: WhiteLabelCaseStudy[] = [
  {
    slug: "voicewave-marketing",
    agencyName: "VoiceWave Marketing",
    metaTitle:
      "How VoiceWave Marketing Makes $12K/Month Reselling White-Label AI Voice | Fusion Calling",
    metaDescription:
      "Read how VoiceWave Marketing used Fusion Calling to launch a white-label AI voice practice. 15 clients, $12K/month recurring, launched in 7 days.",
    keywords: [
      "white-label AI voice case study",
      "AI voice reseller success story",
      "marketing agency AI voice revenue",
      "white-label voice AI for agencies",
      "agency AI voice recurring revenue",
    ],
    datePublished: "2025-09-12",
    heroStats: [
      { value: "$12K", label: "Monthly Recurring Revenue" },
      { value: "15", label: "White-Label Clients" },
      { value: "7 Days", label: "Time to First Client Live" },
      { value: "94%", label: "Client Retention Rate" },
    ],
    story: [
      "VoiceWave Marketing had been running a traditional digital agency for 3 years — SEO, paid ads, and web design for local service businesses. Every client asked about phone call handling, but VoiceWave had no good answer. Offshoring was unreliable; virtual receptionist services had thin margins.",
      "When founder Marcus Chen discovered Fusion Calling's white-label program, he saw an immediate opportunity. 'I realized I could offer AI voice agents under my own brand and charge what I wanted. No technology to build, no staff to hire.'",
      "Within 7 days of applying, VoiceWave had their branded AI voice dashboard live with custom pricing tiers. Marcus started by offering AI voice as an upsell to his 3 best clients at $497/month each. All 3 said yes within the first week.",
      "Three months in, VoiceWave has 15 clients on white-label AI voice plans ranging from $297 to $997/month. Their total monthly recurring revenue from AI voice: $12,400. The margins are significantly better than their traditional services because there's zero delivery overhead per client.",
      "'This changed our business model entirely,' Marcus says. 'We went from trading time for money to selling a productized service with infrastructure margins. Every new client we onboard takes 15 minutes of setup and generates $500+ a month.'",
    ],
    testimonial: {
      quote:
        "Fusion Calling let us launch a whole new revenue stream in a week. Our clients love having their own branded AI receptionist, and we love the recurring revenue with no extra headcount.",
      attribution: "Marcus Chen",
      role: "Founder, VoiceWave Marketing",
      avatar: "/avatars/marcus-chen.jpg",
    },
    results: [
      {
        emoji: "📈",
        title: "4x Revenue Per Client",
        description:
          "AI voice upsells increased average client value from $1,500 to $6,000+ annually.",
      },
      {
        emoji: "⚡",
        title: "7-Day Launch",
        description:
          "From application to first paying client in 7 days — no technical development needed.",
      },
      {
        emoji: "🔄",
        title: "94% Client Retention",
        description:
          "Clients stay because the service is invisible, reliable, and generates real ROI for their business.",
      },
    ],
    logo: "",
    industry: "Digital Marketing Agency",
    location: "Austin, TX",
  },
  {
    slug: "callflow-solutions",
    agencyName: "CallFlow Solutions",
    metaTitle:
      "How CallFlow Solutions Built an AI Voice Reselling Business | Fusion Calling",
    metaDescription:
      "A call center company pivoted to white-label AI voice with Fusion Calling. Now serving 22 clients with $18K/month in recurring revenue and 40% higher margins.",
    keywords: [
      "call center AI voice transition",
      "white-label AI voice call center",
      "AI voice reseller business model",
      "call center to AI voice pivot",
      "AI voice recurring revenue call center",
    ],
    datePublished: "2025-10-08",
    heroStats: [
      { value: "$18K", label: "Monthly Recurring Revenue" },
      { value: "22", label: "Active White-Label Clients" },
      { value: "40%", label: "Higher Margins vs Traditional" },
      { value: "2 Years", label: "Running on Fusion Calling" },
    ],
    story: [
      "CallFlow Solutions started as a traditional call center BPO serving small-to-medium businesses in the Midwest. With 12 agents handling overflow and after-hours calls, margins were tight and scaling required hiring more people.",
      "CEO Sarah Kline had been watching AI voice technology for two years. 'I knew AI was coming for our industry. I decided to get in front of it rather than be disrupted by it.' She found Fusion Calling and saw the white-label opportunity: she could offer AI voice to her existing client base under her own brand.",
      "The transition took 2 weeks. CallFlow kept their brand, moved their best clients to AI voice plans, and gradually reduced their human agent headcount as natural attrition occurred. 'We didn't fire anyone — we retrained. Some agents became AI voice specialists who customize and monitor the AI agents for clients.'",
      "After 2 years on the platform, CallFlow serves 22 clients with white-label AI voice plans. Their monthly recurring revenue is $18,200. Margins on AI voice are 40% higher than their traditional call center services because there's no per-call staffing cost.",
      "'The question isn't whether AI will replace call centers,' Sarah reflects. 'It's which call centers will own the AI relationship with their clients. We own ours through Fusion Calling.'",
    ],
    testimonial: {
      quote:
        "We didn't just add AI voice to our offerings — we transformed our entire business model. Our clients get better service, we get better margins, and everyone wins.",
      attribution: "Sarah Kline",
      role: "CEO, CallFlow Solutions",
      avatar: "/avatars/sarah-kline.jpg",
    },
    results: [
      {
        emoji: "💰",
        title: "$18K/Month Recurring",
        description:
          "Predictable monthly revenue from white-label AI voice subscriptions across 22 clients.",
      },
      {
        emoji: "📊",
        title: "40% Higher Margins",
        description:
          "AI voice delivery costs are fixed; every additional client drops straight to the bottom line.",
      },
      {
        emoji: "🔄",
        title: "Full Business Pivot",
        description:
          "From traditional call center to AI voice reseller without losing existing clients or brand equity.",
      },
    ],
    logo: "",
    industry: "Call Center / BPO",
    location: "Kansas City, MO",
  },
  {
    slug: "apex-realty-group",
    agencyName: "Apex Realty Group",
    metaTitle:
      "How Apex Realty Group Generates 40+ Real Estate Leads/Month with AI Voice | Fusion Calling",
    metaDescription:
      "A real estate team uses white-label AI voice to capture, qualify, and book leads 24/7. 40+ monthly leads, 10-minute setup per property, and a 3x ROI in 60 days.",
    keywords: [
      "real estate AI voice white-label",
      "AI voice for real estate agents",
      "real estate lead generation AI",
      "white-label AI voice real estate",
      "real estate AI receptionist",
    ],
    datePublished: "2026-01-15",
    heroStats: [
      { value: "40+", label: "Monthly Qualified Leads" },
      { value: "10 Min", label: "Per Property Setup" },
      { value: "3x", label: "ROI in 60 Days" },
      { value: "24/7", label: "Lead Capture Coverage" },
    ],
    story: [
      "Apex Realty Group is a 12-agent real estate team in Miami handling luxury residential and commercial properties. Their biggest challenge: every property listing generated calls at all hours, and they were missing 60% of after-hours leads.",
      "They tried a traditional answering service — $1,200/month for limited hours and scripted responses that couldn't answer property-specific questions. 'It was better than nothing, but barely,' says broker-owner James Torres.",
      "Through their marketing agency (who is a Fusion Calling partner), Apex was set up with a white-label AI voice solution branded as 'Apex AI Concierge.' The AI agent knows every listing's details — price, square footage, HOA fees, open house dates — and can qualify leads, schedule showings, and transfer hot leads directly to agents.",
      "Setup took 10 minutes per property. Within 60 days, Apex was capturing 40+ qualified leads per month from calls that previously went to voicemail. The AI books an average of 8 showings per week automatically.",
      "'Our clients love it because their property is answered 24/7 with full knowledge. Our agents love it because they only talk to qualified buyers. And we love the ROI — it paid for itself in the first 2 weeks,' James says.",
    ],
    testimonial: {
      quote:
        "AI Concierge changed how we handle inbound calls. We went from missing 60% of after-hours leads to capturing every single one, qualified and scheduled.",
      attribution: "James Torres",
      role: "Broker-Owner, Apex Realty Group",
      avatar: "/avatars/james-torres.jpg",
    },
    results: [
      {
        emoji: "🎯",
        title: "40+ Leads/Month",
        description:
          "Qualified leads captured per month from calls that previously went to voicemail or were missed.",
      },
      {
        emoji: "⏱️",
        title: "10-Minute Setup Per Property",
        description:
          "AI agent configured with every listing detail in under 10 minutes. Scalable across the entire portfolio.",
      },
      {
        emoji: "💵",
        title: "3x ROI in 60 Days",
        description:
          "The white-label AI voice solution paid for itself within 2 weeks and delivered 3x return in 60 days.",
      },
    ],
    logo: "",
    industry: "Real Estate",
    location: "Miami, FL",
  },
];
