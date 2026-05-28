"use client";

// ─────────────────────────────────────────────────────────────────────────────
//  Exyra Technologies — Image-based Logo Component
//
//  Uses the actual master PNG logo files from /public/.
//  Logo file placement:
//    /public/Eyralogo.png   — master logo (mark + EXYRA + TECHNOLOGIES)
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";

export type LogoVariant = "full" | "dark" | "white" | "mark";
export type LogoLayout  = "stacked" | "horizontal" | "mark-only";

interface ExyraLogoImageProps {
  variant?:   LogoVariant;
  height?:    number;
  className?: string;
  priority?:  boolean;
}

const srcMap: Record<LogoVariant, string> = {
  full:  "/Exyralogo.png",
  dark:  "/Exyralogo.png",
  white: "/Exyralogo.png",
  mark:  "/Exyralogo.png",
};

// Exyralogo.png is 1536×1024 — landscape (mark + EXYRA TECHNOLOGIES horizontal)
const ASPECT = 1.5;

export function ExyraLogoImage({
  variant   = "full",
  height    = 80,
  className = "",
  priority  = false,
}: ExyraLogoImageProps) {
  const src   = srcMap[variant];
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src={src}
      alt="Exyra Technologies"
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ objectFit: "contain", display: "block" }}
    />
  );
}
