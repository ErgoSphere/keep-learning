import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout/MainContent"

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Layout/Home"),
        meta: {
          headline: "HOME"
        }
      },
      {
        path: "/examples",
        name: "examples-index",
        component: () => import("../views/Examples/Index"),
        meta: {
          headline: "Examples"
        },
        children: [
          {
            path: "d3",
            name: "example-d3",
            component: () => import("../views/D3/Index"),
            meta: {
              headline: "D3"
            }
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
