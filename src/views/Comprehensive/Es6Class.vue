<template>
  <div class="paragraph">
    <h4>1.</h4>
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
</template>

<script>
export default {
  name: "Es6Class"
};
</script>

<style scoped>

</style>