"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Building, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const partners = [
  "AWS", "Meta", "Stripe", "Google", "Anthropic", "Databricks",
  "Goldman Sachs", "Netflix", "Airbnb", "Coinbase", "OpenAI", "Snowflake",
];

const placements = [
  { role: "ML Infrastructure Engineer", company: "Meta", package: "$340k", time: "6 months" },
  { role: "Senior DevOps Engineer", company: "Stripe", package: "$290k", time: "3 months" },
  { role: "AI Platform Engineer", company: "Anthropic", package: "$380k", time: "4 months" },
  { role: "Cloud Architect", company: "AWS", package: "$260k", time: "5 months" },
  { role: "LLM Engineer", company: "Databricks", package: "$310k", time: "3 months" },
  { role: "Platform Engineering Lead", company: "Netflix", package: "$350k", time: "7 months" },
];

const supportFeatures = [
  { icon: Target, title: "Resume & Portfolio Review", desc: "AI-optimized resumes, GitHub showcasing, and technical portfolio for ML/DevOps roles" },
  { icon: Building, title: "Direct Company Connects", desc: "150+ partner companies. Direct introductions to engineering leads, not just HR" },
  { icon: Clock, title: "Interview Prep", desc: "System design, LeetCode, ML system design, and technical architecture interviews" },
  { icon: TrendingUp, title: "Salary Negotiation", desc: "Data-driven negotiation playbooks. Average 23% higher offer vs. uncoached candidates" },
];

export function Placement() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="placement" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-[rgba(0,230,118,0.05)] blur-[100px]" />
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
            <span className="text-xs text-[#00e676] font-medium uppercase tracking-wider">Placement & Careers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">98% Placed at</span>
            <br />
            <span className="gradient-text">Top Companies</span>
          </h2>
          <p className="text-[#7a92b4]">
            We don't just train engineers — we place them. Our network, prep, and brand gets you hired.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Placement Rate", value: "98%", color: "#00e676" },
            { label: "Avg. Time to Hire", value: "< 90 days", color: "#00bcd4" },
            { label: "Avg. Package", value: "$180k+", color: "#1457d6" },
            { label: "Partner Companies", value: "150+", color: "#8b5cf6" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center border border-[rgba(255,255,255,0.06)]"
            >
              <div className="text-3xl font-bold font-display mb-1" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-sm text-[#7a92b4]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent placements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Recent Placements</h3>
            <div className="space-y-3">
              {placements.map((p, i) => (
                <motion.div
                  key={p.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.4 }}
                  className="flex items-center justify-between p-4 glass-light rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-[rgba(0,230,118,0.2)] transition-colors"
                >
                  <div>
                    <div className="text-sm font-medium text-white">{p.role}</div>
                    <div className="text-xs text-[#7a92b4]">{p.company} · {p.time} after graduation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#00e676]">{p.package}</div>
                    <div className="text-xs text-[#4a627e]">total comp</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Career Support</h3>
            <div className="space-y-4 mb-8">
              {supportFeatures.map((f, i) => (
                <div key={f.title} className="flex gap-4 p-4 glass-light rounded-xl border border-[rgba(255,255,255,0.05)]">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.2)] flex items-center justify-center shrink-0">
                    <f.icon size={18} className="text-[#00e676]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{f.title}</div>
                    <div className="text-xs text-[#7a92b4]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partners marquee */}
            <div className="glass rounded-xl p-4 border border-[rgba(255,255,255,0.06)]">
              <div className="text-xs text-[#4a627e] mb-3">Hiring Partners</div>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span key={p} className="text-xs px-3 py-1 rounded-lg border border-[rgba(255,255,255,0.07)] text-[#7a92b4] bg-[rgba(255,255,255,0.03)]">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <GlowButton href="#contact" className="mt-6 w-full justify-center">
              Start Your AI Career <ArrowRight size={14} />
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
