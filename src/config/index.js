// import Vue from "vue";

import initialHttp from "./http";
import createRouter from "./router";

export default store => {
  const router = createRouter(store);
  initialHttp(store, router);

  return { router };
};
