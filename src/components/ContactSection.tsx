"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate form submission — replace with your actual endpoint
    setTimeout(() => {
      setFormState("sent");
      setFormData({ name: "", email: "", service: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Replace with your actual WhatsApp number (international format, no +)
  const whatsappNumber = "27XXXXXXXXX";
  const whatsappMessage = encodeURIComponent(
    "Hi SA Telecoms! I'm interested in your website design & development services."
  );

  // Replace with your actual Calendly link
  const calendlyLink = "https://calendly.com/sa-telecoms/consultation";

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[128px] pointer-events-none" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-neon-cyan font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s Start Your{" "}
            <span className="text-gradient">Project</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Choose how you&apos;d like to connect. We&apos;re ready to bring
            your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left column — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-white/60 mb-2 font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-white/60 mb-2 font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm text-white/60 mb-2 font-medium"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-surface">
                      Select a service...
                    </option>
                    <option value="website-design" className="bg-surface">
                      Website Design
                    </option>
                    <option value="website-redesign" className="bg-surface">
                      Website Redesign
                    </option>
                    <option value="landing-page" className="bg-surface">
                      Landing Page Creation
                    </option>
                    <option value="wordpress" className="bg-surface">
                      WordPress Installation
                    </option>
                    <option value="ecommerce" className="bg-surface">
                      E-commerce Website
                    </option>
                    <option value="payment-gateway" className="bg-surface">
                      Payment Gateway Integration
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/60 mb-2 font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState !== "idle"}
                  whileHover={
                    formState === "idle"
                      ? {
                          scale: 1.02,
                          boxShadow: "0 0 30px rgba(0,240,255,0.3)",
                        }
                      : {}
                  }
                  whileTap={formState === "idle" ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-xl font-semibold text-white text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                    formState === "sent"
                      ? "bg-gradient-to-r from-green-400 to-emerald-500"
                      : "bg-gradient-to-r from-neon-cyan to-neon-blue shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {formState === "idle" && (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                  {formState === "sending" && (
                    <>
                      Sending...{" "}
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  )}
                  {formState === "sent" && (
                    <>
                      Message Sent! <CheckCircle size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right column — Quick contact options */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* WhatsApp Card */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(37,211,102,0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-2xl p-6 group cursor-pointer hover:bg-white/[0.08] transition-all duration-500 border border-white/10 hover:border-green-400/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    WhatsApp Us
                  </h4>
                  <p className="text-sm text-white/40">Instant response</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Chat with us directly on WhatsApp for quick questions, quotes,
                or project discussions. We typically respond within minutes.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-400 font-medium">
                <span>Start a conversation</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.a>

            {/* Book a Call Card */}
            <motion.a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(168,85,247,0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-2xl p-6 group cursor-pointer hover:bg-white/[0.08] transition-all duration-500 border border-white/10 hover:border-neon-purple/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-purple to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">
                    Book a Call
                  </h4>
                  <p className="text-sm text-white/40">
                    Free 30-min consultation
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Schedule a free consultation call at a time that works for you.
                We&apos;ll discuss your project goals, timeline, and budget.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-neon-purple font-medium">
                <span>Pick a time slot</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.a>

            {/* Contact Info Card */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neon-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Phone</p>
                    <a
                      href="tel:+27XXXXXXXXX"
                      className="text-sm text-white hover:text-neon-cyan transition-colors"
                    >
                      +27 XX XXX XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neon-purple/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Email</p>
                    <a
                      href="mailto:info@satelecoms.co.za"
                      className="text-sm text-white hover:text-neon-purple transition-colors"
                    >
                      info@satelecoms.co.za
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neon-pink/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-neon-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Location</p>
                    <p className="text-sm text-white">South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
