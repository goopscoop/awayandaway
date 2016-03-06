
var webpack = require('webpack');
module.exports = {
  entry: [
    'babel-polyfill',
    // 'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
    sourceMaps: true,
  },
  module: {
    loaders: [
      { // JS LOADER
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets:['es2015', 'react', 'stage-0']
        }
      },
      { // CSS LOADER
        test: /\.css$/, loader: "style!css"
      },
      { // IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  }
};