const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const paths = require('./paths');

const config = {
  output: {
    filename: 'assets/js/[name].[chunkhash:8].bundle.js',
    chunkFilename: 'assets/js/[name].[chunkhash:8].js',
    path: paths.outputPath,
    publicPath: `${PUBLIC_URL}/`,
  },
  mode: 'production',
  optimization: {
    emitOnErrors: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new MiniCssWebpackPlugin({
      filename: 'assets/css/[name].[chunkhash].css',
      chunkFilename: 'assets/css/[id].[chunkhash].css',
    }),
  ],
};

module.exports = config;
