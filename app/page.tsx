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
import StickyMobileCta from "@/components/sticky-mobile-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Phone Call Automation & AI Receptionist | Fusion Calling",
  description:
    "Fusion Calling's AI voice agents handle your inbound & outbound calls 24/7 — book appointments, qualify leads, and automate customer interactions with human-like AI phone call automation.",
  keywords: [
    "AI phone call automation",
    "AI receptionist",
    "virtual agent",
    "automated calls",
    "voice AI",
    "call center automation",
    "lead generation AI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Phone Call Automation & AI Receptionist | Fusion Calling",
    description:
      "Automate inbound & outbound calls with human-like AI voice agents. Book appointments, qualify leads, and scale your phone operations 24/7.",
    url: "https://www.fusioncalling.com/",
    siteName: "Fusion Calling",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.fusioncalling.com/#localbusiness",
        name: "Fusion Calling",
        image: "https://www.fusioncalling.com/logo.png",
        description: "AI-powered phone call automation for businesses. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
        url: "https://www.fusioncalling.com/",
        telephone: "+1-202-998-3591",
        email: "contact@fusioncalling.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US"
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          opens: "09:00",
          closes: "18:00"
        },
        priceRange: "$$$"
      },
      {
        "@type": "Service",
        "@id": "https://www.fusioncalling.com/#service",
        name: "AI Phone Call Automation",
        description: "Automate inbound and outbound phone calls with human-like AI voice agents. Our AI receptionist handles customer service, lead qualification, appointment booking, and more 24/7.",
        provider: {
          "@id": "https://www.fusioncalling.com/#organization"
        },
        offers: {
          "@type": "Offer",
          name: "AI Phone Automation Service",
          priceRange: "$149-$497/month",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://www.fusioncalling.com/",
          description: "Plans include 500-2100 minutes per month with unlimited AI agents, custom voice training, and dedicated support"
        },
        areaServed: {
          "@type": "Country",
          name: "United States"
        },
        audience: {
          "@type": "Audience",
          audienceType: "Business owners, call centers, real estate agencies, healthcare providers, insurance companies"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Phone Automation Plans",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Starter Plan"
              },
              price: "149",
              priceCurrency: "USD",
              description: "500 minutes/month, 2 AI agents"
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Growth Plan"
              },
              price: "297",
              priceCurrency: "USD",
              description: "1200 minutes/month, 5 AI agents"
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Scale Plan"
              },
              price: "497",
              priceCurrency: "USD",
              description: "2100 minutes/month, unlimited AI agents"
            }
          ]
        },
        keywords: "AI phone call automation, AI receptionist, virtual agent, voice AI, call center automation, lead generation AI"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="min-h-screen w-full bg-black">
      <Navbar />
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="tools" className="scroll-mt-24">
        <Tools />
      </section>
      <section id="show-case" className="scroll-mt-24">
        <TryDemo />
      </section>
      <section id="features" className="scroll-mt-24">
        <Features />
      </section>
      <section id="slide-text" className="scroll-mt-24">
        <SlideText />
      </section>
      <section id="StatisticsComponent" className="scroll-mt-24">
        <StatisticsComponent />
      </section>
      <section id="HowItWorks" className="scroll-mt-24">
        <HowItWorks />
      </section>
      <section id="EndlessUseCases" className="scroll-mt-24">
        <EndlessUseCases />
      </section>
      <section id="VoiceCarousel" className="scroll-mt-24">
        <VoiceCarousel />
      </section>
      <section id="Testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>
      <section id="pricing" className="scroll-mt-24">
        <PricingSection />
      </section>
      <section id="faqs" className="scroll-mt-24">
        <FAQSection />
      </section>
      <section id="calendar" className="w-full bg-black py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Schedule a
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
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
      <StickyMobileCta href="#calendar" />
    </main>
    </>
  );
}
