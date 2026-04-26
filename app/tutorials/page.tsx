"use client";

import React, { useState } from "react";
import { SharedHeader, SharedFooter } from "@/components/layout-components";
import { motion, AnimatePresence } from "motion/react";
import { Tv, Smartphone, MonitorPlay, Zap, Download, Settings, PlayCircle } from "lucide-react";

export default function TutorialsPage() {
  const devices = [
    {
      id: "smart-tv",
      icon: <Tv className="w-8 h-8" />,
      title: "Smart TV",
      desc: "Samsung Tizen, LG WebOS, Android TV",
      app: "IPTV Smarters Pro or TiviMate",
    },
    {
      id: "firestick",
      icon: <Zap className="w-8 h-8" />,
      title: "Amazon Firestick",
      desc: "All generations of Fire TV Stick & Cube",
      app: "Downloader App -> Smarters",
    },
    {
      id: "apple",
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Apple Ecosystem",
      desc: "Apple TV, iPhone, iPad",
      app: "Smarters Player Lite or GSE IPTV",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Android Mobile",
      desc: "Phones and Tablets running Android",
      app: "TiviMate or IPTV Smarters Pro",
    }
  ];

  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#4facfe]/30 selection:text-[#00f2fe] bg-zinc-950 text-white">
      <SharedHeader />
      
      <main className="flex-1 pt-32 pb-20 relative">
         <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                 Setup <span className="gradient-text">Tutorials.</span>
              </motion.h1>
              <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-lg text-gray-400">
                 Follow our simple step-by-step guides to get zenplus TV running on your favorite device in minutes.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
               {/* Sidebar */}
               <div className="lg:col-span-4 space-y-3">
                  {devices.map((device) => (
                     <button 
                        key={device.id}
                        onClick={() => setSelectedDevice(device)}
                        className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                           selectedDevice.id === device.id 
                           ? "bg-zinc-900 border-[#00f2fe]/50 glow-shadow" 
                           : "glass border-white/5 hover:bg-white/[0.02]"
                        }`}
                     >
                        <div className={`p-3 rounded-xl ${selectedDevice.id === device.id ? "bg-[#00f2fe]/10 text-[#00f2fe]" : "bg-white/5 text-gray-400"}`}>
                           {device.icon}
                        </div>
                        <div>
                           <h3 className={`font-bold ${selectedDevice.id === device.id ? "text-white" : "text-gray-300"}`}>{device.title}</h3>
                           <p className="text-xs text-gray-500 mt-1">{device.desc}</p>
                        </div>
                     </button>
                  ))}
               </div>

               {/* Content */}
               <div className="lg:col-span-8">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={selectedDevice.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="glass border-white/10 rounded-3xl p-8 lg:p-12"
                     >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-400 mb-6 font-medium">
                           Recommended App: <span className="text-[#00f2fe]">{selectedDevice.app}</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-8">How to install on {selectedDevice.title}</h2>

                        <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-white/10">
                           {/* Step 1 */}
                           <div className="relative flex gap-6">
                              <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-white/20 flex items-center justify-center shrink-0 mt-1 z-10 text-gray-400">
                                 <Download className="w-4 h-4" />
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold mb-2">1. Download the App</h3>
                                 <p className="text-gray-400 leading-relaxed">Search for the recommended app in your device's official app store (Google Play, Amazon Appstore, Apple App Store, LG Content Store). Download and install it.</p>
                              </div>
                           </div>

                           {/* Step 2 */}
                           <div className="relative flex gap-6">
                              <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-white/20 flex items-center justify-center shrink-0 mt-1 z-10 text-gray-400">
                                 <Settings className="w-4 h-4" />
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold mb-2">2. Enter API Credentials</h3>
                                 <p className="text-gray-400 leading-relaxed mb-4">Open the app and choose "Login with Xtream Codes API". Enter the credentials you received in your welcome email.</p>
                                 <div className="bg-zinc-950 rounded-xl p-5 border border-white/5 font-mono text-sm space-y-2">
                                    <div className="flex gap-4">
                                       <span className="text-gray-500 w-24">Portal URL:</span>
                                       <span className="text-[#00f2fe]">http://premium-server.tv:8080</span>
                                    </div>
                                    <div className="flex gap-4">
                                       <span className="text-gray-500 w-24">Username:</span>
                                       <span className="text-gray-300">your_username</span>
                                    </div>
                                    <div className="flex gap-4">
                                       <span className="text-gray-500 w-24">Password:</span>
                                       <span className="text-gray-300">your_password</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Step 3 */}
                           <div className="relative flex gap-6">
                              <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-[#00f2fe] flex items-center justify-center shrink-0 mt-1 z-10 text-[#00f2fe] glow-shadow">
                                 <PlayCircle className="w-4 h-4" />
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold mb-2">3. Start Streaming</h3>
                                 <p className="text-gray-400 leading-relaxed">Click "Add User" or "Login". The app will download the channels and VOD library. You're ready to go!</p>
                              </div>
                           </div>
                        </div>

                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </main>

      <SharedFooter />
    </div>
  );
}
