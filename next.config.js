/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Images are pre-optimized via scripts/optimize-images.mjs
  },
};

module.exports = nextConfig;
