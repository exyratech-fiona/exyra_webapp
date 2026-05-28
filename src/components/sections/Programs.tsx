"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Cloud, Container, Sparkles, ArrowRight, Clock, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const programs = [
  {
    id: "ai-engineering",
    icon: Brain,
    title: "AI Engineering",
    subtitle: "Production LLM Systems",
    duration: "16 weeks",
    level: "Advanced",
    students: "500+",
    color: "#1457d6",
    gradient: "from-[#1457d6] to-[#00bcd4]",
    description: "Master the full AI engineering stack — from LLM fine-tuning and RAG systems to AI Agents, MCP Servers, and production MLOps pipelines.",
    modules: [
      "LLM Architecture & Fine-tuning (LoRA/QLoRA)",
      "RAG Systems with Vector Databases",
      "AI Agents with Tool Use & Function Calling",
      "Claude API & Anthropic SDK Deep Dive",
      "Llama 3 Deployment & Optimization",
      "MCP Server Development",
      "LLMOps with MLflow & Weights & Biases",
      "Production AI Infrastructure on AWS",
    ],
    tools: ["Claude AI", "Llama", "LangChain", "ChromaDB", "FastAPI", "MLflow"],
  },
  {
    id: "aws-cloud",
    icon: Cloud,
    title: "AWS Cloud Architecture",
    subtitle: "Solutions Architect + DevOps",
    duration: "14 weeks",
    level: "Intermediate–Advanced",
    students: "800+",
    color: "#00bcd4",
    gradient: "from-[#00bcd4] to-[#00e676]",
    description: "Design and operate enterprise AWS infrastructure from scratch — EKS, Bedrock, Lambda, RDS, and multi-account governance.",
    modules: [
      "AWS Well-Architected Framework",
      "EKS Cluster Design & Operations",
      "AWS Bedrock & AI Services",
      "Serverless Architecture with Lambda",
      "Multi-Account Landing Zone",
      "Cost Optimization & FinOps",
      "AWS Security & Compliance",
      "Disaster Recovery & Multi-Region",
    ],
    tools: ["AWS EKS", "Bedrock", "Terraform", "CloudFormation", "Lambda", "CDK"],
  },
  {
    id: "devops",
    icon: Container,
    title: "DevOps Engineering",
    subtitle: "Kubernetes & Platform Engineering",
    duration: "12 weeks",
    level: "Intermediate",
    students: "1200+",
    color: "#00e676",
    gradient: "from-[#00e676] to-[#1457d6]",
    description: "Platform engineering, GitOps, Kubernetes at scale, and full CI/CD pipeline automation for enterprise systems.",
    modules: [
      "Kubernetes Architecture & CKA Prep",
      "Helm Charts & Kustomize",
      "GitOps with ArgoCD & Flux",
      "GitHub Actions CI/CD Pipelines",
      "Prometheus & Grafana Observability",
      "Istio Service Mesh",
      "Vault Secrets Management",
      "Ansible & Infrastructure Automation",
    ],
    tools: ["Kubernetes", "Docker", "ArgoCD", "Prometheus", "Grafana", "Vault"],
  },
  {
    id: "genai",
    icon: Sparkles,
    title: "Generative AI & LLMOps",
    subtitle: "Enterprise AI Automation",
    duration: "10 weeks",
    level: "All Levels",
    students: "600+",
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#1457d6]",
    description: "Build production generative AI systems — from prompt engineering and agent frameworks to enterprise deployment and governance.",
    modules: [
      "Prompt Engineering & Chain-of-Thought",
      "Multi-Agent Orchestration",
      "OpenAI & Claude API Integration",
      "Embeddings & Semantic Search",
      "LLM Evaluation & Red Teaming",
      "AI Gateway & Rate Limiting",
      "Cost Management for LLMs",
      "Responsible AI & Governance",
    ],
    tools: ["OpenAI", "Claude", "LangGraph", "Bedrock", "Pinecone", "Redis"],
  },
];

export function Programs() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const program = programs[active];

  return (
    <section id="programs" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(0,188,212,0.04)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(0,188,212,0.3)]">
            <span className="text-xs text-[#00bcd4] font-medium uppercase tracking-wider">Engineering Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">Enterprise-Grade</span>{" "}
            <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-[#7a92b4]">
            Every program is production-first. You graduate with deployable systems, not certificates.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {programs.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "text-white shadow-card"
                  : "glass text-[#7a92b4] hover:text-white border border-[rgba(255,255,255,0.06)]"
              }`}
              style={active === i ? {
                background: `linear-gradient(135deg, ${p.color}40, ${p.color}20)`,
                border: `1px solid ${p.color}60`,
              } : {}}
            >
              <p.icon size={16} style={active === i ? { color: p.color } : {}} />
              {p.title}
            </motion.button>
          ))}
        </div>

        {/* Program detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-5 gap-8"
          >
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="rounded-2xl p-6 border"
                style={{
                  background: `linear-gradient(135deg, ${program.color}10, transparent)`,
                  borderColor: `${program.color}30`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${program.color}20`, border: `1px solid ${program.color}40` }}
                >
                  <program.icon size={26} style={{ color: program.color }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                <p className="text-sm text-[#7a92b4] mb-4">{program.subtitle}</p>
                <p className="text-sm text-[#7a92b4] leading-relaxed mb-6">{program.description}</p>

                {/* Meta */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Clock, label: "Duration", value: program.duration },
                    { icon: BarChart3, label: "Level", value: program.level },
                    { icon: Users, label: "Alumni", value: program.students },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center">
                      <Icon size={16} className="mx-auto mb-1" style={{ color: program.color }} />
                      <div className="text-xs text-[#4a627e]">{label}</div>
                      <div className="text-sm font-semibold text-white">{value}</div>
                    </div>
                  ))}
                </div>

                <GlowButton href="#contact" className="w-full justify-center">
                  Enroll Now <ArrowRight size={14} />
                </GlowButton>
              </div>

              {/* Tools */}
              <div className="glass rounded-2xl p-5 border border-[rgba(255,255,255,0.06)]">
                <div className="text-xs text-[#4a627e] uppercase tracking-wider mb-3">Core Tools</div>
                <div className="flex flex-wrap gap-2">
                  {program.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 rounded-lg border font-medium"
                      style={{ borderColor: `${program.color}40`, color: program.color, background: `${program.color}10` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: modules */}
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] h-full">
                <div className="text-sm font-semibold text-white mb-5">Curriculum Modules</div>
                <div className="space-y-3">
                  {program.modules.map((mod, i) => (
                    <motion.div
                      key={mod}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] hover:border-[rgba(0,188,212,0.2)] transition-colors group"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#00e676] opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm text-[#7a92b4] group-hover:text-white transition-colors">
                        <span className="text-[#4a627e] mr-2 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                        {mod}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
