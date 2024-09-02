<script setup lang="ts">
import UpdateCategory from "~/features/Popup/UpdateCategory";
const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUser();
  isLogin();
});
</script>

<template>
  <Header class="container" />
  <main class="container mt-5 flex-grow">
    <slot />
    <UpdateCategory />
  </main>
</template>
