<template>
  <div>
    <div class="paragraph">
      <h4>1. Vue, Vue Router及Vuex写法迁移</h4>
      <p>- Vue Router</p>
      <pre>
        <prism language="javascript">
          //vue 2.x
          import Vue from "vue"
          import VueRouter from "vue-router
          Vue.use(VueRouter)
          const router = new VueRouter({
            mode: "history",
            routes
          })
          //vue 3.x
          import { createWebHistory, createRouter } from "vue-router"
          const router = createRouter({
            history: createWebHistory(process.env.BASE_URL),
            routes
          });
        </prism>
      </pre>

      <p>- Vuex</p>
      <pre>
        <prism language="javascript">
          //vue 2.x
          import Vue from "vue"
          import Vuex from "vuex
          Vue.use(Vuex)
          export default new Vuex.store({
            modules: {}
          })
          //vue 3.x
          import { createStore } from "vuex"
          export const store = createStore({
            modules: {}
          })
        </prism>
      </pre>

      <p>- Vue</p>
      <pre>
        <prism language="javascript">
          //2.x
          import Vue from "vue"
          import App from "./App.vue"
          import router from "./router"
          import store from "./store"
          new Vue({
            router,
            store,
            render: h => h(App)
          }).$mount("#app")

          //3.x
          import { createApp } from "vue"
          import App from "./App.vue"
          import router from "./router"
          import { store } from "./store"
          const vueApp = createApp(App)
          vueApp.use(store).use(router).mount("#app")
        </prism>
      </pre>
    </div>
    <div class="paragraph">
      <h4>2. template使用v-for</h4>
      <p>2.x中key不允许放置在&lt;template&gt;标签上，3.x必须放在template上</p>
      <i>*使用vue-cli安装eslint时，vue-essential会对key的位置作校验，必须使用vue3-essential作为规则拓展</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueUpgrade",

  data() {
    return {
      vueRouterCode:
        "import { createWebHistory, createRouter } from 'vue-router';"
    };
  }
};
</script>

<style scoped></style>
