"use client";
import { ExyraLogoImage } from "./ExyraLogoImage";
import { Mail, Phone, Globe, Linkedin, Twitter, Youtube } from "lucide-react";

export default function EmailSignature() {
  return (
    <div className="space-y-6">
      <div className="max-w-xl">
        {/* Email signature preview (white bg — as it would appear in email client) */}
        <div className="rounded-xl overflow-hidden border border-[rgba(0,0,0,0.12)]"
          style={{ background: "#ffffff", fontFamily: "Arial, sans-serif" }}>
          {/* Top border */}
          <div className="h-[3px]" style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4,#00e676)" }}/>

          <div className="p-5">
            <div className="flex gap-4 items-start">
              {/* Left: infinity mark */}
              <div className="shrink-0">
                <ExyraLogoImage variant="full" height={35} />
              </div>

              {/* Right divider */}
              <div className="w-[1.5px] self-stretch mx-1"
                style={{ background: "linear-gradient(180deg,#1457d6,#00bcd4,transparent)" }}/>

              {/* Right: details */}
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#060e1e", letterSpacing: "0.02em" }}>
                  Arjun Sharma
                </div>
                <div style={{ fontSize: 11, color: "#1457d6", fontWeight: 600, marginBottom: 6 }}>
                  Senior AI Engineer · Cloud Architect
                </div>

                <div style={{ fontSize: 11, color: "#3a6080", lineHeight: 1.8 }}>
                  <div>📱 <a href="tel:+919876543210" style={{ color: "#3a6080", textDecoration: "none" }}>+91 98765 43210</a></div>
                  <div>✉️ <a href="mailto:arjun@exyra.tech" style={{ color: "#1457d6", textDecoration: "none" }}>arjun@exyra.tech</a></div>
                  <div>🌐 <a href="https://exyra.tech" style={{ color: "#1457d6", textDecoration: "none" }}>www.exyra.tech</a></div>
                </div>

                {/* Social icons */}
                <div className="flex gap-2 mt-3">
                  {[
                    { icon: Linkedin, color: "#0077b5", label: "LinkedIn" },
                    { icon: Twitter,  color: "#1da1f2", label: "Twitter"  },
                    { icon: Youtube,  color: "#ff0000", label: "YouTube"  },
                  ].map(({ icon: Icon, color, label }) => (
                    <div key={label}
                      className="w-6 h-6 rounded flex items-center justify-center"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                      <Icon size={12} style={{ color }}/>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Company strip */}
            <div className="mt-4 pt-3" style={{ borderTop: "1px solid #e8f0fc" }}>
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: 10, color: "#1457d6", fontWeight: 700, letterSpacing: "0.15em" }}>
                    EXYRA TECHNOLOGIES
                  </div>
                  <div style={{ fontSize: 9, color: "#7a92b4" }}>
                    AI Engineering · Cloud · DevOps · LLMOps
                  </div>
                </div>
                <div style={{ fontSize: 9, color: "#7a92b4", textAlign: "right" }}>
                  Bengaluru, India<br/>San Francisco, USA
                </div>
              </div>
            </div>
          </div>
          <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(20,87,214,0.2),transparent)" }}/>
        </div>

        <p className="text-xs text-[#4a627e] mt-3">
          Copy HTML and paste into Gmail / Outlook email signature settings.
        </p>
      </div>
    </div>
  );
}
