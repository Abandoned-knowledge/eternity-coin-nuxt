export const useTransactionStore = defineStore("transaction", () => {
  const dateStore = useDateStore();
  const user = useSupabaseUser();
  const dialogDeleteIsVisible = ref(false);
  const dialogUpdateIsVisible = ref(false);
  const currentTransaction = ref<ITransactionData | null>(null);

  const donutChartDataIncome = ref<donutData[] | null>(null);
  const donutChartDataExpense = ref<donutData[] | null>(null);
  const lineChartDataIncome = ref<lineData[] | null>(null);
  const lineChartDataExpense = ref<lineData[] | null>(null);
  const incomeData = ref<ITransactionData[] | null>(null);
  const expenseData = ref<ITransactionData[] | null>(null);
  const allData = ref<ITransactionData[] | null>(null);

  async function fetchTransactions(type: transactionType | "all") {
    if (type == "income") {
      const data = await $fetch("/api/transactions/get/income", {
        method: "get",
        params: {
          user_id: user.value?.id,
          start_date: dateStore.start_date,
          end_date: dateStore.end_date,
        },
      });

      data.length > 0 ? (incomeData.value = data as ITransactionData[]) : null;
    } else if (type == "expense") {
      const data = await $fetch("/api/transactions/get/expense", {
        method: "get",
        params: {
          user_id: user.value?.id,
          start_date: dateStore.start_date,
          end_date: dateStore.end_date,
        },
      });

      data.length > 0 ? (expenseData.value = data as ITransactionData[]) : null;
    } else {
      const data = await $fetch("/api/transactions", {
        method: "get",
        params: {
          user_id: user.value?.id,
        },
      });

      data.length > 0 ? (allData.value = data as ITransactionData[]) : (allData.value = null);
    }
  }

  async function fetchDonutData(transaction_type: transactionType) {
    const data = await $fetch("/api/transactions/donut", {
      params: {
        transaction_type: transaction_type,
        user_id: user.value?.id,
        start_date: dateStore.start_date,
        end_date: dateStore.end_date,
      },
    });

    if (transaction_type == "income") {
      data.length > 0 ? (donutChartDataIncome.value = data) : (donutChartDataIncome.value = null);
    } else {
      data.length > 0 ? (donutChartDataExpense.value = data) : (donutChartDataExpense.value = null);
    }
  }

  async function fetchLineData(transaction_type: transactionType) {
    const data = await $fetch("/api/transactions/line", {
      params: {
        transaction_type: transaction_type,
        user_id: user.value?.id,
        start_date: dateStore.start_date,
        end_date: dateStore.end_date,
      },
    });

    if (transaction_type == "income") {
      data.length > 0 ? (lineChartDataIncome.value = data) : (lineChartDataIncome.value = null);
    } else {
      data.length > 0 ? (lineChartDataExpense.value = data) : (lineChartDataExpense.value = null);
    }
  }

  async function fetchAllChartData(transaction_type: transactionType) {
    if (transaction_type == "income") {
      fetchTransactions("income");
      fetchDonutData("income");
      fetchLineData("income");
    } else {
      fetchTransactions("expense");
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
    dialogUpdateIsVisible,
    fetchTransactions,
    fetchDonutData,
    fetchLineData,
    fetchAllChartData,
  };
});
