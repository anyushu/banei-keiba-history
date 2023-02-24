/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = withBundleAnalyzer({
  reactStrictMode: true,
  // images: {
  //   unoptimized: true,
  // },
})

module.exports = config
