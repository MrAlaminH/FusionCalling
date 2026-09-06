"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { primaryButton } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 relative">
      {/* Background Pattern SVG */}
      <svg
        className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="whitelabel-hero-pattern-bg"
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
          fill="url(#whitelabel-hero-pattern-bg)"
        ></rect>
      </svg>

      {/* Atmospheric particles (CSS-only float animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="particle"
          style={{ width: "300px", height: "300px", top: "20%", left: "10%" }}
        />
        <div
          className="particle [animation-duration:12s] [animation-delay:2s]"
          style={{ width: "250px", height: "250px", top: "60%", right: "15%" }}
        />
        <div
          className="particle [animation-duration:14s] [animation-delay:4s]"
          style={{ width: "200px", height: "200px", bottom: "10%", left: "40%" }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl md:py-6 py-10">
        {/* Top pill button */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
          <Link
            href="#pricing"
            className={cn(
              "group inline-flex items-center rounded-full glass-light px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-[10px] xxs:text-xs sm:text-sm transition-premium border border-brand/20 hover:border-brand/40",
            )}
          >
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1.5 sm:mr-2 text-brand" />
            <AnimatedShinyText className="text-white hover:text-white/90 font-body">
              Start Your Voice Agency Today
              <span className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </AnimatedShinyText>
          </Link>
        </div>

        {/* Main heading — rendered visible at first paint (LCP) */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-6">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Scale Your Agency with{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              White-Label AI Voice Agents
            </span>
          </h1>
        </div>

        {/* Subheading — rendered visible at first paint */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-4 md:px-6">
          <p className="font-body text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
            Bring your existing Vapi, Retell, or ElevenLabs agents under your
            own brand. The white-label partner program for agencies: keep 100%
            of client revenue and launch in 24 hours.
          </p>
        </div>

        {/* CTA Buttons — rendered visible at first paint */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16 xl:mb-20">
          <Link
            href="#cta"
            className={cn("group", primaryButton)}
          >
            Book a Demo
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Outer glow container for depth */}
          <div className="relative group">
            {/* Enhanced glow effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand/30 via-brand-light/40 to-brand/30 rounded-[32px] blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-light/20 via-brand/30 to-brand-light/20 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

            {/* Main container with padding for border visibility */}
            <div className="relative p-[3px] rounded-[32px] bg-gradient-to-r from-brand-light via-brand to-brand-strong shadow-premium-lg">
              {/* Inner container with NeonGradientCard */}
              <NeonGradientCard
                className="relative [&>div]:p-0 [&>div]:!bg-black [&>div]:dark:!bg-black"
                borderSize={3}
                borderRadius={30}
                neonColors={{
                  firstColor: "#ff6b35",
                  secondColor: "#f7931e",
                }}
              >
                <div className="relative aspect-video w-full bg-black rounded-[27px] overflow-hidden">
                  {/* Border Beam Effect - Multiple layers for visibility */}
                  <div className="absolute inset-0 rounded-[27px] z-0">
                    <BorderBeam
                      size={300}
                      duration={15}
                      borderWidth={2.5}
                      anchor={90}
                      colorFrom="#ff6b35"
                      colorTo="#f7931e"
                      delay={0}
                      className="rounded-[27px]"
                    />
                  </div>

                  {/* Secondary border beam for depth */}
                  <div className="absolute inset-0 rounded-[27px] z-0 opacity-60">
                    <BorderBeam
                      size={300}
                      duration={20}
                      borderWidth={2}
                      anchor={45}
                      colorFrom="#f7931e"
                      colorTo="#ff6b35"
                      delay={7.5}
                      className="rounded-[27px]"
                    />
                  </div>

                  {/* Video/Thumbnail Content — click-to-play facade: the Vimeo
                      iframe only mounts after the user clicks play */}
                  <div className="relative w-full h-full rounded-[27px] overflow-hidden z-10 bg-black">
                    {isVideoPlaying ? (
                      <iframe
                        className="w-full h-full rounded-[27px]"
                        src="https://player.vimeo.com/video/1155684546?autoplay=1"
                        title="Fusion Calling White-label Demo"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 cursor-pointer group overflow-hidden rounded-[27px] transition-transform duration-700 group-hover:scale-[1.02]"
                        onClick={() => setIsVideoPlaying(true)}
                      >
                        <Image
                          src="/hero-thumbnail.jpg"
                          alt="Preview of the Fusion Calling white-label AI voice dashboard"
                          fill
                          priority
                          sizes="100vw"
                          className="object-cover"
                        />

                        {/* Enhanced gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 group-hover:from-black/85 group-hover:via-black/20 group-hover:to-black/40 transition-all duration-700 rounded-[27px]"></div>

                        {/* Play Button Container */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="relative flex items-center justify-center">
                            {/* Outer ping rings (CSS-only) */}
                            <span className="absolute inline-flex h-full w-full items-center justify-center">
                              <span className="absolute inline-flex w-full aspect-square rounded-full border-2 border-brand/50 animate-ping [animation-duration:3s]" />
                              <span className="absolute inline-flex w-full aspect-square rounded-full border-2 border-brand-light/60 animate-ping [animation-duration:3s] [animation-delay:0.8s]" />
                              <span className="absolute inline-flex w-full aspect-square rounded-full border border-brand-light/70 animate-ping [animation-duration:3s] [animation-delay:1.6s]" />
                            </span>

                            {/* Enhanced glow backdrop */}
                            <span className="absolute -inset-4 bg-gradient-to-br from-brand/40 to-brand-strong/30 rounded-full blur-3xl animate-pulse [animation-duration:3s]" />

                            {/* Play Button */}
                            <span className="relative bg-gradient-to-br from-brand to-brand-strong rounded-full p-5 sm:p-6 md:p-7 shadow-premium-lg group-hover:shadow-premium-xl group-hover:scale-110 active:scale-95 transition-all duration-300">
                              <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
                            </span>
                          </div>
                        </div>

                        {/* "Watch Demo" text */}
                        <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 text-center z-20">
                          <p className="font-display text-white text-base sm:text-lg md:text-xl font-semibold opacity-95 drop-shadow-lg">
                            Watch Demo Video
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none rounded-b-[27px] z-10"></div>
                  </div>
                </div>
              </NeonGradientCard>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {[
              "Full Brand Control",
              "White-label Dashboard",
              "API Access",
            ].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2.5 sm:gap-3 group cursor-default"
              >
                <div className="relative">
                  <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50 blur-sm group-hover:bg-green-400/70 transition-colors"></div>
                  <div className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 group-hover:bg-green-400 transition-colors shadow-lg shadow-green-500/50"></div>
                </div>
                <span className="font-body text-gray-400 text-xs sm:text-sm font-medium group-hover:text-gray-300 transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
