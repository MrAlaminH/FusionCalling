import dynamic from "next/dynamic";
import Link from "next/link";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";
import ScrollLaunchBadge from "@/components/ScrollLaunchBadge";
import type { Metadata } from "next";
import { CONTENT_LAST_UPDATED, SITE_URL } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";

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
  title: "AI Phone Call Automation — 24/7 AI Receptionist",
  description:
    "Fusion Calling AI voice agents answer & place calls 24/7, book appointments, and qualify leads. Live demo, plans from $149/mo.",
  ...buildOpenGraph({
    title: "AI Phone Call Automation — 24/7 AI Receptionist",
    description:
      "Fusion Calling AI voice agents answer & place calls 24/7, book appointments, and qualify leads. Live demo, plans from $149/mo.",
    path: "/",
  }),
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "Fusion Calling | AI Phone Call Automation for Businesses",
        description: "AI-powered phone call automation for businesses. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image.png`
        },
        dateModified: CONTENT_LAST_UPDATED,
        inLanguage: "en-US"
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "AI Phone Call Automation",
        description: "Automate inbound and outbound phone calls with human-like AI voice agents. Our AI receptionist handles customer service, lead qualification, appointment booking, and more 24/7.",
        provider: {
          "@id": `${SITE_URL}/#organization`
        },
        offers: {
          "@type": "Offer",
          name: "AI Phone Automation Service",
          priceRange: "$149-$497/month",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/`,
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
        "@id": `${SITE_URL}/#video`,
        "name": "Fusion Calling AI Phone Agent Demo - Real Estate",
        "description": "Watch how our AI voice agent handles a real estate consultation call. The AI identifies client interests, discusses property preferences, and arranges for further information delivery with human-like conversation.",
        "thumbnailUrl": `${SITE_URL}/cardImage.jpg`,
        "uploadDate": "2026-01-15T09:00:00-05:00",
        "datePublished": "2026-01-15T09:00:00-05:00",
        "duration": "PT2M30S",
        "contentUrl": "https://www.youtube.com/watch?v=Oua1TyixaoA",
        "embedUrl": "https://www.youtube.com/embed/Oua1TyixaoA",
        "interactionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/WatchAction",
          "userInteractionCount": 1250
        },
        "regionsAllowed": ["US", "CA", "GB", "AU"],
        "isFamilyFriendly": true,
        "publisher": {
          "@id": `${SITE_URL}/#organization`
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
          "url": `${SITE_URL}/`,
          "seller": {
            "@type": "Organization",
            "name": "Fusion Calling"
          }
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
        "@id": `${SITE_URL}/#faqpage`,
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
      <section aria-label="AI voice agents by industry" className="w-full bg-black pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <p className="text-center text-gray-400 text-sm sm:text-base">
            Built for your vertical:{" "}
            <Link
              href="/ai-receptionist"
              className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
            >
              AI receptionist for business calls
            </Link>
            {" · "}
            <Link
              href="/industries/ai-voice-for-restaurants-hospitality"
              className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
            >
              AI voice agent for restaurants
            </Link>
            {" · "}
            <Link
              href="/industries/ai-voice-for-ecommerce-retail"
              className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
            >
              AI voice agent for ecommerce
            </Link>
            {" · "}
            <Link
              href="/industries/ai-voice-for-real-estate"
              className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
            >
              AI voice for real estate
            </Link>
            {" · "}
            <Link
              href="/industries/ai-voice-for-dental"
              className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
            >
              AI voice for dental
            </Link>
          </p>
        </div>
      </section>
      <section id="VoiceCarousel" className="scroll-mt-24">
        <VoiceCarousel />
      </section>
      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>
      <section id="pricing" className="scroll-mt-24">
        <PricingSection />
        <p className="text-center text-gray-400 text-sm sm:text-base pb-8">
          Want the full breakdown?{" "}
          <Link
            href="/pricing"
            className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
          >
            See pricing details for every plan
          </Link>
          . New to the technology?{" "}
          <Link
            href="/ai-phone-call-automation"
            className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
          >
            Learn how call automation works in the 2026 guide
          </Link>
          .
        </p>
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
              Book a convenient time slot for us to discuss your needs and how we can help you succeed. Not sure which plan fits?{" "}
              <Link
                href="/pricing"
                className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
              >
                Compare pricing first
              </Link>
              .
            </p>
          </div>

          {/* Calendar */}
          <div>
            <Calendar calUsername={"mralamin"} eventSlug={"discovery-call"} showHeader={false} />
          </div>
        </div>
      </section>

      {/* As featured in */}
      <section aria-label="As featured in" className="pb-8">
        <ScrollLaunchBadge />
      </section>

      <Footer />
    </main>
    </>
  );
}
