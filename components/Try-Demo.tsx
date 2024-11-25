"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SetStateAction, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TryDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenModal = (url: SetStateAction<string>) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent px-4 py-12 md:py-24"
      ref={ref}
    >
      <div className="container relative mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.h1
          className="text-orange-500 text-center font-bold text-3xl md:text-4xl mb-6 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Demo AI Voice Calls
        </motion.h1>

        {/* Feature Cards */}
        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              title: "Listen to Lisa track her order",
              description:
                "Let AI handle customer support for your business and allow your team to focus on high-value tasks.",
              bgColor: "bg-purple-100",
              video: "https://www.youtube.com/embed/9OwEH18xYdc",
              image: "/ex1.png",
              className: "md:col-span-4",
            },
            {
              title: "See how Alex books an appointment",
              description:
                "Dental clinics, beauty salons and other services keep up easier with appointments and reminders.",
              bgColor: "bg-pink-100",
              video: "https://www.youtube.com/embed/yGUVPSFZcSE",
              image: "/ex2.png",
              className: "md:col-span-4 md:scale-110 z-10",
            },
            {
              title: "AI voice agent cold calls lead",
              description:
                "Check out our AI voice agent in action, making cold calls to leads and opening doors for your business.",
              bgColor: "bg-orange-100",
              video: "https://www.youtube.com/embed/IS_kRLY3_zc",
              image: "/ex1.png",
              className: "md:col-span-4",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 
                hover:-translate-y-2 hover:shadow-2xl ${feature.className}
                hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]
                ${index === 1 ? "hover:scale-105" : "hover:scale-103"}`}
              onClick={() => handleOpenModal(feature.video)}
            >
              <div
                className={`relative aspect-video ${feature.bgColor} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  height={300}
                  width={500}
                />
                <Button
                  size="icon"
                  className="absolute bottom-4 left-4 h-12 w-12 rounded-full bg-orange-500 text-white 
                    shadow-lg transition-all duration-300 
                    hover:scale-110 hover:bg-orange-600 
                    active:scale-95 
                    group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(feature.video);
                  }}
                >
                  <Play className="h-6 w-6" />
                  <span className="sr-only">Play demo</span>
                </Button>
              </div>
              <div className="space-y-2 p-6 relative z-10">
                <h3
                  className="text-xl font-semibold tracking-tight text-white 
                  transition-transform duration-300 group-hover:translate-x-2"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-muted-foreground text-gray-300 
                  transition-transform duration-300 group-hover:translate-x-2"
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Modal for Video Playback */}
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleCloseModal}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
