const { merge } = require('webpack-merge');

const commonConfig = require('./config/webpack.common.js');

/**
 * getAddons is a function that returns valid addon modules
 *
 * @param {string} addons - List of addons separated by comma
 * @returns required addons modules
 */
const getAddons = (addons = '') =>
  addons
    .split(',')
    .filter(Boolean)
    .map((name) => require(`./config/addons/webpack.${name}.js`));

module.exports = ({ addon }) => {
  const targetEnv = process.env.NODE_ENV || 'production';

  const envConfig = require(`./config/webpack.${targetEnv}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
};
