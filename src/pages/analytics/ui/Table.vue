<script setup lang="ts">
const props = defineProps<{ type: transactionType | "all" }>();
const transactionStore = useTransactionStore();
const data = computed(() => {
  if (props.type == "income") {
    return transactionStore.incomeData;
  } else if (props.type == "expense") {
    return transactionStore.expenseData;
  } else {
    return transactionStore.allData;
  }
});
</script>

<template>
  <FrameLayout>
    <DataTable striped-rows paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" :value="data">
      <Column sortable field="date" header="Date" />
      <Column sortable field="value" header="Value" />
      <Column sortable field="category.label" header="Category" class="flex justify-center">
        <template #body="slotProps">
          <CategoryItem
            :color="slotProps.data.category.color"
            :label="slotProps.data.category.label"
          />
        </template>
      </Column>
    </DataTable>
  </FrameLayout>
</template>
