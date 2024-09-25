<script setup lang="ts">
import EmptyTableFrame from "./EmptyTableFrame.vue";

const props = defineProps<{ type: transactionType | "all" }>();
const transactionStore = useTransactionStore();
const data = computed(() => {
  if (props.type == "income") {
    return transactionStore.incomeData || [];
  } else if (props.type == "expense") {
    return transactionStore.expenseData || [];
  } else {
    return transactionStore.allData || [];
  }
});

const user = useSupabaseUser();

const isEmpty = computed(() => {
  if (props.type == "income") {
    return transactionStore.incomeData == null;
  } else if (props.type == "expense") {
    return transactionStore.expenseData == null;
  } else {
    return transactionStore.allData == null;
  }
});

function setTransaction(transaction: ITransactionData, action: "edit" | "delete") {
  transactionStore.currentTransaction = transaction;
  action == "delete"
    ? (transactionStore.dialogDeleteIsVisible = true)
    : (transactionStore.dialogUpdateIsVisible = true);
}
</script>

<template>
  <FrameLayout class="overflow-hidden rounded !px-2 !py-0">
    <EmptyTableFrame v-if="isEmpty" />
    <DataTable size="small" v-else striped-rows :value="data">
      <Column field="date" header="Date" sortable />
      <Column field="value" header="Value" sortable />
      <Column ort-field="categories.label" header="Category" sortable>
        <template #body="slotProps">
          <CategoryItem
            :color="slotProps.data.categories.color"
            :label="slotProps.data.categories.label"
            :key="`${slotProps.data.categories.label} - ${slotProps.data.categories.color}`"
          />
        </template>
      </Column>
      <Column field="description" header="Description" />
      <Column class="w-[120px]" header="Action">
        <template #body="slotProps">
          <div class="flex gap-3">
            <Button size="small" severity="danger" outlined @click="setTransaction(slotProps.data, 'delete')">
              <DeleteIcon />
            </Button>

            <Button size="small" severity="help" outlined @click="setTransaction(slotProps.data, 'edit')">
              <EditIcon />
            </Button>
          </div>
        </template>
      </Column>
    </DataTable>
  </FrameLayout>
</template>
