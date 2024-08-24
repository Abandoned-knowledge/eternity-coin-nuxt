<script setup lang="ts">
import { data } from "..";
</script>

<template>
  <div class="data-list">
    <div v-for="item in data" class="data-list__item">
      <span class="uppercase" :style="{ color: item.color }"> {{ item.label }} </span>
      <span>{{ item.data }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-list {
  @apply grid grid-cols-2;
  gap: 10px 50px;

  &__item {
    @apply flex items-center justify-between font-medium;
  }
}
</style>
