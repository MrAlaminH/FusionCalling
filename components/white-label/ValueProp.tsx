import Link from "next/link";
import { DollarSign, Zap, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export default function ValueProp() {

  const benefits = [
    {
      icon: DollarSign,
      title: "New Revenue Stream",
      description:
        "Package white-label AI voice as a productized service and price it however your market will bear. Partners keep 100% of client revenue, so every retainer you close flows straight to your margin. On the Growth plan at $299 per month for twenty sub-accounts, even a modest per-client fee compounds quickly across a small roster. You set pricing, you invoice, and you own the relationship end to end.",
      stat: "100%",
      statLabel: "Revenue You Keep",
    },
    {
      icon: Zap,
      title: "Launch in Days",
      description:
        "Go from signup to a live, sellable product in one to two days. Your branded dashboard, client portals, and custom domain are configured during onboarding, and a three-day free trial lets you explore the full platform before committing. There is no setup fee and no engineering project to manage. While competitors spend months building, you can be running demos for paying prospects this week.",
      stat: "1-2 Days",
      statLabel: "Typical Launch Time",
    },
    {
      icon: Users,
      title: "Scale Without Limits",
      description:
        "The Scale plan includes unlimited sub-accounts, so growth never triggers an upgrade conversation mid-quarter. Behind the scenes we run the telephony, the underlying AI models from Vapi, Retell AI, and ElevenLabs, and every platform update. When providers ship new capabilities, they appear in your dashboard automatically. Your job is selling and account management; ours is keeping the infrastructure fast, current, and dependable.",
      stat: "Unlimited",
      statLabel: "Sub-Accounts on Scale",
    },
    {
      icon: Shield,
      title: "Full Control",
      description:
        "Your logo, your colors, your domain at app.youragency.com, and your name on every client portal. Clients log into a dashboard that looks and feels like your product, and nothing exposes Fusion Calling. That control protects pricing power: because clients buy from you, switching means leaving their trusted agency, not just swapping a tool. You remain the provider of record on every account you create.",
      stat: "100%",
      statLabel: "Brand Ownership",
    },
  ];

  const stats = [
    { value: "$0", label: "Setup Fee" },
    { value: "3-Day", label: "Free Trial" },
    { value: "$99/mo", label: "Starting Price" },
  ];

  return (
    <section className="w-full bg-black relative section-rhythm">
      {/* Atmospheric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="particle [animation-duration:12s]"
          style={{
            width: "350px",
            height: "350px",
            top: "10%",
            right: "5%",
          }}
        />
        <div
          className="particle [animation-duration:14s] [animation-delay:3s]"
          style={{
            width: "280px",
            height: "280px",
            bottom: "20%",
            left: "8%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <SectionHeader
          title="Why Agencies Choose Fusion Calling"
          highlight="Fusion Calling"
          subtitle="Partner with us to offer enterprise-grade AI phone automation under your brand. No technical expertise required, just pure business growth."
        />

        {/* Asymmetric Benefits Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal
                key={index}
                animation="animate-fade-in-up"
                duration={0.6}
                delay={index * 0.1}
                className="relative group transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03]"
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand/25 via-brand-strong/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <Card className="glass-light h-full transition-premium border-gray-800/50 hover:border-brand/40 group-hover:bg-gradient-to-br group-hover:from-brand/5 group-hover:to-transparent">
                  <CardContent className="p-5 md:p-6 space-y-5 flex flex-col h-full relative overflow-hidden">
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/10 to-transparent rounded-full blur-2xl -z-10" />

                    {/* Icon */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:border-brand/60 group-hover:scale-110 transition-premium-fast shadow-premium">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-brand" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow space-y-3">
                      <h3 className="font-display text-base md:text-lg font-bold text-white group-hover:text-brand-light transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Stat highlight */}
                    <div className="pt-4 border-t border-gray-800/50 group-hover:border-brand/30 transition-colors duration-300">
                      <div className="font-display text-2xl md:text-3xl font-bold text-brand mb-1">
                        {benefit.stat}
                      </div>
                      <div className="font-body text-xs md:text-sm text-gray-500">
                        {benefit.statLabel}
                      </div>
                      {index === 0 && (
                        <Link
                          href="/whitelabel/case-studies"
                          className="font-body text-xs md:text-sm text-brand/70 hover:text-brand transition-colors underline-offset-2 hover:underline mt-2 inline-block"
                        >
                          See partner results
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Stats Section with Enhanced Design */}
        <Reveal animation="animate-fade-in-up" delay={0.2} className="relative">
          <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 border border-brand/20 shadow-premium-lg">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-green-500/5 rounded-3xl -z-10" />

            <p className="font-body text-gray-400 text-base md:text-lg lg:text-xl text-center mb-10 md:mb-12">
              Simple plans that grow with your agency: Starter, Growth, and
              Scale
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-brand to-brand-strong text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs md:text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/whitelabel/case-studies"
                className="font-body text-xs md:text-sm text-brand/70 hover:text-brand transition-colors underline-offset-2 hover:underline"
              >
                See partner results
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
