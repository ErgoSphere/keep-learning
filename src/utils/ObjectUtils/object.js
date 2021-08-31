//检测是否为json对象
export const isJson = obj => {
  return (
    typeof obj === "object" &&
    Object.prototype.toString.call(obj).toLowerCase() === "[object object]" &&
    !obj.length
  );
};
//对象按键名ASCII码重排
export const objectKeySort = obj => {
  const k = Object.keys(obj).sort();
  const newObj = new Object();
  for (let i = 0; i < k.length; i++) {
    newObj[k[i]] = obj[k[i]];
  }
  return newObj;
};
//两个数组值一致检测
export const equalArray = (x, y) => {
  return x.sort().toString() === y.sort().toString();
};
//数组去重
export const arrayDereplicate = arr => {
  return Array.from(new Set(arr));
};
//数组并集
export const arrayUnion = (x, y) => {
  const a = new Set(x);
  const b = new Set(y);
  return Array.from(new Set([...a, ...b]));
};
//数组交集
export const arrayIntersection = (x, y) => {
  const a = new Set(x);
  const b = new Set(y);
  return Array.from([...a].filter(item => b.has(item)));
};
//数组差值
export const arrayDifference = (x, y) => {
  const a = new Set(x);
  const b = new Set(y);
  return Array.from([...a].filter(item => !b.has(item)));
};
//删除数组中任一元素
export const delEleInArray = (val, arr) => {
  const a = new Set(arr);
  a.delete(val);
  return Array.from(a);
};
//删除数组中包含的数组
export const delElementsInArray = (e_arr, arr) => {
  return arr.filter(i => e_arr.indexOf(i) === -1);
};
//数组重排
export const arrayPermutation = arr => {
  if (arr.length === 1) {
    const r = new Array();
    for (let k = 0; k < arr[0].length; k++) {
      r.push(new Array(arr[0][k]));
    }
    return r;
  } else {
    const result = [];
    const allCasesOfRest = arrayPermutation(arr.slice(1));
    for (let i = 0; i < allCasesOfRest.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        const y = allCasesOfRest[i].join(",").split(",");
        const res = new Array(arr[0][j]).concat(y);
        result.push(res);
      }
    }
    return result;
  }
};
//深拷贝对象
export const deep_clone = obj => {
  let ret, k, b;
  if ((b = obj instanceof Array) || obj instanceof Object) {
    ret = b ? [] : {};
    for (k in obj) {
      if (obj[k] instanceof Array || obj[k] instanceof Object) {
        ret[k] = deep_clone(obj[k]);
      } else {
        ret[k] = obj[k];
      }
    }
  }

  return ret;
};

