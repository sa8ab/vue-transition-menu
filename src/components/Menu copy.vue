<template>
  <div class="dropdown" :style="{height: menuHeight}" ref="dropdownElement">
    <transition @enter="onEnter" :name="slideClass">
      <div v-if="activeMenu === 'prime'" key="prime">
        <div class="menu">
          <slot></slot>
          <!-- <MenuItem @changeMenu="changeMenu" name="intui">
            <div name="leftIcon">LeftIcon</div>intui
          </MenuItem>
          <MenuItem @changeMenu="changeMenu" name="second">Second</MenuItem>
          <MenuItem @changeMenu="changeMenu" name="alter">Alternative</MenuItem>-->
        </div>
      </div>
      <div v-if="activeMenu === 'second'" key="second">
        <div class="menu">
          <div class="menu-item" @click="changeMenu('prime')">Second Item</div>
        </div>
      </div>
      <div v-if="activeMenu === 'alter'" key="alter">
        <div class="menu">
          <div class="menu-item" @click="changeMenu('prime')">Alternative Item</div>
        </div>
      </div>
      <div v-if="activeMenu === 'intui'" key="intui">
        <div class="menu">
          <div class="menu-item" @click="changeMenu('prime')">Intuitive Item</div>
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
  props: ["changeItemUsage"],
  data() {
    return {
      activeMenu: "prime",
      menuHeight: null
    };
  },
  mounted() {
    this.menuHeight = this.$refs.dropdownElement.clientHeight + "px";
  },
  methods: {
    changeMenu(menu) {
      this.activeMenu = menu;
    },
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