- HTTP与HTTPS区别 （[ref](https://juejin.cn/post/6844903471565504526)）

HTTP：超文本转输协议，以明文方式发送内容，无数据加密，不适合传输敏感信息。是TCP的一种

HTTPS：安全套接字层超文本转输协议，在HTTP的基础上加入了SSL协议，SSL（security sockets layer）依靠证书难证服务器身份，为通信加密。
作用：1建立信息安全通道，2确认网站真实性, 客户端TLS来解析证书
优点：安全性，谷歌SEO针对HTTPS有排名提升
缺点：会使页面加载时间延长至50%，增加10%到20%的耗电，影响缓存，增加数据开销和功耗，加密范围比较有限，SSL证书信用链体系不安全，SSL需要绑定IP但不能在同一IP上绑定多个域名

      client将自己支持的加密规则发送 -> server从中选出一组算法将自己身份信息以证书形式发回，内含网站地址，加密公钥，证书颁发机构 


区别：1.HTTPS需要到ca申请证书，免费较少
2.HTTP明文转输，HTTPS加密
3.两者使用了完全不同的连接方式，端口不一样，HTTP为80，HTTP为443
4.HTTP连接简单无状态， HTTPS更安全


    TCP三次握手四次挥手：
    
    client发送报文1
    |
    server回应报文2，携带对报文1的回应以及询问client是否做好通讯准备 
    |
    client发送报文3，回应对server报文2中的询问
    ·
    client发送报文4（FIN），用于关闭client到server的传送
    |
    server接收后发送报文5（ACK），确认报文4的操作（报文4序号加1）
    |
    server关闭连接，发送报文6（FIN）
    |
    client对报文5回应，序号加1（ACK）


- 输入网址后浏览器做了什么事

  搜索浏览器自身DNS缓存 - 有缓存直接访问已缓存的IP地址
  |
  无缓存，搜索系统自身DNS缓存，读取HOST文件，是否有DNS IP地址映射
  |
  向运营商发送DNS解析请求，获得IP地址
  |
  向IP地址所在server三次TCP握手建立连接
  |
  建立连接之后向server发送HTTP请求
  |
  server接收请求后将处理结果发回，如HTML页面代码等
  |
  client的内核和JS引擎解析和渲染页面，内含的JS，CSS，图片等资源也将通过HTTP请求进行加载
  |
  client根椐拿到的资源进行页面渲染呈现给用户，如无后续操作则向服务器端发起TCP四次挥手断开



- 权限系统设计 [参考](https://www.cnblogs.com/niuli1987/p/9871182.html)

  RBAC类（基于角色的访问控制role based access control）

- 前端安全防范 [参考](https://juejin.cn/post/6844904020562165773)

  XSS注入：解决 转义字符
  CSP开启白名单：1. 设置HTTP Header 的 Content-Security-Policy

  CSRF: 跨站请求伪造
  解决：Gety请求不对数据修改
  不让第三方访问到用户cookie
  阻止第三方请求接口
  请求时附带证信息，如验证码或着token

  点击劫持


- MVVM MVC MVP [ref](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

  MVC：Model->View->Controller->Model 单向通信
  view发送指令到controller, controller完成业务逻辑，要求model改变状态，然后model将新数据发送到view, 用户得到反馈

  MVP： Model View Presenter 双向 view 不和 Model通信
  MVVM： Model View ViewModel, model与view双向通信，view和viewmodel双向绑定

- RESTful [ref](https://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)

  GET, POST, PUT, PATCH, DELETE
  PUT和PATCH


- 前端模块化

  ES6, CommonJS, CMD, AMD

  模块内部数据与实现是私有的，向外部暴露一些接口方法与外部其它模块通信

  全局function模式：污染全局命名空间，容易引起冲空或数据不安全，模块成员间看不出直接联系

  namespace模式：减少全局变量，解决命名冲空，数据不安全，外部可直接修改内部数据

  IIFE模式：匿名函数自调用（闭包），将数据及方法封装到一个函数内部，通过给window添加属性来向外暴露接口

  模块化优点：减少命名空间污染，更好的分离，按需加载，高复用性，高可维护性

  引入多个<script>后的问题：请求过多，依赖模糊

  1）CommonJS Node应用模块采用了此种方式，每个文件为一个模块，有自己的作用域，文件内变量、函数、类私有，在服务器端是同步加载，浏览器端需要提前编译打包 browserify

  不会污染全局作用域

  模块只在第一次加载时运行，运行结果缓存，多次加载需要清缓存

  模块加载顺序按在代码中出现的顺序

  output module.exports = value or module.xxx = value

  import require('xxx') //file name or path

  输入为被输出值的拷贝，输出后模块内部变化无法再影响此值

  2）AMD 非同步，浏览器端常用

      define(function() { return 模块})
      
      define(['module1', 'module2'], function() {})
      
      require(['module1', 'module2'], function () {})
      
      会发送多个请求，且依赖顺序不能错 ，解决require.js

    3) CMD 结合前两者，加载异步，使用时才执行，用于浏览器端（sea.js）

    4) ES6

  export { }

  import {func1, func2} from ".."


- require和import的区别

  require -> CommonJS，导入模块为值传递或者引用传递

  import -> ES6 Module, default为独有关键字，导入为强绑定




- 弹盒及响应式 [refs](https://www.jianshu.com/p/c6cae35e2b93)

  flexbox在项目中的应用:

    1) 居中显示某个DIV

  a. BFC: 左右两边固定宽度，中间不设宽（自适应，随浏览器大小变化）

       ```
        <div class="container">
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
        </div>
        
        .column:nth-of-type(1), .column:nth-of-type(2) {
            width: 100px;
            height: 300px;
        }
        .column:nth-of-type(1) {
            float: left;
        }
        .column:nth-of-type(2) {
            float: right
        }
        .column:nth-of-type(3) {
            overflow: hidden; // create bfc
            height: 300px;
        }
       ```

  b. absoulte

    ```
    <div class="parent">
      <div class="child"></div>
    </div>
    
    .parent {
        position: relative;
    }
    .child {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) //CSS3 IE8不支持 
    }
    ```

  c. FLEX -> IE9不支持
    ```
    .parent {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    ```

  d. table-cell -> IE8不支持

    ```
    .parent {
        display: table;
        width: 100%;
        height: 100%;
    }
    .child {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    ```

  e.伪类

    ```
    .parent {
        width: 300px;
        height: 300px;
        text-align: center;
    }
    .parent::before {
        content: '';
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle
    }
    .child {
        display: inline-block
    }
    ```

  2）使用了flex-wrap 对多个盒子进行自动换行

  3）在某个盒子内部自动做等份处理 flex: 1 (grown 1, shrink 1, basis 0)

  responsive: @media(CSS3)

                针对手机：
                <name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  px: 绝对单位，精确按像素展示，chrome强制最小为12px，想要降到12以下可使用transform:scale

  em: 相对，基准为父节点字体大小，自身定义了font-size的话则整个页面1em都是不一样的值

  rem(css3)：相对，类root em， 根椐根节点html字体大小计算, chrome/ff/ie9+

  vw, vh: 视窗宽高 ， IE9+部份， safari 8+， android browser 4.4+, chrome for android 39, etc.

  vmin, vmax: vw和vh中较小/大的

  CSS3多列布局？




- CSS权重 [参考](https://juejin.cn/post/6844904014962753544)

  内联样式，一个标记为1，依次累加 1 0 0 0

  ID选择器：一个标记为1，依次累加 0 1 0 0

  class, 属性，伪类（:hover, visited, link, active）：有一个标记为1， 依次累加 0 0 1 0

  伪元素(before after)，元素标签： 0 0 0 1

  通配选择器（*）， +， >，〜 不加权重

  !important高于所有未指定，多个规则中同一属性都指定的话则互抵，依照上述情况计算比较



- vue相关

    1.  在2.0版本实现双向绑定及原理

        通过数据劫持发布者-订阅者的方式来实现 -> Object.defineProperty() -> 将每个数据的读写转化为getter/setter, 对象上有get(), set()

        ES5特性，且无法补丁实现，所以不支持IE8及更低版本

        不能检测到对象属性的添加或删除

        [https://my.oschina.net/u/4386652/blog/4281447](https://my.oschina.net/u/4386652/blog/4281447)

    ```js
    
    let book = {}, name = ''
    
    Object.defineProperty(book, 'name', {
        set: function (value) {
            name = value
        },
        get: function () {
            return name + '!'
        }
    })
    
    book.name = 'xxx'
    console.log(book.name) // xxx!
    
    ```

  引申：[https://juejin.cn/post/6844903479044112391](https://juejin.cn/post/6844903479044112391)

  *当实例上的data被使用Object.freeze时，将阻止修改现有property，意味响应系统无法再追踪变化


    2. 组件在项目中的使用：例：通用模态窗口，下拉选择列表, 树状菜单等 
    
    3. 实现不同组件间数据交流的方法
    
        a. 父子组件：子props，emit父
        
        b. vuex
        
        c. 每个new Vue实例的子组件中，根实例可通过$root property访问[ref](https://cn.vuejs.org/v2/guide/components-edge-cases.html), 父级组件实例可通过$parent访问
        
        d. 通过ref访问子组件实例或子元素 
    
        e. 依赖注入，指定父组件可提供给后代组件数据/方法 -> 父provide，子inject [demo](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-dependency-injection?file=/index.html:618-624)
        
        f. vue.prototype['object_name']
        
    4. computed默认只有getter， 但可以自定义setter
    
    5. v-if和v-for同时使用时，v-for有更高的优先级
    
       v-for遍历时，按Object.keys()结果遍历，但是不保证在不同的JS引擎下都一致 
       
    6. 全局组件的注册行为必须在根实例化前发生，props的验证会在组件实例创建之前进行 
    
    
    7. props的type可为自定义函数[ref](https://cn.vuejs.org/v2/guide/components-props.html)
    
    8. 插槽demo（不是太熟）：[参考例子](https://github.com/ErgoSphere/vue-virtual-scroller)
    
    9. 


- ES6相关及在项目中的运用


    1 let, const 
    
       let只在声明的代码块内有效，const为常量无法
       
       for循环使用let时，循环let和内部let两个父子作用域 
       
       ```js
       for (let i = 0; i < 3; i++) {
           let i = "abc"
           console.log(i)
       }
       //输出了3次abc
       ```
       
       let，const无变量提升（声明前调用后），var有（前后无影响）
       
       let, const不允许重复声明 
       
       const不允许声明后再赋值，const保证的是指针是固定的，但指针指向的数据结构是不可变的, 以下两种情况都是对的 
       
       ```js
       const x = 7
       
       const a = {}
       a.b = 8
       const c = []
       c.push('9')
       c.length = 0
       ```

2. 普通函数，箭头函数

   a.箭头函数内的this为定义时所在的对象，不是使用时所在的对象

   b.箭头函数不可以作为构造函数，即不能new

   c.箭头函数不能使用arguments对象，可以使用rest参数代替（...x）

   d.不可使用yield命令，因此箭头函数不能作为generator函数





3. Array.from()

4. 声明变量的方法 ES5(var, function), ES6(var, function, let, const, import, class)

5. 字符串是否包含在另一字符串了，例判断单据编号前三位区分是什么样的单

   ```js
   let s = 'GTX0239302399'
   s.includes('GTX') //ES6
   s.startsWith('GTX') //ES6
   ```
6. 单据补位，如000000001，000000010
   ```js
   let s = '1'
   s.padStart(9, '0')
   ```


- Websocket工作原理 [http://websocket.org/aboutwebsocket.html](http://websocket.org/aboutwebsocket.html)

  握手由HTTP进行，此后与HTTP无关

  通道由client 发起个HTTP连接，服务器收到后打开对应的HOST TCP/IP连接。通道建立后可以无阻挡地通过代理proxy

  client 通过 Upgrade: websocket 告知服务器，服务器接收后同意将协议转为websocket, 然后HTTP连接终止并被websocket连接替代

  1）socket.io使用

  options.transports指定类型，可选websocket, polling, polling-xhr, polling-jsonp



- git管理代码分支

- Promise

- Function.apply() 应用衍生

    1. 将数组各项添加到另一个数组（数组合并） -> arr1, arr2

  a. 遍历arr2的元素push到arr1 <- 改变了arr1

  b. arr1.concat(arr2) <- 返回了新的数组, arr1未变

  c. arr1.push.apply(arr1, arr2)  <- 改变了arr1 [ref](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)



    ### 双向绑定 

初始化时，给每个属性建立getter/setter(Object.defineProperty),
每个都有独立使用一个Dep作为收集器。建立一个Watcher并添加到Dep中。当属性set的时候，由Dep通知Watcher更新页面；get的时候通过Dep查找
相关的Watcher依赖，如果没有使用到该属性，则没有触发到相关函数

无法通过直接赋值修改对象值与getter和setter初始化有关，浏览器对Object.observe支持较差
实际vue（2.0）是根本没做递归的观察，原因是运行速度。

### 初始化到渲染

对数据进行初始化 -> 判断是否有$el和render方法 -> compile -> 返回vnode -> 通过patch(封装了多个基础的创建元素的方法) -> dom

### 生命周期

beforeCreated: 什么都不干

created: 初始化data，实际已做好绑定，但$el仍然是undefined

beforeMounted: 编译好模板，生成为DOM（实际为替换DIV）

mounted: 挂载，旧$el被新$el替换完成

beforeUpdate: 更新视图之前，未渲染，在这里更改状态不会触发重渲染

updated: 视图更新

beforeDestroyed: 销毁实例前，实例仍可用

destroyed: 当前实例和子实例销毁完成后（服务端渲染期不可用）

### vuex

通过Vue.mixin对在beforeCreated的时候注入个$store对象

### 创建对象生成原型链

refs: [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
 
### vue-cli 4.0使用 compression-webpack-plugin v7.1.0以上报错 Cannot read property 'tapPromise' of undefined

1. 降级到6.1.1及以下, vue-cli4的webpack版本为5.0.0, compression-webpack-plugin v7.1.0要求至少为5.1.0

#### 多级嵌套路由父路由必须用<router-view>占位