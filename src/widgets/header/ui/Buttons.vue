<script setup lang="ts">
const userStore = useUserStore();

const label = computed(() => (userStore.user ? userStore.user.name : "none"));
</script>

<template>
  <div class="flex gap-3">
    <Button :label="label" severity="contrast" as="router-link" to="/profile" />
    <Button class="aspect-square" severity="danger" outlined>
      <LogOutIcon @click="userStore.logOut" class="h-full w-full" />
    </Button>
  </div>
</template>
