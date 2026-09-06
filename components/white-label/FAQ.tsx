import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { primaryButton } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils";
import { whitelabelFaqs } from "@/lib/whitelabel-faqs";
import Link from "next/link";

export default function FAQ() {
  return (
    <section className="w-full bg-black section-rhythm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <SectionHeader
          title="Frequently Asked Questions"
          highlight="Questions"
          subtitle="Everything you need to know about becoming a Fusion Calling partner. Don't see your question? Reach out to our team."
        />

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
                  <span className="font-body text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-body text-gray-400 text-sm md:text-base leading-relaxed">
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
            className={cn(primaryButton)}
          >
            Talk to Our Team
          </a>
          <p className="font-body text-gray-400 text-sm mt-6">
            Comparing platforms?{" "}
            <Link
              href="/whitelabel/compare"
              className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
            >
              See how we compare
            </Link>{" "}
            or{" "}
            <Link
              href="/pricing"
              className="text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
            >
              see pricing details
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
