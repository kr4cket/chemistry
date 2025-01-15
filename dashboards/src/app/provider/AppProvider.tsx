import { FC, PropsWithChildren, Suspense, useEffect } from "react";
import { useThemeStore } from "@/shared/store/theme";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
    }
  }, [theme]);

  return <Suspense>{children}</Suspense>;
};
