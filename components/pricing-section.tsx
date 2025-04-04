import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full py-12 md:py-18 bg-black text-gray-200">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
            Simple, Fair Pricing
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. Scale effortlessly
            as you grow.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* Starter Plan */}
          <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white rounded-xl p-6 flex flex-col shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Starter</h3>
                <p className="text-sm opacity-80">Perfect for small teams</p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white">€99</h2>
              <p className="text-sm text-gray-300">/ per month</p>
            </div>
            <button className="w-full bg-white text-[#0f172a] hover:bg-gray-100 rounded-full py-3 font-medium mb-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              Get Started
            </button>
            <div className="border-t border-gray-700 pt-8 mt-auto">
              <h4 className="font-medium mb-4 text-white">What you will get</h4>
              <ul className="space-y-3">
                {[
                  "$1.00 Per Minute",
                  "Basic IFTTT script",
                  "Basic FAQ handling",
                  "Call metrics dashboard",
                  "Dedicated Account Manager",
                  "Basic Testing",
                  "$1250 Build Fee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Plan - Main Design */}
          <div className="relative bg-gradient-to-b from-[#1e2356] to-[#2a2f69] text-white rounded-xl p-6 flex flex-col transform lg:scale-105 lg:-translate-y-3 shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-110">
            <div className="absolute -top-6 -left-6">
              <div className="w-12 h-12 flex items-center justify-center">
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
                <Check className="w-4 h-4 text-white z-10" />
              </div>
            </div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="text-sm opacity-80">For growing businesses</p>
              </div>
              <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                Popular
              </span>
            </div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-[#8a94ff]">€199</h2>
              <p className="text-sm opacity-80">/ per month</p>
            </div>
            <button className="w-full bg-gradient-to-r from-[#5a66ff] to-[#8a94ff] text-white rounded-full py-3 font-medium mb-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 hover:from-[#6b76ff] hover:to-[#9ba4ff]">
              Let&apos;s Start
            </button>
            <div className="border-t border-[#3a4184] pt-8 mt-auto">
              <h4 className="font-medium mb-4">What you will get</h4>
              <ul className="space-y-3">
                {[
                  "$0.80 Per Minute",
                  "Everything in Starter",
                  "Custom trained voices",
                  "Advanced response scripts",
                  "Custom dashboard",
                  "Advanced Testing",
                  "$1250 Build Fee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-[#5a66ff] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white rounded-xl p-6 flex flex-col shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Enterprise</h3>
                <p className="text-sm opacity-80">For large organizations</p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white">€299</h2>
              <p className="text-sm text-gray-300">/ per month</p>
            </div>
            <button className="w-full bg-white text-[#0f172a] hover:bg-gray-100 rounded-full py-3 font-medium mb-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              Contact Sales
            </button>
            <div className="border-t border-gray-700 pt-8 mt-auto">
              <h4 className="font-medium mb-4 text-white">What you will get</h4>
              <ul className="space-y-3">
                {[
                  "$0.65 Per Minute",
                  "Everything in Pro",
                  "Custom LLM Integration",
                  "Bespoke trained voice",
                  "Dedicated developer",
                  "Extensive Testing",
                  "$1250 Build Fee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          *All plans include 24/7 support and 99.9% uptime guarantee
        </p>
      </div>
    </section>
  );
}
