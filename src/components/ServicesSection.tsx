"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Paintbrush,
  RefreshCw,
  FileText,
  Globe,
  ShoppingBag,
  CreditCard,
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Website Design",
    description:
      "Stunning, user-centric designs that capture your brand identity and keep visitors engaged from the first click.",
    color: "from-pink-500 to-rose-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, high-converting digital experience that outperforms competitors.",
    color: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]",
  },
  {
    icon: FileText,
    title: "Landing Page Creation",
    description:
      "Conversion-optimized landing pages designed to turn traffic into leads and leads into loyal customers.",
    color: "from-purple-500 to-indigo-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
  },
  {
    icon: Globe,
    title: "WordPress Installation",
    description:
      "Professional WordPress setup with premium themes, essential plugins, and performance optimization built in.",
    color: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Website Setup",
    description:
      "Full-featured online stores with seamless checkout, inventory management, and mobile-first shopping experiences.",
    color: "from-amber-400 to-orange-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description:
      "Secure, reliable payment processing integration supporting multiple providers for frictionless transactions.",
    color: "from-green-400 to-emerald-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer ${service.glow}`}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">
          {service.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon-cyan/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-neon-purple font-medium mb-6">
            What We Build
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Website Design &{" "}
            <span className="text-gradient">Development</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            From concept to launch, we deliver digital experiences that drive
            real business results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
