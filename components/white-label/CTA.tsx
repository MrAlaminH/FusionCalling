"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail } from "lucide-react";
import Calendar from "@/components/calendar";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Partnership?
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Schedule a discovery call with our team. We&apos;ll discuss your agency&apos;s
            goals and help you get started with your white-label solution.
          </p>
        </motion.div>

        {/* Calendar Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Calendar calUsername={"mralamin"} eventSlug={"discovery-call"} showHeader={false} />
        </motion.div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto mt-8 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            <strong className="text-orange-500">Pro Tip:</strong> Schedule a call to get personalized guidance on setting up your white-label solution and maximizing your revenue.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6">
            Prefer to contact us directly?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <a
              href="mailto:partners@fusioncalling.com"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              partners@fusioncalling.com
            </a>
            <a
              href="tel:+19146394069"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              +1 (914) 639-4069
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
