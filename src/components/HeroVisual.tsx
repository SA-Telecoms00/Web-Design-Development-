"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  CreditCard,
  ShoppingCart,
} from "lucide-react";

const cards = [
  {
    icon: Palette,
    label: "Design",
    color: "from-pink-500 to-purple-500",
    glow: "rgba(236,72,153,0.3)",
    x: 20,
    y: 40,
    delay: 0,
  },
  {
    icon: Code2,
    label: "Develop",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(0,240,255,0.3)",
    x: 200,
    y: 10,
    delay: 0.15,
  },
  {
    icon: Rocket,
    label: "Launch",
    color: "from-purple-500 to-indigo-500",
    glow: "rgba(168,85,247,0.3)",
    x: 320,
    y: 120,
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    label: "Growth",
    color: "from-green-400 to-emerald-500",
    glow: "rgba(52,211,153,0.3)",
    x: 160,
    y: 240,
    delay: 0.45,
  },
  {
    icon: CreditCard,
    label: "Payments",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.3)",
    x: 10,
    y: 200,
    delay: 0.6,
  },
  {
    icon: ShoppingCart,
    label: "E-commerce",
    color: "from-rose-400 to-red-500",
    glow: "rgba(244,63,94,0.3)",
    x: 340,
    y: 300,
    delay: 0.75,
  },
];

const arrows = [
  { x1: 90, y1: 80, x2: 220, y2: 50, delay: 0.8 },
  { x1: 270, y1: 55, x2: 340, y2: 150, delay: 1.0 },
  { x1: 360, y1: 180, x2: 230, y2: 270, delay: 1.2 },
  { x1: 170, y1: 280, x2: 70, y2: 235, delay: 1.4 },
];

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      containerRef.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]" />

      {/* SVG Arrows */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 450 400"
      >
        <defs>
          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
          </linearGradient>
          <marker
            id="arrowHead"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="url(#arrowGrad)" />
          </marker>
        </defs>
        {arrows.map((arrow, i) => (
          <motion.line
            key={i}
            x1={arrow.x1}
            y1={arrow.y1}
            x2={arrow.x2}
            y2={arrow.y2}
            stroke="url(#arrowGrad)"
            strokeWidth="2"
            markerEnd="url(#arrowHead)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              delay: arrow.delay,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>

      {/* Floating cards */}
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.5 + card.delay,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="absolute"
            style={{ left: card.x, top: card.y }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
              className="glass rounded-2xl p-4 cursor-pointer group"
              style={{
                boxShadow: `0 0 20px ${card.glow}`,
              }}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
              >
                <Icon size={20} className="text-white" />
              </div>
              <span className="text-xs font-medium text-white/80">
                {card.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Decorative orbiting dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
        style={{ transformOrigin: "center" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.6)]" />
      </motion.div>
    </div>
  );
}
