import Vue from "vue";
import Router from "vue-router";
import routes from "@/routes";

Vue.use(Router);

// eslint-disable-next-line no-unused-vars
export default store => {
  const router = new Router({
    routes,
    mode: "history",
    scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 }
  });

  return router;
};
