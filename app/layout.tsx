import type { Metadata } from "next";
import "./globals.css";

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
        <div className="fixed" />
        {children}
      </body>
    </html>
  );
}
