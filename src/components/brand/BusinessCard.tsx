"use client";
import { ExyraLogoImage } from "./ExyraLogoImage";
import { Linkedin, Twitter, Globe, Mail, Phone, QrCode } from "lucide-react";

export default function BusinessCard() {
  return (
    <div className="flex flex-wrap gap-8 items-start">
      {/* FRONT */}
      <div>
        <p className="text-xs text-[#4a627e] mb-3 uppercase tracking-wider">Front</p>
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            width: 380, height: 220,
            background: "linear-gradient(135deg, #060e1e 0%, #0b1a32 50%, #0f2040 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(20,87,214,0.15)",
          }}
        >
          {/* Background elements */}
          <div className="absolute inset-0">
            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "linear-gradient(rgba(20,87,214,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(20,87,214,0.4) 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }}/>
            {/* Glow spot */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #1457d6, transparent)" }}/>
          </div>

          {/* Top bar accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: "linear-gradient(90deg, #1457d6, #00bcd4, #00e676)" }}/>

          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <ExyraLogoImage variant="full" height={45} />
              {/* QR placeholder */}
              <div className="w-14 h-14 rounded-lg border border-[rgba(255,255,255,0.12)] flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.04)" }}>
                <QrCode size={28} className="text-[#00bcd4]" opacity={0.6}/>
              </div>
            </div>

            <div>
              <div className="text-lg font-bold text-white mb-0.5"
                style={{ fontFamily: "Syne, sans-serif" }}>
                Arjun Sharma
              </div>
              <div className="text-xs font-medium mb-3"
                style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Senior AI Engineer · Cloud Architect
              </div>
              <div className="flex gap-4 text-[10px] text-[#7a92b4]">
                <div className="flex items-center gap-1">
                  <Phone size={10} className="text-[#00bcd4]"/> +91 98765 43210
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={10} className="text-[#00bcd4]"/> arjun@exyra.tech
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1 text-[10px] text-[#7a92b4]">
                <Globe size={10} className="text-[#00bcd4]"/> www.exyra.tech
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,188,212,0.4), transparent)" }}/>
        </div>
      </div>

      {/* BACK */}
      <div>
        <p className="text-xs text-[#4a627e] mb-3 uppercase tracking-wider">Back</p>
        <div
          className="relative overflow-hidden rounded-2xl flex items-center justify-center"
          style={{
            width: 380, height: 220,
            background: "linear-gradient(135deg, #060e1e, #0b1a32)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          <div className="absolute inset-0">
            {/* Large infinity watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
              <ExyraLogoImage variant="full" height={170} />
            </div>
            {/* Diagonal grid lines */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "repeating-linear-gradient(45deg, #00bcd4 0, #00bcd4 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}/>
            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, #1457d6, #00bcd4, #00e676)" }}/>
          </div>

          {/* Center logo */}
          <div className="relative z-10 text-center">
            <ExyraLogoImage variant="full" height={65} />
            <div className="mt-3 text-sm font-bold tracking-[0.3em] text-white opacity-80"
              style={{ fontFamily: "Syne, sans-serif" }}>EXYRA</div>
            <div className="text-[9px] tracking-[0.25em] text-[#5ab8d8] mt-0.5">TECHNOLOGIES</div>
          </div>

          {/* Social icons bottom */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-6">
            {[Linkedin, Twitter, Globe].map((Icon, i) => (
              <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center border border-[rgba(0,188,212,0.2)]"
                style={{ background: "rgba(0,188,212,0.06)" }}>
                <Icon size={13} className="text-[#00bcd4]"/>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,188,212,0.3), transparent)" }}/>
        </div>
      </div>
    </div>
  );
}
