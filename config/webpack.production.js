const TerserWebpackPlugin = require('terser-webpack-plugin');

const paths = require('./paths');

const config = {
  output: {
    filename: 'assets/js/[name].[chunkhash:8].bundle.js',
    chunkFilename: 'assets/js/[name].[chunkhash:8].js',
    path: paths.outputPath,
    publicPath: `${paths.publicUrlOrPath}/`,
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
};

module.exports = config;
