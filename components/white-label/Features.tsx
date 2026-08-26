import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import {
  Palette,
  LayoutDashboard,
  Settings,
  ChevronRight,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: "Full Brand Customization",
      description:
        "Make the platform unmistakably yours before your first demo. Upload your logo, apply your color palette across the interface, connect a custom domain like app.youragency.com, and send client invitations from branded email templates. Clients never see Fusion Calling anywhere in the product. Because the entire experience reads as your agency's software, you can price it as proprietary technology rather than a resold tool, which protects both your margins and your market positioning.",
      items: [
        "Custom logo placement & branding",
        "Brand color palette integration",
        "White-label domain setup",
        "Custom email templates & notifications",
      ],
      image: "/feature/feature1.webp",
      imageAlt:
        "Screenshot of the Fusion Calling white-label dashboard showing agency brand customization with custom logo and colors",
      highlights: [
        { icon: Zap, text: "Setup in minutes" },
        { icon: Shield, text: "No code required" },
      ],
    },
    {
      icon: LayoutDashboard,
      title: "White-label Dashboard",
      description:
        "Every client gets their own login under your brand, hosted on your domain. From inside, they manage their AI agents, monitor call analytics in real time, review transcripts and recordings, and track leads without emailing your team for updates. Granular permissions let you decide exactly what each client can see. The result is fewer status meetings, a self-serve experience clients value, and a professional product surface that supports higher monthly retainers.",
      items: [
        "Custom dashboard URL with your domain",
        "Your branding throughout the interface",
        "Client access management & permissions",
        "Real-time analytics & reporting",
      ],
      image: "/feature/feature2.webp",
      imageAlt:
        "Screenshot of the Fusion Calling white-label client dashboard showing AI agent management, analytics, and call recordings",
      highlights: [
        { icon: Smartphone, text: "Mobile responsive" },
        { icon: Zap, text: "Instant updates" },
      ],
    },
    {
      icon: Settings,
      title: "Flexible Configuration",
      description:
        "Adapt call behavior to each client's operation instead of forcing a generic script. Build custom call flows and conversation scripts, set routing and escalation rules for handoffs to human staff, and sync qualified leads into your client's CRM automatically. A simple appointment-booking line for a local clinic and a multi-step workflow for a multi-location brand both run on the same platform, so one tool covers your entire portfolio.",
      items: [
        "Custom call flows & scripts",
        "Intelligent routing & escalation",
        "Dynamic conversation adaptation",
        "CRM integration & data sync",
      ],
      image: "/feature/feature3.webp",
      imageAlt:
        "Screenshot of the Fusion Calling white-label platform dashboard showing flexible call flow configuration and routing settings",
      highlights: [
        { icon: Shield, text: "Enterprise ready" },
        { icon: Zap, text: "Scale effortlessly" },
      ],
    },
  ];

  return (
    <section className="w-full bg-black relative section-spacing">
      {/* Atmospheric Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="particle [animation-duration:8s]"
          style={{
            width: "300px",
            height: "300px",
            top: "10%",
            left: "5%",
          }}
        />
        <div
          className="particle [animation-duration:10s] [animation-delay:2s]"
          style={{
            width: "250px",
            height: "250px",
            top: "50%",
            right: "10%",
          }}
        />
        <div
          className="particle [animation-duration:12s] [animation-delay:4s]"
          style={{
            width: "200px",
            height: "200px",
            bottom: "10%",
            left: "30%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <Reveal animation="animate-fade-in-up" className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Complete White-label
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              {" "}
              Solution
            </span>
          </h2>
          <p className="font-body text-gray-400 text-lg md:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to launch and scale your AI phone automation
            business under your own brand. No technical expertise required.
          </p>
        </Reveal>

        {/* Features */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Text Content - 5/12 on desktop */}
                <div
                  className={`order-1 lg:col-span-5 ${!isEven ? "lg:order-2" : ""}`}
                >
                  <Reveal
                    animation={isEven ? "animate-fade-in-left" : "animate-fade-in-right"}
                    duration={0.7}
                    delay={index * 0.15}
                    className="space-y-5 md:space-y-6 lg:space-y-7"
                  >
                    {/* Icon - Slightly smaller */}
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-brand/20 via-brand-strong/10 to-brand/5 border border-brand/30 shadow-premium transition-transform duration-300 hover:scale-105 hover:rotate-2">
                      <Icon className="w-7 h-7 md:w-9 md:h-9 text-brand" />
                    </div>

                    {/* Title - Slightly reduced for better balance */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description - More concise */}
                    <p className="font-body text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Features List - More compact */}
                    <ul className="space-y-2 md:space-y-2.5">
                      {feature.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 md:gap-2.5 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-br from-brand to-brand-strong mt-2 md:mt-2.5 flex-shrink-0 shadow-premium" />
                          <span className="font-body text-sm md:text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights - More compact badges */}
                    <div className="flex flex-wrap gap-2.5 md:gap-3 pt-1">
                      {feature.highlights.map((highlight, idx) => {
                        const HighlightIcon = highlight.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-2 md:gap-2.5 px-3.5 py-1.5 md:px-4 md:py-2 rounded-xl glass-light border border-brand/20 hover:border-brand/40 hover:-translate-y-0.5 hover:scale-[1.05] transition-premium-fast"
                          >
                            <HighlightIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand" />
                            <span className="font-body text-xs md:text-sm text-gray-300 font-medium">
                              {highlight.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Image Content - 7/12 on desktop for larger, more prominent images */}
                <div
                  className={`order-2 lg:col-span-7 ${!isEven ? "lg:order-1" : ""} relative`}
                >
                  <Reveal
                    animation="animate-scale-in"
                    duration={0.9}
                    delay={index * 0.15}
                    className="relative group"
                  >
                    {/* Multi-layer glow system - Enhanced for larger images */}
                    <div className="absolute -inset-6 bg-gradient-to-br from-brand/25 via-brand-strong/10 to-transparent rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-4 bg-gradient-to-br from-brand-light/15 via-transparent to-transparent rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

                    {/* Image Container with glassmorphism - Larger and more prominent */}
                    <div className="relative rounded-3xl overflow-hidden border border-brand/20 bg-gradient-to-br from-gray-900 via-gray-800/50 to-gray-900 shadow-premium-lg">
                      {/* Decorative top gradient bar */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-70" />

                      {/* Browser window controls */}
                      <div className="absolute top-4 left-4 flex gap-2 z-20">
                        <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-lg" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-lg" />
                        <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-lg" />
                      </div>

                      {/* Image - Enhanced with better sizing */}
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={1200}
                        height={900}
                        className="relative z-10 w-full h-auto object-cover pt-8 pb-3 px-3"
                      />

                      {/* Glass reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-20" />

                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30" />

                      {/* Shimmer effect on hover (CSS-only) */}
                      <div className="absolute inset-0 overflow-hidden z-40 pointer-events-none rounded-b-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform [transition-duration:1500ms] ease-in-out" />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal animation="animate-fade-in-up" className="mt-16 md:mt-20 lg:mt-24 text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl glass-light border border-brand/30 hover:border-brand/50 hover:scale-105 hover:-translate-y-1 active:scale-[0.98] transition-premium cursor-pointer group shadow-premium"
          >
            <span className="font-display text-white font-semibold text-lg md:text-xl">
              Ready to start your white-label journey?
            </span>
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
