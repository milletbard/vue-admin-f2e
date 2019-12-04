import Layout from "../layout/index.vue";

import Login from "@/views/Login";
import Post from "@/views/Post";

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
        path: "/post",
        component: Post
      }
    ]
  }
];
