/* eslint-disable no-console */
import menu from "@/constants/menu";
import { map, head, find } from "lodash";
const state = { menu };

const getters = {
  main: ({ menu }) => {
    const gotModuleDefaultPath = sub => head(sub).path;

    const mapModuleDefaultPath = ({ sub, ...module }) => ({
      ...module,
      path: gotModuleDefaultPath(sub)
    });

    return map(menu, mapModuleDefaultPath);
  },
  sub: ({ menu }) => menuPath => {
    const main = find(menu, { menuPath }) ? find(menu, { menuPath }) : [];

    return main.sub;
  }
};

export default {
  namespaced: true,
  state,
  getters
};
