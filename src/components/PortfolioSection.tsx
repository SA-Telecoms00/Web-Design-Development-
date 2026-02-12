"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "TechFlow SaaS",
    type: "Website",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Modern SaaS platform with dynamic dashboards",
  },
  {
    name: "Urban Threads",
    type: "E-commerce",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Fashion e-commerce with seamless checkout",
  },
  {
    name: "GreenLeaf Organics",
    type: "E-commerce",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "Organic food store with subscription model",
  },
  {
    name: "Nova Finance",
    type: "Landing Page",
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    description: "Fintech landing page with 12% conversion rate",
  },
  {
    name: "Artisan Coffee Co.",
    type: "Website",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    description: "Brand-forward coffee shop with online ordering",
  },
  {
    name: "CloudSync Pro",
    type: "Landing Page",
    image: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    description: "B2B product launch page with demo booking",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Preview image area */}
        <div
          className="relative h-64 w-full"
          style={{ background: project.image }}
        >
          {/* Fake browser chrome */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 rounded-md bg-white/10" />

          {/* Fake content lines */}
          <div className="absolute bottom-8 left-6 right-6 space-y-2">
            <div className="h-3 w-3/4 rounded bg-white/20" />
            <div className="h-2 w-1/2 rounded bg-white/15" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ExternalLink size={16} />
              View Project
            </motion.div>
          </div>
        </div>

        {/* Card info */}
        <div className="glass p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300">
              {project.name}
            </h3>
            <span className="text-xs px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple font-medium">
              {project.type}
            </span>
          </div>
          <p className="text-sm text-white/50">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-neon-pink font-medium mb-6">
            Our Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Websites We&apos;re{" "}
            <span className="text-gradient">Proud Of</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Every project is a story of collaboration, creativity, and
            measurable results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
