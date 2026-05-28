"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const interests = [
  "AI Engineering Program",
  "AWS Cloud Program",
  "DevOps Training",
  "Generative AI & LLMOps",
  "Enterprise Consulting",
  "Custom Training",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setSubmitting(false);
  };

  const inputClass = "w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a627e] focus:outline-none focus:border-[rgba(0,188,212,0.5)] focus:bg-[rgba(0,188,212,0.03)] transition-all duration-200";

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] rounded-full bg-[rgba(0,188,212,0.05)] blur-[120px]" />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-[rgba(20,87,214,0.05)] blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(0,188,212,0.3)]">
            <span className="text-xs text-[#00bcd4] font-medium uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">Start Building</span>
            <br />
            <span className="gradient-text">the Future Today</span>
          </h2>
          <p className="text-[#7a92b4]">
            Book a free consultation to discuss programs, enterprise partnerships, or custom training.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "exyratech@gmail.com", color: "#1457d6" },
              { icon: Phone, label: "Phone", value: "+91 94445 28270", color: "#00bcd4" },
              { icon: MapPin, label: "Location", value: "Near Junction, Pollachi Main Rd, Malumichampatti, Tamil Nadu 641050, India", color: "#00e676" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex gap-4 p-5 glass-light rounded-xl border border-[rgba(255,255,255,0.06)]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-[#4a627e] mb-0.5">{label}</div>
                  <div className="text-sm text-white">{value}</div>
                </div>
              </div>
            ))}

            {/* Quick links */}
            <div className="glass rounded-xl p-5 border border-[rgba(255,255,255,0.06)]">
              <div className="text-xs text-[#4a627e] uppercase tracking-wider mb-4">Explore Programs</div>
              <div className="space-y-2">
                {["AI Engineering", "AWS Cloud", "DevOps", "GenAI & LLMOps"].map((prog) => (
                  <a key={prog} href="#programs" className="flex items-center justify-between text-sm text-[#7a92b4] hover:text-white py-1.5 border-b border-[rgba(255,255,255,0.04)] last:border-0 transition-colors group">
                    {prog}
                    <span className="text-[#4a627e] group-hover:text-[#00bcd4] transition-colors">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-2 px-4 py-3 glass rounded-xl border border-[rgba(0,230,118,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
              <span className="text-xs text-[#7a92b4]">Typical response time: <span className="text-[#00e676] font-medium">under 4 hours</span></span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center glass rounded-2xl p-12 border border-[rgba(0,230,118,0.2)] text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.3)] flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-[#00e676]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-[#7a92b4]">Our team will reach out within 4 hours. Check your inbox.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-[rgba(255,255,255,0.07)] space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#4a627e] mb-2">Full Name</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#4a627e] mb-2">Work Email</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#4a627e] mb-2">Company (optional)</label>
                  <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs text-[#4a627e] mb-2">Interested In</label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((int) => (
                      <button
                        key={int}
                        type="button"
                        onClick={() => setForm({ ...form, interest: int })}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                          form.interest === int
                            ? "border-[#00bcd4] text-[#00bcd4] bg-[rgba(0,188,212,0.1)]"
                            : "border-[rgba(255,255,255,0.08)] text-[#7a92b4] hover:border-[rgba(0,188,212,0.3)]"
                        }`}
                      >
                        {int}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#4a627e] mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your goals, current role, and what you're looking to achieve..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <GlowButton disabled={submitting} className="w-full justify-center">
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} /> Send Message
                    </span>
                  )}
                </GlowButton>

                <p className="text-xs text-[#4a627e] text-center">
                  No spam. By submitting you agree to our privacy policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
