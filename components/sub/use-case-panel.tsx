import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { primaryButton } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils";

type UseCaseItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type TranscriptLine = {
  speaker: "AI" | "Caller";
  text: string;
};

export type UseCasePanelProps = {
  image: string;
  imageAlt: string;
  title: string;
  lede: string;
  body: string;
  transcript: TranscriptLine[];
  items: UseCaseItem[];
};

function FeatureCard({ icon: Icon, title, description }: UseCaseItem) {
  return (
    <Reveal animation="animate-fade-in-up" duration={0.5}>
      <Card className="p-6 bg-zinc-900 border-white/10 h-full transition duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/20 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-full bg-brand/10 mb-4 flex items-center justify-center">
          <Icon className="text-brand" width={24} height={24} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </Card>
    </Reveal>
  );
}

/** CSS-only transcript that reveals line by line, with a blinking cursor. */
function Transcript({ lines }: { lines: TranscriptLine[] }) {
  return (
    <div className="mt-8 rounded-xl border border-white/10 bg-black/60 p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-2 h-2 rounded-full bg-brand animate-pulse"
          aria-hidden="true"
        />
        <span className="text-xs font-medium text-gray-400">
          Live call transcript
        </span>
      </div>
      <div className="space-y-2.5">
        {lines.map((line, i) => (
          <Reveal
            key={`${line.speaker}-${i}`}
            animation="animate-fade-in-up"
            delay={0.3 + i * 0.8}
            duration={0.4}
          >
            <p className="text-sm leading-relaxed">
              <span
                className={cn(
                  "font-semibold",
                  line.speaker === "AI" ? "text-brand" : "text-gray-300",
                )}
              >
                {line.speaker}:
              </span>{" "}
              <span className="text-gray-400">{line.text}</span>
            </p>
          </Reveal>
        ))}
        <Reveal
          animation="animate-fade-in-up"
          delay={0.3 + lines.length * 0.8}
          duration={0.3}
        >
          <span
            className="inline-block w-2 h-4 bg-brand/70 animate-pulse"
            aria-hidden="true"
          />
        </Reveal>
      </div>
    </div>
  );
}

export default function UseCasePanel({
  image,
  imageAlt,
  title,
  lede,
  body,
  transcript,
  items,
}: UseCasePanelProps) {
  return (
    <div className="py-12 space-y-12">
      <Reveal animation="animate-fade-in-up" duration={0.5}>
        <Card className="w-full bg-black border-brand/20 relative overflow-hidden transition duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/20">
          <div className="flex flex-col lg:flex-row">
            {/* Full-bleed scene that dissolves into the card background */}
            <div className="relative h-64 sm:h-80 lg:h-auto lg:w-2/5 flex-shrink-0">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-y-0 right-0 w-1/2 sm:w-1/3 bg-gradient-to-r from-transparent to-black" />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black to-transparent" />
              </div>
            </div>
            <div className="flex-grow p-6 sm:p-8 lg:pl-10 lg:py-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-gray-300 mb-4 text-lg">{lede}</p>
              <p className="text-gray-400">{body}</p>
              <Transcript lines={transcript} />
              <Link href="#calendar" className={cn("mt-8", primaryButton)}>
                Get Started
              </Link>
            </div>
          </div>
        </Card>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
