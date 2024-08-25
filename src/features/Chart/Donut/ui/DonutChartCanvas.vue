<script setup lang="ts">
import { options, plugins } from "..";
import type { ChartData } from "chart.js";
import CategoryList from "./CategoryList.vue";
const props = defineProps<{ type: transactionType }>();

const store = useTransactionStore();
const data = props.type == "income" ? store.donutChartDataIncome : store.donutChartDataExpense;

const chartData = computed(() => {
  return {
    labels: data?.map((el) => el.label),
    datasets: [
      {
        label: "Sales",
        data: data?.map((el) => el.value),
        backgroundColor: data?.map((el) => el.color),
      },
    ],
  } as ChartData;
});
</script>

<template>
  <div class="flex flex-col gap-5 justify-between h-full">
    <Chart type="doughnut" :data="chartData" :options="options" :plugins="plugins" />
    <!-- <CategoryList :data="data" /> -->
  </div>
</template>
