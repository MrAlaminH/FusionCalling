import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const rows = [
  {
    feature: "Monthly cost",
    fusion: "$149–497/mo flat — every plan",
    human: "$1–3 per minute, plus setup fees",
    voicemail: "Free — but ~4 in 5 first-time callers never call back",
  },
  {
    feature: "Availability",
    fusion: "24/7/365, holidays included",
    human: "Shift-based; nights and weekends cost extra",
    voicemail: "Never answers",
  },
  {
    feature: "Peak-hour handling",
    fusion: "Unlimited simultaneous calls — no queue, ever",
    human: "Callers queue behind available staff",
    voicemail: "One voicemail box for everyone",
  },
  {
    feature: "Booking on the call",
    fusion: "Books into your live calendar availability",
    human: "Takes a message; someone calls back later",
    voicemail: "Nothing",
  },
  {
    feature: "Follow-up",
    fusion: "SMS confirmation and next steps sent during the call",
    human: "Manual callback, next business day",
    voicemail: "Depends on the caller leaving a message",
  },
  {
    feature: "Urgent call handling",
    fusion: "Warm transfer with transcript and caller details attached",
    human: "Message relayed to your team",
    voicemail: "Found late, if at all",
  },
];

/**
 * Objection-handling comparison table placed directly above pricing.
 * Semantic <table> with sr-only caption — same featured-snippet pattern
 * as the receptionist page's table.
 */
export default function ComparisonTableSection() {
  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Reveal animation="animate-fade-in-up" className="flex flex-col items-center mb-10 md:mb-14">
          <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
            The Comparison
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 text-balance">
            AI call agents vs.{" "}
            <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
              every alternative
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-3xl text-balance">
            Human answering services bill by the minute and work in shifts;
            voicemail quietly loses the callers who never call back. Here is
            the same job, side by side.
          </p>
        </Reveal>

        <Reveal animation="animate-fade-in-up" className="mb-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[720px] text-sm">
            <caption className="sr-only">
              AI call agents compared with human answering services and voicemail
            </caption>
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-gray-400"
                >
                  What matters
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-center font-semibold text-brand-light bg-brand/[0.08]"
                >
                  Fusion Calling AI
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-center font-semibold text-gray-400"
                >
                  Human answering service
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-center font-semibold text-gray-400"
                >
                  Voicemail
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <th
                    scope="row"
                    className="px-4 py-3 text-left font-medium text-gray-300"
                  >
                    {row.feature}
                  </th>
                  <td className="px-4 py-3 text-center text-gray-200 bg-brand/[0.08]">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-strong flex-shrink-0" />
                      {row.fusion}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-400">{row.human}</td>
                  <td className="px-4 py-3 text-center text-gray-500">{row.voicemail}</td>
                </tr>
              ))}
              <tr>
                <th scope="row" className="px-4 py-3 text-left font-medium text-gray-300">
                  Getting started
                </th>
                <td className="px-4 py-3 text-center bg-brand/[0.08]">
                  <Link
                    href="#calendar"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground transition hover:bg-brand-strong"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Book a demo
                  </Link>
                </td>
                <td className="px-4 py-3 text-center text-gray-500">
                  <span className="inline-flex items-center justify-center gap-1.5">
                    <Minus className="w-3.5 h-3.5" />
                    Sales cycle, then staffing
                  </span>
                </td>
                <td className="px-4 py-3 text-center text-gray-500">
                  <span className="inline-flex items-center justify-center gap-1.5">
                    <Minus className="w-3.5 h-3.5" />
                    Already set up, unfortunately
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </Reveal>

        <Reveal animation="animate-fade-in-up" className="text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Comparing providers instead?{" "}
            <Link
              href="/alternative"
              className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
            >
              See how Fusion Calling compares to other AI platforms
            </Link>
            , or{" "}
            <Link
              href="/pricing"
              className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
            >
              compare every plan
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </div>
  );
}
