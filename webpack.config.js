const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = (env, argv) => ({
  entry: {
    main: path.resolve(__dirname, 'app/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          allChunks: true,
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jagat Jeevan Sahoo',
      template: path.resolve(__dirname, 'app/index.template.html')
    }),
    new ExtractTextPlugin("styles.css"),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'app/assets/favicon'), to: path.resolve(__dirname, 'build/favicon') },
      { from: path.resolve(__dirname, 'app/assets/locales'), to: path.resolve(__dirname, 'build/locales') },
      { from: path.resolve(__dirname, 'app/assets/resume.pdf'), to: path.resolve(__dirname, 'build/') }
    ]),
    new CleanWebpackPlugin(['build']),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 2222,
    compress: true
  },
  devtool: argv.mode === 'production' ? '' : "source-map",
});

module.exports = config;
