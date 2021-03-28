### ❖ 双向绑定原理 

1. 2.0

ref1:  [https://my.oschina.net/u/4386652/blog/4281447](https://my.oschina.net/u/4386652/blog/4281447)

ref2: [https://juejin.cn/post/6844903479044112391](https://juejin.cn/post/6844903479044112391)

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

> 初始化时，通过Object.defineProperty()给每个属性建立getter/setter，每个都有独立使用一个Dep作为收集器。建立一个Watcher并添加到Dep中。当属性set的时候，由Dep通知Watcher更新页面，get的时候通过Dep查找相关的Watcher依赖，如果没有使用到该属性则不会触发相关函数

> 无法通过直接赋值修改对象值与getter/setter初始化有关，浏览器对Object.observe()支持较差，2.0实际是未作递归的观察，原因为运行速度太差。

2. 3.0: 通过Proxy()

---

### ❖ 实现不同组件间数据交流的方法

1. 父子组件：父 ⇒ 子 props, 子 ⇒ 父 emit

2. vuex

3. 每个new Vue实例的子组件中，根实例可通过$root property访问([ref](https://cn.vuejs.org/v2/guide/components-edge-cases.html)), 父组件实例可通过$parent访问

4. 通过ref访问子组件实例或子元素

5. 依赖注入，指定父组件可提供给后代组件数据/方法， 父provide， 子inject([demo](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-dependency-injection?file=/index.html:618-624))

6. vue.prototype["object_name"]

---

### ❖ computed默认只有getter，但可以自定义setter

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

### ❖ v-for 

- v-if与v-for同时使用时，v-for具有更高优先级 

- v-for遍历时，按Object.keys()结果遍历，但不保证在不同的JS引擎下都一致 

--- 

### ❖ 全局组件

- 全局组组件的注册行为必须在根实例化前发生，props的验证会在组件实例创建前进行

- 组件props的type可为自定义函数([参考](https://cn.vuejs.org/v2/guide/components-props.html))

### ❖ 插槽

DEMO: [https://github.com/ErgoSphere/vue-virtual-scroller](https://github.com/ErgoSphere/vue-virtual-scroller)

### ❖ 生命周期

1. beforeCreated: 什么都不干

2. created: 初始化data，实际已做好绑定，但$el仍为undefined

3. beforeMounted: 编译好模板，生成DOM(实际为替换DIV)

4. mounted: 挂载， 旧$el被新$el替换完毕

5. beforeUpdate: 更新视图之前，未渲染，在这里更改状态不会触发重渲染

6. updated: 视图更新

7. beforeDestroyed: 销毁实例前，实例仍可用

8. destroyed: 当前实例和子实例销毁完成后（服务端渲染期不可用）

### ❖ Vuex

- 通过Vue.mixin对在beforeCreated的时候注入个$store对象

### ❖ [创建对象生成原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### ❖ [Vue 2.x 升级 Vue 3.x](https://github.com/ErgoSphere/es-plugins/blob/master/src/views/Comprehensive/VueMigrating.vue)

### ❖ 使用innerHTML等原生方法后样式失效

样式标签应为<style lang="scss"></style>，不可以使用scoped属性

### ❖ vue prototype 全局变量动态更新

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



