import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/white-label/Hero";
import ValueProp from "@/components/white-label/ValueProp";
import Features from "@/components/white-label/Features";
import HowItWorks from "@/components/white-label/HowItWorks";
import Pricing from "@/components/white-label/Pricing";
import Benefits from "@/components/white-label/Benefits";
import FAQ from "@/components/white-label/FAQ";
import CTA from "@/components/white-label/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White-label AI Voice Solution | Fusion Calling Partner Program",
  description:
    "Become a Fusion Calling partner and white-label our AI voice solution. Offer powerful AI phone automation under your own brand. Full branding, custom voice training, and dashboard included.",
  keywords: [
    "white-label AI voice solution",
    "resell AI phone automation",
    "agency partnership program",
    "AI voice reseller",
    "white-label call center AI",
    "agency SaaS partnership",
  ],
  openGraph: {
    title: "White-label AI Voice Solution | Fusion Calling Partner Program",
    description:
      "Become a Fusion Calling partner and white-label our AI voice solution. Offer powerful AI phone automation under your own brand.",
    url: "https://www.fusioncalling.com/whitelevel",
    siteName: "Fusion Calling",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Fusion Calling - White-label AI Voice Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WhiteLevelPage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <WhiteLabelNavbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="value-prop">
        <ValueProp />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </main>
  );
}
