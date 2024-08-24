export const useCategoryStore = defineStore("category", () => {
  const income = ref<CategoryItem[] | null>([
    { category_id: 1, label: "Заработная плата", color: "#FF6B6B" },
    { category_id: 2, label: "Фриланс", color: "#FFC300" },
    { category_id: 3, label: "Инвестиции", color: "#6BCB77" },
    { category_id: 4, label: "Аренда недвижимости", color: "#A663CC" },
    { category_id: 5, label: "Пассивный доход", color: "#4D96FF" },
    { category_id: 6, label: "Продажа товаров", color: "#FF9671" },
    { category_id: 7, label: "Консультации", color: "#FFDD83" },
    { category_id: 8, label: "Краудфандинг", color: "#B5EAD7" },
    { category_id: 9, label: "Государственные пособия", color: "#FFA5AB" },
    { category_id: 10, label: "Роялти", color: "#9DE0AD" },
  ]);

  const expense = ref<CategoryItem[] | null>([
    { category_id: 1, label: "Спорт", color: "#FF6B6B" },
    { category_id: 2, label: "Путешествия", color: "#FFC300" },
    { category_id: 3, label: "Технологии", color: "#6BCB77" },
    { category_id: 4, label: "Искусство", color: "#A663CC" },
    { category_id: 5, label: "Бизнес", color: "#4D96FF" },
    { category_id: 6, label: "Здоровье", color: "#FF9671" },
    { category_id: 7, label: "Образование", color: "#FFDD83" },
    { category_id: 8, label: "Развлечения", color: "#B5EAD7" },
    { category_id: 9, label: "Еда", color: "#FFA5AB" },
    { category_id: 10, label: "Природа", color: "#9DE0AD" },
  ]);

  return { income, expense };
});
