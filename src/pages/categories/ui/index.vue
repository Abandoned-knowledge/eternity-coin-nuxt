<script setup lang="ts">
import AllCategories from "./AllCategories.vue";
import CreateCategory from "./CreateCategory.vue";
</script>

<template>
  <div class="mt-5 flex flex-col gap-5 md:flex-row">
    <AllCategories type="income" class="md:w-1/2" />
    <AllCategories type="expense" class="md:w-1/2" />
  </div>

  <CreateCategory class="w-full mt-5" />
</template>
