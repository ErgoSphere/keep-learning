<template>
<div @scroll="scrollEvent" class="index-page">
  <ul class="index-tabs" ref="indexTabs" :class="{'fixed': tabFixed}">
    <li></li>
    <li></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "吸附tabbar",

  data () {
    return {
      tabFixed: false,
      tabPosition: {}
    }
  },

  mounted() {
    this.setTabPosition()
  },

  methods: {
    scrollEvent: function (e) {
      let tab = this.$refs.indexTabs
      if (tab) {
        let tabOffTop = tab.getBoundingClientRect().top
        if (this.tabFixed) {
          if (e.target.scrollTop < this.tabPosition.top) {
            this.tabFixed = false
          }
        }else if (tabOffTop <= 0) {
          this.tabFixed = true
        }
      }

    },

    setTabPosition: function () {
      this.tabPostion = this.$refs.indexTabs.getBoundingClientRect()
    }
  }
};
</script>

<style lang="scss" scoped>
.index-page {
  height: 100%;
  overflow: scroll;
}
</style>