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
  <FrameLayout :title="title">
    <div class="flex flex-wrap gap-1">
      <CategoryItem
        @click="clickHandle(cat)"
        v-for="cat in categories"
        :key="`${cat.label} - ${cat.color}`"
        :label="cat.label"
        :color="cat.color"
      />
    </div>
  </FrameLayout>
</template>
