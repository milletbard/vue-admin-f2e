<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">This page looks doesn't exist</h1>
        <h2 class="subtitle">
          <router-link
            class="button is-primary is-inverted is-outlined"
            :to="defaultRoute"
            >Back</router-link
          >
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "not-found",
  computed: mapGetters("menu", ["defaultRoute"])
};
</script>
