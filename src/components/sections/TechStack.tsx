"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techCategories = [
  {
    category: "AI & LLM",
    color: "#1457d6",
    items: [
      { name: "Claude AI", logo: "🤖" },
      { name: "Llama 3", logo: "🦙" },
      { name: "OpenAI", logo: "⚡" },
      { name: "LangChain", logo: "🔗" },
      { name: "AWS Bedrock", logo: "☁️" },
    ],
  },
  {
    category: "Cloud",
    color: "#00bcd4",
    items: [
      { name: "AWS", logo: "☁️" },
      { name: "Terraform", logo: "🏗️" },
      { name: "CDK", logo: "⚡" },
      { name: "CloudFormation", logo: "📋" },
      { name: "Pulumi", logo: "🌀" },
    ],
  },
  {
    category: "Containers",
    color: "#00e676",
    items: [
      { name: "Kubernetes", logo: "⚙️" },
      { name: "Docker", logo: "🐳" },
      { name: "Helm", logo: "⛵" },
      { name: "ArgoCD", logo: "🔄" },
      { name: "Istio", logo: "🕸️" },
    ],
  },
  {
    category: "Observability",
    color: "#8b5cf6",
    items: [
      { name: "Prometheus", logo: "📊" },
      { name: "Grafana", logo: "📈" },
      { name: "ELK Stack", logo: "🔍" },
      { name: "Jaeger", logo: "🔭" },
      { name: "PagerDuty", logo: "🚨" },
    ],
  },
  {
    category: "CI/CD & Automation",
    color: "#1457d6",
    items: [
      { name: "GitHub Actions", logo: "🚀" },
      { name: "Jenkins", logo: "🔧" },
      { name: "Ansible", logo: "📝" },
      { name: "Vault", logo: "🔐" },
      { name: "Nexus", logo: "📦" },
    ],
  },
  {
    category: "Data & Backend",
    color: "#00bcd4",
    items: [
      { name: "PostgreSQL", logo: "🐘" },
      { name: "Redis", logo: "⚡" },
      { name: "FastAPI", logo: "🐍" },
      { name: "Kafka", logo: "📨" },
      { name: "Pinecone", logo: "🌲" },
    ],
  },
];

// Marquee row of tech names
const allTech = [
  "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Claude AI", "Llama",
  "Bedrock", "LangChain", "OpenAI", "FastAPI", "Python", "ELK", "Prometheus",
  "Grafana", "GitHub Actions", "Ansible", "Redis", "PostgreSQL", "Vault",
  "ArgoCD", "Helm", "Istio", "Pinecone", "MLflow", "Kafka", "vLLM",
];

export function TechStack() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tech-stack" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[rgba(20,87,214,0.06)] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(20,87,214,0.3)]">
            <span className="text-xs text-[#1457d6] font-medium uppercase tracking-wider">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">The Full</span>{" "}
            <span className="gradient-text">Enterprise Stack</span>
          </h2>
          <p className="text-[#7a92b4]">
            Every tool, service, and platform used by top AI companies — learned in production contexts.
          </p>
        </motion.div>

        {/* Tech marquee */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#060e1e] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#060e1e] to-transparent pointer-events-none" />
          <div className="flex gap-4 animate-marquee">
            {[...allTech, ...allTech].map((tech, i) => (
              <div key={`${tech}-${i}`} className="shrink-0 glass rounded-xl px-4 py-2.5 text-sm text-[#7a92b4] border border-[rgba(255,255,255,0.06)] whitespace-nowrap hover:text-white hover:border-[rgba(0,188,212,0.3)] transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass-light rounded-2xl p-5 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,188,212,0.15)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <span className="text-xs font-semibold text-[#7a92b4] uppercase tracking-wider group-hover:text-white transition-colors">
                  {cat.category}
                </span>
              </div>
              <div className="space-y-2">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[rgba(255,255,255,0.04)] cursor-default transition-colors"
                  >
                    <span className="text-xl leading-none">{item.logo}</span>
                    <span className="text-sm text-[#7a92b4]">{item.name}</span>
                    <div className="ml-auto h-1 rounded-full bg-[rgba(255,255,255,0.06)] w-16 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${80 + Math.random() * 20}%` } : {}}
                        transition={{ delay: catIdx * 0.1 + i * 0.05 + 0.5, duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{ background: cat.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
