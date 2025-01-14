import { TableHead, TableHeader, TableRow } from "@/shared/ui/table";
import { tableHead } from "../model";

export const HeadTable = () => {
  // todo -> переделать key на описание

  return (
    <TableHeader>
      <TableRow className="divide-x">
        {tableHead.map((el) => (
          <TableHead key={el.id}>
            <span className={"text-xs"}> {el.name}</span>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};
