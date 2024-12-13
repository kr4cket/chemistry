import { lazy } from "react";

export const DocsPages = lazy(() =>
  import("./ui/index").then((m) => ({ default: m.DocsFC })),
);
