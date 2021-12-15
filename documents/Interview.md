### 1）vue-router实现原理，配置history mode和hash mode方式
- **hash mode**
    - hash mode是vue-router的默认模式，hash指url描点，当描点发生变化时，浏览器只修改访问历史记录，不重修获取页面，根椐描点值渲染指定的dom
    - 原理：
        - 改变描点: <code>location.hash = "/hashpath"</code>
        - 监听描点变化：
          ```js
           window.addEventListener("hashchange", () => {
             const hash = window.location.hash.substr(1)
           }) 
          ```
- **history mode**
    - 原理：
        - 改变url: <code>pushState</code>或<code>replaceState</code>, url变化，浏览历史变化，但不向后台发送请求
        - 监听url变化：<code>popstate event</code>
            ```js
            window.addEventListener("popstate", () => {
              const path = window.location.pathname
            })
            ```
- **服务端支持**
    - 使用hash mode时，手动刷新浏览器可正常显示，history mode下刷新可能会出现问题，服务器端会查找是否有相匹配的html文件，在单页应用下，服务器端只有一个<code>index.html</code>, 此时匹配不到，会提示404。因此需要服务端对history进行支持。
        - node服务器
            ```js
            const path = require("path")
            const history = require("connect-history-api-fallback")
            const express = require("express")
            const app = express()
            app.use(history()) // 注册history模式中间件
            app.use(express.static(path.join(__dirname, '../web'))) //处理表态资源中间件，假设网站根目录../web
            app.listen(1122, () => {
              console.log("service start, port 1122")
            })
            ```
        - nginx代理：修改配置文件添加history mode support
          ```
          location / {
            root html;
            index index.html inde.htm;
            #尝试读取当前请求路径（$uri），如果读不到则读$uri/这件文件夹下的首页
            #都读不到则返回根目录中的index.html
            try_files $uri $uri/ /index.html;
          }
          ```
- 渲染router-view组件
    1. 通过Vue.observable在router实例上创建一个保存当前路由的监控对象current
    2. 当浏览器地址变化时，修改current
    3. 在<code>router-view</code>组件中监听current变化，当current变化时获取用户注册的相应component，并利用h()将component渲染为vnodes，更新页面视图
- 使用
  ```js
  //3.x
  const router = new VueRouter({
    mode: "history"
  })
  //4.x
  import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
  const router = createRouter({
    history: createWebHistory() || createWebHashHistory()
  })
  ```

### 2）网站性能优化
- 合并请求对象，如css spirit，base64等
- 使用CDN
- 减小cookie长度
- gzip压缩打包
- 延迟加载，如图片等可即将滚动到可视区域才加载
- DNS缓存策略
- 用户行为触发请求

### 3）vuex页面刷新数据丢失处理
- store的数据保存在运行内存中，刷新时会重载实例，被重新初始化
- 解决：
    - localStorage: 生命周期永久
    - sessionStorage: 生命周期仅在当前会话有效，在同源窗口中始终存在，只要浏览器窗口未关闭，刷新或进入同源另一页面都会存在。直至关闭窗口时销毁。同时独立打开同一窗口同一页面，sessionStorage不一致。
    - cookie: 生命周期只存在于设置的过期时间之前，即使窗口或浏览器关闭。存放数据大小限制（浏览器限制），不能储存大数据且不易读取。
- vue作为SPA在一个页面上跳转路由，sessionStorage较为合适
    - sessionStorage可以保证打开页面时sessionStorage数据为空

### 4）箭头函数能否使用arguments对象，怎么使用
- 箭头函数没有**自已的**<code>this</code>, <code>arguments</code>, <code>super</code>或<code>new.target</code>
- 箭头函数可以使用arguments对象，来自于父作用域（this也一样
  ```js
  function foo () {
    setTimeout(() => {
      console.log(arguments)
    }, 1)
  }
  foo(1, 2, 3, 4)//[1,2,3,4]
  ```

### 5) await在promise reject时是否继续进行，如何处理
- await只能在异步函数(async function)中使用
- await表达式会暂定当前异步函数执行，等待处理完成，如果正常处理(fulfilled)则继续执行，promise回调的resolve函数作为await表达式的值
- promise reject的话会把异常原因抛出
  ```js
    async function aw () {
      try {
        let x = await Promise.reject(30)
      } catch (e) {
        console.log(e)
      }
    }
    aw () // 30
  ```
  
### 6)实现1物理像素(1dp)边框
1. 由<code>window.devicePixelRatio</code>或逆算出对应px值（可能导致浏览器取px差异，兼容性差
2. 媒体查询，有同上毛病，且为非标准特性, Float px values may render differently on different browsers
   ```css
   .border {
     border: 1px solid #999;
   }
   @media screen and (-webkit-min-device-pixel-ratio: 2) {
     .border {
       border: 0.5px solid #999;
     }
   }
   @media screen and (-webkit-min-device-pixel-ratio: 3) {
     .border {
       border: 0.333333px solid #999;
     }
   }
   ```
