import { useThemeStore } from "@/shared/store/theme";
import * as echarts from "echarts";
import { FC, useEffect, useRef } from "react";

type TData = {
  value: number;
  name: string;
};

interface PropsPieChart {
  title: string;
  data: Array<TData>;
}

export const PieChart: FC<PropsPieChart> = ({ title, data }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeStore();

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      title: {
        text: title,
        left: "center",
        textStyle: {
          color: theme === "light" ? "#111827" : "#f3f4f6",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        textStyle: {
          color: theme === "light" ? "#111827" : "#f3f4f6",
        },
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
            },
          },
          data: data,
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [theme]);

  return <div ref={chartRef} style={{ width: "700px", height: "500px" }}></div>;
};
