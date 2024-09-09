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
});
</script>

<template>
  <Toast />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
