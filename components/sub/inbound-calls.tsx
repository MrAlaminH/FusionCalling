import {
  Calendar,
  HelpCircle,
  AlertCircle,
  LifeBuoy,
  User,
  Briefcase,
} from "lucide-react";
import UseCasePanel from "./use-case-panel";

export default function InboundCalls() {
  return (
    <UseCasePanel
      image="/agent.webp"
      imageAlt="AI inbound call agent illustration handling customer appointments and FAQs"
      title="Inbound Calls Management"
      lede="Automate the management of inbound calls to improve customer experience and increase operational efficiency. Our system intelligently routes calls, ensuring that customers are connected to the right department without delay."
      body="With advanced analytics, you can track call patterns and customer interactions, allowing for continuous improvement in service delivery. Experience a seamless integration with your existing systems for a hassle-free setup."
      transcript={[
        { speaker: "Caller", text: "Hi, I need to reschedule my appointment." },
        {
          speaker: "AI",
          text: "Of course. I have Thursday at 10 AM or Friday at 3 PM — which works better for you?",
        },
        { speaker: "Caller", text: "Thursday at 10, please." },
        {
          speaker: "AI",
          text: "Done — you're booked for Thursday at 10 AM. A confirmation text is on its way.",
        },
      ]}
      items={[
        {
          icon: Calendar,
          title: "Appointments",
          description:
            "Manage and confirm customer appointments without human intervention, saving time.",
        },
        {
          icon: HelpCircle,
          title: "Frequently asked questions",
          description:
            "Automatically answer frequently asked customer questions, reducing call volume to operators.",
        },
        {
          icon: AlertCircle,
          title: "Complaints and claims",
          description:
            "Record and resolve complaints in accordance with company procedures.",
        },
        {
          icon: LifeBuoy,
          title: "Product support",
          description:
            "Provide detailed information about your products, guiding customers through the buying process.",
        },
        {
          icon: User,
          title: "Customer support",
          description:
            "Provide general customer support using integration with the company's database.",
        },
        {
          icon: Briefcase,
          title: "Your business",
          description:
            "Easily create and customize AI voice agents to handle any scenario your business needs—no coding required.",
        },
      ]}
    />
  );
}
