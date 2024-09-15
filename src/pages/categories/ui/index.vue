<script setup lang="ts">
import AllCategories from "./AllCategories.vue";
const categoryStore = useCategoryStore();

const incomeEmpty = computed(() => categoryStore.income == null);
const expenseEmpty = computed(() => categoryStore.expense == null);
</script>

<template>
  <div class="flex flex-col items-center gap-10">
    <div class="flex w-full flex-col gap-5 md:flex-row">
      <AllCategories type="income" class="flex-grow md:w-1/2" v-if="!incomeEmpty" />
      <AllCategories type="expense" class="flex-grow md:w-1/2" v-if="!expenseEmpty" />
    </div>

    <Button @click="categoryStore.createCategoryIsVisible = true" severity="contrast" label="Create the new category" />
  </div>
</template>
