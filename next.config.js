// Note: we provide webpack above so you should not `require` it
const webpack = (config) => {
  const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

  const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

  // config.module.rules.push({
  //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
  //   use: {
  //     loader: 'url-loader',
  //     options: {
  //       limit: 10000,
  //       context: 'src',
  //       name() {
  //         if (process.env.NODE_ENV === 'development') {
  //           return '[path][name].[ext]'
  //         }

  //         return '[contenthash].[ext]'
  //       },
  //       publicPath: `/_next/static/media`,
  //       outputPath: 'static/media',
  //     },
  //   },
  // })

  // https://github.com/vercel/next.js/issues/11164#issuecomment-602204795
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
    // loader: 'url-loader',
    // issuer: {
    //   // nextjs already handles url() in css/sass/scss files
    //   test: /\.\w+(?<!(s?c|sa)ss)$/i,
    // },
    use: [
      {
        loader: 'url-loader',
        options: {
          context: 'src',
          name() {
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]'
            }

            return '[contenthash].[ext]'
          },
          publicPath: `/_next/static/media`,
          outputPath: 'static/media',
          limit: 1000,
        },
      },
    ],
  })

  config.plugins.push(
    new MonacoWebpackPlugin({
      // Add languages as needed...
      languages: ['html', 'css', 'javascript', 'typescript'],
      filename: 'static/[name].worker.js',
    })
  )

  /**
   * Fix locales issue
   * https://github.com/moment/moment/issues/2517#issuecomment-620674018
   */
  config.plugins.push(
    new MomentLocalesPlugin({
      localesToKeep: ['ru'],
    })
  )

  return config
}

module.exports = (phase, defaultConfig) => {
  // if(phase === "phase-development-server") {
  if (phase !== 'phase-production-server') {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    })
    const withTM = require('next-transpile-modules')(['@modxclub'])
    const withCSS = require('@zeit/next-css')

    return withBundleAnalyzer(
      withTM(
        withCSS({
          webpack,
        })
      )
    )
  }

  // else
  return defaultConfig
}
