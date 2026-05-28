"use client";
import { ExyraLogoImage } from "./ExyraLogoImage";

function SocialTemplate({ label, aspect, children }: {
  label: string; aspect: string; children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-[#4a627e] uppercase tracking-wider">{label}</span>
        <span className="text-xs text-[#1457d6] font-mono">{aspect}</span>
      </div>
      {children}
    </div>
  );
}

function GridBg() {
  return (
    <div className="absolute inset-0 opacity-[0.06]" style={{
      backgroundImage: "linear-gradient(rgba(0,188,212,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,188,212,0.5) 1px,transparent 1px)",
      backgroundSize: "32px 32px",
    }}/>
  );
}

export default function SocialKit() {
  return (
    <div className="space-y-10">

      {/* LinkedIn Banner 1584×396 */}
      <SocialTemplate label="LinkedIn Banner" aspect="1584 × 396">
        <div className="relative overflow-hidden rounded-xl w-full h-24"
          style={{ background: "linear-gradient(135deg,#060e1e,#0b1a32,#0f2040)" }}>
          <GridBg/>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%,rgba(20,87,214,0.2),transparent)" }}/>
          <div className="relative z-10 h-full flex items-center justify-between px-8">
            <ExyraLogoImage variant="full" height={55} />
            <div className="hidden md:block text-center">
              <div className="text-lg font-bold text-white" style={{ fontFamily: "Syne,sans-serif" }}>
                Build the Future with AI, Cloud & DevOps
              </div>
              <div className="text-xs text-[#5ab8d8] mt-1">AWS · Kubernetes · LLMOps · AI Engineering</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-white">www.exyra.tech</div>
              <div className="text-[10px] text-[#4a627e]">Follow for AI insights</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4,#00e676)" }}/>
        </div>
      </SocialTemplate>

      {/* Instagram Post 1080×1080 */}
      <SocialTemplate label="Instagram Post" aspect="1080 × 1080">
        <div className="relative overflow-hidden rounded-2xl" style={{ width: 280, height: 280,
          background: "linear-gradient(160deg,#060e1e,#0a1628,#0f2040)" }}>
          <GridBg/>
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4,#00e676)" }}/>
          {/* Glow */}
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle,#1457d6,transparent)" }}/>
          <div className="relative z-10 p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-auto">
              <ExyraLogoImage variant="full" height={27} />
              <div className="text-xs font-bold text-white" style={{ fontFamily: "Syne,sans-serif" }}>
                EXYRA<br/><span style={{ color: "#5ab8d8", fontWeight: 400, fontSize: 9 }}>TECHNOLOGIES</span>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-white leading-tight mb-2" style={{ fontFamily: "Syne,sans-serif" }}>
                Master AI<br/>Engineering
              </div>
              <div className="text-xs text-[#5ab8d8] mb-3">Claude · Llama · RAG · MCP Servers</div>
              <div className="flex flex-wrap gap-1">
                {["#AIEngineering","#LLMOps","#AWS","#Kubernetes"].map(t => (
                  <span key={t} className="text-[9px] px-2 py-0.5 rounded-full border border-[rgba(0,188,212,0.3)] text-[#00bcd4]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SocialTemplate>

      {/* WhatsApp DP + YouTube thumbnail row */}
      <div className="flex flex-wrap gap-8">
        <SocialTemplate label="WhatsApp DP" aspect="500 × 500">
          <div className="relative overflow-hidden rounded-full" style={{ width: 100, height: 100,
            background: "linear-gradient(135deg,#060e1e,#0f2040)" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <ExyraLogoImage variant="full" height={37} />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-[rgba(0,188,212,0.4)]"/>
          </div>
        </SocialTemplate>

        <SocialTemplate label="YouTube Thumbnail" aspect="1280 × 720">
          <div className="relative overflow-hidden rounded-xl" style={{ width: 320, height: 180,
            background: "linear-gradient(135deg,#060e1e,#0a1628)" }}>
            <GridBg/>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15"
              style={{ background: "radial-gradient(ellipse at right,#1457d6,transparent)" }}/>
            <div className="relative z-10 p-5 h-full flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <ExyraLogoImage variant="full" height={22} />
                <span className="text-[10px] font-bold text-white" style={{ fontFamily: "Syne,sans-serif" }}>EXYRA</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight mb-1" style={{ fontFamily: "Syne,sans-serif" }}>
                  Build a Production RAG System<br/>with Claude AI
                </div>
                <div className="text-[10px] text-[#5ab8d8]">LangChain · ChromaDB · FastAPI · AWS</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4)" }}/>
          </div>
        </SocialTemplate>
      </div>

      {/* Twitter/X Banner */}
      <SocialTemplate label="Twitter / X Banner" aspect="1500 × 500">
        <div className="relative overflow-hidden rounded-xl w-full h-20"
          style={{ background: "linear-gradient(135deg,#060e1e,#0b1a32)" }}>
          <GridBg/>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%,rgba(0,188,212,0.1),transparent)" }}/>
          <div className="relative z-10 h-full flex items-center gap-6 px-8">
            <ExyraLogoImage variant="full" height={40} />
            <div>
              <div className="text-sm font-bold text-white" style={{ fontFamily: "Syne,sans-serif" }}>
                Exyra Technologies
              </div>
              <div className="text-xs text-[#5ab8d8]">AI Engineering · Cloud · DevOps · LLMOps</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4,#00e676)" }}/>
        </div>
      </SocialTemplate>
    </div>
  );
}
