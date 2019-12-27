/* eslint-disable no-console */
import menu from "@/constants/menu";
import { map, head, find } from "lodash";
const state = { menu };

const getters = {
  defaultRoute: () => "/json-demo",
  main: ({ menu }) => () => {
    return menu;
  }
};

export default {
  namespaced: true,
  state,
  getters
};
