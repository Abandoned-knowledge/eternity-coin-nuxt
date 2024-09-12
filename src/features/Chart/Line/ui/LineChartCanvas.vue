<script setup lang="ts">
import type { ChartData, ChartDataset } from "chart.js";
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
    data: data ? data.map((el) => el.value) : [],
    borderColor: borderColor.value,
  } as ChartDataset;
});

const firstDatasetItem = computed(() => {
  return {
    label: "Income",
    data: transactionStore.lineChartDataIncome
      ? transactionStore.lineChartDataIncome.map((el) => el.value)
      : [],
    borderColor: tailwindColors.income,
  } as ChartDataset;
});

const secondDatasetItem = computed(() => {
  return {
    label: "Expense",
    data: transactionStore.lineChartDataExpense
      ? transactionStore.lineChartDataExpense.map((el) => el.value)
      : [],
    borderColor: tailwindColors.expense,
  } as ChartDataset;
});

const isAllLabels = computed(() => {
  if (props.type == "all") {
    const incomeLabels = transactionStore.lineChartDataIncome
      ? transactionStore.lineChartDataIncome.map((el) => el.month_name)
      : [];
    const expenseLabels = transactionStore.lineChartDataExpense
      ? transactionStore.lineChartDataExpense.map((el) => el.month_name)
      : [];
    const summaryLabels = [...incomeLabels, ...expenseLabels];
    return [...new Set(summaryLabels)];
  } else {
    return data ? data.map((el) => el.month_name) : [];
  }
});

const isAllDatasets = computed(() => {
  return props.type == "all"
    ? [firstDatasetItem.value, secondDatasetItem.value]
    : [datasetItem.value];
});

const chartData = computed(() => {
  return {
    labels: isAllLabels.value,
    datasets: isAllDatasets.value,
  } as ChartData;
});
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-5">
    <Chart type="line" :data="chartData" :options="options" />
  </div>
</template>
