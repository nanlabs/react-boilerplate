const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')

const commonPaths = require('./common-paths');

const config = {
  context: commonPaths.context,
  entry: [
    ...commonPaths.entryPoints,
  ],
  output: {
    filename: 'assets/js/[name].[hash:8].bundle.js',
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'eslint-loader',
      options: {
        failOnWarning: false,
        failOnError: true,
      },
    },
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
      },
    },

    // these rules handle styles
    {
      test: /\.css$/,
      use: [{ loader: MiniCssWebpackPlugin.loader }, { loader: 'css-loader', options: { importLoaders: 1 } }],
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        { loader: MiniCssWebpackPlugin.loader },
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'sass-loader',
      ],
    },
    {
      test: /\.less$/,
      use: [
        { loader: MiniCssWebpackPlugin.loader },
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'less-loader',
      ],
    },

    // this rule handles images
    {
      test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[chunkhash].[ext]',
      },
    },

    // the following 3 rules handle font extraction
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/font-woff',
        name: 'assets/fonts/[name].[chunkhash].[ext]',
      },
    },
    {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[chunkhash].[ext]',
      },
    },
    {
      test: /\.otf(\?.*)?$/,
      loader: 'file-loader',
      options: {
        mimetype: 'application/font-otf',
        name: 'assets/fonts/[name].[ext]',
      },
    }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      app: commonPaths.sourcePath,
      'app-assets': path.resolve(__dirname, '../', 'static/'),
      '../../theme.config$': path.resolve(__dirname, '../', 'src/theme/semantic-ui/theme.config'),
      heading: path.resolve(__dirname, '../', 'src/semantic/heading.less'),
    },
    modules: [
      '.',
      'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: commonPaths.root,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: commonPaths.locales,
          to: 'locales',
          toType: 'dir',
        },
      ]
    }),
  ],
};

module.exports = config;
