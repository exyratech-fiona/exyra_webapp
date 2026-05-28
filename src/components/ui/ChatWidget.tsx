"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const suggestedQuestions = [
  "What AWS programs do you offer?",
  "Tell me about AI Engineering",
  "How does LLM training work?",
];

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const botReplies: Record<string, string> = {
  default: "Hi! I'm Exyra AI Assistant. I can help you learn about our programs in AWS Cloud, Kubernetes, AI Engineering, and LLMOps. What would you like to know?",
  aws: "Our AWS programs cover Solutions Architecture, DevOps on AWS, EKS/ECS, Bedrock, and cloud-native infrastructure design. We offer hands-on labs with real AWS accounts.",
  ai: "Our AI Engineering program covers LLM fine-tuning, RAG systems, AI Agents, Claude API integration, Llama deployment, MCP Servers, and production MLOps pipelines.",
  llm: "LLM training involves pretraining on large corpora, fine-tuning with instruction datasets, and RLHF/DPO alignment. We teach practical fine-tuning on models like Llama using LoRA/QLoRA.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: botReplies.default, sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = botReplies.default;
      if (lower.includes("aws") || lower.includes("cloud")) reply = botReplies.aws;
      else if (lower.includes("ai") || lower.includes("engineering")) reply = botReplies.ai;
      else if (lower.includes("llm") || lower.includes("train")) reply = botReplies.llm;

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: reply, sender: "bot" }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#1457d6] to-[#00bcd4] shadow-glow-blue flex items-center justify-center text-white"
        aria-label="Open AI chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#00e676] rounded-full border-2 border-[#060e1e]" />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl overflow-hidden border border-[rgba(0,188,212,0.2)] shadow-[0_0_60px_rgba(0,0,0,0.6)]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0b1a32] to-[#0f2040] px-4 py-3 border-b border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1457d6] to-[#00bcd4] flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Exyra AI</div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#00e676] rounded-full animate-pulse" />
                    <span className="text-xs text-[#00e676]">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-[rgba(6,14,30,0.95)] h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-br from-[#1457d6] to-[#00bcd4] text-white"
                      : "glass text-[#c8d8f0]"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="glass px-3 py-2 rounded-xl">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className="w-1.5 h-1.5 bg-[#00bcd4] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested */}
            <div className="bg-[rgba(6,14,30,0.95)] px-3 pb-2">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="shrink-0 text-xs px-2.5 py-1.5 rounded-lg border border-[rgba(0,188,212,0.3)] text-[#00bcd4] hover:bg-[rgba(0,188,212,0.1)] transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="bg-[rgba(6,14,30,0.95)] px-3 pb-3">
              <div className="flex gap-2 items-center glass rounded-xl px-3 py-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-[#4a627e] outline-none"
                />
                <button
                  onClick={() => sendMessage(input)}
                  className="text-[#00bcd4] hover:text-white transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
