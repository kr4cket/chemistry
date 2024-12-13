import { FC } from "react";
import { Link } from "react-router-dom";
import { NavEnum } from "@/shared/enum";

export const DocsFC: FC = () => {
  return (
    <div>
      <h1>Docs</h1>
      <Link to={NavEnum.HOME}>Home</Link>
    </div>
  );
};
