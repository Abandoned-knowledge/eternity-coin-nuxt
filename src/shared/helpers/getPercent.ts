export default function getPercent(current: number, total: number) {
  const result = (current / total) * 100;
  const roundedResult = Math.round(result);
  return `${roundedResult}%`;
}
