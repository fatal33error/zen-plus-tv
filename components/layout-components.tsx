"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function SharedHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const languages = ["EN", "FR", "EL", "NO", "SV", "DA"];
  const [activeLang, setActiveLang] = useState("EN");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    setScrolled(window.scrollY > 50);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-gray-200">
            zen
          </span>
          <span className="text-3xl font-black gradient-text glow-text leading-none mt-[-2px]">+</span>
          <span className="text-2xl font-light tracking-tight ml-1 text-gray-300 group-hover:text-white transition-colors">
            TV
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/tutorials" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Tutorials</Link>
          <Link href="/channels" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Channels</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <Globe className="w-4 h-4" />
              <span>{activeLang}</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-24 p-2 rounded-xl glass border border-white/10 shadow-2xl flex flex-col gap-1"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setActiveLang(lang); setLangOpen(false); }}
                      className={`text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                        activeLang === lang ? "bg-white/10 text-white font-medium" : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/contact" className="hidden lg:block px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-colors">
            Client Portal
          </Link>
          <Link href="/pricing" className="px-5 py-2 rounded-full text-sm font-bold text-zinc-950 gradient-bg hover:opacity-90 hover:scale-105 transition-all glow-shadow">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SharedFooter() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative z-10 w-full mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <Link href="/" className="flex items-center gap-1 group mb-4">
               <span className="text-2xl font-bold tracking-tight text-white transition-colors">zen</span>
               <span className="text-3xl font-black gradient-text glow-text leading-none mt-[-2px]">+</span>
               <span className="text-2xl font-light tracking-tight ml-1 text-gray-300 transition-colors">TV</span>
             </Link>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium IPTV provider offering the best selection of international channels, movies, and sports events in crystal-clear 4K.
             </p>
             <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#4facfe] flex-1 min-w-0" />
                <button className="gradient-bg text-zinc-950 px-4 py-2 rounded-lg font-bold text-sm shrink-0">Subscribe</button>
             </div>
          </div>
          <div className="lg:ml-auto">
             <h4 className="text-white font-bold mb-4">Quick Links</h4>
             <ul className="space-y-3">
                <li><Link href="/" className="text-sm text-gray-400 hover:text-[#00f2fe] transition-colors">Home</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-[#00f2fe] transition-colors">Pricing</Link></li>
                <li><Link href="/tutorials" className="text-sm text-gray-400 hover:text-[#00f2fe] transition-colors">Installation Tutorials</Link></li>
                <li><Link href="/channels" className="text-sm text-gray-400 hover:text-[#00f2fe] transition-colors">VOD Updates</Link></li>
             </ul>
          </div>
          <div className="lg:ml-auto">
             <h4 className="text-white font-bold mb-4">Legal</h4>
             <ul className="space-y-3">
                {['Terms of Service', 'Privacy Policy', 'Refund Policy', 'DMCA Disclaimer'].map((link, i) => (
                   <li key={i}><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</Link></li>
                ))}
             </ul>
          </div>
           <div className="lg:ml-auto">
             <h4 className="text-white font-bold mb-4">Support</h4>
             <p className="text-sm text-gray-400 mb-2">24/7 Live Chat available in the Client Portal.</p>
             <a href="mailto:support@zentv.io" className="text-sm text-[#00f2fe] hover:underline">support@zentv.io</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-sm text-gray-500">Copyright &copy; 2026 zenplus TV. All rights reserved.</p>
           <div className="flex items-center gap-4 text-gray-500">
             <div className="flex gap-3">
                <span className="font-bold text-xs uppercase cursor-default hover:text-white transition-colors">Visa</span>
                <span className="font-bold text-xs uppercase cursor-default hover:text-white transition-colors">Mastercard</span>
                <span className="font-bold text-xs uppercase cursor-default hover:text-white transition-colors">PayPal</span>
                <span className="font-bold text-xs uppercase cursor-default hover:text-white transition-colors">Crypto</span>
             </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
