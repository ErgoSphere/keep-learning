<template>
<div class="sidebar">
  <sidebar-tree></sidebar-tree>
</div>
</template>

<script>
import SidebarTree from "./SidebarTree/Tree"
export default {
  name: "Sidebar",

  components: { SidebarTree }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base";
.sidebar {
  width: $sidebar-w;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
  border-right: #ddd 1px solid;
  padding: $default-padding;
}
</style>