export const useCategoryStore = defineStore("category", () => {
  const userStore = useUserStore();

  const currentCategory = ref<CategoryItem | null>(null);
  const updateCategoryIsVisible = ref<boolean>(false);
  const income = ref<CategoryItem[] | null>(null);
  const expense = ref<CategoryItem[] | null>(null);

  async function fetchIncome() {
    if (userStore.user) {
      const { data, error } = await $fetch(
        `/api/categories/income?user_id=${userStore.user.user_id}`,
      );
      income.value = !error && data.length > 0 ? data : null;
    }
  }

  async function fetchExpense() {
    if (userStore.user) {
      const { data, error } = await $fetch(
        `/api/categories/expense?user_id=${userStore.user.user_id}`,
      );
      expense.value = !error && data.length > 0 ? data : null;
    }
  }

  return {
    income,
    expense,
    currentCategory,
    updateCategoryIsVisible,
    fetchIncome,
    fetchExpense,
  };
});
