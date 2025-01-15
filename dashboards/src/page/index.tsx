import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { paths } from "@/shared/config";
import { Layout } from "@/app/layout";

const createRouter = () =>
  createBrowserRouter([
    {
      path: paths.app.dashboards.path,
      element: <Layout />,
      children: [
        {
          path: paths.app.dashboards.path,
          lazy: async () => {
            const dashboard = await import("./dashboards/index");
            return { element: <dashboard.default /> };
          },
        },

        {
          path: paths.app.update.path,
          lazy: async () => {
            const update = await import("./update/index");
            return { element: <update.default /> };
          },
        },

        {
          path: paths.app.data.path,
          lazy: async () => {
            const data = await import("./dataTable/index");
            return { element: <data.default /> };
          },
        },

        {
          path: "*",
          lazy: async () => {
            const notFound = await import("./notFound/index");
            return { element: <notFound.default /> };
          },
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createRouter();

  return <RouterProvider router={router} />;
};
