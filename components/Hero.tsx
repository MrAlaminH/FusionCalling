import Link from "next/link";
import { PhoneCall, Sparkles } from "lucide-react";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HeroForm from "@/components/sub/HeroForm";
import CopyNumberButton from "@/components/sub/CopyNumberButton";
import { Reveal } from "@/components/ui/reveal";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-24 xl:pt-24 relative">
      {/* Brand glow arc (Bolt) + broadcast signal rings (Scale) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-[100%] bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/15" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10" />
        <div className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/5" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl md:py-6 py-10">
        {/* Top pill button */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-6">
          <Link
            href="#show-case"
            className={cn(
              "group inline-flex items-center rounded-full bg-white/10 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] xxs:text-xs sm:text-sm transition-colors hover:bg-white/20",
            )}
          >
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2 text-brand" />
            <span className="text-brand font-medium">
              Manage Business Call Smartly
              <span className="ml-1 sm:ml-1.5 md:ml-2 group-hover:translate-x-0.5 transition-transform inline-block">
                →
              </span>
            </span>
          </Link>
        </div>

        {/* Main heading — rendered visible at first paint (LCP) */}
        <div className="text-center mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4 md:px-6">
          <h1 className="font-display text-2xl xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block">AI Phone Call Agents{" "}</span>
            <span className="block">for Your Business{" "}</span>
            <span className="block bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              Answer Every Call 24/7
            </span>
          </h1>
        </div>

        {/* Subheading — rendered visible at first paint */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 lg:mb-8 px-2 sm:px-4 md:px-6">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed text-balance">
            Fusion Calling is an AI phone call solution for businesses. AI
            call agents answer and place calls 24/7, book appointments,
            qualify leads, and catch every missed call — so no call goes
            unanswered.
          </p>
        </div>

        {/* CTA Button — rendered visible at first paint */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-10 xl:mb-12">
          <Link
            href="#show-case"
            className="inline-flex items-center rounded-md bg-brand px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-medium text-brand-foreground transition hover:bg-brand-strong hover:scale-105 active:scale-[0.98]"
          >
            Start creating with us
            <span className="ml-1 sm:ml-1.5 md:ml-2">→</span>
          </Link>
        </div>

        {/* Demo Card Section */}
        <div className="max-w-[90rem] mx-auto relative">
          {/* Enhanced gradient shadow overlay - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block absolute -bottom-32 left-1/2 -translate-x-1/2 w-[200%] h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-10 blur-2xl pointer-events-none" />
          <div className="hidden md:block absolute -bottom-52 left-1/2 -translate-x-1/2 w-[200%] h-48 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

          <div>
            <NeonGradientCard
              className="w-full dark mb-6 sm:mb-12 md:mb-20 lg:mb-16 relative z-0"
              borderSize={2}
              borderRadius={24}
              neonColors={{
                firstColor: "#fb923c",
                secondColor: "#ea580c",
              }}
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-3 sm:p-4 md:p-6 lg:p-8 relative z-50">
                {/* Left Column */}
                <div className="space-y-4 sm:space-y-6">
                  <span className="inline-block bg-brand text-brand-foreground px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                    Live demo
                  </span>
                  <div className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      Skeptical?{" "}
                      <span className="text-brand-strong">Test it NOW</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400">
                      Talk to our AI agent yourself — it answers, books, and
                      qualifies like a human. Share your details and it dials
                      you, or call in below.
                    </p>

                    {/* Inbound — dial the live agent (tel: opens the phone dialer) */}
                    <div className="rounded-xl border border-brand/30 bg-zinc-800/80 p-3 sm:p-4 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
                          aria-hidden="true"
                        />
                        <span className="text-xs sm:text-sm font-medium text-gray-300">
                          Inbound AI Agent{" "}
                          <span className="text-gray-500">· live 24/7</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href="tel:+14352921249"
                          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-black transition duration-200 hover:bg-brand-strong active:scale-[0.98]"
                        >
                          <PhoneCall className="h-4 w-4" aria-hidden="true" />
                          +1 (435) 292-1249
                        </a>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800">
                          <CopyNumberButton />
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">
                      Number busy or mistyped? Refresh the page to place a new
                      call.
                    </p>

                    {/* Visual anchor — the AI receptionist dissolving out of the
                        dark (same radial-mask blend as the deck title slide), so
                        no edge of the photo ever reads as cut */}
                    <div className="relative h-52 md:h-64 mt-2">
                      <div
                        aria-hidden="true"
                        className="absolute left-4 sm:left-6 bottom-0 w-3/4 h-2/3 rounded-full bg-brand/20 blur-3xl pointer-events-none"
                      />
                      <Image
                        src="/deck/receptionist.webp"
                        alt="Fusion Calling AI receptionist — a humanoid agent on a headset taking a call"
                        width={982}
                        height={941}
                        sizes="(max-width: 768px) 50vw, 280px"
                        className="absolute left-4 sm:left-6 top-0 h-full w-auto [mask-image:radial-gradient(ellipse_72%_78%_at_52%_42%,#000_34%,transparent_70%)]"
                      />
                      <div className="absolute right-0 top-1 sm:top-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                          aria-hidden="true"
                        />
                        <span className="text-[11px] font-medium text-gray-200">
                          Live call
                        </span>
                        <span
                          className="flex items-end gap-[2px] h-3"
                          aria-hidden="true"
                        >
                          {[0, 1, 2, 3].map((i) => (
                            <span
                              key={i}
                              className="w-[2px] h-full rounded-full bg-brand animate-waveform"
                              style={{ animationDelay: `${i * 140}ms` }}
                            />
                          ))}
                        </span>
                      </div>
                      {/* Mini live transcript — a glance at how the call flows */}
                      <div className="absolute right-0 top-10 sm:top-12 flex w-36 flex-col gap-1 sm:gap-1.5 sm:w-44 md:w-52">
                        <Reveal delay={0.15} duration={0.4}>
                          <div className="ml-auto max-w-[92%] rounded-lg rounded-br-sm border border-white/10 bg-zinc-900/80 px-2 py-1 backdrop-blur-sm sm:px-2.5 sm:py-1.5">
                            <p className="text-[9px] leading-tight text-gray-300 sm:text-[11px] sm:leading-snug">
                              <span className="font-semibold text-gray-500">
                                Caller ·{" "}
                              </span>
                              Hi, do you have anything open on Thursday?
                            </p>
                          </div>
                        </Reveal>
                        <Reveal delay={0.3} duration={0.4}>
                          <div className="mr-auto max-w-[92%] rounded-lg rounded-bl-sm border border-brand/25 bg-brand/15 px-2 py-1 backdrop-blur-sm sm:px-2.5 sm:py-1.5">
                            <p className="text-[9px] leading-tight text-gray-100 sm:text-[11px] sm:leading-snug">
                              <span className="font-semibold text-brand-light">
                                AI ·{" "}
                              </span>
                              Yes, we have 9:30 or 11:15 with Dr. Patel.
                            </p>
                          </div>
                        </Reveal>
                        <Reveal delay={0.45} duration={0.4}>
                          <div className="ml-auto max-w-[92%] rounded-lg rounded-br-sm border border-white/10 bg-zinc-900/80 px-2 py-1 backdrop-blur-sm sm:px-2.5 sm:py-1.5">
                            <p className="text-[9px] leading-tight text-gray-300 sm:text-[11px] sm:leading-snug">
                              <span className="font-semibold text-gray-500">
                                Caller ·{" "}
                              </span>
                              9:30 works for me.
                            </p>
                          </div>
                        </Reveal>
                        <Reveal delay={0.6} duration={0.4}>
                          <div className="mr-auto max-w-[92%] rounded-lg rounded-bl-sm border border-brand/25 bg-brand/15 px-2 py-1 backdrop-blur-sm sm:px-2.5 sm:py-1.5">
                            <p className="text-[9px] leading-tight text-gray-100 sm:text-[11px] sm:leading-snug">
                              <span className="font-semibold text-brand-light">
                                AI ·{" "}
                              </span>
                              Perfect, you&apos;re booked. I&apos;ll text you
                              the details.
                            </p>
                          </div>
                        </Reveal>
                      </div>
                    </div>
                  </div>
                </div>

                {/* OR Divider - Only visible on mobile */}
                <div className="md:hidden flex items-center justify-center my-6">
                  <div className="bg-zinc-700/50 h-[1px] flex-grow"></div>
                  <span className="px-4 text-brand-strong text-xl font-medium">
                    OR
                  </span>
                  <div className="bg-zinc-700/50 h-[1px] flex-grow"></div>
                </div>

                {/* Right Column - Form */}
                <div className="bg-zinc-900 z-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-brand/20 relative mx-[-12px] sm:mx-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Image
                        src="/logo.webp"
                        alt="Fusion Calling logo"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white ">
                        Outbound AI Agent
                      </h3>
                      <p className="text-brand-strong text-sm">
                        Representative
                      </p>
                    </div>
                  </div>

                  <HeroForm />
                </div>
              </div>
            </NeonGradientCard>
          </div>
        </div>
      </div>
    </div>
  );
}
