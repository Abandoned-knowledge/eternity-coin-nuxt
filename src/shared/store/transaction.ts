import type { donutData } from "../types/chart";

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

  return { donutChartDataExpense, donutChartDataIncome, lineChartDataIncome, lineChartDataExpense };
});
