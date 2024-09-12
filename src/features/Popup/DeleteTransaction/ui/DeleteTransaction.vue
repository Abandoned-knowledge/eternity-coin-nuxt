<script setup lang="ts">
const transactionStore = useTransactionStore();
const toast = useToast();
function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

async function deleteTransaction(id?: string) {
  if (id) {
    const error = await $fetch(`/api/transactions/delete/${id}`, {
      method: "delete",
    });
    if (error) {
      showToast("error", "error");
    } else {
      showToast("success", "Delete transaction");

      if (transactionStore.currentTransaction?.categories.type == "income") {
        transactionStore.fetchIncome();
        transactionStore.fetchAllChartData("income");
      } else {
        transactionStore.fetchExpense();
        transactionStore.fetchAllChartData("expense");
      }
      transactionStore.fetchAll();
      transactionStore.dialogDeleteIsVisible = false;
    }
  }
}
</script>

<template>
  <Dialog
    header="Delete transaction"
    v-model:visible="transactionStore.dialogDeleteIsVisible"
    modal
  >
    <p>Are you sure want to delete current transaction?</p>

    <div class="mt-10 flex justify-center gap-4">
      <Button
        @click="deleteTransaction(transactionStore.currentTransaction?.id)"
        label="Delete"
        severity="danger"
        size="small"
      />
      <Button
        @click="transactionStore.dialogDeleteIsVisible = false"
        label="Cancel"
        severity="contrast"
        size="small"
      />
    </div>
  </Dialog>
</template>
