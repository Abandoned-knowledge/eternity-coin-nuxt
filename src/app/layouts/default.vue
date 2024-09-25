<script setup lang="ts">
import UpdateCategory from "~/features/Popup/UpdateCategory";
import DeleteTransaction from "~/features/Popup/DeleteTransaction";
import UpdateTransaction from "~/features/Popup/UpdateTransaction";
import CreateCategory from "~/features/Popup/CreateCategory";
const categoryStore = useCategoryStore();
const transactionStore = useTransactionStore();
categoryStore.fetchExpense();
categoryStore.fetchIncome();
transactionStore.fetchTransactions("income");
transactionStore.fetchTransactions("expense");
transactionStore.fetchTransactions("all");
transactionStore.fetchDonutData("expense");
transactionStore.fetchDonutData("income");
transactionStore.fetchLineData("expense");
transactionStore.fetchLineData("income");
</script>

<template>
  <Header class="container" />
  <main class="container mt-5 flex-grow">
    <slot />
    <CreateCategory />
    <UpdateCategory />
    <UpdateTransaction />
    <DeleteTransaction />
  </main>
</template>
