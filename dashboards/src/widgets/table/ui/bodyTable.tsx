import { FC } from "react";
import { TableBody, TableRow, TableCell } from "@/shared/ui/table";
import { TableDataItem } from "../model/type";

interface PropsBodyable {
  data: Array<TableDataItem>;
}

export const BodyTable: FC<PropsBodyable> = ({ data }) => {
  return (
    <TableBody>
      {data.map((el) => (
        <TableRow key={el.formula} className="divide-x">
          <TableCell>{el.formula}</TableCell>
          <TableCell>{el.type}</TableCell>
          <TableCell>{el.activity}</TableCell>
          <TableCell>{el.Syngony}</TableCell>
          <TableCell>{el.shape}</TableCell>
          <TableCell>{el["width, nm"]}</TableCell>
          <TableCell>{el["depth, nm"]}</TableCell>
          <TableCell>{el.Sufrace}</TableCell>
          <TableCell>{el.surface}</TableCell>
          <TableCell>{el.pol}</TableCell>
          <TableCell>{el.surf}</TableCell>
          <TableCell>{el["Mw(coat), g/mol"]}</TableCell>
          <TableCell>{el["Km, mM"]}</TableCell>
          <TableCell>{el["Vmax, mM/s"]}</TableCell>
          <TableCell>{el.ReactionType}</TableCell>
          <TableCell>{el.Subtype}</TableCell>
          <TableCell>{el["C min, mM"]}</TableCell>
          <TableCell>{el["C max, mM"]}</TableCell>
          <TableCell>{el["C(const), mM"]}</TableCell>
          <TableCell>{el["Ccat(mg/mL)"]}</TableCell>
          <TableCell>{el.ph}</TableCell>
          <TableCell>{el["temp, °C"]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
