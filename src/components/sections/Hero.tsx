"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, Suspense, lazy } from "react";
import { ArrowRight, ChevronDown, Zap, Shield, Cpu, Globe } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const ParticleField = lazy(() =>
  import("@/components/3d/ParticleField").then((m) => ({ default: m.ParticleField }))
);
const AIOrb = lazy(() =>
  import("@/components/3d/AIOrb").then((m) => ({ default: m.AIOrb }))
);

const floatingTech = [
  { label: "Claude AI",   x: "4%",  y: "10%", delay: 0.2, color: "#00bcd4" },
  { label: "Kubernetes",  x: "58%", y: "6%",  delay: 0.4, color: "#8b5cf6" },
  { label: "LangChain",   x: "70%", y: "68%", delay: 0.6, color: "#00bcd4" },
  { label: "Terraform",   x: "2%",  y: "72%", delay: 0.8, color: "#1457d6" },
  { label: "LLMOps",      x: "38%", y: "86%", delay: 1.0, color: "#00e676" },
];

const badges = [
  { icon: Zap,    label: "Claude AI"   },
  { icon: Cpu,    label: "Kubernetes"  },
  { icon: Globe,  label: "LangChain"   },
  { icon: Shield, label: "Terraform"   },
];

const clusterRows = [
  { label: "Placement Rate", val: "98%",       color: "#00e676", dot: "#00e676" },
  { label: "Avg. Package",   val: "₹12 LPA+",  color: "#00bcd4", dot: "#00bcd4" },
  { label: "Courses",        val: "9 tracks",  color: "#8b5cf6", dot: "#8b5cf6" },
  { label: "Mode",           val: "Online",    color: "#1457d6", dot: "#00e676" },
];

const placedAt = ["TCS", "Infosys", "Wipro", "Cognizant", "Zoho"];

