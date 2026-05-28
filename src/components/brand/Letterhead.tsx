"use client";
import { ExyraLogoImage } from "./ExyraLogoImage";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function Letterhead() {
  return (
    <div className="space-y-6">
      {/* A4 Letterhead Preview */}
      <div
        className="relative overflow-hidden rounded-2xl mx-auto"
        style={{
          width: "100%", maxWidth: 680,
          background: "#ffffff",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          minHeight: 500,
        }}
      >
        {/* Top header */}
        <div style={{ background: "linear-gradient(135deg,#060e1e,#0b1a32)", padding: "24px 36px" }}>
          <div className="flex items-center justify-between">
            <ExyraLogoImage variant="full" height={70} />
            <div className="text-right">
              <div className="text-xs text-[#5ab8d8] mb-1">AI · Cloud · DevOps</div>
              <div className="text-[10px] text-[#4a627e]">www.exyra.tech</div>
            </div>
          </div>
          {/* Bottom gradient accent */}
          <div className="mt-5 h-[2px] rounded" style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4,#00e676,transparent)" }}/>
        </div>

        {/* Body */}
        <div style={{ padding: "36px", minHeight: 360 }}>
          {/* Date + ref */}
          <div className="flex justify-between text-xs mb-6" style={{ color: "#3a6080" }}>
            <span>Date: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>Ref: EXT/HR/2024/042</span>
          </div>

          {/* To */}
          <div className="mb-6">
            <div style={{ fontSize: 11, color: "#1457d6", fontWeight: 600, marginBottom: 4, letterSpacing: "0.05em" }}>TO</div>
            <div style={{ fontSize: 13, color: "#060e1e", lineHeight: 1.6 }}>
              <div className="font-semibold">Arjun Sharma</div>
              <div>Senior AI Engineer</div>
            </div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <span style={{ fontSize: 11, color: "#1457d6", fontWeight: 600 }}>SUBJECT: </span>
            <span style={{ fontSize: 13, color: "#060e1e", fontWeight: 600 }}>Appointment Letter — AI Engineering Program</span>
          </div>

          {/* Body text */}
          <div style={{ fontSize: 12, color: "#3a4a5a", lineHeight: 1.8 }}>
            <p className="mb-3">Dear Arjun,</p>
            <p className="mb-3">
              We are delighted to offer you the position of <strong>Senior AI Engineer</strong> at Exyra Technologies.
              This letter serves as your official appointment, outlining the terms of your engagement with our organization.
            </p>
            <p className="mb-3">
              Your expertise in LLM Engineering, AWS Cloud Architecture, and Kubernetes will be invaluable as we
              continue to deliver world-class AI infrastructure solutions to our enterprise clients.
            </p>
            <p>
              Please review the enclosed terms and sign where indicated. We look forward to your contribution
              to our growing AI Engineering team.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10 flex justify-between items-end">
            <div>
              <div style={{ height: 40, borderBottom: "1.5px solid #1457d6", width: 140, marginBottom: 4 }}/>
              <div style={{ fontSize: 11, color: "#1457d6", fontWeight: 600 }}>Authorized Signatory</div>
              <div style={{ fontSize: 10, color: "#3a6080" }}>Exyra Technologies</div>
            </div>
            {/* Company seal placeholder */}
            <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-center"
              style={{ borderColor: "#1457d620", background: "#1457d608" }}>
              <div style={{ fontSize: 8, color: "#1457d6", lineHeight: 1.3 }}>COMPANY<br/>SEAL</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: "#f4f8ff", padding: "14px 36px", borderTop: "1px solid #dce8f8" }}>
          <div className="flex flex-wrap gap-6 text-[10px]" style={{ color: "#3a6080" }}>
            {[
              { icon: MapPin,  text: "Near Junction, Pollachi Main Rd, Malumichampatti, Tamil Nadu 641050, India" },
              { icon: Mail,    text: "exyratech@gmail.com" },
              { icon: Phone,   text: "+91 94445 28270" },
              { icon: Globe,   text: "www.exyra.tech" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1">
                <Icon size={10} color="#1457d6"/> {text}
              </div>
            ))}
          </div>
          <div className="mt-2 h-[2px] rounded" style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4,transparent)" }}/>
        </div>
      </div>
    </div>
  );
}
