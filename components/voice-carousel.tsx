"use client";

import { Marquee } from "@/components/magicui/marquee";
import { VoiceCard } from "@/components/sub/voice-card";
import { FEMALE_VOICES, MALE_VOICES } from "@/data/voices";
import { Reveal } from "@/components/ui/reveal";

export default function VoiceCarousel() {
  return (
    <div className="bg-black p-6 md:p-8">
      <div className="mb-12 max-w-none mx-auto">
        <Reveal animation="animate-fade-in-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-strong mb-4">
            Test Out Some Used Voices
          </h2>
          <p className="text-gray-400">
            We offer voices in multiple languages, with different genders and
            accents!
          </p>
        </Reveal>

        <div className="space-y-6">
          {/* Female voices - scrolling left */}
          <Reveal animation="animate-fade-in-up" delay={0.1} className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <Marquee
              className="py-4 [--gap:2rem] [--duration:40s]"
              pauseOnHover
              repeat={3}
            >
              {FEMALE_VOICES.map((voice, index) => (
                <VoiceCard
                  key={`${voice.id}-${index}`}
                  voice={voice}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  className="transition-colors duration-300 hover:bg-brand-strong mx-2"
                />
              ))}
            </Marquee>
          </Reveal>

          {/* Male voices - scrolling right */}
          <Reveal animation="animate-fade-in-up" delay={0.2} className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <Marquee
              className="py-4 [--gap:2rem] [--duration:40s]"
              pauseOnHover
              reverse
              repeat={3}
            >
              {MALE_VOICES.map((voice, index) => (
                <VoiceCard
                  key={`${voice.id}-${index}`}
                  voice={voice}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  className="transition-colors duration-300 hover:bg-brand-strong mx-2"
                />
              ))}
            </Marquee>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
