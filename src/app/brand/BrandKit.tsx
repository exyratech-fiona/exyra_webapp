"use client";
import { ExyraLogoImage } from "@/components/brand/ExyraLogoImage";
import BusinessCard   from "@/components/brand/BusinessCard";
import EmployeeID     from "@/components/brand/EmployeeID";
import Letterhead     from "@/components/brand/Letterhead";
import Certificate    from "@/components/brand/Certificate";
import EmailSignature from "@/components/brand/EmailSignature";
import SocialKit      from "@/components/brand/SocialKit";
import UIStyleGuide   from "@/components/brand/UIStyleGuide";

function Section({ id, title, subtitle, children }: {
  id: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-20">
      <div className="mb-8">
        <p className="text-xs text-[#1457d6] uppercase tracking-[0.3em] font-semibold mb-2">{subtitle}</p>
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function PreviewBox({ bg, label, children, className = "" }: {
  bg: string; label: string; children: React.ReactNode; className?: string;
}) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] ${className}`}>
      <div className="flex items-center justify-center py-12 px-8" style={{ background: bg, minHeight: 150 }}>
        {children}
      </div>
      <div className="px-4 py-2.5 bg-[rgba(255,255,255,0.03)] border-t border-[rgba(255,255,255,0.06)]">
        <span className="text-xs text-[#7a92b4]">{label}</span>
      </div>
    </div>
  );
}

export default function BrandKit() {
  return (
    <div className="min-h-screen bg-[#060e1e] text-white">
      {/* Top nav */}
      <div className="sticky top-0 z-40 glass border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <ExyraLogoImage variant="full" height={44} priority />
          <div className="hidden md:flex gap-6 text-xs text-[#7a92b4]">
            {["Logo","Colors","Typography","Cards","Docs","Social","UI"].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ── HERO ── */}
        <div className="text-center mb-20">
          <p className="text-xs text-[#1457d6] uppercase tracking-[0.4em] font-semibold mb-8">
            Official Brand Identity System
          </p>
          <div className="flex justify-center mb-8">
            <ExyraLogoImage variant="full" height={180} priority />
          </div>
          <p className="text-[#7a92b4] text-lg max-w-xl mx-auto">
            AI Engineering · Cloud & DevOps · LLMOps · AWS & Kubernetes
          </p>
        </div>

        {/* ── 1. MASTER LOGO ── */}
        <Section id="logo" title="Master Logo" subtitle="01 — Logo System">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <PreviewBox bg="#060e1e" label="Primary — Dark Background">
              <ExyraLogoImage variant="full" height={130} />
            </PreviewBox>
            <PreviewBox bg="#f4f8ff" label="Primary — Light Background">
              <ExyraLogoImage variant="full" height={130} />
            </PreviewBox>
            <PreviewBox bg="#060e1e" label="Navbar / Header Size (52px)">
              <ExyraLogoImage variant="full" height={52} />
            </PreviewBox>
            <PreviewBox bg="#ffffff" label="Letterhead / Doc Header (48px)">
              <ExyraLogoImage variant="full" height={48} />
            </PreviewBox>
            <PreviewBox bg="#1457d6" label="Brand Blue Background">
              <ExyraLogoImage variant="full" height={90} />
            </PreviewBox>
            <PreviewBox bg="linear-gradient(135deg,#060e1e,#0b1a32)" label="Certificate / Card (120px)">
              <ExyraLogoImage variant="full" height={120} />
            </PreviewBox>
          </div>

          {/* Sizes reference */}
          <div className="glass rounded-2xl p-8 border border-[rgba(255,255,255,0.07)]">
            <p className="text-xs text-[#4a627e] uppercase tracking-wider mb-6">
              Logo Scale Reference
            </p>
            <div className="flex flex-wrap gap-8 items-end">
              {[24, 36, 48, 64, 80, 100, 140].map(s => (
                <div key={s} className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center" style={{ height: 140 }}>
                    <ExyraLogoImage variant="full" height={s} />
                  </div>
                  <span className="text-xs text-[#4a627e] font-mono">{s}px</span>
                </div>
              ))}
            </div>
          </div>

          {/* Usage rules */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "✅ Do",     items: ["Use on dark or white backgrounds","Maintain clear space equal to 'E' height on all sides","Use official PNG files for print","Scale proportionally only"] },
              { title: "❌ Don't", items: ["Stretch or distort the logo","Change the brand colours","Add drop shadows or effects","Use on busy photographic backgrounds without overlay"] },
              { title: "📐 Minimum Size", items: ["Digital: 32px height minimum","Print: 10mm height minimum","Favicon: 16×16px mark only","Email: 80–100px height"] },
            ].map(({ title, items }) => (
              <div key={title} className="glass rounded-xl p-5 border border-[rgba(255,255,255,0.07)]">
                <div className="text-sm font-semibold text-white mb-3">{title}</div>
                <ul className="space-y-1.5">
                  {items.map(i => <li key={i} className="text-xs text-[#7a92b4]">· {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 2. COLOURS ── */}
        <Section id="colors" title="Brand Colour Palette" subtitle="02 — Colours">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { name: "Electric Blue",  hex: "#1457D6", rgb: "20 · 87 · 214",  role: "Primary"    },
              { name: "Neon Cyan",      hex: "#00BCD4", rgb: "0 · 188 · 212",  role: "Accent"     },
              { name: "Neon Green",     hex: "#00E676", rgb: "0 · 230 · 118",  role: "Highlight"  },
              { name: "Deep Navy",      hex: "#060E1E", rgb: "6 · 14 · 30",    role: "Background" },
              { name: "Navy Mid",       hex: "#0B1A32", rgb: "11 · 26 · 50",   role: "Surface"    },
              { name: "Purple Glow",    hex: "#8B5CF6", rgb: "139 · 92 · 246", role: "Accent 2"   },
            ].map(c => (
              <div key={c.hex} className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
                <div className="h-20" style={{ background: c.hex }}/>
                <div className="p-3 bg-[rgba(255,255,255,0.03)]">
                  <div className="text-xs font-semibold text-white mb-0.5">{c.name}</div>
                  <div className="text-xs font-mono text-[#00bcd4]">{c.hex}</div>
                  <div className="text-xs text-[#4a627e]">{c.rgb}</div>
                  <div className="mt-1.5 text-xs px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[#7a92b4] inline-block">{c.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Brand Gradient",  css: "linear-gradient(135deg,#1457d6,#00bcd4,#00e676)" },
              { name: "Deep Space",      css: "linear-gradient(135deg,#060e1e,#0b1a32,#0f2040)" },
              { name: "AI Holographic",  css: "linear-gradient(135deg,#8b5cf6,#1457d6,#00bcd4)" },
            ].map(g => (
              <div key={g.name} className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
                <div className="h-16" style={{ background: g.css }}/>
                <div className="px-4 py-2 bg-[rgba(255,255,255,0.03)]">
                  <div className="text-xs font-semibold text-white">{g.name}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 3. TYPOGRAPHY ── */}
        <Section id="typography" title="Typography System" subtitle="03 — Fonts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { family: "Syne", weight: "800", label: "Display / Logo",       sample: "Build the Future" },
              { family: "Syne", weight: "600", label: "Subheadings",          sample: "AI Engineering Platform" },
              { family: "Inter", weight: "400", label: "Body Text",           sample: "Production-grade AWS, Kubernetes, AI Automation, and LLM Engineering." },
              { family: "monospace", weight: "400", label: "Code / Terminal", sample: "kubectl apply -f exyra-deployment.yaml" },
            ].map(t => (
              <div key={t.sample} className="glass rounded-xl p-6 border border-[rgba(255,255,255,0.07)]">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-[#4a627e]">{t.label}</span>
                  <span className="text-xs text-[#00bcd4] font-mono">{t.family} {t.weight}</span>
                </div>
                <div className="text-white" style={{ fontFamily: t.family, fontWeight: t.weight, fontSize: t.weight === "800" ? 26 : 15 }}>
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 4. BUSINESS CARD ── */}
        <Section id="cards" title="Business Visiting Card" subtitle="04 — Stationery">
          <BusinessCard />
        </Section>

        {/* ── 5. EMPLOYEE ID ── */}
        <Section id="id" title="Employee ID Card" subtitle="05 — ID System">
          <EmployeeID />
        </Section>

        {/* ── 6. LETTERHEAD ── */}
        <Section id="docs" title="Corporate Letterhead" subtitle="06 — Documents">
          <Letterhead />
        </Section>

        {/* ── 7. CERTIFICATE ── */}
        <Section id="cert" title="Certificate System" subtitle="07 — Certifications">
          <Certificate />
        </Section>

        {/* ── 8. EMAIL SIGNATURE ── */}
        <Section id="email" title="Email Signature" subtitle="08 — Digital">
          <EmailSignature />
        </Section>

        {/* ── 9. SOCIAL MEDIA KIT ── */}
        <Section id="social" title="Social Media Kit" subtitle="09 — Social">
          <SocialKit />
        </Section>

        {/* ── 10. UI STYLE GUIDE ── */}
        <Section id="ui" title="UI Component System" subtitle="10 — Design System">
          <UIStyleGuide />
        </Section>

        <p className="text-center text-xs text-[#4a627e] mt-20 pb-8">
          © {new Date().getFullYear()} Exyra Technologies · Brand Identity System v2.0 · Confidential
        </p>
      </div>
    </div>
  );
}
