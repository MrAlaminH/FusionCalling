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
    "Boost your business efficiency with Fusion Calling's AI-powered ai receptionist phone call automation. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
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
                  brand: {
                    "@id": "https://www.fusioncalling.com/#organization",
                  },
                  category: "Business Automation",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fusioncalling.com/",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "150",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.fusioncalling.com/#faqpage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is your development process?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We follow a structured, results-driven approach to building AI solutions: 1) Discovery – We analyze your workflows and customer interactions to pinpoint where AI can add the most value. 2) Validation – We ensure AI aligns with your goals and delivers a strong return on investment. 3) Design & Development – We create AI-powered agents and integrate them seamlessly into your systems. 4) Testing – We rigorously test for accuracy, reliability, and a smooth user experience. 5) Deployment & Optimization – We launch your AI solution, monitor its performance, and fine-tune it for peak efficiency.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How long does it take to deploy an AI agent?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most AI agents go live within 4 weeks after proposal approval. However, timelines may vary depending on the complexity of conversational flows, required functionalities, and system integrations.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can your AI agents integrate with our existing systems?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes! Our AI agents are built to work seamlessly with your current systems, enhancing functionality without disrupting existing operations.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What kind of support do you offer after deployment?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We provide two flexible support options: 1) Managed Services – 24/7 monitoring, ongoing support, regular AI model updates, and performance analytics. 2) Adhoc Services – Hourly support as needed, ideal for teams that prefer to manage their AI solutions in-house.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do you ensure projects are completed on time and meet high-quality standards?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We follow a structured project timeline with clear milestones and deliverables. Our rigorous testing process ensures reliability, and we keep you updated with regular progress reports throughout development.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What tools and technologies do you use?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We leverage cutting-edge AI technologies tailored to your needs, including: AI Models: OpenAI GPT, Claude, Gemini; Voice Agent Development: Retell, Vapi, ElevenLabs; Chatbot Development: Voiceflow, Botpress; Automation Platforms: Make, Zapier, n8n. AI is constantly evolving, and we stay ahead by using the most advanced and suitable tools for your project.",
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
