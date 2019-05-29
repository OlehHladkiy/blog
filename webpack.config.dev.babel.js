import "@babel/polyfill";

import webpack from "webpack";

import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import autoprefixer from "autoprefixer";

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
              cacheDirectory: true,
              plugins: [
                "react-hot-loader/babel",
                "babel-plugin-styled-components",
              ],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
            options: { sourceMap: true },
          },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [autoprefixer],
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        devServer: true,
      },
    }),
    new CopyWebpackPlugin([{ from: "public/img", to: "img" }]),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["bundle.js"],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
  ],
};
