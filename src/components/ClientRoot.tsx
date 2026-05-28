"use client";
import dynamic from "next/dynamic";

const HomeClient = dynamic(() => import("@/components/HomeClient"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#060e1e] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-2 border-[rgba(20,87,214,0.3)] animate-ping" />
          <div className="absolute inset-2 rounded-full border-2 border-[#1457d6] border-t-transparent animate-spin" />
          <div
            className="absolute inset-4 rounded-full border border-[#00bcd4] border-t-transparent animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
          />
        </div>
        <div className="text-sm text-[#4a627e] font-mono tracking-widest animate-pulse">
          INITIALIZING EXYRA.TECH
        </div>
      </div>
    </div>
  ),
});

export default function ClientRoot() {
  return <HomeClient />;
}
