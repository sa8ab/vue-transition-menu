import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    this.event = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", this.event);
  },
  unbind: function() {
    document.body.removeEventListener("click", this.event);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
