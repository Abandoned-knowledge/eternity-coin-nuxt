<script setup lang="ts">
const windowStore = useWindowStore();
const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUser();

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
