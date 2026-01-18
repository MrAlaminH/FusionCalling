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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl md:py-6 py-10">
        {/* Top pill button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-4 sm:mb-6 lg:mb-8"
        >
          <Link
            href="#pricing"
            className={cn(
              "group inline-flex items-center rounded-full bg-white/10 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] xxs:text-xs sm:text-sm transition-colors hover:bg-white/20"
            )}
          >
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
            <AnimatedShinyText className="text-white hover:text-white/90">
              Start Your Voice Agency Today
              <span className="ml-1 sm:ml-1.5 md:ml-2 group-hover:translate-x-0.5 transition-transform inline-block">
                →
              </span>
            </AnimatedShinyText>
          </Link>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4 md:px-6"
        >
          <h1 className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            Scale Your Agency with,
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap"> </span>
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              White-Labeled AI Voice Agents
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-4 md:px-6"
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed">
            Stop referring clients elsewhere and start owning the technology. Deliver premium AI phone call automation under your own agency fully branded dashboard. Automate client calls, book appointments, and capture 100% of the revenue.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 xl:mb-20"
        >
          <Link
            href="#cta"
            className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base font-medium text-white transition-all hover:from-orange-600 hover:to-orange-700 hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-5xl mx-auto px-4 sm:px-6"
        >
          {/* Outer glow container for depth */}
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-orange-400/30 to-orange-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Main container with padding for border visibility */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600">
              {/* Inner container with NeonGradientCard */}
              <NeonGradientCard
                className="relative [&>div]:p-0 [&>div]:!bg-black [&>div]:dark:!bg-black"
                borderSize={3}
                borderRadius={28}
                neonColors={{
                  firstColor: "#ff6b35",
                  secondColor: "#f7931e",
                }}
              >
                <div className="relative aspect-video w-full bg-black rounded-[25px] overflow-hidden">
                  {/* Border Beam Effect - Multiple layers for visibility */}
                  <div className="absolute inset-0 rounded-[25px] z-0">
                    <BorderBeam
                      size={300}
                      duration={15}
                      borderWidth={2.5}
                      anchor={90}
                      colorFrom="#ff6b35"
                      colorTo="#f7931e"
                      delay={0}
                      className="rounded-[25px]"
                    />
                  </div>
                  
                  {/* Secondary border beam for depth */}
                  <div className="absolute inset-0 rounded-[25px] z-0 opacity-60">
                    <BorderBeam
                      size={300}
                      duration={20}
                      borderWidth={2}
                      anchor={45}
                      colorFrom="#f7931e"
                      colorTo="#ff6b35"
                      delay={7.5}
                      className="rounded-[25px]"
                    />
                  </div>
                  
                  {/* Video/Thumbnail Content */}
                  <div className="relative w-full h-full rounded-[25px] overflow-hidden z-10 bg-black">
                    {isVideoPlaying ? (
                      <iframe
                        className="w-full h-full rounded-[25px]"
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
                          className="absolute inset-0 bg-cover bg-center cursor-pointer group rounded-[25px] transition-transform duration-500 group-hover:scale-[1.02]"
                          style={{ backgroundImage: 'url(/hero-thambnail.png)' }}
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          {/* Gradient overlay for better contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:from-black/70 group-hover:via-black/10 group-hover:to-black/30 transition-all duration-500 rounded-[25px]"></div>

                          {/* Play Button Container */}
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="relative">
                              {/* Outer glow rings */}
                              <motion.div
                                className="absolute inset-0 border-2 border-orange-500/40 rounded-full"
                                animate={{
                                  scale: [1, 2.2, 1],
                                  opacity: [0.6, 0, 0.6],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 border-2 border-orange-400/50 rounded-full"
                                animate={{
                                  scale: [1, 2.2, 1],
                                  opacity: [0.6, 0, 0.6],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                  delay: 0.6,
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 border border-orange-300/60 rounded-full"
                                animate={{
                                  scale: [1, 2.2, 1],
                                  opacity: [0.4, 0, 0.4],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                  delay: 1.2,
                                }}
                              />
                              
                              {/* Glow backdrop */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full blur-2xl"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.4, 0.7, 0.4],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                              
                              {/* Play Button */}
                              <motion.div
                                className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-4 sm:p-5 md:p-6 shadow-2xl shadow-orange-500/60 group-hover:shadow-orange-500/80 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white fill-white ml-1" />
                              </motion.div>
                            </div>
                          </div>

                          {/* "Watch Demo" text with better styling */}
                          <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center z-20">
                            <motion.p
                              className="text-white text-sm sm:text-base md:text-lg font-semibold opacity-95 drop-shadow-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 0.95, y: 0 }}
                              transition={{ delay: 1.2, duration: 0.6 }}
                            >
                              Watch Demo Video
                            </motion.p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Bottom gradient fade for better text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none rounded-b-[25px] z-10"></div>
                  </div>
                </div>
              </NeonGradientCard>
            </div>
          </div>

          {/* Trust badges with improved design */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10"
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
                transition={{ duration: 0.5, delay: 1.4 + badge.delay }}
                className="flex items-center gap-2.5 group cursor-default"
              >
                <div className="relative">
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500/40 blur-sm group-hover:bg-green-400/60 transition-colors"></div>
                  <div className="relative w-2.5 h-2.5 rounded-full bg-green-500 group-hover:bg-green-400 transition-colors shadow-lg shadow-green-500/50"></div>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-gray-300 transition-colors">
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
