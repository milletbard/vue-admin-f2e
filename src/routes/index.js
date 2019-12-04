import Login from "@/views/Login";
import Layout from "../layout/index.vue";

export default [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Layout,
    meta: { requiresAuth: true }
  }
];
