<script setup lang="ts">
const categoryStore = useCategoryStore();
const transactionStore = useTransactionStore();
const windowStore = useWindowStore();

onMounted(() => {
  windowStore.isMobile = window.innerWidth <= 768;
  window.addEventListener("resize", function () {
    const width = this.innerWidth;
    windowStore.isMobile = width <= 768;
  });

  categoryStore.fetchExpense();
  categoryStore.fetchIncome();
  transactionStore.fetchIncome();
  transactionStore.fetchExpense();
  transactionStore.fetchAll();
  transactionStore.fetchDonutData("expense");
  transactionStore.fetchDonutData("income");
  transactionStore.fetchLineData("expense");
  transactionStore.fetchLineData("income");
});
</script>

<template>
  <Toast />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
