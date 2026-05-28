"use client";
import { Github, Linkedin, Twitter, Youtube, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Programs: [
    { label: "AI Engineering",        href: "#programs" },
    { label: "AWS Cloud",             href: "#aws-cloud" },
    { label: "Kubernetes & DevOps",   href: "#devops"   },
    { label: "Generative AI",         href: "#genai"    },
    { label: "LLMOps",                href: "#genai"    },
    { label: "MCP Servers",           href: "#programs" },
  ],
  Resources: [
    { label: "Documentation",    href: "#" },
    { label: "Blog",             href: "#" },
    { label: "Case Studies",     href: "#" },
    { label: "Whitepapers",      href: "#" },
    { label: "Architecture",     href: "#architecture" },
  ],
  Company: [
    { label: "About Exyra",     href: "#about"      },
    { label: "Enterprise",      href: "#enterprise" },
    { label: "Careers",         href: "#placement"  },
    { label: "Contact",         href: "#contact"    },
    { label: "Privacy Policy",  href: "#"           },
    { label: "Terms of Service",href: "#"           },
  ],
};

const socials = [
  { icon: Linkedin,  href: "https://www.linkedin.com/company/exyratech/",       label: "LinkedIn"  },
  { icon: Instagram, href: "https://www.instagram.com/exyra_technologies/",    label: "Instagram" },
  { icon: Github,    href: "#",                                                 label: "GitHub"    },
  { icon: Youtube,   href: "#",                                                 label: "YouTube"   },
];

const techBadges = ["AWS","Docker","Kubernetes","Terraform","Claude AI","Llama","FastAPI","Python","ELK","Prometheus","Grafana","Ansible","Redis","PostgreSQL"];

export function Footer() {
  return (
    <footer className="relative border-t overflow-hidden" style={{ background: "#060e1e", borderColor: "rgba(0,209,255,0.08)" }}>
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,209,255,0.3)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6 opacity-90 hover:opacity-100 transition-opacity">
              <Image src="/exyralogo1.png" alt="Exyra Technologies" width={80} height={53} style={{ objectFit: "contain" }} />
            </a>
            <p className="text-sm text-[#4a627e] font-sans leading-relaxed mb-6 max-w-xs">
              Building the next generation of AI, Cloud, and DevOps engineers with enterprise-grade, real-world infrastructure.
            </p>
            <div className="space-y-2 mb-6">
              {[
                { icon: Mail,    text: "exyratech@gmail.com"                                },
                { icon: Phone,   text: "+91 94445 28270"                                   },
                { icon: MapPin,  text: "Near Junction, Pollachi Main Rd, Malumichampatti, Tamil Nadu 641050, India" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-[#4a627e] font-sans">
                  <Icon size={13} className="text-[#00bcd4] shrink-0" />
                  {text}
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:border-[rgba(0,209,255,0.4)] hover:text-[#00bcd4]"
                  style={{ background: "rgba(0,209,255,0.05)", border: "1px solid rgba(0,209,255,0.1)", color: "#4a627e" }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-[#e2eaf6] font-display tracking-wider mb-4">{category.toUpperCase()}</h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-[#4a627e] font-sans hover:text-[#00bcd4] transition-colors duration-200">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 py-6 border-t border-b" style={{ borderColor: "rgba(0,209,255,0.06)" }}>
          <span className="text-xs font-sans text-[#4a627e] mr-2 flex items-center">POWERED BY:</span>
          {techBadges.map((b) => (
            <span key={b} className="text-xs px-3 py-1 rounded-full font-sans"
              style={{ background: "rgba(0,209,255,0.04)", border: "1px solid rgba(0,209,255,0.12)", color: "#4a627e" }}>
              {b}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-xs text-[#4a627e] font-sans">© {new Date().getFullYear()} Exyra Technologies. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs font-sans text-[#4a627e]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
