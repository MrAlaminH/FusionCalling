"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Calendar,
  HelpCircle,
  AlertCircle,
  LifeBuoy,
  User,
  Briefcase,
} from "lucide-react";
import { Card } from "@/components/ui/card";

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
        <div className="w-16 h-16 rounded-full bg-black/10 mb-4 flex items-center justify-center">
          <Icon className="text-white" size={32} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/90 text-sm">{description}</p>
      </Card>
    </motion.div>
  );
};

export default function InboundCalls() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-black text-white min-h-screen">
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
                    src="/inbound.jpeg"
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
                  Inbound Calls Management
                </h2>
                <p className="text-gray-300 mb-4 text-lg">
                  Automate the management of inbound calls to improve customer
                  experience and increase operational efficiency. Our system
                  intelligently routes calls, ensuring that customers are
                  connected to the right department without delay.
                </p>
                <p className="text-gray-400">
                  With advanced analytics, you can track call patterns and
                  customer interactions, allowing for continuous improvement in
                  service delivery. Experience a seamless integration with your
                  existing systems for a hassle-free setup.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Calendar}
            title="Appointments"
            description="Manage and confirm customer appointments without human intervention, saving time."
          />
          <FeatureCard
            icon={HelpCircle}
            title="Frequently asked questions"
            description="Automatically answer frequently asked customer questions, reducing call volume to operators."
          />
          <FeatureCard
            icon={AlertCircle}
            title="Complaints and claims"
            description="Record and resolve complaints in accordance with company procedures."
          />
          <FeatureCard
            icon={LifeBuoy}
            title="Product support"
            description="Provide detailed information about your products, guiding customers through the buying process."
          />
          <FeatureCard
            icon={User}
            title="Customer support"
            description="Provide general customer support using integration with the company's database."
          />
          <FeatureCard
            icon={Briefcase}
            title="Your business"
            description="Easily create and customize AI voice agents to handle any scenario your business needs—no coding required."
          />
        </div>
      </div>
    </div>
  );
}
