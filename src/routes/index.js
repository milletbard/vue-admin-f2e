import Layout from "../layout/index.vue";
import Login from "@/views/Login";

import JsonDemo from "@/views/json-demo";

import ErrorNotFound from "@/views/Error/NotFound";

export default [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/json-demo",
        component: JsonDemo
      }
    ]
  },
  {
    path: "*",
    component: ErrorNotFound
  }
];
