"use client";
import { ExyraLogo } from "@/components/ui/ExyraLogo";
import type { LogoVariant, LogoLayout } from "@/components/ui/ExyraLogo";

type UseCase = { label: string; bg: string; text: string; variant: LogoVariant; layout: LogoLayout; height: number };

const useCases: UseCase[] = [
  { label: "Certificate — Dark",    bg: "#060e1e", text: "#fff",     variant: "color", layout: "stacked",    height: 120 },
  { label: "Certificate — Light",   bg: "#f8faff", text: "#060e1e", variant: "dark",  layout: "stacked",    height: 120 },
  { label: "Offer Letter Header",   bg: "#ffffff", text: "#060e1e", variant: "dark",  layout: "horizontal", height: 48  },
  { label: "Visiting Card — Dark",  bg: "#060e1e", text: "#fff",     variant: "color", layout: "horizontal", height: 36  },
  { label: "Visiting Card — White", bg: "#ffffff", text: "#060e1e", variant: "dark",  layout: "horizontal", height: 36  },
  { label: "ID Card Banner",        bg: "#1457d6", text: "#fff",     variant: "white", layout: "horizontal", height: 44  },
  { label: "Email Signature",       bg: "#ffffff", text: "#060e1e", variant: "dark",  layout: "horizontal", height: 32  },
  { label: "App Icon / Favicon",    bg: "#060e1e", text: "#fff",     variant: "color", layout: "mark-only",  height: 64  },
  { label: "Mono — White bg",       bg: "#f4f6fb", text: "#060e1e", variant: "mono",  layout: "horizontal", height: 40  },
  { label: "Mono — Dark bg",        bg: "#0f1827", text: "#fff",     variant: "color", layout: "horizontal", height: 40  },
  { label: "Stacked — Dark small",  bg: "#060e1e", text: "#fff",     variant: "color", layout: "stacked",    height: 90  },
  { label: "Stacked — White small", bg: "#ffffff", text: "#060e1e", variant: "dark",  layout: "stacked",    height: 90  },
];

function downloadSVG(svgEl: SVGElement | null, name: string) {
  if (!svgEl) return;
  const serializer = new XMLSerializer();
  const svgStr = serializer.serializeToString(svgEl);
  const blob = new Blob([svgStr], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `exyra-logo-${name}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-[#060e1e] py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="mb-16">
          <p className="text-xs text-[#1457d6] uppercase tracking-[0.3em] mb-3 font-semibold">Brand Identity</p>
          <h1 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
            Exyra Logo Guidelines
          </h1>
          <p className="text-[#7a92b4] text-lg">
            Vector SVG — crisp at any size. Right-click any logo to save as SVG, or click the download button.
          </p>
        </div>

        {/* Primary horizontal logo */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#4a627e] mb-6">Primary Logo</h2>
          <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] overflow-hidden">
            <div className="bg-[#060e1e] flex items-center justify-center py-16 px-12">
              <ExyraLogo variant="color" layout="horizontal" height={56} />
            </div>
            <div className="bg-[#f8faff] flex items-center justify-center py-16 px-12 border-t border-[rgba(0,0,0,0.08)]">
              <ExyraLogo variant="color" layout="horizontal" height={56} />
            </div>
          </div>
        </section>

        {/* All use cases */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#4a627e] mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {useCases.map((uc) => (
              <div
                key={uc.label}
                className="rounded-xl border border-[rgba(255,255,255,0.07)] overflow-hidden"
              >
                {/* Preview */}
                <div
                  className="flex items-center justify-center py-10 px-8"
                  style={{ background: uc.bg, minHeight: 110 }}
                >
                  <ExyraLogo variant={uc.variant} layout={uc.layout} height={uc.height} />
                </div>
                {/* Label bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[rgba(255,255,255,0.03)] border-t border-[rgba(255,255,255,0.06)]">
                  <span className="text-xs text-[#7a92b4]">{uc.label}</span>
                  <span className="text-xs font-mono text-[#4a627e]">{uc.layout} · {uc.variant}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Icon variants row */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#4a627e] mb-6">Icon Mark — All Sizes</h2>
          <div className="flex flex-wrap gap-6 items-end p-8 rounded-2xl bg-[#0b1a32] border border-[rgba(255,255,255,0.07)]">
            {[16, 24, 32, 48, 64, 96, 128].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <ExyraLogo variant="color" layout="mark-only" height={s} />
                <span className="text-xs text-[#4a627e] font-mono">{s}px</span>
              </div>
            ))}
          </div>
        </section>

        {/* Clear space rule */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#4a627e] mb-6">Clear Space & Minimum Size</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-xl p-6 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)]">
              <p className="text-xs text-[#4a627e] mb-4 uppercase tracking-wider">Minimum — Print</p>
              <ExyraLogo variant="color" layout="horizontal" height={24} />
              <p className="text-xs text-[#7a92b4] mt-3">24px / 6.35mm</p>
            </div>
            <div className="rounded-xl p-6 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)]">
              <p className="text-xs text-[#4a627e] mb-4 uppercase tracking-wider">Recommended — Digital</p>
              <ExyraLogo variant="color" layout="horizontal" height={40} />
              <p className="text-xs text-[#7a92b4] mt-3">40px / 10.6mm</p>
            </div>
            <div className="rounded-xl p-6 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)]">
              <p className="text-xs text-[#4a627e] mb-4 uppercase tracking-wider">Hero / Certificate</p>
              <ExyraLogo variant="color" layout="horizontal" height={56} />
              <p className="text-xs text-[#7a92b4] mt-3">56px+</p>
            </div>
          </div>
        </section>

        {/* Colour palette */}
        <section>
          <h2 className="text-sm uppercase tracking-widest text-[#4a627e] mb-6">Brand Colours</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Electric Blue",   hex: "#1457D6", role: "Primary" },
              { name: "Neon Cyan",       hex: "#00BCD4", role: "Accent" },
              { name: "Neon Green",      hex: "#00E676", role: "Highlight" },
              { name: "Dark Navy",       hex: "#060E1E", role: "Background" },
              { name: "Off White",       hex: "#E2EAF6", role: "Text" },
            ].map((c) => (
              <div key={c.hex} className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
                <div className="h-16" style={{ background: c.hex }} />
                <div className="p-3 bg-[rgba(255,255,255,0.03)]">
                  <p className="text-xs font-semibold text-white">{c.name}</p>
                  <p className="text-xs font-mono text-[#7a92b4]">{c.hex}</p>
                  <p className="text-xs text-[#4a627e]">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="text-center text-xs text-[#4a627e] mt-16">
          © {new Date().getFullYear()} Exyra Technologies · All logos are SVG vectors — right-click to save
        </p>
      </div>
    </div>
  );
}
