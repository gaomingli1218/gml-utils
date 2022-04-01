const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // 基本路径   整个文件夹在哪
  publicPath: './',
  // 输出文件目录   文件夹名
  outputDir: 'dist/my-utils',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。    资源放的目录
  assetsDir: "",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径    index的路劲和名字
  indexPath: 'index.html',
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // runtimeCompiler: true, // 运行时版本是否需要编译
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  configureWebpack: config => {
    // js output config
    if (process.env.NODE_ENV === 'production') {
      config.output.filename = '[name].[contenthash:8].js'
      config.output.chunkFilename = '[name].[contenthash:8].js'
    }
    
    // config.mode = 'production'
    //   // 将每个依赖包打包成单独的js文件
    //   let optimization = {
    //     // runtimeChunk: 'single',
    //     splitChunks: {
    //       minSize: 20000, // 依赖包超过20000bit将被单独打包
    //       cacheGroups: {
    //         name: 'chunk-vendors',
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10,
    //         chunks: 'async',
    //       }
    //     }
    //   }
    //   Object.assign(config, {
    //     optimization
    //   })
  },
  chainWebpack: config => {
    // css output config
    // let miniCssExtractPlugin = new MiniCssExtractPlugin(
    //   {
    //     filename: 'gmlcss/[name].[contenthash:8].css',
    //     chunkFilename: 'gmlcss/[name].[contenthash:8].css'
    //   }
    // )
    // config.plugin('extract-css').use(miniCssExtractPlugin)
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap(args => [{
        filename: 'gmlcss/[name].[contenthash:8].css',
        chunkFilename: 'gmlcss/[name].[contenthash:8].css'
      }])
    }
    // image output config
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('file-loader')
      .options({
          name: 'image/[name].[hash:8].[ext]'
      })
  },
  // pluginOptions: {
  //   // 'style-resources-loader': {
  //   //   preProcessor: 'less',
  //   //   patterns: [path.resolve(__dirname, './src/assets/less/global.less')]
  //   // }
  // },
  // pwa: {
  //   // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // },
  // devServer: {
  //   open: true,
  //   host: '0.0.0.0',
  //   port: 8081,
  //   https: false,
  //   hotOnly: false,
  //   proxy : null
	// //proxy: {
	// //	'/api': {
	// //		target: 'http://localhost:3000/api',
	// //		changeOrigin: true,
	// //		pathRewrite: {
	// //			'^/api': ''
	// //		}
	// //	}
	// //}
  // }
}
