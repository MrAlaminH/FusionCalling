import { Phone, Mail } from "lucide-react";
import Calendar from "@/components/calendar";
import { Reveal } from "@/components/ui/reveal";

export default function CTA() {
  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <Reveal animation="animate-fade-in-up" className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your
            <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
              {" "}
              Partnership?
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Schedule a discovery call with our team. We&apos;ll discuss your agency&apos;s
            goals and help you get started with your white-label solution.
          </p>
        </Reveal>

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
