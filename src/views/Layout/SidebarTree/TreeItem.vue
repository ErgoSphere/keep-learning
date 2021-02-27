<template>
  <div class="sidebar-tree-item">
    <div
      :style="{
        'font-size': fontSize + 'px',
        'padding-left': (20 - fontSize) * 8 + 'px'
      }"
    >
      <router-link
        v-if="treeData.meta && treeData.meta.headline"
        :to="modifyRoute"
        class="tree-link-item"
        >{{ treeData.meta.headline }}</router-link
      >
      <template v-else>--</template>
    </div>
    <div class="sub-tree" v-if="treeData.children && treeData.children.length">
      <template v-for="(item, i) in treeData.children" :key="i">
        <tree-item
          :tree-data="item"
          :font-size="fontSize - 2"
          :pre-link="modifyRoute"
        ></tree-item>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeItem",

  props: {
    treeData: {
      type: Object
    },

    fontSize: {
      type: Number,
      default: 20
    },

    preLink: {
      type: String,
      default: ""
    }
  },

  computed: {
    modifyRoute: function() {
      let td = this.treeData
      return td.path.indexOf('/') > -1 ? td.path : (this.preLink + '/' + td.path)
    }
  }
};
</script>

<style scoped></style>
