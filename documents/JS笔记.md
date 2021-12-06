### ➤ 普通函数与箭头函数
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
### ➤ JS数据类型 ([ref](https://zhuanlan.zhihu.com/p/95534245))
1. 基本数据类型：Undefined, Null, Number, String, Boolean, Symbol(ES6)
2. 复杂数据类型： Object

---
### ➤ Symbol
1. 不使用new是因为通过new实例化的结果为object对象
```js
const s = Symbol() // typeof s = 'symbol'
```
2. 即使传入相同的参数生成的symbol值也不一样（独有）
```js
const foo = Symbol('foo')
const bar = Symbol('foo')
console.log(foo === bar) // false
```
3.使用Symbol.for可校验上下文是否存在使用该方法且相同参数创建的symbol值
```js
const s1 = Symbol.for('foo')
const s2 = Symbol.for('foo')
console.log(s1 === s2) // true
```

---
### ➤ 深拷贝和浅拷贝
- 浅拷贝： 指两个js 对象指向同一个内存地址，其中一个改变会影响另一个。浅拷贝只会拷贝一层，深层的引用类型改变还是会受到影响。
```js
let oldObj = {1: 'a', 2: 'b'}
let newObj1 = Object.assign({}, oldObj)
let newObj2 = {...oldObj}
// array slice 
```
- 深拷贝： 指复制后的新对象重新指向一个新的内存地址，两个对象改变互不影响。
```js
//不含函数
let oldObj = {1: 'a', 2: 'b'}
console.log(JSON.parse(JSON.stringify(oldObj)))
const deep_clone = obj => {
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
```

---
### ➤ 变量声明方法
- ES5: var, function
- ES6: var, function, let, const, import, class

1. let, const两者均无变量提升，所以必须声明前调用后。var有变量提升，因为前后无影响
2. let只在声明的代码块内有效， const为常量
3. let, const不允许重复声明
4. for使用let时，循环let和内部let为两个父子作用域
```js
for(let i = 0; i < 3; i++) {
  let i = "abc"
  console.log(i)
}
//输出三次"abc"
```
5. const不允许声明后再赋值，保证指针是固定的，但指针指向的数据结构是可变的，因此以下两种情况都对
```js
const x = 7

const a = {}
a.b = 9

const c = []
c.push(9)
c.length = 0
```

---
### ➤ 切换浏览器导航或最小化窗口时监听 ([ref](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API))
```js
document.addEventListener("visibilitychange", function(ev) { 
  console.log(document.hidden)
})
```

---
### ➤ 继承
1. **原型链继承**：将父类实例作为子类原型
- 优点：父类方法可复用
- 缺点：父类引用属性会被子类共享；子类构建实例时不能向父类传参
```js
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
```
2. **构造函数继承**： 父类构造函数内容复制给子类构造函数（唯一不涉及到prototype的继承）
- 优点：父类引用属性不会被子类所共享；子类构建时可向父类传参
- 缺点：父类方法不能复用，子类实例方法每次都为单独创建
```js
SuperType.call(SubType)
```
3. **组合继承**：原型链+构造函数
- 优点：父类方法可被调用；父类引用属性不会被共享；子类构建实例时可向父类传参
- 缺点：多次调用父类构造函数，性能浪费
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
4. **原型式继承**：object对参数对象的浅拷贝
- 优点：父类方法可复用
- 缺点： 父类引用属性会被所有子类实例共享；子类构建实例时不能向父类传参
5. **寄生式继承**：在原型式继承基础上增强浅复制能力
6. **寄生组合继承**：解决组合继承的缺点
7. **ES6 Class extends**
- 本质上是ES5继承的语法糖
- ES6继承中子类的构造函数的原型链指向父类的构造函数，ES5中仅为复制无原型链指向 

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

---

### ➤ 模块化
- ES6, CommonJS, CMD, AMD
- 模块内部数据与实现是私有的，向外部暴露一些接口方法与外部其它模块通信
- 优势：减少命名空间污染，更好的分离，按需加载，高复用性，高可维护性
- 引入多个script标签后的问题：请求过多，依赖模糊

