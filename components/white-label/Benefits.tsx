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
        "You never touch code, servers, or telephony configuration. Connect your domain, upload your branding, and configure agents through visual dashboards designed for operators rather than engineers. If your team can manage a CRM, it can run this platform. Technical work like model selection, prompt tuning, and infrastructure updates happens on our side, so your focus stays on sales and client relationships from day one.",
    },
    {
      icon: GraduationCap,
      title: "White-label Training Materials",
      description:
        "Onboarding covers far more than software access. You get training resources built specifically for agencies, including guidance on positioning AI voice services, running demos that convert, and structuring offers around monthly retainers. Use these materials to bring new staff up to speed quickly and to brief client-facing team members with confidence, keeping delivery quality consistent as your roster of sub-accounts grows.",
    },
    {
      icon: FileText,
      title: "Marketing Resources Provided",
      description:
        "Sell with assets designed for the white-label model: presentation decks, case study formats, and sales collateral you can rebrand as your own. These resources help you answer prospect questions about how AI phone agents perform day to day, what implementation looks like, and why monthly pricing makes sense. Instead of writing marketing material from scratch, you adapt proven frameworks and go to market in days.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support Included",
      description:
        "Support scales with your plan. Every partner gets access to our support team for platform questions and troubleshooting, and Scale partners receive a dedicated account manager who learns your business and helps plan launches and expansions. Whether you hit a configuration snag before a client demo or need advice on structuring a complex deployment, help comes from people who work with white-label agencies every day.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description:
        "Most partners launch within one to two days of signing up. Start with the three-day free trial to configure your branding and test agents, with no setup fee at any tier, then activate a plan when you are ready to sell. Because there is no development cycle and no procurement process, you can respond to a hot lead today and put a branded pilot in front of them this week.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description:
        "Grow from your first client to a full portfolio on one platform. Plans scale by sub-account count, with six on Starter, twenty on Growth, and unlimited on Scale, so you always know exactly what capacity costs before you commit. Underneath, we manage the calling infrastructure and the AI providers, absorbing traffic spikes and shipping updates continuously. Adding a client is a configuration task, never an infrastructure project.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description:
        "Client trust compounds retention. Call recordings, transcripts, and lead data sit inside a platform built to enterprise-grade security standards, reached only through your branded portal with permission controls you define. Clients experience a secure, professional system carrying their name, which makes longer commitments easier to justify. Dependable data handling under your brand turns a tool purchase into a relationship clients are reluctant to leave.",
    },
    {
      icon: Users,
      title: "Partner Community",
      description:
        "Learn from other agency owners running the same playbook. Compare notes on packaging AI voice services, setting retainers, handling common objections, and onboarding clients efficiently. Members share what is working across industries, from home services to medical offices, so you avoid expensive trial and error. Combined with our training library, the community shortens the distance between launching your first sub-account and running a profitable book of business.",
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
          title="Partner Benefits"
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
                <div className="absolute -inset-3 bg-gradient-to-br from-brand/20 via-transparent to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

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
            className={cn(primaryButton)}
          >
            Apply to Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
