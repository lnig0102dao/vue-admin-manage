/*
 * @Descripttion:
 * @version:
 * @Author: liuC
 * @Date: 2022-03-01 10:55:26
 * @LastEditors: liuC
 * @LastEditTime: 2022-07-09 22:56:46
 */
const webpack = require("webpack");
// css压缩插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const readEnv = require("./readEnv");
const env = readEnv("../.env.production");

module.exports = {
  output: {
    filename: "scripts/[name].[contenthash].js", // 打包文件名hash随机值
    // publicPath: "http://localhost:8080/",
    publicPath: "./",
  },

  mode: "production",
  // 优化配置放入optimization
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },

  // 性能方面的配置
  performance: {
    hints: false,
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        ...env,
      },
    }),
  ],
};
