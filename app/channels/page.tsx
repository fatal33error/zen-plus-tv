"use client";

import React from "react";
import { SharedHeader, SharedFooter } from "@/components/layout-components";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import Link from 'next/link';

export default function ChannelsPage() {
  const categories = [
    { name: "Live Sports", count: "1,200+" },
    { name: "Global News", count: "800+" },
    { name: "Movies & Blockbusters", count: "5,000+" },
    { name: "TV Shows & Series", count: "8,500+" },
    { name: "Kids & Cartoons", count: "600+" },
    { name: "Documentaries", count: "900+" },
    { name: "Music & Radio", count: "1,100+" },
    { name: "International", count: "2,000+" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#4facfe]/30 selection:text-[#00f2fe] bg-zinc-950 text-white">
      <SharedHeader />
      
      <main className="flex-1 pt-32 pb-20 relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
               20,000+ Premium <span className="gradient-text">Channels.</span>
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
               From local news to international sports events, our massive channel list ensures you never miss a moment.
            </motion.p>
            
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="relative max-w-xl mx-auto">
               <input 
                  type="text" 
                  placeholder="Search for a channel, sport, or genre..." 
                  className="w-full bg-zinc-900 border border-white/10 rounded-full pl-14 pr-6 py-4 text-white focus:outline-none focus:border-[#00f2fe] transition-colors shadow-2xl"
               />
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
             {categories.map((cat, i) => (
                <motion.div 
                   key={i}
                   initial={{opacity:0, scale:0.95}}
                   animate={{opacity:1, scale:1}}
                   transition={{delay: 0.1 * i}}
                   className="glass p-6 rounded-2xl border-white/5 hover:bg-white/[0.05] transition-colors cursor-pointer group"
                >
                   <h3 className="font-bold text-white mb-1 group-hover:text-[#00f2fe] transition-colors">{cat.name}</h3>
                   <span className="text-xs font-medium text-gray-500">{cat.count} Channels</span>
                </motion.div>
             ))}
          </div>

          <div className="mt-20 text-center">
             <div className="glass inline-flex flex-col items-center p-12 rounded-3xl border-white/10 max-w-2xl mx-auto w-full">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 glow-shadow">
                   <span className="text-2xl">📺</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to browse the full list?</h3>
                <p className="text-gray-400 mb-8 max-w-md">Our channel list updates daily. Discover the incredible variety by claiming your 24-hour test access today.</p>
                <Link href="/free-trial" className="px-8 py-4 rounded-full font-bold text-zinc-950 gradient-bg hover:scale-105 transition-transform glow-shadow">
                  Request Free Trial
                </Link>
             </div>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  );
}
