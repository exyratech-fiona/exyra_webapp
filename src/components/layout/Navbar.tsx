"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Programs",
    items: [
      { label: "AI Engineering",         href: "#programs" },
      { label: "AWS Cloud",              href: "#aws-cloud" },
      { label: "DevOps",                 href: "#devops" },
      { label: "Generative AI & LLMOps", href: "#genai" },
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
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(4, 10, 26, 0.97)"
          : "rgba(4, 10, 26, 0.92)",
        borderBottom: "1px solid rgba(0, 188, 212, 0.12)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">

        {/* ── Logo: mark above, EXYRA below — left aligned ── */}
        <a href="#" className="flex flex-col items-start gap-0.5 group shrink-0">
          <Image
            src="/exyralogo-transparent.png"
            alt="Exyra"
            width={64}
            height={42}
            className="object-contain drop-shadow-[0_0_10px_rgba(0,188,212,0.55)]"
          />
          <span
            className="text-base font-black font-display leading-none tracking-[0.18em] uppercase"
            style={{
              background: "linear-gradient(90deg, #00bcd4, #1457d6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Exyra
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.items ? (
              <div key={link.label} className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#a8c0e0] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.06)]">
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
                      className="absolute top-full left-0 mt-1 w-52 rounded-xl border py-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                      style={{
                        background: "rgba(4,10,26,0.97)",
                        border: "1px solid rgba(0,188,212,0.15)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {link.items.map((item) => (
                        <a key={item.label} href={item.href}
                          className="block px-4 py-2.5 text-sm text-[#a8c0e0] hover:text-white hover:bg-[rgba(20,87,214,0.15)] transition-all">
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a key={link.label} href={link.href}
                className="px-4 py-2 text-sm text-[#a8c0e0] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.06)]">
                {link.label}
              </a>
            )
          )}
        </div>

        {/* ── CTA ── */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="text-sm text-[#a8c0e0] hover:text-white transition-colors">Sign in</a>
          <GlowButton href="#contact" size="sm">Book Consultation</GlowButton>
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
