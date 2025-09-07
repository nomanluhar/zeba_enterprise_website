import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // helps catch potential issues
  swcMinify: true,       // faster + smaller builds (enabled by default in latest Next.js)

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
    ignoreDuringBuilds: false, // fail build on ESLint errors
  },
  typescript: {
    ignoreBuildErrors: false, // fail build on TS errors
  },
};

export default nextConfig;
