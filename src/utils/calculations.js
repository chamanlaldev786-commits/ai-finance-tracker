// Total expenses (safe + scalable)
export const totalExpenses = (expenses = []) => {
  return expenses.reduce(
    (sum, expense) => sum + Number(expense.amount || 0),
    0
  );
};

// Expenses grouped by category (chart-ready)
export const expensesByCategory = (expenses = []) => {
  const categoryMap = expenses.reduce((acc, expense) => {
    const category = expense.category || "Other";
    acc[category] = (acc[category] || 0) + Number(expense.amount || 0);
    return acc;
  }, {});

  return Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));
};
