import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-18 bg-black text-gray-200">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-2 md:mb-3">
            Simple, Fair Pricing
          </h2>
          <p className="text-sm md:text-base text-gray-400 md:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. Scale effortlessly
            as you grow.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Starter Plan */}
          <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white rounded-xl p-4 md:p-6 flex flex-col shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
            <div className="flex justify-between items-start mb-3 md:mb-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold">Starter</h3>
                <p className="text-xs md:text-sm opacity-80">
                  Perfect for small teams
                </p>
              </div>
            </div>
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                $297
              </h2>
              <p className="text-xs md:text-sm text-gray-300">/ per month</p>
            </div>
            <a
              href="#calendar"
              className="w-full bg-white text-[#0f172a] hover:bg-gray-100 rounded-full py-2 md:py-3 font-medium mb-6 md:mb-8 transition-all duration-300 hover:shadow-lg text-sm md:text-base inline-block text-center"
            >
              Get Started
            </a>
            {/* Fixed height spacer to ensure consistent border position */}
            <div className="flex-grow min-h-4"></div>
            <div className="border-t border-gray-700 pt-6 md:pt-8">
              <h4 className="font-medium mb-3 md:mb-4 text-white text-sm md:text-base">
                What you will get
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "$0.42 Extra Per Minute",
                  "Full Portal Access",
                  "All Integrations Compatible",
                  "Basic FAQ handling",
                  "Basic response scripts",
                  "Basic Testing",
                  "$799 Build Fee",
                  "", // Empty item to maintain consistent height with other cards
                ].map(
                  (item, index) =>
                    item ? (
                      <li
                        key={index}
                        className="flex items-start gap-2 md:gap-3"
                      >
                        <div className="min-w-4 min-h-4 md:min-w-5 md:min-h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                          <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                        </div>
                        <span className="text-xs md:text-sm text-gray-300">
                          {item}
                        </span>
                      </li>
                    ) : (
                      <li key={index} className="h-5 md:h-6"></li>
                    ) // Empty space placeholder with height
                )}
              </ul>
            </div>
          </div>

          {/* Pro Plan - Main Design */}
          <div className="relative bg-gradient-to-b from-[#1e2356] to-[#2a2f69] text-white rounded-xl p-4 md:p-6 flex flex-col shadow-xl transition-all duration-300 hover:shadow-2xl order-first md:order-none lg:transform lg:scale-105 lg:-translate-y-3 h-full">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6">
              <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                <div className="absolute inset-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full text-orange-500"
                  >
                    <path
                      fill="currentColor"
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                  </svg>
                </div>
                <Check className="w-3 h-3 md:w-4 md:h-4 text-white z-10" />
              </div>
            </div>
            <div className="flex justify-between items-start mb-3 md:mb-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold">Pro</h3>
                <p className="text-xs md:text-sm opacity-80">
                  For growing businesses
                </p>
              </div>
              <span className="bg-white text-indigo-600 px-2 py-1 rounded-full text-xs font-medium">
                Popular
              </span>
            </div>
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8a94ff]">
                €397
              </h2>
              <p className="text-xs md:text-sm opacity-80">/ per month</p>
            </div>
            <a
              href="#calendar"
              className="w-full bg-gradient-to-r from-[#5a66ff] to-[#8a94ff] text-white rounded-full py-2 md:py-3 font-medium mb-6 md:mb-8 transition-all duration-300 hover:shadow-lg text-sm md:text-base inline-block text-center"
            >
              Let&apos;s Start
            </a>
            {/* Fixed height spacer to ensure consistent border position */}
            <div className="flex-grow min-h-4"></div>
            <div className="border-t border-[#3a4184] pt-6 md:pt-8">
              <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">
                What you will get
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "$0.30 Extra Per Minute",
                  "Full Portal Access",
                  "All Integrations Compatible",
                  "Advanced response scripts",
                  "Advanced FAQ handling",
                  "Advanced Testing",
                  "Custom LLM Integration",
                  "$1250 Build Fee",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="min-w-4 min-h-4 md:min-w-5 md:min-h-5 rounded-full bg-[#5a66ff] flex items-center justify-center mt-0.5">
                      <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                    </div>
                    <span className="text-xs md:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white rounded-xl p-4 md:p-6 flex flex-col shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
            <div className="flex justify-between items-start mb-3 md:mb-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold">
                  Enterprise
                </h3>
                <p className="text-xs md:text-sm opacity-80">
                  For large organizations
                </p>
              </div>
            </div>
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                $797
              </h2>
              <p className="text-xs md:text-sm text-gray-300">/ per month</p>
            </div>
            <a
              href="#calendar"
              className="w-full bg-white text-[#0f172a] hover:bg-gray-100 rounded-full py-2 md:py-3 font-medium mb-6 md:mb-8 transition-all duration-300 hover:shadow-lg text-sm md:text-base inline-block text-center"
            >
              Contact Sales
            </a>
            {/* Fixed height spacer to ensure consistent border position */}
            <div className="flex-grow min-h-4"></div>
            <div className="border-t border-gray-700 pt-6 md:pt-8">
              <h4 className="font-medium mb-3 md:mb-4 text-white text-sm md:text-base">
                What you will get
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "$0.20 Extra Per Minute",
                  "Full Portal Access",
                  "Everything in Pro",
                  "Custom Trained Voice",
                  "Dedicated Support and Developer",
                  "Extensive script",
                  "Extensive Testing",
                  "$2250 Build Fee",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="min-w-4 min-h-4 md:min-w-5 md:min-h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-400 mt-6 md:mt-8 text-xs md:text-sm">
          *All plans include 24/7 support and 99.9% uptime guarantee
        </p>
      </div>
    </section>
  );
}
