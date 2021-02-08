/**
 * Created by ErgoSphere on 2021/2/7
 *
 * 常用函数
 *
 **/

//禁用键盘
export const keyboardDisabled = keyNum => {
  window.onkeydown = function(e) {
    if ((e.keyCode || e.which) === Number(keyNum)) {
      event.returnValue = false;
      e.preventDefault();
    }
  };
};
//生成随机ID
export const randomId = len => {
  return Number(
    Math.random()
      .toString()
      .substr(3, len) + Date.now()
  ).toString(36);
};
//字符串去空
export const stringTrim = str => {
  if (String.prototype.trim) {
    return str.trim();
  } else {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
};
//图片校验
export const isImage = str => {
  let reg = /\.(png|jpg|gif|jpeg|webp)$/;
  return reg.test(str);
};
//微软系浏览器检测
export const msExplorerDetect = () => {
  let userAgent = navigator.userAgent;
  let isIE = window.ActiveXObject || "ActiveXObject" in window;
  let isEdge = userAgent.indexOf("Edge") > -1;
  return isIE || isEdge;
};
//随机生成颜色
export const getRandomColor = function() {
  return "hsb(" + Math.random() + ", 1, 1)";
};
