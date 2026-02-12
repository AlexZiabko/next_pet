import type { NextConfig } from "next";
import path from "path";

const nextConfig = {
  experimental: {
    turbopack: false,
  },
  webpack: (config: any) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
