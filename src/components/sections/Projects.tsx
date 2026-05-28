"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, GitBranch, Activity, Boxes } from "lucide-react";

const projects = [
  {
    title: "Enterprise RAG Platform",
    description: "Production RAG system serving 10M+ queries/day. ChromaDB + Pinecone hybrid retrieval, Claude claude-sonnet-4-6 orchestration, 99.9% uptime on EKS.",
    tags: ["Claude AI", "RAG", "EKS", "Pinecone"],
    metrics: { uptime: "99.9%", queries: "10M+/day", latency: "< 200ms" },
    color: "#1457d6",
    status: "live",
  },
  {
    title: "AI-Powered DevOps Copilot",
    description: "LLM-based infrastructure assistant. Generates Terraform, debugs Kubernetes issues, auto-scales clusters based on ML predictions.",
    tags: ["LLM", "Terraform", "Kubernetes", "AWS"],
    metrics: { users: "500+", issues: "95% auto-resolved", savings: "$120k/yr" },
    color: "#00bcd4",
    status: "live",
  },
  {
    title: "Real-Time ML Feature Platform",
    description: "Feast-based feature store with Redis + Kafka streaming. Sub-10ms feature serving for fraud detection and recommendation systems.",
    tags: ["Feast", "Kafka", "Redis", "Python"],
    metrics: { latency: "< 10ms", features: "5k+", throughput: "1M/sec" },
    color: "#00e676",
    status: "live",
  },
  {
    title: "Multi-Cloud Governance Platform",
    description: "Terraform + OPA policy engine managing 500+ AWS accounts. Automated compliance reporting, cost allocation, and drift detection.",
    tags: ["Terraform", "OPA", "AWS", "Python"],
    metrics: { accounts: "500+", cost: "40% saved", compliance: "100%" },
    color: "#8b5cf6",
    status: "live",
  },
  {
    title: "LLM Evaluation Framework",
    description: "Open-source evaluation harness for LLM applications. Automated red-teaming, hallucination detection, and production quality gates.",
    tags: ["Evals", "Claude", "Python", "GitHub Actions"],
    metrics: { tests: "10k+", models: "12 benchmarked", accuracy: "97%" },
    color: "#1457d6",
    status: "beta",
  },
  {
    title: "AI Security Operations Platform",
    description: "Falco + AI-powered threat detection. Automatic incident classification, playbook generation, and SOAR integration.",
    tags: ["Falco", "Claude AI", "Grafana", "PagerDuty"],
    metrics: { detection: "< 30s", incidents: "200+/day", accuracy: "99.2%" },
    color: "#00bcd4",
    status: "live",
  },
];

export function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" ref={ref} className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[rgba(0,188,212,0.04)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(0,188,212,0.3)]">
            <span className="text-xs text-[#00bcd4] font-medium uppercase tracking-wider">Real Enterprise Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">Systems in</span>{" "}
            <span className="gradient-text">Production</span>
          </h2>
          <p className="text-[#7a92b4]">
            Not capstone projects. Not demos. Real production systems running at scale, built during training.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass-light rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,188,212,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:-translate-y-1"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${proj.status === "live" ? "bg-[#00e676] animate-pulse" : "bg-[#00bcd4]"}`} />
                <span className={`text-xs ${proj.status === "live" ? "text-[#00e676]" : "text-[#00bcd4]"}`}>
                  {proj.status}
                </span>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: `${proj.color}15`, border: `1px solid ${proj.color}30` }}>
                <Boxes size={18} style={{ color: proj.color }} />
              </div>

              <h3 className="text-base font-semibold text-white mb-2 pr-12">{proj.title}</h3>
              <p className="text-sm text-[#7a92b4] leading-relaxed mb-4">{proj.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-[rgba(0,0,0,0.2)]">
                {Object.entries(proj.metrics).map(([key, val]) => (
                  <div key={key} className="text-center">
                    <div className="text-xs font-bold" style={{ color: proj.color }}>{val}</div>
                    <div className="text-xs text-[#4a627e] capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] text-[#7a92b4]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={14} className="text-[#00bcd4]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
