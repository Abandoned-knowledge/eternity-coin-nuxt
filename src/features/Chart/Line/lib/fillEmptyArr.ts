export function fillEmptyArr(monthsArr: string[], arr: lineData[], property: "month_name" | "value") {
  for (let i = 0; i < monthsArr.length; i++) {
    const monthName = monthsArr[i];
    const currElement = arr[i]?.[property];

    if (monthName !== currElement) {
      const el: lineData = {
        month_name: monthName,
        value: 0,
      };
      arr.splice(i, 0, el);
    }
  }
  return arr;
}
