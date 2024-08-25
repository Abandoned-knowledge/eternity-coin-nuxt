<script setup lang="ts">
import CategoryItem from "./CategoryItem.vue";

const props = defineProps<{ type: transactionType }>();
const categoryStore = useCategoryStore();

const categories = computed(() =>
  props.type == "income" ? categoryStore.income : categoryStore.expense,
);

function clickHandle(current: clickedButton, color: string, id: number) {
  categoryStore.currentCategoryId = id;
  paintCategoryButton(current, color);
}
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <CategoryItem
      @click="clickHandle($event.target, category.color, category.category_id)"
      v-for="category in categories"
      :key="category.category_id"
      :label="category.label"
      :color="category.color"
    />
  </div>
</template>
