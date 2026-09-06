import {
  FileCheck,
  Palette,
  DollarSign,
  TrendingUp,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { primaryButton } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils";

export default function HowItWorks() {

  const steps = [
    {
      icon: FileCheck,
      step: "01",
      title: "Schedule a call or email to apply",
      description:
        "Submit your application and get approved within 48 hours. We review your agency to ensure a successful partnership. The application asks about your client base, your current Voice AI experience if any, and the industries you plan to serve so we can tailor your onboarding. Most partners hear back within two business days and can start their 3-day free trial immediately after approval.",
    },
    {
      icon: Palette,
      step: "02",
      title: "Customize Your Brand",
      description:
        "Set up your white-label environment with your logo, colors, and domain. Launch your branded AI solution. Connect a custom domain you already own, upload your logo and brand palette, and your dashboard and client portals render entirely under your brand with no Fusion Calling mention anywhere. Branding setup is guided in the dashboard and typically takes under an hour.",
    },
    {
      icon: DollarSign,
      step: "03",
      title: "Set Your Pricing",
      description:
        "Define your pricing model and margins. You have complete control over what you charge your clients. Set per-minute rates, monthly retainers, or bundled packages in the dashboard, and Stripe billing handles invoicing and collection under your brand. Partners keep 100% of client revenue; your platform cost stays fixed at your plan price regardless of how much you resell.",
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Start Selling & Earning",
      description:
        "Begin onboarding clients and generating recurring revenue. Scale as fast as you want with our infrastructure. Each client gets their own sub-account with lead management, calendar booking, and portal access, so adding a new client is a dashboard task rather than a build project. Import existing Vapi, Retell, or ElevenLabs agents and have a first client live in 1-2 days.",
    },
  ];

  return (
    <section className="w-full bg-black section-rhythm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <SectionHeader
          title="How to Launch Your White-label Business"
          highlight="White-label Business"
          subtitle="From application to first sale in as little as one week. We handle the technology, you focus on growing your agency."
        />

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line connecting steps - visible on md and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand/0 via-brand/50 to-brand/0"></div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <Reveal
                  key={index}
                  animation="animate-fade-in-up"
                  delay={index * 0.15}
                  className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-brand to-brand-strong flex items-center justify-center shadow-premium">
                      <span className="font-display text-2xl sm:text-3xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-grow w-full">
                    <Card className="glass-light border-brand/20 hover:border-brand/40 transition-all duration-500 hover:shadow-premium group">
                      <CardContent className="p-5 md:p-6">
                        <div className="flex items-start gap-4 sm:gap-6">
                          <div className="flex-shrink-0 hidden md:block">
                            <div className="w-14 h-14 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center group-hover:bg-brand/20 group-hover:border-brand/50 transition-all duration-300">
                              <Icon className="w-7 h-7 text-brand" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            {/* Mobile icon - visible only on small screens */}
                            <div className="flex md:hidden items-center gap-3 mb-3">
                              <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/30 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-brand" />
                              </div>
                              <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                                {step.title}
                              </h3>
                            </div>
                            <div className="hidden md:block mb-3">
                              <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                                {step.title}
                              </h3>
                            </div>
                            <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Arrow indicator - visible on md and up */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1/2 mt-8 z-20">
                      <ArrowDown className="w-8 h-8 text-brand" />
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <p className="font-body text-gray-400 text-base sm:text-lg md:text-xl mb-4 md:mb-6">
            Ready to launch your white-label business?
          </p>
          <a
            href="#cta"
            className={cn(primaryButton)}
          >
            Apply Now
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
