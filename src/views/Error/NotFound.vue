<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">This page looks doesn't exist</h1>
        <h2 class="subtitle">
          <button class="button is-primary is-inverted is-outlined" @click="backRoute">Back</button>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "not-found",
  methods: {
    backRoute() {
      this.$router.go(-1);
    }
  }
};
</script>
