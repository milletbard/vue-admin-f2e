import Layout from "../layout/index.vue";
import Login from "@/views/Login";

import JsonDemoPost from "@/views/JsonDemo/Post";
import JsonDemoComments from "@/views/JsonDemo/Comments";

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
        component: JsonDemoPost
      },
      {
        path: "/json-demo/comments",
        component: JsonDemoComments
      }
    ]
  },
  {
    path: "*",
    component: ErrorNotFound
  }
];
