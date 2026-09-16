"use client";

import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  AudioLines,
  Bot,
  Braces,
  Brain,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  CreditCard,
  Globe,
  GraduationCap,
  Headphones,
  KeyRound,
  Landmark,
  Layers,
  Lock,
  Megaphone,
  MessageSquare,
  Moon,
  PhoneCall,
  PhoneForwarded,
  PhoneMissed,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Timer,
  Users,
  UtensilsCrossed,
  Voicemail,
  Webhook,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import CountUp from "./CountUp";

type SlideDef = {
  id: string;
  label: string;
  Comp: ComponentType;
};

const DEMO_PHONE_DISPLAY = "+1 (914) 639-4069";
const DEMO_PHONE_TEL = "tel:+19146394069";
const CALENDAR_URL = "https://cal.com/mralamin/discovery-call";

function SlideShell({
  children,
  mesh = true,
}: {
  children: ReactNode;
  mesh?: boolean;
}) {
  return (
    <section
      className={`relative h-full w-full overflow-y-auto ${
        mesh ? "gradient-mesh" : ""
      }`}
    >
      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-16 md:px-12 md:py-20">
        {children}
      </div>
    </section>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="animate-fade-in-up text-xs font-bold uppercase tracking-[0.25em] text-brand">
      {children}
    </p>
  );
}

function SlideTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="animate-fade-in-up mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white [animation-delay:80ms] md:text-5xl">
      {children}
    </h2>
  );
}

function SourceNote({ children }: { children: ReactNode }) {
  return (
    <p className="animate-fade-in-up mt-10 text-[11px] leading-relaxed text-white/40 [animation-delay:400ms]">
      {children}
    </p>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-pill border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70">
      {children}
    </span>
  );
}

