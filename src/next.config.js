/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_PAGES ? '/EBPMDB' : '',
  // exportPathMaps: async function(defaultPathMap, { dev, dir, outDir, distDir, buildID }) {
  //   return {
  //     '/': { page: '/' },
  //     '/doc': { page: '/doc' },
  //   }
  // },
  // trailingSlash: true
}
