/** @type {import('next').NextConfig} */
const withTm = require('next-transpile-modules')(['gsap']);

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.sanity.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  }
}

module.exports = withTm(nextConfig)

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}