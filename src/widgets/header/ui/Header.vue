<script setup lang="ts">
import Buttons from "./Buttons.vue";
import Navigation from "./Navigation.vue";
import Burger from "./Burger.vue";
</script>

<template>
  <header class="flex justify-between items-center mt-5">
    <NuxtLink to="/" class="flex items-center text-dark gap-2 text-title cursor-pointer">
      <LogoIcon /> <span class="hidden lg:inline-block">Eternity Coin</span>
    </NuxtLink>
    <Navigation class="hidden md:flex" />
    <Burger />
    <Buttons class="hidden md:flex" />
  </header>
</template>
