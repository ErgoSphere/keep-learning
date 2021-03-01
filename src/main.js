import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "prismjs";
import "prismjs/themes/prism.css";
import Prism from "vue-prism-component";

import "./assets/scss/common.scss";

const vueApp = createApp(App);
vueApp
  .use(store)
  .use(router)
  .component("Prism", Prism)
  .mount("#app");
