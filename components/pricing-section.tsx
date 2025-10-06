import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full py-6 md:py-8 lg:py-12 bg-black text-gray-200">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
            Simple, Fair Pricing
          </h2>
          <p className="text-xs text-gray-400 md:text-sm max-w-xl mx-auto">
            Choose the perfect plan for your business needs. Scale effortlessly
            as you grow.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Starter Plan */}
          <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white border-2 border-orange-500/20 rounded-lg p-3 md:p-4 flex flex-col shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]">
            <div className="flex justify-between items-start mb-2 md:mb-3">
              <div>
                <h3 className="text-sm md:text-base font-semibold">Starter</h3>
                <p className="text-xs opacity-80">Perfect for small teams</p>
              </div>
            </div>
            <div className="mb-4 md:mb-5">
              <h2 className="text-xl md:text-2xl font-bold text-white">$197</h2>
              <p className="text-xs text-gray-300">/ per month</p>
            </div>
            <a
              href="#calendar"
              className="w-full bg-white text-[#0f172a] hover:bg-gray-100  rounded-full py-1.5 md:py-2 font-medium mb-4 md:mb-5 transition-all duration-300 hover:shadow-lg text-xs md:text-sm inline-block text-center"
            >
              Get Started
            </a>
            {/* Fixed height spacer to ensure consistent border position */}
            <div className="flex-grow min-h-4"></div>
            <div className="border-t border-gray-700 pt-4 md:pt-5">
              <h4 className="font-medium mb-2 md:mb-3 text-white text-xs md:text-sm">
                What you will get
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                {[
                  "Includes 500 minutes",
                  "Full Portal Access",
                  "All Integrations Compatible",
                  "Basic FAQ handling",
                  "Basic response scripts",
                  "Basic Testing",
                  "$499 Build Fee",
                  "", // Empty item to maintain consistent height with other cards
                ].map(
                  (item, index) =>
                    item ? (
                      <li
                        key={index}
                        className="flex items-start gap-1.5 md:gap-2"
                      >
                        <div className="min-w-3 min-h-3 md:min-w-4 md:min-h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                          <Check className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" />
                        </div>
                        <span className="text-xs text-gray-300">{item}</span>
                      </li>
                    ) : (
                      <li key={index} className="h-4 md:h-5"></li>
                    ) // Empty space placeholder with height
                )}
              </ul>
            </div>
          </div>

          {/* Pro Plan - Main Design */}
          <div className="relative bg-gradient-to-b from-orange-600 to-gray-900 text-white rounded-lg p-3 md:p-4 flex flex-col shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px] order-first md:order-none lg:transform lg:scale-105 lg:-translate-y-2 h-full">
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
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
                <Check className="w-2 h-2 md:w-3 md:h-3 text-white z-10" />
              </div>
            </div>
            <div className="flex justify-between items-start mb-2 md:mb-3">
              <div>
                <h3 className="text-sm md:text-base font-semibold">Pro</h3>
                <p className="text-xs opacity-80">For growing businesses</p>
              </div>
              <span className="bg-white text-indigo-600 px-1.5 py-0.5 rounded-full text-xs font-medium">
                Popular
              </span>
            </div>
            <div className="mb-4 md:mb-5">
              <h2 className="text-xl md:text-2xl font-bold text-white">$349</h2>
              <p className="text-xs opacity-80">/ per month</p>
            </div>
            <a
              href="#calendar"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white  rounded-full py-1.5 md:py-2 font-medium mb-4 md:mb-5 transition-all duration-300 hover:shadow-lg text-xs md:text-sm inline-block text-center"
            >
              Let&apos;s Start
            </a>
            {/* Fixed height spacer to ensure consistent border position */}
            <div className="flex-grow min-h-4"></div>
            <div className="border-t border-orange-600 pt-4 md:pt-5">
              <h4 className="font-medium mb-2 md:mb-3 text-xs md:text-sm">
                What you will get
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                {[
                  "Includes 1050 minutes",
                  "Full Portal Access",
                  "All Integrations Compatible",
                  "Advanced response scripts",
                  "Advanced FAQ handling",
                  "Advanced Testing",
                  "Custom LLM Integration",
                  "$799 Build Fee",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-1.5 md:gap-2">
                    <div className="min-w-3 min-h-3 md:min-w-4 md:min-h-4 rounded-full bg-orange-600 flex items-center justify-center mt-0.5">
                      <Check className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" />
                    </div>
                    <span className="text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white border-2 border-orange-500/20 rounded-lg p-3 md:p-4 flex flex-col shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-600 hover:-translate-y-1 min-h-[200px]">
            <div className="flex justify-between items-start mb-2 md:mb-3">
              <div>
                <h3 className="text-sm md:text-base font-semibold">
                  Enterprise
                </h3>
                <p className="text-xs opacity-80">For large organizations</p>
              </div>
            </div>
            <div className="mb-4 md:mb-5">
              <h2 className="text-xl md:text-2xl font-bold text-white">$997</h2>
              <p className="text-xs text-gray-300">/ per month</p>
            </div>
            <a
              href="#calendar"
              className="w-full bg-white text-[#0f172a] hover:bg-gray-100 rounded-full py-1.5 md:py-2 font-medium mb-4 md:mb-5 transition-all duration-300 hover:shadow-lg text-xs md:text-sm inline-block text-center"
            >
              Contact Sales
            </a>
            {/* Fixed height spacer to ensure consistent border position */}
            <div className="flex-grow min-h-4"></div>
            <div className="border-t border-gray-700 pt-4 md:pt-5">
              <h4 className="font-medium mb-2 md:mb-3 text-white text-xs md:text-sm">
                What you will get
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                {[
                  "Includes 2100 minutes",
                  "Full Portal Access",
                  "Everything in Pro",
                  "Custom Trained Voice",
                  "Dedicated Support and Developer",
                  "Extensive script",
                  "Extensive Testing",
                  "$1250 Build Fee",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-1.5 md:gap-2">
                    <div className="min-w-3 min-h-3 md:min-w-4 md:min-h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <Check className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" />
                    </div>
                    <span className="text-xs text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-400 mt-4 md:mt-6 text-xs">
          *All plans include 24/7 support and 99.9% uptime guarantee
        </p>
      </div>
    </section>
  );
}
