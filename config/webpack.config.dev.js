/*
 * @Descripttion:
 * @version:
 * @Author: liuC
 * @Date: 2022-03-01 10:47:49
 * @LastEditors: liuC
 * @LastEditTime: 2022-07-30 16:55:39
 */
const webpack = require("webpack");
const readEnv = require("./readEnv");
const env = readEnv("../.env.development");
const { resolve } = require("path");
const path = require("path");

module.exports = {
  output: {
    filename: "scripts/[name].js", // 打包文件名hash随机值
  },

  mode: "development",

  // devtool: "inline-source-map", // 实现精准定位代码报错的行数
  devtool: 'cheap-module-source-map',

  devServer: {
    static: resolve(__dirname, "./dist"),
    // static: {
    //   directory: path.join(__dirname, "../dist"),
    //   watch: true,
    // },
    compress: true, // Gzip压缩
    // quiet: true, // necessary for FriendlyErrorsPlugin
    port: "10000", // 端口
    host: "localhost", // 域名
    open: true, // 自动开启浏览器
    hot: true, // 是否热更新
    // 本地启动项目，需要配置这个，才能访问根目录
    historyApiFallback: {
      index: "/app.html",
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        ...env,
      },
    }),
  ],
};
