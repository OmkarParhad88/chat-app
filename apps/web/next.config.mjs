/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  reactStrictMode: false,
  experimental: {
    cacheLife: {
      dashboard: {
        stale: 60,      // Serve stale data for 60 seconds
        revalidate: 120, // Revalidate every 120 seconds
        expire: 3600,    // Hard expire after 1 hour
      },
    },
  },
}

export default nextConfig
