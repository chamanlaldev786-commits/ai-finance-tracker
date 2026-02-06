"use client";

import { useState } from "react";
import { useExpenses } from "@/hooks/useExpenses";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function AddExpensePage() {
  const { addExpense } = useExpenses();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setError("");
    setSuccess(false);

    // ✅ VALIDATION
    if (!title || !amount) {
      setError("Title and amount are required");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Amount must be greater than zero");
      return;
    }

    // ✅ SAVE EXPENSE
    try {
      setLoading(true);

      addExpense({
        title,
        amount: Number(amount),
        category,
        date: new Date().toISOString(),
      });

      setTitle("");
      setAmount("");
      setCategory("Food");
      setSuccess(true);
    } catch {
      setError("Failed to save expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl animate-fadeIn">
      {/* HEADER */}
      <div className="space-y-2 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Add New Expense
        </h2>
        <p className="text-gray-600 text-sm opacity-90">
          Keep track of every rupee you spend
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-red-100 text-red-600 border-l-4 border-red-500 p-3 rounded-lg text-sm animate-fadeIn">
          {error}
        </div>
      )}

      {/* SUCCESS */}
      {success && (
        <div className="bg-green-100 text-green-600 border-l-4 border-green-500 p-3 rounded-lg text-sm animate-fadeIn">
          Expense added successfully
        </div>
      )}

      {/* INPUTS */}
      <Input
        placeholder="Expense title (e.g. Grocery)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="w-full p-3 rounded-xl bg-white/30 backdrop-blur-md outline-none shadow-inner transition focus:ring-2 focus:ring-purple-300"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Entertainment</option>
        <option>Bills</option>
      </select>

      {/* BUTTON */}
      <Button onClick={submit} disabled={loading} className="w-full">
        {loading ? "Saving..." : "Save Expense"}
      </Button>

      {/* INFO */}
      <p className="text-xs text-center text-gray-500 opacity-80">
        Data is stored locally • Frontend-only demo
      </p>
    </div>
  );
}
