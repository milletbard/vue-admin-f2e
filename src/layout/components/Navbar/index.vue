<template>
  <nav class="navbar is-info" role="navigation" aria-label="dropdown navigation">
    <div class="columns">
      <div class="column is-narrow">
        <nav-menu></nav-menu>
      </div>

      <div class="column is-narrow">
        <nav-brand></nav-brand>
      </div>

      <div class="column"></div>

      <div class="column is-narrow">
        <nav-logout></nav-logout>
      </div>
    </div>
  </nav>
</template>

<script>
import NavMenu from "./NavMenu";
import NavBrand from "./NavBrand";
import NavLogout from "./NavLogout";

export default {
  name: "navbar",
  components: {
    NavMenu,
    NavBrand,
    NavLogout
  }
};
</script>

<style lang="scss">
.nav-bar-button {
  padding: 15px 20px;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    background-color: #3293dc;
  }
}
</style>

<style lang="scss" scoped>
.columns {
  width: 100%;
  flex-shrink: 0; // 在空間不足的狀況下等比例縮小
  .column {
    display: flex;
    align-items: center;
  }
}
</style>
