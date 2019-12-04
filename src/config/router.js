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

  // eslint-disable-next-line no-unused-vars
  router.beforeEach(async (to, form, next) => {
    const { token } = store.state.auth;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (token && (to.path === "/login" || to.path === "/")) {
      next("/home");
    } else if (!token && requiresAuth) {
      next({
        path: "/login",
        query: { redirect: to.fullpath }
      });
    } else {
      next();
    }
  });

  return router;
};
