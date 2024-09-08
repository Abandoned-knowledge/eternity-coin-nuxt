<script setup lang="ts">
const user = useSupabaseUser();
const categoryStore = useCategoryStore();
const transactionStore = useTransactionStore();
const windowStore = useWindowStore();

watch(user, () => {
  categoryStore.fetchExpense();
  categoryStore.fetchIncome();
});

onMounted(() => {
  windowStore.isMobile = window.innerWidth <= 768;
  window.addEventListener("resize", function () {
    const width = this.innerWidth;
    windowStore.isMobile = width <= 768;
  });
});
</script>

<template>
  <Toast />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
