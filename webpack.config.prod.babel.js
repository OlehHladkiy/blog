import "@babel/polyfill";

import path from "path";

import webpack from "webpack";

import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";
import ImageMinPlugin from "imagemin-webpack-plugin";

import autoprefixer from "autoprefixer";

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
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
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
    new CopyWebpackPlugin([{ from: "src/img", to: "img" }]),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["bundle.js"],
    }),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ sourceMap: true }),
      new ImageMinPlugin({
        test: /\.(png|jpe?g|gif|svg)$/,
      }),
    ],
  },
};
