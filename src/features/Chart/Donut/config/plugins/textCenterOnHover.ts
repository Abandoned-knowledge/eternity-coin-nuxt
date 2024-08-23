import { type Plugin } from "chart.js";

const plugin: Plugin = {
  id: "textCenterOnHover",
  afterDraw(chart) {
    const { ctx } = chart;
    const xCoord = chart.getDatasetMeta(0).data[0].x;
    const yCoord = chart.getDatasetMeta(0).data[0].y;
    const id = chart.getActiveElements()[0]?.index;
    ctx.save();

    const values = chart.data.datasets[0].data;
    const fontSize = 40;
    const fontDevide = 2;
    const fontFamily = "Jost";
    let label = "Total";
    let totalValue: number = values.reduce((acc: number, curr) => acc + Number(curr), 0);
    let value: number = totalValue;
    let percent: string = "100%";

    ctx.textAlign = "center";

    if (chart.getActiveElements().length > 0 && chart.data.labels) {
      label = String(chart.data.labels[id]);
      value = Number(chart.data.datasets[0].data[id]);
      percent = getPercent(value, totalValue);
    }

    ctx.fillStyle = String(tailwindConfig.theme.colors.gray);
    ctx.font = `${fontSize / fontDevide}px ${fontFamily}`;
    ctx.fillText(`${label}`, xCoord, yCoord - (fontSize / fontDevide) * 2);

    ctx.fillStyle = String(tailwindConfig.theme.colors.dark);
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.fillText(`${value}`, xCoord, yCoord);

    ctx.fillStyle = String(tailwindConfig.theme.colors.gray);
    ctx.font = `${fontSize / fontDevide}px ${fontFamily}`;
    ctx.fillText(`${percent}`, xCoord, yCoord + (fontSize / fontDevide) * 1.5);
  },
};

export default plugin;
