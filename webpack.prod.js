const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new Dotenv({ path: `./.env` })],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/shopmore/latest/',
  },
});
