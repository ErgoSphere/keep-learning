<template>
  <div class="dialog" :style="{ 'z-index': z_index }">
    <div
      class="dialog-wrapper column items-center justify-center"
      @click.stop="bgCloseModal"
    >
      <div class="dialog-box" :style="{ 'z-index': z_index + 1 }">
        <div class="dialog-header">
          <div class="dialog-headline">
            <slot name="header"></slot>
          </div>
          <div class="dialog close-button" @click="closeModal"></div>
        </div>
        <div class="dialog-content y-scroll x-scroll">
          <slot name="content"></slot>
        </div>
        <div class="dialog-footer row items-center justify-end">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog",

  props: {
    bgClose: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      z_index: -1
    };
  },

  computed: {
    dialogStatus: function() {
      return this.show;
    }
  },

  watch: {
    dialogStatus: function(v, ov) {
      if (v === true) {
        this.z_index = new Date().getTime();
      } else {
        this.z_index = -1;
      }
    }
  },

  methods: {
    bgCloseModal: function() {
      if (this.bgClose) {
        this.closeModal();
      }
    },

    closeModal: function() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.dialog-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
.dialog-box {
  width: auto;
  height: auto;
  max-width: 96%;
  max-height: 96%;
  background: white;
}
</style>
