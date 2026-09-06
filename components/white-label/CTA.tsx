import { Phone, Mail } from "lucide-react";
import Calendar from "@/components/calendar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export default function CTA() {
  return (
    <section className="w-full bg-black section-rhythm pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <SectionHeader
          title="Ready to Start Your White-Label Partnership?"
          highlight="Partnership?"
          subtitle="Schedule a discovery call with our team. We'll discuss your agency's goals and help you get started with your white-label solution. Every plan starts with a 3-day free trial and no setup fee, and you can cancel anytime."
        />

        {/* Calendar Section */}
        <Reveal animation="animate-fade-in-up" delay={0.15}>
          <Calendar calUsername={"mralamin"} eventSlug={"discovery-call"} showHeader={false} />
        </Reveal>

        {/* Pro Tip */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            <strong className="text-brand">Pro Tip:</strong> Schedule a call to get personalized guidance on setting up your white-label solution and maximizing your revenue.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6">
            Prefer to contact us directly?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <a
              href="mailto:hello@fusioncalling.com"
              className="flex items-center gap-2 text-brand hover:text-brand-light transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              hello@fusioncalling.com
            </a>
            <a
              href="tel:+19146394069"
              className="flex items-center gap-2 text-brand hover:text-brand-light transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              +1 (914) 639-4069
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
