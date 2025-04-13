"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
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
      "Scaling inbound calls with AI has been a game-changer for our business. It’s effortless to manage high call volumes without compromising on quality really super cool.",
    heading: "Effortlessly scaled inbound call management",
    image: "/testimonial/testimonial3.jpg",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        <div className="grid gap-4 sm:gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <Card className=" bg-black border-orange-500/20 group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px] w-full max-w-sm mx-auto">
                <div className="p-6">
                  <div className="text-orange-600 mb-4 text-4xl font-extrabold">
                    <Quote />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {testimonial.heading}
                  </h3>
                  <p className="text-zinc-400 mb-6">{testimonial.content}</p>
                  <div className="h-px bg-zinc-800 w-full mb-6" />
                  <div className="flex items-center space-x-4">
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
                      <p className="text-sm text-zinc-400">
                        {testimonial.role}
                      </p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
