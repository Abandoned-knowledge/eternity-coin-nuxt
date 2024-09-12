<script setup lang="ts">
import { options, plugins } from "..";
import type { ChartData } from "chart.js";
import CategoryList from "./CategoryList.vue";
const props = defineProps<{ type: transactionType }>();

const transactionStore = useTransactionStore();
const data = computed(() =>
  props.type == "income"
    ? transactionStore.donutChartDataIncome
    : transactionStore.donutChartDataExpense,
);

const chartData = computed(() => {
  return {
    labels: data.value ? data.value.map((el) => el.label) : [],
    datasets: [
      {
        data: data.value ? data.value.map((el) => el.value) : [],
        backgroundColor: data.value ? data.value.map((el) => el.color) : [],
      },
    ],
  } as ChartData;
});
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-5">
    <Chart type="doughnut" :data="chartData" :options="options" :plugins="plugins" />
    <!-- <CategoryList :data="data" /> -->
  </div>
</template>
