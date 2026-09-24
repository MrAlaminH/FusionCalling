import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, FileText, PhoneCall, ShieldCheck, Timer, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const panels = [
  {
    icon: PhoneCall,
    title: "Live call queue",
    text: "Watch every AI phone call as it happens — inbound and outbound, with outcome tags the moment a call ends.",
  },
  {
    icon: FileText,
    title: "Transcripts & recordings",
    text: "Every call arrives transcribed, tagged, and searchable, so you audit quality instead of trusting a service report.",
  },
  {
    icon: CalendarCheck,
    title: "Bookings & follow-ups",
    text: "Appointments land in your real calendar and SMS confirmations go out automatically while the caller stays on the line.",
  },
];

const trustChips = [
  { icon: Timer, label: "99.9% uptime guarantee" },
  { icon: Star, label: "4.8/5 customer satisfaction" },
  { icon: ShieldCheck, label: "14-day money-back guarantee" },
];

/**
 * Product-UI section for the homepage: real dashboard shot in a browser
 * frame plus a bento row explaining what the dashboard shows. Server
 * component — all copy renders in the HTML for crawlers.
 */
export default function DashboardSection() {
  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Reveal animation="animate-fade-in-up" className="flex flex-col items-center mb-10 md:mb-14">
          <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
            The Product
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 text-balance">
            Every call, transcript, and booking in{" "}
            <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
              one dashboard
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-3xl text-balance">
            Your AI call agents work around the clock — the dashboard shows you
            exactly what they did: live call activity, full transcripts,
            calendar bookings, and SMS follow-ups across every campaign.
          </p>
        </Reveal>

        <Reveal animation="animate-fade-in-up" className="relative max-w-5xl mx-auto">
          {/* Browser frame around the real product shot */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-brand/10 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="mx-auto text-xs text-gray-500 bg-black/40 border border-white/5 rounded-md px-3 py-1">
                app.fusioncalling.com
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
            </div>
            <div className="relative w-full aspect-[1660/800]">
              <Image
                src="/deck/dashboard.webp"
                alt="Fusion Calling dashboard showing AI call activity, transcripts, and booked appointments"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                loading="lazy"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>

        {/* What the dashboard shows — bento row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mt-6 md:mt-8">
          {panels.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} animation="animate-fade-in-up" delay={i * 0.08}>
              <div className="h-full rounded-xl border border-brand/20 bg-black/40 p-5">
                <div className="w-9 h-9 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-strong" />
                </div>
                <h3 className="font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust chips */}
        <Reveal animation="animate-fade-in-up" className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {trustChips.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs sm:text-sm text-gray-300"
            >
              <Icon className="w-3.5 h-3.5 text-brand-strong" />
              {label}
            </span>
          ))}
        </Reveal>

        <Reveal animation="animate-fade-in-up" className="text-center mt-8">
          <p className="text-gray-400 text-sm sm:text-base">
            Want to see it on your own numbers?{" "}
            <Link
              href="#calendar"
              className="text-brand hover:text-brand-light underline underline-offset-4 hover:underline transition-colors"
            >
              Book a discovery call
            </Link>{" "}
            and we&apos;ll walk the dashboard with you.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
