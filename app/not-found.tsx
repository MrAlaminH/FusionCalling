import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 text-center">
      <div className="gradient-mesh absolute inset-0" aria-hidden />
      <div className="grain-overlay" aria-hidden />

      <div className="relative z-10 max-w-lg">
        <p className="font-display text-[8rem] sm:text-[12rem] font-bold leading-none bg-gradient-to-r from-brand to-brand-strong bg-clip-text text-transparent">
          404
        </p>
        <h1 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-white">
          Page not found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-pill bg-gradient-to-r from-brand to-brand-strong px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Back to Home
          </Link>
          <a
            href="https://cal.com/mralamin/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-pill border-2 border-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/20 sm:w-auto"
          >
            Book a Call
          </a>
        </div>
      </div>
    </main>
  );
}
