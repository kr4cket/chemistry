import { Database } from "lucide-react";

import { DbTable } from "@/widgets/table";

const DataTable = () => {
  return (
    <main>
      <div className="flex items-center gap-4 mb-6">
        <Database size={32} strokeWidth={1} />
        <h4 className="text-4xl font-bold">База данных</h4>
      </div>
      <DbTable />
    </main>
  );
};

export default DataTable;
