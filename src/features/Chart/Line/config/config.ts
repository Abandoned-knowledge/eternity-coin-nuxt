import type { ChartOptions } from "chart.js";
export const plugins = [];

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },

  datasets: {
    line: {
      tension: 0.4,
    },
  },
};
