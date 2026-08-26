import Link from "next/link";
import { Sparkles } from "lucide-react";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import HeroForm from "@/components/sub/HeroForm";
import CopyNumberButton from "@/components/sub/CopyNumberButton";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 relative">
      {/* Background Pattern SVG */}
      <svg
        className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-pattern-bg"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#hero-pattern-bg)"
        ></rect>
      </svg>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl md:py-6 py-10">
        {/* Top pill button */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
          <Link
            href="#show-case"
            className={cn(
              "group inline-flex items-center rounded-full bg-white/10 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] xxs:text-xs sm:text-sm transition-colors hover:bg-white/20",
            )}
          >
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
            <AnimatedShinyText className="text-white hover:text-white/90">
              Manage Business Call Smartly
              <span className="ml-1 sm:ml-1.5 md:ml-2 group-hover:translate-x-0.5 transition-transform inline-block">
                →
              </span>
            </AnimatedShinyText>
          </Link>
        </div>

        {/* Main heading — rendered visible at first paint (LCP) */}
        <div className="text-center mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4 md:px-6">
          <h1 className="font-display text-2xl xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            Transform Your Business
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap"> </span>
            with{" "}
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              AI Phone Call Automation
            </span>
          </h1>
        </div>

        {/* Subheading — rendered visible at first paint */}
        <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-4 md:px-6">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed">
            Fusion Calling is an AI phone automation platform that handles
            inbound and outbound calls 24/7. Our AI voice agents book
            appointments, qualify leads, answer customer questions, and scale
            your phone operations with human-like conversations
          </p>
        </div>

        {/* CTA Button — rendered visible at first paint */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <Link
            href="#show-case"
            className="inline-flex items-center rounded-md bg-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-medium text-black transition-all hover:bg-gray-200 hover:scale-105"
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
          <div className="hidden md:block absolute -bottom-52 left-1/2 -translate-x-1/2 w-[200%] h-48 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

          <div>
            <NeonGradientCard
              className="w-full dark mb-6 sm:mb-12 md:mb-20 lg:mb-32 relative z-0"
              borderSize={2}
              borderRadius={24}
              neonColors={{
                firstColor: "#f97316",
                secondColor: "#22c55e",
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
                      Wondering how our AI agents work?
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      Experience it yourself with a free demo call. Share your
                      details, and our AI will reach out instantly.
                      <br />
                      Note: If the number you provided is incorrect or you want
                      to make another call but it&apos;s not working, then
                      please refresh the page to make a new call again.
                    </p>
                    <p className="text-xs sm:text-sm text-white">
                      The AI agent is ready to chat about Fusion Calling and
                      book appointments for you.
                    </p>

                    {/* Guide text for inbound call */}
                    <p className="mt-2 text-xs md:text-sm text-brand/80">
                      To Test Our Inbound Call Handling, Dial The Number Below:
                    </p>

                    {/* Inbound Call Box */}
                    <div className="mt-2 bg-zinc-800/80 border border-brand/30 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs sm:text-sm text-gray-300">
                          Inbound AI Agent:
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-medium text-white">
                          +1 (914) 639-4069
                        </span>
                        <CopyNumberButton />
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
                <div className="bg-zinc-900 z-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-green-500/20 relative mx-[-12px] sm:mx-0">
                  <BorderBeam
                    className="opacity-40"
                    colorFrom="rgb(249 115 22)"
                    colorTo="rgb(34 197 94)"
                    duration={20}
                    size={200}
                  />
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