> **全局function模式**: 污染全局命名空间，容易引起冲空或数据不安全，模块成员间看不出直接联系]
> 
> **namespace模式**: 减少全局变量，解决命名冲空，数据不安全，外部可直接修改内部数据
>
> **IIFE模式**: 匿名函数自调用（闭包），将数据及方法封装到一个函数内部，通过给window添加属性来向外暴露接口

1. **CommonJS**
- Node应用模块采用了此种方式，每个文件为一个模块，有自己的作用域，文件内变量、函数、类私有，在服务器端是同步加载，浏览器端需要提前编译打包 browserify
- 不会污染全局作用域
- 模块只在第一次加载时运行，运行结果缓存，多次加载需要清缓存
- 模块加载顺序按在代码中出现的顺序
- 输入为被输出值的拷贝，输出后模块内部变化无法再影响此值(值传递或引用传递)
``` js
//output 
module.export = value 
module.xxx = value
//import
require("xxx") //file name or file path
```
2. **ES6**
import: default为独有关键字，导入为强绑定
```js
export { func1, func2 }
import { func1, func2 } from ".."
```
3. **AMD**
- 非同步，浏览器端常用
- 会发送多个请求，且依赖顺序不能错 ，require.js可解决
```js
define(function() { 
  return 模块
})
define(['module1', 'module2'], function() {})
require(['module1', 'module2'], function () {})
```
4. **CMD**
- CommonJS和AMD的结合，加载异步，使用时才执行，用于浏览器端（例sea.js）

---

### ➤ 安全防范 [Ref](https://juejin.cn/post/6844904020562165773)
1. XSS注入
- CSP开启白名单：设置HTTP Header 的 Content-Security-Policy
- 使用转义字符
2. CSRF
- Get请求不对数据修改
- 不让第三方访问到用户cookie
- 阻止第三方请求接口
- 请求时附带证信息，如验证码或着token
3. 点击劫持

---
### ➤ cacheStorage 和 cache
- **cacheStorage**: 类似mango, 管理所有cache
- **cache**: 类似mango内的db

---
### ➤ HTTP/HTTPS([ref](https://juejin.cn/post/6844903471565504526))
1. **HTTP**：超文本转输协议，明文方式发送，无数据加密，不适合传输敏感信息。是TCP的一种
2. **HTTPS**：安全套接字层超文本转输协议，在HTTP的基础上加入了SSL协议，SSL（security sockets layer）依靠证书难证服务器身份，为通信加密。
- 作用：1建立信息安全通道，2确认网站真实性, 客户端TLS来解析证书
- 优点：安全性，谷歌SEO针对HTTPS有排名提升
- 缺点：会使页面加载时间延长至50%，增加10%到20%的耗电，影响缓存，增加数据开销和功耗，加密范围比较有限，SSL证书信用链体系不安全，SSL需要绑定IP但不能在同一IP上绑定多个域名
- 流程：client将自己支持的加密规则发送 -> server从中选出一组算法将自己身份信息以证书形式发回，内含网站地址，加密公钥，证书颁发机构
3. HTTP和HTTPS区别：
- HTTPS需要到ca申请证书，免费较少
- HTTP明文转输，HTTPS加密
- 两者使用了完全不同的连接方式，端口不一样，HTTP为80，HTTP为443
- HTTP连接简单无状态， HTTPS更安全

---
#### ➤ TCP握手(3)/挥手(4)：
1. client发送报文1（询问）
2. server回应报文2，携带对报文1的回应以及询问client是否做好通讯准备
3. client发送报文3，回应对server报文2中的询问
> ---数据传输---
4. client发送报文4（FIN），用于关闭client到server的传送
5. server接收后发送报文5（ACK），确认报文4的操作（报文4序号加1）
6. server关闭连接，发送报文6（FIN）
7. client对报文5回应，序号加1（ACK）

