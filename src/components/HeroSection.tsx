"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroVisual from "./HeroVisual";

const rotatingPhrases = [
  "convert visitors",
  "scale businesses",
  "look incredible",
  "perform fast",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* Background glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-neon-cyan/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-pink/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-neon-cyan font-medium">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                Premium Web Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              >
                <span className="text-white">Build websites that</span>
                <br />
                <span className="relative inline-block h-[1.2em] overflow-hidden w-full">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentIndex}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute left-0 text-gradient"
                    >
                      {rotatingPhrases[currentIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              {/* Highlighted subtitle with creative double underline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-4"
              >
                <span className="relative inline-block text-2xl sm:text-3xl font-bold text-white">
                  Website Design & Development
                  {/* First underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink origin-left"
                  />
                  {/* Second underline with pulse */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-3 left-2 right-2 h-[2px] bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple origin-left"
                    style={{ animation: "underline-pulse 3s ease-in-out infinite" }}
                  />
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-lg text-white/60 max-w-lg leading-relaxed"
            >
              SA Telecoms crafts modern, high-performance websites and digital
              platforms that captivate your audience, drive conversions, and
              accelerate business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,240,255,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-semibold text-lg shadow-lg shadow-neon-cyan/20 transition-all duration-300 hover:shadow-neon-cyan/40"
              >
                Start Your Website
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-neon-purple/50"
              >
                View Our Work
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "5★", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
