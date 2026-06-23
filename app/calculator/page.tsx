import { Metadata } from "next";
import VoiceCalculator from "./VoiceCalculator";

export const metadata: Metadata = {
  title: "Voice Throughput Calculator | AI Call Capacity Planning",
  description: "Calculate your AI voice call throughput capacity. Plan lead processing, forecast call volumes, and optimize infrastructure for Vapi and Retell AI platforms.",
  keywords: [
    "voice throughput calculator",
    "AI call capacity planning",
    "lead processing calculator",
    "voice automation scaling",
    "Vapi calculator",
    "Retell AI calculator",
    "call center capacity",
    "AI voice forecasting"
  ],
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    title: "Voice Throughput Calculator | AI Call Capacity Planning",
    description: "Calculate your AI voice call throughput capacity. Plan lead processing, forecast call volumes, and optimize infrastructure.",
    url: "https://www.fusioncalling.com/calculator",
    siteName: "Fusion Calling",
    type: "website",
  },
};

export default function CalculatorPage() {
  return <VoiceCalculator />;
}
