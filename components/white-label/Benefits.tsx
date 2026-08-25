import {
  Code2,
  GraduationCap,
  HeadphonesIcon,
  FileText,
  Zap,
  TrendingUp,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export default function Benefits() {

  const benefits = [
    {
      icon: Code2,
      title: "No Technical Expertise Needed",
      description:
        "Launch your white-label solution without writing a single line of code. We handle all technical requirements.",
    },
    {
      icon: GraduationCap,
      title: "White-label Training Materials",
      description:
        "Access comprehensive training resources, including sales scripts, demo videos, and onboarding guides.",
    },
    {
      icon: FileText,
      title: "Marketing Resources Provided",
      description:
        "Get ready-to-use marketing assets, from presentations to case studies, to help you sell effectively.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support Included",
      description:
        "Access our support team whenever you need help. Premium partners get priority 24/7 support.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description:
        "Get your white-label solution live in days, not months. Streamlined onboarding for rapid deployment.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description:
        "Handle unlimited clients and calls with our robust, enterprise-grade infrastructure that grows with you.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description:
        "Your clients' data is protected with bank-level security, compliance, and privacy standards.",
    },
    {
      icon: Users,
      title: "Partner Community",
      description:
        "Join a network of successful agencies sharing strategies, insights, and best practices.",
    },
  ];

  return (
    <section className="w-full bg-black relative section-spacing">
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="particle [animation-duration:10s]"
          style={{
            width: "250px",
            height: "250px",
            top: "20%",
            right: "15%",
          }}
        />
        <div
          className="particle [animation-duration:12s] [animation-delay:3s]"
          style={{
            width: "200px",
            height: "200px",
            bottom: "30%",
            left: "10%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <Reveal animation="animate-fade-in-up" className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Partner
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              {" "}
              Benefits
            </span>
          </h2>
          <p className="font-body text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to succeed as a Fusion Calling partner. From
            training materials to dedicated support, we&apos;ve got you covered.
          </p>
        </Reveal>

        {/* Benefits Grid - Asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal
                key={index}
                animation="animate-fade-in-up"
                duration={0.6}
                delay={index * 0.08}
                className="relative group transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-3 bg-gradient-to-br from-brand/20 via-transparent to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <Card className="glass-light h-full transition-premium border-gray-800/50 hover:border-brand/40">
                  <CardContent className="p-6 md:p-8 space-y-4 md:space-y-5 flex flex-col h-full">
                    {/* Icon with enhanced styling */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-brand/15 to-brand-strong/5 border border-brand/25 flex items-center justify-center flex-shrink-0 group-hover:border-brand/50 group-hover:rotate-6 group-hover:scale-110 transition-premium-fast shadow-premium">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-brand" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-light transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Subtle bottom accent */}
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-brand/50 to-brand-strong/50 group-hover:w-full transition-all duration-500 ease-out" />
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <p className="font-body text-gray-400 text-base md:text-lg lg:text-xl mb-6 md:mb-8">
            Ready to experience these benefits?
          </p>
          <a
            href="#cta"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-brand to-brand-strong px-8 md:px-10 lg:px-12 py-3.5 md:py-4 lg:py-5 text-sm md:text-base font-medium text-white transition-premium shadow-premium hover:shadow-premium-lg hover:scale-105 hover:-translate-y-1 active:scale-[0.98]"
          >
            Apply to Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
