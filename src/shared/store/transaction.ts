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
    const { data, error } = await $fetch("/api/transactions/get/income", {
      method: "get",
      params: {
        user_id: user.value?.id,
      },
    });

    error ? (incomeData.value = null) : (incomeData.value = <ITransactionData[]>data);
  }

  async function fetchExpense() {
    const { data, error } = await $fetch("/api/transactions/get/expense", {
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

  async function fetchDonutData(transaction_type: transactionType) {
    const { data, error } = await $fetch("/api/transactions/donut", {
      params: {
        transaction_type: transaction_type,
        user_id: user.value?.id,
      },
    });

    if (transaction_type == "income") {
      error
        ? (donutChartDataIncome.value = null)
        : (donutChartDataIncome.value = data as donutData[]);
    } else {
      error
        ? (donutChartDataExpense.value = null)
        : (donutChartDataExpense.value = data as donutData[]);
    }
  }

  async function fetchLineData(transaction_type: transactionType) {
    const { data, error } = await $fetch("/api/transactions/line", {
      params: {
        transaction_type: transaction_type,
        user_id: user.value?.id,
      },
    });

    if (transaction_type == "income") {
      error ? (lineChartDataIncome.value = null) : (lineChartDataIncome.value = data as lineData[]);
    } else {
      error
        ? (lineChartDataExpense.value = null)
        : (lineChartDataExpense.value = data as lineData[]);
    }
  }

  async function fetchAllChartData(transaction_type: transactionType) {
    if (transaction_type == "income") {
      fetchDonutData("income");
      fetchLineData("income");
    } else {
      fetchDonutData("expense");
      fetchLineData("expense");
    }
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
    dialogDeleteIsVisible,
    fetchIncome,
    fetchExpense,
    fetchAll,
    fetchDonutData,
    fetchLineData,
    fetchAllChartData,
  };
});
