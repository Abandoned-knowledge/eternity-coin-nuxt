<script setup lang="ts">
import AllCategories from "./AllCategories.vue";
import CreateCategory from "./CreateCategory.vue";

const categoryStore = useCategoryStore();

const incomeEmpty = computed(() => categoryStore.income == null);
const expenseEmpty = computed(() => categoryStore.expense == null);
</script>

<template>
  <div class="flex flex-col gap-5 md:flex-row">
    <AllCategories type="income" class="flex-grow md:w-1/2" v-if="!incomeEmpty" />
    <AllCategories type="expense" class="flex-grow md:w-1/2" v-if="!expenseEmpty" />
  </div>

  <CreateCategory class="mt-5 w-full" />
</template>
