import Layout from "../layout/index.vue";

import Login from "@/views/Login";
import Post from "@/views/Post";

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
        path: "/json-demo/post",
        component: Post
      }
    ]
  },
  {
    path: "*",
    component: ErrorNotFound
  }
];
