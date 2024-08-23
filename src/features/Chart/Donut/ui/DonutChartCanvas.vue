<script setup lang="ts">
import { options, plugins, data } from "..";
import type { ChartData } from "chart.js";

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
  <Chart type="doughnut" :data="chartData" :options="options" :plugins="plugins" />
</template>
