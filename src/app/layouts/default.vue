<script setup lang="ts">
import UpdateCategory from "~/features/Popup/UpdateCategory";
import DeleteTransaction from "~/features/Popup/DeleteTransaction";
import UpdateTransaction from "~/features/Popup/UpdateTransaction";
import CreateCategory from "~/features/Popup/CreateCategory";
const user = useSupabaseUser();

function customIsLogin() {
  if (!user.value) navigateTo("/login");
}
</script>

<template>
  <Header class="container" />
  <main class="container mt-5 flex-grow">
    <slot />
    <CreateCategory />
    <UpdateCategory />
    <UpdateTransaction />
    <DeleteTransaction />
  </main>
</template>
