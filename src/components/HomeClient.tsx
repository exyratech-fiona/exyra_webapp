"use client";
import { useLenis } from "@/hooks/useLenis";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { DevOps } from "@/components/sections/DevOps";
import { GenAI } from "@/components/sections/GenAI";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Enterprise } from "@/components/sections/Enterprise";
import { Testimonials } from "@/components/sections/Testimonials";
import { Placement } from "@/components/sections/Placement";
import { Contact } from "@/components/sections/Contact";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ChatWidget } from "@/components/ui/ChatWidget";

export default function HomeClient() {
  useLenis();

  return (
    <main className="relative bg-[#060e1e] min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <DevOps />
      <GenAI />
      <Projects />
      <TechStack />
      <Enterprise />
      <Testimonials />
      <Placement />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
