/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: false,
  },
  // Enable compression
  compress: true,
  // Experimental features for Next.js 15
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
}

module.exports = nextConfig
