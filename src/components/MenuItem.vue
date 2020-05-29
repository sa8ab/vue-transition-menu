<template>
  <div class="menu-item" @click="itemClick">
    <slot name="leftIcon"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["name"],
  methods: {
    itemClick() {
      this.$emit("changeMenu", this.$props.name);
    }
  }
};
</script>