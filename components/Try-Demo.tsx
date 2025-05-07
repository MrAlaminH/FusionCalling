"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TryDemo() {
  const [playingVideos, setPlayingVideos] = useState<{
    [key: number]: boolean;
  }>({});
  const [showMore, setShowMore] = useState(false);

  const features = [
    {
      title: " Real Estate Outbound Call",
      description:
        "This call demonstrates an AI assistant handling an initial consultation for real estate investments. The AI identifies client interests, discusses property preferences, and arranges for further information delivery.",
      bgColor: "bg-orange-100",
      video: "https://www.youtube.com/embed/Oua1TyixaoA",
      image: "/cardImage.png",
    },
    {
      title: "AI Appointment Booking",
      description:
        "Automate scheduling with natural conversation. Check availability, offer options, confirm details, and update calendars, boosting efficiency and customer convenience.",
      bgColor: "bg-pink-100",
      video: "https://www.youtube.com/embed/yGUVPSFZcSE",
      image: "/cardImage.png",
    },
    {
      title: "Cold Call Lead Generation",
      description:
        "Listen to a cold call offering a local business a free SEO service to rank higher on Google. Learn about the initial pitch and value proposition",
      bgColor: "bg-orange-100",
      video: "https://www.youtube.com/embed/rkoGhVMIH10",
      image: "/cardImage.png",
    },
    {
      title: "Restaurant Reservations",
      description:
        "Listen to a customer, calling to make a restaurant reservation. Hear how the restaurant handles the booking process and checks for availability.",
      bgColor: "bg-blue-100",
      video: "https://www.youtube.com/embed/IS_kRLY3_zc",
      image: "/cardImage.png",
    },
    {
      title: "Credit Repair Service Inquiry",
      description:
        "Listen to a potential client call Credit Repair Company to learn about their credit repair services and costs. Focus on the initial information provided.",
      bgColor: "bg-green-100",
      video: "https://www.youtube.com/embed/NaZ_pXdLu4I",
      image: "/cardImage.png",
    },
    {
      title: "Trading System Offering",
      description:
        "Listen to a discussion about a system designed to automate and simplify Forex trading. Discover how AI can potentially manage trades and aim for profitable outcomes without constant user monitoring",
      bgColor: "bg-yellow-100",
      video: "https://www.youtube.com/embed/mr6TUF16KIA",
      image: "/cardImage.png",
    },
  ];

  const additionalFeatures = [
    {
      title: "Restaurant AI Order Taking",
      description:
        "Watch a demo of AI taking a customer's food order over the phone. See how AI streamlines restaurant order taking, improves efficiency, and enhances customer convenience.",
      bgColor: "bg-purple-100",
      video: "https://www.youtube.com/embed/9OwEH18xYdc",
      image: "/cardImage.png",
    },
  ];

  const visibleFeatures = showMore
    ? features.concat(additionalFeatures)
    : features;

  const handlePlayVideo = (index: number) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 className="text-orange-600 text-center font-bold text-3xl md:text-4xl pb-2">
            Show Case
          </motion.h1>
          <p className="text-gray-400 text-center md:text-xl mb-12">
            Check out some examples of how our AI handles calls.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {visibleFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={false}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 
                  hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]"
              >
                <div
                  className={`relative aspect-video ${feature.bgColor} overflow-hidden`}
                >
                  {playingVideos[index] ? (
                    <iframe
                      src={`${feature.video}?autoplay=1`}
                      title={feature.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image
                        src={feature.image}
                        alt={
                          feature.title +
                          " - " +
                          feature.description.slice(0, 80) +
                          (feature.description.length > 80 ? "..." : "")
                        }
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        height={300}
                        width={500}
                      />
                      <Button
                        size="icon"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full 
                          bg-black/30 text-white backdrop-blur-sm
                          shadow-lg transition-all duration-300 
                          hover:scale-110 hover:bg-black/50
                          active:scale-95 
                          group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        onClick={() => handlePlayVideo(index)}
                      >
                        <Play className="h-8 w-8" />
                        <span className="sr-only">Play demo</span>
                      </Button>
                    </>
                  )}
                </div>
                <div className="space-y-2 p-6 relative z-10">
                  <h3
                    className="text-xl font-semibold tracking-tight text-white 
                    transition-transform duration-300 group-hover:translate-x-2"
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-muted-foreground text-gray-200 
                    transition-transform duration-300 group-hover:translate-x-2"
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        {!showMore && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
              onClick={() => setShowMore(true)}
            >
              See More
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
