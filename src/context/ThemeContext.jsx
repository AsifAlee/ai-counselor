"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // load saved theme or system preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) {
        setTheme(saved);
        document.documentElement.classList.toggle("dark", saved === "dark");
      } else {
        // optional: follow system preference
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = prefersDark ? "dark" : "light";
        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
      }
    } catch (e) {
      console.warn("Theme init error", e);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
