import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import hljs from "highlight.js";
import "highlight.js/scss/monokai-sublime.scss";
import "./assets/scss/common.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(hljs.vuePlugin)
  .mount("#app");
