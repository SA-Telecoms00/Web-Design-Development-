"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wrench,
  Zap,
  Layers,
  Expand,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Custom-Built Solutions",
    description:
      "No templates, no shortcuts. Every line of code is crafted specifically for your business needs and goals.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Zap,
    title: "Performance-Focused Development",
    description:
      "Lightning-fast load times, optimized assets, and clean architecture that search engines and users love.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Layers,
    title: "Modern UI/UX",
    description:
      "Interfaces that feel intuitive, look stunning, and guide users naturally toward conversion.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Expand,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business — from startup MVP to enterprise-grade platform.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Business-Driven Design",
    description:
      "Every design decision is backed by strategy, data, and a relentless focus on your ROI.",
    color: "from-green-400 to-emerald-500",
  },
];

export default function WhyUsSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="why-us" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-neon-cyan font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why{" "}
            <span className="text-gradient">SA Telecoms</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            We don&apos;t just build websites — we engineer digital experiences
            that move the needle for your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <ReasonCard key={reason.title} reason={reason} index={i} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  index,
  Icon,
}: {
  reason: (typeof reasons)[0];
  index: number;
  Icon: (typeof reasons)[0]["icon"];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-500"
    >
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={22} className="text-white" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
            className="w-6 h-6 rounded-full bg-neon-cyan/20 flex items-center justify-center"
          >
            <span className="text-neon-cyan text-sm">✓</span>
          </motion.div>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
          {reason.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">
          {reason.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
