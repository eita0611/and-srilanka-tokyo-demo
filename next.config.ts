import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [72, 80],
  },
};

export default nextConfig;
