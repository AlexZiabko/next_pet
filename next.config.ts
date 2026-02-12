import path from "path";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Настройка алиасов для TypeScript
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  turbopack: {}, // пустой объект — чтобы Turbopack не ругался
};

export default nextConfig;