function TitleSlide() {
  return (
    <>
      {/* AI receptionist visual — masked so it dissolves into the slide's dark mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[46%] max-w-[720px] md:block"
      >
        <Image
          src="/deck/receptionist.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 46vw, 0px"
          className="animate-fade-in-up object-cover object-[50%_0] opacity-90 [animation-delay:300ms] [mask-image:radial-gradient(ellipse_88%_82%_at_70%_42%,#000_48%,transparent_77%)]"
        />
      </div>
      <SlideShell>
        <div
          className="particle left-[8%] top-[15%] h-72 w-72 [animation-delay:0s]"
          aria-hidden
        />
        <div
          className="particle right-[10%] top-[55%] h-80 w-80 [animation-delay:2s]"
          aria-hidden
        />
        <div
          className="particle left-[55%] bottom-[10%] h-56 w-56 [animation-delay:4s]"
          aria-hidden
        />
        <div className="max-w-4xl">
          <p className="animate-fade-in-up flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand">
            <Image
              src="/logo.webp"
              alt=""
              width={20}
              height={19}
              priority
              aria-hidden
              className="rounded-[4px]"
            />
            Fusion Calling — AI Phone Automation
          </p>
          <h1 className="animate-fade-in-up mt-6 font-display text-5xl font-bold leading-[1.05] text-white [animation-delay:100ms] md:text-7xl">
            Turn missed calls into{" "}
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              revenue.
            </span>
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-white/70 [animation-delay:200ms] md:text-xl">
            AI phone call agents that sound and behave like real humans.
            Inbound and outbound, 24/7 — booking appointments, qualifying
            leads, answering questions, and following up by SMS.
          </p>
          <div className="animate-fade-in-up mt-8 flex flex-wrap gap-2 [animation-delay:300ms]">
            <Chip>24/7 coverage</Chip>
            <Chip>Picks up in seconds</Chip>
            <Chip>10–20 concurrent calls</Chip>
            <Chip>Human-like AI voices</Chip>
            <Chip>2,200+ integrations</Chip>
          </div>
          <div className="animate-fade-in-up mt-10 flex flex-wrap items-center gap-4 [animation-delay:400ms]">
            <a
              href={DEMO_PHONE_TEL}
              className="group relative flex items-center gap-3 rounded-card border border-brand/30 bg-brand/10 px-6 py-4 transition-premium hover:border-brand hover:bg-brand/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
              </span>
              <span className="font-display text-xl font-semibold tracking-wide text-white">
                {DEMO_PHONE_DISPLAY}
              </span>
              <span className="text-xs text-brand">
                Call the AI — live, right now
              </span>
            </a>
          </div>
        </div>
        <p className="animate-fade-in-up absolute bottom-6 right-6 hidden text-[11px] text-white/30 [animation-delay:600ms] md:block">
          Navigate: ← → &nbsp;·&nbsp; Overview: O &nbsp;·&nbsp; Fullscreen: F
        </p>
      </SlideShell>
    </>
  );
}

function ProblemSlide() {
  const stats = [
    {
      icon: PhoneMissed,
      value: 62,
      suffix: "%",
      decimals: 0,
      title: "of calls to small businesses go unanswered",
      note: "37.8% hit voicemail, 24.3% get no response at all",
      source: "411 Locals study",
    },
    {
      icon: Moon,
      value: 40,
      suffix: "%",
      decimals: 0,
      title: "of inbound calls arrive outside 9-to-5",
      note: "Evenings, late nights, and weekends",
      source: "CallRail analysis, 2026",
    },
    {
      icon: Voicemail,
      value: 80,
      suffix: "%",
      decimals: 0,
      title: "of callers sent to voicemail never leave a message",
      note: "First-time callers simply move on to the next business",
      source: "Widely cited — Forbes / Invoca",
    },
  ];
  return (
    <SlideShell>
      <Kicker>The Problem</Kicker>
      <SlideTitle>Your phone is leaking revenue.</SlideTitle>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.title}
            className={`animate-fade-in-up rounded-card border border-white/10 bg-white/5 p-6 transition-premium hover:border-brand/40 ${
              [`[animation-delay:200ms]`, `[animation-delay:300ms]`, `[animation-delay:400ms]`][i]
            }`}
          >
            <s.icon className="h-6 w-6 text-brand" aria-hidden />
            <p className="mt-4 font-display text-6xl font-bold text-white">
              <CountUp to={s.value} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="mt-3 font-medium leading-snug text-white/90">
              {s.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              {s.note}
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-brand/80">
              {s.source}
            </p>
          </div>
        ))}
      </div>
      <p className="animate-fade-in-up mt-10 max-w-3xl font-display text-xl font-medium text-white/80 [animation-delay:500ms] md:text-2xl">
        A human receptionist covers 40 hours a week, one call at a time.{" "}
        <span className="text-brand">Your customers don&apos;t wait.</span>
      </p>
      <SourceNote>
        Sources: 411 Locals, “Small Business Owners Don&apos;t Answer 62% of
        Phone Calls” (2016, n=85 businesses); CallRail small-business call-timing
        analysis (2026); voicemail figure widely cited across Forbes and Invoca
        industry research. Every one of those calls is a booking, a job, or a
        patient that went somewhere else.
      </SourceNote>
    </SlideShell>
  );
}

function SpeedSlide() {
  return (
    <SlideShell>
      <Kicker>Why Speed Wins</Kicker>
      <SlideTitle>The first business to answer wins the deal.</SlideTitle>
      <div className="mt-12 grid items-start gap-6 lg:grid-cols-5">
        <div className="animate-fade-in-up rounded-card border border-brand/30 bg-gradient-to-b from-brand/15 to-transparent p-8 [animation-delay:200ms] lg:col-span-2">
          <p className="font-display text-8xl font-bold leading-none text-brand">
            <CountUp to={21} suffix="×" duration={1400} />
          </p>
          <p className="mt-4 text-lg font-medium leading-snug text-white">
            higher odds of qualifying a lead when you respond within 5 minutes
            instead of 30.
          </p>
          <p className="mt-3 text-sm text-white/50">
            Lead Response Management study — Dr. James Oldroyd / MIT /
            InsideSales.com
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-3">
          <div className="animate-fade-in-up flex items-center gap-4 rounded-card border border-white/10 bg-white/5 p-5 [animation-delay:300ms]">
            <Timer className="h-8 w-8 shrink-0 text-brand" aria-hidden />
            <div>
              <p className="font-display text-2xl font-semibold text-white">
                7× more likely to qualify
              </p>
              <p className="text-sm text-white/50">
                firms that contact a lead within an hour vs. later — HBR,
                “The Short Life of Online Sales Leads” (1.25M leads analyzed)
              </p>
            </div>
          </div>
          <div className="animate-fade-in-up flex items-center gap-4 rounded-card border border-white/10 bg-white/5 p-5 [animation-delay:400ms]">
            <PhoneCall className="h-8 w-8 shrink-0 text-brand" aria-hidden />
            <div>
              <p className="font-display text-2xl font-semibold text-white">
                70% of mobile searchers call direct
              </p>
              <p className="text-sm text-white/50">
                from search results, and half are looking for a number because
                they want to buy — Google / Ipsos
              </p>
            </div>
          </div>
          <div className="animate-fade-in-up space-y-4 rounded-card border border-white/10 bg-white/5 p-6 [animation-delay:500ms]">
            <div>
              <div className="mb-1.5 flex items-center justify-between text-xs text-white/50">
                <span>Average company response time to a lead</span>
                <span className="font-semibold">42 hours</span>
              </div>
              <div className="h-3 w-full rounded-pill bg-white/10">
                <div className="h-full w-full rounded-pill bg-white/25" />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-semibold text-brand">
                  Fusion Calling pickup
                </span>
                <span className="font-semibold text-brand">two rings</span>
              </div>
              <div className="h-3 w-full rounded-pill bg-white/10">
                <div className="animate-scale-in h-full w-[2%] rounded-pill bg-gradient-to-r from-brand-strong to-brand-light" />
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/40">
              Sub-second conversational responses, every hour of every day.
            </p>
          </div>
        </div>
      </div>
      <SourceNote>
        Sources: Oldroyd/MIT/InsideSales.com Lead Response Management study
        (2007, reaffirmed 2014); Harvard Business Review (2011); Google/Ipsos
        mobile search survey (2013); HBR reports the 42-hour average response
        across 2,241 US companies.
      </SourceNote>
    </SlideShell>
  );
}

function ProductSlide() {
  const features = [
    {
      icon: PhoneCall,
      title: "24/7 answering",
      body: "Every caller answered in seconds — nights, weekends, holidays. No voicemail, no hold queue.",
    },
    {
      icon: CalendarCheck,
      title: "Live calendar booking",
      body: "Checks real availability, books and reschedules on the call, confirms instantly by SMS.",
    },
    {
      icon: Users,
      title: "Lead qualification",
      body: "Reaches new leads in minutes, asks your qualifying questions, routes only qualified prospects.",
    },
    {
      icon: MessageSquare,
      title: "FAQ answering",
      body: "Hours, directions, pricing, policies — answered from your business knowledge, in your tone.",
    },
    {
      icon: PhoneForwarded,
      title: "Smart warm transfer",
      body: "Judgment calls transfer to you or your team with the transcript and reason attached.",
    },
    {
      icon: Megaphone,
      title: "Outbound campaigns",
      body: "Appointment reminders, recall and win-back campaigns, cart-recovery calls at any volume.",
    },
  ];
  return (
    <SlideShell>
      <Kicker>The Product</Kicker>
      <SlideTitle>
        One AI agent. Every call you get — and the ones you should be making.
      </SlideTitle>
      <div className="mt-10 grid items-center gap-8 lg:grid-cols-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`animate-fade-in-up group rounded-card border border-white/10 bg-white/5 p-4 transition-premium hover:border-brand/40 ${
                [
                  `[animation-delay:200ms]`,
                  `[animation-delay:280ms]`,
                  `[animation-delay:360ms]`,
                  `[animation-delay:440ms]`,
                  `[animation-delay:520ms]`,
                  `[animation-delay:600ms]`,
                ][i]
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-btn bg-brand/15 transition-premium group-hover:bg-brand/25">
                  <f.icon className="h-4 w-4 text-brand" aria-hidden />
                </div>
                <h3 className="font-display text-sm font-semibold text-white">
                  {f.title}
                </h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                {f.body}
              </p>
            </div>
          ))}
        </div>
        <div className="animate-fade-in-up lg:col-span-2 [animation-delay:500ms]">
          <div className="overflow-hidden rounded-card border border-white/10 bg-black/40 shadow-premium-lg">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
              <span className="ml-3 truncate rounded-pill bg-white/5 px-3 py-1 text-[10px] text-white/40">
                app.yourcompany.com/overview
              </span>
            </div>
            <Image
              src="/deck/dashboard.webp"
              alt="Fusion Calling dashboard — call minutes, call volume over time, and call distribution analytics"
              width={1660}
              height={800}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 text-center text-xs text-white/40">
            Live analytics — every call, minute, and outcome in your dashboard.
          </p>
        </div>
      </div>
      <p className="animate-fade-in-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/70 [animation-delay:700ms]">
        <span className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-brand" aria-hidden /> 10–20 concurrent
          calls
        </span>
        <span className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-brand" aria-hidden /> SMS
          follow-ups during &amp; after calls
        </span>
        <span className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-brand" aria-hidden /> Recordings,
          transcripts &amp; analytics on every call
        </span>
      </p>
    </SlideShell>
  );
}

function HowItWorksSlide() {
  const pipeline = [
    {
      icon: PhoneCall,
      step: "Connects",
      body: "Picks up in seconds. No phone tree, no hold music.",
    },
    {
      icon: AudioLines,
      step: "Understands",
      body: "Real-time transcription in milliseconds (Deepgram ASR).",
    },
    {
      icon: Brain,
      step: "Thinks",
      body: "LLM reasons over your business knowledge to decide the reply.",
    },
    {
      icon: Bot,
      step: "Speaks",
      body: "Human-like voice with natural pacing and barge-in (ElevenLabs).",
    },
    {
      icon: Workflow,
      step: "Acts",
      body: "Books the calendar, updates the CRM, sends SMS, transfers.",
    },
  ];
  const lifecycle = [
    { title: "Build", body: "No-code agent builder" },
    { title: "Test", body: "Built-in test LLM for edge cases" },
    { title: "Deploy", body: "Phone, web calls, SMS" },
    { title: "Monitor", body: "Success rates, latency, sentiment dashboards" },
  ];
  return (
    <SlideShell>
      <Kicker>How It Works</Kicker>
      <SlideTitle>
        A full conversation pipeline — with hands in your stack.
      </SlideTitle>
      <div className="mt-12 grid gap-3 md:grid-cols-5">
        {pipeline.map((p, i) => (
          <div
            key={p.step}
            className={`animate-fade-in-up relative rounded-card border border-white/10 bg-white/5 p-5 ${
              [`[animation-delay:200ms]`, `[animation-delay:300ms]`, `[animation-delay:400ms]`, `[animation-delay:500ms]`, `[animation-delay:600ms]`][i]
            }`}
          >
            <div className="flex items-center justify-between">
              <p.icon className="h-6 w-6 text-brand" aria-hidden />
              <span className="font-display text-xs font-bold text-white/30">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-3 font-display text-base font-semibold text-white">
              {p.step}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-white/55">
              {p.body}
            </p>
            {i < pipeline.length - 1 ? (
              <ArrowRight
                className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-brand md:block"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="animate-fade-in-up mt-8 rounded-card border border-white/10 bg-white/5 p-6 [animation-delay:700ms]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
          Launch lifecycle
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map((l, i) => (
            <div key={l.title} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-brand/15 font-display text-xs font-bold text-brand">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  {l.title}
                </p>
                <p className="text-xs text-white/50">{l.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="animate-fade-in-up mt-8 text-sm text-white/60 [animation-delay:800ms]">
        Typical go-live:{" "}
        <span className="font-semibold text-white">4 weeks</span> — as fast as 2
        weeks for simple setups. Barge-in, topic switching, and language
        switching included.
      </p>
    </SlideShell>
  );
}

function DemoSlide() {
  const demos = [
    "Real-estate outbound",
    "Dental customer service",
    "Insurance lead qualification",
    "Appointment booking",
    "Restaurant reservations",
    "Order taking",
    "Cold-call lead gen",
    "Credit repair",
    "Sales pitch",
  ];
  return (
    <SlideShell>
      <Kicker>Hear It Now</Kicker>
      <SlideTitle>Don&apos;t take our word for it — call it.</SlideTitle>
      <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
        <a
          href={DEMO_PHONE_TEL}
          className="animate-fade-in-up group block rounded-card border border-brand/40 bg-gradient-to-b from-brand/20 via-brand/10 to-transparent p-10 text-center transition-premium hover:border-brand [animation-delay:200ms]"
        >
          <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
            <span className="absolute inset-0 animate-ping rounded-full bg-brand/30" />
            <PhoneCall className="relative h-8 w-8 text-brand" aria-hidden />
          </span>
          <p className="mt-6 font-display text-3xl font-bold tracking-wide text-white md:text-4xl">
            {DEMO_PHONE_DISPLAY}
          </p>
          <p className="mt-3 text-sm font-medium text-brand">
            Dial it — the AI picks up in seconds
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/50">
            Or leave your number on fusioncalling.com and the agent will call
            you, so you hear exactly what your customers hear.
          </p>
        </a>
        <div className="animate-fade-in-up rounded-card border border-white/10 bg-white/5 p-8 [animation-delay:350ms]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Recorded demo library
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {demos.map((d) => (
              <Chip key={d}>{d}</Chip>
            ))}
          </div>
          <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
            <p className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
              95% of callers can&apos;t distinguish the agent from a human
              receptionist (internal testing) — most businesses introduce it by
              name in the greeting.
            </p>
            <p className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
              Few platforms let buyers experience the product this directly —
              ours is live on the homepage.
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

function ApiSlide() {
  const apis = [
    {
      icon: CalendarCheck,
      name: "Calendar API",
      ver: "v1.0",
      body: "Create, update, and sync events — Google Meet / Zoom links generated for you, appointment SMS fired automatically.",
      methods: ["GET", "POST", "PATCH", "DELETE"],
    },
    {
      icon: Users,
      name: "Leads API",
      ver: "v1.2",
      body: "Push single leads or atomic batches of 1–100, look up by phone, and sync status back to your CRM.",
      methods: ["GET", "POST", "PATCH"],
    },
  ];
  return (
    <SlideShell>
      <Kicker>For Developers</Kicker>
      <SlideTitle>Plugs straight into your stack.</SlideTitle>
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {apis.map((api, i) => (
            <div
              key={api.name}
              className={`animate-fade-in-up rounded-card border border-white/10 bg-white/5 p-5 transition-premium hover:border-brand/40 ${
                [`[animation-delay:200ms]`, `[animation-delay:280ms]`][i]
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-btn bg-brand/15">
                  <api.icon className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {api.name}{" "}
                  <span className="ml-0.5 text-xs font-bold text-brand">
                    {api.ver}
                  </span>
                </h3>
                <span className="ml-auto flex gap-1.5">
                  {api.methods.map((m) => (
                    <span
                      key={m}
                      className="rounded-pill bg-black/40 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-light"
                    >
                      {m}
                    </span>
                  ))}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {api.body}
              </p>
            </div>
          ))}
          <div className="animate-fade-in-up flex flex-wrap items-center gap-x-5 gap-y-2 rounded-card border border-white/10 bg-white/5 p-4 text-sm text-white/70 [animation-delay:360ms]">
            <span className="flex items-center gap-2">
              <KeyRound className="h-4 w-4 shrink-0 text-brand" aria-hidden />{" "}
              Bearer API keys
            </span>
            <span className="flex items-center gap-2">
              <Webhook className="h-4 w-4 shrink-0 text-brand" aria-hidden />{" "}
              GoHighLevel · n8n · Zapier guides
            </span>
          </div>
        </div>
        <div className="animate-fade-in-up [animation-delay:350ms]">
          <div className="overflow-hidden rounded-card border border-white/10 bg-black/50 shadow-premium-lg">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                terminal
              </span>
              <Braces className="h-3.5 w-3.5 text-brand" aria-hidden />
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-white/70">
              <code>
                {`curl -X POST \\
  https://app.fusioncalling.com/api/leads/external/v1/leads \\
  -H "Authorization: Bearer fc_live_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "first_name": "Dana",
    "phone": "+1 914 555 0123",
    "tags": ["plumbing", "emergency"]
  }'`}
              </code>
            </pre>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip>OpenAPI 3.0 spec published</Chip>
            <Chip>cURL · JS · Python · PHP examples</Chip>
            <Chip>12–100 req/min rate limits</Chip>
          </div>
        </div>
      </div>
      <SourceNote>
        Full reference: fusioncalling.com/docs/api-reference · Published spec:
        fusioncalling.com/openapi.json · Bearer-key auth · Calendar API 12
        req/min · Leads API 100 req/min.
      </SourceNote>
    </SlideShell>
  );
}

function EconomicsSlide() {
  const alternatives = [
    {
      name: "Human receptionist",
      price: "$3,000+/mo",
      unit: "salary + benefits",
      points: [
        "40 hours a week, one call at a time",
        "Sick days, vacation, turnover",
        "BLS median wage: $18.27/hr",
      ],
      highlight: false,
    },
    {
      name: "Answering service",
      price: "$1–3/min",
      unit: "per-minute billing",
      points: [
        "Takes messages from a script",
        "Can't book into your calendar",
        "Costs scale with every call",
      ],
      highlight: false,
    },
    {
      name: "Fusion Calling",
      price: "$149–497/mo",
      unit: "flat, month-to-month",
      points: [
        "Books into your real calendar, acts in your stack",
        "24/7, unlimited concurrent calls",
        "$0 setup on Starter · 14-day money-back",
      ],
      highlight: true,
    },
  ];
  return (
    <SlideShell>
      <Kicker>The Economics</Kicker>
      <SlideTitle>Flat rate. A fraction of the alternatives.</SlideTitle>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {alternatives.map((a, i) => (
          <div
            key={a.name}
            className={`animate-fade-in-up rounded-card border p-6 ${
              a.highlight
                ? "border-brand/50 bg-gradient-to-b from-brand/15 to-transparent shadow-premium"
                : "border-white/10 bg-white/5"
            } ${[`[animation-delay:200ms]`, `[animation-delay:300ms]`, `[animation-delay:400ms]`][i]}`}
          >
            <p
              className={`font-display text-sm font-semibold uppercase tracking-wider ${
                a.highlight ? "text-brand" : "text-white/50"
              }`}
            >
              {a.name}
            </p>
            <p className="mt-3 font-display text-4xl font-bold text-white">
              {a.price}
            </p>
            <p className="mt-1 text-xs text-white/40">{a.unit}</p>
            <ul className="mt-5 space-y-2.5">
              {a.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm leading-relaxed text-white/70"
                >
                  <CheckCircle2
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      a.highlight ? "text-brand" : "text-white/30"
                    }`}
                    aria-hidden
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="animate-fade-in-up mt-6 grid gap-4 md:grid-cols-2 [animation-delay:500ms]">
        <div className="rounded-card border border-brand/30 bg-brand/10 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            The missed-call math
          </p>
          <p className="mt-3 text-lg font-medium leading-relaxed text-white">
            Miss 20 calls a month, close 1 in 4 at a $300 average value —
            that&apos;s{" "}
            <span className="font-display font-bold text-brand">
              $1,500/mo recovered
            </span>
            , more than any plan costs.
          </p>
        </div>
        <div className="rounded-card border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Plans at a glance
          </p>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="font-display text-xl font-bold text-white">$149</p>
              <p className="text-[11px] text-white/50">Starter · 500 min</p>
            </div>
            <div className="rounded-btn border border-brand/40 bg-brand/10">
              <p className="font-display text-xl font-bold text-brand">$249</p>
              <p className="text-[11px] text-white/50">Pro · 1,050 min</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-white">$497</p>
              <p className="text-[11px] text-white/50">
                Enterprise · 2,100 min
              </p>
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-white/40">
            Overages $0.20–0.30/min · usage alerts at 80% and 95% · all plans
            include 24/7 support and a 99.9% uptime guarantee
          </p>
        </div>
      </div>
      <SourceNote>
        Receptionist cost from US Bureau of Labor Statistics Occupational
        Outlook Handbook (May 2025, $18.27/hr median) plus benefits; answering
        service rates are prevailing market rates. An answering service takes
        messages — an AI receptionist takes action.
      </SourceNote>
    </SlideShell>
  );
}

function IndustriesSlide() {
  const industries = [
    { icon: Building2, name: "Real Estate", hook: "Never miss a buyer or seller lead — sign calls captured 24/7" },
    { icon: Stethoscope, name: "Dental & Healthcare", hook: "Fill cancellations, cut no-shows, HIPAA-conscious intake" },
    { icon: ShieldCheck, name: "Insurance", hook: "Quote intake in seconds, renewal retention, TCPA-respecting outbound" },
    { icon: Wrench, name: "Home Services", hook: "A missed call is a lost job — 2 a.m. emergencies answered and triaged" },
    { icon: Scale, name: "Legal", hook: "After-hours case intake with conflict screening" },
    { icon: Car, name: "Automotive", hook: "Service-bay booking and recall campaigns at scale" },
    { icon: Headphones, name: "Call Centers & BPO", hook: "Absorb spikes with 1000s of concurrent calls, 100% recorded" },
    { icon: Landmark, name: "Financial Services", hook: "Advisor scheduling and compliant transcripts" },
    { icon: ShoppingCart, name: "Ecommerce", hook: "Live order status and cart-recovery calls with one-tap checkout" },
    { icon: GraduationCap, name: "Education", hook: "Enrollment qualification and trial booking" },
    { icon: UtensilsCrossed, name: "Restaurants", hook: "Reservations into OpenTable/Resy/Tock, orders into Toast/Square" },
  ];
  return (
    <SlideShell>
      <Kicker>Built For Your Industry</Kicker>
      <SlideTitle>
        Speaking your language — literally and operationally.
      </SlideTitle>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className={`animate-fade-in-up flex items-start gap-3 rounded-card border border-white/10 bg-white/5 p-4 transition-premium hover:border-brand/40 ${
              i < 6
                ? [`[animation-delay:150ms]`, `[animation-delay:200ms]`, `[animation-delay:250ms]`, `[animation-delay:300ms]`, `[animation-delay:350ms]`, `[animation-delay:400ms]`][i]
                : `[animation-delay:450ms]`
            }`}
          >
            <ind.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
            <div>
              <p className="font-display text-sm font-semibold text-white">
                {ind.name}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/50">
                {ind.hook}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60 [animation-delay:550ms]">
        <span className="flex items-center gap-2">
          <AudioLines className="h-4 w-4 text-brand" aria-hidden /> 10 showcase
          voices — US, UK, AU &amp; CA accents
        </span>
        <span className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-brand" aria-hidden /> Multilingual
          conversations
        </span>
        <span className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-brand" aria-hidden /> Voice cloning
          available
        </span>
      </p>
    </SlideShell>
  );
}

function ResultsSlide() {
  const counters = [
    { value: 60, suffix: "+", label: "voice-AI deployments" },
    { value: 99, suffix: "%", label: "client satisfaction" },
    { value: 12000, suffix: "+", label: "calls managed" },
    { value: 40, suffix: "h", label: "saved monthly" },
    { value: 80, suffix: "%", label: "fewer missed calls" },
  ];
  const cases = [
    {
      company: "VoiceWave Marketing",
      meta: "Digital agency · Austin, TX",
      metric: "$12.4K",
      metricLabel: "monthly recurring revenue",
      points: ["15 white-label clients", "94% client retention", "First client live in 7 days"],
      quote:
        "Every new client we onboard takes 15 minutes of setup and generates $500+ a month.",
      author: "Marcus Chen, Founder",
    },
    {
      company: "CallFlow Solutions",
      meta: "Call center / BPO · Kansas City, MO",
      metric: "$18.2K",
      metricLabel: "monthly recurring revenue",
      points: ["22 clients on platform", "40% higher margins", "2 years on Fusion Calling"],
      quote: "We didn't fire anyone — we retrained.",
      author: "Sarah Kline, CEO",
    },
    {
      company: "Apex Realty Group",
      meta: "Real estate · Miami, FL",
      metric: "3×",
      metricLabel: "ROI in 60 days",
      points: ["40+ qualified leads/mo", "8 showings booked weekly", "Replaced $1,200/mo service"],
      quote:
        "We went from missing 60% of after-hours leads to capturing every single one.",
      author: "James Torres, Broker-Owner",
    },
  ];
  return (
    <SlideShell>
      <Kicker>Proof</Kicker>
      <SlideTitle>Numbers from the field.</SlideTitle>
      <div className="animate-fade-in-up mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 [animation-delay:200ms]">
        {counters.map((c) => (
          <div
            key={c.label}
            className="rounded-card border border-white/10 bg-white/5 p-4 text-center"
          >
            <p className="font-display text-3xl font-bold text-brand md:text-4xl">
              <CountUp to={c.value} suffix={c.suffix} />
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/50">
              {c.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {cases.map((c, i) => (
          <div
            key={c.company}
            className={`animate-fade-in-up flex flex-col rounded-card border border-white/10 bg-white/5 p-6 transition-premium hover:border-brand/40 ${
              [`[animation-delay:300ms]`, `[animation-delay:400ms]`, `[animation-delay:500ms]`][i]
            }`}
          >
            <p className="text-xs font-medium text-white/40">{c.meta}</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">
              {c.company}
            </p>
            <p className="mt-3 font-display text-4xl font-bold text-brand">
              {c.metric}
            </p>
            <p className="text-xs text-white/50">{c.metricLabel}</p>
            <ul className="mt-4 space-y-1.5">
              {c.points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-xs text-white/65"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <blockquote className="mt-5 border-t border-white/10 pt-4 text-sm italic leading-relaxed text-white/75">
              “{c.quote}”
              <footer className="mt-2 text-[11px] not-italic text-white/40">
                — {c.author}
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
      <SourceNote>
        Platform figures from internal Fusion Calling data, Jan 2024 – Jun
        2026; individual results may vary. Case figures from published partner
        case studies at fusioncalling.com/whitelabel/case-studies.
      </SourceNote>
    </SlideShell>
  );
}

function WhiteLabelSlide() {
  const tiers = [
    {
      name: "Starter",
      price: "$99",
      accounts: "6 sub-accounts",
      features: ["Direct calendar booking", "Complete white-labeling", "Client portal access", "Minute rebilling"],
      popular: false,
    },
    {
      name: "Growth",
      price: "$299",
      accounts: "20 sub-accounts",
      features: ["Everything in Starter", "Priority support", "Advanced analytics", "Custom onboarding"],
      popular: true,
    },
    {
      name: "Scale",
      price: "$499",
      accounts: "Unlimited sub-accounts",
      features: ["Dedicated account manager", "API access", "Custom integrations", "Early feature access"],
      popular: false,
    },
  ];
  return (
    <SlideShell>
      <Kicker>For Agencies — The White-Label Offer</Kicker>
      <SlideTitle>Sell AI receptionists as your own product.</SlideTitle>
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
        <div className="animate-fade-in-up space-y-3 [animation-delay:200ms]">
          {[
            { icon: Globe, text: "Your logo, colors, and custom domain — app.youragency.com" },
            { icon: Users, text: "Per-client sub-accounts with their own minutes, billing, and call logs" },
            { icon: CreditCard, text: "Stripe rebilling on your account — automated recurring invoices in your brand" },
            { icon: Layers, text: "Import existing Vapi, Retell, or ElevenLabs agents and API keys — nothing rebuilt" },
            { icon: Rocket, text: "Done-with-you launch: branded agency live in 24 hours + 30 days of support" },
          ].map((f) => (
            <div
              key={f.text}
              className="flex items-start gap-3 rounded-card border border-white/10 bg-white/5 p-4 transition-premium hover:border-brand/40"
            >
              <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
              <p className="text-sm leading-relaxed text-white/80">{f.text}</p>
            </div>
          ))}
          <p className="rounded-card border border-brand/30 bg-brand/10 p-4 font-display text-sm font-medium text-white">
            “Your clients will never know about Fusion Calling unless you
            choose to tell them.”
          </p>
        </div>
        <div className="grid gap-3 [animation-delay:350ms]">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`animate-fade-in-up rounded-card border p-5 ${
                t.popular
                  ? "border-brand/50 bg-gradient-to-b from-brand/15 to-transparent shadow-premium"
                  : "border-white/10 bg-white/5"
              } ${[`[animation-delay:400ms]`, `[animation-delay:500ms]`, `[animation-delay:600ms]`][i]}`}
            >
              <div className="flex items-baseline justify-between">
                <p
                  className={`font-display text-sm font-semibold uppercase tracking-wider ${
                    t.popular ? "text-brand" : "text-white/60"
                  }`}
                >
                  {t.name}
                  {t.popular ? " · Most popular" : ""}
                </p>
                <p className="font-display">
                  <span className="text-3xl font-bold text-white">
                    {t.price}
                  </span>
                  <span className="text-sm text-white/40">/mo wholesale</span>
                </p>
              </div>
              <p className="mt-1 text-xs font-semibold text-brand/80">
                {t.accounts}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {t.features.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-1.5 text-xs text-white/60"
                  >
                    <CheckCircle2 className="h-3 w-3 text-brand" aria-hidden />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-xs font-semibold text-white/60">
            $0 setup · 3-day free trial · you keep 100% of what you charge
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

function WhyFusionSlide() {
  const advantages = [
    {
      icon: Globe,
      title: "Full brand ownership",
      body: "Your domain, logo, and pricing. The client never sees Fusion Calling.",
    },
    {
      icon: PhoneCall,
      title: "Try it before you sell it",
      body: "A live, interactive demo anyone can dial. Few platforms let buyers experience the product this directly.",
    },
    {
      icon: Layers,
      title: "True multi-provider",
      body: "Vapi + Retell + ElevenLabs, BYOK import, no vendor lock-in. Pick the engine that fits each client.",
    },
    {
      icon: Rocket,
      title: "Done-with-you onboarding",
      body: "Guided 24-hour launch plus 30 days of support — not a login link and a wiki.",
    },
  ];
  return (
    <SlideShell>
      <Kicker>Why Fusion Calling</Kicker>
      <SlideTitle>The unfair advantages.</SlideTitle>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {advantages.map((a, i) => (
          <div
            key={a.title}
            className={`animate-fade-in-up rounded-card border border-white/10 bg-white/5 p-5 transition-premium hover:border-brand/40 ${
              [`[animation-delay:200ms]`, `[animation-delay:280ms]`, `[animation-delay:360ms]`, `[animation-delay:440ms]`][i]
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-btn bg-brand/15">
                <a.icon className="h-5 w-5 text-brand" aria-hidden />
              </div>
              <h3 className="font-display text-base font-semibold text-white">
                {a.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {a.body}
            </p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function TrustSlide() {
  const columns = [
    {
      icon: Lock,
      title: "Security",
      points: [
        "GDPR & EU AI Act aligned",
        "ISO certified · SOC 2 in progress",
        "TLS 1.2+/1.3, SRTP media, AES-256 at rest",
        "Per-use-case recording on/off, retention schedules, per-caller access & delete",
      ],
    },
    {
      icon: Scale,
      title: "Compliance",
      points: [
        "TCPA consent, calling-hour & do-not-call checks on outbound",
        "Recording-consent notices (one-party vs all-party by state)",
        "HIPAA-conscious deployments for dental & medical intake",
        "Consent, time, and DNC logs kept per campaign",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Friendly terms",
      points: [
        "Month-to-month, cancel anytime",
        "14-day money-back guarantee (direct plans)",
        "3-day free trial + $0 setup (partner plans)",
        "99.9% uptime · 24/7 support · usage alerts at 80% & 95%",
      ],
    },
  ];
  return (
    <SlideShell>
      <Kicker>Trust &amp; Safety</Kicker>
      <SlideTitle>Enterprise guardrails, SMB-friendly terms.</SlideTitle>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {columns.map((c, i) => (
          <div
            key={c.title}
            className={`animate-fade-in-up rounded-card border border-white/10 bg-white/5 p-6 ${
              [`[animation-delay:200ms]`, `[animation-delay:300ms]`, `[animation-delay:400ms]`][i]
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-btn bg-brand/15">
              <c.icon className="h-5 w-5 text-brand" aria-hidden />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-white">
              {c.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {c.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm leading-relaxed text-white/65"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <SourceNote>
        Position it honestly and it sells better: the AI takes the routine
        volume — after-hours, overflow, bookings, reminders, common questions.
        Your people keep judgment calls, sensitive conversations, and
        in-person service.
      </SourceNote>
    </SlideShell>
  );
}

function CTASlide() {
  return (
    <SlideShell>
      <div
        className="particle left-[15%] top-[20%] h-72 w-72 [animation-delay:1s]"
        aria-hidden
      />
      <div
        className="particle right-[12%] bottom-[15%] h-80 w-80 [animation-delay:3s]"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl text-center">
        <p className="animate-fade-in-up text-xs font-bold uppercase tracking-[0.25em] text-brand">
          Next Steps
        </p>
        <h2 className="animate-fade-in-up mt-6 font-display text-4xl font-bold leading-tight text-white [animation-delay:100ms] md:text-6xl">
          Every missed call is a missed customer.{" "}
          <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
            Let&apos;s fix that.
          </span>
        </h2>
        <p className="animate-fade-in-up mt-6 text-lg leading-relaxed text-white/70 [animation-delay:200ms]">
          Hear the agent live on the phone right now — or book a discovery call
          and we will map your call flow, build a pilot agent, and launch in
          weeks.
        </p>
        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 [animation-delay:300ms] sm:flex-row">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-pill bg-brand px-8 py-4 font-display text-lg font-semibold text-white shadow-premium-lg transition-premium hover:scale-[1.03] hover:bg-brand-strong"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden />
            Book your discovery call
          </a>
          <a
            href={DEMO_PHONE_TEL}
            className="flex items-center gap-3 rounded-pill border border-white/20 bg-white/5 px-8 py-4 font-display text-lg font-semibold text-white transition-premium hover:border-brand hover:text-brand"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            {DEMO_PHONE_DISPLAY}
          </a>
        </div>
        <p className="animate-fade-in-up mt-8 text-sm text-white/40 [animation-delay:450ms]">
          cal.com/mralamin/discovery-call · hello@fusioncalling.com · 14-day
          money-back guarantee
        </p>
      </div>
    </SlideShell>
  );
}

export const slides: SlideDef[] = [
  { id: "title", label: "Title — Turn Missed Calls Into Revenue", Comp: TitleSlide },
  { id: "problem", label: "The Problem", Comp: ProblemSlide },
  { id: "speed", label: "Why Speed Wins", Comp: SpeedSlide },
  { id: "product", label: "The Product", Comp: ProductSlide },
  { id: "how", label: "How It Works", Comp: HowItWorksSlide },
  { id: "demo", label: "Hear It Now — Live Demo", Comp: DemoSlide },
  { id: "api", label: "API & Integrations", Comp: ApiSlide },
  { id: "economics", label: "The Economics — Cost & ROI", Comp: EconomicsSlide },
  { id: "industries", label: "Industries", Comp: IndustriesSlide },
  { id: "results", label: "Proof & Results", Comp: ResultsSlide },
  { id: "whitelabel", label: "The White-Label Offer", Comp: WhiteLabelSlide },
  { id: "why-fusion", label: "Why Fusion vs Alternatives", Comp: WhyFusionSlide },
  { id: "trust", label: "Trust & Safety", Comp: TrustSlide },
  { id: "cta", label: "Next Steps", Comp: CTASlide },
];
