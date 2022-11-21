/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.memegen.link',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
