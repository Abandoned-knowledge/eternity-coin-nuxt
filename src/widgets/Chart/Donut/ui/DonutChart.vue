<script setup lang="ts">
import emptyChartFrame from "./emptyChartFrame.vue";
import Canvas from "@/features/Chart/Donut";
const props = defineProps<{ type: transactionType }>();

const transactionStore = useTransactionStore();

const isEmpty = computed(() => {
  return props.type == "income"
    ? transactionStore.donutChartDataIncome == null
    : transactionStore.donutChartDataExpense == null;
});
</script>

<template>
  <FrameLayout :title="props.type">
    <emptyChartFrame v-if="isEmpty" />
    <Canvas :type="props.type" v-else />
  </FrameLayout>
</template>
