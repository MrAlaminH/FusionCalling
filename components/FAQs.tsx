"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div className="w-full bg-black py-16 p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Security Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-strong">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="font-bold text-2xl">Security</span>
              </div>
              <h2 className="text-4xl font-bold text-white">
                Safety and compliance for your business
              </h2>
              <p className="text-gray-400">
                We are committed to providing solutions that meet the highest
                standards of security and compliance.
              </p>
            </div>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-strong"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-strong">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-bold text-2xl">FAQ</span>
              </div>
              <h2 className="text-4xl font-bold text-white">
                Frequently asked questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-800 rounded-lg overflow-hidden "
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-brand-strong text-white [&[data-state=open]>svg]:rotate-45 ">
                    <span className="text-left">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

const securityFeatures = [
  {
    title: "Advanced encryption",
    description:
      "We protect data with top encryption technologies for maximum security.",
  },
  {
    title: "Global compliance",
    description:
      "We comply with GDPR, AI EU Act, and other international data protection regulations.",
  },
  {
    title: "Security certifications",
    description:
      "We hold ISO certifications and are in the process of obtaining SOC2 certification.",
  },
];

const faqItems = [
  {
    question: "What is AI phone call automation?",
    answer:
      "AI phone call automation uses artificial intelligence to handle inbound and outbound voice calls without human intervention. It combines speech recognition, natural language processing, and text-to-speech technology to conduct natural conversations that can book appointments, answer questions, qualify leads, and provide customer service 24/7.",
  },
  {
    question: "How much does Fusion Calling cost?",
    answer:
      "Fusion Calling offers three pricing plans: Starter at $149/month (500 minutes, 2 AI agents), Growth at $297/month (1,200 minutes, 5 AI agents), and Scale at $497/month (2,100 minutes, unlimited AI agents). All plans include custom voice training, calendar integrations, SMS capabilities, and dedicated support.",
  },
  {
    question: "How realistic do AI voice agents sound?",
    answer:
      "Our AI voice agents are 95% indistinguishable from human speakers. We use advanced text-to-speech technology from providers like ElevenLabs and offer voice customization options, including the ability to clone your own voice or choose from our library of natural-sounding voices in multiple languages and accents.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Most AI agents go live within 4 weeks after proposal approval. The timeline includes: Week 1-2 for discovery and workflow design, Week 3 for AI training and integration, Week 4 for testing and optimization. Simple implementations can be done in as little as 2 weeks, while complex multi-system integrations may take 6-8 weeks.",
  },
  {
    question: "Can AI agents handle complex conversations?",
    answer:
      "Yes, our AI agents can handle multi-turn conversations, context switching, and complex scenarios. They're trained on your specific business knowledge, can access information in real-time (like checking calendars or databases), and know when to transfer to a human agent for situations requiring human judgment or empathy.",
  },
];
