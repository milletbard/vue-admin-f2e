<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style src="bulma/css/bulma.css"></style>
<style src="element-ui/lib/theme-chalk/index.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>

<style lang="scss">
html,
body {
  margin: 0;
}

.columns {
  margin: 0 !important;
}

.column {
  padding: 0;
}
</style>
