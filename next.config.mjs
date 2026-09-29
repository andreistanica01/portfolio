/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [{
      source: "/api/:path*",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, nosnippet" }],
    }]
  },
}

export default nextConfig
