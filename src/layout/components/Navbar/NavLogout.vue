<template>
  <div class="nav-bar-button" @click="handleLogin">
    <span class="icon">
      <i class="fa fa-sign-out"></i>
    </span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "nav-logout",
  methods: {
    ...mapActions("auth", ["logout"]),
    async handleLogin() {
      try {
        const success = await this.$confirm(
          `登出後需重新登入，是否確定？`,
          `提示`,
          {
            confirmButtonText: `登出`,
            cancelButtonText: `取消`,
            confirmButtonClass: "el-button--danger",
            type: "waring"
          }
        );

        if (success) {
          await this.logout();
          this.$router.push("/login");
          this.$message({
            type: "success",
            message: "登出成功"
          });
        }
      } catch (error) {
        //
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
