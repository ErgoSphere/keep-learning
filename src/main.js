import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import hljs from "highlight.js"
import "highlight.js/scss/monokai-sublime.scss"
import "./assets/scss/common.scss"

Vue.use(hljs.vuePlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
