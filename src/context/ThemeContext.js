"use client";

import { createContext, useContext, useState } from "react";

// ✅ Create the Theme Context
const ThemeContext = createContext();

// ✅ Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ Custom Hook to use the Theme Context
export function useTheme() {
  return useContext(ThemeContext);
}
