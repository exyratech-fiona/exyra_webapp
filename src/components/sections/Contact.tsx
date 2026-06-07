"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Linkedin, Instagram, AlertCircle } from "lucide-react";

const interests = [
  "AI Engineering Program",
  "AWS Cloud Program",
  "DevOps Training",
  "Generative AI & LLMOps",
  "Enterprise Consulting",
  "Custom Training",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "exyratech@gmail.com",
    href: "mailto:exyratech@gmail.com",
    color: "#1457d6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 94445 28270",
    href: "tel:+919444528270",
    color: "#00bcd4",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Near Junction, Pollachi Main Rd, Malumichampatti, Tamil Nadu 641050, India",
    href: "https://maps.google.com/?q=Malumichampatti,Tamil+Nadu",
    color: "#00e676",
  },
];

const socials = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919444528270?text=Hi%20Exyra%2C%20I%20want%20to%20know%20more%20about%20your%20programs.",
    color: "#25D366",
    bg: "rgba(37,211,102,0.08)",
    border: "rgba(37,211,102,0.25)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/exyratech/",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.08)",
    border: "rgba(10,102,194,0.25)",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/exyra_technologies/",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.08)",
    border: "rgba(225,48,108,0.25)",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", interest: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a627e] focus:outline-none focus:border-[rgba(0,188,212,0.5)] focus:bg-[rgba(0,188,212,0.03)] transition-all duration-200 font-sans";

  return (
    <section id="contact" ref={ref} className="relative py-12 overflow-hidden" style={{ background: "#060e1e" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,188,212,0.05)" }} />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "rgba(20,87,214,0.06)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans"
            style={{ background: "rgba(0,209,255,0.06)", border: "1px solid rgba(0,209,255,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bcd4] animate-pulse" />
            <span className="text-xs text-[#00bcd4] font-semibold tracking-wider uppercase">Get Started</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-4 text-[#e2eaf6]">
            Start Building{" "}
            <span style={{ background: "linear-gradient(90deg,#00bcd4,#1457d6,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              the Future Today
            </span>
          </h2>
          <p className="text-[#7a92b4] font-sans">
            Book a free consultation to discuss programs, enterprise partnerships, or custom training.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4">

            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <a key={label} href={href} target={label === "Address" ? "_blank" : undefined} rel="noreferrer"
                className="flex gap-4 p-5 rounded-xl border transition-all duration-200 hover:border-[rgba(0,188,212,0.2)] group block"
                style={{ background: "rgba(10,22,40,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${color}12`, border: `1px solid ${color}30` }}>
                  <Icon size={17} style={{ color }} />
                </div>
                <div>
                  <div className="text-[10px] text-[#4a627e] font-sans uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="text-sm text-[#a8c0e0] font-sans leading-snug group-hover:text-white transition-colors">{value}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919444528270?text=Hi%20Exyra%2C%20I%20want%20to%20know%20more%20about%20your%20programs."
              target="_blank" rel="noreferrer"
              className="flex items-center gap-3 w-full px-5 py-4 rounded-xl font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-100"
              style={{
                background: "linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.06))",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#25D366",
              }}>
              <MessageCircle size={18} />
              Chat on WhatsApp
              <span className="ml-auto text-xs opacity-60">+91 94445 28270</span>
            </a>

            {/* Social links */}
            <div className="flex gap-3 pt-1">
              {socials.map(({ icon: Icon, label, href, color, bg, border }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl text-xs font-sans transition-all duration-200 hover:scale-105"
                  style={{ background: bg, border: `1px solid ${border}`, color }}>
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>

            {/* Response time */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl font-sans"
              style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse shrink-0" />
              <span className="text-xs text-[#7a92b4]">
                Typical response: <span className="text-[#00e676] font-semibold">under 4 hours</span>
              </span>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3">

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center rounded-2xl p-12 text-center"
                style={{ background: "rgba(10,22,40,0.8)", border: "1px solid rgba(0,230,118,0.2)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(0,230,118,0.1)", border: "1px solid rgba(0,230,118,0.3)" }}>
                  <CheckCircle size={32} className="text-[#00e676]" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">Message Sent!</h3>
                <p className="text-[#7a92b4] font-sans mb-6">
                  Our team will reach out within 4 hours. Check your inbox for a confirmation.
                </p>
                <a href="https://wa.me/919444528270" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-sans font-semibold transition-all hover:scale-105"
                  style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)", color: "#25D366" }}>
                  <MessageCircle size={15} />
                  Chat on WhatsApp for faster reply
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{ background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#4a627e] font-sans uppercase tracking-wider mb-2">Full Name *</label>
                    <input required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#4a627e] font-sans uppercase tracking-wider mb-2">Email *</label>
                    <input required type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#4a627e] font-sans uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                    <input type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#4a627e] font-sans uppercase tracking-wider mb-2">Company</label>
                    <input value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Company name (optional)" className={inputClass} />
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-xs text-[#4a627e] font-sans uppercase tracking-wider mb-2.5">Interested In</label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((int) => (
                      <button key={int} type="button"
                        onClick={() => setForm({ ...form, interest: form.interest === int ? "" : int })}
                        className="text-xs px-3 py-1.5 rounded-lg border font-sans transition-all duration-200"
                        style={form.interest === int
                          ? { border: "1px solid #00bcd4", color: "#00bcd4", background: "rgba(0,188,212,0.1)" }
                          : { border: "1px solid rgba(255,255,255,0.08)", color: "#7a92b4", background: "transparent" }}>
                        {int}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-[#4a627e] font-sans uppercase tracking-wider mb-2">Message *</label>
                  <textarea required rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your goals, current role, and what you're looking to achieve..."
                    className={`${inputClass} resize-none`} />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-sans"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#f87171" }}>
                    <AlertCircle size={15} />
                    Failed to send. Please try WhatsApp or email us directly.
                  </div>
                )}

                {/* Submit */}
                <button type="submit" disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-sans font-bold text-sm transition-all duration-200 disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg, #00bcd4, #1457d6, #8b5cf6)",
                    color: "white",
                    boxShadow: "0 8px 32px rgba(20,87,214,0.35)",
                  }}>
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-[#4a627e] text-center font-sans">
                  We'll respond within 4 hours. Your information is never shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
