import { Star } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  heading: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Lisa Chen",
    role: "Customer Support",
    content:
      "Implementing AI phone call automation has drastically reduced our response time and improved customer satisfaction. The system is seamless and incredibly effective.",
    heading: "Drastically improved customer satisfaction",
    image: "/testimonial/testimonial1.webp",
  },
  {
    name: "Mark Johnson",
    role: "Sales Director",
    content:
      "The AI-powered voice assistants have transformed how we handle outbound calls, saving us hours daily while maintaining a personal touch with our clients.",
    heading: "Saved hours daily with outbound automation",
    image: "/testimonial/testimonial2.webp",
  },
  {
    name: "Emily Davis",
    role: "Operations Lead",
    content:
      "Scaling inbound calls with AI has been a game-changer for our business. It's effortless to manage high call volumes without compromising on quality really super cool.",
    heading: "Effortlessly scaled inbound call management",
    image: "/testimonial/testimonial3.webp",
  },
  {
    name: "Robert Patel",
    role: "IT Manager",
    content:
      "The integration process was surprisingly smooth. Their AI call system adapted to our existing infrastructure with minimal downtime and immediately improved our response metrics.",
    heading: "Seamless integration with existing systems",
    image: "/testimonial/testimonial4.webp",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    content:
      "Using their AI solution for market research calls has given us insights we would have missed otherwise. The sentiment analysis feature helps us understand customer needs on a deeper level.",
    heading: "Incredible insights from call analysis",
    image: "/testimonial/testimonial6.webp",
  },
  {
    name: "James Thompson",
    role: "Small Business Owner",
    content:
      "As someone running a small team, I couldn't afford a full call center. This AI solution lets us provide 24/7 customer service without expanding our staff. It paid for itself within months.",
    heading: "Perfect solution for small businesses",
    image: "/testimonial/testimonial5.webp",
  },
];

/**
 * Testimonials mosaic for the homepage. Server component — every quote is
 * static HTML for crawlers (the replaced carousel was client JS and showed
 * only 3 of 6 quotes on mobile). Card styling mirrors the pricing cards.
 * The 4.8/5 line reuses the existing on-site stat from the dashboard section.
 */
export default function TestimonialsSection() {
  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Reveal
          animation="animate-fade-in-up"
          className="flex flex-col items-center mb-10 md:mb-14"
        >
          <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 text-balance">
            Customer{" "}
            <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-3xl text-balance">
            Experience our impact through our clients&rsquo; words.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-gray-400">
            <span className="flex items-center gap-0.5">
              <span className="sr-only">Rated 4.8 out of 5</span>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  aria-hidden="true"
                  className="h-3.5 w-3.5 fill-brand text-brand-strong"
                />
              ))}
            </span>
            4.8/5 customer satisfaction
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 items-stretch">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              as="li"
              animation="animate-fade-in-up"
              duration={0.5}
              delay={(index % 3) * 0.08}
              className="h-full"
            >
              <figure className="flex h-full flex-col rounded-card border border-brand/20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-4 md:p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/20">
                <p className="flex items-center gap-0.5">
                  <span className="sr-only">Rated 5 out of 5 stars</span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      className="h-3.5 w-3.5 fill-brand text-brand-strong"
                    />
                  ))}
                </p>
                <h3 className="mt-4 text-sm md:text-base font-semibold text-white text-balance">
                  {testimonial.heading}
                </h3>
                <blockquote className="mt-2 flex-1 text-xs md:text-sm leading-relaxed text-zinc-400">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-gray-700/60 pt-4">
                  <Image
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    className="h-10 w-10 rounded-full object-cover"
                    height={40}
                    loading="lazy"
                    src={testimonial.image}
                    width={40}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-zinc-400">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
