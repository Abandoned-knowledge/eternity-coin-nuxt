<script setup lang="ts">
import type { ChartData } from "chart.js";
import { options } from "..";
const props = defineProps<{ type: transactionType }>();
const tailwindColors = tailwindConfig.theme.colors;

const borderColor = computed(() =>
  props.type == "income" ? tailwindColors.income : tailwindColors.expense,
);

const transactionStore = useTransactionStore();

const data = props.type == 'income' ? transactionStore.lineChartDataIncome : transactionStore.lineChartDataExpense;

const chartData = computed(() => {
  return {
    labels: data?.map(el => el.date),
    datasets: [
      {
        label: props.type,
        data: data?.map(el => el.value),
        borderColor: borderColor.value,
      },
    ],
  } as ChartData;
});
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-5">
    <Chart type="line" :data="chartData" :options="options" />
  </div>
</template>
