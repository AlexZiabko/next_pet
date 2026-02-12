import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // пустая конфигурация Turbopack
  turbopack: {},

  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },

  // явно указываем корень для output tracing
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
