const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./config/webpack.common.js');
require('dotenv').config();

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

module.exports = ({ env, addon }) => {
  const targetEnv = env || 'production';

  require('dotenv').config({ path: path.resolve(process.cwd(), `.env.${targetEnv}`) });
  const envConfig = require(`./config/webpack.${targetEnv}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
};
