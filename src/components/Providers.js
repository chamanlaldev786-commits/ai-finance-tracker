"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { ExpenseProvider } from "@/context/ExpenseContext";
import { AuthProvider } from "@/context/AuthContext";
export function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ExpenseProvider>
          {children}
        </ExpenseProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
