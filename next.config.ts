import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Turbopack configuration for Next.js 16
  turbopack: {},
  // Allow Three.js WASM builds
  webpack(config) {
    config.externals = config.externals || [];
    return config;
  },
};

export default nextConfig;
