import Vue from "vue";
import ElementUI from "element-ui";

import initialHttp from "./http";
import createRouter from "./router";

Vue.use(ElementUI);

export default store => {
  const router = createRouter(store);
  initialHttp(store, router);

  return { router };
};
