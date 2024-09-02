export const useTransactionStore = defineStore("transaction", () => {
  const donutChartDataIncome = ref<donutData[] | null>(null);
  const donutChartDataExpense = ref<donutData[] | null>(null);
  const lineChartDataIncome = ref<lineData[] | null>(null);
  const lineChartDataExpense = ref<lineData[] | null>(null);
  const incomeData = ref<ITransactionData[] | null>(null);
  const expenseData = ref<ITransactionData[] | null>(null);
  const allData = ref<ITransactionData[] | null>(null);

  return {
    donutChartDataExpense,
    donutChartDataIncome,
    lineChartDataIncome,
    lineChartDataExpense,
    incomeData,
    expenseData,
    allData,
  };
});
