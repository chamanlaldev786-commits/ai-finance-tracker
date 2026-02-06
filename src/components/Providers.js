"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { ExpenseProvider } from "@/context/ExpenseContext";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <ExpenseProvider>
        {children}
      </ExpenseProvider>
    </ThemeProvider>
  );
}
