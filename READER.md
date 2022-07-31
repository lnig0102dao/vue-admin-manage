<!--
 * @Descripttion:
 * @version:
 * @Author: liuC
 * @Date: 2022-06-05 11:02:02
 * @LastEditors: liuC
 * @LastEditTime: 2022-07-31 21:36:51
-->

### 安装 webpack 相关包

npm i webpack webpack-cli html-webpack-plugin webpack-dev-server --save-dev

### 查看更加详细的打包内容

webpack --stats detailed

### 安装 css 相关包

npm install node-sass css-loader styles-loader sass-loader sass -D

### 安装 css 抽离 压缩代码插件(必须在 webpack5 才能使用)

npm install mini-css-extract-plugin -D
npm install css-minimizer-webpack-plugin -D

### 安装插件，解决 csv xml 文件引入

npm install csv-loader xml-loader -D

### 安装解析包

npm install toml yaml json5 -D

### babel-loader 相关插件

npm install babel-loader @babel/core @babel/preset-env -D

### 进一步安装适配 babel-loader 相关插件(因为 babel 并不能将 es6 的代码转换 es5)

npm install @babel/runtime @babel/plugin-transform-runtime -D

### 代码分离 拆分更小的 js 文件,便于更好的体验效果

### 第一种方法 入口位置 entry 做配置

<!-- entry: {
index: './src/index.js',
another: './src/another.js'
}

output: { filename: '[name].bulder.js'} -->

### 第二种 防止代码重复使用

在 entry 中使用 shared

### 第三种 使用 webpack 的插件

### 第四种 按需加载代码块

详见 math.js 文件

### 缓存第三方库

### 高级应用配置

### 代码 debug 配置

1、在开发环境为了更好的定义代码报错的位置以及行数列数，建议使用 cheap-module-source-map
2、正式环境一般不做这个配置

### devserver 配置

devserver: {
static: path.resolve(\_\_dirname, './dist)
compress: true, // 设置服务器端是否压缩代码
port: 3000, // 配置端口号
// 配置特殊请求头内容
header: {
'X-Access_Token': '123'
},
// 代理服务端地址
proxy: {},
https: true, // 设置将本地的 http 服务改为 https 的服务
http2: true,
historyApiFallback: true, // 配置为响应的路由
host: '0.0.0.0',
}

### eslint 配置

npm install eslint-loader -D


### git-hooks husky
l1995c0802