<template>
  <div class="dropdown" :style="{height: menuHeight}" ref="dropdownElement">
    <transition @enter="onEnter" :name="slideClass">
      <div v-if="activeMenu === 'prime'" key="prime">
        <div class="menu">
          <slot></slot>
        </div>
      </div>
      <div v-else>
        <div v-for="item in items" :key="item">
          <div v-if="activeMenu === item" :key="item">
            <div class="menu">
              <slot :name="item"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import MenuItem from "./MenuItem";
export default {
  name: "Menu",
  components: {
    // MenuItem
  },
  props: ["items", "activeMenu"],
  data() {
    return {
      active: this.$props.activeMenu,
      menuHeight: null
    };
  },
  mounted() {
    this.menuHeight = this.$refs.dropdownElement.clientHeight + "px";
  },
  methods: {
    onEnter(el) {
      const height = el.offsetHeight;
      this.menuHeight = height + "px";
    }
  },
  computed: {
    slideClass() {
      if (this.activeMenu === "prime") {
        return "menu-slide-left";
      } else {
        return "menu-slide-right";
      }
      //   return "menu-slide-left";
    }
  }
};
</script>