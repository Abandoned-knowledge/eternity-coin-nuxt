<script setup lang="ts">
const userStore = useUserStore();

const label = computed(() => (userStore.user ? userStore.user.name : "none"));
</script>

<template>
  <div class="flex gap-3">
    <Button :label="label" severity="contrast" as="router-link" to="/profile" />
    <Button @click="userStore.logOut" class="aspect-square" severity="danger" outlined>
      <LogOutIcon class="h-full w-full" />
    </Button>
  </div>
</template>
