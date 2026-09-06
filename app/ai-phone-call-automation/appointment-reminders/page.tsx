import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "Automated Appointment Reminder Calls | Fusion Calling";
const description =
  "Reduce no-shows with automated appointment reminder calls. AI reminder calls confirm bookings, reschedule cancellations on the call, and send SMS confirmations. Plans from $149/mo.";

const benefits = [
  {
    title: "Cut no-shows",
    text: "Studies and industry reports suggest automated reminder calls typically reduce no-shows by 30–40%. A live, conversational confirmation is harder to ignore than a text, and every open slot gets a chance to be refilled.",
  },
  {
    title: "Fill cancellations from your waitlist",
    text: "When someone cancels on the call, the freed slot does not sit empty. The AI can immediately reach waitlisted customers and offer the opening, so a cancellation becomes a rebooking instead of lost revenue.",
  },
  {
    title: "Free up front-desk hours",
    text: "Staff stop spending the morning dialing down a reminder list. The AI places every call, handles confirmations and reschedules end-to-end, and your team only touches the exceptions that genuinely need a human.",
  },
  {
    title: "Multi-language with SMS backup",
    text: "Reminder calls run in multiple languages, so every customer is reminded in the language they speak. Each call is backed by an SMS confirmation carrying the time, address, and reschedule link in writing.",
  },
];

const howItWorks = [
  {
    title: "The agent reads your calendar",
    text: "Connect your calendar and the AI sees upcoming appointments: who is booked, when, and for what service. No exports, no spreadsheets — the reminder list builds itself from your real schedule.",
  },
  {
    title: "It places and times the call",
    text: "Reminders go out on the schedule you set — the day before, a few hours ahead, or both. The AI calls each customer, speaks naturally, and handles many calls at the same time, 24/7.",
  },
  {
    title: "The caller confirms, reschedules, or cancels on the call",
    text: "Customers answer in plain language. They confirm the appointment, or move it: the AI offers the next available slots from your calendar, books the new time mid-call, and never puts anyone on hold.",
  },
  {
    title: "Calendar and CRM updated, SMS sent",
    text: "Every outcome is written back automatically: your calendar shows the new time, your CRM logs the call with a transcript, and the customer receives an SMS confirmation with the details in writing.",
  },
];

const industryLinks = [
  {
    label: "AI receptionist for dental",
    href: "/industries/ai-voice-for-dental",
    text: "Remind patients of cleanings and procedures, reschedule no-shows on the call, and keep the chair schedule full.",
  },
  {
    label: "AI receptionist for restaurants",
    href: "/industries/ai-voice-for-restaurants-hospitality",
    text: "Confirm reservations, rebook cancellations from the waitlist, and cut wasted covers on busy nights.",
  },
  {
    label: "AI voice for home services",
    href: "/industries/ai-voice-for-home-services",
    text: "Confirm estimate and job windows, reschedule rain checks, and keep technicians routed to real work.",
  },
];

const faqs = [
  {
    question: "Do automated reminder calls reduce no-shows?",
    answer:
      "Yes. Studies and industry reports suggest automated appointment reminder calls typically reduce no-shows by 30–40%, because a live, conversational call is harder to ignore than a text. The AI confirms the appointment, offers to reschedule on the spot, and updates your calendar, so empty slots get refilled instead of lost.",
  },
  {
    question: "Can the AI reschedule a missed appointment on the call?",
    answer:
      "Yes. When a caller wants to cancel, the AI offers the next available slots from your connected calendar, books the new time during the same call, and sends an SMS confirmation with the updated details. Your calendar and CRM are updated automatically, and the freed slot can be offered to your waitlist.",
  },
  {
    question: "Do reminder calls work better than SMS alone?",
    answer:
      "For most businesses, yes. Calls reach people who miss or ignore texts, allow two-way confirmation, and handle rescheduling without an app. The strongest results usually come from combining the two: an AI reminder call for the conversation, with an SMS backup carrying the address, link, or intake form in writing.",
  },
  {
    question: "How much do automated reminder calls cost?",
    answer:
      "Reminder calls are included in Fusion Calling business plans, which start at $149/month with 500 included minutes and scale to $497/month for 2,100 minutes. There is no setup fee and no long-term contract, so reminders draw from the same minute pool as your inbound answering — one plan, one bill.",
  },
  {
    question: "Will callers know it is an AI calling?",
    answer:
      "Most businesses introduce the assistant by name in the greeting, so callers understand they are talking to an AI. What they notice is that the call is instant, polite, and gets the task done. An accurate reminder that respects their time beats a missed text or a busy front desk.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title,
    description,
    path: "/ai-phone-call-automation/appointment-reminders",
  }),
};

export default function AppointmentRemindersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-phone-call-automation/appointment-reminders#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Phone Call Automation",
            item: `${SITE_URL}/ai-phone-call-automation`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Automated Appointment Reminder Calls",
            item: `${SITE_URL}/ai-phone-call-automation/appointment-reminders`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/appointment-reminders#webpage`,
        url: `${SITE_URL}/ai-phone-call-automation/appointment-reminders`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-automation/appointment-reminders#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/appointment-reminders#faqpage`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="appointment-reminders-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="min-h-screen w-full bg-black">
        <Navbar />

        <section
          id="overview"
          className="relative w-full bg-gradient-to-b from-zinc-950 via-black to-black pt-32 pb-16 md:pt-40 md:pb-24"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-4">
              AI Phone Call Automation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Automated{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                Appointment Reminder Calls
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              AI reminder calls that confirm bookings, reschedule cancellations
              on the call, and send SMS confirmations — so fewer no-shows and a
              fuller calendar, 24/7.{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                View pricing
              </Link>{" "}
              from $149/month, no setup fee.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#show-case"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-strong"
              >
                See It in Action
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/5"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        <section id="what-is" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What are automated appointment reminder calls?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Automated appointment reminder calls are outbound phone calls
              placed by AI that confirm upcoming appointments, offer to
              reschedule or cancel, and update your calendar and CRM
              automatically. Unlike one-way robocalls or SMS blasts, the AI
              holds a two-way conversation, books a new time on the call, and
              sends an SMS confirmation in writing.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              They matter because unfilled slots are pure lost revenue: the
              chair, the table, or the tech sits idle either way. Want the
              underlying technology first? Read{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                how AI phone call automation works
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="how-it-works" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              How AI reminder calls work
            </h2>
            <div className="space-y-8">
              {howItWorks.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand-strong font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Why businesses use them
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automated reminder call pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Business plans start at $149/month with 500 included minutes and
              scale to $497/month for 2,100 minutes — no setup fee, no
              long-term contract. Reminder calls draw from the same plan as
              your inbound answering, so there is nothing extra to buy. See the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                full plan breakdown
              </Link>{" "}
              or run your own numbers in the{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                ROI calculator
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="industries" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Booking-heavy industries that benefit most
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              The more your revenue depends on people showing up, the faster
              reminder calls pay for themselves:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industryLinks.map((uc) => (
                <Link
                  key={uc.href}
                  href={uc.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    {uc.label}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {uc.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-8">
              Want reminders as part of a full phone agent? Learn{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                how AI phone call automation works
              </Link>
              , see the{" "}
              <Link href="/ai-receptionist" className="text-brand hover:underline">
                AI receptionist
              </Link>{" "}
              that handles inbound calls too, or{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                compare plans
              </Link>
              .
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
