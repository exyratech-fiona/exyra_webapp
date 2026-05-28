"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense, lazy } from "react";
import { ArrowRight, ChevronDown, Zap, Shield, Cpu, Globe, Activity, Server } from "lucide-react";
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
  { label: "AWS Bedrock", x: "70%", y: "68%", delay: 0.6, color: "#00bcd4" },
  { label: "Terraform",   x: "2%",  y: "72%", delay: 0.8, color: "#1457d6" },
  { label: "LLMOps",      x: "38%", y: "86%", delay: 1.0, color: "#00e676" },
];

const badges = [
  { icon: Zap,    label: "Claude AI"   },
  { icon: Cpu,    label: "Kubernetes"  },
  { icon: Globe,  label: "AWS Bedrock" },
  { icon: Shield, label: "Terraform"   },
];

const clusterRows = [
  { label: "AI Agents",   val: "12 active",  color: "#00e676", dot: "#00e676" },
  { label: "K8s Pods",    val: "247 / 250",  color: "#00bcd4", dot: "#00bcd4" },
  { label: "GPU Usage",   val: "87%",        color: "#8b5cf6", dot: "#8b5cf6" },
  { label: "Uptime",      val: "99.99%",     color: "#1457d6", dot: "#00e676" },
];

function HeroStats() {
  const stats = [
    { value: "2,500+", label: "Engineers Trained",  color: "#00bcd4" },
    { value: "98%",    label: "Placement Rate",     color: "#1457d6" },
    { value: "150+",   label: "Enterprise Clients", color: "#1457d6" },
    { value: "45+",    label: "Live Projects",      color: "#8b5cf6" },
  ];
  return (
    <div className="flex flex-wrap gap-6 mt-10">
      {stats.map((s, i) => (
        <motion.div key={s.label}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.1 }}
          className="flex items-center gap-3">
          <div className="h-10 w-px opacity-40"
            style={{ background: `linear-gradient(180deg, transparent, ${s.color}, transparent)` }} />
          <div>
            <div className="text-2xl font-black font-display" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-[#4a627e] font-sans mt-0.5">{s.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yLeft    = useTransform(scrollY, [0, 500], [0, 120]);
  const opLeft   = useTransform(scrollY, [0, 300], [1, 0]);
  const yRight   = useTransform(scrollY, [0, 500], [0, 60]);
  const opRight  = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "#060e1e" }}>

      {/* ── Particle field ── */}
      <Suspense fallback={null}>
        <ParticleField className="absolute inset-0 pointer-events-none" />
      </Suspense>

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-100" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, #060e1e 0%, transparent 100%)",
        }} />
      </div>

      {/* ── Ambient orbs ── */}
      {[
        { color: "#00bcd4", size: 500, x: "55%", y: "-5%",  delay: 0   },
        { color: "#8b5cf6", size: 350, x: "5%",  y: "35%",  delay: 2   },
        { color: "#1457d6", size: 300, x: "70%", y: "45%",  delay: 1.5 },
      ].map((o) => (
        <motion.div key={o.x}
          className="absolute rounded-full pointer-events-none"
          animate={{ y: [0, -24, 0], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 7, repeat: Infinity, delay: o.delay, ease: "easeInOut" }}
          style={{
            width: o.size, height: o.size, left: o.x, top: o.y,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            filter: "blur(50px)",
          }}
        />
      ))}

      {/* ── Top glow arc ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(0,209,255,0.1) 0%, transparent 60%)",
      }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center min-h-[80vh]">

          {/* ════════ LEFT ════════ */}
          <motion.div style={{ y: yLeft, opacity: opLeft }} className="flex flex-col justify-center">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-8 w-fit font-sans"
              style={{ background: "rgba(0,209,255,0.06)", border: "1px solid rgba(0,209,255,0.22)" }}>
              <span className="w-2 h-2 rounded-full bg-[#00bcd4] animate-pulse" />
              <span className="text-xs text-[#00bcd4] font-semibold tracking-wider uppercase">
                Next-Gen AI Engineering Platform
              </span>
              <span className="text-xs text-[#4a627e] ml-0.5 font-sans">v2.0</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display font-black leading-[1.04] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}>
              <span className="text-[#e2eaf6]">Build the Future</span>
              <br />
              <span style={{
                background: "linear-gradient(100deg, #00bcd4 0%, #1457d6 40%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                with AI, Cloud
              </span>
              <br />
              <span className="text-[#e2eaf6]">&amp; DevOps</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[1.1rem] text-[#7a92b4] font-sans leading-relaxed max-w-lg mb-10">
              Production-grade AWS, Kubernetes, AI Automation, and LLM Engineering
              training with real-world enterprise infrastructure.{" "}
              <span className="text-[#a8c0e0]">Zero fluff — just systems that scale.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center mb-2">
              <GlowButton href="#programs" size="lg" className="group">
                Explore Programs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </GlowButton>
              <GlowButton href="#contact" variant="secondary" size="lg">
                Book Consultation
              </GlowButton>
            </motion.div>

            <HeroStats />

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex flex-wrap gap-2.5 mt-8">
              {badges.map((b, i) => (
                <motion.div key={b.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-sans text-xs font-medium"
                  style={{ background: "rgba(0,209,255,0.06)", border: "1px solid rgba(0,209,255,0.18)", color: "#00bcd4" }}>
                  <b.icon size={11} />
                  {b.label}
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* ════════ RIGHT ════════ */}
          <motion.div
            style={{ y: yRight, opacity: opRight }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center">

            {/* Outer glow ring behind orb */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.15, 0.28, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-[520px] h-[520px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(20,87,214,0.35) 0%, rgba(0,188,212,0.1) 40%, transparent 70%)" }}
              />
            </div>

            {/* Second pulse ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ scale: [1.1, 1.2, 1.1], opacity: [0.06, 0.12, 0.06] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-[600px] h-[600px] rounded-full border"
                style={{ borderColor: "rgba(0,188,212,0.2)" }}
              />
            </div>

            <div className="relative w-full h-[580px]">
              {/* ── 3D Orb ── */}
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-40 h-40 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(20,87,214,0.5), transparent)" }}
                  />
                </div>
              }>
                <AIOrb className="absolute inset-0 w-full h-full" />
              </Suspense>

              {/* ── Floating tech labels ── */}
              {floatingTech.map((t) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.3 + t.delay, duration: 0.5 }}
                  className="absolute flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold pointer-events-none select-none"
                  style={{
                    left: t.x, top: t.y,
                    background: "rgba(6,14,30,0.75)",
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                    backdropFilter: "blur(12px)",
                    boxShadow: `0 0 12px ${t.color}20`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: t.color }} />
                  {t.label}
                </motion.div>
              ))}

              {/* ── Cluster Status card ── */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 2.0, duration: 0.6 }}
                className="absolute bottom-6 right-0 rounded-2xl p-5 font-sans min-w-[210px]"
                style={{
                  background: "rgba(4,10,24,0.88)",
                  border: "1px solid rgba(0,209,255,0.18)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Activity size={12} className="text-[#00bcd4]" />
                  <span className="text-[10px] text-[#4a627e] font-bold tracking-[0.15em] uppercase">Cluster Status</span>
                  <span className="ml-auto flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse" />
                    <span className="text-[10px] text-[#00e676]">Live</span>
                  </span>
                </div>
                {clusterRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-6 mb-2 last:mb-0">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: row.dot }} />
                      <span className="text-xs text-[#5a7a9a]">{row.label}</span>
                    </div>
                    <span className="text-xs font-bold tabular-nums" style={{ color: row.color }}>{row.val}</span>
                  </div>
                ))}
              </motion.div>

              {/* ── Top-left mini card ── */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="absolute top-6 left-0 rounded-xl px-4 py-3 font-sans"
                style={{
                  background: "rgba(4,10,24,0.88)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Server size={11} style={{ color: "#8b5cf6" }} />
                  <span className="text-[10px] text-[#4a627e] font-bold tracking-widest uppercase">LLM Inference</span>
                </div>
                <div className="text-sm font-bold" style={{ color: "#8b5cf6" }}>1.2M tokens/day</div>
                <div className="text-[10px] text-[#00e676] mt-0.5">↑ 18% this week</div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-sans text-[#3a526e] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={18} className="text-[#00bcd4] opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
