import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is deployed as static files, so `next build` must produce a
  // deployable `out` directory (including index.html).
  output: "export",
  trailingSlash: true,
  images: {
    // Static hosts do not run Next's on-demand image optimization endpoint.
    unoptimized: true,
  },
};

export default nextConfig;
