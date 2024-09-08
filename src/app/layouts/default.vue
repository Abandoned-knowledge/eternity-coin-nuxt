<script setup lang="ts">
import UpdateCategory from "~/features/Popup/UpdateCategory";
const user = useSupabaseUser();
function customIsLogin() {
  if (!user.value) navigateTo("/login");
}

onMounted(() => {
  customIsLogin();
});
</script>

<template>
  <Header class="container" />
  <main class="container mt-5 flex-grow">
    <slot />
    <UpdateCategory />
  </main>
</template>
