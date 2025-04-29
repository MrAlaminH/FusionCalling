import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fusioncalling.com/"),
  title: {
    default: "Welcome to Fusion Calling",
    template: "Revolutionize Your Business with AI Phone call Automation",
  },
  description: "Revolutionize Your Business with AI Phone call Automation",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className="relative bg-black">
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}
