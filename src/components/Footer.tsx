"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
            <div className="flex gap-3">
              {["X", "Li", "Ig", "Fb"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/50 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors text-xs font-bold"
                >
                  {social}
                </motion.a>
              ))}
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
