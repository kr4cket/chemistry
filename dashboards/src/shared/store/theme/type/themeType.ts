export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  initializeTheme: () => void;
  setTheme: (theme: Theme) => void;
}
