"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/satelecoms",
    icon: Facebook,
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/@SATelecoms2014/",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://za.linkedin.com/company/sa-telecoms",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@satelecoms7330",
    icon: Youtube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@satelecoms_sa",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/27760326170?text=",
    icon: MessageCircle,
  },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      "Website Design",
      "Website Redesign",
      "Landing Pages",
      "WordPress",
      "E-commerce",
      "Payment Integration",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Portfolio", "Process", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Documentation", "Support"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Building modern, high-performance websites and digital platforms
              that drive real business results.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/50 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-neon-cyan transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} SA Telecoms. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
