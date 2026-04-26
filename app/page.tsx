"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  Monitor,
  Activity,
  Film,
  Smartphone,
  ChevronDown,
  Globe,
  CheckCircle2,
  Tv,
  MonitorPlay,
  Zap,
  ShieldCheck,
  Lock,
} from "lucide-react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-[#4facfe]/30 selection:text-[#00f2fe] overflow-x-hidden">
      {/* 1. Global Header */}
      <Header scrolled={scrolled} />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Features Section */}
        <FeaturesSection />

        {/* 4. Interactive Setup Guide */}
        <SetupGuide />

        {/* 5. Pricing & Subscription Plans */}
        <PricingSection />

        {/* 6. Channel Categories */}
        <CategoriesMarquee />

        {/* 7. Expanded FAQ */}
        <FAQSection />
      </main>

      {/* 8. Footer Section */}
      <Footer />
    </div>
  );
}

// --- Components ---

function Header({ scrolled }: { scrolled: boolean }) {
  const [langOpen, setLangOpen] = useState(false);
  const languages = ["EN", "FR", "EL", "NO", "SV", "DA"];
  const [activeLang, setActiveLang] = useState("EN");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-gray-200">
            zen
          </span>
          <span className="text-3xl font-black gradient-text glow-text leading-none mt-[-2px]">+</span>
          <span className="text-2xl font-light tracking-tight ml-1 text-gray-300 group-hover:text-white transition-colors">
            TV
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="/pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
          <a href="/tutorials" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Tutorials</a>
          <a href="/channels" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Channels</a>
          <a href="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
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
                      onClick={() => {
                        setActiveLang(lang);
                        setLangOpen(false);
                      }}
                      className={`text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                        activeLang === lang
                          ? "bg-white/10 text-white font-medium"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/contact"
            className="hidden lg:block px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            Client Portal
          </a>
          <a
            href="/pricing"
            className="px-5 py-2 rounded-full text-sm font-bold text-zinc-950 gradient-bg hover:opacity-90 hover:scale-105 transition-all glow-shadow"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4facfe]/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#00f2fe]/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 mb-6 text-sm font-medium text-cyan-400">
              <span className="animate-pulse">✨</span> Voted #1 Premium Streaming Provider 2024
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Unlimited Entertainment. <br />
              Zero Interruptions. <br />
              <span className="gradient-text">Welcome to zenplus TV.</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Access 20,000+ live premium channels and a massive 100,000+ VOD library in
              crystal-clear 4K UHD. Stream global sports, blockbuster movies, and binge-worthy
              series on any device, anywhere in the world.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a href="/free-trial" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-zinc-950 gradient-bg hover:scale-105 transition-transform glow-shadow">
                <Play className="w-5 h-5 fill-current" />
                Start Your Free Trial
              </a>
              <a href="/pricing" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full font-medium text-white border border-white/20 glass hover:bg-white/10 transition-colors">
                View Subscription Plans
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" /> Instant Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" /> 99.9% Uptime
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gray-300" /> Secure 256-bit Checkout
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <div className="relative h-[400px] sm:h-[500px] w-full mt-10 lg:mt-0">
            <InteractiveVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      {/* Smart TV Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute z-10 w-full max-w-[480px] aspect-video rounded-xl border border-white/10 glass shadow-2xl overflow-hidden shadow-cyan-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">LIVE: Champions League Final</div>
            <div className="text-gray-400 text-xs">Premium Sports HD</div>
          </div>
        </div>
      </motion.div>

      {/* Tablet Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute z-20 bottom-0 -right-4 w-[200px] aspect-[3/4] rounded-xl border border-white/10 glass shadow-2xl bg-zinc-900/80 backdrop-blur-xl"
      >
        <div className="p-3">
          <div className="w-full aspect-video rounded-md bg-zinc-800 mb-2 relative overflow-hidden">
             <div className="absolute inset-0 flex flex-col justify-end p-2 pb-1 bg-gradient-to-t from-black/80">
                <div className="text-[10px] font-bold text-white">Stranger Things</div>
             </div>
          </div>
          <div className="w-full aspect-video rounded-md bg-zinc-800 mb-2" />
          <div className="w-full aspect-video rounded-md bg-zinc-800" />
        </div>
      </motion.div>

      {/* Mobile Mockup */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute z-30 bottom-10 left-0 lg:-left-10 w-[120px] aspect-[9/19] rounded-2xl border border-white/10 glass shadow-xl bg-zinc-900/90 backdrop-blur-xl"
      >
        <div className="p-2 pt-4">
           <div className="w-full h-8 rounded shrink-0 bg-[#00f2fe]/20 mb-2 flex items-center px-2">
              <span className="text-[8px] font-bold text-[#00f2fe] uppercase">Breaking News</span>
           </div>
           <div className="space-y-2">
             {[1,2,3,4].map(i => (
                <div key={i} className="flex gap-2 items-center">
                   <div className="w-6 h-6 rounded-full bg-zinc-800" />
                   <div className="h-2 w-12 bg-zinc-800 rounded-sm" />
                </div>
             ))}
           </div>
        </div>
      </motion.div>

      {/* Floating Cards */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 left-10 z-40 px-4 py-2 rounded-lg glass border-white/10 shadow-lg text-xs font-bold text-white flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Sports
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 -right-8 z-40 px-4 py-2 rounded-lg glass border-white/10 shadow-lg text-xs font-bold text-[#4facfe] flex items-center gap-2"
      >
        <Film className="w-3 h-3" /> 4K Movies
      </motion.div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Monitor className="w-6 h-6 text-[#00f2fe]" />,
      title: "4K & Ultra HD Quality",
      desc: "Say goodbye to pixelated screens. Experience every detail of the match or movie with our premium 4K, FHD, and HD streaming servers.",
    },
    {
      icon: <Activity className="w-6 h-6 text-[#4facfe]" />,
      title: "Advanced Anti-Freeze Technology",
      desc: "Stop letting buffering ruin the climax. Our robust backend infrastructure guarantees a 99.9% uptime for a seamless, freeze-free viewing experience.",
    },
    {
      icon: <Film className="w-6 h-6 text-[#00f2fe]" />,
      title: "Massive VOD Library",
      desc: "Your personal cinema awaits. Dive into an ever-expanding library of the latest movies and binge-worthy TV shows, updated daily with IMDb ratings.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#4facfe]" />,
      title: "Universal Compatibility",
      desc: "Watch zen+ TV wherever you go. Fully optimized for Smart TVs (Samsung, lg, Android), Apple TV, Firestick, MAG boxes, iOS, and Android.",
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Experience Television <br />
            <span className="gradient-text">Without Limits.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl glass border-white/5 transition-colors duration-300 hover:bg-white/[0.05] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/0 to-[#4facfe]/0 group-hover:from-[#00f2fe]/10 group-hover:to-[#4facfe]/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-6 border-white/10 relative">
                 {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupGuide() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Smart TV", icon: <Tv className="w-4 h-4" /> },
    { title: "Firestick", icon: <Zap className="w-4 h-4" /> },
    { title: "Apple TV", icon: <MonitorPlay className="w-4 h-4" /> },
    { title: "Smartphones", icon: <Smartphone className="w-4 h-4" /> },
    { title: "Windows/Mac", icon: <Monitor className="w-4 h-4" /> },
  ];

  return (
    <section id="setup-guide" className="py-24 bg-zinc-950/50 relative border-t border-b border-white/5">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Setup in Under 5 Minutes.<br/>
            <span className="text-gray-500">No Tech Skills Required.</span>
          </h2>
        </div>

        {/* Tabs Desktop */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === i
                  ? "bg-white text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {tab.icon} {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-zinc-900 rounded-3xl p-8 lg:p-12 border border-white/5">
           <div>
             <div className="space-y-8">
               {[
                 "Choose Your Plan & Check Inbox (Receive instant M3U/Xtream Codes).",
                 `Download recommended app for ${tabs[activeTab].title} (e.g., IPTV Smarters, TiviMate).`,
                 "Enter your credentials and start streaming instantly.",
               ].map((step, idx) => (
                 <motion.div 
                    key={`${activeTab}-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                 >
                   <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-zinc-950 font-bold text-sm mt-0.5">
                     {idx + 1}
                   </div>
                   <p className="text-gray-300 font-medium leading-relaxed">{step}</p>
                 </motion.div>
               ))}
             </div>
           </div>

           {/* Glowing Terminal Box */}
           <div className="relative mt-8 md:mt-0">
             <div className="absolute inset-0 bg-[#00f2fe]/10 blur-[40px] rounded-full" />
             <div className="relative bg-zinc-950/80 backdrop-blur border border-white/10 rounded-xl overflow-hidden font-mono text-sm">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-900">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <div className="text-xs text-gray-500 ml-2">AppSetup.exe</div>
                </div>
                <div className="p-4 xs:p-6 text-[#00f2fe] space-y-2 opacity-80 h-[200px] flex flex-col justify-center">
                  <motion.div animate={{opacity: [0,1]}} transition={{duration: 0.2}}>&gt; Initializing {tabs[activeTab].title} config...</motion.div>
                  <motion.div animate={{opacity: [0,1]}} transition={{duration: 0.2, delay: 0.5}}>&gt; Connecting to premium server...</motion.div>
                  <motion.div animate={{opacity: [0,1]}} transition={{duration: 0.2, delay: 1.2}}>&gt; Verifying credentials...</motion.div>
                  <motion.div animate={{opacity: [0,1]}} transition={{duration: 0.2, delay: 1.8}} className="text-green-400">&gt; Connection established successfully.</motion.div>
                  <motion.div animate={{opacity: [0,1,0]}} transition={{duration: 0.8, repeat: Infinity, delay: 2.2}} className="text-white">_</motion.div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
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
    <section id="pricing" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4facfe]/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Choose Your zen+ TV Pass</h2>
          <p className="text-gray-400 max-w-xl mx-auto">No contracts, no hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
    </section>
  );
}

