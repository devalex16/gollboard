/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