function HeroStats() {
  const stats = [
    { value: "50+",  label: "Engineers Trained", color: "#00bcd4" },
    { value: "98%",  label: "Placement Rate",    color: "#1457d6" },
    { value: "50+",  label: "AI Projects",       color: "#1457d6" },
    { value: "25+",  label: "DevOps Projects",   color: "#8b5cf6" },
  ];
  return (
    <div className="flex flex-wrap gap-6 mt-10">
      {stats.map((s, i) => (
        <motion.div key={s.label}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.1 }}
          className="flex items-center gap-3">
          <div className="h-10 w-px opacity-50"
            style={{ background: `linear-gradient(180deg, transparent, ${s.color}, transparent)` }} />
          <div>
            <div className="text-2xl font-black font-display leading-none" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[10.5px] text-[#4a627e] font-sans mt-1 uppercase tracking-widest">{s.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const gradAnim: React.CSSProperties = {
  background: "linear-gradient(100deg, #00e5ff 0%, #1457d6 42%, #a855f7 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundSize: "200% 100%",
  animation: "gradShift 6s ease-in-out infinite",
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yLeft   = useTransform(scrollY, [0, 500], [0, 100]);
  const opLeft  = useTransform(scrollY, [0, 280], [1, 0]);
  const yRight  = useTransform(scrollY, [0, 500], [0, 55]);
  const opRight = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
      style={{ background: "#060e1e" }}>
      <style>{`
        @keyframes gradShift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>

      {/* Particle field */}
      <Suspense fallback={null}>
        <ParticleField className="absolute inset-0 pointer-events-none" />
      </Suspense>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-100" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, #060e1e 0%, transparent 100%)",
        }} />
      </div>

      {/* Ambient orbs */}
      {[
        { color: "#00bcd4", size: 480, x: "55%", y: "-5%",  delay: 0   },
        { color: "#8b5cf6", size: 320, x: "5%",  y: "35%",  delay: 2   },
        { color: "#1457d6", size: 280, x: "70%", y: "45%",  delay: 1.5 },
      ].map((o) => (
        <motion.div key={o.x}
          className="absolute rounded-full pointer-events-none"
          animate={{ y: [0, -22, 0], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: o.delay, ease: "easeInOut" }}
          style={{
            width: o.size, height: o.size, left: o.x, top: o.y,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            filter: "blur(50px)",
          }}
        />
      ))}

      {/* Top glow arc */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(0,209,255,0.09) 0%, transparent 60%)",
      }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[calc(100vh-72px)]">

          {/* ════════ LEFT ════════ */}
          <motion.div style={{ y: yLeft, opacity: opLeft }} className="flex flex-col justify-center">

            {/* Urgency badge — actionable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-7 w-fit font-sans"
              style={{ background: "rgba(0,230,118,0.06)", border: "1px solid rgba(0,230,118,0.22)" }}>
              <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
              <span className="text-xs text-[#00e676] font-semibold tracking-wider uppercase">
                {(() => {
                  const d = new Date();
                  d.setMonth(d.getMonth() + 1);
                  return `Enrolling Now · Next Batch: ${d.toLocaleString("default", { month: "long", year: "numeric" })}`;
                })()}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display font-black leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.2vw, 5rem)" }}>
              <span className="text-[#eaf0fa]">Build the Future</span>
              <br />
              <span style={gradAnim}>with AI, Cloud</span>
              <br />
              <span style={gradAnim}>&amp; DevOps</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[1.12rem] text-[#7a92b4] font-sans leading-[1.75] max-w-lg mb-8">
              Production-grade AWS, Kubernetes, AI Automation &amp; LLM Engineering.
              Real projects. Real infrastructure.{" "}
              <span className="text-[#a8c0e0] font-medium">Zero fluff — just systems that scale.</span>
            </motion.p>

            {/* ── CTA — clear hierarchy ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 items-center mb-6">

              {/* PRIMARY — dominant */}
              <GlowButton href="#programs" size="lg" className="group shadow-[0_8px_40px_rgba(20,87,214,0.45)]">
                Explore Programs
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </GlowButton>

              {/* SECONDARY — supportive, visually lighter */}
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold font-sans rounded-xl transition-all duration-200 text-[#a8c0e0] hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,188,212,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)")}>
                Book Consultation
              </a>
            </motion.div>

            {/* Social proof — placed at */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[11px] text-[#3a526e] font-sans uppercase tracking-wider">Placed at</span>
              {placedAt.map((co) => (
                <span key={co}
                  className="text-[11px] font-sans font-semibold text-[#6a88a8] px-2.5 py-0.5 rounded-md"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {co}
                </span>
              ))}
              <span className="text-[11px] text-[#3a526e] font-sans">& others</span>
            </motion.div>

            <HeroStats />


          </motion.div>

          {/* ════════ RIGHT — Globe ════════ */}
          <motion.div
            style={{ y: yRight, opacity: opRight }}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35 }}
            className="relative hidden lg:flex items-center justify-center">

            {/* Outer pulse rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.12, 0.24, 0.12] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[500px] h-[500px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(20,87,214,0.3) 0%, rgba(0,188,212,0.08) 45%, transparent 70%)" }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ scale: [1.1, 1.18, 1.1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-[580px] h-[580px] rounded-full"
                style={{ border: "1px solid rgba(0,188,212,0.18)" }}
              />
            </div>

            <div className="relative w-full h-[560px]">
              {/* 3D Orb */}
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.5, 0.25] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-36 h-36 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(20,87,214,0.5), transparent)" }}
                  />
                </div>
              }>
                <AIOrb className="absolute inset-0 w-full h-full" />
              </Suspense>

              {/* Floating tech labels */}
              {floatingTech.map((t) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.75, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.3 + t.delay, duration: 0.45 }}
                  className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-semibold pointer-events-none select-none"
                  style={{
                    left: t.x, top: t.y,
                    background: "rgba(4,10,24,0.8)",
                    border: `1px solid ${t.color}38`,
                    color: t.color,
                    backdropFilter: "blur(12px)",
                    boxShadow: `0 0 14px ${t.color}18`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: t.color }} />
                  {t.label}
                </motion.div>
              ))}

              {/* Cluster Status card */}
              <motion.div
                initial={{ opacity: 0, x: 28, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 2.0, duration: 0.55 }}
                className="absolute bottom-6 right-0 rounded-2xl p-4 font-sans"
                style={{
                  background: "rgba(3,8,22,0.9)",
                  border: "1px solid rgba(0,209,255,0.15)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                  minWidth: "200px",
                }}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse" />
                  <span className="text-[10px] text-[#4a627e] font-bold tracking-[0.14em] uppercase">Programme Info</span>
                  <span className="ml-auto text-[10px] text-[#00e676] font-semibold">Open</span>
                </div>
                {clusterRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-5 mb-1.5 last:mb-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: row.dot }} />
                      <span className="text-[11px] text-[#5a7a9a]">{row.label}</span>
                    </div>
                    <span className="text-[11px] font-bold tabular-nums" style={{ color: row.color }}>{row.val}</span>
                  </div>
                ))}
              </motion.div>

              {/* LLM Inference mini card */}
              <motion.div
                initial={{ opacity: 0, x: -22, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 2.2, duration: 0.55 }}
                className="absolute top-6 left-0 rounded-xl px-4 py-3 font-sans"
                style={{
                  background: "rgba(3,8,22,0.9)",
                  border: "1px solid rgba(139,92,246,0.22)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-[10px] text-[#4a627e] font-bold tracking-widest uppercase mb-1">Latest Placement</div>
                <div className="text-[15px] font-black" style={{ color: "#00e676" }}>₹12 LPA</div>
                <div className="text-[10px] text-[#00bcd4] mt-0.5 font-semibold">AI Engineer · Zoho Corp</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[9px] font-sans text-[#2e4460] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ChevronDown size={16} className="text-[#00bcd4] opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
