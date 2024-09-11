<script setup lang="ts">
const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) return navigateTo("/");
  },
  { immediate: true },
);

definePageMeta({
  layout: "clear",
});
</script>

<template>
  <div>
    <p>Redirecting...</p>
  </div>
</template>
