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
//复制到剪贴板
export const copyText = (text = "") => {
  return new Promise((resolve, reject) => {
    // 获得到要复制的文本内容
    // 判断是否为ie浏览器，此方法只对IE浏览器有用
    if (window.clipboardData) {
      // 清除原有剪切板的数据
      window.clipboardData.clearData();
      // 将内容复制到剪切板
      window.clipboardData.setData("Text", text);
      document.activeElement.blur();
      // 其它浏览器,用别的方法
    } else {
      // 创建一个input对象
      let oInput = document.createElement("input");
      oInput.readOnly = true;
      oInput.setAttribute("readonly", true);
      oInput.setAttribute("value", text);
      document.body.appendChild(oInput);

      let prev_editable = oInput.contentEditable,
        prev_readonly = oInput.readOnly;
      // 选择对象
      oInput.select();
      oInput.setSelectionRange(0, oInput.value.length); // iOS hack
      oInput.contentEditable = prev_editable;
      oInput.readOnly = prev_readonly;
      // 执行浏览器复制命令
      document.execCommand("Copy");
      // 隐藏内容
      oInput.className = "oInput";
      oInput.style.display = "none";
      document.activeElement.blur();
    }
    resolve();
  });
};
//区分中英文限制输入框输入文字长度
//<input @input="limitLength" />
export const limitLength = (e, ml) => {
  const input = e.target;
  const split = input.value.split("");
  // 计算已输入的长度
  const map = split.map((s, i) =>
    input.value.charCodeAt(i) >= 0 && input.value.charCodeAt(i) <= 128 ? 1 : 2
  );
  // 这里设置想要限制的长度
  const maxLength = ml;
  let n = 0;
  const charLength =
    map.length > 0 &&
    map.reduce((accumulator, currentValue, index) => {
      if (accumulator === maxLength || accumulator === maxLength - 1) {
        n = index;
      }
      return accumulator + currentValue;
    });
  if (charLength > maxLength) {
    input.value = split.slice(0, n).join("");
  }
};

//字符串是否包含在另一字符串中（ES6实现）
export const stringContains = (str1, str2) => {
  //str1: "GTX", str2: "GTX0239302399"
  return str2.includes(str1);
  // return str2.startsWith(str1)
};

//单据补位，如000000001，000000010
export const fillNo = () => {
  let s = "1";
  return s.padStart(9, "0");
};
