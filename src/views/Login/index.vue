<template>
  <section class="hero is-info is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Vue Admin F2e</h1>
        <h2 class="subtitle">Content Management System</h2>
        <div class="box">
          <login-form />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from "./LoginForm";

export default {
  name: "login",
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    width: 360px;
  }
}
</style>
