<script setup lang="ts">
const props = defineProps<{ type: transactionType }>();
const title = computed(() => `All ${props.type} categories`);
const categoryStore = useCategoryStore();

const categories = computed(() =>
  props.type == "income" ? categoryStore.income : categoryStore.expense,
);

function clickHandle(category: CategoryItem) {
  categoryStore.currentCategory = category;
  categoryStore.updateCategoryIsVisible = true;
}
</script>

<template>
  <FrameLayout :title="title" v-if="categories">
    <div class="flex flex-wrap gap-1">
      <CategoryItem
        @click="clickHandle(category)"
        v-for="category in categories"
        :key="category.category_id"
        :label="category.label"
        :color="category.color"
      />
    </div>
  </FrameLayout>
</template>

<style lang="scss" scoped></style>
