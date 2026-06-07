"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Programs",
    items: [
      { label: "AWS Cloud",        href: "#aws-cloud"       },
      { label: "DevOps",           href: "#devops"          },
      { label: "AWS + DevOps",     href: "#aws-devops"      },
      { label: "Cloud Computing",  href: "#cloud-computing" },
      { label: "Linux & Shell",    href: "#linux"           },
      { label: "Web Development",  href: "#web-dev"         },
      { label: "AI / ML",          href: "#ai-ml"           },
      { label: "Generative AI",    href: "#genai"           },
      { label: "Human Resources",  href: "#hr"              },
    ],
  },
  { label: "Projects",   href: "#projects"   },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Careers",    href: "#placement"  },
  { label: "About",      href: "#about"      },
];

export function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(4, 10, 26, 0.98)"
          : "rgba(4, 10, 26, 0.85)",
        borderBottom: scrolled
          ? "1px solid rgba(0, 188, 212, 0.18)"
          : "1px solid rgba(0, 188, 212, 0.08)",
        backdropFilter: "blur(24px)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(0,188,212,0.1)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[72px]">

        {/* ── Logo ── */}
        <a href="#" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/exyra-logo.png"
            alt="Exyra Technologies"
            className="transition-all duration-300 brightness-[0.92] hover:brightness-105 hover:scale-[1.04]"
            style={{ height: "48px", width: "auto", display: "block" }}
          />
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) =>
            link.items ? (
              <div key={link.label} className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1.5 px-5 py-2.5 text-[14.5px] font-semibold tracking-[0.01em] text-[#b8d0ee] hover:text-white transition-all duration-200 rounded-lg hover:bg-[rgba(255,255,255,0.05)]">
                  {link.label}
                  <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === link.label && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-[420px] rounded-xl border p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                      style={{
                        background: "rgba(4,10,26,0.97)",
                        border: "1px solid rgba(0,188,212,0.15)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {link.items.map((item) => (
                          <a key={item.label} href={item.href}
                            className="block px-4 py-2.5 text-[13px] text-[#a8c0e0] hover:text-white hover:bg-[rgba(20,87,214,0.15)] rounded-lg transition-all">
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a key={link.label} href={link.href}
                className="px-5 py-2.5 text-[14.5px] font-semibold tracking-[0.01em] text-[#b8d0ee] hover:text-white transition-all duration-200 rounded-lg hover:bg-[rgba(255,255,255,0.05)]">
                {link.label}
              </a>
            )
          )}
        </div>

        {/* ── CTA ── */}
        <div className="hidden lg:flex items-center gap-4">
          <GlowButton href="#contact" size="sm">Book Consultation →</GlowButton>
        </div>

        {/* ── Mobile toggle ── */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-white"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ borderTop: "1px solid rgba(0,188,212,0.1)", background: "rgba(4,10,26,0.98)" }}
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) =>
                link.items ? (
                  <div key={link.label}>
                    <div className="text-xs text-[#4a627e] uppercase tracking-wider px-3 py-2">{link.label}</div>
                    {link.items.map((item) => (
                      <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-[#a8c0e0] hover:text-white rounded-lg hover:bg-[rgba(255,255,255,0.05)]">
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-[#a8c0e0] hover:text-white rounded-lg hover:bg-[rgba(255,255,255,0.05)]">
                    {link.label}
                  </a>
                )
              )}
              <div className="pt-3 border-t border-[rgba(255,255,255,0.06)]">
                <GlowButton href="#contact" className="w-full justify-center">Book Consultation</GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
