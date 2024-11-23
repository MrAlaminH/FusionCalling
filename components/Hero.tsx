import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-24 md:pt-28 lg:pt-32 relative">
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top pill button - Updated with AnimatedShinyText */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Link
            href="#"
            className={cn(
              "group inline-flex items-center rounded-full bg-white/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm transition-colors hover:bg-white/20"
            )}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <AnimatedShinyText className="text-white hover:text-white/90">
              Manage Business Call Smartly
              <span className="ml-1.5 sm:ml-2 group-hover:translate-x-0.5 transition-transform inline-block">
                →
              </span>
            </AnimatedShinyText>
          </Link>
        </div>

        {/* Main heading - Adjusted spacing */}
        <div className="text-center mb-4 sm:mb-6 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Revolutionize Your Business
            <br className="hidden sm:block" />
            with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              AI Phone call Automation
            </span>
          </h1>
        </div>

        {/* Subheading - Adjusted spacing */}
        <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8 px-4 sm:px-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
            Transform customer interactions with AI-powered voice assistants.
            <br className="hidden sm:block" />
            designed to scale inbound and outbound calls and improve customer
            satisfaction effortlessly.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-12 sm:mb-20">
          <Link
            href="#"
            className="inline-flex items-center rounded-md bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-black transition-all hover:bg-gray-200 hover:scale-105"
          >
            Start creating for free
            <span className="ml-1.5 sm:ml-2">→</span>
          </Link>
        </div>

        {/* Demo Card Section - Updated with improved gradient transitions */}
        <div className="max-w-5xl mx-auto relative">
          {/* Enhanced gradient shadow overlay */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[200%] h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-10 blur-2xl" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[200%] h-64 bg-gradient-to-t from-black to-transparent z-10" />

          {/* Glow effect behind the card */}
          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-orange-500/20 via-green-500/20 to-transparent blur-3xl opacity-50" />

          <NeonGradientCard
            className="w-full dark mb-32 relative z-0"
            borderSize={2}
            borderRadius={24}
            neonColors={{
              firstColor: "#f97316",
              secondColor: "#22c55e",
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left Column */}
              <div className="space-y-6">
                <button className="bg-orange-500 text-black px-4 py-1.5 rounded-full text-sm font-medium">
                  Live demo
                </button>
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Can&apos;t believe?{" "}
                    <span className="text-orange-500">Try NOW</span> a free test
                    call
                  </h2>
                  <p className="text-gray-400">
                    Curious how our AI agents work?
                  </p>
                  <p className="text-gray-400">
                    Get a hands-on experience by trying a free demo call. Fill
                    in your details, and our AI representative will call you
                    instantly.
                  </p>
                  <p className="text-sm text-white">
                    Agent is trained to discuss about Autocalls services and
                    book appointments.
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-zinc-900 rounded-2xl p-6 border border-green-500/20 relative">
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
                      src="/logo.png"
                      alt="English"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white ">
                      Demo AI agent
                    </h3>
                    <p className="text-orange-500 text-sm">
                      Autocalls representative
                    </p>
                  </div>
                </div>

                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                  <Input
                    type="email"
                    placeholder="Your e-mail"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />

                  <p className="text-sm text-gray-400">
                    The call will automatically end after{" "}
                    <span className="text-orange-500">5 minutes</span>
                  </p>

                  <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-4 flex items-center justify-between group transition-all duration-300">
                    <div className="bg-orange-500 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="flex-1 text-center">→ SLIDE TO CALL</span>
                  </button>
                </form>
              </div>
            </div>
          </NeonGradientCard>
        </div>

        {/* Increased spacing for smoother transition */}
        {/* <div className="h-32" /> */}
      </div>
    </div>
  );
}
