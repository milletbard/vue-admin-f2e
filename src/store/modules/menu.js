import menu from "@/constants/menu";
import { map, head } from "lodash";
const state = { menu };

const getters = {
  main: ({ menu }) => {
    const gotModuleDefaultPath = sub => head(sub).path;

    const mapModuleDefaultPath = ({ sub, ...module }) => ({
      ...module,
      path: gotModuleDefaultPath(sub)
    });

    return map(menu, mapModuleDefaultPath);
  }
};

export default {
  namespaced: true,
  state,
  getters
};
