/** @type {import('next').NextConfig} */

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {  
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  // exportPathMaps: async function(defaultPathMap, { dev, dir, outDir, distDir, buildID }) {
  //   return {
  //     '/': { page: '/' },
  //     '/doc': { page: '/doc' },
  //   }
  // },
  // trailingSlash: true
}
