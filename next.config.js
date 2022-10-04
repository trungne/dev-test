/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd234qyqqy4qdru.cloudfront.net',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
