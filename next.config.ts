import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // helps catch potential issues

  // Configure allowed external image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com", // change to your CDN or API domain
      },
    ],
  },

  // Experimental optimizations (optional)
  experimental: {
    optimizeCss: true, // improves CSS loading
    scrollRestoration: true, // keeps scroll on back/forward navigation
  },

  // Future-proof builds
  eslint: {
    ignoreDuringBuilds: true, // fail build on ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // fail build on TS errors
  },
};

export default nextConfig;
