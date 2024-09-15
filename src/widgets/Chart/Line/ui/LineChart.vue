<script setup lang="ts">
const props = defineProps<{ type: transactionType | "all" }>();
import Canvas from "@/features/Chart/Line";
import EmptyLineFrame from "./EmptyLineFrame.vue";

const transactionStore = useTransactionStore();

const isEmpty = computed(() => {
  if (props.type == "income") {
    return transactionStore.lineChartDataIncome?.length === 0;
  } else if (props.type == "expense") {
    return transactionStore.lineChartDataExpense?.length === 0;
  } else {
    return transactionStore.lineChartDataIncome?.length === 0 && transactionStore.lineChartDataExpense?.length === 0;
  }
});
</script>

<template>
  <FrameLayout :title="props.type">
    <EmptyLineFrame v-if="isEmpty" />
    <Canvas :type="props.type" v-else />
  </FrameLayout>
</template>
