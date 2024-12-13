import { lazy } from "react";

export const HomePage = lazy(() =>
  import("./ui/index").then((m) => ({ default: m.HomeFC })),
);
