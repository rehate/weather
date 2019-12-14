const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './fancy-weather/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'fancy-weather/dist'),
    publicPath: 'fancy-weather/dist/',
  },
  devServer: {
    openPage: './fancy-weather',
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node-modules/',
      },
    ],
  },
};
