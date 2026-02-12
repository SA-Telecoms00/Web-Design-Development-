"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We dive deep into your goals, audience, and market to craft a winning digital strategy.",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.2)",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "Pixel-perfect mockups and prototypes that bring your vision to life with stunning UI/UX.",
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.2)",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Clean, performant code built with modern frameworks for speed, security, and scalability.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(0,240,255,0.2)",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Rigorous testing, optimization, and a seamless deployment to get you live with confidence.",
    color: "from-purple-500 to-indigo-500",
    glow: "rgba(168,85,247,0.2)",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Growth",
    description:
      "Ongoing support, analytics, and iteration to ensure your website keeps delivering results.",
    color: "from-green-400 to-emerald-500",
    glow: "rgba(52,211,153,0.2)",
  },
];

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative flex items-start gap-6 group"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="absolute left-7 top-20 w-[2px] h-[calc(100%+1rem)] bg-gradient-to-b from-white/10 to-transparent" />
      )}

      {/* Number + Icon */}
      <div className="relative flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${step.glow}` }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-all duration-300`}
        >
          <Icon size={24} className="text-white" />
        </motion.div>
        <span className="absolute -top-2 -right-2 text-xs font-bold text-white/30 font-mono">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
          {step.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Heading */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-neon-cyan font-medium mb-6">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              From Idea to{" "}
              <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Our proven 5-step process ensures every project is delivered on
              time, on budget, and beyond expectations.
            </p>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-white font-semibold">
                  Average delivery: 2–4 weeks
                </span>
              </div>
              <p className="text-white/40 text-sm">
                We move fast without cutting corners. Every milestone is
                transparent and collaborative.
              </p>
            </div>
          </motion.div>

          {/* Right - Steps */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <ProcessStep key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
