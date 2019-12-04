import { getCaptchaInfo, login } from "@/api/auth";
import { setToken } from "@/utils/auth";
const state = {
  authRequest: false,
  authError: null,
  captcha: null,
  token: null
};
const mutations = {
  SET_CAPTCHA: (state, result) => {
    state.captcha = result;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  AUTH_REQUEST: state => {
    state.authError = null;
    state.authRequest = true;
  },
  AUTH_SUCCESS: (state, { token, user }) => {
    state.token = token;
    state.user = user;
    state.authRequest = false;
  },
  AUTH_FAILURE: (state, e) => {
    state.authError = e.errorCode;
    state.authRequest = false;
  }
};
const actions = {
  getCaptchaInfo: async ({ commit }) => {
    const result = await getCaptchaInfo();
    commit("SET_CAPTCHA", result);
  },
  setToken: async ({ commit }, token) => {
    // eslint-disable-next-line no-console
    console.log(token);
    commit("SET_TOKEN", token);
  },
  login: async ({ commit }, form) => {
    commit("AUTH_REQUEST");
    try {
      const result = await login(form);

      setToken(result.token);
      commit("AUTH_SUCCESS", result);
      return true;
    } catch (e) {
      commit("AUTH_FAILURE", e);
    }
    return false;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
