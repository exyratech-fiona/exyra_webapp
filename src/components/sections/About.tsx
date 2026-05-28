"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Cpu, Globe, Layers, Shield, Zap } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MetricsGrid } from "@/components/ui/MetricsCounter";

const pillars = [
  { icon: Brain,  title: "AI-First Curriculum",      description: "Every program is built around real AI systems — LLMs, RAG pipelines, AI Agents, and production MLOps workflows.", color: "#00bcd4" },
  { icon: Globe,  title: "Cloud-Native Architecture", description: "AWS, GCP, multi-cloud strategies, EKS clusters, Serverless, and infrastructure as code with Terraform.",          color: "#1457d6" },
  { icon: Layers, title: "Enterprise Projects",       description: "Work on real Fortune 500-grade projects. Not toy demos — full production systems with CI/CD, monitoring, and SLAs.", color: "#1457d6" },
  { icon: Cpu,    title: "LLM Engineering",           description: "Fine-tune Llama, deploy Claude APIs, build MCP servers, optimize inference with vLLM and TensorRT-LLM.",           color: "#8b5cf6" },
  { icon: Shield, title: "DevSecOps",                 description: "Security-first engineering: vault secrets, network policies, RBAC, compliance automation, and threat detection.",    color: "#00bcd4" },
  { icon: Zap,    title: "Instant Placement",         description: "98% placement within 90 days. Direct connects to our 150+ enterprise partner network.",                            color: "#1457d6" },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="relative py-14 overflow-hidden" style={{ background: "#060e1e" }}>
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,209,255,0.04), transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans"
            style={{ background: "rgba(0,209,255,0.06)", border: "1px solid rgba(0,209,255,0.15)" }}>
            <span className="text-xs text-[#00bcd4] font-medium tracking-widest">ABOUT EXYRA</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-6 text-[#e2eaf6]">
            We don't teach theory.
            <br />
            <span style={{ background: "linear-gradient(90deg,#00bcd4,#1457d6,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We engineer production systems.
            </span>
          </h2>
          <p className="text-lg text-[#7a92b4] font-sans leading-relaxed">
            Exyra Technologies is built by engineers who've shipped AI systems at scale. Our programs combine
            enterprise infrastructure patterns, real cloud environments, and cutting-edge LLM engineering.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl p-8 mb-10" style={{ background: "rgba(10,22,40,0.6)", border: "1px solid rgba(0,209,255,0.1)" }}>
          <MetricsGrid />
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}>
              <GlassCard glow="cyan" tilt className="h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${p.color}12`, border: `1px solid ${p.color}30` }}>
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <h3 className="text-base font-bold text-[#e2eaf6] font-sans mb-2">{p.title}</h3>
                <p className="text-sm text-[#7a92b4] font-sans leading-relaxed">{p.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
