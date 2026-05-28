"use client";
import { useMousePosition } from "@/hooks/useMousePosition";
import { motion, useSpring } from "framer-motion";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const sx = useSpring(x, { stiffness: 150, damping: 25 });
  const sy = useSpring(y, { stiffness: 150, damping: 25 });

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {/* Ambient cyan glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #00bcd4 0%, transparent 70%)",
          x: sx, y: sy, translateX: "-50%", translateY: "-50%",
        }}
      />
      {/* Smaller violet accent */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          x: sx, y: sy, translateX: "-50%", translateY: "-50%",
        }}
      />
    </motion.div>
  );
}
