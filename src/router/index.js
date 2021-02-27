import { createWebHistory, createRouter } from "vue-router";
import Layout from "../views/Layout/MainContent"

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
      },
      {
        path: "/comprehensive",
        name: "comprehensive",
        component: () => import("../views/Comprehensive/Index"),
        meta: {
          headline: "Comprehensive"
        },
        children: [
          {
            path: "vue-migrating",
            name: "vue-migrating",
            component: () => import("../views/Comprehensive/VueMigrating"),
            meta: {
              headline: "Vue migrating"
            }
          },
          {
            path: "code-highlight",
            name: "code-highlight",
            component: () => import("../views/Comprehensive/CodeHighlight"),
            meta: {
              headline: "Code with highlight.js"
            }
          }
        ]
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
