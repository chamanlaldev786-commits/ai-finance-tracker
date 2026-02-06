"use client";

import { createContext, useContext, useState } from "react";

// ✅ Create the Expense Context
export const ExpenseContext = createContext();

// ✅ Provider Component
export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  // Remove an expense by ID
  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

// ✅ Custom Hook to use the Expense Context
export function useExpenses() {
  return useContext(ExpenseContext);
}
