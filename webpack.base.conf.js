const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
}

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: PATHS.src,
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
          {
           loader: 'postcss-loader',
           options: { sourceMap: true, config: { path: `${PATHS.src}/postcss.config.js` } }
         }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({template: `${PATHS.src}/index.html`}),
    new MiniCssExtractPlugin({filename: 'main.css'})
  ]
};
