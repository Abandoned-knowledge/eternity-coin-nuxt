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
  <Toast />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
