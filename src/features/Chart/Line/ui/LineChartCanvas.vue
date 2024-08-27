<script setup lang="ts">
import type { Chart, ChartData, ChartDataset } from "chart.js";
import { options } from "..";
const props = defineProps<{ type: transactionType | "all" }>();
const tailwindColors = tailwindConfig.theme.colors;

const borderColor = computed(() =>
  props.type == "income" ? tailwindColors.income : tailwindColors.expense,
);

const transactionStore = useTransactionStore();

const data =
  props.type == "income"
    ? transactionStore.lineChartDataIncome
    : transactionStore.lineChartDataExpense;

const datasetItem = computed(() => {
  return {
    label: props.type,
    data: data!.map((el) => el.value),
    borderColor: borderColor.value,
  } as ChartDataset;
});

const firstDatasetItem = computed(() => {
  return {
    label: "Income",
    data: transactionStore.lineChartDataIncome!.map((el) => el.value),
    borderColor: tailwindColors.income,
  } as ChartDataset;
});

const secondDatasetItem = computed(() => {
  return {
    label: "Expense",
    data: transactionStore.lineChartDataExpense!.map((el) => el.value),
    borderColor: tailwindColors.expense,
  } as ChartDataset;
});

const isAll = computed(() => {
  return props.type == "all"
    ? [firstDatasetItem.value, secondDatasetItem.value]
    : [datasetItem.value];
});

const chartData = computed(() => {
  return {
    labels: data?.map((el) => el.date),
    datasets: isAll.value,
  } as ChartData;
});
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-5">
    <Chart type="line" :data="chartData" :options="options" />
  </div>
</template>
