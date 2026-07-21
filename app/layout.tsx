import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";
import { PostHogProvider } from "./providers";
import SuspendedPostHogPageView from "./PostHogPageView";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
    template: "%s | Fusion Calling",
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
        {/* Search-engine verification tags. Rendered only when the matching
            env var is provided, so deploying without them is harmless. The user
            pastes their Google Search Console / Bing WMT codes into env. */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION ? (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GSC_VERIFICATION}
          />
        ) : null}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION ? (
          <meta
            name="msvalidate.01"
            content={process.env.NEXT_PUBLIC_BING_VERIFICATION}
          />
        ) : null}
        {process.env.NEXT_PUBLIC_YANDEX_VERIFICATION ? (
          <meta
            name="yandex-verification"
            content={process.env.NEXT_PUBLIC_YANDEX_VERIFICATION}
          />
        ) : null}
        {/* Resource hints for third-party origins used on the page */}
        <link rel="preconnect" href="https://cal.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://n8n.deployify.xyz" />
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
                      url: "https://www.fusioncalling.com/logo.webp",
                      width: 512,
                      height: 512,
                    },
                    description:
                      "AI-powered phone call automation for businesses. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
                    sameAs: [
                      "https://twitter.com/fusioncalling",
                      "https://www.linkedin.com/company/fusion-calling/",
                    ],
                    contactPoint: {
                      "@type": "ContactPoint",
                      telephone: "+1-202-998-3591",
                      contactType: "sales",
                      areaServed: "US",
                      availableLanguage: "English",
                    },
                  },
                  {
                    "@type": "Person",
                    "@id": "https://www.fusioncalling.com/team/voice-team#person",
                    name: "Fusion Calling Voice Team",
                    url: "https://www.fusioncalling.com/team/fusioncalling-team",
                    jobTitle: "Product & Voice Engineering",
                    worksFor: {
                      "@id": "https://www.fusioncalling.com/#organization",
                    },
                    description: "The team behind Fusion Calling's voice AI platform. 500+ agencies, millions of calls automated.",
                    image: "https://www.fusioncalling.com/avatars/team.webp",
                    sameAs: [
                      "https://www.linkedin.com/company/fusion-calling/",
                      "https://twitter.com/fusioncalling",
                    ],
                    email: "team@fusioncalling.com",
                    knowsAbout: [
                      "Voice AI",
                      "Conversational AI",
                      "White-label SaaS",
                      "Agency Growth",
                      "AI Phone Automation",
                    ],
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
                      urlTemplate:
                        "https://www.fusioncalling.com/search?q={search_term_string}",
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
                  image: "https://www.fusioncalling.com/cardImage.jpg",
                  brand: {
                    "@type": "Brand",
                    name: "Fusion Calling",
                  },
                  category: "Business Automation",
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
