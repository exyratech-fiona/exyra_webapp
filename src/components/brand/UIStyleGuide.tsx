"use client";
import { ChevronRight, Activity, Cpu, Server, Zap, CheckCircle, AlertCircle } from "lucide-react";

export default function UIStyleGuide() {
  return (
    <div className="space-y-10">

      {/* Buttons */}
      <div>
        <p className="text-xs text-[#4a627e] uppercase tracking-wider mb-5">Buttons</p>
        <div className="flex flex-wrap gap-4 items-center p-6 glass rounded-xl border border-[rgba(255,255,255,0.07)]">
          {/* Primary */}
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
            style={{ background: "linear-gradient(135deg,#1457d6,#0e9cc4)", boxShadow: "0 0 20px rgba(20,87,214,0.4)" }}>
            Get Started <ChevronRight size={14}/>
          </button>
          {/* Secondary */}
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-[#00bcd4] transition-all"
            style={{ border: "1px solid rgba(0,188,212,0.4)", background: "rgba(0,188,212,0.05)" }}>
            Learn More
          </button>
          {/* Ghost */}
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-[#7a92b4] transition-all hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            Cancel
          </button>
          {/* Danger */}
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#dc2626,#b91c1c)", boxShadow: "0 0 15px rgba(220,38,38,0.3)" }}>
            Delete
          </button>
          {/* Icon button */}
          <button className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(20,87,214,0.15)", border: "1px solid rgba(20,87,214,0.3)" }}>
            <Zap size={16} color="#1457d6"/>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div>
        <p className="text-xs text-[#4a627e] uppercase tracking-wider mb-5">Cards</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Cpu,    title: "AI Engineering",  val: "42 learners", color: "#1457d6", change: "+12%", up: true },
            { icon: Server, title: "AWS Cloud",       val: "Cluster: Live", color: "#00bcd4", change: "99.9%", up: true },
            { icon: Activity, title: "DevOps Score",  val: "94 / 100",    color: "#00e676", change: "Active", up: true },
          ].map(({ icon: Icon, title, val, color, change, up }) => (
            <div key={title} className="rounded-xl p-5 border border-[rgba(255,255,255,0.07)] transition-all"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={18} style={{ color }}/>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ color: up ? "#00e676" : "#f87171", background: up ? "rgba(0,230,118,0.08)" : "rgba(248,113,113,0.08)" }}>
                  {change}
                </span>
              </div>
              <div className="text-xs text-[#4a627e] mb-1">{title}</div>
              <div className="text-lg font-bold text-white">{val}</div>
              <div className="mt-3 h-1 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: "72%", background: `linear-gradient(90deg,${color},${color}80)` }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div>
        <p className="text-xs text-[#4a627e] uppercase tracking-wider mb-5">Form Inputs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 glass rounded-xl border border-[rgba(255,255,255,0.07)]">
          <div>
            <label className="block text-xs text-[#4a627e] mb-2">API Key</label>
            <input
              readOnly value="sk-ant-***************************"
              className="w-full px-4 py-2.5 rounded-xl text-sm text-white outline-none"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "monospace" }}
            />
          </div>
          <div>
            <label className="block text-xs text-[#4a627e] mb-2">Cluster Name</label>
            <input
              readOnly value="exyra-prod-eks-cluster"
              className="w-full px-4 py-2.5 rounded-xl text-sm text-white outline-none"
              style={{ background: "rgba(20,87,214,0.05)", border: "1px solid rgba(20,87,214,0.3)" }}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs text-[#4a627e] mb-2">Prompt Template</label>
            <textarea
              readOnly rows={2}
              value="You are an expert AI engineer. Given the following context: {context}, answer: {query}"
              className="w-full px-4 py-2.5 rounded-xl text-sm text-[#a8c0e0] outline-none resize-none"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            />
          </div>
        </div>
      </div>

      {/* Live Dashboard widget */}
      <div>
        <p className="text-xs text-[#4a627e] uppercase tracking-wider mb-5">AI Dashboard Panel</p>
        <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.06)]"
            style={{ background: "rgba(255,255,255,0.03)" }}>
            <span className="text-xs font-semibold text-white">Infrastructure Monitor</span>
            <span className="flex items-center gap-1.5 text-xs text-[#00e676]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse"/>Live
            </span>
          </div>
          {/* Rows */}
          <div className="divide-y divide-[rgba(255,255,255,0.05)]">
            {[
              { name: "RAG Pipeline",    status: "Running",   cpu: "68%", mem: "4.2GB", color: "#00e676" },
              { name: "EKS Cluster",     status: "Healthy",   cpu: "41%", mem: "12GB",  color: "#00e676" },
              { name: "LLM Inference",   status: "Active",    cpu: "94%", mem: "18GB",  color: "#00bcd4" },
              { name: "Vector DB",       status: "Indexing",  cpu: "22%", mem: "8.1GB", color: "#00bcd4" },
              { name: "CI/CD Pipeline",  status: "Warning",   cpu: "85%", mem: "2.8GB", color: "#f59e0b" },
            ].map(({ name, status, cpu, mem, color }) => (
              <div key={name} className="flex items-center justify-between px-5 py-3 text-xs hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }}/>
                  <span className="text-white font-mono">{name}</span>
                </div>
                <span style={{ color }}>{status}</span>
                <div className="hidden md:flex gap-6 text-[#7a92b4]">
                  <span>CPU <span className="text-white">{cpu}</span></span>
                  <span>MEM <span className="text-white">{mem}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status badges / Pills */}
      <div>
        <p className="text-xs text-[#4a627e] uppercase tracking-wider mb-5">Status Badges</p>
        <div className="flex flex-wrap gap-3 p-6 glass rounded-xl border border-[rgba(255,255,255,0.07)]">
          {[
            { label: "Production",  color: "#00e676" },
            { label: "Beta",        color: "#00bcd4" },
            { label: "In Progress", color: "#f59e0b" },
            { label: "Deprecated",  color: "#f87171" },
            { label: "AWS",         color: "#ff9900" },
            { label: "Kubernetes",  color: "#326CE5" },
            { label: "Claude AI",   color: "#8b5cf6" },
          ].map(({ label, color }) => (
            <span key={label} className="text-xs px-3 py-1.5 rounded-full font-medium border"
              style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
