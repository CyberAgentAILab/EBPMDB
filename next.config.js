//const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
const urlPrefix = '/EBPMDB'
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix }, 
  // exportPathMaps: async function(defaultPathMap, { dev, dir, outDir, distDir, buildID }) {
  //   return {
  //     '/': { page: '/' },
  //     '/doc': { page: '/doc' },
  //   }
  // },
  // trailingSlash: true
}
