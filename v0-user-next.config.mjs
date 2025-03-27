/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
    domains: ['res.cloudinary.com'], // Add Cloudinary domain for image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  // If deploying to a GitHub Pages project site (username.github.io/repo-name)
  // Change this to your repository name
  basePath: process.env.GITHUB_ACTIONS ? '/Ultimate-Portfolio' : '',
  trailingSlash: true,
  // Disable React StrictMode for production to avoid double-rendering
  reactStrictMode: false,
  // Improve performance with these experimental features
  experimental: {
    optimizeCss: true, // Optimize CSS for production
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // Add custom headers for better performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig;

