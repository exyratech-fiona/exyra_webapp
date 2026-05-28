"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Database, Network, Bot, Layers, Cpu } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const agentFlow = [
  { id: 1, label: "User Query", color: "#1457d6" },
  { id: 2, label: "LLM Router", color: "#00bcd4" },
  { id: 3, label: "RAG Retrieval", color: "#8b5cf6" },
  { id: 4, label: "Tool Calling", color: "#00bcd4" },
  { id: 5, label: "Agent Memory", color: "#1457d6" },
  { id: 6, label: "Response", color: "#00e676" },
];

const cards = [
  {
    icon: Database,
    title: "RAG Systems",
    description: "Vector databases, semantic search, hybrid retrieval, re-ranking, and production RAG pipelines at scale.",
    color: "#1457d6",
    tags: ["ChromaDB", "Pinecone", "pgvector", "FAISS"],
  },
  {
    icon: Network,
    title: "Multi-Agent Systems",
    description: "Orchestrate complex agent networks with LangGraph, AutoGen, and custom agent frameworks.",
    color: "#00bcd4",
    tags: ["LangGraph", "AutoGen", "CrewAI", "Claude"],
  },
  {
    icon: Bot,
    title: "MCP Servers",
    description: "Build Model Context Protocol servers for tool-augmented AI systems and enterprise integrations.",
    color: "#8b5cf6",
    tags: ["MCP", "Claude API", "TypeScript", "Python"],
  },
  {
    icon: Layers,
    title: "LLM Fine-tuning",
    description: "LoRA, QLoRA, RLHF, DPO training pipelines for domain-specific model customization.",
    color: "#00e676",
    tags: ["LoRA", "QLoRA", "PEFT", "Unsloth"],
  },
  {
    icon: Cpu,
    title: "Inference Optimization",
    description: "vLLM, TensorRT-LLM, and quantization techniques for cost-effective production inference.",
    color: "#1457d6",
    tags: ["vLLM", "TensorRT", "AWQ", "GPTQ"],
  },
  {
    icon: Sparkles,
    title: "AI Evaluation",
    description: "LLM evaluation frameworks, red teaming, safety testing, and production monitoring.",
    color: "#00bcd4",
    tags: ["Evals", "RAGAS", "DeepEval", "Braintrust"],
  },
];

export function GenAI() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="genai" ref={ref} className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[rgba(139,92,246,0.05)] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-6"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(139,92,246,0.3)]">
            <span className="text-xs text-[#8b5cf6] font-medium uppercase tracking-wider">Generative AI & LLMOps</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">From Prompt to</span>
            <br />
            <span className="gradient-text">Production AI</span>
          </h2>
          <p className="text-[#7a92b4]">
            Master the complete generative AI engineering stack — from raw models to enterprise-grade AI systems.
          </p>
        </motion.div>

        {/* Agent flow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {agentFlow.map((step, i) => (
            <div key={step.id} className="flex items-center gap-3">
              <motion.div
                animate={{ boxShadow: [`0 0 10px ${step.color}40`, `0 0 20px ${step.color}60`, `0 0 10px ${step.color}40`] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                className="px-4 py-2 rounded-xl text-sm font-medium border"
                style={{ borderColor: `${step.color}50`, color: step.color, background: `${step.color}10` }}
              >
                {step.label}
              </motion.div>
              {i < agentFlow.length - 1 && (
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                  className="text-[#4a627e] text-lg"
                >
                  →
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
            >
              <GlassCard glow={i % 3 === 0 ? "blue" : i % 3 === 1 ? "cyan" : "violet"} className="h-full">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                >
                  <card.icon size={20} style={{ color: card.color }} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-[#7a92b4] leading-relaxed mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md border font-mono"
                      style={{ borderColor: `${card.color}30`, color: card.color, background: `${card.color}08` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
