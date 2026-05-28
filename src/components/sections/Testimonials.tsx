"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karthikeyan S.",
    role: "DevOps Engineer",
    company: "TCS",
    avatar: "KS",
    color: "#1457d6",
    rating: 5,
    outcome: "Placed within 45 days",
    text: "I was a final-year CSE student with zero cloud exposure. After Exyra's DevOps program I cleared CKA and landed at TCS Digital. The hands-on EKS labs and CI/CD pipelines made my interview stand out completely.",
  },
  {
    name: "Nithya R.",
    role: "AI Engineer",
    company: "Zoho",
    avatar: "NR",
    color: "#00bcd4",
    rating: 5,
    outcome: "₹8.5 LPA first offer",
    text: "The Generative AI & LLMOps track was everything. I built a RAG pipeline for my final-year project, impressed the Zoho panel, and got an AI Engineer role. Real project experience makes all the difference.",
  },
  {
    name: "Praveen M.",
    role: "Cloud Solutions Engineer",
    company: "Infosys",
    avatar: "PM",
    color: "#00e676",
    rating: 5,
    outcome: "AWS Certified in 60 days",
    text: "Cleared AWS Solutions Architect Associate 60 days into the program. The multi-account setup and Terraform modules are genuinely enterprise-grade. Got into Infosys Cloud CoE and hit the ground running from day one.",
  },
  {
    name: "Divya K.",
    role: "Platform Engineer",
    company: "Cognizant",
    avatar: "DK",
    color: "#8b5cf6",
    rating: 5,
    outcome: "From intern to full-time",
    text: "Started with Exyra's internship program, built a live monitoring stack with Prometheus & Grafana, and converted it to a full-time offer at Cognizant. The mentorship and real infrastructure access is unmatched anywhere else.",
  },
  {
    name: "Arun Babu",
    role: "AI Automation Engineer",
    company: "Wipro",
    avatar: "AB",
    color: "#1457d6",
    rating: 5,
    outcome: "Salary 3× previous role",
    text: "3 years in manual QA, then Exyra's AI Automation track changed everything. Built LLM-powered test agents, got placed at Wipro AI Lab with 3× my previous salary. Best investment I've made in my career.",
  },
  {
    name: "Swetha V.",
    role: "Full Stack + DevOps",
    company: "Freshworks",
    avatar: "SV",
    color: "#00bcd4",
    rating: 5,
    outcome: "Final year project → job",
    text: "My B.E. final-year project was a Kubernetes-native SaaS app built entirely with Exyra guidance. Freshworks hired me based on the live demo. No other training institute could have given me a production-grade project like this.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => { setAutoplay(false); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setAutoplay(false); setCurrent((c) => (c + 1) % testimonials.length); };

  return (
    <section id="testimonials" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(20,87,214,0.05)] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(0,230,118,0.3)]">
            <span className="text-xs text-[#00e676] font-medium uppercase tracking-wider">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">Engineers who</span>{" "}
            <span className="gradient-text">shipped real systems</span>
          </h2>
          <p className="text-[#7a92b4]">
            From junior devs to senior AI engineers at top companies. Real outcomes, real careers.
          </p>
        </motion.div>

        {/* Main testimonial carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 md:p-10 border border-[rgba(255,255,255,0.07)] relative"
            >
              <Quote size={40} className="absolute top-6 right-8 text-[rgba(255,255,255,0.05)]" />
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#00e676] text-[#00e676]" />
                  ))}
                </div>
                <span className="text-xs font-semibold font-sans px-3 py-1 rounded-full"
                  style={{ background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.2)", color: "#00e676" }}>
                  ✓ {testimonials[current].outcome}
                </span>
              </div>
              <p className="text-[1.05rem] text-[#c8d8f0] leading-relaxed mb-8 font-light">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}80)` }}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonials[current].name}</div>
                  <div className="text-sm text-[#7a92b4]">
                    {testimonials[current].role} · <span style={{ color: testimonials[current].color }}>{testimonials[current].company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button onClick={prev} className="p-2 glass rounded-xl text-[#7a92b4] hover:text-white transition-colors border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,188,212,0.3)]">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#00bcd4]" : "w-1.5 bg-[rgba(255,255,255,0.2)]"}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 glass rounded-xl text-[#7a92b4] hover:text-white transition-colors border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,188,212,0.3)]">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mini cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => { setAutoplay(false); setCurrent(i); }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.5 }}
              className={`p-3 rounded-xl text-left transition-all duration-300 border ${
                current === i ? "border-[rgba(0,188,212,0.4)] bg-[rgba(0,188,212,0.05)]" : "border-[rgba(255,255,255,0.05)] glass-light hover:border-[rgba(255,255,255,0.1)]"
              }`}
            >
              <div className="w-8 h-8 rounded-lg mb-2 flex items-center justify-center text-white text-xs font-bold"
                style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}>
                {t.avatar}
              </div>
              <div className="text-xs font-medium text-white truncate">{t.name}</div>
              <div className="text-xs text-[#4a627e] truncate">{t.company}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
