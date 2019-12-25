<template>
  <div>
    <posts-table :postsRequest="postsRequest" :postsDatas="postsDatas"></posts-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import postsTable from "./table";
export default {
  name: "post",
  components: {
    postsTable
  },
  computed: {
    ...mapState("JsonDemo/posts", ["postsRequest", "postsDatas"])
  },
  methods: {
    ...mapActions("JsonDemo/posts", ["getPosts", "deletePosts"])
  },

  created() {
    this.getPosts();
    this.deletePosts(1);
  }
};
</script>

<style lang="scss" scoped></style>
