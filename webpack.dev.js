const webpack = require('webpack');
const path = require('path');


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    hot: true
  }
};