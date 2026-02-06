"use client";

import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/dateHelpers";

export default function ExpenseCard({ expense }) {
  const categoryKey = String(expense.category || "other").toLowerCase();
  const categoryColors = {
    food: "bg-yellow-200 text-yellow-700",
    transport: "bg-blue-200 text-blue-700",
    shopping: "bg-pink-200 text-pink-700",
    entertainment: "bg-purple-200 text-purple-700",
    bills: "bg-green-200 text-green-700",
    investment: "bg-teal-200 text-teal-700",
    other: "bg-gray-200 text-gray-700",
  };

  const categoryClass = categoryColors[categoryKey] || categoryColors.other;
  const displayCategory = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

  return (
    <div className="card flex justify-between items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
      <div className="space-y-1">
        <h4 className="font-semibold text-lg text-white">
          {expense.title}
        </h4>
        <p className="text-xs text-gray-400 flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded-full text-[0.65rem] font-medium ${categoryClass}`}>
            {displayCategory}
          </span>
          • {formatDate(expense.date)}
        </p>
      </div>

      <span className="font-bold text-lg text-white">
        {formatCurrency(expense.amount)}
      </span>
    </div>
  );
}
