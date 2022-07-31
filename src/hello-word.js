/*
 * @Descripttion: 
 * @version: 
 * @Author: liuC
 * @Date: 2022-07-06 21:15:24
 * @LastEditors: liuC
 * @LastEditTime: 2022-07-24 13:25:24
 */
function helloWorld() {
  console.log("hello world");
}

function getstring() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World');
    },2000)
  })
}

async function helloWorld2() {
  let string = await getstring();
  console.log(string);
}

export default helloWorld2;
