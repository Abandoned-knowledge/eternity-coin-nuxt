import type { ChartOptions } from "chart.js";
import textCenterOnHover from "./plugins/textCenterOnHover";
export const plugins = [textCenterOnHover];

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  datasets: {
    doughnut: {
      borderRadius: 100,
      weight: 10,
      spacing: 5,
      cutout: "85%",
    },
  },
};
