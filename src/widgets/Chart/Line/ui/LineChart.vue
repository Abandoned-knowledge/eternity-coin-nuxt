<script setup lang="ts">
const props = defineProps<{ type: transactionType | "all" }>();
import Canvas from "@/features/Chart/Line";
import EmptyLineFrame from "./EmptyLineFrame.vue";

const transactionStore = useTransactionStore();

const isEmpty = computed(() => {
  if (props.type == "income") {
    return transactionStore.lineChartDataIncome == null;
  } else if (props.type == "expense") {
    return transactionStore.lineChartDataExpense == null;
  } else {
    return transactionStore.lineChartDataIncome == null && transactionStore.lineChartDataExpense == null;
  }
});
</script>

<template>
  <FrameLayout :title="props.type">
    <EmptyLineFrame v-if="isEmpty" />
    <Canvas :type="props.type" v-else />
  </FrameLayout>
</template>
