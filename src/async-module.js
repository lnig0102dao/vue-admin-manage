/*
 * @Descripttion:
 * @version:
 * @Author: liuC
 * @Date: 2022-07-24 14:14:08
 * @LastEditors: liuC
 * @LastEditTime: 2022-07-24 14:17:48
 */
function getComponent() {
  return import("lodash").then(({ default: _ }) => {
    const element = document.createElement("div");

    element.innerHTML = _.join(["hello", "webpack"], " ");
    return element;
  });
}
getComponent().then((element) => {
  document.body.appendChild(element);
});
