<template>
  <div class="posts-table">
    <el-table :data="postsDatas" :max-height="600" v-loading="postsRequest">
      <el-table-column prop="title" label="標題"></el-table-column>
      <el-table-column prop="body" label="內容"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "posts-table",
  props: {
    postsRequest: { type: Boolean, required: true },
    postsDatas: { type: Array, required: true }
  }
};
</script>

<style lang="scss" scoped>
.posts-table {
}
</style>