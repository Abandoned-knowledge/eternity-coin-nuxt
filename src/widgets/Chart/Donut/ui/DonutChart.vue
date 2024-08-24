<script setup lang="ts">
import emptyChartFrame from "./emptyChartFrame.vue";
import Canvas from "@/features/Chart/Donut";
const props = defineProps<{ type: transactionType }>();

const transactionStore = useTransactionStore();

function checkIsEmpty(type: transactionType): boolean {
  return type == "income"
    ? transactionStore.donutChartDataIncome == null
    : transactionStore.donutChartDataExpense == null;
}

const isEmpty = ref<boolean>(checkIsEmpty(props.type));
watch(transactionStore, () => (isEmpty.value = checkIsEmpty(props.type)));
</script>

<template>
  <FrameLayout :title="props.type">
    <emptyChartFrame v-if="isEmpty" />
    <Canvas :type="props.type" v-else />
  </FrameLayout>
</template>
