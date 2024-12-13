import { NavEnum } from "@/shared/enum";
import { Layout } from "@/shared/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { DocsPages } from "./docs";

export const Routing = () => {
  const paths = [
    {
      path: NavEnum.HOME,
      element: <HomePage />,
    },
    {
      path: NavEnum.DOCS,
      element: <DocsPages />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {paths.map((el) => (
            <Route element={el.element} path={el.path} key={el.path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
