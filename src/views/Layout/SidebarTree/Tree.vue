<template>
<div class="sidebar-tree">
  <template v-for="(item, i) in list" >
    <tree-item :key="i" :tree-data="item" :font-size="20"></tree-item>
  </template>
</div>
</template>

<script>
import TreeItem from "@/views/Layout/SidebarTree/TreeItem";
import { routes } from "@/router";

export default {
  name: "Tree",

  components: {
    TreeItem
  },

  data () {
    return {
      list: routes
    }
  }
};
</script>

<style lang="scss">
.sidebar-tree {
  .sidebar-tree-item {
    font-color: #2c3e50;

  }
  .tree-link-item {
    text-decoration: none;
    &:visited {
      color: transparent;
    }
    &:hover {
      color: #42b983;
    }
    //&.router-link-active {
    //  color: #1c9461;
    //}
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>