/*
 * @Descripttion:
 * @version:
 * @Author: liuC
 * @Date: 2022-06-05 11:32:08
 * @LastEditors: liuC
 * @LastEditTime: 2022-07-24 15:23:35
 */

import helloWorld from "./hello-word.js";
import _ from "lodash";
import "./async-module.js";

console.log(_.join(["index", "module", "loaded!"], " "));
console.log(process.env);
helloWorld();

const button = document.createElement("button");
button.textContent = "点击执行家法运算";
button.addEventListener("click", () => {
  // 懒加载模块，第三种方式，动态加载
  // webpackPrefetch: true 预获取 在网络空闲的时候将以后可能用到的加载出来
  // webpackPreload: true  预加载
  import(/* webpackChunkName: 'math', webpackPreload: true*/ "./math.js").then(
    ({ add }) => {
      console.log(add(4, 5));
    }
  );
});

document.body.appendChild(button);
