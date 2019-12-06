<template>
  <el-dropdown trigger="click" @command="pushRoute">
    <div class="nav-bar-button">
      <span class="icon">
        <i class="fa fa-bars"></i>
      </span>
    </div>
    <el-dropdown-menu class="nav-menu">
      <el-dropdown-item
        v-for="item in main"
        :key="item.name"
        :command="item.path"
        :class="renderSelected(item.menuPath)"
      >
        <span class="icon">
          <i :class="['fa', `fa-${item.icon}`]" aria-hidden="true"></i>
        </span>
        <span class="name">{{ item.name }}</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
import { startsWith } from "lodash";
export default {
  name: "nav-menu",
  computed: { ...mapGetters("menu", ["main"]) },
  methods: {
    pushRoute(path) {
      window.open(path, "_self");
    },
    renderSelected(menuPath) {
      return { "is-active": startsWith(this.$route.path, `/${menuPath}`) };
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-menu.el-dropdown-menu {
  .el-dropdown-menu__item {
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
    .icon {
      margin-right: 10px;
    }
    &.is-active {
      color: #20a0ff;
    }
  }
}
</style>
