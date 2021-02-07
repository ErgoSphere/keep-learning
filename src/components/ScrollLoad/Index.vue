<template>
  <div
    ref="scrollComponent"
    class="y-scroll x-scroll scroll-component cs-pr-md"
    @scroll="scrollAction"
  >
    <slot></slot>
    <div class="row justify-center items-center info-box cs-pa-md">
      <template v-if="locked">无更多数据...</template>
      <template v-else>正在加载</template>
    </div>
  </div>
</template>

<script>
export default {
  name: "scroll-load",

  props: {
    locked: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      width: 0,
      height: 0
    };
  },

  methods: {
    scrollAction: function(e) {
      let scrollHeight = e.target.scrollHeight
      let scrollTop = e.target.scrollTop; //滚动条距离
      let selfHeight = e.target.clientHeight; //自高
      if (scrollHeight - selfHeight - scrollTop < 30 && !this.locked) {
        this.$emit("scroll");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base";
.scroll-component {
  width: 100%;
  height: 100%;
}
.info-box {
  border-bottom: $border;
  border-left: $border;
  border-right: $border
}
</style>