import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/prowse-phillips-guide" : "",
  assetPrefix: isProd ? "/prowse-phillips-guide/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
