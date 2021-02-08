/**
 * Created by ErgoSphere on 19-1-10 .
 */
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  // 通过这个选项可以显式转译一个依赖。//barcode?
  transpileDependencies: [
    /* string or regex */
  ],
  productionSourceMap: true,
  configureWebpack: config => {
    return {
      optimization: {
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            utilities: {
              test: /[\\/]src[\\/]utilities[\\/]/,
              minSize: 0
            }
          }
        }
      },
      plugins: [
        new CompressionWebpackPlugin({
          test: /\.(js|css)(\?.*)?$/i
        })
      ]
    };
  },
  chainWebpack: config => {
    config.resolve.symlinks(true);
    return config;
  },
  css: {
    extract: false, //热更新为false, 不需要为true
    sourceMap: false,
    loaderOptions: {},
    requireModuleExtension: true
  },
  parallel: require("os").cpus().length > 1,
  pwa: {},
  devServer: {
    port: 11021
  },

  pluginOptions: {}
};