---
### ➤ 服务器通信
1. XMLHttpRequest: 可获取任何类型的数据，可支持HTTP外的协议（FTP，file://）
2. EventSource: 服务器单向推送，一个EventSource实例会对HTTP服务开启持久化连接，以text/event-stream格式发送事件，应用于处理社交媒体更新，新闻提要等
3. Websocket: 全双工通信([ref](http://websocket.org/aboutwebsocket.html))
- 握手由HTTP进行，此后于HTTP无关
- 通道由client发起HTTP连接，服务器收到后打开对应的HOST TCP/IP连接。通道建立后可以无阻挡地通过代理Proxy
- client通过 Upgrade:websocket 告知服务器，服务器接收后同意将协议转为websocket（响应101状态码），然后HTTP连接终止并被websocket连接替代
- socket.io使用：options.transports指定类型，可选websocket, polling, polling-xhr, polling-jsonp，[demo](https://github.com/ErgoSphere/es-plugins/blob/master/src/api/socket.js)

---
### ➤ 多标签通信
1. websocket
2. localStorage event
3. postMessage

---
#### ➤ 输入网址后浏览器做了什么事(浏览器渲染过程)
- **请求过程**
1. 搜索浏览器自身DNS缓存，如有缓存直接访问已缓存的IP地址
2. 无缓存，搜索系统自身DNS缓存，读取HOST文件，是否有DNS IP地址映射
3. 向运营商发送DNS解析请求，获得IP地址
4. 向IP地址所在server进行3次TCP握手建立连接
5. 建立连接之后向server发送HTTP请求
6. server接收请求后将处理结果发回，如HTML页面代码等
7. client的内核和JS引擎解析和渲染页面，内含的JS，CSS，图片等资源也将通过HTTP请求进行加载
8. client根椐拿到的资源进行页面渲染呈现给用户，如无后续操作则向服务器端发起TCP四次挥手断开
- **渲染过程**（上述7, 8时进行）
1. 解析收到的文档，根椐文档的内容构建DOM树（DOM元素 + 属性节点）
2. 根椐CSS生成CSSOM规则树
3. 根椐DOM树和CSSOM规则树生成渲染树（render tree）。渲染对象为渲染树的节点，是一个含大小颜色的矩形。渲染对象与DOM对象相对应（非一对一），不可见的DOM对象不会被插入渲染树。
4. 生成渲染树后，浏览器会根椐渲染树进行布局（回流/自动重排）
5. 布局完成后进行绘制（对象paint）
- **浏览器渲染方式**： Flow Based Layout
- 由于浏览器使用流式布局，对 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间

---
### ➤ 回流和重绘
- 回流：回流是布局或者几何属性需要改变。回流必定会发生重绘，重绘不一定会引发回流。
- 重绘：由于节点的集合属性发生改变或者由于样式改变而不会影响布局的，成为重绘，例如 outline、visibility、color、background-color 等
- 优化：
1. 避免使用强制渲染刷新队列的函数，如width, height, getBoundingClientRect, scrollTop, offsetTop等
2. 使用visibility（重绘）替换display: none（回流）
3. 避免使用table
4. 避免使用css表达式（回流）
5. 动画效果应用到 position 属性为 absolute 或 fixed 的元素上

---
### ➤ ES6转ES5思路及babel原理

- 代码字符串解析成AST（抽象语法树/Abstract Syntax Tree）: ES6 AST → ES5 AST → 再次生成代码字符串
- babel转译：解析parse → 转换transfer(babel-traverse) → 生成generate (babel-generator) 

---
### ➤ 异步解决方案
1. 回调函数：无法catch错误
2. promise: 无法取消promise
3. Generator: 可以控制函数执行
4. await/async: 将异步改为同步，当异步无依赖性而使用时性能降低

---
### ➤ 浏览器缓存
1. service worker: 需要用https访问
2. memory cache: 内存中的缓存，随着进程释放（tab关闭）而消失
3. disk cache
4. push cache: HTTP/2内容，仅存在于session中

---
### ➤ 性能优化
1. 合并请求资源：如雪碧图，文件合并，base64
2. DNS缓存/缓存策略
3. 延迟加载，减少首屏加载: 如将图片地址存在data属性中，当滚动到可视区域时再赋值src
4. 用户行为触发
5. CDN
6. Gzip
7. 减少cookie大小

---
### ➤ mobile视口配置
```html
<meta name="viewport" content="width=device-width" initial-scale="1.0" maximum-scale="1.0" minimum-scale="1.0" user-scalable="no" />
```

---
### ➤ 在用户关闭页面前向服务器发送信息
unload event
1. 在事件中发送异步请求：失败
2. 在事件中发送同步xhr：延迟页面卸载
3. 在事件中使用image src：延迟页面卸载 
4. 在事件中使用创建个几秒中的no-op循环来延迟页面卸载并向服务器发送信息
5. （最优解）navigator.sendBeacon: 通过HTTP将少量数据**异步**传输到服务器

---
### ➤ [MVVM, MVC, MVP](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
1. **MVC**
- Model → View → Controller → Model : 单向通信
- view发送指令到controller, controller完成业务逻辑，要求model改变状态，然后model将新数据发送到view, 用户得到反馈
2. **MVP**
- View ⇋ Presenter ⇋ Model : 双向, view 不和 Model通信
3. **MVVM**
- Model ⇋ View ↔︎ ViewModel: Model与View双向通信，view和ViewModel双向绑定

---
### ➤ JS对象转换
1. 对象到字符串
- 如对象有toString()，则调用该方法
- 如无toString()或此方法不返回一个原始值，则调用valueOf()
- 两者都无，此时抛出一个类型错误异常
2. 对象到数字
- 如有valueOf()，则调用该方法
- 如无valueOf()，则调用toString()
- 两者都无，此时抛出一个类型错误异常

---
### ➤ Get请求传参长度限制

- HTTP协议未作规定，最大长度是浏览器和服务器限制URI的长度，不同的浏览器和服务器限制的长度不一样
- 要支持IE，则最大长度为2083byte，若只支持chrome，则最大长度为8182byte

---
### ➤ 为什么使用setTimeout实现setInterval

- setInterval是将事件放在任务队列中，当空闲时才取事件执行，如果有执行栈时间过长，多个计时器则不能按指定时间执行任务

---
### ➤ URL和URI的区别

- URI：统一资源标识符，http://www.xxx.com/html/html1, 命名机制+主机名+资源自身路径
- URL：统一资源定位器，http://www.11.com:9000/aaa, schema://host:port/path, schema有http, ftp, gopher等
- URN：统一资源命名：mailto:java-net@java.sun.com
- URL和URN是URI的子集

---
### ➤ 内容安全策略CSP

- 本质为建立白名单，只需配置规则，拦截则由浏览器自身实现，可以通过这种方式减少xss攻击
- 开启：
1. 设置http request header的Content-Security-Policy
```
//只许加载本站资源
Content-Security-Policy:default-src 'self'
//只许加载HTTPS协议的图片
Content-Security-Policy:img-src https://*
//允许任何来源
Content-Security-Policy:child-src 'none'
```
2. meta标签
```html
<meta http-equiv="Content-Security-Policy" />
```

---
### ➤ 事件流传播过程

- 事件捕获 → 事件目标 → 事件冒泡
- document.addEventListener(..., capture), capture为boolean， ture为捕获，false为冒泡

---
### ➤ Reflect.ownKeys vs Object.keys

- 两者都得到对象属性的集合，以数组形式返回
- Reflect.ownKeys是所有属性，包括不可枚举和symbol；Object.keys仅包含可枚举属性

---
### ➤ class的继承和prototype的继承一样吗

- class为ES6继承，prototype为ES5的原型链继承
- class的子类没有自己的this对象，先创造父类的this对象（所以先调用super），再用子类的构造函数修改this
- prototype实质为先创造子类的this对象，再将父类方法通过Parent.apply(this)添加到子类上
- class内部定义的方法不可枚举，不存在变量提升

---
### ➤ 浏览器请求头method等前为什么有冒号（:method）
因为使用了http2协议进行转输，且可以压缩传输体积

---
### ➤ map和object比较
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
- map可使用forEach遍历，但无法使用for循环，map.length为0，需要获取长度使用map.prototype.size