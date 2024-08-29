<script setup lang="ts"></script>

<template>
  <div class="flex gap-3">
    <Button label="username" severity="contrast" as="router-link" to="/profile" />
    <Button class="aspect-square" severity="danger" outlined>
      <LogOutIcon class="h-full w-full" />
    </Button>
  </div>
</template>
