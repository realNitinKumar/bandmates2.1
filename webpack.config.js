const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/users': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
      '/verify': 'http://localhost:3000',
    },
  },
};
