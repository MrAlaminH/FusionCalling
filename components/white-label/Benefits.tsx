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
import { SectionHeader } from "@/components/ui/section-header";
import { primaryButton } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils";

export default function Benefits() {

  const benefits = [
    {
      icon: Code2,
      title: "No Technical Expertise Needed",
      description:
        "If your team can manage a CRM, it can run this platform — no code, servers, or telephony.",
    },
    {
      icon: GraduationCap,
      title: "White-label Training Materials",
      description:
        "Agency-specific training covers positioning AI voice, running demos that convert, and structuring monthly retainers.",
    },
    {
      icon: FileText,
      title: "Marketing Resources Provided",
      description:
        "Rebrandable decks, sales collateral, and case-study formats take you to market in days.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support Included",
      description:
        "Every plan gets platform support; Scale adds a dedicated account manager who knows your business.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description:
        "Most partners launch in one to two days — start with the three-day free trial, no setup fee.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description:
        "Six sub-accounts on Starter, twenty on Growth, unlimited on Scale — capacity is priced upfront.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description:
        "Call recordings, transcripts, and lead data sit behind enterprise-grade security, under your brand.",
    },
    {
      icon: Users,
      title: "Partner Community",
      description:
        "Swap pricing, objection handling, and onboarding playbooks with agency owners running the same model.",
    },
  ];

  return (
    <section className="w-full bg-black relative section-rhythm">
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
        <SectionHeader
          title="White-Label Reseller Program Benefits"
          highlight="Benefits"
          subtitle="Everything you need to succeed as a Fusion Calling partner. From training materials to dedicated support, we've got you covered."
        />

        {/* Benefits Grid - Asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div className="absolute -inset-3 bg-gradient-to-br from-brand/20 via-transparent to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <Card className="glass-light h-full transition-premium border-gray-800/50 hover:border-brand/40">
                  <CardContent className="p-5 md:p-6 space-y-4 md:space-y-5 flex flex-col h-full">
                    {/* Icon with enhanced styling */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-brand/15 to-brand-strong/5 border border-brand/25 flex items-center justify-center flex-shrink-0 group-hover:border-brand/50 group-hover:rotate-6 group-hover:scale-110 transition-premium-fast shadow-premium">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-brand" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-display text-base md:text-lg font-bold text-white mb-3 group-hover:text-brand-light transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Subtle bottom accent — grows via transform, not width */}
                    <div className="w-full h-1 rounded-full bg-gradient-to-r from-brand/50 to-brand-strong/50 origin-left scale-x-[0.09] group-hover:scale-x-100 transition-transform duration-300 ease-out" />
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
            className={cn(primaryButton)}
          >
            Apply to Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
