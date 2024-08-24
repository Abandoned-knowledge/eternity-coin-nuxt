<script setup lang="ts">
import { burgerMenuItems } from "../";
const menu = ref();

const toggle = (event: Event) => {
  menu.value.toggle(event);
};
</script>

<template>
  <Button @click="toggle" severity="contrast" class="my-button aspect-square w-10 p-2">
    <BurgerIcon />
  </Button>

  <Menu
    unstyled
    pt:root="rounded p-2 shadow bg-white"
    pt:list="flex flex-col gap-2"
    ref="menu"
    :model="burgerMenuItems"
    :popup="true"
  >
    <template #item="{ item }">
      <NuxtLink
        class="flex items-center gap-2 px-2 pb-1 font-light text-gray transition-all duration-100"
        :to="item.route"
      >
        <component :is="item.icon" class="h-5 w-5" />
        <span>{{ item.label }}</span>
      </NuxtLink>
    </template>
  </Menu>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply border-b border-b-dark;

  & * {
    @apply font-normal text-dark;
  }
}
.my-button {
  @apply md:hidden;
}
</style>
