### ➤ 双向绑定原理: [ref1](https://my.oschina.net/u/4386652/blog/4281447) / [ref2](https://juejin.cn/post/6844903479044112391) / [ref3](https://www.huaweicloud.com/articles/d9c3ab01500c3343fd240da6cc65c8c6.html)
1. **2.0**
- 通过数据劫持发布者-订阅者的方式实现 ⇒ Object.defineProperty ⇒ 将每个数据读写转化为getter/setter， 对象上有get()、set()
- ES5特性，且无法补丁实现，所以不支持IE8及更低版本
- 不能检测到对象属性的添加或删除
- 当实例上的data被使用Object.freeze()时，将阻止修改现有的property，意味着响应系统无法再追踪变化
```js
let book = {}, name = ""
Object.defineProperty(book, 'name', {
  set: function(v) { 
    name = v
  },
  get: function() { 
    return name + "!"
  }
})
book.name = "Opps" 
console.log(book.name) // "Opps!"
```
- 初始化时，通过Object.defineProperty()给每个属性建立getter/setter，每个都有独立使用一个Dep作为收集器。建立一个Watcher并添加到Dep中。当属性set的时候，由Dep通知Watcher更新页面，get的时候通过Dep查找相关的Watcher依赖，如果没有使用到该属性则不会触发相关函数
- 无法通过直接赋值修改对象值与getter/setter初始化有关，浏览器对Object.observe()支持较差，2.0实际是未作递归的观察，原因为运行速度太差。
2. **3.0**: Proxy代理/[ref](https://v3.cn.vuejs.org/guide/reactivity.html#vue-%E5%A6%82%E4%BD%95%E8%B7%9F%E8%B8%AA%E5%8F%98%E5%8C%96)
- 从响应式代理中访问一个嵌套对象时，对象在被返回前也转换为一个代理
- 使用Proxy时被代理对象与原始对象不相等（===）
- Vue reactive仍可使用===
---

### ➤ 实现不同组件间数据交流的方法
1. 父子组件：父 ⇒ 子 props, 子 ⇒ 父 emit
2. vuex
3. 每个new Vue实例的子组件中，根实例可通过$root property访问([ref](https://cn.vuejs.org/v2/guide/components-edge-cases.html)), 父组件实例可通过$parent访问
4. 通过ref访问子组件实例或子元素
5. 依赖注入，指定父组件可提供给后代组件数据/方法， 父provide， 多层子inject([demo1](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-dependency-injection?file=/index.html:618-624), [demo2](https://v3.cn.vuejs.org/guide/component-provide-inject.html#%E5%A4%84%E7%90%86%E5%93%8D%E5%BA%94%E6%80%A7))
6. vue.prototype["object_name"]
7. 构建event bus
bus.js
```js
import Vue from 'vue'
const bus = new Vue()
export default bus
```
component a:
```js
bus.$emit('event-name', params)
```
component b:
```js
bus.$on('event-name', res => {})
```

---
### ➤ computed默认只有getter，但可以自定义setter
```js
new Vue({
  data: {
    a: 1
  },
  computed: {
    counter: {
      get: function () {
        return "nyanyanya"
      },
      set: function () {
        this.a = 2
      }
    }
  }
})
```

---
### ➤ v-for
- v-if与v-for同时使用时，v-for具有更高优先级
- v-for遍历时，按Object.keys()结果遍历，但不保证在不同的JS引擎下都一致 

---
### ➤ 全局组件
- 全局组组件的注册行为必须在根实例化前发生，props的验证会在组件实例创建前进行
- 组件props的type可为自定义函数([参考](https://cn.vuejs.org/v2/guide/components-props.html))

---
### ➤ 插槽
DEMO: [https://github.com/ErgoSphere/vue-virtual-scroller](https://github.com/ErgoSphere/vue-virtual-scroller)

---
### ➤ 生命周期
1. beforeCreated: 什么都不干
2. created: 初始化data，实际已做好绑定，但$el仍为undefined
3. beforeMounted: 编译好模板，生成DOM(实际为替换DIV)
4. mounted: 挂载， 旧$el被新$el替换完毕
5. beforeUpdate: 更新视图之前，未渲染，在这里更改状态不会触发重渲染
6. updated: 视图更新
7. beforeDestroyed: 销毁实例前，实例仍可用
8. destroyed: 当前实例和子实例销毁完成后（服务端渲染期不可用）

---
### ➤ Vuex
通过Vue.mixin对在beforeCreated的时候注入个$store对象

---
### ➤ [创建对象生成原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---
### ➤ [Vue 2.x 升级 Vue 3.x](https://github.com/ErgoSphere/es-plugins/blob/master/src/views/Comprehensive/VueMigrating.vue)

---
### ➤ 使用innerHTML等原生方法后样式失效
样式标签应为<style lang="scss"></style>，不可以使用scoped属性

---
### ➤ vue prototype 全局变量动态更新
以vuex存储状态更新值为例
```js
Vue.mixin({
  computed: {
    LOCALE: function() {
      return store.state.sys.info ? store.state.sys.info.lang_packet: {}
    }
  }
})
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>"
}).$mount("#app")
```

---
### ➤ 父子组件生命周期顺序
1. 加载渲染：父beforeCreate → 父created → 父beforeMount → 子beforeCreate → 子created → 子beforeMount → 子mounted → 父mounted
2. 子组件更新：父beforeUpdate → 子beforeUpdate → 子updated → 父updated
3. 父组件更新：父beforeUpdate → 父updated
4. 销毁：父beforeDestroy → 子beforeDestroy → 子destroyed → 父destroyed

---
### ➤ Vue打包vendor过大解决
- vue-router懒加载
- gzip压缩
- CDN引入js和css
- webpack配置external，不打包第三方库
- 配置DLLPlugin和DLLReferencePlugin，将引用依赖提取

---
### ➤ Vue切换路由时保存草稿功能实现
- beforeRouteLeave
- keep-alive

---
### ➤ Vue的模板语法引擎？
- Vue使用的Mustache模板引擎（双大括号语法）

---
### ➤ keep-alive使用注意
- 初次进入：created → mounted → activated
- 退出时触发deactivated
- 再次进入仅触发activated

---
### ➤ vue动态组件 + keep-alive
```
<keep-alive>
<component :is="current"></component>
</keep-alive>
<script>
import ComponentA from "./ComponentA"
import ComponentB from  "./ComponentB"
export default {
  components: {
    ComponentA,
    ComponentB
  },
  
  data () {
    return {
      current: "ComponentA"
    }
  }
}
</script>
```

---
### ➤ Vue diff算法（未够详细解答
- 实现
    1. 由真实DOM生成虚拟DOM树
    2. 当某个DOM节点数据变化时，生成一个新的Vnode
    3. 新的Vnode和旧的oldVnode进行对比
    4. 通过patch函数给真实DOM打补丁
- 优点: Vue的虚拟DOM更新为**异步更新队列**，如想马上拿到DOM更新后的DOM信息，使用<code>Vue.nextTick</code>
- Vue diff算法只作同层级元素比较，不跨级

---
### ➤ vue2到vue3的双向绑定原理由Object.defineProperty改为Proxy，优势是什么
1. Proxy优势：
- 可以直接监听对象非属性， 可直接监听数组变化
- 返回的是新对象，可以只操作新对象达到目的，Object.defineProperty只能遍历对象属性进行更改
2. Object.defineProperty: 兼容性更佳

---
### ➤ vue-router实现原理，配置history mode和hash mode方式
- **hash mode**
    - hash mode是vue-router的默认模式，hash指url描点，当描点发生变化时，浏览器只修改访问历史记录，不重新获取页面，根椐描点值渲染指定的dom
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

---
### vue性能优化
- 避免响应所有数据：在data的数据都会增加getter, setter且收集watcher，不需要响应的数据可直接定义在实例上
- 纯展示不改变的大量数据用<code>Object.freeze</code>来冻结，避免vue劫持数据
  ```js
  export default {
    data : () => ({
      users: {}
    }),
    async created() {
      const users = await axios.get("/api/users")
      this.users = Object.freeze(users)
    }
  }
  ```
  