3. viewport + rem: 动态修改meta
   ```html
   <meta name="viewport" id="dynamicViewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
   ```
   ```js
   let vp = document.getElementById("dynamicViewport")  
   let value = (1/window.devicePixelRatio).toFixed(2)
   let content = "width=device-width, initial-scale=" + value + ", maximum-scale=" + value + ", minimum-scale=" + value + ", user-scalable=no"
   vp.setAttribute("content", content)
   //字体大小
   let docEl = document.documentElement
   let fontSize = 10 * (docEl.clientWidth/320) + "px"
   docEl.style.fontSize = fontSize
   ``` 
4. 使用border-image: 圆角可能模糊
   ```css
   border-image-1px {
     border-width: 1px 0;
     -webkit-border-image: url("border.png") 2 0 stretch;
     border-image: url("border.png") 2 0 stretch;
   }
   ```
5. background-image渐变：无法实现圆角
   ```css
   .border {
      background-image: linear-gradient(180deg, red, red 50%, transparent 50%), linear-gradient(270deg, red, red 50%, transparent 50%), linear-gradient(0deg, red, red 50%, transparent 50%), linear-gradient(90deg, red, red 50%, transparent 50%);
      background-size: 100% 1px,1px 100% ,100% 1px, 1px 100%;
      background-repeat: no-repeat;
      background-position: top, right top,  bottom, left top;
      padding: 10px;
   }
   ```
6. box-shadow: 不好控制深色
   ```css
   div {
     box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.5)
   }
   ```
7. transform scale + devicePixelRatio(或媒体查询)
   ```
   scaleY = 1 / devicePixelRatio
   ```
### 7）什么时候需要用到@2x, @3x的图片
- devicePixelRatio为2/3的时候
  ```scss
  @mixin bg-image($url) {
    background-image: url($url + "@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url($url + "@3x.png")
    }
  }
  .logo {
    $size: 30px;
    width: $size;
    height: $size;
    background-size: $size $size;
    background-repeat: no-repeat;
    @include bg-iamge("logo")
  }
  ```
### 8) vue2到vue3的双向绑定原理由Object.defineProperty改为Proxy，优势是什么
1. Proxy优势：
  - 可以直接监听对象非属性， 可直接监听数组变化
  - 返回的是新对象，可以只操作新对象达到目的，Object.defineProperty只能遍历对象属性进行更改
2. Object.defineProperty: 兼容性更佳

### 9）http请求头有哪些内容
注意点 <code>:method:</code>, <code>:authority:</code>, <code>:path:</code>, <code>:scheme:</code>是因为使用http2协议传输且可以压缩传输体积

### 10）webpack使用情况
？？？？不明所以的提问

### 11) Set和Map的用法，Map和Object的区别
- Map和Object的区别：
  - Map的遍历按照推入顺序，Object无序，遍历时则按照浏览器ASCII排序
  - Map可由size得出长度，Object无法直接得出长度
  - Map中的键可以是任意值（函数，对象，基本类型），Object的键必须是String或Symbol
  - Map默认不包含任何键，只有显示插入(Map.set)的键，Object有原型
  - Map可直接被迭代(<code>for (let value of map.values())</code>)，Object只有知道键才能迭代
  - Map在频繁增删键值有更好的表现，Object无优化
- Map和Set的区别用法
  - Map以[key, value]（字典）形式储存，Set以[value, value]（集合）形式储存
  - Set允许储存任何类型的**唯一值**(包括原始值和对象引用)
    ```js
    //数组去重
    let arr = [1, 2, 3, 3, 3, 1]
    console.log([...new Set(arr)]) // [1, 2, 3]
    ```
  - Set插入值时不作类型转换
    ```js
    let set_a = new Set()
    set_a.add(5)
    set_a.add("5")
    console.log([...set_a]) // [5, "5"]
    ```

### 12）mobile适配
过于笼统的提问

### 13）微信小程序原生开发
过于笼统的提问

### 14）commonJS和ES6 Modules区别，ES6 Modules是否在编译的过程中加载还是在运行的过程中加载
- commonJS: require
- ES6 modules: import, export
- ES6 Modules在编译的过程中加载，因为为了实现静态化，尽可能在运行前就知道依赖关系，输入和输出变量
- commonJS和AMD模块都只在运行能确定依赖关系，输入输出
  ```js
  //commonJS
  let { exists, readfile } = require("fs")
  //等同于
  let _fs = require("fs")
  let exists = _fs.exists
  let readfile = _fs.readfile
  ```
  这个过程为整体加载fs模块（加载所有的fs方法），生成对象_fs， 再从_fs读取这两个方法，即为运行时才能得到对象，因此无法在编译时静态优化
  ```js
  //ES6 modules
  import { exists, readfile } from "fs"
  ```
  这个过程仅引入加载了这两个方法，其他方法不加载
- ES6要求引入的模块必须存在，因为编译时必须要读取里面的内容查验，不能出现在运行if else里，而commonJS在编译的时候不管对方是否存在（不校验），可以运行时才去读取
  ```js
  //ES6 modules
  import foo from "./foo.js"
  //commonJS
  if (condition) {
    foo = require("./foo.js")
  }
  ```