<template>
<div @touchstart="startEvent" @touchmove="moveEvent">

</div>
</template>

<script>
export default {
  name: "竖向触摸手势判断",

  data () {
    return {
      startY: 0
    }
  },

  methods: {
    startEvent: function(e) {
      this.startY = e.changedTouches[0].pageY
    },

    moveEvent: function(e) {
      let moveEndY = e.changedTouches[0].pageY
      let diff = moveEndY - this.startY
      if (diff > 0) {
        console.log('下滑')
      } else if (diff < 0) {
        console.log('上滑')
      }
    }
  }
};
</script>

<style scoped>

</style>