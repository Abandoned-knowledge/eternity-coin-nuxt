<script setup lang="ts">
const props = defineProps<{ data: donutData[] }>();
</script>

<template>
  <div class="data-list">
    <div v-for="item in props.data" class="data-list__item">
      <span class="uppercase" :style="{ color: item.color }"> {{ item.label }} </span>
      <span>{{ item.value }}</span>
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
