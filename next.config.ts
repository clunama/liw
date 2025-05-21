import type { NextConfig } from 'next';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  experimental: {},
  serverRuntimeConfig: {
    port: 9002
  },
  env: {
    PORT: '9002'
  },
  productionBrowserSourceMaps: false,
  compress: true
} as NextConfig;

export default nextConfig;
