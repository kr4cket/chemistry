import { LayoutDashboard, Upload, Database } from "lucide-react";
import { paths } from "@/shared/config";

export const navMap = [
  {
    name: "Дашборды",
    to: paths.app.dashboards.path,
    icon: <LayoutDashboard size={16} strokeWidth={1} />,
  },

  {
    name: "Обновить данные",
    to: paths.app.update.path,
    icon: <Upload size={16} strokeWidth={1} />,
  },
  {
    name: "База данных",
    to: paths.app.data.path,
    icon: <Database size={16} strokeWidth={1} />,
  },
];
