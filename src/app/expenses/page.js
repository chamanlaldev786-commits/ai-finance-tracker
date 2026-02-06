"use client";

import { useMemo, useState } from "react";
import { useExpenses } from "@/hooks/useExpenses";
import ExpenseCard from "@/components/cards/ExpenseCard";
import { formatCurrency } from "@/utils/formatCurrency";
import { totalExpenses } from "@/utils/calculations";

export default function ExpensesPage() {
  const { expenses } = useExpenses();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

  // ✅ SEARCH + SORT LOGIC
  const filteredExpenses = useMemo(() => {
    let list = [...expenses];

    if (search) {
      list = list.filter((e) =>
        e.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "latest") {
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (sort === "amount") {
      list.sort((a, b) => b.amount - a.amount);
    }

    return list;
  }, [expenses, search, sort]);

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg animate-fadeIn">
        <h2 className="text-2xl font-bold text-indigo-700">
          Expense History
        </h2>
        <p className="text-gray-600 opacity-90">
          Track, search, and analyze every transaction
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-col md:flex-row gap-4 animate-fadeIn">
        <input
          placeholder="Search expenses..."
          className="bg-white/20 backdrop-blur-md p-3 rounded-xl outline-none flex-1 shadow-inner placeholder-gray-500 transition focus:ring-2 focus:ring-purple-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="bg-white/20 backdrop-blur-md p-3 rounded-xl outline-none shadow-inner transition focus:ring-2 focus:ring-purple-300"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="amount">Highest Amount</option>
        </select>
      </div>

      {/* SUMMARY */}
      <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4 rounded-2xl shadow-lg flex justify-between items-center animate-fadeInUp">
        <p className="text-sm text-gray-600">Total Spent</p>
        <p className="text-xl font-bold text-indigo-700">
          {formatCurrency(totalExpenses(filteredExpenses))}
        </p>
      </div>

      {/* LIST */}
      {filteredExpenses.length === 0 ? (
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center text-gray-500 animate-fadeIn">
          No expenses found
        </div>
      ) : (
        <div className="space-y-4">
          {filteredExpenses.map((exp) => (
            <ExpenseCard key={exp.id} expense={exp} className="animate-fadeInUp" />
          ))}
        </div>
      )}
    </div>
  );
}
