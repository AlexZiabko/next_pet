import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // пустая конфигурация Turbopack
  turbopack: {},

  // кастомный webpack, если нужен
  webpack: (config, { isServer }) => {
    // любые твои кастомизации
    return config;
  },

  // явно указываем корень для output tracing
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
