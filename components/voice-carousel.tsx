"use client";

import { Marquee } from "@/components/magicui/marquee";
import { VoiceCard } from "@/components/sub/voice-card";
import { FEMALE_VOICES, MALE_VOICES } from "@/data/voices";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VoiceCarousel() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  return (
    <div className="bg-black p-6 md:p-8">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-12 max-w-none mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-500 mb-4"
          >
            Test Out Some Used Voices
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400">
            We offer voices in multiple languages, with different genders and
            accents!
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          {/* Female voices - scrolling left */}
          <motion.div
            variants={itemVariants}
            className="relative w-full overflow-hidden"
          >
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <Marquee
              className="py-4 [--gap:2rem] [--duration:40s]"
              pauseOnHover
              repeat={3}
            >
              {[...FEMALE_VOICES, ...FEMALE_VOICES].map((voice, index) => (
                <VoiceCard
                  key={`${voice.id}-${index}`}
                  voice={voice}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  className="transition-colors duration-300 hover:bg-orange-600 mx-2"
                />
              ))}
            </Marquee>
          </motion.div>

          {/* Male voices - scrolling right */}
          <motion.div
            variants={itemVariants}
            className="relative w-full overflow-hidden"
          >
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <Marquee
              className="py-4 [--gap:2rem] [--duration:40s]"
              pauseOnHover
              reverse
              repeat={3}
            >
              {[...MALE_VOICES, ...MALE_VOICES].map((voice, index) => (
                <VoiceCard
                  key={`${voice.id}-${index}`}
                  voice={voice}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  className="transition-colors duration-300 hover:bg-orange-600 mx-2"
                />
              ))}
            </Marquee>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
