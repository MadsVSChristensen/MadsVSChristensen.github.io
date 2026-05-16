import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname } from "path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (user site → served at domain root, no basePath).
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Pin the workspace root so a parent-directory lockfile can't be inferred.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
