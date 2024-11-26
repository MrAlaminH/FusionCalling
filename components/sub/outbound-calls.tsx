"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  ShoppingCart,
  Clipboard,
  User,
  Calendar,
  Briefcase,
  RefreshCcw,
} from "lucide-react";

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 h-full">
        <div className="w-12 h-12 rounded-full bg-white/10 mb-4 flex items-center justify-center">
          <Icon className="text-white" width={24} height={24} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/90 text-sm">{description}</p>
      </Card>
    </motion.div>
  );
};

export default function OutboundCalls() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="container mx-auto px-1 py-12 space-y-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full p-8 bg-black border-orange-500/20 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0 rounded-lg overflow-hidden lg:w-1/3">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/outbound.jpeg"
                  alt="Satellite dish illustration"
                  className="transition-transform duration-300 transform hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-4xl font-bold text-orange-500 mb-4">
                Outbound Calls
              </h2>
              <p className="text-gray-300 mb-4 text-lg">
                Automate and optimize the management of outbound calls to
                increase your team&apos;s efficiency and reach more customers.
              </p>
              <p className="text-gray-400">
                With our advanced tools, you can streamline your calling
                processes, ensuring that your team can focus on what matters
                most—building relationships and closing deals. Experience a new
                level of productivity and customer engagement.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={ShoppingCart}
          title="Sales"
          description="Contact potential customers to sell products or services, increasing revenue and expanding the customer base."
        />
        <FeatureCard
          icon={Clipboard}
          title="Surveys and feedback"
          description="Conduct satisfaction surveys and collect feedback to improve the services provided."
        />
        <FeatureCard
          icon={User}
          title="Lead prequalification"
          description="Call potential customers and filter them before being called by real agents, facilitating the closing of transactions."
        />
        <FeatureCard
          icon={Calendar}
          title="Confirmations and follow-up"
          description="Confirm reservations, appointments, and make adjustments if necessary, ensuring an easy experience for customers."
        />
        <FeatureCard
          icon={RefreshCcw}
          title="Renewals and upselling"
          description="Contact existing customers to renew contracts or sell additional products and services."
        />
        <FeatureCard
          icon={Briefcase}
          title="Your business"
          description="Easily create and customize AI voice agents to handle any scenario your business needs—no coding required."
        />
      </div>
    </div>
  );
}
