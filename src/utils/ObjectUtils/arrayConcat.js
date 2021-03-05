/**
 * Created by ErgoSphere on 2021/3/5
 * 将数组1与数组2合并（不去重）
 *
 **/

let arr1 = [1, 2, 3, 4], arr2 = [1, 5, 6]

export const arrConcat1 = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
  return arr1 // 改变了arr1
}

export const arrConcat2 = (arr1, arr2) => {
  return arr1.concat(arr2) // arr1, arr2未变，返回新数组
}

export const arrConcat3 = (arr1, arr2) => {
  //Function.apply() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
  return arr1.push.apply(arr1, arr2) // arr1改变
}