const withCSS = require('@zeit/next-css')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  assetPrefix: isProd ? 'https://herlevsen.github.io/cv' : '',
})
