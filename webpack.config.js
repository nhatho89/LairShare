var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/lairShare.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
			},
      {
        test: /\.scss$/,
        loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass',
      }

    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx", ".scss", ".css" ]
  }
};
