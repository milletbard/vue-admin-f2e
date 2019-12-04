<template>
  <div class="layout">
    <navbar></navbar>
    <section class="hero is-light is-fullheight-with-navbar">
      <div class="columns main-content">
        <div class="column is-2">
          <side-bar></side-bar>
        </div>

        <div class="column module-content">
          <div class="section">
            <transition name="el-fade-in-linear" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Navbar, SideBar } from "./components";
export default {
  name: "layout",
  components: {
    Navbar,
    SideBar
  }
};
</script>

<style lang="scss" scoped>
.module-content {
  overflow: scroll;
}
</style>
