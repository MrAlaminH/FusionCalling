import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";

export default function FAQ() {

  const faqs = [
    {
      question: "What is a white-label partnership?",
      answer:
        "A white-label partnership allows you to sell our AI voice calling solution under your own brand. Your clients see your logo, your colors, and interact with your branded interface while we handle the technology and infrastructure behind the scenes.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "Once approved, you can launch your white-label solution within 1-2 days. This includes branding setup, voice training, and dashboard customization. Our team guides you through every step of the process.",
    },
    {
      question: "Do I need technical expertise?",
      answer:
        "No technical expertise is required. We provide a fully managed white-label solution. You focus on sales and client relationships while we handle all technical aspects including integrations, updates, and maintenance.",
    },
    {
      question: "What's the difference between partner tiers?",
      answer:
        "The main differences are the number of sub-accounts, the support level, and the price. Starter includes 6 sub-accounts and client portal access for $99/month. Growth includes 20 sub-accounts with priority support and advanced analytics for $299/month. Scale includes unlimited sub-accounts, a dedicated account manager, and API access for $499/month. On every tier you keep 100% of what you charge your clients.",
    },
    {
      question: "Can I use my own domain?",
      answer:
        "Absolutely. We set up your white-label solution on your own domain (e.g., app.youragency.com). Your clients will never know about Fusion Calling unless you choose to tell them—you have complete brand control.",
    },
    {
      question: "What is a white-label voice AI platform?",
      answer:
        "A white-label voice AI platform is an AI phone-call automation product that an agency rebrands and resells under its own name. Fusion Calling handles the underlying speech recognition, language models, text-to-speech, telephony, and dashboard, while you set your branding, domain, and pricing. Plans start at $99/month for 6 sub-accounts, and partners keep 100% of what they charge clients.",
    },
    {
      question: "How much does it cost to start a white-label voice AI business?",
      answer:
        "You can start for as little as $99/month with no setup fee and a 3-day free trial. Fusion Calling offers three partner tiers: Starter ($99/mo, 6 sub-accounts), Growth ($299/mo, 20 sub-accounts with priority support), and Scale ($499/mo, unlimited sub-accounts, dedicated account manager, and API access). Because you keep the full margin between your client price and the wholesale rate, most partners reach positive ROI within the first 1–2 client accounts.",
    },
    {
      question: "Which voice AI providers can I resell through Fusion Calling?",
      answer:
        "Fusion Calling supports Vapi, Retell AI, and ElevenLabs out of the box, so you can match each client to the best engine instead of being locked into one vendor. You can bring existing agent configurations and API keys from any of these providers, and the platform layers branding, client portals, lead management, and billing on top so agencies can resell them under a single branded dashboard.",
    },
  ];

  return (
    <section className="w-full bg-black section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <Reveal animation="animate-fade-in-up" className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Frequently Asked
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              {" "}
              Questions
            </span>
          </h2>
          <p className="font-body text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to know about becoming a Fusion Calling partner.
            Don&apos;t see your question? Reach out to our team.
          </p>
        </Reveal>

        {/* FAQ Accordion */}
        <Reveal animation="animate-fade-in-up" delay={0.15}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-light border border-brand/20 rounded-xl px-6 md:px-8 hover:border-brand/40 transition-all duration-300"
              >
                <AccordionTrigger className="text-white text-left hover:no-underline py-5 md:py-6">
                  <span className="font-body text-base sm:text-lg md:text-xl font-medium">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-body text-gray-400 text-sm sm:text-base leading-relaxed pb-5 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-12 lg:mt-16 text-center">
          <p className="font-body text-gray-400 text-base sm:text-lg md:text-xl mb-4 md:mb-6">
            Still have questions?
          </p>
          <a
            href="#cta"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-brand to-brand-strong px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-all shadow-premium hover:shadow-premium-lg hover:from-brand-strong hover:to-orange-700 hover:scale-105 active:scale-[0.98]"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
