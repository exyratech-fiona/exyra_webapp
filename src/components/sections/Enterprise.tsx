"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, TrendingUp, Users2, Headphones, Code2, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const services = [
  {
    icon: Code2,
    title: "AI Engineering Teams",
    description: "Embed Exyra-trained engineers directly into your AI product teams. Specialists in LLMs, RAG, and production AI infrastructure.",
    color: "#1457d6",
  },
  {
    icon: Building2,
    title: "Cloud Migration",
    description: "End-to-end AWS migration and modernization. Zero-downtime migrations, cost optimization, and cloud-native re-architecture.",
    color: "#00bcd4",
  },
  {
    icon: TrendingUp,
    title: "AI Strategy Consulting",
    description: "AI readiness assessment, LLM selection, build vs. buy analysis, and production AI roadmap for enterprise leadership.",
    color: "#00e676",
  },
  {
    icon: Headphones,
    title: "24/7 Platform Support",
    description: "Ongoing support for your Kubernetes clusters, CI/CD pipelines, and cloud infrastructure. Available for Tamil Nadu–based teams.",
    color: "#8b5cf6",
  },
  {
    icon: Users2,
    title: "Custom Training Programs",
    description: "Tailored upskilling programs for your engineering team. Batch or one-on-one formats. Custom curriculum aligned to your tech stack.",
    color: "#1457d6",
  },
  {
    icon: TrendingUp,
    title: "LLM Cost Optimization",
    description: "Practical LLM cost review: caching strategies, model selection, prompt optimization, and right-sizing inference infrastructure.",
    color: "#00bcd4",
  },
];

const clients = [
  "IT Services Companies",
  "Tech Startups",
  "SaaS Product Teams",
  "E-Commerce Businesses",
  "Engineering Colleges",
  "SME Tech Teams",
];

export function Enterprise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="enterprise" ref={ref} className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-[rgba(20,87,214,0.06)] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-10"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(20,87,214,0.3)]">
            <span className="text-xs text-[#1457d6] font-medium uppercase tracking-wider">Enterprise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">Built for</span>{" "}
            <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="text-[#7a92b4] leading-relaxed">
            From AI strategy to production deployment — Exyra partners with enterprises to build, train, and operate
            AI-powered infrastructure at any scale.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-light rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(20,87,214,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-[#7a92b4] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(20,87,214,0.2) 0%, rgba(0,188,212,0.1) 50%, rgba(0,230,118,0.08) 100%)",
            border: "1px solid rgba(20,87,214,0.3)",
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                {clients.map((c) => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full glass border border-[rgba(255,255,255,0.08)] text-[#7a92b4]">{c}</span>
                ))}
              </div>
              <h3 className="text-3xl font-bold font-display text-white mb-3">
                Ready to build AI at enterprise scale?
              </h3>
              <p className="text-[#7a92b4] max-w-lg">
                Talk to our enterprise team about custom AI training programs, staffing augmentation, or infrastructure consulting.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <GlowButton href="#contact" size="lg" className="whitespace-nowrap">
                Talk to Enterprise Team <ArrowRight size={16} />
              </GlowButton>
              <GlowButton href="#contact" variant="secondary" size="lg" className="whitespace-nowrap">
                Schedule a Free Call
              </GlowButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
