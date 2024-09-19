<script setup lang="ts">
import type { ChartData } from "chart.js";
import { options, fillEmptyArr } from "..";

const props = defineProps<{ type: transactionType | "all" }>();
const tailwindColors = tailwindConfig.theme.colors;
const transactionStore = useTransactionStore();
const borderColor = computed(() => (props.type == "income" ? tailwindColors.income : tailwindColors.expense));

const data = computed(() => {
  if (props.type == "income") {
    return transactionStore.lineChartDataIncome;
  } else if (props.type == "expense") {
    return transactionStore.lineChartDataExpense;
  } else {
    return <lineData[]>[];
  }
});

const singleChartData = computed(() => {
  return {
    labels: data.value?.map((el) => el.month_name) || [],
    datasets: [
      {
        label: props.type,
        data: data.value?.map((el) => el.value) || [],
        borderColor: borderColor.value,
      },
    ],
  } as ChartData;
});

const chartData = computed(() => {
  if (props.type == "all") {
    const incomeMonths = computed(() => transactionStore.lineChartDataIncome?.map((el) => el.month_name) || []);
    const expenseMonths = computed(() => transactionStore.lineChartDataExpense?.map((el) => el.month_name) || []);
    const months = computed(() => sortMonths(removeDuplicates([...incomeMonths.value, ...expenseMonths.value])));

    const incomeArr = [...(transactionStore.lineChartDataIncome || [])];
    const incomeValues = fillEmptyArr(months.value, incomeArr, "month_name").map((el) => el.value);

    const expenseArr = [...(transactionStore.lineChartDataExpense || [])];
    const expenseValues = fillEmptyArr(months.value, expenseArr, "month_name").map((el) => el.value);

    return {
      labels: months.value,
      datasets: [
        {
          data: incomeValues,
          borderColor: tailwindColors.income,
        },
        {
          data: expenseValues,
          borderColor: tailwindColors.expense,
        },
      ],
    } as ChartData;
  } else {
    return singleChartData.value;
  }
});
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-5">
    <Chart type="line" :data="chartData" :options="options" />
  </div>
</template>
