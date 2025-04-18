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
              <div className="inline-flex items-center gap-2 text-orange-600">
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
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-orange-600"
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
              <div className="inline-flex items-center gap-2 text-orange-600">
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
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-600 text-white [&[data-state=open]>svg]:rotate-45 ">
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
    question: "What is your development process?",
    answer:
      "We follow a structured, results-driven approach to building AI solutions: 1) Discovery – We analyze your workflows and customer interactions to pinpoint where AI can add the most value. 2) Validation – We ensure AI aligns with your goals and delivers a strong return on investment. 3) Design & Development – We create AI-powered agents and integrate them seamlessly into your systems. 4) Testing – We rigorously test for accuracy, reliability, and a smooth user experience. 5) Deployment & Optimization – We launch your AI solution, monitor its performance, and fine-tune it for peak efficiency.",
  },
  {
    question: "How long does it take to deploy an AI agent?",
    answer:
      "Most AI agents go live within 4 weeks after proposal approval. However, timelines may vary depending on the complexity of conversational flows, required functionalities, and system integrations.",
  },
  {
    question: "Can your AI agents integrate with our existing systems?",
    answer:
      "Yes! Our AI agents are built to work seamlessly with your current systems, enhancing functionality without disrupting existing operations.",
  },
  {
    question: "What kind of support do you offer after deployment?",
    answer:
      "We provide two flexible support options: 1) Managed Services – 24/7 monitoring, ongoing support, regular AI model updates, and performance analytics. 2) Adhoc Services – Hourly support as needed, ideal for teams that prefer to manage their AI solutions in-house.",
  },
  {
    question:
      "How do you ensure projects are completed on time and meet high-quality standards?",
    answer:
      "We follow a structured project timeline with clear milestones and deliverables. Our rigorous testing process ensures reliability, and we keep you updated with regular progress reports throughout development.",
  },
  {
    question: "What tools and technologies do you use?",
    answer:
      "We leverage cutting-edge AI technologies tailored to your needs, including: AI Models: OpenAI GPT, Claude, Gemini; Voice Agent Development: Retell, Vapi, ElevenLabs; Chatbot Development: Voiceflow, Botpress; Automation Platforms: Make, Zapier, n8n. AI is constantly evolving, and we stay ahead by using the most advanced and suitable tools for your project.",
  },
];
