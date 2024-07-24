const path = require("path"); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
// const ESLintPlugin = require("eslint-webpack-plugin");
// var PrettierPlugin = require("prettier-webpack-plugin");
module.exports = (env) => {
  return {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.js"), // Точка входа для сборки проекта

    output: {
      // Имя выходного файла сборки
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js", // Путь для выходного файла сборки
      clean: true,
    },
    watchOptions: {
      poll: true,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          type: "asset/resource",
          generator: {
            filename: path.join("icons", "[name].[contenthash][ext]"),
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: (pathData) => {
          if (pathData.chunk.name === "main") {
            return "index.css";
          }

          return "[name].css";
        },
      }),
      new webpack.ProgressPlugin(),
    ],

    devServer: {
      port: 9000,
      open: true,
      static: {
        directory: path.join(__dirname, "/"),
      },
    },
  };
};
