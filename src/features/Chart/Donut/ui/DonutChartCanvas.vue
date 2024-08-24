<script setup lang="ts">
import { options, plugins, data } from "..";
import type { ChartData } from "chart.js";
import CategoryList from "./CategoryList.vue";

const chartData = computed(() => {
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        label: "Sales",
        data: data.map((el) => el.data),
        backgroundColor: data.map((el) => el.color),
      },
    ],
  } as ChartData;
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <Chart type="doughnut" :data="chartData" :options="options" :plugins="plugins" />
    <CategoryList />
  </div>
</template>
