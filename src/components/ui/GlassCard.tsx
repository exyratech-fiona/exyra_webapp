"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "blue" | "violet" | "none";
  tilt?: boolean;
  hover?: boolean;
  gradient?: boolean;
}

export function GlassCard({ children, className, glow = "cyan", tilt = false, hover = true, gradient = false }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const glowMap = {
    cyan:   "hover:shadow-[0_0_40px_rgba(0,209,255,0.2),0_0_80px_rgba(0,209,255,0.05)]",
    blue:   "hover:shadow-[0_0_40px_rgba(0,123,255,0.2),0_0_80px_rgba(0,123,255,0.05)]",
    violet: "hover:shadow-[0_0_40px_rgba(91,0,255,0.2),0_0_80px_rgba(91,0,255,0.05)]",
    none:   "",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={tilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        "bg-[rgba(10,22,40,0.75)] backdrop-blur-xl",
        "border border-[rgba(0,209,255,0.1)]",
        hover && glowMap[glow],
        gradient && "gradient-border",
        className
      )}
    >
      {/* Subtle inner top shine */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,209,255,0.3)] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
