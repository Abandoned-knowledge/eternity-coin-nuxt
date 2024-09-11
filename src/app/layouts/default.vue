<script setup lang="ts">
import UpdateCategory from "~/features/Popup/UpdateCategory";
import DeleteTransaction from "~/features/Popup/DeleteTransaction";
const user = useSupabaseUser();

function customIsLogin() {
  if (!user.value) navigateTo("/login");
}
</script>

<template>
  <Header class="container" />
  <main class="container mt-5 flex-grow">
    <slot />
    <UpdateCategory />
    <DeleteTransaction />
  </main>
</template>
