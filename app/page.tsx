import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TryDemo from "@/components/Try-Demo";
import Features from "@/components/Features";
import FAQSection from "@/components/FAQs";
import SlideText from "@/components/Slide-Text";
import VoiceCarousel from "@/components/voice-carousel";
import Tools from "@/components/Tools";
import HowItWorks from "@/components/steps";
import EndlessUseCases from "@/components/endless-use-cases";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer";
import PricingSection from "@/components/pricing-section";
import Calendar from "@/components/calendar";
import StatisticsComponent from "@/components/stats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="show-case">
        <TryDemo />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="slide-text">
        <SlideText />
      </section>
      <section id="StatisticsComponent">
        <StatisticsComponent />
      </section>
      <section id="HowItWorks">
        <HowItWorks />
      </section>
      <section id="EndlessUseCases">
        <EndlessUseCases />
      </section>
      <section id="VoiceCarousel">
        <VoiceCarousel />
      </section>
      <section id="Testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <section id="calendar" className="w-full bg-black py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Schedule a
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                {" "}
                Discovery
              </span>
              {" "}
              Call
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Book a convenient time slot for us to discuss your needs and how we can help you succeed.
            </p>
          </div>

          {/* Calendar */}
          <div>
            <Calendar calUsername={"mralamin"} eventSlug={"discovery-call"} showHeader={false} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
