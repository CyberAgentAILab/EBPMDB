/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  basePath: process.env.BASE_PATH || '',

  // exportPathMaps: async function(defaultPathMap, { dev, dir, outDir, distDir, buildID }) {
  //   return {
  //     '/': { page: '/' },
  //     '/doc': { page: '/doc' },
  //   }
  // },
  // trailingSlash: true
}
