import { getPosts, deletePosts } from "@/api/json-demo/posts.js";

const state = {
  postsRequest: false,
  postsDatas: [],
  postsFailure: null
};

const mutations = {
  REQUEST: state => {
    state.postsRequest = true;
    state.postsFailure = null;
  },
  GET_SUCCESS: state => {
    state.postsRequest = false;
  },
  GETPOSTS_SUCCESS: (state, data) => {
    state.postsDatas = data;
  },
  FAILURE: (state, e) => {
    state.postsRequest = false;
    state.postsFailure = e;
  }
};

const actions = {
  getPosts: async ({ commit }) => {
    commit("REQUEST");
    try {
      const { data } = await getPosts();

      commit("GETPOSTS_SUCCESS", data);
      commit("GET_SUCCESS");
    } catch (e) {
      //
      commit("FAILURE", e);
    }
  },
  deletePosts: async ({ commit }, id) => {
    commit("REQUEST");
    try {
      //
    } catch (e) {
      //
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
