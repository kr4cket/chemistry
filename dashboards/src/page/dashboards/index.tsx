import { LineChart, PieChart } from "@/shared/components/charts";
import { LayoutDashboard } from "lucide-react";

const Dashboards = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <LayoutDashboard size={24} strokeWidth={1} />
        <h4 className="text-4xl font-bold">Дашборды</h4>
      </div>

      <div className="flex flex-col md:flex-row items-start">
        <LineChart
          title={"Сравнение активности согласно типу его реакции"}
          yAxisCategory={["bime", "bime salt", "bimeo", "comp"]}
          xAxisData={[1000, 2403, 3311, 1002]}
        />

        <PieChart
          title="Наиболее часто встречающиеся реакции"
          data={[
            { value: 90, name: "TMB" },
            { value: 10, name: "TMB + GSH" },
            { value: 540, name: "H2O21 + ABTS" },
            { value: 720, name: "H2O2 + ODP" },
            { value: 900, name: "H2O2 3+ TMB" },
            { value: 90, name: "TMB4" },
            { value: 10, name: "TMB5 + GSH" },
            { value: 540, name: "H2O26 + ABTS" },
            { value: 720, name: "H2O27 + ODP" },
            { value: 900, name: "H2O28 + TMB" },
            { value: 90, name: "TMB9" },
            { value: 10, name: "TMB10 + GSH" },
            { value: 540, name: "H2O211 + ABTS" },
            { value: 720, name: "H2O212 + ODP" },
            { value: 900, name: "H2O213 + TMB" },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboards;
