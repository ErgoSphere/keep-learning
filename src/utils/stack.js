/**
 * Created by ErgoSphere on 2021/3/17
 *
 * 栈(stack)： 遵循先入后出(last-in-first-out)
 *
 * push: 元素压入栈
 * pop: 元素顶出栈
 * peek: 查看栈顶值
 * top：查看栈顶位置
 * length: 查询栈元素总数
 * clear: 清空栈内元素
 **/

//定义栈
function Stack () {
  this.dataStore = [] //初始化为空
  this.top = 0 //记录栈顶位置
  this.pop = pop //出栈
  this.push = push //入栈
  this.peek = peek //查看栈顶元素
  this.length = length //查看栈内元素总数
  this.clear = clear //清空栈
}

//入栈
//将一个新元素入栈，放到数组中top所对应的位置上，并将top值加1，让其指向数组的下一个空位置
function push(element) {
  this.dataStore[this.pop++] = element
}

//取出栈顶元素
//该方法与入栈相反，返回栈顶元素，并将top的值减1
function pop() {
  return this.dataStore[--this.top]
}

//查看栈顶元素
function peek() {
  if (this.top > 0) return this.dataStore[this.top - 1]
  else return "Empty"
}

//个数
//该方法通过返回top属性的值来返回栈内总的元素个数
function length() {
  return this.top
}

//清空
//该方法实现很简单，我们将top值置为0， dataStore数值清空即可
function clear() {
  delete this.dataStore
  this.dataStore = []
  this.top = 0
}

//初始化一个栈
let stack = new Stack()
console.log(stack.peek()) //Empty
//入栈
stack.push("apple")
stack.push("banana")
stack.push("pear")
//查看当前栈顶元素
console.log(stack.peek()) // pear
console.log(stack.pop) //pear

//案例：https://juejin.cn/post/6844903497784098823

//判断是否为回文（1001， level, racecar）
function isPalindromeWithStack (str) { //
  let s = new Stack()
  for (let i = 0; i < str.length; i++) {
    s.push(str[i])
  }
  let r_str = ""
  while(s.length() > 0) {
    r_str += s.pop()
  }
  return str == r_str
}
//常规
function isPalindrome (str) {
  return String(str).split("").reverse().join == str
}