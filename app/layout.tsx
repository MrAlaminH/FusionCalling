import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";
import { PostHogProvider } from "./providers";
import SuspendedPostHogPageView from "./PostHogPageView";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fusioncalling.com/"),
  title: {
    default: "Fusion Calling | AI Phone Call Automation for Businesses",
    template: "%s | Fusion Calling - AI Phone Call Automation",
  },
  description:
    "Boost your business efficiency with Fusion Calling's AI-powered phone call automation. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
  keywords: [
    "AI phone call automation",
    "business automation",
    "voice technology",
    "customer service AI",
    "Fusion Calling",
    "automated calls",
    "AI telephony",
    "virtual agent",
    "lead generation AI",
    "call center automation",
  ],
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fusioncalling",
    title: "Fusion Calling | AI Phone Call Automation for Businesses",
    description:
      "Boost your business efficiency with Fusion Calling's AI-powered phone call automation. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
    images: ["/opengraph-image.png"],
  },
  openGraph: {
    title: "Fusion Calling | AI Phone Call Automation for Businesses",
    description:
      "Boost your business efficiency with Fusion Calling's AI-powered phone call automation. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
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
    <html lang="en" className="scroll-smooth ">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fusion Calling",
            url: "https://www.fusioncalling.com/",
            logo: "https://www.fusioncalling.com/logo.png",
            description:
              "AI-powered phone call automation for businesses. Streamline customer interactions, save time, and increase productivity with advanced voice technology.",
            sameAs: ["https://twitter.com/fusioncalling"],
          })}
        </script>
      </head>
      <body className="relative bg-black">
        <PostHogProvider>
          <SuspendedPostHogPageView />
          <ChatWidget />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
