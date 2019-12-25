<template>
  <div>
    <posts-table
      :postsRequest="postsRequest"
      :postsDatas="postsDatas"
      @delete-posts="deletePostsHandlar"
    ></posts-table>
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
    ...mapActions("JsonDemo/posts", ["getPosts", "deletePosts"]),
    async deletePostsHandlar(id) {
      const success = await this.deletePosts(id);
      if (success)
        this.$message({
          message: `刪除成功，資料並不會真的被刪除，僅提供模擬`,
          type: "success"
        });
    }
  },

  created() {
    this.getPosts();
  }
};
</script>

<style lang="scss" scoped></style>
