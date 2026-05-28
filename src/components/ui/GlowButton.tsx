"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export function GlowButton({
  children, variant = "primary", size = "md",
  className, onClick, href, disabled,
}: GlowButtonProps) {

  const base = "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group font-sans tracking-wide";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: "text-white",
    secondary: "text-[#00bcd4] border border-[rgba(0,209,255,0.35)] hover:border-[#00bcd4]",
    ghost: "text-[#7a92b4] hover:text-white border border-transparent hover:border-[rgba(0,209,255,0.15)]",
    neon: "text-[#00bcd4] border border-[#00bcd4]",
  };

  const classes = cn(base, sizes[size], variants[variant], disabled && "opacity-40 cursor-not-allowed", className);

  const content = (
    <>
      {variant === "primary" && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-[#00bcd4] via-[#1457d6] to-[#8b5cf6]" />
          <span className="absolute inset-0 bg-gradient-to-r from-[#00bcd4] via-[#1457d6] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[rgba(0,209,255,0.8)] to-transparent" />
          </span>
          <span className="absolute -inset-1 bg-gradient-to-r from-[#00bcd4] via-[#1457d6] to-[#8b5cf6] opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300 rounded-xl" />
        </>
      )}
      {(variant === "secondary" || variant === "neon") && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-[rgba(0,209,255,0.08)] to-[rgba(91,0,255,0.08)] opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute -inset-1 bg-gradient-to-r from-[#00bcd4] to-[#8b5cf6] opacity-0 group-hover:opacity-15 blur-lg transition-all duration-300 rounded-xl" />
        </>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes}>
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button onClick={onClick} disabled={disabled} whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }} className={classes}>
      {content}
    </motion.button>
  );
}
