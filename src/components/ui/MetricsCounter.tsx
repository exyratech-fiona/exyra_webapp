"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface MetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  color?: "blue" | "cyan" | "green" | "purple";
  duration?: number;
}

export function MetricCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  color = "cyan",
  duration = 2000,
}: MetricProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const started = useRef(false);

  const colorMap = {
    blue: "text-[#1457d6]",
    cyan: "text-[#00bcd4]",
    green: "text-[#00e676]",
    purple: "text-[#8b5cf6]",
  };

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className={`text-4xl font-bold font-display ${colorMap[color]} tabular-nums`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-[#7a92b4] mt-1">{label}</div>
    </motion.div>
  );
}

export function MetricsGrid() {
  const metrics = [
    { value: 2500, suffix: "+", label: "Engineers Trained", color: "cyan" as const },
    { value: 98, suffix: "%", label: "Placement Rate", color: "green" as const },
    { value: 150, suffix: "+", label: "Enterprise Clients", color: "blue" as const },
    { value: 45, suffix: "+", label: "Live Projects", color: "purple" as const },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {metrics.map((m) => (
        <MetricCounter key={m.label} {...m} />
      ))}
    </div>
  );
}
