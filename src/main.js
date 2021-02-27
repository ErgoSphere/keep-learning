import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import highlight from "@/utils/highlight";
import "./assets/scss/common.scss";

const vueApp = createApp(App)
vueApp.use(store)
  .use(router)
  .use(highlight)
  .mount("#app");
