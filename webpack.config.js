var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true,
  //   contentBase: './build/',
  //   port: 3000
  // },
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:3000',
    path.resolve(__dirname, './src/index.jsx')
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
    new CopyWebpackPlugin([
      { from: './index.html', to: 'index.html' },
      // { from: './src/index.css', to: 'index.css' }
    ]),
  ]
};
