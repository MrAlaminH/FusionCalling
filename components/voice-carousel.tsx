"use client";

import { Marquee } from "@/components/magicui/marquee";
import { VoiceCard } from "@/components/sub/voice-card";
import { FEMALE_VOICES, MALE_VOICES } from "@/data/voices";

export default function VoiceCarousel() {
  return (
    <div className=" bg-black p-6 md:p-8">
      <div className="mb-12 max-w-none mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-medium">Our Voices</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-500 mb-4">
            Test Out Our Most Used Voices
          </h1>
          <p className="text-gray-400">
            Along with multiple languages, we offer different gender voices with
            different accents!
          </p>
        </div>

        <div className="space-y-6">
          {/* Female voices - scrolling left */}
          <div className="relative w-full overflow-hidden">
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
          </div>

          {/* Male voices - scrolling right */}
          <div className="relative w-full overflow-hidden">
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
          </div>
        </div>
      </div>
    </div>
  );
}
