import { create } from "zustand";
import { ThemeState, Theme } from "./type/themeType";

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark",
  initializeTheme: () => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      set({ theme: savedTheme });
    }
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
  setTheme: (theme: Theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
