<script setup lang="ts">
import { burgerMenuItems } from "../";
const isVisible = ref(false);
const showSidebar = () => (isVisible.value = true);
</script>

<template>
  <Button @click="showSidebar" severity="contrast" class="my-button aspect-square w-10 p-2">
    <BurgerIcon />
  </Button>

  <Sidebar
    block-scroll
    v-model:visible="isVisible"
    position="right"
    header="Menu"
    pt:content="flex flex-col mt-10 items-center"
  >
    <div class="flex w-[80%] flex-col items-center justify-center gap-3">
      <NuxtLink
        v-for="item in burgerMenuItems"
        class="flex w-full items-center justify-center gap-2 px-2 pb-1 font-light text-gray transition-all duration-100"
        :to="item.route"
      >
        <component :is="item.icon" class="h-5 w-5" />
        <span>{{ item.label }}</span>
      </NuxtLink>
    </div>
  </Sidebar>
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
