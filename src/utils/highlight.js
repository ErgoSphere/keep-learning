/**
 * Created by ErgoSphere on 2021/2/27
 **/
import hljs from "highlight.js";
import "highlight.js/styles/rainbow.css";

const highlightBinds = (el, binding) => {
  // on first bind, highlight all targets
  let targets = el.querySelectorAll("pre code");
  targets.forEach(target => {
    if (typeof binding.value === "string") {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      target.textContent = binding.value;
    }
    hljs.highlightBlock(target);
  });
}

const install = function(Vue) {
  Vue.directive("highlight", {
    mounted(el, binding) {
      highlightBinds(el, binding)
    },
    updated(el, binding) {
      highlightBinds(el, binding)
    }
  });
};

export default install;
