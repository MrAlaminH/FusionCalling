"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
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
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-orange-500/30 bg-zinc-900/50 backdrop-blur-sm">
            {/* Video Container */}
            <div className="aspect-video w-full relative">
              {isVideoPlaying ? (
                <iframe
                  className="w-full h-full"
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
                    className="absolute inset-0 bg-cover bg-center cursor-pointer group"
                    style={{ backgroundImage: 'url(/hero-thambnail.png)' }}
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Multiple pulse circles for attention-grabbing effect */}
                        <motion.div
                          className="absolute inset-0 border-2 border-orange-500/30 rounded-full"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 border-2 border-orange-400/40 rounded-full"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: 0.5,
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-orange-500/15 rounded-full blur-xl"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-3 sm:p-4 md:p-5 shadow-2xl shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* "Watch Demo" text */}
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <p className="text-white text-sm sm:text-base md:text-lg font-medium opacity-90">
                        Watch Demo Video
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-500"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Full Brand Control</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>White-label Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>API Access</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
