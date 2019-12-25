/* eslint-disable no-undef */
import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import menu from "./modules/menu";
import JsonDemo from "./modules/jsonDemo";

Vue.use(Vuex);

const store = new Vuex.Store({
  // strict : 嚴格模式, 不是由 mutation 引發的狀態改變將會引起錯誤
  strict: process.env.NODE_ENV !== "production",
  modules: {
    auth,
    menu,
    JsonDemo
  }
});

if (module.hot) {
  // 使 action 和 mutation 成為可熱重載模塊
  module.hot.accept(
    ["./modules/auth", "./modules/menu.js", "./modules/jsonDemo"],
    () => {
      // 加载新模块
      store.hotUpdate({
        modules: {
          auth: require("./modules/auth").default,
          menu: require("./modules/menu").default,
          JsonDemo: require("./modules/jsonDemo").default
        }
      });
    }
  );
}

export default store;
