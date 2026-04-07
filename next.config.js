const urlPrefix = '/EBPMDB'
/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  transpilePackages: ["next-image-export-optimizer"],
  images: {
    loader: "custom",
    imageSizes: [1080],
    deviceSizes: [1080],
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "false",
    nextImageExportOptimizer_generateAndUseBlurImages: "false",
  },
}
