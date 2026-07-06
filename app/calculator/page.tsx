import { Metadata } from "next";
import VoiceCalculator from "./VoiceCalculator";
import { buildOpenGraph } from "@/lib/seo";

const title = "Voice Throughput Calculator | AI Call Capacity Planning";
const description =
  "Calculate your AI voice call throughput capacity. Plan lead processing, forecast call volumes, and optimize infrastructure for Vapi and Retell AI platforms.";

export const metadata: Metadata = {
  title,
  description,
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
  ...buildOpenGraph({ title, description, path: "/calculator" }),
};

export default function CalculatorPage() {
  return <VoiceCalculator />;
}
