"use client";

import React, { useState, useMemo } from "react";
import {
  Zap,
  BarChart3,
  Info,
  ShieldCheck,
  AlertCircle,
  Database,
  Server,
  Activity,
  CalendarDays,
} from "lucide-react";

export default function VoiceCalculator() {
  // State
  const [provider, setProvider] = useState("vapi");
  const [concurrency, setConcurrency] = useState(10);
  const [duration, setDuration] = useState(1);
  const [accounts, setAccounts] = useState(1);
  const [cronInterval, setCronInterval] = useState(3); // Minutes

  // Sync concurrency when provider changes
  const handleProviderChange = (p: string) => {
    setProvider(p);
    setConcurrency(p === "vapi" ? 10 : 20);
  };

  // Calculations
  const calculations = useMemo(() => {
    // 1. THEORETICAL Max (Mathematical steady-state)
    const theoreticalMin = (concurrency / duration) * accounts;

    // 2. CRON-RESTRICTED Max (The "Wake up" limit)
    // Every cron interval, we can trigger at most (Concurrency * Accounts)
    const cronMaxPerInterval = concurrency * accounts;
    const cronRestrictedMin = cronMaxPerInterval / cronInterval;

    // 3. ACTUAL Steady State (The lower of the two)
    // If calls are short (1m) but cron is slow (3m), the Cron is the bottleneck.
    // If calls are long (10m) but cron is fast (3m), the Concurrency Slots are the bottleneck.
    const actualMin = Math.min(theoreticalMin, cronRestrictedMin);

    // Infrastructure Stats
    const dbOpsPerAccount = 8;
    const totalDbOpsPerCron = dbOpsPerAccount * accounts;
    const estimatedRuntimeSeconds = accounts * 8;

    return {
      min: actualMin,
      threeMin: actualMin * 3,
      tenMin: actualMin * 10,
      hour: actualMin * 60,
      eightHours: actualMin * 60 * 8,
      day: actualMin * 60 * 24,
      dbOps: totalDbOpsPerCron,
      runtime: estimatedRuntimeSeconds,
      qps: totalDbOpsPerCron / (cronInterval * 60),
      isCronBottleneck: cronRestrictedMin < theoreticalMin,
    };
  }, [concurrency, duration, accounts, cronInterval]);

  const stats = [
    {
      label: "Every Minute (Avg)",
      value: calculations.min.toFixed(1),
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Per Cron Run (3m)",
      value: calculations.threeMin.toFixed(0),
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      label: "Every 10 Minutes",
      value: calculations.tenMin.toFixed(0),
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Every Hour",
      value: calculations.hour.toFixed(0),
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Per 8-Hour Shift",
      value: calculations.eightHours.toLocaleString(),
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      label: "Per 24 Hours",
      value: calculations.day.toLocaleString(),
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3 text-slate-800">
              <span className="p-2 bg-indigo-600 rounded-lg text-white">
                <BarChart3 size={28} />
              </span>
              Voice Throughput Calculator
            </h1>
            <p className="text-slate-500 mt-1">
              Accurate lead processing forecasts accounting for Batch Frequency.
            </p>
          </div>
          <div className="flex gap-2 bg-white p-1.5 rounded-xl shadow-sm border border-slate-200">
            <button
              onClick={() => handleProviderChange("vapi")}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${provider === "vapi" ? "bg-indigo-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}`}
            >
              Vapi
            </button>
            <button
              onClick={() => handleProviderChange("retail")}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${provider === "retail" ? "bg-indigo-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}`}
            >
              Retell
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 border-b pb-4">
                <Zap size={18} className="text-indigo-600" />
                System Constraints
              </h2>

              <div className="space-y-8">
                {/* Max Concurrency */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-700">
                      Concurrency per Account
                    </label>
                    <span className="text-xs font-black px-2 py-0.5 bg-indigo-100 rounded text-indigo-700">
                      {concurrency}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={concurrency}
                    onChange={(e) => setConcurrency(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                {/* Avg Call Duration */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-700">
                      Avg. Call Duration
                    </label>
                    <span className="text-xs font-black px-2 py-0.5 bg-indigo-100 rounded text-indigo-700">
                      {duration} min
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[1, 3, 5, 7].map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={`py-2 text-xs font-bold rounded-lg border-2 transition-all ${duration === d ? "bg-indigo-600 border-indigo-600 text-white shadow-md" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300"}`}
                      >
                        {d}m
                      </button>
                    ))}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.5"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                {/* Number of Accounts */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-700">
                      Total Accounts
                    </label>
                    <span className="text-xs font-black px-2 py-0.5 bg-indigo-100 rounded text-indigo-700">
                      {accounts}
                    </span>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={accounts}
                    onChange={(e) =>
                      setAccounts(Math.max(1, Number(e.target.value)))
                    }
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-bold text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                {/* Cron Interval */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-indigo-500" />
                      Cron Batch Frequency
                    </label>
                    <span className="text-xs font-black px-2 py-0.5 bg-indigo-100 rounded text-indigo-700">
                      {cronInterval} min
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={cronInterval}
                    onChange={(e) => setCronInterval(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
                    How often your Vercel function wakes up to trigger the next
                    batch of calls.
                  </p>
                </div>
              </div>
            </div>

            {/* Platform Load Insights */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="font-bold text-indigo-400 flex items-center gap-2 text-sm uppercase tracking-widest">
                <Activity size={16} /> Infrastructure Health
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Database size={14} className="text-blue-400" /> Supabase
                    QPS
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    {calculations.qps.toFixed(2)} ops/s
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Server size={14} className="text-purple-400" /> Vercel
                    Duration
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    ~{calculations.runtime}s
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-100 px-6 py-5 flex items-center justify-between bg-slate-50/50">
                <h2 className="font-black text-slate-800 tracking-tight uppercase">
                  Actual Throughput
                </h2>
                {calculations.isCronBottleneck && (
                  <div className="flex items-center gap-2 text-[10px] font-black text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full uppercase border border-amber-100">
                    <AlertCircle size={12} /> Cron Bottlenecked
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`${stat.bg} rounded-2xl p-6 border-2 border-transparent transition-all group relative`}
                    >
                      <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2">
                        {stat.label}
                      </p>
                      <div className="flex items-baseline gap-1 relative z-10">
                        <span className={`text-3xl font-black ${stat.color}`}>
                          {stat.value}
                        </span>
                        <span className="text-sm font-bold text-slate-400 uppercase">
                          leads
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Analysis Breakdown */}
                <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-slate-300">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Info size={18} className="text-indigo-400" />
                    Why are these numbers showing like this?
                  </h3>

                  <div className="space-y-4 text-sm leading-relaxed">
                    <div
                      className={`p-4 rounded-xl border-l-4 ${calculations.isCronBottleneck ? "bg-amber-500/10 border-amber-500" : "bg-emerald-500/10 border-emerald-500"}`}
                    >
                      <p className="font-bold text-white mb-1">
                        Current Bottleneck:{" "}
                        {calculations.isCronBottleneck
                          ? "Cron Frequency"
                          : "Concurrency Slots"}
                      </p>
                      {calculations.isCronBottleneck ? (
                        <p>
                          Your calls are finishing in {duration}m, but your cron
                          only triggers every {cronInterval}m. You have{" "}
                          {(cronInterval - duration).toFixed(1)} minutes of idle
                          time where slots are empty. Your maximum throughput is
                          limited to{" "}
                          <b>
                            {concurrency * accounts} leads every {cronInterval}{" "}
                            mins.
                          </b>
                        </p>
                      ) : (
                        <p>
                          Your calls are long ({duration}m) and your cron
                          triggers frequently ({cronInterval}m). Your bottleneck
                          is simply the number of concurrent slots available (
                          {concurrency * accounts}).
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="bg-slate-800/50 p-4 rounded-xl">
                        <span className="block text-[10px] uppercase font-black text-slate-500 mb-1">
                          Theoretical Limit
                        </span>
                        <span className="text-xl font-bold text-white">
                          {((concurrency / duration) * accounts * 60).toFixed(
                            0,
                          )}{" "}
                          <span className="text-xs text-slate-500">
                            leads/hr
                          </span>
                        </span>
                        <p className="text-[11px] mt-2 italic text-slate-400">
                          If calls started immediately as slots opened.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-indigo-500/30">
                        <span className="block text-[10px] uppercase font-black text-indigo-400 mb-1">
                          Actual Limit (Cron-Aware)
                        </span>
                        <span className="text-xl font-bold text-white">
                          {calculations.hour.toFixed(0)}{" "}
                          <span className="text-xs text-slate-500">
                            leads/hr
                          </span>
                        </span>
                        <p className="text-[11px] mt-2 italic text-slate-400">
                          Realistic output based on {cronInterval}m batching.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <ShieldCheck className="text-blue-500 shrink-0" size={24} />
                  <div className="text-xs text-blue-900 leading-relaxed">
                    <strong>Optimization Advice:</strong> If you want to process
                    leads faster with 1-minute calls, you MUST reduce the Cron
                    Interval or move to a &quot;Queue&quot; system. Currently,
                    your system &quot;rests&quot; for 2 minutes after the calls
                    finish before the next batch starts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
