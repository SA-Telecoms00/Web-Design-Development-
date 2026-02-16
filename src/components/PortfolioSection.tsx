"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Wrench, Globe, Server, Mail, Megaphone, Shield, Cloud } from "lucide-react";

const projects = [
  {
    name: "Website Maintenance & Support",
    type: "Landing Page",
    url: "https://eager-yalow.51-254-142-172.plesk.page/",
    description:
      "Comprehensive maintenance and support solutions to keep websites running at peak performance.",
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    icon: Wrench,
  },
  {
    name: "Domain Registration & Management",
    type: "Landing Page",
    url: "https://pensive-hoover.51-254-142-172.plesk.page/",
    description:
      "Streamlined domain registration, transfers, and management services for businesses.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: Globe,
  },
  {
    name: "Web Hosting Solutions",
    type: "Landing Page",
    url: "https://flamboyant-hugle.51-254-142-172.plesk.page/",
    description:
      "Reliable, high-speed web hosting solutions built for performance and uptime.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: Server,
  },
  {
    name: "Business Email Hosting & Security",
    type: "Landing Page",
    url: "https://jovial-antonelli.51-254-142-172.plesk.page/",
    description:
      "Secure, professional email hosting with advanced threat protection for businesses.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    icon: Mail,
  },
  {
    name: "Digital Marketing & SEO",
    type: "Landing Page",
    url: "https://nostalgic-yalow.51-254-142-172.plesk.page/services/digital-marketing-seo",
    description:
      "Data-driven digital marketing and SEO strategies that boost visibility and conversions.",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    icon: Megaphone,
  },
  {
    name: "Cloud & Data Protection",
    type: "Landing Page",
    url: "https://beautiful-wiles.51-254-142-172.plesk.page/services/cloud-data-protection",
    description:
      "Enterprise-grade cloud infrastructure and data protection for peace of mind.",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    icon: Cloud,
  },
  {
    name: "Web Security & Protection",
    type: "Landing Page",
    url: "https://quirky-kalam.51-254-142-172.plesk.page/services/web-security",
    description:
      "Advanced web security solutions including SSL, firewalls, and malware protection.",
    gradient: "from-red-500 via-rose-500 to-pink-500",
    icon: Shield,
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
  const [imgError, setImgError] = useState(false);
  const Icon = project.icon;

  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=5000&click=%5B%7B%22selector%22%3A%22button%22%2C%22type%22%3A%22click%22%7D%5D`;

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer block"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Preview area */}
        <div className="relative h-64 w-full overflow-hidden">
          {/* Browser chrome bar */}
          <div className="absolute top-0 left-0 right-0 z-10 h-8 bg-[#1a1a2e]/90 backdrop-blur-sm flex items-center px-3 gap-3 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 h-4 rounded-md bg-white/5 flex items-center px-2">
              <span className="text-[9px] text-white/30 truncate">
                {project.url.replace("https://", "")}
              </span>
            </div>
          </div>

          {/* Screenshot image with gradient fallback */}
          {!imgError ? (
            <img
              src={screenshotUrl}
              alt={`${project.name} preview`}
              className="absolute inset-0 w-full h-full object-cover object-top pt-8"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : null}

          {/* Gradient fallback (always rendered behind, visible if img fails or while loading) */}
          <div className={`absolute inset-0 pt-8 bg-gradient-to-br ${project.gradient}`}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 opacity-30">
              <Icon size={48} className="text-white" />
              <div className="space-y-2 px-8 w-full">
                <div className="h-3 w-3/4 mx-auto rounded-full bg-white/20" />
                <div className="h-2 w-1/2 mx-auto rounded-full bg-white/15" />
                <div className="h-2 w-2/3 mx-auto rounded-full bg-white/10" />
                <div className="mt-4 grid grid-cols-3 gap-2 px-4">
                  <div className="h-8 rounded bg-white/10" />
                  <div className="h-8 rounded bg-white/10" />
                  <div className="h-8 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium">
              <ExternalLink size={16} />
              View Live Site
            </div>
          </div>
        </div>

        {/* Card info */}
        <div className="glass p-5">
          <div className="flex items-center justify-between mb-2 gap-3">
            <h3 className="text-base font-bold text-white group-hover:text-gradient transition-all duration-300 leading-tight">
              {project.name}
            </h3>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-neon-purple/20 text-neon-purple font-medium whitespace-nowrap flex-shrink-0">
              {project.type}
            </span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.a>
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
            Real landing pages we&apos;ve built — live, performant, and
            driving results for SA Telecoms services.
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
