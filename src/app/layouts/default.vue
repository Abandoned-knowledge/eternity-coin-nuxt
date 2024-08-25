<script setup lang="ts">
const windowStore = useWindowStore();

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
  </main>
</template>

<style lang="scss" scoped></style>
