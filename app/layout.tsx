import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";
import { PostHogProvider } from "./providers";
import SuspendedPostHogPageView from "./PostHogPageView";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fusioncalling.com/"),
  title: {
    default: "Fusion Calling | AI Phone Call Automation for Businesses",
    template: "%s | Fusion Calling - AI Phone Call Automation",
  },
  description:
    "Boost business efficiency with Fusion Calling's AI-powered phone call automation. Streamline customer interactions, save time, and increase productivity.",
  keywords: [
    "AI phone call automation",
    "business automation",
    "voice technology",
    "customer service AI",
    "Fusion Calling",
    "automated calls",
    "virtual receptionist",
    "virtual agent",
    "lead generation AI",
    "ai receptionist",
    "call center automation",
    "automated receptionist",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@fusioncalling",
    title:
      "Fusion Calling | AI Phone Call Automation for Businesses | ai receptionist",
    description:
      "Boost your business efficiency with Fusion Calling's AI-powered ai receptionist phone call automation. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
    images: ["/opengraph-image.png"],
  },
  openGraph: {
    title: "Fusion Calling | AI Phone Call Automation for Businesses",
    description:
      "Boost your business efficiency with Fusion Calling's AI-powered ai receptionist phone call automation. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
    url: "https://www.fusioncalling.com/",
    siteName: "Fusion Calling",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fusion Calling - AI Phone Call Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.fusioncalling.com/#organization",
                  name: "Fusion Calling",
                  url: "https://www.fusioncalling.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.fusioncalling.com/logo.png",
                  },
                  description:
                    "AI-powered phone call automation for businesses. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
                  sameAs: ["https://twitter.com/fusioncalling"],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-800-FUSION",
                    contactType: "sales",
                    availableLanguage: "English",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.fusioncalling.com/#website",
                  url: "https://www.fusioncalling.com/",
                  name: "Fusion Calling",
                  description:
                    "AI-powered phone call automation for businesses",
                  publisher: {
                    "@id": "https://www.fusioncalling.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://www.fusioncalling.com/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Product",
                  "@id": "https://www.fusioncalling.com/#product",
                  name: "Fusion Calling - AI Phone Call Automation",
                  description:
                    "Boost your business efficiency with Fusion Calling's AI-powered phone call automation. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
                  image: "https://www.fusioncalling.com/cardImage.png",
                  brand: {
                    "@type": "Brand",
                    name: "Fusion Calling",
                  },
                  category: "Business Automation",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "127",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  review: [
                    {
                      "@type": "Review",
                      author: {
                        "@type": "Person",
                        name: "Sarah Mitchell",
                      },
                      datePublished: "2026-02-10",
                      reviewBody:
                        "Fusion Calling's AI receptionist handles our inbound calls flawlessly. We've cut missed calls by 80% and our booking rate has never been higher.",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                        worstRating: "1",
                      },
                    },
                  ],
                  offers: {
                    "@type": "Offer",
                    name: "Fusion Calling Subscription",
                    price: "149",
                    priceCurrency: "USD",
                    priceValidUntil: "2027-12-31",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fusioncalling.com/",
                    description:
                      "AI phone call automation plans from $149-$497/month with 500-2100 included minutes per month",
                    seller: {
                      "@type": "Organization",
                      name: "Fusion Calling",
                    },
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      applicableCountry: "US",
                      returnPolicyCategory:
                        "https://schema.org/MerchantReturnFiniteReturnWindow",
                      merchantReturnDays: 14,
                      returnMethod: "https://schema.org/ReturnByMail",
                      returnFees: "https://schema.org/FreeReturn",
                    },
                    shippingDetails: {
                      "@type": "OfferShippingDetails",
                      shippingRate: {
                        "@type": "MonetaryAmount",
                        value: "0",
                        currency: "USD",
                      },
                      shippingDestination: {
                        "@type": "DefinedRegion",
                        addressCountry: "US",
                      },
                      deliveryTime: {
                        "@type": "ShippingDeliveryTime",
                        handlingTime: {
                          "@type": "QuantitativeValue",
                          minValue: 0,
                          maxValue: 1,
                          unitCode: "DAY",
                        },
                        transitTime: {
                          "@type": "QuantitativeValue",
                          minValue: 0,
                          maxValue: 1,
                          unitCode: "DAY",
                        },
                      },
                    },
                  },
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
                        text: "Fusion Calling offers three pricing plans: Starter at $149/month (500 minutes, 2 AI agents), Growth at $297/month (1,200 minutes, 5 AI agents), and Scale at $497/month (2,100 minutes, unlimited AI agents). All plans include custom voice training, calendar integrations, SMS capabilities, and dedicated support.",
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
                },
              ],
            }),
          }}
        />
      </head>
      <body className="relative bg-black">
        {/* Subtle film-grain texture across the whole site */}
        <div className="grain-overlay" aria-hidden />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-foreground"
        >
          Skip to content
        </a>
        <PostHogProvider>
          <SuspendedPostHogPageView />
          <ChatWidget />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
