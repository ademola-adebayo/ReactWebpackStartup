const webpack = require('webpack');
const path = require('path');


module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    open: true,
    hot: true,
    overlay: true
  }
};