"use client";

import React from "react";
import { SharedHeader, SharedFooter } from "@/components/layout-components";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "The Tester",
      duration: "1-Month",
      price: "$14.99",
      features: ["20K+ Live Channels", "100K+ VODs", "SD/HD/4K Quality", "1 Connection", "24/7 Support"],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "The Ultimate",
      duration: "12-Month",
      price: "$89.99",
      badge: "Most Popular / Save 40%",
      features: ["All 1-Month features", "Premium Server Priority", "Free Setup Guide", "Anti-Freeze Tech", "Multi-Device Support"],
      buttonText: "Get the Ultimate Pass",
      highlight: true,
    },
    {
      name: "The Fan",
      duration: "3-Month",
      price: "$34.99",
      features: ["All 1-Month features", "10% Savings", "Free EPG Guide", "1 Connection", "24/7 Support"],
      buttonText: "Get Started",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#4facfe]/30 selection:text-[#00f2fe] bg-zinc-950 text-white">
      <SharedHeader />
      
      <main className="flex-1 pt-32 pb-20 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f2fe]/5 rounded-full blur-[200px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
               Simple, Transparent <span className="gradient-text">Pricing.</span>
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-xl text-gray-400">
               No contracts, no hidden fees. Choose the pass that fits your entertainment lifestyle and cancel anytime.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mb-24">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 border ${
                  plan.highlight
                    ? "bg-zinc-900 border-[#00f2fe]/50 glow-shadow transform lg:-translate-y-4 shadow-2xl z-10"
                    : "glass border-white/5 bg-zinc-950/50"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                     <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                        🔥 {plan.badge}
                     </div>
                  </div>
                )}
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name} <span className="text-gray-400 font-medium ml-2">({plan.duration})</span></h3>
                  <div className="text-4xl font-black text-white">{plan.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                      <CheckCircle2 className={`w-5 h-5 ${plan.highlight ? 'text-[#00f2fe]' : 'text-gray-500'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 px-6 rounded-full font-bold transition-all ${
                    plan.highlight
                      ? "gradient-bg text-zinc-950 hover:scale-105 glow-shadow"
                      : "glass border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  );
}
