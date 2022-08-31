const paths = require('./paths');
const TerminalSplashPlugin = require('./plugins/terminal-splash-plugin');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || 'localhost';
const isUnspecifiedHost = HOST === '0.0.0.0' || HOST === '::';
const prettyHost = isUnspecifiedHost ? 'localhost' : HOST;

const config = {
  entry: [],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  stats: 'errors-warnings',
  devServer: {
    static: {
      directory: paths.outputPath,
    },
    compress: true,
    historyApiFallback: true,
    liveReload: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: HOST,
    port: DEFAULT_PORT,
  },
  plugins: [
    new TerminalSplashPlugin({
      options: {
        url: URL_BASE,
      },
    }),
  ],
};

module.exports = config;
