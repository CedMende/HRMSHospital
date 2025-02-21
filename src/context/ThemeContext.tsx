import React, { useEffect, useState, createContext, useContext } from "react";
type Theme = "light" | "dark" | "system";
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "system";
  });
  useEffect(() => {
    function updateTheme() {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      let effectiveTheme: "light" | "dark" = theme;
      if (theme === "system") {
        effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      root.classList.add(effectiveTheme);
      localStorage.setItem("theme", theme);
    }
    updateTheme();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        updateTheme();
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);
  return <ThemeContext.Provider value={{
    theme,
    setTheme
  }}>
      {children}
    </ThemeContext.Provider>;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}