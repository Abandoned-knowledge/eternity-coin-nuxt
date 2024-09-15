export const useCategoryStore = defineStore("category", () => {
  const user = useSupabaseUser();

  const currentCategory = ref<CategoryItem | null>(null);
  const income = ref<CategoryItem[] | null>(null);
  const expense = ref<CategoryItem[] | null>(null);

  const updateCategoryIsVisible = ref<boolean>(false);
  const createCategoryIsVisible = ref<boolean>(false);

  async function fetchIncome() {
    if (user.value) {
      const { data, error } = await $fetch("/api/categories", {
        params: {
          type: "income",
          user_id: user.value.id,
        },
      });
      income.value = !error && data.length > 0 ? data : null;
    }
  }

  async function fetchExpense() {
    if (user.value) {
      const { data, error } = await $fetch("/api/categories", {
        params: {
          type: "expense",
          user_id: user.value.id,
        },
      });
      expense.value = !error && data.length > 0 ? data : null;
    }
  }

  return {
    income,
    expense,
    currentCategory,
    updateCategoryIsVisible,
    createCategoryIsVisible,
    fetchIncome,
    fetchExpense,
  };
});
