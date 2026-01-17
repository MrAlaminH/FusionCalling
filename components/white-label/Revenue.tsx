"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, DollarSign, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Revenue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [clients, setClients] = useState(10);
  const [avgPrice, setAvgPrice] = useState(299);
  const [commission, setCommission] = useState(30);

  const calculateRevenue = () => {
    const monthlyRevenue = clients * avgPrice;
    const monthlyEarnings = monthlyRevenue * (commission / 100);
    const annualEarnings = monthlyEarnings * 12;

    return {
      monthlyRevenue,
      monthlyEarnings,
      annualEarnings,
    };
  };

  const revenue = calculateRevenue();

  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Calculate Your
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Revenue Potential
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            See how much you can earn by becoming a Fusion Calling partner.
            Adjust the inputs to see your potential revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-black border-orange-500/20 h-full">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Revenue Calculator
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Adjust these numbers to see your potential
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Number of Clients */}
                  <div>
                    <label
                      htmlFor="clients"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Number of Clients
                    </label>
                    <Input
                      id="clients"
                      type="number"
                      min="1"
                      max="1000"
                      value={clients}
                      onChange={(e) => setClients(parseInt(e.target.value) || 0)}
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                    <input
                      type="range"
                      min="1"
                      max="1000"
                      value={clients}
                      onChange={(e) => setClients(parseInt(e.target.value))}
                      className="w-full mt-2 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                  </div>

                  {/* Average Price */}
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Average Price per Client ($/month)
                    </label>
                    <Input
                      id="price"
                      type="number"
                      min="99"
                      max="10000"
                      step="10"
                      value={avgPrice}
                      onChange={(e) => setAvgPrice(parseInt(e.target.value) || 0)}
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                    <input
                      type="range"
                      min="99"
                      max="10000"
                      step="10"
                      value={avgPrice}
                      onChange={(e) => setAvgPrice(parseInt(e.target.value))}
                      className="w-full mt-2 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                  </div>

                  {/* Commission Rate */}
                  <div>
                    <label
                      htmlFor="commission"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Commission Rate ({commission}%)
                    </label>
                    <div className="flex gap-2 mb-2">
                      {[20, 25, 30, 35, 40].map((rate) => (
                        <Button
                          key={rate}
                          variant={commission === rate ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCommission(rate)}
                          className={`${
                            commission === rate
                              ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
                              : "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
                          }`}
                        >
                          {rate}%
                        </Button>
                      ))}
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="40"
                      value={commission}
                      onChange={(e) => setCommission(parseInt(e.target.value))}
                      className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Revenue Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-black border-orange-500/30 h-full">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Your Earnings
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Based on your inputs above
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Monthly Revenue */}
                  <div className="p-4 sm:p-6 rounded-xl bg-black border border-zinc-800">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-400 text-sm">Monthly Revenue</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-white">
                      ${revenue.monthlyRevenue.toLocaleString()}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      Total from {clients} client{clients !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Monthly Earnings */}
                  <div className="p-4 sm:p-6 rounded-xl bg-black border-green-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <span className="text-gray-400 text-sm">Monthly Earnings</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-green-500">
                      ${revenue.monthlyEarnings.toLocaleString()}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      Your commission at {commission}%
                    </p>
                  </div>

                  {/* Annual Earnings */}
                  <div className="p-4 sm:p-6 rounded-xl bg-black border-orange-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-400 text-sm">Annual Earnings</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-orange-500">
                      ${revenue.annualEarnings.toLocaleString()}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      Projected annual revenue
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            *This is a projection based on your inputs. Actual earnings may vary
            based on client retention, pricing strategy, and market conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
