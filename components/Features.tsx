"use client";
import { Calendar, Phone, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-black" ref={ref}>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 className="text-orange-600 text-center font-bold text-3xl md:text-4xl  pb-4">
          Calling Features
        </motion.h1>
        <p className="text-gray-400 text-center md:text-xl mb-6">
          Turn missed calls into revenue with <br /> AI phone call agents that
          sound and behave like real humans.
        </p>
      </motion.div>
      {/* First Feature */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-600">
              Smart Scheduling
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Automate appointment booking & reminders
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let AI handle your appointment scheduling with smart calendar
              integration and automated reminders.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-orange-600" />
                Live calendar integration
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-600" />
                Automated confirmation calls
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <Card className="border-orange-500 rounded-lg group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]">
              <CardContent className="p-0">
                <div className="relative w-full aspect-[3/2]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src="/feature2.png"
                    alt="Calendar Interface"
                    className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Second Feature */}
      <div className="container mx-auto px-4 md:px-6 mt-20 max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-block rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-600">
              24/7 Support
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Automate customer support inquiries
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Handle customer support calls instantly with zero waiting time and
              consistent service quality.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                24/7 Availability
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                Real-time system integration
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                Smart procedure handling
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <Card className="border-orange-500 rounded-lg group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]">
              <CardContent className="p-0">
                <div className="relative w-full aspect-[3/2]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src="/feature3.jpeg"
                    alt="Support Interface"
                    className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Third Feature */}
      <div className="container mx-auto px-4 md:px-6 mt-20 max-w-6xl pb-20">
        <motion.div
          className="grid md:grid-cols-3 gap-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="bg-black border-orange-500/20 group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]">
            <CardContent className="p-6 space-y-4">
              <BarChart3 className="h-12 w-12 text-orange-600" />
              <h3 className="text-xl font-bold text-white">Detailed Reports</h3>
              <p className="text-gray-400">
                Track every interaction with comprehensive call recordings,
                transcriptions, and customized analytics.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black border-orange-500/20 group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]">
            <CardContent className="p-6 space-y-4">
              <Calendar className="h-12 w-12 text-orange-600" />
              <h3 className="text-xl font-bold text-white">
                Focus on Priorities
              </h3>
              <p className="text-gray-400">
                Let AI handle routine calls while your team focuses on
                high-value tasks and strategic initiatives.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black border-orange-500/20 group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]">
            <CardContent className="p-6 space-y-4">
              <Phone className="h-12 w-12 text-orange-600" />
              <h3 className="text-xl font-bold text-white">
                Outbound Campaigns
              </h3>
              <p className="text-gray-400">
                Seamlessly import leads and automate outbound calling campaigns
                with intelligent AI agents.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
