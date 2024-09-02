export const useCategoryStore = defineStore("category", () => {
  const currentCategory = ref<CategoryItem | null>(null);
  const updateCategoryIsVisible = ref<boolean>(false);

  const income = ref<CategoryItem[] | null>(null);
  const expense = ref<CategoryItem[] | null>(null);

  return { income, expense, currentCategory, updateCategoryIsVisible };
});
