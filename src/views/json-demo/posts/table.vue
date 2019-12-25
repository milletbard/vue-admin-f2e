<template>
  <div class="posts-table">
    <el-table :data="postsDatas" :max-height="600" v-loading="postsRequest">
      <el-table-column prop="title" label="標題"></el-table-column>
      <el-table-column prop="body" label="內容"></el-table-column>
      <el-table-column label="操作" width="80px">
        <template slot-scope="scope">
          <el-button @click="deletePosts(scope.row.id)" size="small" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "posts-table",
  props: {
    postsRequest: { type: Boolean, required: true },
    postsDatas: { type: Array, required: true }
  },
  methods: {
    async deletePosts(id) {
      try {
        await this.$confirm("真的要刪除嗎?", "提示", {
          confirmButtonText: "確定",
          cancelButtonClass: "取消",
          showClose: false
        });
        this.$emit("delete-posts", id);
      } catch (e) {
        // cancel
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>