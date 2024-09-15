export const useDateStore = defineStore("date", () => {
  const dayjs = useDayjs();

  const start_date = ref(dayjs().startOf("month").format("MM/DD/YYYY"));
  const end_date = ref(dayjs().endOf("month").format("MM/DD/YYYY"));

  function setDay(date: Date) {
    const day = dayjs(date).date();
    start_date.value = dayjs().date(day).format("MM/DD/YYYY");
    end_date.value = dayjs().date(day).format("MM/DD/YYYY");
  }

  function setMonth(date: Date) {
    const month = dayjs(date).month();
    start_date.value = dayjs().month(month).startOf("month").format("MM/DD/YYYY");
    end_date.value = dayjs().month(month).endOf("month").format("MM/DD/YYYY");
  }
  function setYear(date: Date) {
    const year = dayjs(date).year();
    start_date.value = dayjs().year(year).startOf("year").format("MM/DD/YYYY");
    end_date.value = dayjs().year(year).endOf("year").format("MM/DD/YYYY");
  }
  function setRange(range: Date[]) {
    const firstDate = range[0];
    const secondDate = range[1];
    start_date.value = dayjs(firstDate).format("MM/DD/YYYY");
    end_date.value = dayjs(secondDate).format("MM/DD/YYYY");
  }

  return {
    start_date,
    end_date,
    setDay,
    setMonth,
    setYear,
    setRange,
  };
});
