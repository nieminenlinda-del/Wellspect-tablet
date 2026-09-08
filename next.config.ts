import type { NextConfig } from "next";

/** Project-site path on GitHub Pages: https://nieminenlinda-del.github.io/Wellspect-tablet/ */
const basePath = process.env.GITHUB_PAGES === "true" ? "/Wellspect-tablet" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
