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

  return { donutChartDataExpense, donutChartDataIncome };
});
