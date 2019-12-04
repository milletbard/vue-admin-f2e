import Vue from "vue";
import ElementUI from "element-ui";

import initialHttp from "./http";
import createRouter from "./router";

import { getToken } from "@/utils/auth";

Vue.use(ElementUI);

export default store => {
  const token = getToken();

  if (store.state.auth.token !== token) {
    store.dispatch("auth/setToken", token);
  }
  const router = createRouter(store);
  initialHttp(store, router);

  return { router };
};
