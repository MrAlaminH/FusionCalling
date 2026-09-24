import Link from "next/link";
import { PhoneIncoming, Brain, CalendarCheck, Forward, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

/**
 * Visible steps double as the HowTo JSON-LD source in app/page.tsx —
 * keep this array and the rendered section in sync.
 */
export const callFlowSteps = [
  {
    icon: PhoneIncoming,
    title: "Answers on the first ring",
    text: "Your AI call agent picks up instantly — nights, weekends, holidays, and every simultaneous caller. No hold queue, no voicemail dead end.",
  },
  {
    icon: Brain,
    title: "Understands your business",
    text: "Trained on your services, pricing, hours, and policies, it holds a natural conversation and answers real questions — not scripts.",
  },
  {
    icon: CalendarCheck,
    title: "Acts on the call",
    text: "It books into your live calendar availability, qualifies the lead against your criteria, takes detailed messages, and sends SMS confirmations.",
  },
  {
    icon: Forward,
    title: "Hands off when it should",
    text: "Emergencies and VIPs warm-transfer to your team with the transcript attached, so the handoff picks up mid-context instead of starting over.",
  },
];

const transcript = [
  {
    speaker: "Agent",
    line: "Thanks for calling Bright Smile Dental — this is Maya. How can I help you today?",
  },
  {
    speaker: "Caller",
    line: "Hi, do you have any openings Thursday morning for a cleaning?",
  },
  {
    speaker: "Agent",
    line: "We do — I can offer Thursday at 9:30 or 11:15 AM with Dr. Patel. Which works better?",
  },
  {
    speaker: "Caller",
    line: "9:30 works.",
  },
];

/**
 * "What happens on a call" section: numbered moments on the left, a
 * server-rendered live-call UI card on the right. The transcript is
 * crawlable HTML content, not an image.
 */
export default function CallFlowSection() {
  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: explanation */}
          <div>
            <Reveal animation="animate-fade-in-up">
              <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
                On Every Call
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                What an AI call agent does,{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  minute by minute
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                Here&apos;s the anatomy of one call — the same flow runs on
                your inbound line and your outbound campaigns, 24/7.
              </p>
            </Reveal>
            <div className="space-y-8">
              {callFlowSteps.map((step, i) => (
                <Reveal key={step.title} animation="animate-fade-in-up" delay={i * 0.08}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-brand-strong" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1.5">
                        <span className="text-brand-strong mr-2">{i + 1}.</span>
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal animation="animate-fade-in-up" className="mt-10">
              <p className="text-gray-400 text-sm sm:text-base">
                Hear the real thing instead of reading it —{" "}
                <Link
                  href="#show-case"
                  className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
                >
                  play live demo calls
                </Link>{" "}
                recorded on the platform.
              </p>
            </Reveal>
          </div>

          {/* Right: live-call UI card (illustrative transcript, crawlable HTML) */}
          <Reveal animation="animate-fade-in-up" delay={0.1}>
            <div className="rounded-2xl border border-brand/20 bg-zinc-950 shadow-2xl shadow-brand/10 overflow-hidden">
              {/* Call header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-sm font-semibold text-brand-light">
                    SC
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white leading-tight">
                      Sarah C. · +1 (914) 555-0142
                    </p>
                    <p className="text-xs text-gray-500">Bright Smile Dental — inbound line</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live · 00:42
                </span>
              </div>

              {/* Waveform */}
              <div className="flex items-center justify-center gap-1 h-12 px-6 border-b border-white/10" aria-hidden="true">
                {[0.9, 0.5, 1.1, 0.7, 0.4, 1.0, 0.6, 0.9, 0.5, 0.8, 1.2, 0.6, 0.9, 0.5, 1.0, 0.7, 0.4, 0.9, 1.1, 0.6].map(
                  (h, i) => (
                    <span
                      key={i}
                      className="wave-bar w-1 rounded-full bg-brand/60"
                      style={{ height: `${h * 28}px`, animationDelay: `${i * 0.09}s` }}
                    />
                  ),
                )}
              </div>

              {/* Transcript */}
              <div className="px-5 py-4 space-y-3">
                {transcript.map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <span
                      className={`flex-shrink-0 w-16 text-right text-[11px] font-semibold uppercase tracking-wide pt-0.5 ${
                        t.speaker === "Agent" ? "text-brand-strong" : "text-gray-500"
                      }`}
                    >
                      {t.speaker}
                    </span>
                    <p className="text-sm text-gray-300 leading-relaxed">{t.line}</p>
                  </div>
                ))}
              </div>

              {/* Outcome strip */}
              <div className="px-5 py-4 border-t border-white/10 bg-white/[0.02] space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">
                    Booked: <span className="text-white font-medium">Cleaning · Thu 9:30 AM · Dr. Patel</span>
                  </span>
                </div>
                <div className="rounded-lg bg-zinc-900 border border-white/5 px-3.5 py-2.5 text-xs text-gray-400">
                  <span className="text-brand-strong font-medium">SMS sent</span> — confirmation
                  with address and reschedule link delivered to the caller&apos;s phone.
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-600 mt-3">
              Example transcript from a demo deployment.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
