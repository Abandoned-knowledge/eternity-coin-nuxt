export const useTransactionStore = defineStore("transaction", () => {
  const user = useSupabaseUser();
  const dialogDeleteIsVisible = ref(false);
  const currentTransaction = ref<ITransactionData | null>(null);

  const donutChartDataIncome = ref<donutData[] | null>(null);
  const donutChartDataExpense = ref<donutData[] | null>(null);
  const lineChartDataIncome = ref<lineData[] | null>(null);
  const lineChartDataExpense = ref<lineData[] | null>(null);
  const incomeData = ref<ITransactionData[] | null>(null);
  const expenseData = ref<ITransactionData[] | null>(null);
  const allData = ref<ITransactionData[] | null>(null);

  async function fetchIncome() {
    const { data, error } = await $fetch("/api/transactions/income", {
      method: "get",
      params: {
        user_id: user.value?.id,
      },
    });

    error ? (incomeData.value = null) : (incomeData.value = <ITransactionData[]>data);
  }

  async function fetchExpense() {
    const { data, error } = await $fetch("/api/transactions/expense", {
      method: "get",
      params: {
        user_id: user.value?.id,
      },
    });

    error ? (expenseData.value = null) : (expenseData.value = <ITransactionData[]>data);
  }

  async function fetchAll() {
    const { data, error } = await $fetch("/api/transactions", {
      method: "get",
      params: {
        user_id: user.value?.id,
      },
    });

    error ? (allData.value = null) : (allData.value = <ITransactionData[]>data);
  }

  return {
    currentTransaction,
    donutChartDataExpense,
    donutChartDataIncome,
    lineChartDataIncome,
    lineChartDataExpense,
    incomeData,
    expenseData,
    allData,
    fetchIncome,
    fetchExpense,
    fetchAll,
    dialogDeleteIsVisible,
  };
});
