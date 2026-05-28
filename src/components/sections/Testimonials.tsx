"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "ML Infrastructure Engineer",
    company: "Meta",
    avatar: "SC",
    color: "#1457d6",
    rating: 5,
    text: "Exyra's AI Engineering program changed my career trajectory completely. I went from backend dev to ML infra engineer at Meta within 6 months. The RAG systems and LLMOps modules are genuinely production-level — nothing like anything I found online.",
  },
  {
    name: "Arjun Patel",
    role: "Senior DevOps Engineer",
    company: "Stripe",
    avatar: "AP",
    color: "#00bcd4",
    rating: 5,
    text: "The Kubernetes and platform engineering depth here is unmatched. I got CKA certified and landed at Stripe within 3 months of completing the DevOps track. The hands-on EKS cluster access made all the difference — theory backed by real infrastructure.",
  },
  {
    name: "Priya Nair",
    role: "Cloud Solutions Architect",
    company: "AWS",
    avatar: "PN",
    color: "#00e676",
    rating: 5,
    text: "I joined as a junior developer and left as an AWS Solutions Architect. The multi-account landing zone and Bedrock AI modules were exactly what enterprise cloud work demands. Now I help customers build what I learned here.",
  },
  {
    name: "James Wilson",
    role: "AI Platform Lead",
    company: "Goldman Sachs",
    avatar: "JW",
    color: "#8b5cf6",
    rating: 5,
    text: "The enterprise consulting Exyra provided for our AI transformation was exceptional. They helped us migrate to a multi-agent AI platform, reducing our manual review time by 70%. Professional, deep, and results-driven.",
  },
  {
    name: "Yuki Tanaka",
    role: "LLM Engineer",
    company: "Anthropic",
    avatar: "YT",
    color: "#1457d6",
    rating: 5,
    text: "Exyra's MCP Server and Claude API modules are among the best technical content available. The instructors clearly work at the frontier. I reference their RAG architecture patterns daily in my work here.",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Platform Engineering",
    company: "Databricks",
    avatar: "MJ",
    color: "#00bcd4",
    rating: 5,
    text: "We upskilled 80 engineers through Exyra's custom enterprise program. The ROI was immediate — our deployment frequency doubled, incident response improved by 60%, and the team now owns their infrastructure end-to-end.",
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
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#00e676] text-[#00e676]" />
                ))}
              </div>
              <p className="text-lg text-[#c8d8f0] leading-relaxed mb-8 font-light">
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
