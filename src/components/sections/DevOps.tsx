"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TerminalSimulator } from "@/components/ui/TerminalSimulator";
import { GitBranch, Package, Activity, Shield } from "lucide-react";

const pipeline = [
  { label: "Code",     step: "01", color: "#1457d6" },
  { label: "Build",    step: "02", color: "#00bcd4" },
  { label: "Test",     step: "03", color: "#00e676" },
  { label: "Deploy",   step: "04", color: "#8b5cf6" },
  { label: "Monitor",  step: "05", color: "#1457d6" },
  { label: "Optimize", step: "06", color: "#00bcd4" },
];

const features = [
  { icon: GitBranch, title: "GitOps Workflows", desc: "ArgoCD + Flux for declarative, git-driven deployments across multi-cluster environments." },
  { icon: Package, title: "Container Orchestration", desc: "Advanced Kubernetes patterns: HPA, VPA, KEDA, custom schedulers, and multi-tenancy." },
  { icon: Activity, title: "Full Observability", desc: "Prometheus + Grafana + OpenTelemetry + Jaeger. SLOs, SLIs, error budgets, alerting." },
  { icon: Shield, title: "Security Automation", desc: "Falco runtime security, OPA Gatekeeper policies, Vault secrets, and network policies." },
];

export function DevOps() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="devops" ref={ref} className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[rgba(0,230,118,0.04)] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(0,230,118,0.3)]">
                <span className="text-xs text-[#00e676] font-medium uppercase tracking-wider">DevOps Engineering</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
                <span className="text-white">Pipelines that</span>
                <br />
                <span className="gradient-text">never break</span>
              </h2>
              <p className="text-[#7a92b4] leading-relaxed mb-8">
                Learn to build and operate production-grade DevOps infrastructure. From GitOps to
                platform engineering — every concept backed by live cluster access.
              </p>
            </motion.div>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex gap-4 p-4 glass-light rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-[rgba(0,230,118,0.2)] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.2)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(0,230,118,0.15)] transition-colors">
                    <f.icon size={18} className="text-[#00e676]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{f.title}</div>
                    <div className="text-xs text-[#7a92b4] leading-relaxed">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pipeline visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-5 border border-[rgba(255,255,255,0.06)]"
            >
              <div className="text-xs text-[#4a627e] mb-3 uppercase tracking-wider">DevOps Infinity Pipeline</div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {pipeline.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2 shrink-0">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: `${step.color}15`, border: `1px solid ${step.color}40`, color: step.color }}
                    >
                      <span className="font-mono text-[10px] opacity-50">{step.step}</span>
                      {step.label}
                    </motion.div>
                    {i < pipeline.length - 1 && (
                      <div className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${step.color}, ${pipeline[i+1].color})` }} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TerminalSimulator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
