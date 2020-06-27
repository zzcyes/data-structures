const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    host: '0.0.0.0',
    port: '8080',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
  },
};
