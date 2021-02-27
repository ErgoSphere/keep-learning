<template>
<div class="sidebar-tree">
  <template v-for="(item, i1) in list" :key="i1">
    <tree-item :tree-data="item" :font-size="18"></tree-item>
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
      list: routes[0].children
    }
  }
};
</script>

<style lang="scss">
.sidebar-tree {
  .sidebar-tree-item .tree-link-item{
    font-color: #2c3e50 !important;
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