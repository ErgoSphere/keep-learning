### 双向绑定原理 

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

2. 3.0: 通过Proxy()

---

### 实现不同组件间数据交流的方法

1. 父子组件：父 ⇒ 子 props, 子 ⇒ 父 emit

2. vuex

3. 每个new Vue实例的子组件中，根实例可通过$root property访问([ref](https://cn.vuejs.org/v2/guide/components-edge-cases.html)), 父组件实例可通过$parent访问

4. 通过ref访问子组件实例或子元素

5. 依赖注入，指定父组件可提供给后代组件数据/方法， 父provide， 子inject([demo](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-dependency-injection?file=/index.html:618-624))

6. vue.prototype["object_name"]

---

### computed默认只有getter，但可以自定义setter

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

### v-for 

- v-if与v-for同时使用时，v-for具有更高优先级 

- v-for遍历时，按Object.keys()结果遍历，但不保证在不同的JS引擎下都一致 

--- 

### 全局组件

- 全局组组件的注册行为必须在根实例化前发生，props的验证会在组件实例创建前进行

- 组件props的type可为自定义函数([参考](https://cn.vuejs.org/v2/guide/components-props.html))

### 插槽

DEMO: [https://github.com/ErgoSphere/vue-virtual-scroller](https://github.com/ErgoSphere/vue-virtual-scroller)