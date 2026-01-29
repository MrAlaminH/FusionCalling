"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
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

      {/* Atmospheric particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "300px",
            height: "300px",
            top: "20%",
            left: "10%",
          }}
        />
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            width: "250px",
            height: "250px",
            top: "60%",
            right: "15%",
          }}
        />
        <motion.div
          className="particle"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            width: "200px",
            height: "200px",
            bottom: "10%",
            left: "40%",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl md:py-6 py-10">
        {/* Top pill button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="flex justify-center mb-4 sm:mb-6 lg:mb-8"
        >
          <Link
            href="#pricing"
            className={cn(
              "group inline-flex items-center rounded-full glass-light px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-[10px] xxs:text-xs sm:text-sm transition-premium border border-orange-500/20 hover:border-orange-500/40",
            )}
          >
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1.5 sm:mr-2 text-orange-500" />
            <AnimatedShinyText className="text-white hover:text-white/90 font-body">
              Start Your Voice Agency Today
              <span className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </AnimatedShinyText>
          </Link>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="text-center mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-6"
        >
          <h1 className="font-display text-3xl xxs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
            Scale Your Agency with,
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap"> </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              White-Labeled AI Voice Agents
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-4 md:px-6"
        >
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed">
            Stop referring clients elsewhere and start owning the technology.
            Deliver premium AI phone call automation under your own agency fully
            branded dashboard. Automate client calls, book appointments, and
            capture 100% of the revenue.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16 xl:mb-20"
        >
          <Link
            href="#cta"
            className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-semibold text-white transition-all shadow-premium hover:shadow-premium-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:-translate-y-1"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          {/* Outer glow container for depth */}
          <div className="relative group">
            {/* Enhanced glow effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 via-orange-400/40 to-orange-500/30 rounded-[32px] blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 via-orange-500/30 to-orange-400/20 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

            {/* Main container with padding for border visibility */}
            <div className="relative p-[3px] rounded-[32px] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-premium-lg">
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

                  {/* Video/Thumbnail Content */}
                  <div className="relative w-full h-full rounded-[27px] overflow-hidden z-10 bg-black">
                    {isVideoPlaying ? (
                      <iframe
                        className="w-full h-full rounded-[27px]"
                        src="https://player.vimeo.com/video/1155684546?autoplay=1"
                        title="Fusion Calling White-label Demo"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    ) : (
                      <>
                        {/* Custom Thumbnail */}
                        <div
                          className="absolute inset-0 bg-cover bg-center cursor-pointer group rounded-[27px] transition-transform duration-700 group-hover:scale-[1.02]"
                          style={{
                            backgroundImage: "url(/hero-thambnail.png)",
                          }}
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          {/* Enhanced gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 group-hover:from-black/85 group-hover:via-black/20 group-hover:to-black/40 transition-all duration-700 rounded-[27px]"></div>

                          {/* Play Button Container */}
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="relative">
                              {/* Outer glow rings */}
                              <motion.div
                                className="absolute inset-0 border-2 border-orange-500/50 rounded-full"
                                animate={{
                                  scale: [1, 2.5, 1],
                                  opacity: [0.7, 0, 0.7],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 border-2 border-orange-400/60 rounded-full"
                                animate={{
                                  scale: [1, 2.5, 1],
                                  opacity: [0.7, 0, 0.7],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                  delay: 0.8,
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 border border-orange-300/70 rounded-full"
                                animate={{
                                  scale: [1, 2.5, 1],
                                  opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                  delay: 1.6,
                                }}
                              />

                              {/* Enhanced glow backdrop */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-orange-600/30 rounded-full blur-3xl"
                                animate={{
                                  scale: [1, 1.8, 1],
                                  opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />

                              {/* Play Button */}
                              <motion.div
                                className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-5 sm:p-6 md:p-7 shadow-premium-lg group-hover:shadow-premium-xl transition-all duration-300"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
                              </motion.div>
                            </div>
                          </div>

                          {/* "Watch Demo" text with better styling */}
                          <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 text-center z-20">
                            <motion.p
                              className="font-display text-white text-base sm:text-lg md:text-xl font-semibold opacity-95 drop-shadow-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 0.95, y: 0 }}
                              transition={{
                                delay: 1.4,
                                duration: 0.6,
                                ease: [0.25, 0.1, 0.25, 1.0],
                              }}
                            >
                              Watch Demo Video
                            </motion.p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none rounded-b-[27px] z-10"></div>
                  </div>
                </div>
              </NeonGradientCard>
            </div>
          </div>

          {/* Trust badges with improved design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.6,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10"
          >
            {[
              { label: "Full Brand Control", delay: 0 },
              { label: "White-label Dashboard", delay: 0.1 },
              { label: "API Access", delay: 0.2 },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.6 + badge.delay,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className="flex items-center gap-2.5 sm:gap-3 group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50 blur-sm group-hover:bg-green-400/70 transition-colors"></div>
                  <div className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 group-hover:bg-green-400 transition-colors shadow-lg shadow-green-500/50"></div>
                </div>
                <span className="font-body text-gray-400 text-xs sm:text-sm font-medium group-hover:text-gray-300 transition-colors">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
