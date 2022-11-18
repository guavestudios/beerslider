const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
                implementation: require("sass"),
            }
          }
        ]
      }
    ]
  },
  plugins : [
    new HTMLWebpackPlugin({
      inject: false,
      title: 'BeerSlider',
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
}
