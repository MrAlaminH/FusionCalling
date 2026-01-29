"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        "The main differences are commission rates, support levels, and minimum client requirements. Starter Partners earn 20% commission with 5 minimum clients. Pro Partners earn 30% with 15 minimum clients. Enterprise Partners earn 40% with 30 minimum clients and get premium benefits like 24/7 support.",
    },
    {
      question: "Can I set my own pricing?",
      answer:
        "Yes! You have complete control over your pricing. Set any price point that works for your market. Your earnings are based on the difference between your client price and our wholesale rate, with additional commission on top.",
    },
    {
      question: "What support do partners receive?",
      answer:
        "All partners receive email and whatsapp support and access to our partner portal. Pro Partners get priority support (24-hour response time). Enterprise Partners receive 24/7 dedicated support with a dedicated account manager.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "Yes, there is a setup fee based on your chosen partner tier. We only charge a monthly fee based on your usage and your chosen partner tier. This makes it risk-free to get started.",
    },
    {
      question: "Can I use my own domain?",
      answer:
        "Absolutely. We will set up your white-label solution on your own domain (e.g., app.youragency.com). Your clients will never know about Fusion Calling unless you choose to tell them.",
    },
    {
      question: "How do voice and branding customization work?",
      answer:
        "You provide your brand assets (logo, colors, domain) and optionally a agent voice sample. Our team customizes your white-label environment and trains AI agents with your preferred voice. Most agencies complete this within their first week.",
    },
    {
      question: "Can I cancel my partnership?",
      answer:
        "Yes, you can cancel your partnership at any time without penalties. There are no long-term contracts. Any active clients you've brought on can continue using the service, and we handle the transition smoothly.",
    },
  ];

  return (
    <section className="w-full bg-black section-spacing" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
              <HelpCircle className="w-7 h-7 text-orange-500" />
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Frequently Asked
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Questions
            </span>
          </h2>
          <p className="font-body text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to know about becoming a Fusion Calling partner.
            Don&apos;t see your question? Reach out to our team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-light border border-orange-500/20 rounded-xl px-6 md:px-8 hover:border-orange-500/40 transition-all duration-300"
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
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 md:mt-12 lg:mt-16 text-center"
        >
          <p className="font-body text-gray-400 text-base sm:text-lg md:text-xl mb-4 md:mb-6">
            Still have questions?
          </p>
          <motion.a
            href="#cta"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-all shadow-premium hover:shadow-premium-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Talk to Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
