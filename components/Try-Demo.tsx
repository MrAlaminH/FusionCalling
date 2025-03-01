"use client";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SetStateAction, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TryDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Listen to Lisa track her order",
      description:
        "Let AI handle customer support for your business and allow your team to focus on high-value tasks.",
      bgColor: "bg-purple-100",
      video: "https://www.youtube.com/embed/9OwEH18xYdc",
      image: "/ex1.png",
    },
    {
      title: "See how Alex books an appointment",
      description:
        "Dental clinics, beauty salons and other services keep up easier with appointments and reminders.",
      bgColor: "bg-pink-100",
      video: "https://www.youtube.com/embed/yGUVPSFZcSE",
      image: "/ex2.png",
    },
    {
      title: "AI voice agent cold calls lead",
      description:
        "Check out our AI voice agent in action, making cold calls to leads and opening doors for your business.",
      bgColor: "bg-orange-100",
      video: "https://www.youtube.com/embed/IS_kRLY3_zc",
      image: "/ex4.jpeg",
    },
    {
      title: "AI Assistant Demo Call",
      description:
        "Experience our advanced AI assistant handling complex customer interactions with natural conversation flow.",
      bgColor: "bg-blue-100",
      video: "https://www.youtube.com/embed/9SWY-Xp7huw",
      image: "/ex3.jpeg",
    },
  ];

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

  const slideLeft = () => {
    if (sliderRef.current) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? features.length - 1 : prevIndex - 1;
        return newIndex;
      });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === features.length - 1 ? 0 : prevIndex + 1;
        return newIndex;
      });
    }
  };

  // Get visible cards based on current index
  const getVisibleCards = () => {
    const cards = [...features, ...features]; // Duplicate for infinite effect
    const prevIndex =
      currentIndex === 0 ? features.length - 1 : currentIndex - 1;
    const nextIndex =
      currentIndex === features.length - 1 ? 0 : currentIndex + 1;

    return [cards[prevIndex], cards[currentIndex], cards[nextIndex]];
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent px-4 py-12 md:py-24"
      ref={ref}
    >
      <div className="container relative mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 className="text-orange-600 text-center font-bold text-3xl md:text-4xl pb-2">
            Demo Calls
          </motion.h1>
          <p className="text-gray-400 text-center md:text-xl mb-12">
            Check out some examples of how AI handles calls.
          </p>
        </motion.div>

        {/* Feature Cards with Slider */}
        <div className="relative px-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              ref={sliderRef}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {getVisibleCards().map((feature, index) => (
                <motion.div
                  key={index}
                  className={`md:col-span-4 ${
                    index === 1 ? "md:scale-110 z-10" : ""
                  }`}
                  initial={false}
                  animate={{
                    scale: index === 1 ? 1.1 : 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`group relative overflow-hidden rounded-2xl transition-all duration-500 
                      hover:-translate-y-2
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Slider Controls */}
          <Button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 z-20"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          <Button
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 z-20"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>

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
