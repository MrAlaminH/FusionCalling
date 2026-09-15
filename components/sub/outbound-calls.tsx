import {
  ShoppingCart,
  Clipboard,
  User,
  Calendar,
  Briefcase,
  RefreshCcw,
} from "lucide-react";
import UseCasePanel from "./use-case-panel";

export default function OutboundCalls() {
  return (
    <UseCasePanel
      image="/agent2.webp"
      imageAlt="AI outbound call agent illustration for sales and lead qualification"
      title="Outbound Calls"
      lede="Automate and optimize the management of outbound calls to increase your team's efficiency and reach more customers."
      body="With our advanced tools, you can streamline your calling processes, ensuring that your team can focus on what matters most—building relationships and closing deals. Experience a new level of productivity and customer engagement."
      transcript={[
        {
          speaker: "AI",
          text: "Hi, this is Riley from Brightline Realty — do you have a quick minute?",
        },
        { speaker: "Caller", text: "Sure, what's this about?" },
        {
          speaker: "AI",
          text: "You asked about a valuation last week. I have Tuesday at 2 PM open — shall I book it?",
        },
        { speaker: "Caller", text: "Tuesday works." },
      ]}
      items={[
        {
          icon: ShoppingCart,
          title: "Sales",
          description:
            "Contact potential customers to sell products or services, increasing revenue and expanding the customer base.",
        },
        {
          icon: Clipboard,
          title: "Surveys and feedback",
          description:
            "Conduct satisfaction surveys and collect feedback to improve the services provided.",
        },
        {
          icon: User,
          title: "Lead prequalification",
          description:
            "Call potential customers and filter them before being called by real agents, facilitating the closing of transactions.",
        },
        {
          icon: Calendar,
          title: "Confirmations and follow-up",
          description:
            "Confirm reservations, appointments, and make adjustments if necessary, ensuring an easy experience for customers.",
        },
        {
          icon: RefreshCcw,
          title: "Renewals and upselling",
          description:
            "Contact existing customers to renew contracts or sell additional products and services.",
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
