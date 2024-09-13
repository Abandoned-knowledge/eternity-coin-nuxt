<script setup lang="ts">
const props = defineProps<{ type: transactionType }>();
const categoryStore = useCategoryStore();

const categories = computed(() =>
  props.type == "income" ? categoryStore.income : categoryStore.expense,
);

function clickHandle(current: clickedButton, color: string, category: CategoryItem) {
  categoryStore.currentCategory = category;
  paintCategoryButton(current, color);
}
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <CategoryItem
      outlined
      @click="clickHandle($event.target, category.color, category)"
      v-for="category in categories"
      :key="`${category.label} -${category.color}`"
      :label="category.label"
      :color="category.color"
    />
  </div>
</template>
