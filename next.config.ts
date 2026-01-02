import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.nowcoder.com",
      },
    ],
  },
};

export default nextConfig;
