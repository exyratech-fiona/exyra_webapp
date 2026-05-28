"use client";
import { ExyraLogoImage } from "./ExyraLogoImage";
import { QrCode, Award } from "lucide-react";

function CertCard({ title, subtitle, bg, textDark = false }: {
  title: string; subtitle: string; bg: string; textDark?: boolean;
}) {
  const tc  = textDark ? "#060e1e" : "#ffffff";
  const tc2 = textDark ? "#3a6080" : "#7ab4d0";
  const tc3 = textDark ? "#1457d6" : "#00bcd4";
  const uid = `cert-${title.slice(0,4)}`;

  return (
    <div className="relative overflow-hidden rounded-2xl"
      style={{
        width: "100%", maxWidth: 640, minHeight: 400,
        background: bg,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Decorative corner accents */}
      {[[0,0,"0 0 0 20px"],[0,"auto","0 0 20px 0"],["auto",0,"0 20px 0 0"],["auto","auto","20px 0 0 0"]].map(([t,r,br],i)=> (
        <div key={i} className="absolute w-10 h-10 border-2 pointer-events-none"
          style={{
            top: t === "auto" ? undefined : "14px", bottom: t === "auto" ? "14px" : undefined,
            left: r === "auto" ? undefined : "14px", right: r === "auto" ? "14px" : undefined,
            borderColor: textDark ? "#1457d630" : "rgba(0,188,212,0.3)",
            borderRadius: br as string,
          }}/>
      ))}

      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px]"
        style={{ background: "linear-gradient(90deg,#1457d6,#00bcd4,#00e676)" }}/>

      {/* Background watermark infinity */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <ExyraLogoImage variant="full" height={190} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-10 flex flex-col items-center text-center h-full">
        {/* Logo */}
        <ExyraLogoImage variant="full" height={45} />

        <div className="mt-1 text-xs tracking-[0.3em] font-semibold" style={{ color: tc3 }}>
          EXYRA TECHNOLOGIES
        </div>

        <div className="my-4 h-px w-24 opacity-30" style={{ background: tc3 }}/>

        {/* Certificate heading */}
        <div className="flex items-center gap-2 mb-2">
          <Award size={16} style={{ color: tc3 }} opacity={0.7}/>
          <span className="text-xs tracking-widest font-medium" style={{ color: tc2 }}>
            CERTIFICATE OF {subtitle.toUpperCase()}
          </span>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: tc, fontFamily: "Syne,sans-serif" }}>
          {title}
        </h2>

        <p className="text-xs mb-4" style={{ color: tc2 }}>This is to certify that</p>

        <div className="text-2xl font-bold mb-1" style={{ color: tc3, fontFamily: "Syne,sans-serif" }}>
          Arjun Sharma
        </div>

        <p className="text-xs max-w-xs mb-6 leading-relaxed" style={{ color: tc2 }}>
          has successfully completed the <span style={{ color: tc, fontWeight: 600 }}>{title}</span> program
          and demonstrated proficiency in all required competencies.
        </p>

        {/* Duration */}
        <div className="flex gap-8 mb-6">
          {[["Duration","16 Weeks"],["Grade","Distinction"],["Year","2024"]].map(([l,v]) => (
            <div key={l} className="text-center">
              <div className="text-xs" style={{ color: tc2 }}>{l}</div>
              <div className="text-sm font-bold" style={{ color: tc }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Signatures + QR */}
        <div className="flex w-full justify-between items-end mt-auto">
          {[["Program Director","Dr. Rohan Mehta"],["CEO","Edwin A."]].map(([role,name]) => (
            <div key={role} className="text-center">
              <div className="h-6 w-28 mb-1" style={{ borderBottom: `1.5px solid ${tc2}60` }}/>
              <div className="text-xs font-semibold" style={{ color: tc }}>{name}</div>
              <div className="text-[10px]" style={{ color: tc2 }}>{role}</div>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center border"
              style={{ borderColor: `${tc3}30`, background: `${tc3}08` }}>
              <QrCode size={28} style={{ color: tc3 }} opacity={0.6}/>
            </div>
            <span className="text-[9px]" style={{ color: tc2 }}>Verify</span>
          </div>
        </div>

        {/* Issue date */}
        <div className="mt-4 text-[10px]" style={{ color: tc2 }}>
          Issued: {new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}
          &nbsp;·&nbsp; ID: EXT/CERT/2024/AI/042
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg,transparent,rgba(0,188,212,0.4),transparent)" }}/>
    </div>
  );
}

export default function Certificate() {
  return (
    <div className="space-y-8">
      <CertCard
        title="AI Engineering Program"
        subtitle="Completion"
        bg="linear-gradient(160deg,#060e1e,#0b1a32,#0f2040)"
      />
      <CertCard
        title="AWS Cloud Architecture"
        subtitle="Achievement"
        bg="#f8faff"
        textDark
      />
    </div>
  );
}
