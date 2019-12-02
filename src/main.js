import Vue from "vue";
import App from "./App.vue";
import initialConfig from "@/config";
import store from "@/store";

const { router } = initialConfig(store);

Vue.config.devtools = process.env.NODE_ENV !== "production";
Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
