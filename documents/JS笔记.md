### ❖ [ES6笔记](https://github.com/ErgoSphere/es-plugins/blob/master/documents/ES6%E7%AC%94%E8%AE%B0.md)

### ❖ JS数据类型 ([ref](https://zhuanlan.zhihu.com/p/95534245))

- 基本数据类型：Undefined, Null, Number, String, Boolean, Symbol(ES6)

- 复杂数据类型： Object

### ❖ 深拷贝和浅拷贝

### ❖ 变量声明方法
 
- ES5: var, function

- ES6: var, function, let, const, import, class

### ❖ [Websocket工作原理](http://websocket.org/aboutwebsocket.html) 

- 握手由HTTP进行，此后于HTTP无关

- 通道由client发起HTTP连接，服务器收到后打开对应的HOST TCP/IP连接。通道建立后可以无阻挡地通过代理Proxy

- client通过 Upgrade:websocket 告知服务器，服务器接收后同意将协议转为websocket，然后HTTP连接终止并被websocket连接替代

- socket.io使用：options.transports指定类型，可选websocket, polling, polling-xhr, polling-jsonp，[demo](https://github.com/ErgoSphere/es-plugins/blob/master/src/api/socket.js)

### ❖ 数组合并[Demo](https://github.com/ErgoSphere/es-plugins/blob/master/src/utils/ObjectUtils/arrayConcat.js)

### ❖ 切换浏览器导航或最小化窗口时监听 ([ref](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API))

```js
document.addEventListener("visibilitychange", function(ev) { 
  console.log(document.hidden)
})
```

### ❖ 继承

- 原型链继承：将父类实例作为子类原型

优点：父类方法可复用

缺点：父类引用属性会被子类共享；子类构建实例时不能向父类传参

```js
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
```

- 构造函数继承： 父类构造函数内容复制给子类构造函数（唯一不涉及到prototype的继承）

```js
SuperType.call(SubType)
```

优点：父类引用属性不会被子类所共享；子类构建时可向父类传参

缺点：父类方法不能复用，子类实例方法每次都为单独创建

- 组合继承：原型链+构造函数

```js
function SuperType () {
  this.name = 'parent'
  this.arr = [1, 2, 3]
}
SuperType.prototype.say = function() {
  console.log('this is parent')
}
function SubType () {
  SuperType.call(this) // 第二次调用 
}
SubType.prototype = new SuperType() // 第一次调用
```
  
优点：父类方法可被调用；父类引用属性不会被共享；子类构建实例时可向父类传参 

缺点：多次调用父类构造函数，性能浪费 

- 原型式继承：object对参数对象的浅拷贝

优点：父类方法可复用

缺点： 父类引用属性会被所有子类实例共享；子类构建实例时不能向父类传参 

- 寄生式继承：在原型式继承基础上增强浅复制能力 

- 寄生组合继承：解决组合继随的缺点 

- ES6 Class extends

本质上是ES5继随的语法糖 

ES6继随中子类的构造函数的原型链指向父类的构造函数，ES5中仅为复制无原型链指向 

小结：

1. class必须使用new来创建实例，普通构造函数也可不使用

2. class内部定义的方法不可枚举，普通构造函数可枚举

3. class内部默认即为严格模式

4. class不存在变量提升

ES5:
```js
function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")"
}
var p = new Point(1, 2)
//可枚举
Object.keys(Point.prototype) // ["toString"]
Object.getOwnPropertyNames(Point.prototype) // ["constructor", "toString"]
```

ES6 class:
```js
//属性名可采用表达式
let methodName = "getPosition"
class Point {
  //constructor如未被显式定义，会默认添加个空的constructor()方法，new创建对象实例自动调用该方法
  //constructor默认返回实例对象(this)
  constructor(x, y) {
    this.x = x
    this.x = y
  }
  toString() {
    return "(" + this.x + ", " + this.y + ")"
  }
  [methodName]() {
    return "(" + this.x + ", " + this.y + ")" 
  }
}
let p = new Point(1, 2)
typeof Point // "function"
Point === Point.prototype.constructor //true
//在类实例上调用方法等同于调用原型上的方法
p.constructor === Point.prototype.constructor //true
//向类添加多个方法
Object.assign(Point.prototype, {
  toValue(){},
  showDiff(){}
})
//不可枚举性
Object.keys(Point.prototype) //[]
Object.getOwnPropertyNames(Point.prototype) // ["constructor", "toString", "getPosition", "toValue", "showDiff"]


```

对比
```js
class Point {
  constructor() {}
  toString() {}
  toValue() {}
}
//等同于
Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {}
}
```

class constructor返回另外的对象

```js
class Foo {
  constructor() {
    return Object.create(null)
  }
}

new Foo() instanceof Foo //false
```


