import { FC } from "react";
import { Link } from "react-router-dom";
import { NavEnum } from "@/shared/enum";

export const HomeFC: FC = () => {
  return (
    <div>
      <h1>Main page</h1>
      <Link to={NavEnum.DOCS}>Docs</Link>
    </div>
  );
};
