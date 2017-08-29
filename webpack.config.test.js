const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');
var isCoverage = process.env.NODE_ENV === 'coverage';

module.exports = {
  entry: './tests/www/__all__.js',
  output: {
    path: path.resolve(__dirname, "tests-reports"),
    filename: 'frontend-test-bundle.js'
  },


  devtool: "inline-cheap-module-source-map",
  target: 'node', // webpack should emit node.js compatible code
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder from bundling
  resolve: {
    modules: ['node_modules', 'bower_components'],
    descriptionFiles: ['package.json', 'bower.json'],
    alias: {
      foundation: 'foundation-sites/js/foundation.core'
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery',
    })
  ],

  module: {
    rules: [
      { test: /\.(js)$/, exclude: /bower_components/, include: path.resolve('www'), loader: 'istanbul-instrumenter-loader' },
      { test: /\.html$/, use: [{ loader: 'html-loader', options: { minimize: true }, }], },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'], },
      { test: /\.js$/, exclude: /node_modules/, use: [{ loader: 'babel-loader', query: { compact: false } }], },
      { test: /\.jsx$/, include: path.join(__dirname, 'www/react'), loader: 'babel-loader' },
      { test: /\.(jpg|jpeg|png|svg|gif)$/, loader: 'file-loader?name=[path][name].[ext]' },

      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
      { test: /\.(woff|woff2)$/, use: [{ loader: 'url-loader?prefix=font/&limit=5000' }] },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }] },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }] },
    ]
  }
};