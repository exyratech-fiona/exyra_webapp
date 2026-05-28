import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400","600","700","800"], display: "swap" });

export const metadata: Metadata = {
  title: "Exyra Technologies — AI, Cloud & DevOps Engineering",
  description: "Production-grade AWS, Kubernetes, AI Engineering, and LLM training with real-world enterprise infrastructure.",
  authors: [{ name: "Exyra Technologies" }],
  creator: "Exyra Technologies",
  openGraph: {
    type: "website", locale: "en_US", url: "https://exyra.tech",
    title: "Exyra Technologies — Build the Future with AI, Cloud & DevOps",
    description: "Production-grade AWS, Kubernetes, AI Automation, and LLM Engineering training.",
    siteName: "Exyra Technologies",
  },
  twitter: { card: "summary_large_image", title: "Exyra Technologies", description: "AI, Cloud & DevOps Engineering Platform", creator: "@exyratech" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#060e1e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-[#060e1e] text-white antialiased">{children}</body>
    </html>
  );
}
