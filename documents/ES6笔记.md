### [class与普通构造函数区别](https://github.com/ErgoSphere/es-plugins/blob/master/documents/class%E4%B8%8E%E6%99%AE%E9%80%9A%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%8C%BA%E5%88%AB.md)

### let, const, var(ES5)

- let, const两者均无变量提升，所以必须声明前调用后。var有变量提升，因为前后无影响 

- let只在声明的代码块内有效， const为常量

- let, const不允许重复声明 

- for使用let时，循环let和内部let为两个父子作用域

```js
for(let i = 0; i < 3; i++) {
  let i = "abc"
  console.log(i)
}
//输出三次"abc"
```

- const不允许声音后再赋值，保证指针是固定的，但指针指向的数据结构是可变的，因此以下两种情况都对 

```js
const x = 7

const a = {}
a.b = 9

const c = []
c.push(9)
c.length = 0
```

### 普通函数与箭头函数

- 箭头函数不创建自己的this，只从自己作用域链的上一层继承this。普通函数则引入了bind方法来设置函数this值

```js
function Person () {
  this.age = 0
  setInterval(function growUp() {
    console.log(this.age)  // this不一样
  }, 1000)
}
 
function People () {
  this.count = 0
  setInterval(() => {
    console.log(this.count) // 0
  })
}
```

- 箭头函数不能作为构造函数，即不可new

- 箭头函数不能使用arguments对象，可使用rest参数代替(...rest)

- 箭头函数不可命名用yield命令，因此箭头函数不能作为generator函数 

```js
'use strict'
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this)
  }
}
obj.b() //undefined, Window{...}
obj.c() //10, Object{...}
```

---

