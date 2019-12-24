<template>
  <div>post</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "post",
  computed: {
    ...mapState(["jsonDemo/post"],"postdatas")
  },
  created(){
   console.log(postdatas)
  }
};
</script>

<style lang="scss" scoped></style>
