<template>
  <div class="layout">
    <navbar></navbar>
    <div class="columns main-content">
      <div class="column is-2">
        <side-bar></side-bar>
      </div>
      <div class="column module-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import SideBar from "./SideBar"
export default {
  name: "layout",
  components: {
    Navbar,
    SideBar
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.module-content {
  overflow: scroll;
}
.main-content {
  flex-grow: 1;
}
</style>
