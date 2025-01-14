import { useEffect, useState } from "react";

import { Table } from "@/shared/ui/table";

import { BodyTable } from "./bodyTable";
import { HeadTable } from "./headTable";
import { PaginationTable } from "./paginationTable";
import { tableData } from "../model";
import { TableDataItem } from "../model/type";

export const DbTable = () => {
  const itemsPage = 15;
  const [record, setRecord] = useState<Array<TableDataItem>>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setRecord(tableData);
  }, []);

  const totalItems = record.length;
  const totalPages = Math.ceil(totalItems / itemsPage);
  const displayedPosts = record.slice(
    (currentPage - 1) * itemsPage,
    currentPage * itemsPage,
  );

  return (
    <>
      <div className="w-full max-w-full overflow-x-scroll">
        <Table className="w-full table-auto border-collapse border">
          <HeadTable />

          <BodyTable data={displayedPosts} />
        </Table>
      </div>

      <PaginationTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};
