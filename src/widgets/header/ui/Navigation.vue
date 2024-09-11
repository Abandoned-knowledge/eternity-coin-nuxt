<script setup lang="ts">
import { menuItems } from "../";
</script>

<template>
  <nav class="flex items-center gap-5">
    <NuxtLink
      class="flex items-center gap-2 px-2 pb-1 font-light text-gray transition-all duration-100 border-b border-transparent"
      v-for="item in menuItems"
      :to="item.route"
    >
      <component :is="item.icon" class="h-5 w-5" />
      <span>{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply border-b-dark;

  & * {
    @apply font-normal text-dark;
  }
}
</style>
