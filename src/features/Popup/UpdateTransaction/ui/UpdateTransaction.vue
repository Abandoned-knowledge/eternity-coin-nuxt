<script setup lang="ts">
import Categories from "./Categories.vue";

const transactionStore = useTransactionStore();
const categoryStore = useCategoryStore();
const type = computed(() => transactionStore.currentTransaction?.categories.type);

const toast = useToast();
function showToast(severity: primeVueSeverity, msg: string) {
  toast.add({ severity: severity, detail: msg, life: 2000 });
}

const defaultValue = computed(() => transactionStore.currentTransaction?.value || "New label");
const defaultDate = computed(() => transactionStore.currentTransaction?.date || "New date");
const defaultDescription = computed(
  () => transactionStore.currentTransaction?.description || "New description",
);

const newValue = ref();
const newDescription = ref();
const newDate = ref();

async function updateTransaction(id?: string) {
  const error = await $fetch(
    `/api/transactions/update/${transactionStore.currentTransaction?.id}`,
    {
      method: "put",
      body: {
        categoryId:
          categoryStore.currentCategory?.id || transactionStore.currentTransaction?.categories.id,
        value: newValue.value || defaultValue.value,
        description: newDescription.value || "",
        date: newDate.value || defaultDate.value,
      },
    },
  );

  if (error) {
    showToast("error", "error");
  } else {
    showToast("success", "Transaction is updated");
    if (transactionStore.currentTransaction?.categories.type == "income") {
      transactionStore.fetchAllChartData("income");
    } else {
      transactionStore.fetchAllChartData("expense");
    }
    transactionStore.fetchTransactions('all');
    transactionStore.dialogUpdateIsVisible = false;
  }
}

function handleClose(value: boolean) {
  if (!value) {
    transactionStore.currentTransaction = null;
    categoryStore.currentCategory = null;
  }
}
</script>

<template>
  <Dialog
    header="Update transaction"
    v-model:visible="transactionStore.dialogUpdateIsVisible"
    modal
    class="custom-dialog"
    @update:visible="handleClose"
  >
    <form @submit.prevent="updateTransaction(transactionStore.currentTransaction?.id)" class="form">
      <FloatLabel class="w-full">
        <InputNumber class="w-full" id="label" v-model="newValue" :use-grouping="false" :min="0" />
        <label for="label">{{ defaultValue }}</label>
      </FloatLabel>

      <FloatLabel class="w-full">
        <InputText id="label" v-model="newDescription" />
        <label for="label">{{ defaultDescription }}</label>
      </FloatLabel>

      <FloatLabel>
        <DatePicker
          v-model="newDate"
          date-format="dd/mm/yy"
          inputId="new_date"
          showIcon
          iconDisplay="input"
        />
        <label for="new_date">{{ defaultDate }}</label>
      </FloatLabel>

      <div>
        <p>Select the new category</p>
        <Categories :type="type" />
      </div>

      <Button label="Update" severity="contrast" size="small" type="submit" />
    </form>
  </Dialog>
</template>
