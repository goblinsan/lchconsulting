var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/src/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new webpack.BannerPlugin("Copyright LCH Consulting")
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./build",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}
