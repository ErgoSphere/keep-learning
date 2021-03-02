### class 与 传统构造函数区别

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

###class constructor返回另外的对象

```js
class Foo {
  constructor() {
    return Object.create(null)
  }
}

new Foo() instanceof Foo //false
```