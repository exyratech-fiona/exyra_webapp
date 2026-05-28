"use client";
import { ExyraLogoImage } from "./ExyraLogoImage";
import { QrCode, Wifi } from "lucide-react";

function IDCard({ label, bg, textOnDark = true }: { label: string; bg: string; textOnDark?: boolean }) {
  return (
    <div>
      <p className="text-xs text-[#4a627e] mb-3 uppercase tracking-wider">{label}</p>
      <div className="relative overflow-hidden rounded-2xl"
        style={{
          width: 260, height: 400,
          background: bg,
          boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(20,87,214,0.15)",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(20,87,214,0.15), transparent 60%)" }}/>

        {/* Top header band */}
        <div className="absolute top-0 left-0 right-0 h-[4px]"
          style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4,#00e676)" }}/>

        {/* Grid bg */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(0,188,212,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,188,212,0.5) 1px,transparent 1px)",
          backgroundSize: "20px 20px",
        }}/>

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col h-full">
          {/* Logo + company */}
          <div className="flex items-center gap-2 mb-4">
            <ExyraLogoImage variant="full" height={27} />
            <div>
              <div className="text-xs font-bold text-white" style={{ fontFamily: "Syne,sans-serif" }}>EXYRA</div>
              <div className="text-[8px] text-[#5ab8d8] tracking-wider">TECHNOLOGIES</div>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="mx-auto mb-4 w-24 h-24 rounded-2xl border-2 border-[rgba(0,188,212,0.4)] flex items-center justify-center overflow-hidden"
            style={{ background: "rgba(20,87,214,0.15)" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" fill="rgba(0,188,212,0.4)"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(0,188,212,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Name & role */}
          <div className="text-center mb-4">
            <div className="text-base font-bold text-white mb-0.5" style={{ fontFamily: "Syne,sans-serif" }}>
              Priya Nair
            </div>
            <div className="text-xs font-mono" style={{ color: "#00bcd4" }}>AI Engineering Lead</div>
            <div className="mt-1 text-[10px] text-[#4a627e] font-mono">EXY-2024-AI-042</div>
          </div>

          {/* Divider */}
          <div className="h-px mb-3" style={{ background: "linear-gradient(90deg,transparent,rgba(0,188,212,0.3),transparent)" }}/>

          {/* Details */}
          <div className="space-y-1.5 mb-4">
            {[
              { label: "Department", val: "AI Engineering" },
              { label: "Access Level", val: "L3 — Senior" },
              { label: "Joined", val: "Jan 2024" },
            ].map(({ label, val }) => (
              <div key={label} className="flex justify-between text-[10px]">
                <span className="text-[#4a627e]">{label}</span>
                <span className="text-[#a8c0e0] font-medium">{val}</span>
              </div>
            ))}
          </div>

          {/* QR + chip */}
          <div className="mt-auto flex items-end justify-between">
            <div className="w-16 h-16 rounded-lg border border-[rgba(0,188,212,0.25)] flex items-center justify-center"
              style={{ background: "rgba(0,188,212,0.05)" }}>
              <QrCode size={36} className="text-[#00bcd4]" opacity={0.7}/>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Wifi size={14} className="text-[#00e676]" opacity={0.7}/>
              <span className="text-[8px] text-[#4a627e]">NFC Enabled</span>
              <div className="text-[8px] text-[#4a627e] font-mono">Valid: 2026</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4)" }}/>
      </div>
    </div>
  );
}

export default function EmployeeID() {
  return (
    <div className="flex flex-wrap gap-8">
      <IDCard label="Front — Dark Theme" bg="linear-gradient(160deg,#060e1e 0%,#0b1a32 60%,#0f2040 100%)"/>
      <IDCard label="Front — Deep Space" bg="linear-gradient(160deg,#04080f,#080e20,#0c1630)"/>
    </div>
  );
}
