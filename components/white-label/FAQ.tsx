import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { whitelabelFaqs } from "@/lib/whitelabel-faqs";

export default function FAQ() {
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
          <Accordion
            type="multiple"
            defaultValue={["item-0"]}
            className="space-y-4"
          >
            {whitelabelFaqs.map((faq, index) => (
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
                <AccordionContent className="font-body text-gray-400 text-sm sm:text-base leading-relaxed">
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
