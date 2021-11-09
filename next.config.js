/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true
  },
  images: {
    domains: ["firebasestorage.googleapis.com"]
  }
}
