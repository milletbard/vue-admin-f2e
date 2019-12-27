<template>
  <el-menu class="side-menu" :router="true" :default-active="activeIndex">
    <el-menu-item v-for="item in menu" :key="item.name" :index="item.path">{{ item.name }}</el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { compose, split, nth, take, join } from "lodash/fp";

export default {
  name: "side-bar",
  data: () => ({
    activeIndex: ""
  }),
  computed: {
    ...mapState("menu", ["menu"])
  },
  methods: {
    updateActiveIndex() {
      const { path } = this.$route;
      const getActiveIndex = compose(
        join("/"),
        take(3),
        split("/")
      );

      this.activeIndex = getActiveIndex(path);
    }
  },
  created() {
    this.updateActiveIndex();
  },
  updated() {
    this.updateActiveIndex();
  }
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
