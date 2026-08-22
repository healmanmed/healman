import type { NextConfig } from "next";

const repoName = "healman";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
