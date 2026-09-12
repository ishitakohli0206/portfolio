import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is deployed as static files, so `next build` must produce a
  // deployable `out` directory (including index.html).
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
