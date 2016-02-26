var path = require('path');
var react = require('react');
var webpack = require('webpack');
 
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'essence.js'),
    vendor: ['react'],
  },
  output: { 
    path: path.resolve(__dirname, '../build/'), 
    publicPath: '/build/',
    filename: 'essence.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        extensions: ['.jsx', '.js'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      chunkName: 'vendor',
      filename: 'react.js',
      children: true,
      minChunks: 2,
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200, // ~50kb
    }),
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
            warnings: false
        },
    }),
  ]
};