function CategoriesMarquee() {
  const categories = [
    { title: "Premium Sports", desc: "Live Football, UFC, NBA" },
    { title: "Breaking News", desc: "Global Networks 24/7" },
    { title: "Kids & Family", desc: "Safe, Fun Entertainment" },
    { title: "Documentaries", desc: "Nature, History, Science" },
    { title: "International", desc: "Channels from 50+ Countries" },
    { title: "Pay-Per-View", desc: "Major Events Included" },
    { title: "Music", desc: "Concerts & Radios" },
    { title: "24/7 TV Shows", desc: "Binge Your Favorites" },
  ];

  return (
    <section className="py-20 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Something for Everyone</h2>
      </div>

      <div className="relative flex overflow-hidden group">
         <div className="absolute inset-y-0 left-0 w-[100px] z-10 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
         <div className="absolute inset-y-0 right-0 w-[100px] z-10 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
         
         <div className="flex w-max animate-[marquee_30s_linear_infinite] whitespace-nowrap group-hover:[animation-play-state:paused]">
           {[...categories, ...categories, ...categories].map((category, idx) => (
             <div
               key={idx}
               className="mx-3 inline-flex flex-col justify-center px-6 py-4 rounded-xl glass border-white/5 bg-zinc-900/50 min-w-[220px]"
             >
               <h4 className="text-white font-bold text-base mb-1">{category.title}</h4>
               <p className="text-gray-400 text-xs font-medium">{category.desc}</p>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "What internet speed is required?",
      a: "We recommend an internet connection of at least 15 Mbps for HD and 30 Mbps for smooth, buffer-free 4K streaming.",
    },
    {
      q: "Can I use my subscription on multiple devices?",
      a: "Yes! You can install zen+ TV on as many devices as you like. Standard plans allow for one concurrent stream, but multi-room connections are available at checkout.",
    },
    {
      q: "How quickly will my account be activated?",
      a: "Activation is 100% automated. You will receive your access details and M3U link via email within seconds of completing your payment.",
    },
    {
      q: "Do I need a VPN to use zen+ TV?",
      a: "While our service is highly secure, you are welcome to use a VPN. We are fully VPN-friendly with no IP locking.",
    },
    {
      q: "Does it include TV Guide (EPG)?",
      a: "Absolutely. All our plans come with a fully integrated and regularly updated Electronic Program Guide (EPG).",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Got Questions? We&apos;ve Got Answers.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border border-white/10 rounded-2xl overflow-hidden transition-colors ${isOpen ? 'bg-zinc-900/80 glass' : 'bg-transparent hover:bg-white/[0.02]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-[#00f2fe]' : 'text-white'}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <a href="#" className="flex items-center gap-1 group mb-4">
               <span className="text-2xl font-bold tracking-tight text-white transition-colors">
                 zen
               </span>
               <span className="text-3xl font-black gradient-text glow-text leading-none mt-[-2px]">+</span>
               <span className="text-2xl font-light tracking-tight ml-1 text-gray-300 transition-colors">
                 TV
               </span>
             </a>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium IPTV provider offering the best selection of international channels, movies, and sports events in crystal-clear 4K.
             </p>
             <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#4facfe] flex-1 min-w-0"
                />
                <button className="gradient-bg text-zinc-950 px-4 py-2 rounded-lg font-bold text-sm shrink-0">
                   Subscribe
                </button>
             </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
             <h4 className="text-white font-bold mb-4">Quick Links</h4>
             <ul className="space-y-3">
                {['Home', 'Pricing', 'Installation Tutorials', 'VOD Updates'].map((link, i) => (
                   <li key={i}>
                      <a href="#" className="text-sm text-gray-400 hover:text-[#00f2fe] transition-colors">{link}</a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Legal */}
          <div className="lg:ml-auto">
             <h4 className="text-white font-bold mb-4">Legal</h4>
             <ul className="space-y-3">
                {['Terms of Service', 'Privacy Policy', 'Refund Policy', 'DMCA Disclaimer'].map((link, i) => (
                   <li key={i}>
                      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                   </li>
                ))}
             </ul>
          </div>
          
           {/* Support */}
           <div className="lg:ml-auto">
             <h4 className="text-white font-bold mb-4">Support</h4>
             <p className="text-sm text-gray-400 mb-2">24/7 Live Chat available in the Client Portal.</p>
             <a href="mailto:support@zentv.io" className="text-sm text-[#00f2fe] hover:underline">support@zentv.io</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-sm text-gray-500">
             Copyright &copy; 2026 zen+ TV. All rights reserved.
           </p>
           <div className="flex items-center gap-4 text-gray-500">
             {/* Payment Gateway Placeholders */}
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
