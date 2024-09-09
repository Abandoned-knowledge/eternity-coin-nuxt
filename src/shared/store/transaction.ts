export const useTransactionStore = defineStore("transaction", () => {
  const user = useSupabaseUser();

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

  return {
    donutChartDataExpense,
    donutChartDataIncome,
    lineChartDataIncome,
    lineChartDataExpense,
    incomeData,
    expenseData,
    allData,
    fetchIncome,
    fetchExpense,
  };
});
