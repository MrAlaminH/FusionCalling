"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SetStateAction, useState } from "react";

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

  return (
    <section className="relative w-full overflow-hidden bg-transparent px-4 py-12 md:py-24">
      <div className="container relative mx-auto max-w-7xl">
        {/* Header Section */}
        <h1 className="text-orange-500 text-center font-bold text-3xl md:text-4xl mb-6 pb-4">
          Examples of AI Voice Calls
        </h1>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {[
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
              video: "https://www.youtube.com/embed/another_video_id",
              image: "/ex2.png",
            },
            {
              title: "AI voice agent cold calls lead",
              description:
                "Check out our AI voice agent in action, making cold calls to leads and opening doors for your business.",
              bgColor: "bg-orange-100",
              video: "https://www.youtube.com/embed/yet_another_video_id",
              image: "/ex1.png",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => handleOpenModal(feature.video)}
            >
              <div className={`relative aspect-video ${feature.bgColor}`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  height={300}
                  width={500}
                />
                <Button
                  size="icon"
                  className="absolute bottom-4 left-4 h-12 w-12 rounded-full bg-orange-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-orange-600 active:scale-95"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(feature.video);
                  }}
                >
                  <Play className="h-6 w-6" />
                  <span className="sr-only">Play demo</span>
                </Button>
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Video Playback */}
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
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
