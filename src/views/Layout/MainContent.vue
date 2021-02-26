<template>
  <div class="frame">
    <sidebar></sidebar>
    <div class="content-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/views/Layout/Sidebar";
export default {
  name: "MainContent",

  components: {
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base";
.frame {
  width: 100%;
  height: 100%;
  padding-left: $sidebar-w;
  .content-main {
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: 0 $default-padding;
  }
}
</style>
