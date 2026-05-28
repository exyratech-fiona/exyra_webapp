"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { cmd: "$ kubectl apply -f deployment.yaml", delay: 0 },
  { cmd: 'deployment.apps/exyra-api created', delay: 800, output: true },
  { cmd: "$ docker build -t exyra/llm-agent:latest .", delay: 1800 },
  { cmd: "Step 1/8 : FROM python:3.11-slim", delay: 2600, output: true },
  { cmd: "Step 5/8 : RUN pip install anthropic langchain", delay: 3200, output: true },
  { cmd: "Successfully built a8f2c9d1e4b3", delay: 4000, output: true },
  { cmd: "$ terraform apply -auto-approve", delay: 5200 },
  { cmd: "aws_eks_cluster.exyra: Creating...", delay: 6000, output: true },
  { cmd: "aws_rds_instance.postgres: Still creating...", delay: 6800, output: true },
  { cmd: "Apply complete! Resources: 12 added.", delay: 7800, output: true, success: true },
  { cmd: "$ python rag_pipeline.py --model claude-sonnet-4-6", delay: 9000 },
  { cmd: "Loading embeddings from S3...", delay: 9800, output: true },
  { cmd: "RAG pipeline initialized. Ready for queries.", delay: 10600, output: true, success: true },
];

export function TerminalSimulator() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    const timers: NodeJS.Timeout[] = [];
    commands.forEach((cmd, i) => {
      timers.push(
        setTimeout(() => {
          if (!cmd.output) {
            let j = 0;
            const inputTimer = setInterval(() => {
              setCurrentInput(cmd.cmd.slice(0, j + 1));
              j++;
              if (j >= cmd.cmd.length) {
                clearInterval(inputTimer);
                setCurrentInput("");
                setVisibleLines((prev) => [...prev, i]);
              }
            }, 30);
            timers.push(inputTimer as unknown as NodeJS.Timeout);
          } else {
            setVisibleLines((prev) => [...prev, i]);
          }
        }, cmd.delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="relative rounded-2xl overflow-hidden border border-[rgba(0,188,212,0.2)] shadow-[0_0_40px_rgba(0,188,212,0.1)]">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[rgba(11,26,50,0.9)] border-b border-[rgba(255,255,255,0.06)]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-[#4a627e] font-mono">exyra-terminal — bash</span>
      </div>

      {/* Terminal body */}
      <div className="bg-[rgba(4,10,20,0.95)] p-5 font-mono text-sm min-h-[280px] max-h-[320px] overflow-y-auto">
        <AnimatePresence>
          {visibleLines.map((lineIdx) => {
            const line = commands[lineIdx];
            return (
              <motion.div
                key={lineIdx}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                className={`mb-1 ${
                  line.output
                    ? line.success
                      ? "text-[#00e676]"
                      : "text-[#7a92b4]"
                    : "text-[#00bcd4]"
                }`}
              >
                {line.cmd}
              </motion.div>
            );
          })}
        </AnimatePresence>
        {currentInput && (
          <div className="text-[#00bcd4]">
            {currentInput}<span className="animate-pulse">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
