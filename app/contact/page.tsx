"use client";

import React, { useState } from "react";
import { SharedHeader, SharedFooter } from "@/components/layout-components";
import { motion } from "motion/react";
import { MessageSquare, Mail, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#4facfe]/30 selection:text-[#00f2fe] bg-zinc-950 text-white">
      <SharedHeader />
      
      <main className="flex-1 pt-32 pb-20 relative">
         <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                 Get in <span className="gradient-text">Touch.</span>
              </motion.h1>
              <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-lg text-gray-400 max-w-2xl mx-auto">
                 Need help setting up? Have a billing question? Our expert team is available 24/7.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
               <div className="lg:col-span-1 space-y-6">
                  {/* Contact Methods */}
                  <div className="glass p-6 rounded-2xl border-white/5">
                     <div className="w-10 h-10 rounded-full bg-[#00f2fe]/10 text-[#00f2fe] flex items-center justify-center mb-4">
                        <MessageSquare className="w-5 h-5" />
                     </div>
                     <h3 className="font-bold text-white mb-2">Live Chat</h3>
                     <p className="text-sm text-gray-400 mb-4">The fastest way to get support. Available directly in the Client Portal.</p>
                     <a href="#" className="text-[#00f2fe] text-sm font-medium hover:underline">Open Live Chat</a>
                  </div>

                  <div className="glass p-6 rounded-2xl border-white/5">
                     <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                        <Mail className="w-5 h-5" />
                     </div>
                     <h3 className="font-bold text-white mb-2">Email Support</h3>
                     <p className="text-sm text-gray-400 mb-4">Prefer email? Drop us a line and we'll reply within 24 hours.</p>
                     <a href="mailto:support@zentv.io" className="text-purple-400 text-sm font-medium hover:underline">support@zentv.io</a>
                  </div>
               </div>

               <div className="lg:col-span-2">
                  <div className="glass p-8 rounded-3xl border-white/10 bg-zinc-900/50">
                     {submitted ? (
                        <div className="text-center py-16">
                           <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                              <CheckCircle2 className="w-8 h-8 text-green-400" />
                           </div>
                           <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                           <p className="text-gray-400 mb-6">We've received your inquiry and a support agent will get back to you shortly.</p>
                           <button onClick={() => setSubmitted(false)} className="px-6 py-2 rounded-full glass text-sm font-medium hover:bg-white/10 transition-colors">Send another message</button>
                        </div>
                     ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                           <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                 <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                 <input required type="text" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4facfe] transition-colors" placeholder="John Doe" />
                              </div>
                              <div>
                                 <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                 <input required type="email" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4facfe] transition-colors" placeholder="john@example.com" />
                              </div>
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                              <input required type="text" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4facfe] transition-colors" placeholder="How can we help?" />
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                              <textarea required rows={5} className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4facfe] transition-colors resize-none" placeholder="Type your message here..."></textarea>
                           </div>
                           <button type="submit" className="px-8 py-4 rounded-xl font-bold text-zinc-950 gradient-bg hover:opacity-90 hover:scale-[1.02] transition-all glow-shadow">
                              Send Message
                           </button>
                        </form>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </main>

      <SharedFooter />
    </div>
  );
}
