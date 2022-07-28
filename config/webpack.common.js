const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');

const commonPaths = require('./common-paths');

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const config = {
  context: commonPaths.context,
  entry: [...commonPaths.entryPoints],
  output: {
    filename: 'assets/js/[name].[hash:8].bundle.js',
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
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
        test: cssRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, module: { mode: 'icss' } } },
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: { mode: 'local' }, localIdentName: '[local]___[hash:base64:5]' },
          },
        ],
      },
      {
        test: sassRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, module: { mode: 'icss' } } },
          'sass-loader',
        ],
      },
      {
        test: sassModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: { mode: 'local' }, localIdentName: '[local]___[hash:base64:5]' },
          },
          'sass-loader',
        ],
      },
      {
        test: lessRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, module: { mode: 'icss' } } },
          'less-loader',
        ],
      },
      {
        test: lessModuleRegex,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: { mode: 'local' }, localIdentName: '[local]___[hash:base64:5]' },
          },
          'less-loader',
        ],
      },

      // this rule handles images
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[hash:8].[ext]',
        },
      },

      // the following 3 rules handle font extraction
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: 'assets/fonts/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file-loader',
        options: {
          mimetype: 'application/font-otf',
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      app: commonPaths.sourcePath,
      react: path.resolve(__dirname, '../', 'node_modules/react'),
      'app-assets': path.resolve(__dirname, '../', 'static/'),
    },
    modules: ['.', 'node_modules'],
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
      ],
    }),
  ],
};

module.exports = config;
