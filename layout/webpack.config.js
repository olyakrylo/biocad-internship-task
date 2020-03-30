const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "../docs"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.woff$/,
        loader: "file-loader",
        include: path.join(__dirname, 'src/media/fonts'),
        options: {
            limit: 10000,
            name: '[name].[ext]?[hash]',
            outputPath: 'fonts/',
        }
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
        include: path.join(__dirname, 'src/svg'),
        options: {
            limit: 10000,
            name: '[name].[ext]?[hash]',
            outputPath: 'svg/'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};