<template>
  <el-menu class="side-menu">
    <el-menu-item>POST</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "side-bar"
};
</script>

<style lang="scss" scoped>
.side-menu {
  height: 100%;
  border-radius: 0;
  .el-menu-item {
    text-align: center;
  }
}
</style>
