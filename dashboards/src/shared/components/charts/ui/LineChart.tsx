import * as echarts from "echarts";
import { FC, useEffect, useRef } from "react";

import { useThemeStore } from "@/shared/store/theme";

interface PropsLineChart {
  title: string;
  xAxisData: Array<string | number>;
  yAxisCategory: Array<string>;
}

export const LineChart: FC<PropsLineChart> = ({
  title,
  xAxisData,
  yAxisCategory,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeStore();

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      title: {
        text: title,
        textStyle: {
          color: theme === "light" ? "#111827" : "#f3f4f6",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        textStyle: {
          color: theme === "light" ? "#111827" : "#f3f4f6",
        },
        backgroundColor: theme === "light" ? "#f3f4f6" : "#1f2937",
      },
      xAxis: {
        type: "value",
        axisLabel: {
          color: theme === "light" ? "#111827" : "#f3f4f6",
        },
      },
      yAxis: {
        type: "category",
        data: yAxisCategory,
        axisLabel: {
          color: theme === "light" ? "#111827" : "#f3f4f6",
        },
      },
      series: [
        {
          data: xAxisData,
          type: "bar",
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [theme]);

  return <div ref={chartRef} style={{ width: "600px", height: "500px" }}></div>;
};
