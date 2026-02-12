"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass-strong rounded-2xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SA Telecoms"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-lg text-white">
              SA <span className="text-gradient">Telecoms</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-neon-cyan transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-cyan to-neon-purple group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#cta"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-neon-cyan transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 glass-strong rounded-2xl overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-neon-cyan transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white text-sm font-semibold text-center"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
