<script setup lang="ts">
import EmptyTableFrame from "./EmptyTableFrame.vue";

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

const isEmpty = computed(() => {
  if (props.type == "income") {
    return transactionStore.incomeData == null;
  } else if (props.type == "expense") {
    return transactionStore.expenseData == null;
  } else {
    return transactionStore.allData == null;
  }
});
</script>

<template>
  <FrameLayout>
    <EmptyTableFrame v-if="isEmpty" />
    <DataTable
      v-else
      striped-rows
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :value="data"
    >
      <Column field="date" header="Date" sortable/>
      <Column field="value" header="Value" sortable/>
      <Column field="categories.label" header="Category" class="flex justify-center" sortable>
        <template #body="slotProps">
          <CategoryItem
            :color="slotProps.data.categories.color"
            :label="slotProps.data.categories.label"
            :key="`${slotProps.data.categories.label} - ${slotProps.data.categories.color}`"
          />
        </template>
      </Column>
    </DataTable>
  </FrameLayout>
</template>
