import Link from "next/link";
import {
  ArrowUpRight,
  AudioLines,
  CalendarCheck,
  Check,
  UserRound,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Turn =
  | { kind: "line"; speaker: "ai" | "caller"; at: string; text: string }
  | { kind: "event"; icon: "calendar" | "transfer"; text: string };

/**
 * Example call rendered as the dashboard call-detail view: transcript,
 * mid-call actions, and the auto-logged outcome. Server-rendered — every
 * word is crawlable text, and the only animation is a CSS waveform.
 */
const callTurns: Turn[] = [
  {
    kind: "line",
    speaker: "ai",
    at: "00:01",
    text: "Thanks for calling Bright Smile Dental, this is Rachel. How can I help you today?",
  },
  {
    kind: "line",
    speaker: "caller",
    at: "00:07",
    text: "Hi — I need to move my cleaning appointment. I can't make Tuesday.",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "00:12",
    text: "No problem, I have you down for Tuesday at 2:30 PM. I can move you to Thursday at 10:00 AM or Friday at 3:15 PM — which works better?",
  },
  { kind: "line", speaker: "caller", at: "00:21", text: "Thursday at 10 works." },
  {
    kind: "event",
    icon: "calendar",
    text: "Appointment moved to Thu 10:00 AM · confirmation SMS sent",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "00:27",
    text: "You're all set for Thursday at 10 AM, and I've texted you a confirmation. Anything else I can help with?",
  },
  {
    kind: "line",
    speaker: "caller",
    at: "00:34",
    text: "Actually, yes — quick question about my last bill.",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "00:39",
    text: "That's one for our billing team. Connecting you with Sarah now — I'll pass along your details and the transcript so you don't have to repeat yourself.",
  },
  {
    kind: "event",
    icon: "transfer",
    text: "Warm transfer to Sarah (Billing) · transcript and caller details attached",
  },
];

const outcomeChips = [
  "Rescheduled to Thu 10:00 AM",
  "SMS confirmation sent",
  "Calendar + CRM updated",
  "Handled without staff",
];

function EventIcon({ name }: { name: "calendar" | "transfer" }) {
  const Icon = name === "calendar" ? CalendarCheck : ArrowUpRight;
  return <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
}

function TurnRow({ turn }: { turn: Turn }) {
  if (turn.kind === "event") {
    return (
      <div className="flex justify-center">
        <p className="inline-flex items-center gap-2 max-w-full rounded-full border border-brand/25 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-brand-light">
          <EventIcon name={turn.icon} />
          <span className="sm:whitespace-nowrap">{turn.text}</span>
        </p>
      </div>
    );
  }

  const isAi = turn.speaker === "ai";
  return (
    <div
      className={cn(
        "flex gap-2.5 items-end max-w-[92%] sm:max-w-[85%]",
        isAi ? "ml-auto flex-row-reverse" : "mr-auto"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 mb-0.5",
          isAi ? "bg-brand/15 border-brand/30" : "bg-white/5 border-white/15"
        )}
      >
        {isAi ? (
          <AudioLines className="w-3.5 h-3.5 text-brand" />
        ) : (
          <UserRound className="w-3.5 h-3.5 text-gray-300" />
        )}
      </span>
      <div
        className={cn(
          "rounded-xl border px-3.5 py-2.5",
          isAi
            ? "rounded-br-sm bg-brand/[0.08] border-brand/20"
            : "rounded-bl-sm bg-white/[0.03] border-white/10"
        )}
      >
        <p className="flex items-center gap-2 mb-1 text-[11px]">
          <span
            className={cn(
              "font-semibold",
              isAi ? "text-brand-light" : "text-gray-300"
            )}
          >
            {isAi ? "Rachel · AI Receptionist" : "Caller · (312) 555-0134"}
          </span>
          <span className="text-gray-500 tabular-nums">{turn.at}</span>
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">{turn.text}</p>
      </div>
    </div>
  );
}

export default function CallDemo() {
  return (
    <figure className="relative max-w-3xl mx-auto">
      <div
        aria-hidden="true"
        className="absolute -inset-x-10 top-16 h-64 rounded-full bg-brand/10 blur-[100px] pointer-events-none"
      />
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] shadow-premium-lg p-1.5 text-left">
        {/* Call header */}
        <div className="flex items-center gap-3 px-3 py-2.5 border-b border-white/10">
          <span
            aria-hidden="true"
            className="w-9 h-9 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center shrink-0"
          >
            <AudioLines className="w-4 h-4 text-brand" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-white truncate">
              Rachel — AI Receptionist
            </span>
            <span className="block text-[11px] text-gray-500 truncate">
              Bright Smile Dental · Inbound
            </span>
          </span>
          <span className="ml-auto flex items-center gap-3">
            <span
              aria-hidden="true"
              className="hidden sm:flex items-end gap-[3px] h-4"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="w-[3px] h-full rounded-full bg-brand/80 animate-waveform"
                  style={{ animationDelay: `${i * 140}ms` }}
                />
              ))}
            </span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-gray-300">
              <span
                className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"
                aria-hidden="true"
              />
              Live · <span className="tabular-nums">00:47</span>
            </span>
          </span>
        </div>

        {/* Transcript */}
        <div className="m-1.5 rounded-xl border border-white/5 bg-black/50 p-3.5 sm:p-5 space-y-3">
          {callTurns.map((turn, i) => (
            <Reveal
              key={i}
              animation="animate-fade-in-up"
              delay={Math.min(i * 0.08, 0.5)}
              duration={0.4}
            >
              <TurnRow turn={turn} />
            </Reveal>
          ))}
        </div>

        {/* Auto-logged outcome */}
        <div className="px-3 pb-2.5 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 mb-2">
            After the call
          </p>
          <ul className="flex flex-wrap gap-2">
            {outcomeChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-gray-300"
              >
                <Check className="w-3 h-3 text-brand" aria-hidden="true" />
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="text-center text-sm text-gray-500 mt-5 max-w-xl mx-auto">
        An example AI receptionist call, shown as it appears in your Fusion
        Calling dashboard — full transcript, actions taken mid-call, and the
        outcome logged automatically.{" "}
        <Link
          href="/#show-case"
          className="text-brand-light hover:text-brand transition-colors underline-offset-4 hover:underline"
        >
          Hear real demo calls
        </Link>
        .
      </figcaption>
    </figure>
  );
}
