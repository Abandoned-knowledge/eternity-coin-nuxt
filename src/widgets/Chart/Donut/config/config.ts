import type { ChartOptions } from "chart.js";
import textCenterOnHover from "./plugins/textCenterOnHover";
export const plugins = [textCenterOnHover];

export const options: ChartOptions = {
  interaction: { mode: "index" },
  onHover(event, elements) {
    const chartElement = event.native?.target as HTMLElement;
    const activeElement = elements[0];
    chartElement.style.cursor = activeElement ? "pointer" : "auto";
  },
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
