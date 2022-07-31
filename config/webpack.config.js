/*
 * @Descripttion:
 * @version:
 * @Author: liuC
 * @Date: 2022-03-01 11:25:02
 * @LastEditors: liuC
 * @LastEditTime: 2022-07-07 22:33:28
 */
// 引入webpack-merge
const { merge } = require("webpack-merge");
// 导入webpack公共配置文件
const commonConfig = require("./webpack.config.common");
// 导入正式环境和开发环境配置文件
const productionConfig = require("./webpack.config.prod");
const developmentConfig = require("./webpack.config.dev");

module.exports = (env, args) => {
  // console.log(args.mode === "development");
  switch (args.mode) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      return new Error("No matching configuration was found");
  }
};
