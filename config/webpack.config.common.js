/*
 * @Descripttion:
 * @version:
 * @Author: liuC
 * @Date: 2022-03-01 11:18:52
 * @LastEditors: liuC
 * @LastEditTime: 2022-07-30 19:48:15
 */
const webpack = require("webpack");
const path = require("path");
// 使用html-webpack-plugin，实现了自动生成html入口文件和引用js文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const toml = require("toml");
// const yaml = require("yaml");
const json5 = require("json5");

module.exports = {
  // 抽离公共文件的一种方式
  // entry: {
  //   index: {
  //     import: "./src/index.js",
  //     dependOn: "shared",
  //   },
  //   another: {
  //     import: "./src/another-modules.js",
  //     dependOn: "shared",
  //   },
  //   shared: "lodash",
  // },
  entry: {
    index: "./src/index.js",
    another: "./src/another-modules.js",
  },

  output: {
    // filename: "script/[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true, // 在打包之前清理dist文件夹
    assetModuleFilename: "images/[contenthash][ext]",
    // publicPath: "http:localhost:8080/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 模版文件
      filename: "app.html", // 打包后文件名
      // inject: "body", // 将打包的文件放在body里面引入
    }),
    new MiniCssExtractPlugin({
      filename: "style/[contenthash].css",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.png$/,
        // 生成一个单独的文件，导出URL，是资源路径
        type: "asset/resource",
        generator: {
          filename: "images/[contenthash][ext]",
        },
      },
      {
        test: /\.svg$/,
        // 实现了导出一个资源的dataURL
        type: "asset/inline",
      },
      {
        test: /\.txt$/,
        // 导出资源的源代码
        type: "asset/source",
      },
      {
        test: /\.jpg$/,
        // resource和inline类型之间进行自动选择
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 设置文件以那种方式打包，如果超过临界值就打包到文件夹内，如果没超过，就不打包到文件夹内
            maxSize: 4 * 1024 * 1024,
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },

      {
        test: /\.(csv|tsv)$/,
        use: "csv-loader",
      },
      {
        test: /\.xml$/,
        use: "xml-loader",
      },
      // {
      //   test: /\.toml$/,
      //   type: "json",
      //   parser: {
      //     parse: toml.parse,
      //   },
      // },
      // {
      //   test: /\.yaml$/,
      //   type: "json",
      //   parser: {
      //     parse: yaml.parse,
      //   },
      // },
      {
        test: /\.json5$/,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader", // 对js文件进行一个转换
            options: {
              presets: ["@babel/preset-env"],
              plugins: [["@babel/plugin-transform-runtime"]], // 自动将打包好的js文件给改变
            },
          },
          // {
          //   loader: "eslint-loader",
          // },
        ],
      },
    ],
  },

  optimization: {
    // 拆分抽离公共的代码
    splitChunks: {
      // 缓存组，将第三方文件全部缓存起来在浏览器中
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
