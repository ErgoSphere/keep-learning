/**
 * Created by ErgoSphere on 2018/10/17.
 *
 * 点击外部关闭
 *
 */
import Vue from "vue";
Vue.directive("clickOutside", {
  bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  unbind(el, binding) {
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
});
