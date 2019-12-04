<template>
  <div class="login-form">
    <el-form ref="form" :rules="rules" :model="form">
      <el-form-item prop="account">
        <el-input placeholder="account" v-model.trim="form.account">
          <template slot="prepend">
            <span class="icon is-small">
              <i class="fa fa-user"></i>
            </span>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          :show-password="true"
          placeholder="password"
          v-model.trim="form.password"
        >
          <template slot="prepend">
            <span class="icon is-small">
              <i class="fa fa-lock"></i>
            </span>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item class="captcha" prop="captcha">
        <el-input :maxlength="4" placeholder="驗證碼" v-model.trim="form.captcha"></el-input>
        <el-input :readonly="true" class="captcha-input" :value="captcha"></el-input>
      </el-form-item>

      <el-form-item class="login-button">
        <el-button type="primary" :loading="authRequest" @click="loginSubmit">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { defaultTo } from "lodash";
export default {
  name: "login-form",
  data: () => ({
    form: {
      account: "",
      password: "",
      captcha: ""
    }
  }),
  computed: {
    ...mapState("auth", ["captcha", "authRequest", "authError"]),
    rules() {
      return {
        account: [
          {
            required: true,
            message: `請輸入帳號`,
            trigger: "blur"
          },
          {
            min: 4,
            max: 12,
            message: "長度必須介於 4 至 12 個字元",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z0-9]+$/,
            message: "格式錯誤",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: `請輸入密碼`,
            trigger: "blur"
          },
          {
            min: 8,
            max: 12,
            message: "長度必須介於 8 至 12 個字元",
            trigger: "blur"
          },
          {
            pattern: /^[a-zA-Z0-9]+$/,
            message: "格式錯誤",
            trigger: "blur"
          }
        ],
        captcha: [
          {
            required: true,
            message: `請輸入驗證碼`,
            trigger: "blur"
          },
          {
            len: 4,
            message: "長度須為 4 個字元",
            trigger: "blur"
          },
          {
            pattern: /^[0-9]+$/,
            message: "格式錯誤",
            trigger: "blur"
          }
        ]
      };
    }
  },
  methods: {
    ...mapActions("auth", ["login", "getCaptchaInfo"]),
    errorTips(authError) {
      const response = {
        422001: "帳號或密碼有誤",
        422002: "驗證碼錯誤"
      };
      this.$message.error(response[authError]);
    },
    loginSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const success = await this.login(this.form);

          if (success) {
            const redirectPath = defaultTo(this.$route.query.redirect, "/");

            const message = "登入成功";
            this.$message({ type: "success", message });
            // eslint-disable-next-line no-console
            this.$router.push(redirectPath);
          } else {
            const { authError } = this;
            this.form.captcha = "";
            this.errorTips(authError);
          }
        }
      });
    }
  },
  created() {
    this.getCaptchaInfo();
  }
};
</script>

<style lang="scss" >
.login-form {
  .el-form-item__content {
    display: flex;
  }

  .captcha {
    .captcha-input .el-input__inner {
      text-align: center;
    }
  }

  .login-button {
    margin-bottom: 0;
    .el-button {
      width: 100%;
    }
  }
}
</style>
