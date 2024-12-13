import "./style/global.css";
import { Suspense } from "react";
import { Routing } from "@/page";

export const App = () => {
  return (
    <Suspense>
      <Routing />
    </Suspense>
  );
};
