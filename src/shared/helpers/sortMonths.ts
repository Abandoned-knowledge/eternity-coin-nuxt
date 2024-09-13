export default function (arr: string[]) {
  const monthOrder = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return arr.sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
}
