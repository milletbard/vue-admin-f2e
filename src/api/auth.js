import { delay } from "./utils/delay";
import { isEqual } from "lodash";

export const getCaptchaInfo = () => {
  return new Promise(async resolve => {
    await delay(500);
    resolve("1234");
  });
};
export const login = ({ account, password, captcha }) => {
  return new Promise(async (resolve, reject) => {
    await delay(1000);

    const accountAndPasswordSuccess = isEqual(
      { account, password },
      { account: "account", password: "password" }
    );
    const captchaSuccess = isEqual(captcha, "1234");

    if (captchaSuccess && accountAndPasswordSuccess) {
      let result = { token: "tokentokentokentokentoken", user: "user" };
      resolve(result);
    } else {
      if (!accountAndPasswordSuccess) return reject({ errorCode: "422001" });
      if (!captchaSuccess) return reject({ errorCode: "422002" });
    }
  });
};
