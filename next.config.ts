import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [''],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.teabliss.io.vn",
        pathname: "/storage/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
