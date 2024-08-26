import type { donutData } from "../types/chart";
import type { ITransactionData } from "../types/transaction";

export const useTransactionStore = defineStore("transaction", () => {
  const donutChartDataIncome = ref<donutData[] | null>([
    { label: "Зарплата", value: 1500, color: "#2ECC71" },
    { label: "Фриланс", value: 800, color: "#3498DB" },
    { label: "Инвестиции", value: 400, color: "#F1C40F" },
    { label: "Продажа товаров", value: 600, color: "#E67E22" },
    { label: "Аренда", value: 1200, color: "#9B59B6" },
    { label: "Подарки", value: 300, color: "#FF5733" },
    { label: "Дополнительные доходы", value: 250, color: "#8E44AD" },
    { label: "Проценты по вкладам", value: 100, color: "#FF8C00" },
    { label: "Криптовалюты", value: 700, color: "#2C3E50" },
    { label: "Консультации", value: 500, color: "#E74C3C" },
    { label: "Зарплата", value: 1500, color: "#2ECC71" },
    { label: "Фриланс", value: 800, color: "#3498DB" },
    { label: "Инвестиции", value: 400, color: "#F1C40F" },
    { label: "Продажа товаров", value: 600, color: "#E67E22" },
    { label: "Аренда", value: 1200, color: "#9B59B6" },
    { label: "Подарки", value: 300, color: "#FF5733" },
    { label: "Дополнительные доходы", value: 250, color: "#8E44AD" },
    { label: "Проценты по вкладам", value: 100, color: "#FF8C00" },
    { label: "Криптовалюты", value: 700, color: "#2C3E50" },
    { label: "Консультации", value: 500, color: "#E74C3C" },
  ]);

  const donutChartDataExpense = ref<donutData[] | null>([
    { label: "Продукты", value: 250, color: "#FF5733" },
    { label: "Транспорт", value: 80, color: "#33FF57" },
    { label: "Коммунальные услуги", value: 150, color: "#3357FF" },
    { label: "Развлечения", value: 200, color: "#F1C40F" },
    { label: "Одежда", value: 120, color: "#8E44AD" },
    { label: "Здоровье", value: 300, color: "#E67E22" },
    { label: "Образование", value: 400, color: "#2ECC71" },
    { label: "Кафе и рестораны", value: 90, color: "#3498DB" },
    { label: "Путешествия", value: 500, color: "#9B59B6" },
    { label: "Домашние животные", value: 60, color: "#E74C3C" },
  ]);

  const lineChartDataIncome = ref<lineData[] | null>([
    { date: "2024-08-01", value: 25 },
    { date: "2024-08-02", value: 42 },
    { date: "2024-08-03", value: 18 },
    { date: "2024-08-04", value: 37 },
    { date: "2024-08-05", value: 29 },
    { date: "2024-08-06", value: 51 },
    { date: "2024-08-07", value: 14 },
    { date: "2024-08-08", value: 33 },
    { date: "2024-08-09", value: 27 },
    { date: "2024-08-10", value: 46 },
    { date: "2024-08-11", value: 22 },
    { date: "2024-08-12", value: 39 },
    { date: "2024-08-13", value: 31 },
    { date: "2024-08-14", value: 48 },
    { date: "2024-08-15", value: 19 },
    { date: "2024-08-16", value: 35 },
    { date: "2024-08-17", value: 24 },
    { date: "2024-08-18", value: 43 },
    { date: "2024-08-19", value: 28 },
    { date: "2024-08-20", value: 50 },
  ]);

  const lineChartDataExpense = ref<lineData[] | null>([
    { date: "2024-09-10", value: 15 },
    { date: "2024-09-11", value: 88 },
    { date: "2024-09-12", value: 42 },
    { date: "2024-09-13", value: 67 },
    { date: "2024-09-14", value: 33 },
    { date: "2024-09-15", value: 54 },
    { date: "2024-09-16", value: 92 },
    { date: "2024-09-17", value: 11 },
    { date: "2024-09-18", value: 76 },
    { date: "2024-09-19", value: 29 },
    { date: "2024-09-20", value: 101 },
    { date: "2024-09-21", value: 45 },
    { date: "2024-09-22", value: 84 },
    { date: "2024-09-23", value: 39 },
    { date: "2024-09-24", value: 58 },
    { date: "2024-09-25", value: 23 },
    { date: "2024-09-26", value: 95 },
    { date: "2024-09-27", value: 34 },
    { date: "2024-09-28", value: 73 },
    { date: "2024-09-29", value: 66 },
  ]);

  const incomeData = ref<ITransactionData[] | null>([
    {
      transaction_id: 1,
      user_id: 101,
      date: "2024-08-01",
      value: 1500,
      category: { category_id: 1, label: "Salary", color: "#4CAF50" },
    },
    {
      transaction_id: 2,
      user_id: 102,
      date: "2024-08-05",
      value: 300,
      category: { category_id: 2, label: "Freelance", color: "#2196F3" },
    },
    {
      transaction_id: 3,
      user_id: 103,
      date: "2024-08-10",
      value: 450,
      category: { category_id: 3, label: "Investment", color: "#FF9800" },
    },
    {
      transaction_id: 4,
      user_id: 101,
      date: "2024-08-15",
      value: 1200,
      category: { category_id: 1, label: "Salary", color: "#4CAF50" },
    },
    {
      transaction_id: 5,
      user_id: 104,
      date: "2024-08-20",
      value: 600,
      category: { category_id: 4, label: "Gift", color: "#9C27B0" },
    },
  ]);

  const expenseData = ref<ITransactionData[] | null>([
    {
      transaction_id: 1,
      user_id: 201,
      date: "2024-08-02",
      value: 2500,
      category: { category_id: 5, label: "Consulting", color: "#FF5733" },
    },
    {
      transaction_id: 2,
      user_id: 202,
      date: "2024-08-06",
      value: 800,
      category: { category_id: 6, label: "Part-time Job", color: "#C70039" },
    },
    {
      transaction_id: 3,
      user_id: 203,
      date: "2024-08-12",
      value: 1200,
      category: { category_id: 7, label: "Sales", color: "#900C3F" },
    },
    {
      transaction_id: 4,
      user_id: 204,
      date: "2024-08-18",
      value: 1800,
      category: { category_id: 8, label: "Rental Income", color: "#581845" },
    },
    {
      transaction_id: 5,
      user_id: 205,
      date: "2024-08-22",
      value: 950,
      category: { category_id: 9, label: "Royalties", color: "#FFC300" },
    },
  ]);

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
