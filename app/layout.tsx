import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";
import { PostHogProvider } from "./providers";
import SuspendedPostHogPageView from "./PostHogPageView";
import { SITE_URL } from "@/lib/site-url";

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
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "Fusion Calling | AI Phone Call Automation for Businesses",
    template: "%s | Fusion Calling",
  },
  description:
    "Boost business efficiency with Fusion Calling's AI-powered phone call automation. Streamline customer interactions, save time, and increase productivity.",
  twitter: {
    card: "summary_large_image",
    site: "@fusioncalling",
    title: "Fusion Calling | AI Phone Call Automation for Businesses",
    description:
      "Launch a white-label AI voice agency with Fusion Calling. Streamline customer interactions, save time, and increase productivity with advanced voice AI.",
    images: ["/opengraph-image.png"],
  },
  openGraph: {
    title: "Fusion Calling | AI Phone Call Automation for Businesses",
    description:
      "Boost your business efficiency with Fusion Calling's AI-powered phone call automation. Streamline customer interactions, save time, and increase productivity.",
    url: `${SITE_URL}/`,
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
                  "@id": `${SITE_URL}/#organization`,
                  name: "Fusion Calling",
                  url: `${SITE_URL}/`,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/logo.webp`,
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
                    telephone: "+1-914-639-4069",
                    contactType: "sales",
                    areaServed: "US",
                    availableLanguage: "English",
                    email: "hello@fusioncalling.com",
                  },
                },
                {
                  "@type": "Person",
                  "@id": `${SITE_URL}/team/voice-team#person`,
                  name: "Fusion Calling Voice Team",
                  url: `${SITE_URL}/team/voice-team`,
                  jobTitle: "Product & Voice Engineering",
                  worksFor: {
                    "@id": `${SITE_URL}/#organization`,
                  },
                  description:
                    "The team behind Fusion Calling's voice AI platform. 500+ agencies, millions of calls automated.",
                  image: `${SITE_URL}/avatars/team.webp`,
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
                  "@id": `${SITE_URL}/#website`,
                  url: `${SITE_URL}/`,
                  name: "Fusion Calling",
                  description:
                    "AI-powered phone call automation for businesses",
                  publisher: {
                    "@id": `${SITE_URL}/#organization`,
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
