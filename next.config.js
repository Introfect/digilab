/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    webpack(nextConfig) {
      nextConfig.module.rules.push({
        test: /\.svg$/,
        use: [{loader:'@svgr/webpack',options:{icon:'true'}}],
      })
  
      return nextConfig
    },
  }

