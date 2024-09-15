<script setup lang="ts">
const props = defineProps<{ data: donutData[] }>();
const totalValue = computed(() => props.data.reduce((acc, curr) => acc + Number(curr.value), 0));
</script>

<template>
  <div>
    <div v-for="item in props.data" class="flex items-center justify-between font-medium">
      <span class="uppercase" :style="{ color: item.color }"> {{ item.label }} </span>
      <p>
        <span class="text-gray">{{ getPercent(item.value, totalValue) }}</span>
        <span class="ml-10">{{ item.value }}</span>
      </p>
    </div>
  </div>
</template>
