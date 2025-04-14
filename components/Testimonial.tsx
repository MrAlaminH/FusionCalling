"use client";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  heading: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Lisa Chen",
    role: "Customer Support",
    content:
      "Implementing AI phone call automation has drastically reduced our response time and improved customer satisfaction. The system is seamless and incredibly effective.",
    heading: "Drastically improved customer satisfaction",
    image: "/testimonial/testimonial1.jpg",
  },
  {
    name: "Mark Johnson",
    role: "Sales Director",
    content:
      "The AI-powered voice assistants have transformed how we handle outbound calls, saving us hours daily while maintaining a personal touch with our clients.",
    heading: "Saved hours daily with outbound automation",
    image: "/testimonial/testimonial2.jpg",
  },
  {
    name: "Emily Davis",
    role: "Operations Lead",
    content:
      "Scaling inbound calls with AI has been a game-changer for our business. It's effortless to manage high call volumes without compromising on quality really super cool.",
    heading: "Effortlessly scaled inbound call management",
    image: "/testimonial/testimonial3.jpg",
  },
  {
    name: "Robert Patel",
    role: "IT Manager",
    content:
      "The integration process was surprisingly smooth. Their AI call system adapted to our existing infrastructure with minimal downtime and immediately improved our response metrics.",
    heading: "Seamless integration with existing systems",
    image: "/testimonial/testimonial4.png",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    content:
      "Using their AI solution for market research calls has given us insights we would have missed otherwise. The sentiment analysis feature helps us understand customer needs on a deeper level.",
    heading: "Incredible insights from call analysis",
    image: "/testimonial/testimonial6.png",
  },
  {
    name: "James Thompson",
    role: "Small Business Owner",
    content:
      "As someone running a small team, I couldn't afford a full call center. This AI solution lets us provide 24/7 customer service without expanding our staff. It paid for itself within months.",
    heading: "Perfect solution for small businesses",
    image: "/testimonial/testimonial5.png",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Properly initialize embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  // Set up carousel control functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full py-8 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl whitespace-nowrap">
            <span className="text-orange-600">Customer</span>{" "}
            <span className="text-white">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-center md:text-xl mb-8">
            Experience our impact through our clients words.
          </p>
        </motion.div>

        <div className="relative max-w-screen-lg mx-auto mt-12">
          {/* Desktop carousel with navigation buttons */}
          <div className="hidden lg:block relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.4 }}
                    className="flex-none w-full md:w-1/2 lg:w-1/3"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation controls for desktop */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-black border border-orange-500 rounded-full p-2 text-orange-500 hover:bg-orange-500 hover:text-black transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-black border border-orange-500 rounded-full p-2 text-orange-500 hover:bg-orange-500 hover:text-black transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile grid layout (original) */}
          <div className="grid gap-4 sm:gap-6 lg:hidden md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.5 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted Card component for reuse
function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <Card className="bg-black border-orange-500/20 group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[420px] h-full w-full max-w-sm mx-auto">
      <div className="p-6 flex flex-col h-full">
        <div className="text-orange-600 mb-4 text-4xl font-extrabold">
          <Quote />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">
          {testimonial.heading}
        </h3>
        <p className="text-zinc-400 mb-6 flex-grow">{testimonial.content}</p>
        <div className="h-px bg-orange-800 w-full mb-6" />
        <div className="flex items-center space-x-4 mt-auto">
          <Image
            alt={`${testimonial.name}'s profile picture`}
            className="rounded-full"
            height="40"
            src={testimonial.image}
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-white">
              {testimonial.name}
            </h4>
            <p className="text-sm text-zinc-400">{testimonial.role}</p>
          </div>
          <div className="flex ml-auto">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-orange-500 text-orange-600"
                />
              ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
