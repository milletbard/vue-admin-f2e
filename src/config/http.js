import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_HOST;

// eslint-disable-next-line no-unused-vars
export default (store, router) => {
  //axios請求攔截器，如果登入成功設定 headers token
  axios.interceptors.request.use(
    config => {
      return config;
    },
    error => Promise.reject(error)
  );

  //axios響應攔截器，如果網頁錯誤導轉到 error 頁面
  axios.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    }
  );
};
