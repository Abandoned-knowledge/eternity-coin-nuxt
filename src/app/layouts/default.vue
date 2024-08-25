<script setup lang="ts">
const windowStore = useWindowStore();

import UpdateCategory from "~/features/Popup/UpdateCategory";
onMounted(() => {
  windowStore.isMobile = window.innerWidth <= 768;
  window.addEventListener("resize", function () {
    const width = this.innerWidth;
    windowStore.isMobile = width <= 768;
  });
});
</script>

<template>
  <Header class="container" />
  <main class="container flex-grow">
    <slot />
    <UpdateCategory />
  </main>
</template>
