<template>
  <div class="main">
    <div class="trace-item">
      <div @click="toggleMenu" class="navigation-item">
        <MenuI class="menu-icon trace-icon" />
      </div>

      <div v-if="isOpen" class="menu-used">
        <Menu :items="items" :activeMenu="activeMenu">
          <div class="items">
            <div class="menu-item" @click="changeMenu('intui')">
              <SettingI class="menu-icon" />
              <span>Setting</span>
            </div>
            <div class="menu-item" @click="changeMenu('second')">
              <PersonI class="menu-icon" />
              <span>Profile</span>
            </div>
            <div class="menu-item" @click="changeMenu('alter')">
              <LogoutI class="menu-icon" />
              <span>Logout</span>
            </div>
          </div>
          <template #intui>
            <div class="menu-content" @click="changeMenu('prime')">
              <BackI class="menu-icon" />
            </div>
          </template>
          <template #second>
            <div class="menu-content" @click="changeMenu('prime')">second content</div>
          </template>
          <template #alter>
            <div class="menu-content" @click="changeMenu('prime')">alter content</div>
          </template>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import SettingI from "vue-ionicons/dist/ios-settings.vue";
import PersonI from "vue-ionicons/dist/ios-person.vue";
import LogoutI from "vue-ionicons/dist/ios-log-out.vue";
import BackI from "vue-ionicons/dist/ios-arrow-back.vue";
import MenuI from "vue-ionicons/dist/ios-menu.vue";
export default {
  name: "App",
  components: {
    Menu,
    SettingI,
    PersonI,
    LogoutI,
    BackI,
    MenuI
  },
  data() {
    return {
      items: ["intui", "second", "alter"],
      activeMenu: "prime",
      isOpen: false
    };
  },
  methods: {
    changeMenu(menu) {
      this.activeMenu = menu;
    },
    openMenu() {
      this.isOpen = true;
    },
    closeMenu() {
      this.isOpen = false;
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.activeMenu = "prime";
    }
  }
};
</script>

<style>
@import "css.css";
</style>
