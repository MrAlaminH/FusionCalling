import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// Below-the-fold sections are code-split so their JavaScript is not part of
// the initial page bundle. They still render server-side (default ssr:true)
// for SEO and content, except Calendar which is a client-only cal.com widget.
const TryDemo = dynamic(() => import("@/components/Try-Demo"));
const Features = dynamic(() => import("@/components/Features"));
const SlideText = dynamic(() => import("@/components/Slide-Text"));
const StatisticsComponent = dynamic(() => import("@/components/stats"));
const HowItWorks = dynamic(() => import("@/components/steps"));
const EndlessUseCases = dynamic(() => import("@/components/endless-use-cases"));
const VoiceCarousel = dynamic(() => import("@/components/voice-carousel"));
const Testimonials = dynamic(() => import("@/components/Testimonial"));
const PricingSection = dynamic(() => import("@/components/pricing-section"));
const FAQSection = dynamic(() => import("@/components/FAQs"));
const Calendar = dynamic(() => import("@/components/calendar"), { ssr: false });

export const metadata: Metadata = {
  title: "AI Phone Call Automation & AI Receptionist | Fusion Calling",
  description:
    "Fusion Calling AI voice agents handle inbound and outbound calls 24/7: book appointments, qualify leads, and automate customer interactions with voice AI.",
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
        "@type": "WebPage",
        "@id": "https://www.fusioncalling.com/#webpage",
        url: "https://www.fusioncalling.com/",
        name: "Fusion Calling | AI Phone Call Automation for Businesses",
        description: "AI-powered phone call automation for businesses. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
        isPartOf: {
          "@id": "https://www.fusioncalling.com/#website"
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.fusioncalling.com/opengraph-image.png"
        },
        dateModified: "2026-07-07",
        inLanguage: "en-US",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.fusioncalling.com/"
            }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.fusioncalling.com/#localbusiness",
        name: "Fusion Calling",
        image: "https://www.fusioncalling.com/logo.webp",
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
              description: "500 minutes/month"
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pro Plan"
              },
              price: "249",
              priceCurrency: "USD",
              description: "1,050 minutes/month"
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise Plan"
              },
              price: "497",
              priceCurrency: "USD",
              description: "2,100 minutes/month"
            }
          ]
        }
      },
      {
        "@type": "VideoObject",
        "name": "Fusion Calling AI Phone Agent Demo - Real Estate",
        "description": "Watch how our AI voice agent handles a real estate consultation call. The AI identifies client interests, discusses property preferences, and arranges for further information delivery with human-like conversation.",
        "thumbnailUrl": "https://www.fusioncalling.com/cardImage.jpg",
        "uploadDate": "2026-01-15",
        "duration": "PT2M30S",
        "contentUrl": "https://www.youtube.com/watch?v=Oua1TyixaoA",
        "embedUrl": "https://www.youtube.com/embed/Oua1TyixaoA",
        "interactionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": { "@type": "WatchAction" },
          "userInteractionCount": 15000
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Fusion Calling",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based",
        "offers": {
          "@type": "Offer",
          "price": "149.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.fusioncalling.com/",
          "seller": {
            "@type": "Organization",
            "name": "Fusion Calling"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "AI voice agents for inbound calls",
          "Outbound call automation",
          "Multi-provider support (Vapi, Retell, ElevenLabs)",
          "24/7 availability",
          "CRM integration",
          "White-label capabilities",
          "SMS automation",
          "Calendar booking",
          "Pipeline management",
          "Analytics dashboard"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.fusioncalling.com/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is AI phone call automation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI phone call automation uses artificial intelligence to handle inbound and outbound voice calls without human intervention. It combines speech recognition, natural language processing, and text-to-speech technology to conduct natural conversations that can book appointments, answer questions, qualify leads, and provide customer service 24/7.",
            },
          },
          {
            "@type": "Question",
            name: "How much does Fusion Calling cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fusion Calling offers three pricing plans: Starter at $149/month (500 minutes), Pro at $249/month (1,050 minutes), and Enterprise at $497/month (2,100 minutes). All plans include custom voice training, calendar integrations, SMS capabilities, and dedicated support.",
            },
          },
          {
            "@type": "Question",
            name: "How realistic do AI voice agents sound?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our AI voice agents are 95% indistinguishable from human speakers. We use advanced text-to-speech technology from providers like ElevenLabs and offer voice customization options, including the ability to clone your own voice or choose from our library of natural-sounding voices in multiple languages and accents.",
            },
          },
          {
            "@type": "Question",
            name: "How long does deployment take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most AI agents go live within 4 weeks after proposal approval. The timeline includes: Week 1-2 for discovery and workflow design, Week 3 for AI training and integration, Week 4 for testing and optimization. Simple implementations can be done in as little as 2 weeks, while complex multi-system integrations may take 6-8 weeks.",
            },
          },
          {
            "@type": "Question",
            name: "Can AI agents handle complex conversations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI agents can handle multi-turn conversations, context switching, and complex scenarios. They're trained on your specific business knowledge, can access information in real-time (like checking calendars or databases), and know when to transfer to a human agent for situations requiring human judgment or empathy.",
            },
          },
        ],
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
      <section id="testimonials" className="scroll-mt-24">
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
    </main>
    </>
  );
}
