<script setup lang="ts">
import CategoryItem from './CategoryItem.vue';

const props = defineProps<{ type: transactionType }>();
const title = computed(() => `All ${props.type} categories`);
const categoryStore = useCategoryStore();

const categories = computed(() =>
  props.type == "income" ? categoryStore.income : categoryStore.expense,
);

function clickHandle(current: clickedButton, color: string, category: CategoryItem) {
  categoryStore.currentCategory = category;
  categoryStore.updateCategoryIsVisible = true;
  paintCategoryButton(current, color);
}
</script>

<template>
  <FrameLayout :title="title">
    <div class="flex flex-wrap gap-1">
      <CategoryItem
        @click="clickHandle($event.target, category.color, category)"
        v-for="category in categories"
        :key="category.category_id"
        :label="category.label"
        :color="category.color"
      />
    </div>
  </FrameLayout>
</template>

<style lang="scss" scoped></style>
